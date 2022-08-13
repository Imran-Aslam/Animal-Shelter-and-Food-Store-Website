import React from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import IconHr from "../../../components/UI/IconHr";
import { Link } from 'react-router-dom';
import CardPages from '../../UI/Cards/CardPages';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import Image1 from "../../../images/aboutus/cat1.jpg"
import { useDispatch,useSelector } from 'react-redux';
import Image2 from "../../../images/aboutus/dog2.jpg";
import { Carousel } from 'react-bootstrap';
import { petActions } from '../../../store/Pets-slice';
import { Dummy__pets } from '../Pets';
import "./PetsInfo.css"
const PetsInfo = ()=>{
  const params = useParams();
  console.log("params pets are,",params);
  const pet = Dummy__pets.find(pet=>pet.id===params.petid);
  console.log("pet detail is",pet);

  const dispatch = useDispatch();
  dispatch(petActions.addPetsData({
      id:params.petid,
      name:pet.name,
      age:pet.age,
      size:pet.size,
      weight:pet.weight,
      color:pet.color,
      city:pet.city,
      breed:pet.breed

  }))
  const petReducer = useSelector(state=>state.pet.petsData)
  console.log("reducer pets data is ",petReducer);
    return(<>
        <Header/>
        <CardPages name="Pet Details"/>
        <div className="PetsInfo__maindiv">
        <div className="PetsInfo__bgdiv">
            <h1  className="PetsInfo__h1">Adopt Pet Of Your Choice</h1>
            <div className="PetsInfo__flexdiv">
                <div className="PetsInfo__leftflex">
                <Carousel fade className="corousel">
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100 Petsinfo__img"
      src={pet.img}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100 Petsinfo__img"
      src={Image2}
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
                </div>
                <div  className="PetsInfo__rightflex" >
                    <p className="PetsInfo__rightflex_namep">Name:<span className="PetsInfo__rightflex_namespan">{pet.name}</span></p>
                    <p className="PetsInfo__rightflex_p"> <span ><FontAwesomeIcon className="PetsInfo__rightflex_paw2" icon={faPaw}/></span>Age:<span className="PetsInfo__rightflex_span">{pet.age}</span></p>
                    <p className="PetsInfo__rightflex_p"> <span ><FontAwesomeIcon className="PetsInfo__rightflex_paw2" icon={faPaw}/></span>Size:<span className="PetsInfo__rightflex_span">{pet.size}</span></p>
                    <p className="PetsInfo__rightflex_p"> <span ><FontAwesomeIcon className="PetsInfo__rightflex_paw2" icon={faPaw}/></span>Weight:<span className="PetsInfo__rightflex_span">{pet.weight}</span></p>
                    <p className="PetsInfo__rightflex_p"> <span ><FontAwesomeIcon className="PetsInfo__rightflex_paw2" icon={faPaw}/></span>Color:<span className="PetsInfo__rightflex_span">{pet.color}</span></p>
                    <p className="PetsInfo__rightflex_p"> <span ><FontAwesomeIcon className="PetsInfo__rightflex_paw2" icon={faPaw}/></span>Location:<span className="PetsInfo__rightflex_span">{pet.city}</span></p>
                    <p className="PetsInfo__rightflex_p"> <span ><FontAwesomeIcon className="PetsInfo__rightflex_paw2" icon={faPaw}/></span>Breed: <span className="PetsInfo__rightflex_span">{pet.breed}</span></p>
                    {/* <p  className="PetsInfo__rightflex_p_medical">Medical History</p> */}
                    {/* <p className="PetsInfo__rightflex_p_medical_detail">GOod pets adasd he was</p> */}
                    {/* <button className="PetsInfo__rightflex_btn">Adopt me</button> */}
                </div>
            </div>
        <div className="PetsInfo__medicaldiv">
        <div className="PetsInfo__leftflexdivmed">


          <h1  className="PetsInfo__medicaldiv__h1">Medical History</h1>
          <div className="PetsInfo__medicaldiv__flex">
            <span>Allergies:</span>
            <span className="PetsInfo__medicaldiv__flex__span2">Yes</span>
          </div>
          <div className="PetsInfo__medicaldiv__flex">
            <span>Illnes:</span>
            <span className="PetsInfo__medicaldiv__flex__span2">Yes</span>
          </div>
         
          <div className="PetsInfo__medicaldiv__flex">
            <span>Surgeries:</span>
            <span className="PetsInfo__medicaldiv__flex__span2">Yes</span>
          </div>
          <div className="PetsInfo__medicaldiv__flex">
            <span>Vaccinated:</span>
            <span className="PetsInfo__medicaldiv__flex__span2">Yes</span>
            </div>
            </div>


        <div className="PetsInfo__rightflexdivmed">
        <h1  className="PetsInfo__medicaldiv__h1">Previous Owner</h1>

        <div className="PetsInfo__medicaldiv__flex">
            <span>Name:</span>
            <span className="PetsInfo__medicaldiv__flex__span2">Wahab</span>
            </div>  
            <div className="PetsInfo__medicaldiv__flex">
            <span>City:</span>
            <span className="PetsInfo__medicaldiv__flex__span2">Rawalpini</span>
            </div> 
            <div className="PetsInfo__medicaldiv__flex">
            <span>Span of adoption:</span>
            <span className="PetsInfo__medicaldiv__flex__span2">6 months</span>
            </div> 

        </div>
        </div>
        <hr/>
        
        </div>
        <div className='Petsinfo__adoptbuttoninfo'>
          <h3>You Love This Pet??</h3>
          <p>This could be the next thing close to you in your home</p>
          <div  className='Petsinfo__adoptbuttondiv'>
            <FontAwesomeIcon  className="PetsInfo__rightflex_btn__paw" icon={faPaw}/>
            <Link to="/pets/:petsid/adopt">
            <button  className="PetsInfo__rightflex_btn">Adopt It</button>
            </Link>
          </div>
        </div>
        </div>
        <IconHr />
        <hr/>
        <Footer/>
    </>)
}
export default PetsInfo;