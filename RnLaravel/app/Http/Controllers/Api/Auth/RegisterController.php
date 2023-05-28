<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\RegisterRequest;
use App\Models\User\User;
use App\Services\UserService;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\VerifyEmailRequest;
use App\Models\User\SmsVerification;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\User\UserResource;

class RegisterController extends Controller
{
    /**
     * Register a new user.
     *
     * @param RegisterRequest $request
     * @param UserService $service
     * @return Response
     */
    public function register(RegisterRequest $request, UserService $service): Response
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);
        $user = User::create($data);
        
        $service->addUserSmsConfirmationCode($user);
        
       return response()->json([
            'success' => true,
            'message' => 'Verification code has been sent to your email.',
            'user' => $user,
        ], 200);
    }


     /**
     * verify email
     * @param VerifyEmailRequest $request
     * @param UserService $service
     * @return Response
     */

    public function verifyEmail(VerifyEmailRequest $request, UserService $service) : Response{

         
        $validated = $service->validateVerifyEmailRequest($request);
        if(!$validated['status']){
            return $this->errorMsg($validated['message']);
        }

        //4. update user to verified
        $user = $validated['user'];
        $user->verified_at = now();
        $user->save();

        //5. remove sms code from table
        $validated['sms']->delete();

        //6. authorized the token back to response
        $token = $user->createToken(User::USER_TOKEN);
        return $this->successWithMsg([
            'accessToken'=>$token->accessToken,
            'user'=>$user
        ],'user_verified');
    }
}
