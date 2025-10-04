<?php

use Illuminate\Support\Facades\Route;
use Modules\Shipping\Http\Controllers\ShippingController;

Route::middleware(['auth', 'verified', 'check.module:Shipping'])->group(function () {
    Route::resource('shippings', ShippingController::class)->names('shipping');
});
