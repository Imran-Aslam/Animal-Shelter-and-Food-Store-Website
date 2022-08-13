import React from "react";
import Header from "../header/Header.js"
import Footer from "../footer/Footer.js"
import BannerHome from "./banner/BannerHome.js"
import WelcomeHome from "./welcome/WelcomeHome";
import WelcomeServices from "./welcome/WelcomeServices";
import PetsHome from "./pets/PetsHome";
import ReportHome from "./reports/ReportHome";
import TopDoners from "./Doners/TopDoners";
import HomeCampaign from "./campaigns/HomeCampaign";
import CartHome from "./cart/CartHome";
import Signup from "./signup/Signup";
const Home = ()=>{
    return(<>
       <Header/>
       <BannerHome/>
       <WelcomeHome/>
       <WelcomeServices/>
       <PetsHome/>
       <ReportHome/>
       <TopDoners/>
       <HomeCampaign/>
       <CartHome/>
       <Signup/>
       <Footer/>

    </>)
}
export default Home;