<?php


use Illuminate\Database\Seeder;
use Faker\Generator as Faker;


class ContactUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\ContactUs::class, 20)->create()->each(function ($book) {
            $book->save();
        });
    }
}
