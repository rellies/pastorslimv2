import React from 'react';

import WorshipBanner from "./../images/Worship_Banner.jpg"

function Contribute() {
    return (
        <div class="main-content">
				<div class="fullwidth-block">
					<div class="container">
						<div class="row">
							<div class="widget">
								<h3 class="widget-title">Donations</h3>
								<img src={WorshipBanner} class="WorshipBanner" alt="Credit: Toppa35 aka STGRTF#8700 in Discord" />
								<br />
								<a href="#" class="button">Pay your God Tax</a>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
};

export default Contribute;