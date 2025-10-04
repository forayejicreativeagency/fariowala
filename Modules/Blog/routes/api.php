<?php

use Illuminate\Support\Facades\Route;
use Modules\Blog\Http\Controllers\BlogController;

Route::middleware(['auth:sanctum', 'check.module:Blog'])->prefix('v1')->group(function () {
    Route::apiResource('blogs', BlogController::class)->names('blog');
});
