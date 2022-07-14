import {Component} from "react";
import {Map,GoogleApiWrapper} from "google-maps-react";
import "./Maps.css"
import classes from "./Maps.module.css";
 class Maps extends Component{
    render(){
        return(
           <>
                   <Map 
                google={this.props.google}
                style={{width:'100%',height:'70rem' ,position:"relative"}}
                zoom={10}
                initialCenter= {{
                    lat:33.707098,
                    lng:73.062485
                }}
            />
            </>
        );
    }
}
export default GoogleApiWrapper({
    apikey:"AIzaSyBmIr8X5W6zsip0fCeMX0jGiszW6wmUwYw"
})(Maps);