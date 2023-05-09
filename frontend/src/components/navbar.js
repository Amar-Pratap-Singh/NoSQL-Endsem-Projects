import {react} from "react";

const Navbar = () =>{
    return (
        <nav class="navbar background h-nav">
            <ul class="nav-list v-class">
                <div class="logo"><image src="../../image/eth.png" alt="logo" /></div>
                <li> <a href="#home"> Home</a> </li>
                <li> <a href="#about"> About</a> </li>
                <li> <a href="#services"> Services</a> </li>
                <li> <a href="#contact"> Contact Us</a> </li>
            </ul>

            <div class="rightNav v-class">
                <input type="text" name="search" id="search" />
                <button class="btn btn-sm">Search</button>
            </div>

            <div class="burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </nav>
    );
}

export default Navbar;