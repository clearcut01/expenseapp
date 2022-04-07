// JavaScript source code
import { useNavigate } from "react-router-dom";
import logo from './assets/logo.png';

const ClaimApproval = () => {

    let navigate = useNavigate();

    const onclick = () => {
        navigate("/mainpageLM")
    }

    return (
        <>
            <div className="formpage">
                <a onClick={onclick}><img className="logoForm" src={logo}></img></a>
                <h1 className='form-title'>Manager Approval</h1>
                <form className="form" class='center' align='middle'>
                    <fieldset text-align='center'>
                        <table class='center'>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>File</th>
                                <th>Approve/Deny</th>
                            </tr>
                            <tr>
                                <th>Amy Darwin</th>
                                <th>$12.75</th>
                                <th>Approved</th>
                                <th>Claim.pdf</th>
                                <th><button type="approve" className="submitbutton">Approve</button></th>
                            </tr>
                            <tr>
                                <th>James Peters</th>
                                <th>$34.34</th>
                                <th>Pending</th>
                                <th>expense_claim.pdf</th>
                                <th><button type="approve" className="submitbutton">Approve</button></th>
                            </tr>
                            <tr>
                                <th>Arch Mathis</th>
                                <th>$45.32</th>
                                <th>Approved</th>
                                <th>claim12.pdf</th>
                                <th><button type="approve" className="submitbutton">Approve</button></th>
                            </tr>
                            <tr>
                                <th>Mark Collins</th>
                                <th>$23.45</th>
                                <th>Approved</th>
                                <th>claim.pdf</th>
                                <th><button type="approve" className="submitbutton">Approve</button></th>
                            </tr>
                        </table>
                    </fieldset>
                    
                </form>
            </div>
        </>
    )

}

export default ClaimApproval;