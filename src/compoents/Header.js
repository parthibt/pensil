import React from "react";
import images from '../images/pensil_logo.svg'


export default function Header(){
    return(
        <header className="header">
            <nav className="nav">
                <img src={images} alt=''/>
                <i class="fa-solid fa-bars fa-2x"></i>
                    <ul className="list">
                        <li>
                            <a href="#" className="link">Use case</a>
                                <ul className="inside_list">
                                    <li><a href="#">Cohort Based Courses</a></li>
                                    <li><a href="#">Startup or Brand community</a></li>
                                    <li><a href="#">Mentors or Coaches</a></li>
                                </ul>
                        </li>
                    <li>
                        <a href="#" className="link">Resources</a>
                            <ul className="inside_list">
                                <li><a href="#">Integration</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">What's New</a></li>
                            </ul>
                    </li>
                    <li>
                        <a href="#" className="link">Princing</a>
                    </li>
                    <div className="btn">
                        <li>
                            <a href="#" className="btn_login">Log Ing</a>
                            </li>
                        <li>
                            <a href="#" className="btn_login">Free to try</a>
                        </li>
                    </div>
                </ul>
            </nav>
            
        </header>
    )
}