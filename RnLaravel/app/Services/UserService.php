<?php

namespace App\Services;

use App\Models\User\SmsVerification;
use App\Models\User\User;
use Carbon\Carbon;


class UserService
{
    /**
     * add user sms confirmation code
     * @param User $user
     * @return SmsVerification
     */
    public function addUserSmsConfirmationCode(User $user): SmsVerification{
        $code = $this->generateUniqueSmsCode();
        return SmsVerification::create([
            'email'=>$user->email,
            'code'=>$code,
            'expired_at'=>Carbon::now()->addMinutes(5)
        ]);
        return $smsConfirmation;
    }

    
    /**
     * generate unique sms code
     * @return int
     */

     private function generateUniqueSmsCode(): int{
        $code = random_int(100000, 999999); 
        $smsCode = SmsVerification::where('code',$code)->first();
        if($smsCode === null){
            return $code;
        }
        return $this->generateUniqueSmsCode();
    }
}