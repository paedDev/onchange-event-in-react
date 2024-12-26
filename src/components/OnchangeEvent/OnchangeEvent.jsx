
import React ,{useState} from "react";
import styles from "./OnchangeEvent.module.css"

function OnchangeEvent () {

    const [name,setName] = useState("Guest ")
    const [quantity, setQuantity] = useState(1)
    const [comment,setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    const [socialmed, setSocialmed] = useState("")

    const handleSocialMedChange = (event) =>{
        setSocialmed(event.target.value)
    }
    const handleShippingChange = (event) =>{
        setShipping(event.target.value)
    }
    const handleNameChange = (event) =>{
        setName(event.target.value)
    }
    const handleQuantityChange = (event) =>{
        setQuantity(event.target.value)
    }
    const handleCommentChange = (event) =>{
        setComment (event.target.value)
    }
    const handlePaymentChange= (event) => {
        setPayment(event.target.value)
    }
    return(
        <>
            <div className={styles.container}>
              
                <p>Name: {name}</p>
                <input value={name} onChange={handleNameChange} className={styles.name} />
         
                <p>Quantity : {quantity}</p>
                <input value={quantity} onChange={handleQuantityChange} type="number" className={styles.quantity}/>
                

                

                <select value={payment} onChange={handlePaymentChange} className={styles.payment}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="Gcash">Gcash</option>

                </select>
                <p>Payment: {payment}</p>
                <br />
                <div className={styles.radioBtn}>
                    <label>
                        <input type="radio" value="Pick up" checked ={shipping === "Pick up"} onChange={handleShippingChange}/>
                        Pick up
                    </label>
                    <br />
                    <label>
                        <input type="radio" value="Delivery" checked ={shipping === "Delivery"} onChange={handleShippingChange}/>
                        Delivery
                    </label>
                    
                </div>
                <p className={styles.mode}>Mode of Shipping: {shipping}</p>


                <select value={socialmed} onChange={handleSocialMedChange} className={styles.socialmed}>

                <option value="">Select your Social media</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Twitter">Twitter</option>
                <option value="Tiktok">Tiktok</option>


                </select>
                <p>Social Media : {socialmed}</p>

                <textarea value ={comment} onChange={handleCommentChange} name="" placeholder="Place your suggestions here" className={styles.textarea}/>
                <p>Comment: {comment}</p>
            </div>
        </>
    )
}

export default OnchangeEvent;