import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import CardPages from "../../UI/Cards/CardPages";
import "./PetDetails.css";
import IconHr from "../../UI/IconHr";
const PetDetails = ()=>{
    return(<>
        <Header/>
        <CardPages name="Pets Adoption"/>
        <div className="PetDetails__maindiv">
        <div className="PetDetails__bgdiv">
        <h1 className="PetDetails__h1">
            Save A Life By Adopting An Animal
        </h1>
        <p className="PetDetails__p">Why Adopt Pets??</p> 
       <div className="PetDetails__benefitsdiv"> <h2 className="PetDetails__h2 PetDetails__color1">
            You will save a life
        </h2>
        <p className="PetDetails__p2">
        Each year, it's estimated that more than one million adoptable dogs and cats are euthanized in the United States, simply because too many pets come into shelters and too few people consider adoption when looking for a pet.

The number of euthanized animals could be reduced dramatically if more people adopted pets instead of buying them. When you adopt, you save a loving animal by making them part of your family and open up shelter space for another animal who might desperately need it.
        </p>
        </div>
        <div className="PetDetails__benefitsdiv"><h2 className="PetDetails__h2">
            Your home will thank you.
        </h2>
        <p className="PetDetails__p2">
        Many of the pets from shelters and rescues are already house-trained, which means you’re not only saving a pet’s life, you may be saving your rug. Adopting a mature pet not only gives older animals a second chance, it often means introducing them to your family will be much easier.
        </p>
        </div>
       <div className="PetDetails__benefitsdiv"> <h2 className="PetDetails__h2 PetDetails__color2">
        You'll change a homeless animal's whole world.
        </h2>
        <p className="PetDetails__p2">
        And get a new best friend out of the deal. Seriously, what could be better than that?
        </p>
        </div>
        <div className="PetDetails__btn__div">
        <button className="PetDetails__btn">View All Pets</button>
        </div>
            </div>
        </div>
        <IconHr/>
        <hr/>
        <Footer/>
    </>)
}
export default PetDetails;