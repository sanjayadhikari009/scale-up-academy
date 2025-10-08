import "./Landing.css";

const Landing = () => {
    
   

    const OfferCourses = [
        {
            courseName: "UI/UX Design",
            desc: "Python"
        },
        {
            courseName: "Web Development",
            desc: "Python"
        },
        {
            courseName: "Python",
            desc: "Python"
        },
        {
            courseName: "UI/UX Design",
            desc: "Python"
        },
        {
            courseName: "Web Development",
            desc: "Python"
        },
        {
            courseName: "Python",
            desc: "Python"
        },
        {
            courseName: "UI/UX Design",
            desc: "Python"
        },
        {
            courseName: "Web Development",
            desc: "Python"
        },
        {
            courseName: "Python",
            desc: "Python"
        },
        {
            courseName: "UI/UX Design",
            desc: "Python"
        },
        {
            courseName: "Web Development",
            desc: "Python"
        },
        {
            courseName: "Python",
            desc: "Python"
        }
    ];
    return (<>
        <div className="landingPage">
            <div className="offerCourses">
                <div className="offerCoursesList">
                    {OfferCourses.map((course, index) =>
                        <div key={index} className="coursesOffer">
                            <div className="circleOffer"></div>
                            {course.courseName}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>)
}
export default Landing