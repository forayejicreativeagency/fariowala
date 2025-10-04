<?php

use Illuminate\Support\Facades\Route;
use Modules\Courier\Http\Controllers\CourierController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('couriers', CourierController::class)->names('courier');
});
