@include('layouts.header')
@include('layouts.sidebar')

<main class="maintop">
		<div class="mainsectionbox">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-7">
						<div class="row ">
						<div class="col-md-12">
							<div class="mainheadingtop">
								<h4>Hi <span>Admin</span>,Welcome back</h4>
							</div>
						</div>	
						<div class="col-md-4">
							<div class="mainheadingbox">
								<h6>Total Customers</h6>
							</div>
							<div class="flowchart">
								<!-- php -->
								@php 
									$total_customers = \App\User::where('role','customer')->count();
								@endphp
								<!-- endphp -->
								<div id="cont" data-pct="{{$total_customers}}">
									<svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
										<circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
										<circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
									</svg>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="mainheadingbox">
								<h6>Total Service Providers</h6>
							</div>
							<div class="flowchart">

								<!-- php -->
								@php 
									$total_service_providers = \App\User::where('role','service_provider')->count();
								@endphp  
								<!-- endphp -->


								<div id="cont" data-pct="{{$total_service_providers}}">
									<svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
										<circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
										<circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
									</svg>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="mainheadingbox">
								<h6>Total Expences</h6>
							</div>
							<div class="flowchart">
								<div id="cont" data-pct="$ 10">
									<svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
										<circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
										<circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
									</svg>
								</div>
							</div>
						</div>
						
						<div class="col-md-12">
							<div class="pendingboxinner">
								<!-- php	 -->
								@php
									$all_customers = \App\User::where('role','customer')->limit(5)->orderBy('id', 'DESC')->get();
								@endphp
								<!-- endphp -->
								@if(count($all_customers) > 0)
									@foreach($all_customers as $customers)
									<div class="imgbox2">
										<a href="#"> <img src="{{asset($customers->image)}}" /> </a>
										<div class="textbox2">
											<h6>{{$customers->name}}</h6>
											<p>{{$customers->email}}</p>
										</div>
										<div class="buttonbox2"> <a href="{{route('view-customer',$customers->id)}}">{{date("d M Y", strtotime($customers->createdAt))}}</a> </div>
									</div>
								
									@endforeach
								<div class="viewbuttonbox"> <a href="{{route('all-customers')}}">View More</a> </div>
								@else
									<h4>No data found</h4>
								@endif
							</div>
						</div>
							
							
										
									
							
							
							
						</div>
					</div>
					<div class="col-md-5">
						<div class="row">
							<div class="col-md-12">
								<div class="Pendingbox">
									<!-- <h3>Pending </h3> -->
									<div class="textpending">
										<p>Service Providers</p>  </div>
								</div>
								<nav>
									<div class="nav nav-tabs custom-maintab1" id="nav-tab" role="tablist">
						
									  <!-- <a class="nav-item nav-link active show  custom-tab1  " id="nav-Artist-tab1" data-toggle="tab" href="#nav-Artist1" role="tab"
										aria-controls="nav-Artist1" aria-selected="true">Artist</a> -->
									  <!-- <a class="nav-item nav-link   custom-tab1 " id="nav-Vendor1-tab" data-toggle="tab" href="#nav-Vendor1" role="tab"
										aria-controls="nav-Vendor1" aria-selected="false">Vendor</a>
									  -->
									</div>
								  </nav>
								  <div class="tab-content " id="nav-tabContent">
							
									  
								
									 
								
									<div class="tab-pane fade active show" id="nav-Artist1" role="tabpanel" aria-labelledby="nav-Artist-tab1">
										<div class="pendingboxinner">
										
											<!-- php	 -->
											@php
												$all_service_providers = \App\User::where('role','service_provider')->limit(5)->orderBy('id', 'DESC')->get();
											@endphp
											<!-- endphp -->

											@if(count($all_service_providers) > 0)
												@foreach($all_service_providers as $service_providers)
												<div class="imgbox2">
													<a href="#"> <img src="{{asset($service_providers->image)}}" /> </a>
													<div class="textbox2">
														<h6>{{$service_providers->name}}</h6>
														<p>{{$service_providers->email}}</p>
													</div>
													<div class="buttonbox2"> <a href="{{route('view-service-provider',$service_providers->id)}}">{{date("d M Y", strtotime($service_providers->createdAt))}}</a> </div>
												</div>
												@endforeach
											
												<div class="viewbuttonbox"> <a href="{{route('all-service-providers')}}">View More</a> </div>
												
											@else
												<h4>No data found</h4>
											@endif
										</div>
									</div>
								
									<div class="tab-pane fade " id="nav-Vendor1" role="tabpanel" aria-labelledby="nav-Vendor1-tab">
									 
										<div class="flowchart">
											<div id="cont" data-pct="5000">
												<svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
													<circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
													<circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
												</svg>
											</div>
										</div>
											</div>	  
											 
								  </div>

								<!-- php -->
								  @php 
									$contact_us = \App\ContactUs::limit(5)->orderBy('id', 'DESC')->get();
								  @endphp
								<!-- endphp -->
								  <div class="pendingboxinner">
								<div class="Pendingbox customerheadingbox">
									<h3>Recent Contacts</h3>
								</div>
								@if(count($contact_us) > 0)
								@foreach( $contact_us as $data)
								<div class="imgbox2">
									<a href=""> <img src="{{asset('images/Dummy.jpg')}}" /> </a>
									<div class="textbox2">
										
										<h6>{{$data->name}}</h6>
										
										<p>{{$data->email}}</p>
									</div>
									<div class="buttonbox2"> <a href="">{{date("d M Y", strtotime($data->createdAt))}}</a> </div>
								</div>
								@endforeach
								<div class="viewbuttonbox"> <a href="{{route('contact_us')}}">View More</a></div>
								@else
								<h4>No data found</h4>
								@endif
							</div>
					

							</div>
						</div>
					</div>
				</div>
			</div>
	</main>

@include('layouts.footer')