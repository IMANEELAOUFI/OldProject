<?php

namespace App\Observers;

use App\Models\User\SmsVerification;
use App\Models\User\User;

class EmailVerificationObserver
{
    /** 
     * @param SmsVerification $sms
     */
    public function created(SmsVerification $sms)
    {
        $user = User::Where('email', $sms->email)->first();
        $user->sendEmailVerifyCode($sms->code);
    }
}
