<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\RegisterRequest;
use App\Models\User\User;
use App\Services\UserService;
use Symfony\Component\HttpFoundation\Response;

class RegisterController extends Controller
{

    /**
     * register new user
     * @param RegisterRequest $request
     * @param UserService $service
     * @return Response
     */
    public function register(RegisterRequest $request, UserService $service): Response{

        $data = $request->validated();
        $user = User::create($data);
        
        $service->addUserSmsConfirmationCode($user);
       

        return $this->successWithMsg($user, 'sms_code_send');
       

    }

    
}
