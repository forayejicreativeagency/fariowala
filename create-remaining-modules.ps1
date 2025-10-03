# Create remaining modules
$modules = @(
    "FraudChecker",
    "Settings",
    "Auth"
)

# Reset modules status file
'{}' | Out-File -FilePath "modules_statuses.json" -Encoding utf8 -NoNewline

foreach ($module in $modules) {
    Write-Host "Creating module: $module" -ForegroundColor Green

    try {
        # Reset status file before each creation
        '{}' | Out-File -FilePath "modules_statuses.json" -Encoding utf8 -NoNewline

        # Create module
        & php artisan module:make $module

        Write-Host "Successfully created module: $module" -ForegroundColor Green

        # Reset status file after creation
        '{}' | Out-File -FilePath "modules_statuses.json" -Encoding utf8 -NoNewline

        Start-Sleep -Seconds 1
    }
    catch {
        Write-Host "Failed to create module: $module - $($_.Exception.Message)" -ForegroundColor Red

        # Reset status file on error
        '{}' | Out-File -FilePath "modules_statuses.json" -Encoding utf8 -NoNewline
    }
}

Write-Host "Module creation process completed!" -ForegroundColor Cyan
