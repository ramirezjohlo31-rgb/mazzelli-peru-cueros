# Publica el proyecto en GitHub y activa GitHub Pages en un solo paso.
#
# Uso:  npm run publish
#    o: powershell -NoProfile -ExecutionPolicy Bypass -File scripts\publicar-en-github.ps1
#
# Requisitos: Git y GitHub CLI (`gh`). El script los localiza automaticamente
# aunque no esten en el PATH y te guia si falta alguno.

$ErrorActionPreference = 'Stop'

$Propietario = 'ramirezjohlo31-rgb'
$Repositorio = 'mazzelli-peru-cueros'
$UrlRepo = "https://github.com/$Propietario/$Repositorio"
$UrlSitio = "https://$Propietario.github.io/$Repositorio/"

Set-Location (Join-Path $PSScriptRoot '..')

# ── Utilidades ───────────────────────────────────────────────────────────

function Write-Paso([string]$Mensaje) {
  Write-Host ''
  Write-Host ">> $Mensaje" -ForegroundColor Cyan
}

function Write-Ok([string]$Mensaje) {
  Write-Host "   $Mensaje" -ForegroundColor Green
}

function Write-Aviso([string]$Mensaje) {
  Write-Host "   $Mensaje" -ForegroundColor DarkGray
}

# Ejecuta un comando ignorando su stderr: con $ErrorActionPreference = 'Stop',
# la salida de error de los ejecutables nativos (gh, git) abortaria el script.
function Invoke-Silencioso([scriptblock]$Bloque) {
  $previo = $ErrorActionPreference
  $ErrorActionPreference = 'Continue'
  try {
    & $Bloque *> $null
    return $LASTEXITCODE
  } finally {
    $ErrorActionPreference = $previo
  }
}

# Localiza un ejecutable en el PATH o en las rutas de instalacion habituales.
function Find-Executable([string]$Nombre, [string[]]$RutasAlternativas) {
  $cmd = Get-Command $Nombre -ErrorAction SilentlyContinue
  if ($cmd) { return $cmd.Source }

  foreach ($ruta in $RutasAlternativas) {
    if (Test-Path $ruta) { return $ruta }
  }
  return $null
}

Write-Host ''
Write-Host '  Mazzelli · Publicacion en GitHub' -ForegroundColor Yellow
Write-Host '  --------------------------------' -ForegroundColor Yellow
Write-Host ''

# ── 1. Localizar herramientas ────────────────────────────────────────────

Write-Paso 'Verificando herramientas'

$git = Find-Executable 'git' @(
  "$env:ProgramFiles\Git\cmd\git.exe",
  "${env:ProgramFiles(x86)}\Git\cmd\git.exe",
  "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe"
)
if (-not $git) {
  Write-Host '   Git no esta instalado. Descargalo desde https://git-scm.com/download/win' -ForegroundColor Red
  exit 1
}
Write-Ok "Git: $git"

$gh = Find-Executable 'gh' @(
  "$env:ProgramFiles\GitHub CLI\gh.exe",
  "${env:ProgramFiles(x86)}\GitHub CLI\gh.exe",
  "$env:LOCALAPPDATA\Programs\GitHub CLI\gh.exe"
)
if (-not $gh) {
  Write-Host '   GitHub CLI (gh) no esta instalado.' -ForegroundColor Yellow
  Write-Host '   Instalalo con:  winget install --id GitHub.cli -e --source winget' -ForegroundColor Yellow
  Write-Host '   o descargalo desde https://cli.github.com/' -ForegroundColor Yellow
  exit 1
}
Write-Ok "GitHub CLI: $gh"

# `gh` invoca a `git` por su cuenta (para leer el remoto y detectar el repo).
# Si git no esta en el PATH, gh cree que el directorio no es un repositorio.
$directorioGit = Split-Path -Parent $git
if ($env:PATH -notlike "*$directorioGit*") {
  $env:PATH = "$directorioGit;$env:PATH"
  Write-Aviso "Git anadido al PATH: $directorioGit"
}

# ── 2. Compilacion local previa ──────────────────────────────────────────

Write-Paso 'Verificando que el proyecto compila'

& npm run build
if ($LASTEXITCODE -ne 0) {
  Write-Host '   La compilacion fallo. Corrige los errores antes de publicar.' -ForegroundColor Red
  exit 1
}
Write-Ok 'Build correcto'

# ── 3. Autenticacion ─────────────────────────────────────────────────────

Write-Paso 'Verificando la sesion de GitHub'

$autenticado = $false
if ((Invoke-Silencioso { & $gh auth status }) -eq 0) { $autenticado = $true }

if (-not $autenticado) {
  Write-Host '   No hay sesion iniciada. Se abrira el navegador para iniciar sesion...' -ForegroundColor Cyan
  $ErrorActionPreference = 'Continue'
  # El scope `workflow` es obligatorio: GitHub rechaza subir .github/workflows/* sin el.
  & $gh auth login --hostname github.com --git-protocol https --web --skip-ssh-key --scopes workflow
  $ErrorActionPreference = 'Stop'
  if ($LASTEXITCODE -ne 0) {
    Write-Host '   No se pudo iniciar la sesion. Reintenta manualmente:  gh auth login' -ForegroundColor Red
    exit 1
  }
} else {
  # Sin el scope `workflow` GitHub bloquea el push de .github/workflows/*.
  $scopes = (& $gh auth status 2>&1 | Select-String -Pattern 'Token scopes' | Out-String)
  if ($scopes -notmatch "'workflow'") {
    Write-Host '   El token no tiene el scope workflow (obligatorio para subir el pipeline de Actions).' -ForegroundColor Yellow
    Write-Host '   Se abrira el navegador para ampliar los permisos...' -ForegroundColor Cyan
    $ErrorActionPreference = 'Continue'
    & $gh auth refresh -h github.com -s workflow
    $ErrorActionPreference = 'Stop'
    if ($LASTEXITCODE -ne 0) {
      Write-Host '   No se pudieron ampliar los permisos. Reintenta manualmente:' -ForegroundColor Red
      Write-Host '     gh auth refresh -h github.com -s workflow' -ForegroundColor Red
      exit 1
    }
  }
}
Write-Ok 'Sesion iniciada'

