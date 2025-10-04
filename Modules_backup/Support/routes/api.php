<?php

use Illuminate\Support\Facades\Route;
use Modules\Support\Http\Controllers\SupportController;

Route::middleware(['auth:sanctum', 'check.module:Support'])->prefix('v1')->group(function () {
    Route::apiResource('supports', SupportController::class)->names('support');
});
