@include('layouts.header')
@include('layouts.sidebar')
<main class="maintop">
    <div class="mainsectionbox">
        <div class="container-fluid">
            @if(Session::get('alert'))
            <div class="alert alert-{{Session::get('alert')}} alert-dismissible" role="alert">
                <p>{{Session::get('message')}} </p>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            @endif
            <div class="row">
                <div class="col-md-12">
                    <div class="mainheadinglink mb-3 mt-0">
                        <ul>
                            <li><a href="{{route('home')}}">Home /</a></li>
                            <li><a href="#" class="custom-color active">Profile</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
    <div class="mainprofilesection">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="maintoplinkbutton">
                        <nav>
                            <div class="nav nav-tabs " id="nav-tab" role="tablist">
                                <!-- <a class="nav-item nav-link custom-tab active " id="nav-Profile-tab" data-toggle="tab" href="#nav-Profile" role="tab" aria-controls="nav-Profile" aria-selected="true">Profile</a> -->
                                <!-- <a class="nav-item nav-link custom-tab " id="nav-Gallery-tab" data-toggle="tab" href="#nav-Gallery" role="tab" aria-controls="nav-Gallery" aria-selected="false">Gallery</a>
                                <a class="nav-item nav-link custom-tab " id="nav-Services-tab" data-toggle="tab" href="#nav-Services" role="tab" aria-controls="nav-Services" aria-selected="false">Tattoo Styles</a>
                                <a class="nav-item nav-link custom-tab " id="nav-Reviews-tab" data-toggle="tab" href="#nav-Reviews" role="tab" aria-controls="nav-Reviews" aria-selected="false">Reviews</a> -->
                                <!-- <a class="nav-item nav-link custom-tab " id="nav-Bank-information-tab" data-toggle="tab" href="#nav-Bank-information" role="tab" aria-controls="nav-Bank-information" aria-selected="false">Bank Information</a>                             -->
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tab-content " id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-Profile" role="tabpanel" aria-labelledby="nav-Profile-tab">
            <div class="profile">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="row">
                                <div class="col-md-12 custom-col">
                                     <div class="leftbox">
                                        <div class="custom-imagebox">
                                            @if(!is_null($customer->image))

                                            <img src="{{asset($view_artist->profile->profile)}}" />
                                            @else
                                                <img src="{{asset('images/dummy.jpg')}}">
                                            @endif
                                    </div>
                                        <h3>{{ucfirst($customer->name)}}</h3>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="personal-info">
                                        <h4>Personal Information</h4>
                                    </div>
                                    <div class="mail-box">
                                        <div class="iocn-box">
                                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                        </div>
                                        <p>{{$customer->email}}</p>
                                    </div>
                                    <div class="mail-box">
                                        <div class="iocn-box">
                                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                        </div>
                                        <p>{{$customer->gender}}</p>
                                    </div>
                                    <div class="mail-box">
                                        <div class="iocn-box">
                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                        </div>
                                        <p>{!! date('d M, Y', strtotime($customer->created_at)) !!}</p>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="personal-info">
                                        <h4>Address</h4>
                                    </div>
                                        <p class="text-address">India</p>
                                     
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="rightbox">
                                        <h2>Basic Information</h2>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="contactinfoleft">
                                        <h5>Mobile number:</h5>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="contactinforight">
                                        <h5>{{$customer->mobile_number}}</h5>
                                 
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="contactinfoleft">
                                        <h5>Company:</h5>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="contactinforight">
                                        <h5>{{$customer->company}}</h5>
                                 
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="contactinfoleft">
                                        <h5>Date of birth:</h5>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="contactinforight">
                                        <h5>{{$customer->dob}}</h5>
                                 
                                    </div>
                                </div>
                            
                                <!-- <div class="col-md-12">
                                    <div class="rightbox">
                                        <h2>Status</h2>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="custom-buttoninner">
                                    <span class="custom-pending">
                                        Approved
                                    </span> 
                                       
                                    </div>
                                </div>
                              -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      
        <!-- <div class="tab-pane fade" id="nav-Reviews" role="tabpanel" aria-labelledby="nav-Reviews-tab">
            <div class="main-table">
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-innerdata">
                            <table class="table table-striped table-bordered datatable" id="user_data_table_1" style="width:100%">
                                <thead class="inner-tablecolor">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Artist</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Comment</th>
                                        <th scope="col">Rating</th>

                                    </tr>
                                </thead>
                                <tbody>
                                @if(isset($view_artist->review) && count($view_artist->review) > 0)
                                @foreach($view_artist->review as $item) 
                                    <tr>
                                        <td>{{$item->id}}</td>
                                        <td>{{$item->artist_id}}</td>
                                        <td>{{$item->user_id}}</td>
                                        <td>{{$item->comment}}</td>
                                        <td>{{$item->rating}}</td>
                                    </tr>
                                    @endforeach
                                    @else
                                        <h3></h3>
                                    @endif
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- <div class="tab-pane fade " id="nav-Bank-information" role="tabpanel" aria-labelledby="nav-Bank-information-tab">
            <div class="bank-innersection">
                 <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-12">
                                <h2>Manage Employees</h2>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover dataTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Thomas Hardy</td>
                                <mailto:td>thomashardy@mail.com</td>
                                <td>89 Chiaroscuro Rd, Portland, USA</td>
                                <td>(171) 555-2222</td>
                                <td>
                                    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="fa fa-pencil" aria-hidden="true" data-toggle="tooltip" title="Edit"></i></a>
                                    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="fa fa-trash" aria-hidden="true"data-toggle="tooltip" title="Delete"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>Dominique Perrier</td>
                                <mailto:td>dominiqueperrier@mail.com</td>
                                <td>Obere Str. 57, Berlin, Germany</td>
                                <td>(313) 555-5735</td>
                                <td>
                                    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="fa fa-pencil" aria-hidden="true" data-toggle="tooltip" title="Edit"></i></a>
                                    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="fa fa-trash" aria-hidden="true"data-toggle="tooltip" title="Delete"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> -->
            <!-- </div> -->
        <!-- </div> --> 
    </div>
    </div>
</main>
@include('layouts.footer')
