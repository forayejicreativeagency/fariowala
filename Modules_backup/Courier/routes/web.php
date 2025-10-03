<?php

use Illuminate\Support\Facades\Route;
use Modules\Courier\Http\Controllers\CourierController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('couriers', CourierController::class)->names('courier');
});
