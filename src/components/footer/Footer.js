import React from "react"
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw ,faTwitter} from "@fortawesome/free-solid-svg-icons";
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Logo from "../../../src/images/HomeImages/logo2.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link } from "react-router-dom";
const Footer = (props) => {
    var img__class = props.img ? "footer" : "";
    return (
        <div className="footer">
            <div className="footer__margin">
                {/* aik div log wager kye lye */}
                <div className="footer__left">
                    <div className="footer__logo">
                        <img src={Logo} alt="no render"></img>
                    </div>
                    <div className="footer__p">
                        ANIMALSLIFEMATTERS , a place where stray, lost, abandoned or surrendered animals – mostly dogs and cats – are housed.
                    </div>
                    {/* <div className="footer__links__icons">
                        <span><FacebookIcon className=" svg_icons svg__links" /></span>
                        <span><TwitterIcon className=" svg_icons svg__links" /></span>
                    </div> */}
                </div>

                {/* aik div links sari aajiane gi */}
                <div className="footer__center">
                    <div className="footer__linksheading">
                        <h1>Web Links</h1>
                    </div>
                    <div className="footer__links">
                        <div>
                            <FontAwesomeIcon icon={faPaw} className="footer__icon" />
                            <Link to="/homes" style={{ textDecoration: 'none' }}>
                                <span className="footer__links__items">Home</span>
                            </Link>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPaw} className="footer__icon" />
                            <Link to="/about" style={{ textDecoration: 'none' }}>
                                <span className="footer__links__items">About</span>
                            </Link>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPaw} className="footer__icon" />
                            <Link to="/contactus" style={{ textDecoration: 'none' }}>
                                <span className="footer__links__items">Contact us</span>
                            </Link>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPaw} className="footer__icon" />
                            <Link to="/donate" style={{ textDecoration: 'none' }}>
                                <span className="footer__links__items">Donate</span>
                            </Link>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPaw} className="footer__icon" />
                            <Link to="/adopt" style={{ textDecoration: 'none' }}>
                                <span className="footer__links__items">Adopt</span>
                            </Link>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPaw} className="footer__icon" />
                            <Link to="/report" style={{ textDecoration: 'none' }}>
                                <span className="footer__links__items">Report</span>
                            </Link>
                        </div>


                    </div>

                </div>
                {/* aik div get in touch */}
                <div className="footer__right">
                    <div className="footer__linksheading footer__righth1" >
                        <h1>Follow Us </h1>
                    </div>
                    {/* <div className="footer__p"> */}
                    <div className="Footer__followicondiv">    
                    <a target="_blank" href="https://www.facebook.com/" ><FacebookIcon className="Footer__followicon me-4"/></a>
        <a target="_blank" href="https://twitter.com/" ><TwitterIcon className="Footer__followicon me-4"/></a>
        <a target="_blank" href="https://www.youtube.com/" ><YouTubeIcon className="Footer__followicon me-4"/></a>
        <a target="_blank" href="https://www.instagram.com/" ><InstagramIcon className="Footer__followicon me-4"/></a>
                    </div>
                </div>

                 {/* Links ky lye */}

                 <div className="footer__right">
                    <div className="footer__linksheading footer__righth1" >
                        <h1>Get in touch</h1>
                    </div>
                    {/* <div className="footer__p"> */}
                    <div> <LocationOnIcon className=" svg_icons" />
                        <span > &nbsp;F/10 Islamabad, Pakistan</span>
                    </div>
                    <div>
                        <PhoneIcon className=" svg_icons" />
                        <span >  &nbsp;+(92) 3215014087</span>
                    </div>
                    <div>
                        <MailIcon className=" svg_icons" />
                        <span > &nbsp; @animalslifematters.com</span>
                    </div>
                </div>


            </div>
            <hr className="footer__hr" />
            <p className="footer__copyright">Copyrights &copy; 2022 ANIMALSLIFEMATTERS • All Rights Reserved.</p>
        </div>
    )
}
export default Footer;