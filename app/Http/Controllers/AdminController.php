<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function contact_us(){
        $contact_us = \App\ContactUs::get();
        return view('contact_us',compact('contact_us'));
    }

    public function delete_contact_us($id){
        $contact_us = \App\ContactUs::find($id);
        if(!is_null($contact_us)){
            $contact_us->delete(); 
            return redirect()->back()->with(['alert'=>'success','message'=>'Deleted successfully']);
        }
        else
        {
            return redirect()->back()->with(['alert'=>'danger','message'=>'Oops! Something went wrong']);  
        }
    }

    public function all_customers(){
        $all_customers = \App\User::where('role','customer')->get();
        return view('all_customers',compact('all_customers'));
    }

     public function customer_status($status, $id)
    {
        $user = \App\User::find($id);
        if(!is_null($user)){
            $user->status = $status;
            $user->save();
            return redirect()->back()->with(['alert'=>'success','message'=>'Status Updated Sucessfully']);
        }
        else
        {
            return redirect()->back()->with(['alert'=>'danger','message'=>'Oops! Something went wrong']);  
        }
       
    }

    public function delete_customer($id){
        $customer = \App\User::find($id);
        if(!is_null($customer)){
            $customer->delete(); 
            return redirect()->back()->with(['alert'=>'success','message'=>'Customer Deleted successfully']);
        }
        else
        {
            return redirect()->back()->with(['alert'=>'danger','message'=>'Oops! Something went wrong']);  
        }
    }

    public function view_customer($id){
        $customer = \App\User::find($id);
        return view('view_customer',compact('customer'));
    }

    public function all_service_providers(){
        $all_service_providers = \App\User::where('role','service_provider')->get();
        return view('all_service_providers',compact('all_service_providers'));
    }
    public function delete_service_provider($id){
        $service_provider = \App\User::find($id);
        if(!is_null($service_provider)){
            $service_provider->delete(); 
            return redirect()->back()->with(['alert'=>'success','message'=>'Service Provider Deleted successfully']);
        }
        else
        {
            return redirect()->back()->with(['alert'=>'danger','message'=>'Oops! Something went wrong']);  
        }
    }

    public function view_service_provider($id){
        $service_provider = \App\User::find($id);
        return view('view_service_provider',compact('service_provider'));
    }

    public function add_services(){
        $services = \App\Service::orderBy('id','desc')->get();
        $type = 1;
        return view('add_services',compact('type','services'));
    }
    
    public function store_services(Request $request){
        $service = new \App\Service;
        $service->service_name = $request->name;
        if ($service->save())
        {
            return redirect()->route('service')->with(['alert' => 'success', 'message' => 'Service has been Added Successfully!.']);
        }
        else
        {
            return redirect()->route('service')->with(['alert' => 'danger', 'message' => 'Service has not been Added!.']);
        }
    }
    
    public function edit_service($id)
    {
        $services = \App\Service::orderBy('id','desc')->get();
        $service =  \App\Service::find($id);
        $type = 2;
        return view('add_services',compact('services','type','service'));
    }

    public function update_service(Request $request, $id)
    {
    
        $service =  \App\Service::find($id);
        $service->service_name = $request->name;
        if ($service->save())
        {
            return redirect()->route('service')->with(['alert' => 'success', 'message' => 'Service has been Updated Successfully!.']);
        }
        else
        {
            return redirect()->route('service')->with(['alert' => 'danger', 'message' => 'Service has not been Updated!.']);
        }

    }

     public function delete_service($id)
    {
       //

       $service = \App\Service::find($id);
       if($service->delete())
       {
            return redirect()->route('service')->with(['alert' => 'success', 'message' => 'Service has been Deleted Successfully!.']);
       }
       else
       {
            return redirect()->route('service')->with(['alert' => 'danger', 'message' => 'Service has not been Deleted!.']);
       }

    }

}
