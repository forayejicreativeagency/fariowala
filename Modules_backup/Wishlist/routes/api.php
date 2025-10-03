<?php

use Illuminate\Support\Facades\Route;
use Modules\Wishlist\Http\Controllers\WishlistController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('wishlists', WishlistController::class)->names('wishlist');
});
