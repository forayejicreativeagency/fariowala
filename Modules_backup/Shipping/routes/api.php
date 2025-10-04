<?php

use Illuminate\Support\Facades\Route;
use Modules\Shipping\Http\Controllers\ShippingController;

Route::middleware(['auth:sanctum', 'check.module:Shipping'])->prefix('v1')->group(function () {
    Route::apiResource('shippings', ShippingController::class)->names('shipping');
});
