import React from 'react';

const productsData = [
  {
    id: 1,
    imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png.webp',
  },
  {
    id: 2,
    imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular2.png.webp',
  },
  {
    id: 3,
    imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular3.png.webp',
  },
  {
    id: 4,
    imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png.webp',
  },
  {
    id: 5,
    imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png.webp',
  },
  {
    id: 6,
    imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png.webp',
  },
];

const PopularItems = () => {
  return (
    <section className="popular-iteams py-200">
      <div className="container">
        <div className="row">
          <div className="popular-content text-center">
            <h2 style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "48px", fontWeight: "700" }}>Popular Items</h2>
            <p style={{ marginBottom: "110px" }}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Quis ipsum suspendisse ultrices gravida.</p>
          </div>
        </div>
        <div className="row">
          {productsData.map(product => (
            <div key={product.id} className="col-4">
              <div className="single-pop-iteams mb-50">
                <div className="product-img">
                  <img src={product.imageUrl} alt={`${product.id}`} />
                  <div className="img-cap">
                    <button className="text-center">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="banner-btn text-center text-light" style={{ paddingTop: "70px" }}>
          <a href="#" className="btn hero-btn" style={{ backgroundColor: "#4a4a4b", textTransform: "uppercase" }}>
            View More Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
