<?php

namespace App\Models\User;

use App\Notifications\MessageSent;
use App\Notifications\EmailVerifyNotification;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use NotificationChannels\OneSignal\OneSignalChannel;



class User extends Authenticatable
{
    use HasFactory, softDeletes, HasApiTokens, Notifiable;
    protected $table = "users";
    protected $guarded = ['id'];


    public const USER_TOKEN = 'UserToken';


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

    public function chats(): HasMany
    {
        return $this->hasMany(Chat::class, 'created_by');
    }

    public function routeNotificationForOneSignal(): array
    {
        return ['tags' => ['key' => 'userId', 'relation' => '=', 'value' =>(string)(8)]];
    }

    public function sendNewMessageNotification(array $data) : void {
        $this->notify(new MessageSent($data));
    }
  
}
