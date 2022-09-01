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
        $user->save();
    }
}
