<?php

use Illuminate\Support\Facades\Route;
use Modules\Blog\Http\Controllers\BlogController;

Route::middleware(['auth', 'verified', 'check.module:Blog'])->group(function () {
    Route::resource('blogs', BlogController::class)->names('blog');
});
