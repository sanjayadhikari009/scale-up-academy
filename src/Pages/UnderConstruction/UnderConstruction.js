import { Link } from "react-router-dom"
import "./Under.css"
import logo from "../../Photos/logo.png"
const UnderConstruction = ()=>{
    document.title = "Scaleup Academy"
    return(<>
    <div className="underPage">
        <h1>Coming Soon!</h1>
        <p className="subText">Stay Tuned</p>
        <div className="aboutUnder">
            <img src={logo} alt="logo"/>
            <Link to={"scale-upacademy.com"}>www.scale-upacademy.com</Link>
            <div className="address">
                <p>9867733552</p>
                <p>Chipledhunga, Pokhara</p>
            </div>
        </div>
    </div>
    </>)
}
export default UnderConstruction