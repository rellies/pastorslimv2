import React from 'react';

function Footer() {
    return (
        <footer class="site-footer">
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<div class="widget">
								<h3 class="widget-title">Our address</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perspiciatis magnam, ab ipsa laboriosam tempore tenetur, aliquid repellat, ex cum dicta reiciendis accusamus. Omnis repudiandae quasi mollitia, iusto odio dignissimos.</p>
								<ul class="address">
									<li><i class="fa fa-map-marker"></i> 329 Church St, Garland, TX 75042</li>
									<li><i class="fa fa-phone"></i> (425) 853 442 552</li>
									<li><i class="fa fa-envelope"></i> info@yourchurch.com</li>
								</ul>
							</div>
						</div>
						<div class="col-md-4">
							<div class="widget">
								<h3 class="widget-title">Topics from last meeting</h3>
								<ul class="bullet">
									<li><a href="#">Lorem ipsum dolor sit amet</a></li>
									<li><a href="#">Consectetur adipisicing elit quis nostrud</a></li>
									<li><a href="#">Eiusmod tempor incididunt ut labore et dolore magna</a></li> 
									<li><a href="#">Ut enim ad minim veniam cillum</a></li>
									<li><a href="#">Exercitation ullamco laboris nisi ut aliquip</a></li> 
									<li><a href="#">Duis aute irure dolor in reprehenderit in voluptate</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-4">
							<div class="widget">
								<h3 class="widget-title">Contact form</h3>
								<form action="#" class="contact-form">
									<div class="row">
										<div class="col-md-6"><input type="text" placeholder="Your name..."/></div>
										<div class="col-md-6"><input type="text" placeholder="Email..."/></div>
									</div>
									
									<textarea name="" placeholder="Your message..."></textarea>
									<div class="text-right"><input type="submit" value="Send message"/></div>
								</form>
							</div>
						</div>
					</div>

					<p class="colophon">Copyright 2021 Rellies + Kyle. All rights reserved.</p>
				</div>
			</footer>
    )
}

export default Footer;