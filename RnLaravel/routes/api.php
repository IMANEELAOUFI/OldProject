<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\RegisterController;



/**
 * API VERSION 1
 */

Route::prefix('v1')->as('v1.')->group(function(){
      
     /**
     * Authentication Route
     */
    Route::group(['prefix'=>'auth', 'as'=>'auth.'], function(){
        Route::post('register', [RegisterController::class, 'register'])->name('user.register');
       
    });
});
