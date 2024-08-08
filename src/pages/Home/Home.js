// <--- Home Import Start --->
import React from "react";
// <----Banner Imports start---->
import { HiPhone } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import OurStory from "../../components/OurStory/OurStory";

import MobileBannerImg from "../../assets/images/MobileBanner.jpeg";
// <----Banner Imports End---->

// <----Our Products Import start---->
import cardsData from "../../components/card/card";
import ProductCard from "../../components/Cards/ProductsCard";
//<----Our Products Imports End---->

// <---Latest Upadtes Import start ---->
import cardOne from "../../components/card/cardOne";
import ProductsCard from "../../components/Cards/ProductsCard";
// <---Latest Upadtes Import End ---->

// <----backgroundImageContainer Import Start---->
import Footer from "../../components/Footer/Footer";
import OffersUpdates from "../../components/OffersUpadtes/OffersUpdates";
// <----backgroundImageContainer Import End---->
import styles from "./styles.module.css";
import OurPagecard from "../../components/card/ourPagecard";
import photoGallery from "../../components/card/photGallery";
import PhotoGalleryCard from "../../components/PhotoGallery";
import Carousel from "react-elastic-carousel";
import MobileNavbar from "../../components/MobileNavbar";

import { useNavigate } from "react-router-dom";
import ChatwithUS from "../../components/chatWithUs/chatWithUs";
import Modal from "../../components/PopUp/Modal";

