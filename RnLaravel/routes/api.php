<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ChatMessageController;
use Illuminate\Support\Facades\Broadcast;




/**
 * API VERSION 1 
 */

Route::prefix('v1')->as('v1.')->group(function(){
      
     /**
     * Authentication Route
     */
    Route::group(['prefix'=>'auth', 'as'=>'auth.user.'], function(){
        Route::post('register', [RegisterController::class, 'register'])->name('register');
        Route::post('verify_user',[RegisterController::class,'verifyEmail'])->name('verify');
        Route::post('login',[LoginController::class,'login'])->name('login');

        Route::group(['middleware'=>'auth:user'], function(){
            Route::post('login_with_token',[LoginController::class,'loginWithToken'])->name('login_with_token');
            Route::get('logout',[LoginController::class,'logout'])->name('logout');
        });

        
    });

    Route::middleware('auth:user')->group(function (){

        Route::apiResource('chat', ChatController::class)->only(['index','store','show']);
        Route::apiResource('chat_message', ChatMessageController::class)->only(['index','store']);
        Route::apiResource('user', UserController::class)->only(['index']);
    });

});






