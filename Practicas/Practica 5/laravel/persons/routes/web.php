<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonController;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/persona', [PersonController::class, 'create']);
Route::post('/persona', [PersonController::class, 'store']);
