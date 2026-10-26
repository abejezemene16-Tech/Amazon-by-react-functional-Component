import './Footer.css'
import logo1 from '../../assets/resourse/iamge/amazon_PNG11.png'


const Footer = () => {
  return (
    <>

    {/* <!-- Footer Section --> */}
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
                <img src={logo1} alt="Amazon Logo"/>
            </div>
        </div>

        <div className="foot-panel4">
            <div className="pages">
                <a href="#">Conditions of Use</a>
                <a href="#">Privacy Notice</a>
                <a href="#">Your Ads Privacy Choices</a>
            </div>
            <div className="copyright" style
            ={{fontSize: "13px"}}>
                &copy; 2026 Abeje Zemene. This is a clone project built for educational and portfolio purposes only. Not affiliated with, endorsed, or sponsored by Amazon.com, Inc.
            </div>
        </div>
    </footer>

    </>
)
}

export default Footer;
