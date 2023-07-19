import '../style/creditCard.css'
import mastercard from '../images/logo-Mastercard.png'
import { useState } from 'react'

function CreditCard(){

    const [userData, setUserData] = useState({
        name: "",
        numero: ""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    }




    const {name, numero} = userData;

    return(
        <>
        <form>
            <input type="text" placeholder='Ingrese el numero de su tarjeta' name='numero' value={numero} onChange={handleChange} />
            <input type="text" placeholder='nombre' name='name' value={name} onChange={handleChange}/>
        </form>
        <div className="creditCard">
            <h5>{numero}</h5>
            <h4>{name}</h4>
            <img id='masterCard' src={mastercard} alt=""/>
        </div>
        </>
    )
}

export default CreditCard