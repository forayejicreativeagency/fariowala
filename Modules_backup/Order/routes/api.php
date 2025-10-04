<?php

use Illuminate\Support\Facades\Route;
use Modules\Order\Http\Controllers\OrderController;

Route::middleware(['auth:sanctum', 'check.module:Order'])->prefix('v1')->group(function () {
    Route::apiResource('orders', OrderController::class)->names('order');
});
