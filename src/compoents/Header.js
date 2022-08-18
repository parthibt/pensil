import React from "react";
import images from '../images/pensil_logo.svg'
export default function Header(){
    return(
        <div className="hero">
            <div className="logo">
            <img className="logo_img" src={images} alt='' />
            </div>
            <div className="hero_button">
                <a href="hero" className="link link_up">Use case <i class="fa-solid fa-angle-down"></i>
                    <div className="link_hover">
                        <a href="#" className="hover_link">Cohort Based courses</a>
                        <a href="#" className="hover_link">Startup or Brand Community</a>
                        <a href="#" className="hover_link">Mentors or Coaches</a>
                    </div>
                </a>
                <a href="hero" className="link link_up">Resources <i class="fa-solid fa-angle-down"></i>
                    <div className="link_hover">
                        <a href="#" className="hover_link">Integration</a>
                        <a href="#" className="hover_link">Blog</a>
                        <a href="#" className="hover_link">What's New</a>
                    </div>
                
                </a>
                <a href="hero" className="link link_up">Pricing</a>
                <a href="hero" className="link btn_login">Log In</a>
                <a href="hero" className=" link btn_try">Try for Free</a>

            </div>
        </div>
    )

}