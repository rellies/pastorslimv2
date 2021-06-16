import React from 'react';
import './../App.css'

function Sidebar() {
    return (
        <div class="sidebar col-md-3 col-md-offset-1">
        <div class="widget">
            <h3 class="widget-title">Categories</h3>
            <ul class="arrow">
                <li><a href="#">Perspiciatis unde</a></li>
                <li><a href="#">Omnis iste natus</a></li>
                <li><a href="#">Voluptatem accusantium</a></li>
                <li><a href="#">Doloremque eaque</a></li>
                <li><a href="#">Totam rem aperiam</a></li>
            </ul>
        </div>

        <div class="widget">
            <h3 class="widget-title">Donations</h3>
            <p>Distinctio unde consequuntur delectus, repudiandae, impedit atque earum adipisci, explicabo perferendis.</p>
            <a href="#" class="button">Make a donation</a>
        </div>

        <div class="widget">
            <h3 class="widget-title">Gallery updates</h3>

            <div class="galery-thumb">
                <a href="#"><img src="images/gallery-thumb-1.jpg" alt=""/></a>
                <a href="#"><img src="images/gallery-thumb-2.jpg" alt=""/></a>
                <a href="#"><img src="images/gallery-thumb-3.jpg" alt=""/></a>
                <a href="#"><img src="images/gallery-thumb-4.jpg" alt=""/></a>
                <a href="#"><img src="images/gallery-thumb-5.jpg" alt=""/></a>
                <a href="#"><img src="images/gallery-thumb-6.jpg" alt=""/></a>
            </div>
        </div>

        <div class="widget">
            <h3 class="widget-title">Text widget </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aliquam obcaecati velit, atque necessitatibus molestias ullam tempore itaque quidem sequi ea sed consectetur, eligendi cupiditate saepe! Hic veniam maiores explicabo.</p>
        </div>
    </div>
    );
};

export default Sidebar;