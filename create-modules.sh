#!/bin/bash

# List of modules to create
modules=(
    "Product"
    "Category"
    "Cart"
    "Order"
    "Payment"
    "Shipping"
    "Inventory"
    "Customer"
    "Discount"
    "Review"
    "Wishlist"
    "Analytics"
    "Newsletter"
    "Blog"
)

# Create each module
for module in "${modules[@]}"; do
    echo "Creating module: $module"
    php artisan module:make "$module"

    # Disable the module after creation to prevent auto-loading issues
    php artisan module:disable "$module"
done

echo "All modules created successfully!"
