import { Link } from "react-router-dom"
import { NavBar, Footer, GetReady, Gallary, AboutBox } from "../../Components/ExportComponents"
import "./About.css";
const About = () => {
    document.title = "ScaleUp Academy | About"
    return (
        <>  <NavBar />
            <div className="AboutPage ">
                <div className='forNiddle'><div className="needleLine"></div></div>
                <AboutBox />

                <div className="aboutUsText">
                    <span className="span topAbout"></span>
                    <span className="span bottomAbout"></span>
                    <span className="span rightAbout"></span>
                    <div className="span aboutTextLeft">
                        <span></span>
                        <h1>We're<br />
                            Here to Build Skills<br />
                            That Build Futures
                        </h1>
                    </div>

                    <div className="aboutTextRight">
                        <p>At ScaleUp Academy, we believe that learning should be practical, fun, and future-focused. From design to development, we craft programs that turn curiosity into career-ready skills.</p>
                    </div>
                </div>

            </div>
            <div className="btnNLink">
                <div className="buttonAbout">
                    <Link to={"/courses"}>
                        <span>Explore Courses</span>
                        <span>Explore Courses</span>
                    </Link>

                    <Link to={"/contact"} className="hideOver">
                        <span></span>
                        <div className="text">Enroll now</div>
                    </Link>
                </div>
                <div className="linksSocialBtn">
                    <Link target="blank" to={"https://www.facebook.com/profile.php?id=61579107479784"}>
                        <span>Facebook</span>
                        <span>Facebook</span>
                    </Link>

                    <Link target="blank" to={"https://www.instagram.com/scaleupacademy.co/"}>
                        <span>Instagram</span>
                        <span>Instagram</span>
                    </Link>

                    <Link target="blank" to={"https://www.linkedin.com/in/scaleup-academy-9319b6378/"}>
                        <span>Linkedin</span>
                        <span>Linkedin</span>
                    </Link>
                </div>
            </div>


            <Gallary />


            <GetReady clean={true} logo={false} />
            <Footer />

        </>
    )
}
export default About