<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
   return redirect()->route('login');
});

Auth::routes();


Route::group(['middleware' => ['admin']], function () {
   Route::get('/home', 'HomeController@index')->name('home');
   Route::get('contact_us', 'AdminController@contact_us')->name('contact_us');
   Route::delete('contact_us/delete/{id}', 'AdminController@delete_contact_us')->name('contact_us/delete');
   Route::get('all-customers', 'AdminController@all_customers')->name('all-customers');
   Route::get('customer_status/{status}/{id}', 'AdminController@customer_status')->name('customer_status');
   Route::delete('customer/delete/{id}', 'AdminController@delete_customer')->name('customer/delete');
   Route::get('view-customer/{id}', 'AdminController@view_customer')->name('view-customer');
   Route::get('all-service-providers', 'AdminController@all_service_providers')->name('all-service-providers');
   



});
