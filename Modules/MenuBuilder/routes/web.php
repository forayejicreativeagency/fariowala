<?php

use Illuminate\Support\Facades\Route;
use Modules\MenuBuilder\Http\Controllers\MenuBuilderController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('menubuilders', MenuBuilderController::class)->names('menubuilder');
});
