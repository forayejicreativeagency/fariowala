<?php

use Illuminate\Support\Facades\Route;
use Modules\PageBuilder\Http\Controllers\PageBuilderController;

Route::middleware(['auth:sanctum', 'check.module:PageBuilder'])->prefix('v1')->group(function () {
    Route::apiResource('pagebuilders', PageBuilderController::class)->names('pagebuilder');
});
