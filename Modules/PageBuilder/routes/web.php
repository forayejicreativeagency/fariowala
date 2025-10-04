<?php

use Illuminate\Support\Facades\Route;
use Modules\PageBuilder\Http\Controllers\PageBuilderController;

Route::middleware(['auth', 'verified', 'check.module:PageBuilder'])->group(function () {
    Route::resource('pagebuilders', PageBuilderController::class)->names('pagebuilder');
});
