import { NavBar, Footer, GetReady, Map } from "../../Components/ExportComponents";
import { Link } from "react-router-dom";
import "./Contact.css";
import { useState, useRef, useEffect } from "react";

const Contact = ({ fullNav }) => {
    // Declare Input
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [courseselect, setCourse] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [load, setLoad] = useState(false);

    // Error states
    const [fullnameError, setFullnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [courseError, setCourseError] = useState("");
    const [dateError, setDateError] = useState("");
    const [timeError, setTimeError] = useState("");
    const [fetchError, setFetchError] = useState("")

    // Refs for scrolling
    const fullnameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const courseRef = useRef(null);
    const dateRef = useRef(null);
    const timeRef = useRef(null);

    // For Open Custom Drop Down
    const [dropdown, setDropDown] = useState(false);

    // For Sent 
    const [success, setSuccess] = useState(false);
    const [inputFields, setInputFields] = useState(true);
    

     const [focused, setFocused] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (focused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [focused]);



    const divSecond = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                divSecond.current &&
                !divSecond.current.contains(event.target)
            ) {
                console.log("Clicked outside the div");
                setDropDown(false);
            }
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Realtime field validation
    const validateField = (name, value) => {
        switch (name) {
            case "fullname":
                if (!value.trim()) setFullnameError("Full name is required");
                else setFullnameError("");
                break;

            case "email":
                if (!value.trim()) setEmailError("Email is required");
                else if (!/\S+@\S+\.\S+/.test(value)) setEmailError("Enter a valid email");
                else setEmailError("");
                break;

            case "phone":
                if (!value.trim()) setPhoneError("Phone is required");
                else if (!/^[0-9]{10}$/.test(value)) setPhoneError("Phone must be 10 digits");
                else setPhoneError("");
                break;

            case "courseselect":
                if (!value.trim()) setCourseError("Course is required");
                else setCourseError("");
                break;

            case "date":
                if (value.trim() && !/^[0-9/-]+$/.test(value)) {
                    setDateError("Invalid date format");
                } else {
                    setDateError("");
                }
                break;

            case "time":
                if (value.trim() && !/^[0-9:\sAPMapm]+$/.test(value)) {
                    setTimeError("Invalid time format");
                } else {
                    setTimeError("");
                }
                break;

            default:
                break;
        }
    };

    const validateForm = () => {
        validateField("fullname", fullname);
        validateField("email", email);
        validateField("phone", phone);
        validateField("courseselect", courseselect);
        validateField("date", date);
        validateField("time", time);

        return (
            fullname.trim() &&
            email.trim() && /\S+@\S+\.\S+/.test(email) &&
            phone.trim() && /^[0-9]{10}$/.test(phone) &&
            courseselect.trim() &&
            (!date.trim() || /^[0-9/-]+$/.test(date)) &&
            (!time.trim() || /^[0-9:\sAPMapm]+$/.test(time))
        );
    };

    const submitForm = async () => {
        setSuccess(true)
        if (validateForm()) {
            // console.log("✅ Form submitted:", { fullname, email, phone, courseselect, date, time });
            setLoad(true);
            try {
                const response = await fetch("http://localhost:5000/mailRequest", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullname,
                        email,
                        phone,
                        courseselect,
                        date,
                        time
                    }),
                });

                const data = await response.json();

                if (data.success) {
                    console.log("Email sent successfully");
                } else {
                    setFetchError("Error sending email:", data.message)
                    console.log("Error sending email:", data.message);
                }
            } catch (err) {
                console.log(err.message);
                setFetchError(err.message);

            }
            setLoad(false)


        } else {
            // Scroll to first error
            if (fullnameError && fullnameRef.current) fullnameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
            else if (emailError && emailRef.current) emailRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
            else if (phoneError && phoneRef.current) phoneRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
            else if (courseError && courseRef.current) courseRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
            else if (dateError && dateRef.current) dateRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
            else if (timeError && timeRef.current) timeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };
    const topSc = useRef(null);
    useEffect(() => {
        if (success) {
            setInputFields(false);
            topSc.current.scrollIntoView({ behavior: "smooth", block: "center" })
            setTimeout(() => {
                setSuccess(false);

            }, 3000);
        }
    }, [success])

    document.title = "ScaleUp Academy | Contact";

    return (
        <>
            <NavBar fullNav={fullNav} />

            <div ref={topSc} className="contactPage">
                <div className='ctaBanner'> <span className='spant'></span> <span className='spanb'></span> <span className='spanr'></span> <div className="linear-gradient"></div> <div className="forContact"> <h2>Contact Us</h2> <h5>Connect with us</h5> </div> </div> <div className="ctaBannerContact"> <p>Let's <span>Kickstart</span> <br /></p><p>Your Learning <span>Journey</span></p>
                    <p >Join industry-expert-led programs and become job-ready in just a few months. Whether it's Graphic Design, UI/UX, Digital Marketing, Web Development, or Video Editing – your future career starts here.</p> <div className='ctaBtn contactBtnEnroll'> <Link className='boxAnimation' onClick={() => setFocused(true)}><span></span><div className='text'>Enroll now</div></Link> </div> </div>
                {/* Your existing form structure */}
                {inputFields &&
                    <>
                        <div className="userDetails">
                            <div className="titleText">Let's Connect</div>
                            <div className="userDetailsInput">
                                <label ref={fullnameRef}>Full Name<div className="requiredInput">*</div></label>
                                <input
                                    
                                    ref={inputRef}
                                    value={fullname}
                                    className={fullnameError ? "error" : ""}
                                    onChange={(e) => {
                                        setFullname(e.target.value);
                                        validateField("fullname", e.target.value);
                                    }}
                                    placeholder="eg. Bishal Dhakal"
                                    type="text"
                                />
                                <div className="errorText">{fullnameError}</div>

                                <label>Email<div className="requiredInput">*</div></label>
                                <input
                                    ref={emailRef}
                                    value={email}
                                    className={emailError ? "error" : ""}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        validateField("email", e.target.value);
                                    }}
                                    placeholder="eg. bishaldhakalinfo@gmail.com"
                                    type="text"
                                />
                                <div className="errorText">{emailError}</div>

                                <label>Phone Number<div className="requiredInput">*</div></label>
                                <input
                                    ref={phoneRef}
                                    value={phone}
                                    className={phoneError ? "error" : ""}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                        validateField("phone", e.target.value);
                                    }}
                                    placeholder="eg. 9867108374"
                                    type="text"
                                />
                                <div className="errorText">{phoneError}</div>
                            </div>
                        </div>

                        <div className="userDetails">
                            <div className="titleText">Which skill do you want to master?</div>
                            <div ref={courseRef} className="userDetailsInput">
                                <label>Courses<div className="requiredInput">*</div></label>
                                <div ref={divSecond} onClick={() => setDropDown(!dropdown)} className="select">
                                    <p>{courseselect === "" ? "Graphic Design | UI/UX Design, Digital Marketing, Web Development, App Development, Video Editing" : courseselect}</p>
                                </div>
                                {dropdown &&
                                    <div className="optionSelect">
                                        <div onClick={() => { setCourse("Graphic Design"); validateField("courseselect", "Graphic Design"); }} className="optionBox">Graphic Design</div>
                                        <div onClick={() => { setCourse("Web Development"); validateField("courseselect", "Web Development"); }} className="optionBox">Web Development</div>
                                        <div onClick={() => { setCourse("Marketing"); validateField("courseselect", "Marketing"); }} className="optionBox">Marketing</div>
                                        <div onClick={() => { setCourse("Video Editing"); validateField("courseselect", "Video Editing"); }} className="optionBox">Video Editing</div>
                                    </div>
                                }


                                <div className="errorText">{courseError}</div>
                            </div>
                        </div>

                        <div className="userDetails">
                            <div className="titleText">Preferred Date & Time</div>
                            <div className="userDetailsInput">
                                <label>Start Date</label>
                                <input
                                    ref={dateRef}
                                    value={date}
                                    className={dateError ? "error" : ""}
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                        validateField("date", e.target.value);
                                    }}
                                    placeholder="eg. 2082/06/23"
                                    type="text"
                                />
                                <div className="errorText">{dateError}</div>

                                <label>Start Time</label>
                                <input
                                    ref={timeRef}
                                    value={time}
                                    className={timeError ? "error" : ""}
                                    onChange={(e) => {
                                        setTime(e.target.value);
                                        validateField("time", e.target.value);
                                    }}
                                    placeholder="eg. 10:00 AM"
                                    type="text"
                                />
                                <div className="errorText">{timeError}</div>
                            </div>
                        </div>

                        <div className="btnNerror">
                            <button disabled={load} onClick={submitForm} className="contactSubmitBtn"> <span>{load ? "Sending." : "Submit"}</span> <span>{load ? "Sending." : "Submit"}</span> </button>
                            {fetchError &&
                                <div className="serverResponse"> {fetchError} ,Try Again Later!</div>

                            }
                        </div>
                    </>
                }


            </div>
            {success &&
                <div className="messageSuccess">
                    <div className="popup-overlay">
                        <div className="popup-box" >
                            <h3>Message Sent Successfully</h3>
                            <p>Thank you for contacting us. We’ll get back to you shortly.</p>
                            <a href="tel:9867108375" className="call-btn">
                                📞 Call Us Directly
                            </a>
                        </div>
                    </div>
                </div>
            }


            <Map />
            <GetReady clean={true} logo={false} />
            <Footer />
        </>
    );
};

export default Contact;
