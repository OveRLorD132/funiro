import { useRef, useState } from 'react';
import './App.css';
import ShopProduct from './ShopProduct';
import Product from './Product';
import RoomDesign from './RoomDesign';
import Tip from './Tip';

function App() {
  let picturesContainer = useRef(null);
  let products = [
    {
      source: '/2.jpg',
      header: 'Sofa 1',
      description: 'Sofa description',
      price: 100,
      index: 1
    },
    {
      source: '/3.jpg',
      header: 'Sofa 2',
      description: 'Sofa description',
      price: 100,
      index: 2
    },
    {
      source: '/4.jpg',
      header: 'Sofa 3',
      description: 'Sofa description',
      price: 100,
      index: 3
    },
    {
      source: '/5.jpg',
      header: 'Sofa 4',
      description: 'Sofa description',
      price: 100,
      index: 4
    },
  ]
  let infoArray = [
    {
      header: 'High Quality',
      description: 'crafted from top materials',
      source: '/trophy.png'
    },
    {
      header: 'Warrany Protection',
      description: 'Over 2 years',
      source: '/tick.png'
    },
    {
      header: 'Free Shipping',
      description: 'Order over 150 $',
      source: '/shipping.png'
    },
    {
      header: '24 / 7 Support',
      description: 'Dedicated support',
      source: '/support.png'
    }
  ];
  let ourProducts = [
    {
      source: '/cup.jpg',
      title: 'Muggo',
      type: 'Small mug',
      price: 150,
      sale: 0,
      isNew: true
    },
    {
      source: '/lamp.jpg',
      title: 'Grifo',
      type: 'Night lamp',
      price: 1500,
      sale: 0,
      isNew: false
    },
    {
      source: '/bed set.jpg',
      title: 'Pinkgy',
      type: 'Cute bed set',
      price: 14000,
      sale: 50,
      isNew: false
    },
    {
      source: '/fan.jpg',
      title: 'Respira',
      type: 'Minimalist fan',
      price: 500,
      sale: 0,
      isNew: true
    },
    {
      source: '/pot.jpg',
      title: 'Potty',
      type: 'Minimalist flower pot',
      price: 500,
      sale: 0,
      isNew: true
    },
    {
      source: '/chair.jpg',
      title: 'Leviosa',
      type: 'Sylish cafe chair',
      price: 2500,
      sale: 0,
      isNew: false
    },
    {
      source: '/table.jpg',
      title: 'Syltherine',
      type: 'Sylish cafe chair',
      price: 3500,
      sale: 30,
      isNew: false
    },
    {
      source: '/sofa.jpg',
      title: 'Lolito',
      type: 'Luxury big sofa',
      price: 7000,
      sale: 50,
      isNew: false
    },
  ]
  let [imagesPage, setPage] = useState(1);
  function nextPage() {
    if(imagesPage === 4) return;
    setPage(imagesPage + 1);
    setTimeout(changeScroll(imagesPage + 1), 100)
  }
  function pageBack() {
    if(imagesPage === 1) return;
    setPage(imagesPage - 1);
    setTimeout(changeScroll(imagesPage - 1), 100)
  }
  function changeScroll(page) {
    switch (page) {
      case 1:
        picturesContainer.current.scrollLeft = 0;
        break;
      case 2:
        picturesContainer.current.scrollLeft = 650;
        break;
      case 3:
        picturesContainer.current.scrollLeft = 1500;
        break;
      case 4:
        picturesContainer.current.scrollLeft = 2800;
        break;
      default: 
        break;
    }
  }
  let rooms = [
    {
      source: '/room-1.jpg',
      index: 1,
      name: 'Bed Room',
      description: 'Inner Peace'
    },
    {
      source: '/room-2.jpg',
      index: 2,
      name: 'Bed Room',
      description: 'Inner Peace'
    },
    {
      source: '/room-3.jpg',
      index: 3,
      name: 'Bed Room',
      description: 'Inner Peace'
    },
    {
      source: '/room-4.jpg',
      index: 4,
      name: 'Bed Room',
      description: 'Inner Peace'
    }
  ]
  let [roomsPage, setRoomPage] = useState(1);
  let currentRoomPage = 1;
  let roomsDesign = useRef(null);
  function roomNext() {
    if(roomsPage === 4) return;
    setRoomPage(roomsPage + 1);
    currentRoomPage = roomsPage + 1;
    roomsDesign.current.style.transform = `translateX(-${(currentRoomPage - 1) * 370}px)`;
  }
  function roomBack() {
    if(roomsPage === 1) return;
    setRoomPage(roomsPage - 1);
    currentRoomPage = roomsPage - 1;
    roomsDesign.current.style.transform = `translateX(-${(currentRoomPage - 1) * 370}px)`;
  }
  let tips = [
    {
      source: 'tip1.jpg',
      header: 'How to create a living room to love',
      date: '20 jan 2020'
    },
    {
      source: 'tip2.jpg',
      header: 'Solution for clean look for working space',
      date: '10 jan 2020'
    },
    {
      source: 'tip3.jpg',
      header: 'Make your cooking activity ',
      date: '20 jan 2020'
    },
    {
      source: 'tip4.jpg',
      header: 'Some tip',
      date: '20 jan 2020'
    }
  ]
  let tipPage = 1;
  let [currentTip, setCurrentTip] = useState(1);
  let tipsCont = useRef(null);
  function nextTip() {
    if(currentTip === tips.length) return;
    setCurrentTip(currentTip + 1);
    if((currentTip + 1) / 3 - tipPage > 0) {
      tipPage++;
      tipsCont.current.scrollLeft += 1030;
    }
  }
  function tipBack() {
    if(currentTip === 1) return;
    setCurrentTip(currentTip - 1);
    if((currentTip - 1) % 3 === 0) {
      tipPage--;
      tipsCont.current.scrollLeft -= 1030;
    }
  }
  let furnitureSources = [
    '/furniture-images/1.jpg',
    '/furniture-images/2.jpg',
    '/furniture-images/3.jpg',
    '/furniture-images/4.jpg',
    '/furniture-images/5.jpg',
    '/furniture-images/6.jpg',
    '/furniture-images/7.jpg',
    '/furniture-images/8.jpg',
  ]
  return (
    <div className="main-cont">
      <div className="main-info-cont">
        <div className="upper-line">
          <div className="line-left">
            <div className="name-lbl">Funiro.</div>
            <div className="category-btn">
              <div className="category-text">Products</div>
              <img src="/choose-arrow.png" className="category-img" alt="" />
            </div>
            <div className="category-btn">
              <div className="category-text">Rooms</div>
              <img src="/choose-arrow.png" className="category-img" alt="" />
            </div>
            <div className="category-btn category-text">Inspirations</div>
            <div className="search-input-cont">
              <img className="search-img" src="/search.png" alt="" />
              <input
                type="text"
                className="search-input"
                placeholder="Search for minimalist chair"
              />
            </div>
          </div>
          <div className="line-right">
            <img
              className="right-btn wishlist-btn"
              src="/wishlist.png"
              alt=""
            />
            <img className="right-btn products-btn" src="/cart.png" alt="" />
            <img className="right-btn user-btn" src="/user.png" alt="" />
          </div>
        </div>
        <div className="shop-info-cont">
          <div className="overlay">
            <div className="shop-overlay">
              <div className="shop-lbl">
                High-Quality Furniture Just For You
              </div>
              <div className="shop-desc">
                Our furniture is made from selected and best quality materials
                that are suitable for your dream home
              </div>
              <div className="shop-btn">Shop Now</div>
            </div>
            <div className="pages-info-cont">
              <div className="pages">
                <div
                  className="page"
                  style={{ borderColor: imagesPage === 1 ? "#e89f71" : "" }}
                >
                  <div
                    className="page-index"
                    style={{
                      backgroundColor: imagesPage === 1 ? "#e89f71" : "",
                    }}
                  ></div>
                </div>
                <div
                  className="page"
                  style={{ borderColor: imagesPage === 2 ? "#e89f71" : "" }}
                >
                  <div
                    className="page-index"
                    style={{
                      backgroundColor: imagesPage === 2 ? "#e89f71" : "",
                    }}
                  ></div>
                </div>
                <div
                  className="page"
                  style={{ borderColor: imagesPage === 3 ? "#e89f71" : "" }}
                >
                  <div
                    className="page-index"
                    style={{
                      backgroundColor: imagesPage === 3 ? "#e89f71" : "",
                    }}
                  ></div>
                </div>
                <div
                  className="page"
                  style={{ borderColor: imagesPage === 4 ? "#e89f71" : "" }}
                >
                  <div
                    className="page-index"
                    style={{
                      backgroundColor: imagesPage === 4 ? "#e89f71" : "",
                    }}
                  ></div>
                </div>
              </div>
              <div className="pages-btns">
                <img
                  src={`${
                    imagesPage === 1 ? "/imgButton.png" : "/imgButtonActive.png"
                  }`}
                  alt=""
                  className="page-btn"
                  style={{
                    backgroundColor: imagesPage === 1 ? "#ffe1b7" : "#e89f71",
                  }}
                  onClick={pageBack}
                />
                <img
                  src={`${
                    imagesPage === 4 ? "/imgButton.png" : "/imgButtonActive.png"
                  }`}
                  alt=""
                  className="page-btn"
                  style={{
                    backgroundColor: imagesPage === 4 ? "#ffe1b7" : "#e89f71",
                    transform: "scaleX(-1)",
                    marginLeft: "20px",
                  }}
                  onClick={nextPage}
                />
              </div>
            </div>
          </div>
          <div className="pictures-container" ref={picturesContainer}>
            <img className="scroll-img" src="/1.jpg" alt="" />
            {products.map((product, index) => (
              <ShopProduct product={product} page={imagesPage} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="company-info-cont">
        {infoArray.map((component, index) => (
          <div className="info-component">
            <img className="component-image" src={component.source} alt="" />
            <div className="component-right">
              <div className="component-header">{component.header}</div>
              <div className="component-description">
                {component.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="products-lbl">Our Products</div>
      <div className="products-cont">
        {ourProducts.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
      <div className="btn-cont">
        <div className="more-btn">Show More</div>
      </div>
      <div className="rooms-design-cont">
        <div className="design-left">
          <div className="left-header">50+ Beautiful rooms inspiration</div>
          <div className="left-description">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </div>
          <div className="left-btn">Explore more</div>
        </div>
        <div className="rooms-pages">
          <div
            className="page"
            style={{ borderColor: roomsPage === 1 ? "#e89f71" : "" }}
          >
            <div
              className="page-index"
              style={{ backgroundColor: roomsPage === 1 ? "#e89f71" : "" }}
            ></div>
          </div>
          <div
            className="page"
            style={{ borderColor: roomsPage === 2 ? "#e89f71" : "" }}
          >
            <div
              className="page-index"
              style={{
                backgroundColor: roomsPage === 2 ? "#e89f71" : "",
              }}
            ></div>
          </div>
          <div
            className="page"
            style={{ borderColor: roomsPage === 3 ? "#e89f71" : "" }}
          >
            <div
              className="page-index"
              style={{
                backgroundColor: roomsPage === 3 ? "#e89f71" : "",
              }}
            ></div>
          </div>
          <div
            className="page"
            style={{ borderColor: roomsPage === 4 ? "#e89f71" : "" }}
          >
            <div
              className="page-index"
              style={{
                backgroundColor: roomsPage === 4 ? "#e89f71" : "",
              }}
            ></div>
          </div>
        </div>
        <div className="design-right">
          <div className="room-design" ref={roomsDesign}>
            {rooms.map((room, index) => (
              <RoomDesign room={room} page={roomsPage} key={index} />
            ))}
          </div>
          <div className="page-btns">
            <div
              className="room-btn"
              onClick={roomBack}
              style={{ opacity: roomsPage === 1 ? "0" : "100%" }}
            >
              <img src="/imgButton.png" className="room-page-img" alt="" />
            </div>

            <div
              onClick={roomNext}
              className="room-btn"
              style={{
                transform: "scaleX(-1)",
                opacity: roomsPage === 4 ? "0" : "100%",
              }}
            >
              <img src="/imgButton.png" className="room-page-img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="products-lbl">Tips & Tricks</div>
      <div className="tips-main-cont">
        <div className="tips-btns">
          <div
            className="room-btn"
            onClick={tipBack}
            style={{ opacity: currentTip === 1 ? "0" : "100%" }}
          >
            <img src="/imgButton.png" className="room-page-img" alt="" />
          </div>

          <div
            onClick={nextTip}
            className="room-btn"
            style={{
              transform: "scaleX(-1)",
              opacity: currentTip === tips.length ? "0" : "100%",
            }}
          >
            <img src="/imgButton.png" className="room-page-img" alt="" />
          </div>
        </div>
        <div className="tips-cont" ref={tipsCont}>
          {tips.map((tip, index) => (
            <Tip tip={tip} index={index} currentTip={currentTip} />
          ))}
        </div>
      </div>
      <div className="tips-pages">
        {tips.map((_, index) => (
          <div
            className="page"
            style={{ borderColor: index + 1 === currentTip ? "#e89f71" : "" }}
          >
            <div
              className="page-index"
              style={{
                backgroundColor: index + 1 === currentTip ? "#e89f71" : "",
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className='share-lbl'>Share your setup with</div>
      <div className='products-lbl'>#FuniroFurniture</div>
      <div className='furniture-cont'>
        {furnitureSources.map((source, index) => (
          <img src={source} alt='' className='furniture-image'/>
        ))}
      </div>
      <div className='company-contacts'>
        <div className='column'>
          <div className='column-header'>Funiro.</div>
          <div className='column-text'>
            Worldwide furniture store since 2020. We sell over 1000+ branded products on our website
          </div>
          <div className='column-text'>
            <img className='column-image' src='/place.png' alt=''/>
            Sawojajar Malang, Indonesia
          </div>
          <div className='column-text'>
            <img className='column-image' src='/phone.png' alt=''/>
            +6289 456 3455
          </div>
          <div className='column-text'>
            www.funiro.com
          </div>
        </div>
        <div className='column'>
          <div className='column-header'>Menu</div>
          <div className='column-text column-link'>Products</div>
          <div className='column-text column-link'>Rooms</div>
          <div className='column-text column-link'>Inspirations</div>
          <div className='column-text column-link'>About Us</div>
          <div className='column-text column-link'>Terms & Policy</div>
        </div>
        <div className='column'>
          <div className='column-header'>Account</div>
          <div className='column-text column-link'>My Account</div>
          <div className='column-text column-link'>Checkout</div>
          <div className='column-text column-link'>My Cart</div>
          <div className='column-text column-link'>My catalog</div>
        </div>
        <div className='column'>
          <div className='column-header'>Stay Connected</div>
          <div className='column-text column-link'>Facebook</div>
          <div className='column-text column-link'>Instagram</div>
          <div className='column-text column-link'>Twitter</div>
        </div>
        <div className='column'>
          <div className='column-header'>Stay Updated</div>
          <div className='column-text'>
            <input type='text' className='email-input' placeholder='Enter your email'/>
            <img className='submit-btn' src='/to-page.png' alt=''/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;