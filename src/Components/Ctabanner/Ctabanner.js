import { FaArrowRight } from 'react-icons/fa';
import "./Ctabanner.css"
import { Link, useNavigate } from 'react-router-dom';
import logoOnly from "../../Photos/Photo/logoonly.png"
import arrowIcon from "../../Photos/Icons/arrowIcon.png"


const GetReady = ({ clean,logo }) => {

    const linkTo = useNavigate();
    return (
        <>
            <div className='ctabannerPage'>
                {logo &&
                    <img className='backImgEnrollNow' src={logoOnly} alt='aaudaina' />
                }
                
                <div className='ctaBanner'>
                    <span className='spant'></span>
                    <span className='spanb'></span>
                    <span className='spanr'></span>

                    <div className="linear-gradient"></div>
                    {/* CTA Information First Row */}
                    {clean === false &&
                        <div className='ctaInfo'>
                            <div className='ctadesc'>
                                <img className='downArrow'  src={arrowIcon} alt='arrow'/>
                                {/* <FaArrowRight className='downArrow' /> */}
                                <div className='texts'>
                                    <p>Ready<br /> to Scale Your Skills?</p>
                                    <p>Your journey starts here. Hands-on training,<br /> expert mentors, job-ready skills. Don't wait for opportunities – create them.</p>
                                </div>
                            </div>
                            <div className='ctaBtn'>
                                <Link className='boxAnimation' to={"/contact"}><span></span><div className='text'>Enroll now</div></Link>
                            </div>
                        </div>
                    }

                    {/* CTA Address */}
                    {clean === false &&
                        <div className='ctaAddress'>
                            <div className='number'>
                                <div className='box'></div>
                                9867333552
                            </div>
                            <p>Chipledhunga Pokhara</p>
                        </div>
                    }

                    {/* For Clean and Clean */}
                    {clean &&
                        <>
                            
                            <div className='forClean'>
                                <p>Your journey starts here.</p>
                                <p>Hands-on training, expert mentors, job-<br />ready skills.</p>
                                <button className='boxAnimation' onClick={() => linkTo("/contact")}><span></span><div className='text'>Enroll now</div></button>
                            </div></>
                    }

                </div>

            </div>
        </>
    )
}
export default GetReady