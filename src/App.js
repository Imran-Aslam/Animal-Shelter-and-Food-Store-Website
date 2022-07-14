import "./App.css";
import Login from "./components/Login/Login";
import { Route, Switch } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
// import Header from "./components/header/Header";
import { Redirect } from "react-router-dom";
// import Footer from "./components/footer/Footer";
// import BannerHome from "./components/home/banner/BannerHome";
// import WelcomeHome from "./components/home/welcome/WelcomeHome";
// import CardPets from './components/UI/CardPets';
// import PetsHome from './components/home/pets/PetsHome';
// import responseGoogle from "./components/Login/GoogleLogin";
// import ReportHome from "./components/home/reports/ReportHome";
// import ReportHomeForm from "./components/home/reports/ReportHomeForm";
// import PetsHome from './components/home/pets/PetsHome';
// import CardDoners from './components/UI/CardDoners';
// import CardItems from "./components/UI/Cards/CardItems";
// import PetsHome from './components/home/pets/PetsHome';
// import WelcomeServices from './components/home/welcome/WelcomeServices';
// import TopDoners from './components/home/Doners/TopDoners';
// import HomeCampaign from './components/home/campaigns/HomeCampaign';
// import Signup from './components/home/signup/Signup';
// import CartHome from './components/home/cart/CartHome';
// import CardPets from './components/UI/Cards/CardPets';
// import CardTestimonial from "./components/UI/Cards/CardTestimonial";
// import TestimonialsHome from "./components/home/testimonials/TestimonialsHome";
// import WelcomeHome from './components/home/welcome/WelcomeHome';
import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/AboutUs";
// import Maps from "./components/UI/map/Maps";
import Shop from "./components/Shop/Shop";
// import CardPages from "./components/UI/Cards/CardPages";
import ProductDetail from "./components/Shop/ProductDetails/ProductDetail";
import Cart from "./components/Shop/Cart/Cart";
import Checkout from "./components/Shop/Checkout/Checkout";
import Pets from "./components/Pets/Pets";
// import CardPets from "./components/UI/Cards/CardPets";
// import PetDetails from "./components/Pets/PetsDetails/PetDetails";
import PetsInfo from "./components/Pets/PetsInfo/PetsInfo";
import PetsAdoption from "./components/Pets/PetsAdoption/PetsAdoption";
import Report from "./components/Report/Report";
import GoogleLogins from "./components/Login/GoogleLogin";
import Donation from "./components/Donation/Donation";
// import ErrorModals from "./components/UI/Modals/ErrorModals";
// import DonationHistory from "./components/UI/Modals/DonationHistory";
// import Signup from "./components/home/signup/Signup";
// import LoginModal from "./components/UI/Modals/LoginModal";
// import DonationModal from "./components/UI/Modals/DonationModal";
// import ReportModal from "./components/UI/Modals/ReportModal";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/homes" />
        </Route>
        <Route path="/homes">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/pets" exact>
          <Pets />
        </Route>
        <Route path="/report">
          <Report />
        </Route>
        <Route path="/adopt">
          <GoogleLogins />
        </Route>
        <Route path="/donate">
          <Donation />
        </Route>
        <Route path="/signup_login">
          <Login />
        </Route>

        <Route path="/shop/:productid/cart/checkout">
          <Checkout />
        </Route>
        <Route path="/shop/:productid" exact>
          <ProductDetail />
        </Route>
        <Route path="/shop" exact>
          <Shop />
        </Route>

        <Route path="/shop/:productid/cart" exact>
          <Cart />
        </Route>

        <Route path="/pets/:petid" exact>
          <PetsInfo />
        </Route>
        <Route path="/pets/:petid/adopt" exact>
          <PetsAdoption />
        </Route>
      </Switch>
      <NotificationContainer />
    </div>
  );
}

export default App;
