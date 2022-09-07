<?php

use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\User;
        $user->name = 'admin';
        $user->email = 'cleaningapp@gmail.com';
        $user->password = \Hash::make('cleaningapp@123');
        $user->role = "admin";
        $user->gps_position = "12.34.233";
        $user->gender = "male";
        $user->company = "SmartIT";
        $user->mobile_number = 2569857412;
        $user->language = 2;
        $user->country = 2;
        $user->status = 1 ;
        $user->dob = '2022-04-27';
        $user->join_date = '2022-04-27';
        $user->last_seen = 11-13-03 ;
        $user->mobile_number = 2569857412;
        $user->save();
    }
}
