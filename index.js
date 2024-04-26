const root = ReactDOM.createRoot(document.getElementById('root'))

function App() {
    return (
        <div className="container">
            <Navbar />
            <Header />
            <ContentCountries />
            <RecentlyAdded />
            <FindYourBest />
            <Footerlogo />
        </div>
    )
}

function Navbar() {
    return (
        <nav className="container-nav">
            <LogoLogo />

            <div className="menu">
                <a href="#">HOME</a>
                <a href="#">PROPERTIES</a>
                <a href="#">AGENTS</a>
                <a href="#">BLOG</a>
                <button>LOGIN</button>
            </div>
        </nav>
    )
}

function LogoLogo() {
    return (
        <div className="icon-logo">
            <div className="img-logo">
                <img src="./images/icon.png" />
            </div>
            <div className="text-logo">
                <h1>logoipsum</h1>
                <p>.com</p>
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className="container-head">
            <div className="head-img">
                <img src="./images/Banner.png" alt="Banner" />
            </div>
            <div className="text-detail-head">
                <h1>Easy way to find a<br />perfect property</h1>
                <p className="detail-head-p">We provide a complete aervice for the sale, <br />purchase or rental of real estate</p>
                <div className="container-rent-but-sale">
                    <div className="con-rent">
                        <p>RENT</p>
                        <p>BUY</p>
                        <p>SELL</p>
                    </div>

                    <div className="container-location">
                        <div className="group-location">
                            <div className="location">
                                <h2>Location</h2>
                                <div className="item-location">
                                    <p>Select Your City</p>
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                            </div>

                            <div className="linee"></div>

                            <div className="location">
                                <h2>Property Type</h2>
                                <div className="item-location">
                                    <p>Choose Property Type</p>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>

                            <div className="linee"></div>

                            <div className="location">
                                <h2>Price Range</h2>
                                <div className="item-location">
                                    <p>Choose Price Range</p>
                                </div>
                            </div>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContentCountries() {
    return (
        <div className="content-countries">
            <h1>We are available in many<br />well-know countries</h1>

            <div className="container-img-countries">
                
                <div className="card-countries">
                    <div className="img-countries">
                        <img src="./images/america.png" alt="america" />
                    </div>
                    <h2>AMERIC</h2>
                </div>

                <div className="card-countries">
                    <div className="img-countries">
                        <img src="./images/spain.png" alt="spain" />
                    </div>
                    <h2>SPAIN</h2>
                </div>

                <div className="card-countries">
                    <div className="img-countries">
                        <img src="./images/london.png" alt="london" />
                    </div>
                    <h2>LONDON</h2>
                </div>

                <div className="card-countries">
                    <div className="img-countries">
                        <img src="./images/france.png" alt="france" />
                    </div>
                    <h2>FRANCE</h2>
                </div>
            </div>
        </div>
    )
}

function RecentlyAdded() {
    return (
        <div className="container-recent">
            <div className="head-recent">
                <h1>Recently Added</h1>
                <h2>See all</h2>
            </div>

            <div className="container-item-recent">

                <div className="item-recent">
                    <div className="img-item-recent">
                        <img src="./images/small-1.png" alt="small-1" />
                    </div>

                    <div className="detail-item-recent">
                        <h2>103/143 West Street, Crows Nest</h2>

                        <div className="detail-room">
                            <p>10 Bedroom</p>
                            <p>150 M</p>
                            <p>2 Garage</p>
                        </div>

                        <div className="detail-posted">
                            <h3>Posted by X Builder</h3>
                            <button>$45,545</button>
                        </div>
                    </div>
                </div>
            

            
                <div className="item-recent">
                    <div className="img-item-recent">
                        <img src="./images/small-2.png" alt="small-2" />
                    </div>

                    <div className="detail-item-recent">
                        <h2>103/143 West Street, Crows Nest</h2>

                        <div className="detail-room">
                            <p>10 Bedroom</p>
                            <p>150 M</p>
                            <p>2 Garage</p>
                        </div>

                        <div className="detail-posted">
                            <h3>Posted by X Builder</h3>
                            <button>$45,545</button>
                        </div>
                    </div>
                </div>
            

            
                <div className="item-recent">
                    <div className="img-item-recent">
                        <img src="./images/small-3.png" alt="small-3" />
                    </div>

                    <div className="detail-item-recent">
                        <h2>103/143 West Street, Crows Nest</h2>

                        <div className="detail-room">
                            <p>10 Bedroom</p>
                            <p>150 M</p>
                            <p>2 Garage</p>
                        </div>

                        <div className="detail-posted">
                            <h3>Posted by X Builder</h3>
                            <button>$45,545</button>
                        </div>
                    </div>
                </div>
            

            
                <div className="item-recent">
                    <div className="img-item-recent">
                        <img src="./images/small-4.png" alt="small-4" />
                    </div>

                    <div className="detail-item-recent">
                        <h2>103/143 West Street, Crows Nest</h2>

                        <div className="detail-room">
                            <p>10 Bedroom</p>
                            <p>150 M</p>
                            <p>2 Garage</p>
                        </div>

                        <div className="detail-posted">
                            <h3>Posted by X Builder</h3>
                            <button>$45,545</button>
                        </div>
                    </div>
                </div>
            

            
                <div className="item-recent">
                    <div className="img-item-recent">
                        <img src="./images/small-5.png" alt="small-5" />
                    </div>

                    <div className="detail-item-recent">
                        <h2>103/143 West Street, Crows Nest</h2>

                        <div className="detail-room">
                            <p>10 Bedroom</p>
                            <p>150 M</p>
                            <p>2 Garage</p>
                        </div>

                        <div className="detail-posted">
                            <h3>Posted by X Builder</h3>
                            <button>$45,545</button>
                        </div>
                    </div>
                </div>
            


                <div className="item-recent">
                    <div className="img-item-recent">
                        <img src="./images/small-6.png" alt="small-6" />
                    </div>

                    <div className="detail-item-recent">
                        <h2>103/143 West Street, Crows Nest</h2>

                        <div className="detail-room">
                            <p>10 Bedroom</p>
                            <p>150 M</p>
                            <p>2 Garage</p>
                        </div>

                        <div className="detail-posted">
                            <h3>Posted by X Builder</h3>
                            <button>$45,545</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

function FindYourBest() {
    return (
        <div className="container-find-your-best">
            <div className="detail-find-your-best">
                <h1>Find your best<br />Real Estate</h1>
                <p>We provide a complete service for the sale, purchase or rental of real estate.</p>
                <button>CONTACT US</button>
            </div>
            <div className="img-find-your-best">
                <img src="./images/building.png" alt="building" />
            </div>
        </div>
    )
}

function Footerlogo() {
    return (
        <footer>
            <div className="footer-rigth">
                <LogoLogo />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil illo dignissimos quo praesentium rem quas quia maiores amet. Non rem odio est consequatur saepe molestias fugit eaque accusamus magnam.</p>
                
                <div className="icon-social">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>

                <div className="allrights">
                    <span>&#169;2021 All rights reserved</span>
                </div>
            </div>

            
            <div className="footer-menu-1">
                <div className="footer-menu-take">
                    <h3>Take a tour</h3>
                    <a href="#">Features</a>
                    <a href="#">Partners</a>
                    <a href="#">Pricing</a>
                    <a href="#">Product</a>
                    <a href="#">Support</a>
                </div>

                <div className="footer-menu-take">
                    <h3>Our Company</h3>
                    <a href="#">About Us</a>
                    <a href="#">Agents</a>
                    <a href="#">Blog</a>
                    <a href="#">Media</a>
                    <a href="#">Contact Us</a>
                </div>

                <div className="footer-subs">
                    <h3>Subscribe</h3>
                    <p>Subscribe to get lastest property,<br />blog news from us</p>
                    <div className="footer-btn">
                        <input type="text" placeholder="Email Address" />
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>
            
            </div>
        </footer>
    )
}

root.render( <App />)