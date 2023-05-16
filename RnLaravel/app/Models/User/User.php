<?php

namespace App\Models\User;

use App\Notifications\sendEmailVerifyNotification;
use App\Notifications\EmailVerifyNotification;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;


class User extends Model 
{
    use HasFactory, softDeletes, HasApiTokens, Notifiable;
    protected $table = "users";
    protected $guarded = ['id'];


    /**
     * send email verify code to user
     * @param $code
     */
    public function sendEmailVerifyCode($code) : void{
        $this->notify(new EmailVerifyNotification($code));
    }

    public function smsVerification(): HasOne{
        return $this->hasOne(SmsVerification::class,'email')->latest('created_at');
    }
  
}
