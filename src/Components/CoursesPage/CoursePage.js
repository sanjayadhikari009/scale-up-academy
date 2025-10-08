import "./CoursePage.css"
import { FaArrowRight } from 'react-icons/fa';
import { useEffect } from "react";
import {Introduction} from "../ExportComponents"
import Cource from "./Cource";
import Union from "../../Photos/Photo/Union.png"
// Courses Image
import course1 from "../../Photos/Courses/Courses1.png"
import course2 from "../../Photos/Courses/Course2.png"
import course3 from "../../Photos/Courses/Courses3.png"
import course4 from "../../Photos/Courses/Course4.png"
import Cources from "../../Pages/Courses/Cources";

const CoursePage = () => {

    const courseImg = "https://imgs.search.brave.com/PyC5687f8_yPRDkiuNTEtQdRo661-Bh8UGyTaYi4t9M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NjYzNzg3NDM2MTIt/OWRhMjE3ZjUzZTU1/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UaDhmSEJv/YjNSdmZHVnVmREI4/ZkRCOGZId3c"
    
    const Courses = [
        {   headline:"Graphic Design",
            image : course1,
            desc : "Unlock your creativity with design fundamentals to advanced branding.",
            background :false
        },
        {   
            headline : "UI/UX Design",
            image : course2,
            desc : "Unlock your creativity with design fundamentals to advanced branding.",
            background : true
        },
        {   
            headline : "Web Development",
            image : course3,
            desc : "Unlock your creativity with design fundamentals to advanced branding.",
            background : true
        },
        {
            headline : "Video Editing",
            image : course4,
            desc : "Unlock your creativity with design fundamentals to advanced branding.",
            background : false
        }
    ]


    return (
        <>
            <div className="courseSection">
                <Introduction headline={"Learn With Us"} title={"Courses"} paragraph={"Discover industry-relevant courses designed to scale your skills and shape your future. Learn by doing, guided by experts."}/>

                <div className="coursesList">
                    <div className="row row1">
                        <Cource details={Courses[0]} />
                        <Cource  details={Courses[1]}/>
                    </div>
                    <div className="row row2">
                        <Cource details={Courses[2]} />
                        <Cource details={Courses[3]} />
                    </div>
                    <img src={Union} alt="logo" className="backImageCourses"/>
                </div>
            </div>
        </>
    )
}
export default CoursePage;