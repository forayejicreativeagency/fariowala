<?php

use Illuminate\Support\Facades\Route;
use Modules\Payment\Http\Controllers\PaymentController;

Route::middleware(['auth:sanctum', 'check.module:Payment'])->prefix('v1')->group(function () {
    Route::apiResource('payments', PaymentController::class)->names('payment');
});
