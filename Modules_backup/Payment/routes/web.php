<?php

use Illuminate\Support\Facades\Route;
use Modules\Payment\Http\Controllers\PaymentController;

Route::middleware(['auth', 'verified', 'check.module:Payment'])->group(function () {
    Route::resource('payments', PaymentController::class)->names('payment');
});
