<?php

namespace App\Http\Controllers;

use App\Models\User\User;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{

    /**
     * Gets users except yourself
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        //$users = User::all();
        //return response()->json($users);
        $users = User::where('id', '!=', auth()->user()->id)->get();
        return $this->successWithMsg($users);
        
        

    }
}
