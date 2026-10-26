import './Section.css'

// Background image
import fashionImg from '../../assets/resourse/iamge/amazon singLe 01.jpg';
import singleImg from '../../assets/resourse/iamge/amazon single.jpg';

// Card-3
import card31 from '../../assets/resourse/iamge/amazon electronic.jpg'
import card32 from '../../assets/resourse/iamge/amazon 00.jpg'
import card33 from '../../assets/resourse/iamge/single 111.jpg'
import card34 from '../../assets/resourse/iamge/amazon cloth.jpg'

// Card-4 
import card41 from '../../assets/resourse/iamge/amazon one.jpg'
import card42 from '../../assets/resourse/iamge/amazone one1.jpg'
import card43 from '../../assets/resourse/iamge/Amazoneee - Copy.jpg'
import card44 from '../../assets/resourse/iamge/amazon 00.jpg'

const Section = () => {
  return (
    <>
      {/* Hero Section & Product Cards Grid */}
      <section className="hero-section">
        {/* Hero Background Banner */}
        <div className="banner"></div>

        {/* Product Grid Container (ሁሉም 5 ረድፎች እዚህ ውስጥ ይገባሉ) */}
        <div className="shop-section">






          {/* ================= ROW 1 ================= */}
          {/* Card 1 */}
          <div className="box">
            <div className="box-content">
              <h2>Modern Fashion Collections</h2>
              <div className="box-img" style={{ backgroundImage: `url("${fashionImg}")` }}></div>
              <a href="#">Shop Fashion</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="box">
            <div className="box-content">
              <h2>New home arrivals under $50</h2>
              <div className="box-img" style={{ backgroundImage: `url("${singleImg}")`, width: "100%", height: "170px" }}></div>
              <a href="#">Shop Tools</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="box">
            <div className="box-content">
              <h2>Home Decor & Hardware</h2>
              <div className="box-quad">
                <div className="quad-item"><img src={card31} alt="Decor"/><p>Decor</p></div>
                <div className="quad-item"><img src={card32} alt="Hardware"/><p>Hardware</p></div>
                <div className="quad-item"><img src={card33} alt="Backpacks"/><p>Backpacks</p></div>
                <div className="quad-item"><img src={card34} alt="Collection"/><p>Collection</p></div>
              </div>
              <a href="#">See more</a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="box">
            <div className="box-content">
              <h2>Shop Fashion For less $100</h2>
              <div className="box-quad">
                <div className="quad-item"><img src={card41} alt="Decor"/><p>Coffee</p></div>
                <div className="quad-item"><img src={card42} alt="Hardware"/><p>Hardware</p></div>
                <div className="quad-item"><img src={card43} alt="Backpacks"/><p>Backpacks</p></div>
                <div className="quad-item"><img src={card44} alt="Collection"/><p>Collection</p></div>
              </div>
              <a href="#">See more</a>
            </div>
          </div>



          


          {/* ================= ROW 2 (Copy 1) ================= */}
          <div className="box">
            <div className="box-content">
              <h2>Modern Fashion Collections</h2>
              <div className="box-img" style={{ backgroundImage: `url("${fashionImg}")` }}></div>
              <a href="#">Shop Fashion</a>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>New home arrivals under $50</h2>
              <div className="box-img" style={{ backgroundImage: `url("${singleImg}")`, width: "100%", height: "170px" }}></div>
              <a href="#">Shop Tools</a>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>Home Decor & Hardware</h2>
              <div className="box-quad">
                <div className="quad-item"><img src={card31} alt="Decor"/><p>Decor</p></div>
                <div className="quad-item"><img src={card32} alt="Hardware"/><p>Hardware</p></div>
                <div className="quad-item"><img src={card33} alt="Backpacks"/><p>Backpacks</p></div>
                <div className="quad-item"><img src={card34} alt="Collection"/><p>Collection</p></div>
              </div>
              <a href="#">See more</a>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>Shop Fashion For less $100</h2>
              <div className="box-quad">
                <div className="quad-item"><img src={card41} alt="Decor"/><p>Coffee</p></div>
                <div className="quad-item"><img src={card42} alt="Hardware"/><p>Hardware</p></div>
                <div className="quad-item"><img src={card43} alt="Backpacks"/><p>Backpacks</p></div>
                <div className="quad-item"><img src={card44} alt="Collection"/><p>Collection</p></div>
              </div>
              <a href="#">See more</a>
            </div>
          </div>


          {/* ================= ROW 3 (Copy 2) ================= */}
          <div className="box">
            <div className="box-content">
              <h2>Modern Fashion Collections</h2>
              <div className="box-img" style={{ backgroundImage: `url("${fashionImg}")` }}></div>
              <a href="#">Shop Fashion</a>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>New home arrivals under $50</h2>
              <div className="box-img" style={{ backgroundImage: `url("${singleImg}")`, width: "100%", height: "170px" }}></div>
              <a href="#">Shop Tools</a>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>Home Decor & Hardware</h2>
              <div className="box-quad">
                <div className="quad-item"><img src={card31} alt="Decor"/><p>Decor</p></div>
                <div className="quad-item"><img src={card32} alt="Hardware"/><p>Hardware</p></div>
                <div className="quad-item"><img src={card33} alt="Backpacks"/><p>Backpacks</p></div>
                <div className="quad-item"><img src={card34} alt="Collection"/><p>Collection</p></div>
              </div>
              <a href="#">See more</a>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>Shop Fashion For less $100</h2>
              <div className="box-quad">
                <div className="quad-item"><img src={card41} alt="Decor"/><p>Coffee</p></div>
                <div className="quad-item"><img src={card42} alt="Hardware"/><p>Hardware</p></div>
                <div className="quad-item"><img src={card43} alt="Backpacks"/><p>Backpacks</p></div>
                <div className="quad-item"><img src={card44} alt="Collection"/><p>Collection</p></div>
              </div>
              <a href="#">See more</a>
            </div>
          </div>


          {/* ================= ROW 4 (Copy 3) ================= */}
          <div className="box">
            <div className="box-content">
              <h2>Modern Fashion Collections</h2>
              <div className="box-img" style={{ backgroundImage: `url("${fashionImg}")` }}></div>
              <a href="#">Shop Fashion</a>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>New home arrivals under $50</h2>
              <div className="box-img" style={{ backgroundImage: `url("${singleImg}")`, width: "100%", height: "170px" }}></div>
              <a href="#">Shop Tools</a>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>Home Decor & Hardware</h2>
              <div className="box-quad">
                <div className="quad-item"><img src={card31} alt="Decor"/><p>Decor</p></div>
                <div className="quad-item"><img src={card32} alt="Hardware"/><p>Hardware</p></div>
                <div className="quad-item"><img src={card33} alt="Backpacks"/><p>Backpacks</p></div>
                <div className="quad-item"><img src={card34} alt="Collection"/><p>Collection</p></div>
              </div>
              <a href="#">See more</a>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>Shop Fashion For less $100</h2>
              <div className="box-quad">
                <div className="quad-item"><img src={card41} alt="Decor"/><p>Coffee</p></div>
                <div className="quad-item"><img src={card42} alt="Hardware"/><p>Hardware</p></div>
                <div className="quad-item"><img src={card43} alt="Backpacks"/><p>Backpacks</p></div>
                <div className="quad-item"><img src={card44} alt="Collection"/><p>Collection</p></div>
              </div>
              <a href="#">See more</a>
            </div>
          </div>


          {/* ================= ROW 5 (Copy 4) ================= */}
          <div className="box">
            <div className="box-content">
              <h2>Modern Fashion Collections</h2>
              <div className="box-img" style={{ backgroundImage: `url("${fashionImg}")` }}></div>
              <a href="#">Shop Fashion</a>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>New home arrivals under $50</h2>
              <div className="box-img" style={{ backgroundImage: `url("${singleImg}")`, width: "100%", height: "170px" }}></div>
              <a href="#">Shop Tools</a>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>Home Decor & Hardware</h2>
              <div className="box-quad">
                <div className="quad-item"><img src={card31} alt="Decor"/><p>Decor</p></div>
                <div className="quad-item"><img src={card32} alt="Hardware"/><p>Hardware</p></div>
                <div className="quad-item"><img src={card33} alt="Backpacks"/><p>Backpacks</p></div>
                <div className="quad-item"><img src={card34} alt="Collection"/><p>Collection</p></div>
              </div>
              <a href="#">See more</a>
            </div>
          </div>

          <div className="box">
            <div className="box-content">
              <h2>Shop Fashion For less $100</h2>
              <div className="box-quad">
                <div className="quad-item"><img src={card41} alt="Decor"/><p>Coffee</p></div>
                <div className="quad-item"><img src={card42} alt="Hardware"/><p>Hardware</p></div>
                <div className="quad-item"><img src={card43} alt="Backpacks"/><p>Backpacks</p></div>
                <div className="quad-item"><img src={card44} alt="Collection"/><p>Collection</p></div>
              </div>
              <a href="#">See more</a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Section;