<div class="sidemenubar">
		<div class="toggle">
			<i class="fa fa-bars" aria-hidden="true"></i>
		</div>
		<div class="mainlogoimage"> <img src="{{asset('images/mainlogo3.png')}}" /> </div>
		<nav>
			<ul >
				<li>
					<a href="{{route('home')}} " class="{{ (request()->is('home')) ? 'active' : '' }}"> <span class="icon "><i class="fa fa-server" aria-hidden="true"></i></span> <span class="title ">Dashboard</span> </a>
				</li>
				<li class="sidebar-dropdown ">
					<a href="#"> <i class="fa fa-home home-custom " aria-hidden="true"></i><span>Stylist</span> </a>
				</li>
				<li class="sidebar-dropdown active ">
					<a href="#"> <i class="fa fa-home home-custom " aria-hidden="true"></i><span>Service's</span> <i class="fa fa-angle-right right-custom" aria-hidden="true"></i> </a>
					<ul class="sidebar-submenu" style="display:none;">
						<li> <a href="#">Dashboard 1
                        
                      </a> </li>
						<li> <a href="#">Dashboard 2</a> </li>
						<li> <a href="#">Dashboard 3</a> </li>
					</ul>
				</li>
				<li class="sidebar-dropdown  ">
					<a href="#"> <i class="fa fa-home home-custom " aria-hidden="true"></i><span>Customers</span> </a>
				</li>
				<li class="sidebar-dropdown  ">
					<a href="#"> <i class="fa fa-home home-custom " aria-hidden="true"></i><span>Earnings</span> </a>
				</li>
				<li class="sidebar-dropdown ">
					<a href="#"> <i class="fa fa-home home-custom " aria-hidden="true"></i><span>FAQ's</span> </a>
				</li>
				<li class="sidebar-dropdown ">
					<a href="#"> <i class="fa fa-home home-custom " aria-hidden="true"></i><span>Customers</span> </a>
				</li>
				<li class="sidebar-dropdown ">
					<a href="#"> <i class="fa fa-home home-custom " aria-hidden="true"></i><span>Earnings</span> </a>
				</li>
				<li class="sidebar-dropdown  ">
					<a href="#"> <i class="fa fa-home home-custom " aria-hidden="true"></i><span>FAQ's</span> </a>
				</li>
			</ul>
		</nav>
	</div>