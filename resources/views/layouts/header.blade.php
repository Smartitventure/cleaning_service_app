<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
	<link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
	<link rel="stylesheet" href="{{ asset('css/style.css') }}">
	<link rel="stylesheet" href="{{ asset('css/responsive.css') }}">
	<title>Dashboard</title>
</head>

<body>
	<header class="headertop">
		<div class="container-fluid">
			<div class="row custom-row">
				<div class="col-md-6  ">
					<div class="headingbox">
						<h6><a href="#"> <span class="app">Application </span></a><span class="ïcon"><i class="fa fa-arrow-right" aria-hidden="true"></i></span><span class="dash">Dashboard</span></h6> </div>
				</div>
				<div class="col-md-6  ">
					<div class="profilebox">
						<div class="dropdown-custom2">
							<button class=" dropdown-toggle dropdown-custom" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<a href="#"> <img src="{{ asset('images/userimage2.png') }}" /></a>
							</button>
							<ul class="dropdown-menu dropdown-menu-custom" aria-labelledby="dropdownMenuButton1">
								<li><a class="dropdown-item custom-dropdown " href="#">Profile</a></li>
								<li><a class="dropdown-item custom-dropdown " href="#">Setting</a></li>
								<li> <a class="{{ (request()->is('logout')) ? 'active' : '' }} dropdown-item custom-dropdown" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                        <img class="" src="{{asset('images/sidebar-icon-4.png')}}" />
                        <span class="menuname">
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>
                            Log out
                        </span>
                    </a></li>
							</ul>
						</div>
					</div>
				</div>
	</header>

    



     