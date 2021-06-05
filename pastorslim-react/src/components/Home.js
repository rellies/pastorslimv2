import React from 'react';
import "./../App.css";

function Home() {
    return (
        <>
        <div class="main-content">
            <div class="fullwidth-block">
                <div class="container">
                    <h2 class="section-title">Recent News</h2>

                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="news">
                                <image class="news-image" src="images/news-thumb-1.jpg"></image>
                                <h3 class="news-title"><a href="#">Fill in a news story here</a></h3>
                                <small class="date"><i class="fa fa-calendar"></i>get date here</small>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        </div>
        </>
    )
};

export default Home;