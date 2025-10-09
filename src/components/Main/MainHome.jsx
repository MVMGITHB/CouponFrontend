
import Hero from '../Hero/Hero';
// import Categories from '../Categories/Categories'; 
import Offers from '../Offers/Offers';
import Deals from '../Deals/Deals';
import Footer from '../Footer/Footer'
import Header from '../Header/Navbar';
import PopularBrand from "../popularBrand/PopularBrand"
const MainHome = () => {
  return (
    <>
      
      <Hero />
      {/* <Categories /> */}
     <PopularBrand />
      <Offers/>
      <Deals/>
      
    </>
  );
};

export default MainHome;
