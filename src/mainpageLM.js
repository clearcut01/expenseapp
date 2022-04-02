import { useNavigate } from "react-router-dom";

const Mainpage = () =>{
    let navigate = useNavigate();
    const dateBuilder = (d) =>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
      }
    
      const onClick = () =>{
        navigate("/")
      }
    return(
        
        <div className="app">
            <main>
            <div className="select-use">
                <select name="use" className="select">
                <option className="doprdown-content">---select an option---</option>
                <option className="dropdown-content">File a claim</option>
                <option className="dropdown-content">View past claims</option>
                <option className="dropdown-content">View pending claims</option>
                </select>
                <button type="button" className="search-button">Search</button>
                <button type="login" className="login-button" onClick={onClick}>Logout</button>
            </div>
            <div className="location-box">
                <div className="location">London, UK</div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="overview">
                <div className="main-overview">Line Manager</div>
            </div>
            </main>
            <footer className="footer">
            <a className="footer-text">FDM Expense Tracker App</a>
            </footer>
      </div>
    );
}
export default Mainpage;

