# Publica el proyecto en GitHub y activa GitHub Pages en un solo paso.
#
# Uso:  powershell -NoProfile -ExecutionPolicy Bypass -File scripts\publicar-en-github.ps1
#
# Requisitos: Git y GitHub CLI (`gh`) instalados y en el PATH.
# El script te pedirà iniciar sesión en GitHub la primera vez (se abre el navegador).

$ErrorActionPreference = 'Stop'

$Propietario = 'ramirezjohlo31-rgb'
$Repositorio = 'mazzelli-peru-cueros'
$UrlRepo = "https://github.com/$Propietario/$Repositorio"

Set-Location (Join-Path $PSScriptRoot '..')

Write-Host ''
Write-Host '  Mazzelli · Publicacion en GitHub' -ForegroundColor Yellow
Write-Host '  --------------------------------' -ForegroundColor Yellow
Write-Host ''

# ── 1. Autenticación ────────────────────────────────────────────────────
$autenticado = $false
try { gh auth status *> $null; $autenticado = $true } catch { $autenticado = $false }

if (-not $autenticado) {
  Write-Host '>> No hay sesion iniciada en GitHub. Abriendo el inicio de sesion...' -ForegroundColor Cyan
  gh auth login --hostname github.com --git-protocol https --web
  Write-Host '   Sesion iniciada.' -ForegroundColor Green
}

# ── 2. Crear el repositorio (si no existe) ──────────────────────────────
$existe = $false
try { gh repo view $UrlRepo *> $null; $existe = $true } catch { $existe = $false }

if ($existe) {
  Write-Host ">> El repositorio ya existe: $UrlRepo" -ForegroundColor DarkGray
} else {
  Write-Host ">> Creando el repositorio publico $UrlRepo ..." -ForegroundColor Cyan
  gh repo create $UrlRepo --public --description 'Sitio web corporativo de Industrias Mazzelli-Peru Cueros E.I.R.L. - catalogo de cuero artesanal' --source . --remote origin --push
  Write-Host '   Repositorio creado y codigo enviado.' -ForegroundColor Green
}

# ── 3. Asegurar el remoto y subir develop ───────────────────────────────
git remote set-url origin $UrlRepo

if (-not (git branch --list develop)) { git branch develop }

Write-Host '>> Subiendo la rama develop ...' -ForegroundColor Cyan
git push -u origin develop

Write-Host '>> Subiendo la rama main (dispara el despliegue) ...' -ForegroundColor Cyan
git push -u origin main --tags

# ── 4. Activar GitHub Pages con GitHub Actions ──────────────────────────
Write-Host '>> Activando GitHub Pages (build_type=workflow) ...' -ForegroundColor Cyan
try {
  gh api --method POST "repos/$Propietario/$Repositorio/pages" -f build_type=workflow *> $null
  Write-Host '   GitHub Pages activado.' -ForegroundColor Green
} catch {
  Write-Host '   (Pages ya estaba activo o se activara manualmente en Settings > Pages).' -ForegroundColor DarkGray
}

# ── 5. Resultado ────────────────────────────────────────────────────────
Write-Host ''
Write-Host '  Listo.' -ForegroundColor Green
Write-Host "  Repositorio : $UrlRepo"
Write-Host "  Demo        : https://$Propietario.github.io/$Repositorio/"
Write-Host '  El sitio se publica en 1-2 minutos tras el push a main.' -ForegroundColor DarkGray
Write-Host ''