const Home = () => {
  // carousel start
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  // carousel end

  const navigate = useNavigate();
  return (
    <div id="home" className={styles.homeMain}>
      {/*<-----Main start----> */}
      <div className={styles.MainContainer}>
        <ChatwithUS />
        <div className={styles.bannerContainer}>
          {/* Banner start */}
          {/*<--- Header start--->*/}
          <Header />
          {/*<--- Header End--->*/}

          {/*<---Navbar start--->*/}
          <Navbar NavbarMenuItems={styles.NavbarMenuItems} />
          {/* <--- Navbar End---> */}

          <div className={styles.bannerContent}>
            <div className={styles.bannerHeading}>
              <h1>SRUTHI CONSTRUCTIONS & READY MIX CONCRETE SUPPLIERS</h1>
            </div>

            <div className={styles.bannerContactInfo}>
              <div className={styles.bannerContactDetails}>
                <div className={styles.bannerContactPhone}>
                  <div className={styles.bannerContactPhoneIcon}>
                    <HiPhone />
                  </div>
                  <div className={styles.bannerContactPhoneNum}>
                    08048809703
                  </div>
                </div>
                <div className={styles.bannerContactLocation}>
                  <div className={styles.bannerContactLocation}>
                    <ImLocation />
                  </div>
                  <div className={styles.bannerContactLocationDetails}>
                    <h3>Dhammaiguda, India</h3>
                  </div>
                </div>
              </div>
              <div className={styles.bannerContactButtons}>
                <button>OUR PRODUCTS</button>
                <button>MAKE AN ENQUIRY</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bannerMobileContainer}>
          <div className={styles.bannerMobileInsideContainer}>
            <div className={styles.bannerMobileBackgroungImg}>
              <img src={MobileBannerImg} alt="mobileBannerImg" />
            </div>
            <div className={styles.bannerMobileHeading}>
              <h1>SRUTHI CONSTRUCTIONS</h1>
            </div>
            <div className={styles.bannerDescription}>
              <p>
                SERVIECES: At Sruthi Ready Mixed Concrete ( SRUTHI READY MIX
                CONCRETE ) is delivered in its completely robotized and
                electronic cement grouping plants. Sruthi READY MIX Concrete
                produces and supplies cement blends, which are structured in its
                well-prepared research centers according to built up strategies
                to follow different arrangements of Indian Standards. Sruthi
                READY MIX Concrete's accomplished c...
              </p>
            </div>
            <div className={styles.bannerMobileContactButtons}>
              <button onClick={() => navigate("/products")}>
                OUR PRODUCTS
              </button>
              {/* <button
                onClick={() =>
                  document
                    .getElementById("footer")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                MAKE AN ENQUIRY
              </button> */}
              <Modal />
            </div>
          </div>
        </div>

        {/* Banner End */}
        {/*<---Our Story start---> */}
        <OurStory />
        {/*<--- Our Story End--->*/}
      </div>
      {/*<---Main End--- >*/}

      {/*<---Our Products start---> */}
      <div className={styles.ourProductsContainer}>
        <div className={styles.ourProductsContainerHeading}>
          <h3>Our Products</h3>
        </div>
        <div className={styles.ourProductContainer} id="products">
          <Carousel
            breakPoints={breakPoints}
            enableAutoPlay={true}
            // className={styles.stylingexample}
          >
            {cardsData &&
              cardsData.map((item, index) => (
                <ProductCard
                  key={index}
                  cardImg={item.cardImg}
                  cardName={item.cardName}
                  cardDiscount={item.cardDiscount}
                  originalPrice={item.originalPrice}
                  offerPrice={item.offerPrice}
                  cartBtn={true}
                  imageOverlayStyle={styles.imageOverlayStyle}
                  imageOverlayViewStyle={styles.imageOverlayViewStyle}
                />
              ))}
          </Carousel>
        </div>

        <div className={styles.ourProductsBottomHeading}>
          <h3 onClick={() => navigate("/products")}>VIEW ALL PRODUCTS</h3>
        </div>
      </div>

      {/* our products end */}

      {/*<---Latest Upadates start--->*/}
      <div className={styles.latestUpdatesMainContainer}>
        <div className={styles.latestUpdatesContainer}>
          <div className={styles.latestUpdatesHeading}>
            <h3>Latest Upadtes</h3>
          </div>

          <div className={styles.latestUpadtesCardContainer}>
            {cardOne &&
              cardOne.map((item, index) => {
                if (index === 0 || index === 1) {
                  return (
                    <ProductsCard
                      key={index}
                      cardImg={item.cardOneImg}
                      cardName={item.cardOneDesc}
                      date={item.cardOneLeft}
                      readMore={"Read More"}
                      cartBtn={false}
                      productsContainerCards={styles.latestUpdateCards}
                      productsContainerCardsBottomDesc={
                        styles.latestUpdatesBottomDesc
                      }
                      productsContainerCard_img={styles.latestUpdates_img}
                      updatesOverlay={styles.updatesOverlay}
                    />
                  );
                }
              })}
          </div>

          <div className={styles.latestUpdatesBottomHeading}>
            <h3 onClick={() => navigate("/updates")}>VIEW ALL UPDATES</h3>
          </div>
        </div>
      </div>
      {/*<---Latest Upadates End--->*/}

      {/*<--- BackgroundImageContainer start--->*/}
      <div className={styles.backgroundImageContainer}>
        {/*<---offersUpdates start--->*/}
        <OffersUpdates />
        {/*<---offersUpdates end--->*/}

        {/*<---Photo Gallery start--->*/}

        <div className={styles.photoGalleryContainer}>
          <div className={styles.photoGalleryHeading}>
            <h3>PhotoGallery</h3>
          </div>
          <div className={styles.photoGalleryOuterContainerStyle}>
            <Carousel
              className="rec.rec-arrow"
              breakPoints={breakPoints}
              showArrows={false}
              enableAutoPlay={true}
              enableMouseSwipe={true}
            >
              {photoGallery &&
                photoGallery.map((item, index) => {
                  return (
                    <PhotoGalleryCard
                      key={index}
                      GalleryImg={item.GalleryImg}
                    />
                  );
                })}
            </Carousel>
          </div>

          <div className={styles.photoGalleryBottomHeading}>
            <h3 onClick={() => navigate("/gallery")}>VIEW ALL PHOTOS</h3>
          </div>
        </div>
        {/*<---Photo Gallery End--->*/}

        {/* Ourpages start*/}
        <div className={styles.OurpageContainer}>
          <div className={styles.OurpageContainerHeading}>
            <h3>Our Pages</h3>
          </div>
          <div className={styles.OurpageContainerCard}>
            {OurPagecard &&
              OurPagecard.map((item, index) => (
                <ProductCard
                  key={index}
                  cardName={item.ourPageCardName}
                  date={item.cardOneLeft}
                  readMore={"Read More"}
                  productsContainerCardsBottomDesc={
                    styles.latestUpdatesBottomDesc
                  }
                  productsContainerCards={styles.ourPageContainerCard}
                  productsContainerCardsName={styles.ourPageCardName}
                />
              ))}
          </div>
          <div className={styles.OurpageContainerBottomHeading}>
            <h3 onClick={() => navigate("/more")}>CHECK ALL PAGES</h3>
          </div>
        </div>
        {/* Ourpages end*/}

        {/*---Footer start---*/}
        <Footer Id="footer" />
        {/*<---Footer End--->*/}
      </div>
      {/*<-----BackgroundImageContainer end----->*/}
      <MobileNavbar />
    </div>
  );
};

export default Home;