# Configura el credential helper para que git use el token de gh en los pushes.
Invoke-Silencioso { & $gh auth setup-git } | Out-Null

# ── 4. Crear el repositorio (si no existe) ──────────────────────────────

Write-Paso "Preparando el repositorio $UrlRepo"

$existe = $false
if ((Invoke-Silencioso { & $gh repo view $UrlRepo }) -eq 0) { $existe = $true }

if ($existe) {
  Write-Aviso "El repositorio ya existe: $UrlRepo"
} else {
  # `gh repo create --remote origin` falla si el remoto ya existe: lo retiramos antes.
  Invoke-Silencioso { & $git remote remove origin } | Out-Null
  Write-Host '   Creando el repositorio publico y enviando el codigo...' -ForegroundColor Cyan
  $ErrorActionPreference = 'Continue'
  & $gh repo create $UrlRepo --public --description 'Sitio web corporativo de Industrias Mazzelli-Peru Cueros E.I.R.L. - catalogo de cuero artesanal' --source . --remote origin --push
  $codigo = $LASTEXITCODE
  $ErrorActionPreference = 'Stop'
  if ($codigo -ne 0) {
    # Puede que el repo se haya creado y solo falle el push o el remoto: lo comprobamos.
    if ((Invoke-Silencioso { & $gh repo view $UrlRepo }) -eq 0) {
      Write-Aviso 'El repositorio se creo, pero el envio automatico fallo. Reintentando el push...'
      & $git remote remove origin 2>&1 | Out-Null
      & $git remote add origin $UrlRepo
    } else {
      Write-Host '   No se pudo crear el repositorio.' -ForegroundColor Red
      exit 1
    }
  } else {
    Write-Ok 'Repositorio creado y codigo enviado'
  }
}

# ── 5. Asegurar el remoto y subir las ramas ──────────────────────────────

Write-Paso 'Sincronizando el remoto'
& $git remote set-url origin $UrlRepo

$ramas = & $git branch --list develop
if (-not $ramas) { & $git branch develop | Out-Null }

Write-Aviso 'Subiendo develop...'
$ErrorActionPreference = 'Continue'
& $git push -u origin develop

Write-Aviso 'Subiendo main (esto dispara el despliegue)...'
& $git push -u origin main --tags
$ErrorActionPreference = 'Stop'

# ── 6. Activar GitHub Pages ──────────────────────────────────────────────

Write-Paso 'Activando GitHub Pages'

if ((Invoke-Silencioso { & $gh api --method POST "repos/$Propietario/$Repositorio/pages" -f build_type=workflow }) -eq 0) {
  Write-Ok 'GitHub Pages activado (build_type=workflow)'
} else {
  Write-Aviso 'Pages ya estaba activo o se activara manualmente en Settings > Pages.'
}

# ── 7. Esperar el despliegue ─────────────────────────────────────────────

Write-Paso 'Esperando el despliegue'

$runId = $null
for ($i = 0; $i -lt 30; $i++) {
  $ErrorActionPreference = 'Continue'
  $runId = (& $gh run list --repo $UrlRepo --workflow 'deploy.yml' --limit 1 --json databaseId -q '.[0].databaseId' 2>$null)
  $ErrorActionPreference = 'Stop'
  if ($runId) { break }
  Start-Sleep -Seconds 2
}

if ($runId) {
  Write-Aviso "Ejecutando el workflow #$runId (esto puede tardar 1-2 minutos)..."
  $ErrorActionPreference = 'Continue'
  & $gh run watch $runId --repo $UrlRepo --exit-status
  $codigo = $LASTEXITCODE
  $ErrorActionPreference = 'Stop'
  if ($codigo -eq 0) {
    Write-Ok 'Despliegue completado correctamente'
  } else {
    Write-Host '   El workflow fallo. Revisa la pestaña Actions del repositorio.' -ForegroundColor Red
    exit 1
  }
} else {
  Write-Aviso 'No se detecto una ejecucion del workflow. Revisa la pestaña Actions.'
}

# ── 8. Verificar el sitio publico ────────────────────────────────────────

Write-Paso 'Verificando el sitio publico'

$url = $UrlSitio
$publico = $false
for ($i = 0; $i -lt 20; $i++) {
  try {
    $respuesta = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 15
    if ($respuesta.StatusCode -eq 200) { $publico = $true; break }
  } catch {
    Start-Sleep -Seconds 5
  }
}

Write-Host ''
Write-Host '  Resultado' -ForegroundColor Yellow
Write-Host '  ----------' -ForegroundColor Yellow
Write-Host "  Repositorio : $UrlRepo"
Write-Host "  Sitio       : $url"
if ($publico) {
  Write-Host '  Estado      : ONLINE (HTTP 200)' -ForegroundColor Green
} else {
  Write-Host '  Estado      : la URL aun no responde 200. Revisa la pestaña Actions.' -ForegroundColor Yellow
}
Write-Host ''
