# Fix Module JSON Files Script
# This script cleans up all module.json files to ensure proper formatting

$modulesPath = "d:\fariawala\Modules"

Write-Host "Fixing all module.json files..."
Write-Host "=" * 50

$fixedCount = 0
$errorCount = 0

Get-ChildItem -Path $modulesPath -Directory | ForEach-Object {
    $moduleName = $_.Name
    $moduleJsonPath = Join-Path $_.FullName "module.json"

    if (Test-Path $moduleJsonPath) {
        try {
            # Read and parse JSON
            $jsonContent = Get-Content $moduleJsonPath -Raw
            $moduleData = $jsonContent | ConvertFrom-Json

            # Convert back to properly formatted JSON
            $cleanJson = $moduleData | ConvertTo-Json -Depth 10 -Compress:$false

            # Write back to file
            Set-Content -Path $moduleJsonPath -Value $cleanJson -Encoding UTF8

            Write-Host "✅ Fixed $moduleName"
            $fixedCount++
        } catch {
            Write-Host "❌ Error fixing $moduleName`: $($_.Exception.Message)"
            $errorCount++
        }
    } else {
        Write-Host "⚠️  No module.json found for $moduleName"
    }
}

Write-Host "`n" + "=" * 50
Write-Host "Summary:"
Write-Host "✅ Fixed files: $fixedCount"
Write-Host "❌ Errors: $errorCount"

if ($errorCount -eq 0) {
    Write-Host "`n🎉 All module.json files have been cleaned and formatted!"
} else {
    Write-Host "`n⚠️  Some files had errors. Please check them manually."
}
