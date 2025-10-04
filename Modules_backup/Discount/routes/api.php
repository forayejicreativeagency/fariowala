<?php

use Illuminate\Support\Facades\Route;
use Modules\Discount\Http\Controllers\DiscountController;

Route::middleware(['auth:sanctum', 'check.module:Discount'])->prefix('v1')->group(function () {
    Route::apiResource('discounts', DiscountController::class)->names('discount');
});
