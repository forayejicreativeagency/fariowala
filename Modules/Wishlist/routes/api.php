<?php

use Illuminate\Support\Facades\Route;
use Modules\Wishlist\Http\Controllers\WishlistController;

Route::middleware(['auth:sanctum', 'check.module:Wishlist'])->prefix('v1')->group(function () {
    Route::apiResource('wishlists', WishlistController::class)->names('wishlist');
});
