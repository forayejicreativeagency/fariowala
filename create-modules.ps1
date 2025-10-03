# List of modules to create
$modules = @(
    "Product",
    "Category",
    "Cart",
    "Order",
    "Payment",
    "Shipping",
    "Inventory",
    "Customer",
    "Discount",
    "Review",
    "Wishlist",
    "Analytics",
    "Newsletter",
    "Blog"
)

# Clear modules status to prevent loading issues
Set-Content -Path "modules_statuses.json" -Value "{}"

# Create each module
foreach ($module in $modules) {
    Write-Host "Creating module: $module" -ForegroundColor Green

    try {
        & php artisan module:make $module
        Write-Host "Successfully created module: $module" -ForegroundColor Green

        # Clear cache after each module creation
        & php artisan config:clear
    }
    catch {
        Write-Host "Failed to create module: $module - $($_.Exception.Message)" -ForegroundColor Red
    }

    # Reset modules status after each creation
    Set-Content -Path "modules_statuses.json" -Value "{}"
}

Write-Host "All modules creation completed!" -ForegroundColor Cyan
