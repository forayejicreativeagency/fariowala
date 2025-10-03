# Quick Fix All Module JSON Files
# This script creates minimal module.json files that Laravel Modules can read

$modulesPath = "d:\fariawala\Modules"

Write-Host "Creating minimal module.json files..."

Get-ChildItem -Path $modulesPath -Directory | ForEach-Object {
    $moduleName = $_.Name
    $moduleJsonPath = Join-Path $_.FullName "module.json"

    # Create minimal JSON structure
    $minimalModule = @{
        "name" = $moduleName
        "alias" = $moduleName.ToLower()
        "description" = "$moduleName module"
        "keywords" = @()
        "priority" = 0
        "providers" = @("Modules\$moduleName\Providers\${moduleName}ServiceProvider")
        "files" = @()
    }

    try {
        $jsonContent = $minimalModule | ConvertTo-Json -Depth 3
        Set-Content -Path $moduleJsonPath -Value $jsonContent -Encoding UTF8
        Write-Host "✅ Fixed $moduleName"
    } catch {
        Write-Host "❌ Error fixing $moduleName`: $($_.Exception.Message)"
    }
}

Write-Host "`n🎉 All module.json files fixed with minimal structure!"
