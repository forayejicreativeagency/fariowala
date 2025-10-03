# Test Module JSON Files
# This script checks all module.json files for syntax errors

$modulesPath = "d:\fariawala\Modules"

Write-Host "Testing all module.json files for syntax errors..."
Write-Host "=" * 50

$errorCount = 0
$successCount = 0

Get-ChildItem -Path $modulesPath -Directory | ForEach-Object {
    $moduleName = $_.Name
    $moduleJsonPath = Join-Path $_.FullName "module.json"

    if (Test-Path $moduleJsonPath) {
        try {
            # Try to parse the JSON
            $jsonContent = Get-Content $moduleJsonPath -Raw
            $moduleData = $jsonContent | ConvertFrom-Json

            Write-Host "✅ $moduleName - JSON is valid"

            # Check if admin_menu exists
            if ($moduleData.admin_menu) {
                Write-Host "   └── Has admin_menu configuration"
            } else {
                Write-Host "   └── No admin_menu configuration"
            }

            $successCount++
        } catch {
            Write-Host "❌ $moduleName - JSON parse error: $($_.Exception.Message)"
            $errorCount++
        }
    } else {
        Write-Host "⚠️  $moduleName - No module.json found"
    }
}

Write-Host "`n" + "=" * 50
Write-Host "Summary:"
Write-Host "✅ Valid JSON files: $successCount"
Write-Host "❌ Invalid JSON files: $errorCount"

if ($errorCount -eq 0) {
    Write-Host "`n🎉 All module.json files are valid!"
} else {
    Write-Host "`n⚠️  Please fix the invalid JSON files before proceeding."
}
