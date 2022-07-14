import React from "react";
import { useDispatch } from "react-redux";
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import AddIcon from '@material-ui/icons/Add';
import { cartActions } from "../../../store/Cart-slice";

const CartDiscard = (props)=>{
    const dispatch=useDispatch();
    const deleteCartHandler=()=>{
    dispatch(cartActions.removeItemFromCart(props.id));
    };
    console.log("button ki id ha ",props.id);

    const addtoCartHandler=()=>{
        dispatch(cartActions.addItemToCart({
            id:props.id,
            name:props.name,
            rating:props.rating,
            price:props.price,
            type:props.type
        }));
    }
    return(<>
<CancelOutlinedIcon className="ProductCart__items__closeicon ProductCart__items__closeicon__delete" onClick={deleteCartHandler}/>
<AddCircleOutlineRoundedIcon className="ProductCart__items__closeicon ProductCart__items__closeicon__add" onClick={addtoCartHandler}/>

    </>)
}
export default CartDiscard;