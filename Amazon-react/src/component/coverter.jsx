
// // HTML to React JSX Converter Extension.

<>


    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Amazon Home Page Clone</title>
    <link rel="stylesheet" href="project/CSS/Amazon-ge.css" />
    { /* FontAwesome ለ Icons */ }
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />



    { /* Header */ } 
    <header> 
        { /* Main Navigation Bar */ }
        <div className="navbar">

            <div className="nav-logo border">
                <div className="logo">
                    <img src="resourse/iamge/amazon_PNG11.png" alt="Amazon Logo" />
                </div>
            </div>

            <div className="nav-address border">
                <p className="add-first">Deliver to</p>
                <div className="add-icon">
                    <i className="fa-solid fa-location-dot" />
                    <p className="add-second">Ethiopia</p>
                </div>
            </div>

            { /* Search Bar */ }
            <div className="nav-search">
                <select name="search-category" id="search-category" className="search-select">
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="electronics">Electronics</option>
                    <option value="computers">Computers</option>
                </select>

                <input type="text" className="search-input" placeholder="Search Amazon" />

                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass" />
                </div>
            </div>

            { /* Sign In */ }
            <div className="nav-sign border">
                <p><span>Hello, Sign in</span></p>
                <p className="nav-second">Account & Lists</p>
            </div>

            { /* Returns & Orders */ }
            <div className="nav-return border">
                <p><span>Returns</span></p>
                <p className="nav-second">& Orders</p>
            </div>

            { /* Cart */ }
            <div className="nav-cart border">
                <i className="fa-solid fa-cart-shopping" />
                <span>Cart</span>
            </div>

        </div>


        

        { /* Sub Panel Navigation */ }
        <div className="panel">
            <div className="panel-all border">
                <i className="fa-solid fa-bars" />
                <span>All</span>
            </div>

            <ul className="ul-panel">
                <li><a href="#">Today's Deals</a></li>
                <li><a href="#">Prime Video</a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Sell</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Registry</a></li>
            </ul>
        </div>
    </header>

    

    { /* Hero Section & Product Cards Grid */ }
    <section className="hero-section">
        { /* Hero Background Banner */ }
        <div className="banner" />

        { /* Product Grid Container */ }
        <div className="shop-section">

            { /* Card 1 first row (Single Image) */ } 
            <div className="box">
                <div className="box-content">
                    <h2>Modern Fashion Collections</h2>
                    <div className="box-img" style={{ backgroundImage: "url('resourse/iamge/amazon singLe 01.jpg')" }} />
                    <a href="#">Shop Fashion</a>
                </div>
            </div>

            { /* Card 2 (Single Image) */ }
            <div className="box">
                <div className="box-content">
                    <h2>New home arrivals under $50</h2>
                    <div className="box-img" style={{ backgroundImage: "url('resourse/iamge/amazon\\ single.jpg')", width: "100%", height: 170 }} />
                    <a href="#">Shop Tools</a>
                </div>
            </div>

            { /* Card 3 (4 Images Grid) */ }
            <div className="box">
                <div className="box-content">
                    <h2>Home Decor & Hardware</h2>
                    <div className="box-quad">
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon electronic.jpg" alt="Decor" />
                            <p>Decor</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon 00.jpg" alt="Hardware" />
                            <p>Hardware</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/single 111.jpg" alt="Backpacks" />
                            <p>Backpacks</p>
                        </div>

                        <div className="quad-item">
                            <img src="resourse/iamge/amazon cloth.jpg" alt="Collection" />
                            <p>Collection</p>
                        </div>
                    </div>
                    <a href="#">See more</a>
                </div>
            </div>

            { /* Card 4 (4 Images Grid) */ }
            <div className="box">
                <div className="box-content">
                    <h2>Shop Fashion For less $100</h2>
                <div className="box-quad">
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon one.jpg" alt="Decor" />
                            <p>Coffee</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazone one1.jpg" alt="Hardware" />
                            <p>Hardware</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/Amazoneee - Copy.jpg" alt="Backpacks" />
                            <p>Backpacks</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon 00.jpg" alt="Collection" />
                            <p>Collection</p>
                        </div>
                    </div>
                    <a href="#">See more</a>
                </div>
            </div>








            { /* Card 1 second row(Single Image) */ } 
            <div className="box">
                <div className="box-content">
                    <h2>Modern Fashion Collections</h2>
                    <div className="box-img" style={{ backgroundImage: "url('resourse/iamge/amazon\\ singLe\\ 01.jpg')" }} />
                    <a href="#">Shop Fashion</a>
                </div>
            </div>

            { /* Card 2 (Single Image) */ }
            <div className="box">
                <div className="box-content">
                    <h2>New home arrivals under $50</h2>
                    <div className="box-img" style={{ backgroundImage: "url('resourse/iamge/amazon\\ single.jpg')" }} />
                    <a href="#">Shop Home Tools </a>
                </div>
            </div>

            { /* Card 3 (4 Images Grid) */ }
            <div className="box">
                <div className="box-content">
                    <h2>Home Decor & Hardware</h2>
                    <div className="box-quad">
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon electronic.jpg" alt="Decor" />
                            <p>Decor</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon 00.jpg" alt="Hardware" />
                            <p>Hardware</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/single 111.jpg" alt="Backpacks" />
                            <p>Backpacks</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon cloth.jpg" alt="Collection" />
                            <p>Collection</p>
                        </div>
                    </div>
                    <a href="#">See more</a>
                </div>
            </div>

            { /* Card 4 (4 Images Grid) */ }
            <div className="box">
                <div className="box-content">
                    <h2>Shop Fashion For less $100</h2>
                   <div className="box-quad">
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon one.jpg" alt="Decor" />
                            <p>Coffee</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazone one1.jpg" alt="Hardware" />
                            <p>Hardware</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/Amazoneee - Copy.jpg" alt="Backpacks" />
                            <p>Backpacks</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon 00.jpg" alt="Collection" />
                            <p>Collection</p>
                        </div>
                    </div>
                    <a href="#">See more</a>
                </div>
            </div>









            { /* Card 1 third row (Single Image) */ } 
            <div className="box">
                <div className="box-content">
                    <h2>Modern Fashion Collections</h2>
                    <div className="box-img" style={{ backgroundImage: "url('resourse/iamge/amazon\\ singLe\\ 01.jpg')" }} />
                    <a href="#">Shop Fashion</a>
                </div>
            </div>

            { /* Card 2 (Single Image) */ }
            <div className="box">
                <div className="box-content">
                    <h2>New home arrivals under $50</h2>
                    <div className="box-img" style={{ backgroundImage: "url('resourse/iamge/amazon\\ single.jpg')" }} />
                    <a href="#">Shop Tools</a>
                </div>
            </div>

            { /* Card 3 (4 Images Grid) */ }
            <div className="box">
                <div className="box-content">
                    <h2>Home Decor & Hardware</h2>
                    <div className="box-quad">
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon electronic.jpg" alt="Decor" />
                            <p>Decor</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon 00.jpg" alt="Hardware" />
                            <p>Hardware</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/single 111.jpg" alt="Backpacks" />
                            <p>Backpacks</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon cloth.jpg" alt="Collection" />
                            <p>Collection</p>
                        </div>
                    </div>
                    <a href="#">See more</a>
                </div>
            </div>

            { /* Card 4 (4 Images Grid) */ }
            <div className="box">
                <div className="box-content">
                    <h2>Shop Fashion For less $100</h2>
                   <div className="box-quad">
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon one.jpg" alt="Decor" />
                            <p>Coffee</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazone one1.jpg" alt="Hardware" />
                            <p>Hardware</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/Amazoneee - Copy.jpg" alt="Backpacks" />
                            <p>Backpacks</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon 00.jpg" alt="Collection" />
                            <p>Collection</p>
                        </div>
                    </div>
                    <a href="#">See more</a>
                </div>
            </div>







            { /* Card 1 fourth row (Single Image) */ } 
            <div className="box">
                <div className="box-content">
                    <h2>Modern Fashion Collections</h2>
                    <div className="box-img" style={{ backgroundImage: "url('resourse/iamge/amazon\\ singLe\\ 01.jpg')" }} />
                    <a href="#">Shop Fashion</a>
                </div>
            </div>

            { /* Card 2 (Single Image) */ }
            <div className="box">
                <div className="box-content">
                    <h2>New home arrivals under $50</h2>
                    <div className="box-img" style={{ backgroundImage: "url('resourse/iamge/amazon\\ single.jpg')" }} />
                    <a href="#">Shop Tools</a>
                </div>
            </div>

            { /* Card 3 (4 Images Grid) */ }
            <div className="box">
                <div className="box-content">
                    <h2>Home Decor & Hardware</h2>
                    <div className="box-quad">
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon electronic.jpg" alt="Decor" />
                            <p>Decor</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon 00.jpg" alt="Hardware" />
                            <p>Hardware</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/single 111.jpg" alt="Backpacks" />
                            <p>Backpacks</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon cloth.jpg" alt="Collection" />
                            <p>Collection</p>
                        </div>
                    </div>
                    <a href="#">See more</a>
                </div>
            </div>

            { /* Card 4 (4 Images Grid) */ }
            <div className="box">
                <div className="box-content">
                    <h2>Shop Fashion For less $100</h2>
                   <div className="box-quad">
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon one.jpg" alt="Decor" />
                            <p>Coffee</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazone one1.jpg" alt="Hardware" />
                            <p>Hardware</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/Amazoneee - Copy.jpg" alt="Backpacks" />
                            <p>Backpacks</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon 00.jpg" alt="Collection" />
                            <p>Collection</p>
                        </div>
                    </div>
                    <a href="#">See more</a>
                </div>
            </div>







            { /* Card 1 Fifth row  (Single Image) */ } 
            <div className="box">
                <div className="box-content">
                    <h2>Modern Fashion Collections</h2>
                    <div className="box-img" style={{ backgroundImage: "url('resourse/iamge/amazon\\ singLe\\ 01.jpg')" }} />
                    <a href="#">Shop Fashion</a>
                </div>
            </div>

            { /* Card 2 (Single Image) */ }
            <div className="box">
                <div className="box-content">
                    <h2>New home arrivals under $50</h2>
                    <div className="box-img" style={{ backgroundImage: "url('resourse/iamge/amazon\\ single.jpg')" }} />
                    <a href="#">Shop Tools</a>
                </div>
            </div>

            { /* Card 3 (4 Images Grid) */ }
            <div className="box">
                <div className="box-content">
                    <h2>Home Decor & Hardware</h2>
                    <div className="box-quad">
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon electronic.jpg" alt="Decor" />
                            <p>Decor</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon 00.jpg" alt="Hardware" />
                            <p>Hardware</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/single 111.jpg" alt="Backpacks" />
                            <p>Backpacks</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon cloth.jpg" alt="Collection" />
                            <p>Collection</p>
                        </div>
                    </div>
                    <a href="#">See more</a>
                </div>
            </div>

            { /* Card 4 (4 Images Grid) */ }
            <div className="box">
                <div className="box-content">
                    <h2>Shop Fashion For less $100</h2>
                   <div className="box-quad">
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon one.jpg" alt="Decor" />
                            <p>Coffee</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazone one1.jpg" alt="Hardware" />
                            <p>Hardware</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/Amazoneee - Copy.jpg" alt="Backpacks" />
                            <p>Backpacks</p>
                        </div>
                        <div className="quad-item">
                            <img src="resourse/iamge/amazon 00.jpg" alt="Collection" />
                            <p>Collection</p>
                        </div>
                    </div>
                    <a href="#">See more</a>
                </div>
            </div>





        </div>
    </section>




    { /* Footer Section */ }
    <footer>
        <div className="foot-panel1">
            Back to Top
        </div>

        <div className="foot-panel2">
            <ul>
                <p>Get to Know Us</p>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">About Amazon</a>
                <a href="#">Investor Relations</a>
            </ul>
            <ul>
                <p>Make Money with Us</p>
                <a href="#">Sell products on Amazon</a>
                <a href="#">Sell on Amazon Business</a>
                <a href="#">Become an Affiliate</a>
            </ul>
            <ul>
                <p>Amazon Payment Products</p>
                <a href="#">Amazon Business Card</a>
                <a href="#">Shop with Points</a>
                <a href="#">Reload Your Balance</a>
            </ul>
            <ul>
                <p>Let Us Help You</p>
                <a href="#">Your Account</a>
                <a href="#">Your Orders</a>
                <a href="#">Shipping Rates & Policies</a>
                <a href="#">Help</a>
            </ul>
        </div>

        <div className="foot-panel3">
            <div className="logo">
                <img src="resourse/iamge/amazon_PNG11.png" alt="Amazon Logo" />
            </div>
        </div>

        <div className="foot-panel4">
            <div className="pages">
                <a href="#">Conditions of Use</a>
                <a href="#">Privacy Notice</a>
                <a href="#">Your Ads Privacy Choices</a>
            </div>
            <div className="copyright" style={{ fontSize: 13 }}>
                © 2026 Abeje Zemene. This is a clone project built for educational and portfolio purposes only. Not affiliated with, endorsed, or sponsored by Amazon.com, Inc.
            </div>
        </div>
    </footer>


</>