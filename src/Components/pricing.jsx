import React from "react";
import "../Styles/pricing.css";

function pricing(){
    return(
        <div id="pricing-table" class="clear">
            <div class="plan">
                <h3>Basic<span>$7.99</span></h3>
                <a class="signup" href="">Sign up</a>         
                <ul>
                    <li><b>Unlimited</b> Films and TV Programs</li>
                    <li><b>Watch</b> on mobile phones only</li>
                    <li><b>Cancel</b> Anytime</li>
                    <li><b>First Month</b> completely Free</li>			
                </ul> 
            </div>

        <div class="plan" id="most-popular">
            <h3>Standard<span>$12.99</span></h3>
            <a class="signup" href="">Sign up</a>        
            <ul>
                <li><b>Unlimited</b> Films and TV Programs</li>
                <li><b>Watch</b> on any device</li>
                <li><b>Cancel</b> Anytime</li>
                <li><b>First Month</b> completely Free</li>
                <li><b>HD</b> Available</li>			
            </ul>    
        </div>

        <div class="plan">
            <h3>Premium<span>$18.99</span></h3>
            <a class="signup" href="">Sign up</a>		
            <ul>
                <li><b>Unlimited</b> Films and TV Programs</li>
                <li><b>Watch</b > on multiple devices at once</li>
                <li><b>Cancel</b> Anytime</li>
                <li><b>4K</b> Resolution</li>			
            </ul>
        </div> 	
</div>
    )
}

export default pricing;