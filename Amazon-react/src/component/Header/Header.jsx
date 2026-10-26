
import './Header.css'

import logo from '../../assets/resourse/iamge/amazon_PNG11.png'


const Header = () =>  {

  return (
    <>


    {/* <!-- Header -->  */}
    <header> 
        {/* <!-- Main Navigation Bar --> */}
        <div className="navbar">

            <div className="nav-logo border">
                <div className="logo">
                    <img src={logo} alt="Amazon Logo"/>
                </div>
            </div>

            <div className="nav-address border">
                <p className="add-first">Deliver to</p>
                <div className="add-icon">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="add-second">Ethiopia</p>
                </div>
            </div>

            {/* <!-- Search Bar --> */}
            <div className="nav-search">
                <select name="search-category" id="search-category" className="search-select">
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="electronics">Electronics</option>
                    <option value="computers">Computers</option>
                </select>

                <input type="text" className="search-input" placeholder="Search Amazon"/>

                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            {/* <!-- Sign In --> */}
            <div className="nav-sign border">
                <p><span>Hello, Sign in</span></p>
                <p className="nav-second">Account & Lists</p>
            </div>

            {/* <!-- Returns & Orders --> */}
            <div className="nav-return border">
                <p><span>Returns</span></p>
                <p className="nav-second">& Orders</p>
            </div>

            {/* <!-- Cart --> */}
            <div className="nav-cart border">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Cart</span>
            </div>

        </div>


        

        {/* <!-- Sub Panel Navigation --> */}
        <div className="panel">
            <div className="panel-all border">
                <i className="fa-solid fa-bars"></i>
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

    </>
    
  )
}

export default Header;