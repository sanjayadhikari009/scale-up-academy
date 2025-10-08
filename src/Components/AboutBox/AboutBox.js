import "./AboutBox.css";
import { FaArrowRight } from 'react-icons/fa';
import frame  from "../../Photos/About/Frame.svg"
import backGreen from "../../Photos/About/greenBackLogo.png";
import tshirt from "../../Photos/About/T_Shirt.jpg";
import tshirt2 from "../../Photos/About/T_Shirt-1.jpg";
import backWhite from "../../Photos/About/logo.png";
import wall from "../../Photos/About/wall.jpg";
import logoOnly from "../../Photos/About/logoonly.png";
import sready from "../../Photos/About/saready.png";
import halftrans from "../../Photos/Icons/halfTransArrow.png"


const AboutBox = () => {

    const AboutDesc = [
        {
            img : frame,
            headline : "",
            desc : "Courses"
        },{
            img : backGreen,
            headline : "",
            desc : "Courses"
        }
        ,{
            img : tshirt,
            headline : "",
            desc : "Courses"
        }
        ,{
            img : tshirt2,
            headline : "",
            desc : "Courses"
        }
        ,{
            img : backWhite,
            headline : "",
            desc : "Courses"
        }
        ,{
            img : wall,
            headline : "",
            desc : "Courses"
        }
        ,{
            img : logoOnly,
            headline : "",
            desc : "Courses"
        }
        ,{
            img : sready,
            headline : "",
            desc : "Courses"
        }
    ]
    return (
        <>
            <div className="AboutBoxes">
                <div className="boxrow boxsRow1 ">
                    <div className="AboutBox">
                        <img src={AboutDesc[0].img} alt=""/>
                        <FaArrowRight className="Logo" />
                        <div className="textAbout">
                        </div>
                    </div>
                    <div className="AboutBox">
                        <FaArrowRight className="Logo" />
                        <img src={AboutDesc[1].img} alt=""/>
                        <div className="textAbout">
                        </div>
                    </div>
                    <div className="AboutBox boxHeight">
                        <FaArrowRight className="Logo" />
                        <img src={AboutDesc[2].img} alt=""/>
                        <div className="textAbout">
                            <div className="boxPattern">
                                <span></span><span></span>
                                
                            </div>
                            <p>Welcome to ScaleUp<br/> Academy, where learning<br/> meets <span>real-world impact.</span></p>
                        </div>
                    </div>
                </div>

                <div className="boxrow  boxrow2">
                    <div className="AboutBox">
                        <img src={AboutDesc[3].img} alt=""/>
                        <div className="textAbout">
                            <div className="outImg">
                                <img src={halftrans} alt=""/>
                            </div>
                            
                            <p>Empowering<br/> Youth with <span>Future Ready Skills</span>
                             {/* <span></span> */}
                                </p>
                        </div>
                    </div>
                    <div className="AboutBox">
                        <FaArrowRight className="Logo" />
                        <img src={AboutDesc[4].img} alt=""/>
                        <div className="textAbout">
                        </div>
                    </div>
                    <div className="AboutBox boxHide">
                        <FaArrowRight className="Logo" />
                        <div className="textAbout">
                            Here’s the copied text from the image:
                            "Ready to Scale Your Skills?
                        </div>
                    </div>
                    
                </div>

                <div className="boxrow   boxrow3">
                    <div className="AboutBox">
                        <div className="boxOverlay"></div>
                        <FaArrowRight className="Logo" />
                        <img src={AboutDesc[5].img} alt=""/>

                        <div className="textAbout">
                            <p>Discover industry-relevant courses designed to scale your skills and shape your future. Learn by doing, guided by experts.</p>
                        </div>
                    </div>
                    <div className="AboutBox">
                        <FaArrowRight className="Logo" />
                        <img src={AboutDesc[6].img} alt=""/>

                        <div className="textAbout">
                        </div>
                    </div>
                    <div className="AboutBox boxHeight2">
                        
                        <FaArrowRight className="Logo" />
                        <img src={AboutDesc[7].img} alt=""/>
                        <div className="textAbout">
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default AboutBox