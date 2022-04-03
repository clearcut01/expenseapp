import logo from './assets/logo.png';
import {useNavigate} from "react-router-dom";

const SubmitClaim = () =>{
    let navigate = useNavigate();

    const onclick = () => {
        navigate("/mainpage")
    }
    return(
        <>
        <div className="formpage">
            <a onClick={onclick}><img className="logoForm" src = {logo}></img></a>
            <h1 className='form-title'>New Expense</h1>
            <form className="form">
                <fieldset>
                    <label>Upload Image of Receipt: </label><br></br>
                    <br></br>
                    <input type="file" className='image' accept="image/*"></input>
                </fieldset>
                <fieldset>
                    <label>Purchase Amount</label><br></br>
                    <input className="entry" type="text" name="purchaseAmount" placeholder="£..." required></input>
                    <br></br>
                    <label>Description</label><br></br>
                    <input className="entry" type="text" name="description" placeholder="Enter text..." required></input>
                    <br></br>
                    <label>Claim Type</label><br></br>
                    <select className="entry" name="claimType" required>
                        <option disabled selected>Select Claim Type</option>
                        <option name="overnightStay">Overnight Stay</option>
                        <option name="itemsForEventOrMeeting">Event or Meeting</option>
                        <option name="travel">Travel</option>
                    </select> 
                    <br></br>
                    <label>Date</label><br></br>
                    <input className="entry" type="date" name="date" required></input>
                </fieldset>
                <div className='center'>
                    <button type="submit" className="submitbutton">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default SubmitClaim;
