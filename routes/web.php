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
   Route::delete('service_provider/delete/{id}', 'AdminController@delete_service_provider')->name('service_provider/delete');
   Route::get('view-service-provider/{id}', 'AdminController@view_service_provider')->name('view-service-provider');
   Route::get('add-services', 'AdminController@add_services')->name('add-services');
   Route::post('store-service', 'AdminController@store_services')->name('store-service');
   Route::get('edit-service/{id}', 'AdminController@edit_service')->name('edit-service');
   Route::put('update-service/{id}', 'AdminController@update_service')->name('update-service');
   Route::delete('delete-service/{id}', 'AdminController@delete_service')->name('delete-service');
   Route::get('service', 'AdminController@add_services')->name('service');

   
   Route::get('my-post', 'AdminController@myPost')->name('my-post');
   



});
