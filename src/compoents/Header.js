import React from "react";
import images from '../images/pensil_logo.svg'
export default function Header(){
    return(
        <div className="hero">
            <div className="logo">
            <img className="logo_img" src={images} alt='' />
            </div>
            <div className="hero_button">
                <a href="hero" className="link">Use case <i class="fa-solid fa-angle-down"></i>
                    <div className="link_hover">
                        <a href="#">Cohort Based courses</a>
                        <a href="#">Startup or Brand Community</a>
                        <a href="#">Mentors or Coaches</a>
                    </div>
                </a>
                <a href="hero" className="link">Resources <i class="fa-solid fa-angle-down"></i></a>
                <a href="hero" className="link">Pricing <i class="fa-solid fa-angle-down"></i></a>
                <a href="hero" className="link btn_login">Log In</a>
                <a href="hero" className=" link btn_try">Try for Free</a>

            </div>
        </div>
    )

}