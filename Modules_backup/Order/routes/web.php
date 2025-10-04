<?php

use Illuminate\Support\Facades\Route;
use Modules\Order\Http\Controllers\OrderController;

Route::middleware(['auth', 'verified', 'check.module:Order'])->group(function () {
    Route::resource('orders', OrderController::class)->names('order');
});
