import "./Landing.css";
import Landingsvg from "./Landingsvg";
import Test from "./Test";

const Landing = () => {
  const OfferCourses = [
    {
      courseName: "UI/UX Design",
      desc: "Python",
    },
    {
      courseName: "Web Development",
      desc: "Python",
    },
    {
      courseName: "Python",
      desc: "Python",
    },
    {
      courseName: "UI/UX Design",
      desc: "Python",
    },
    {
      courseName: "Web Development",
      desc: "Python",
    },
    {
      courseName: "Python",
      desc: "Python",
    },
    {
      courseName: "UI/UX Design",
      desc: "Python",
    },
    {
      courseName: "Web Development",
      desc: "Python",
    },
    {
      courseName: "Python",
      desc: "Python",
    },
    {
      courseName: "UI/UX Design",
      desc: "Python",
    },
    {
      courseName: "Web Development",
      desc: "Python",
    },
    {
      courseName: "Python",
      desc: "Python",
    },
  ];
  return (
    <>
      <div className="landingPage">
        <div className="element"></div>
        <div className="landingBackTexture">
          <img src="/texture.png" alt="background-texture" />
        </div>{" "}
        <div className="landingBackImage">
          {/* <Landingsvg /> */}
          <Test />
        </div>
        <div className="landingTextWrapper">
          <div className="landingText">
            <div>
              <div className="landingBadge">With Scaleup Academy</div>
            </div>

            <h1 className="headingText">
              <span className="ani-one" data-text="Skill">
                Skill
              </span>
              <span className="ani-two" data-text="Up,">
                Up,
              </span>
              <span className="ani-three" data-text="Scaleup.">
                Scaleup.
              </span>
            </h1>

            <p>
              Don’t just dream about a career design it, <br /> code it, market
              it, build it.
            </p>
            <a href="/">Enroll Now</a>
          </div>
        </div>
      </div>
      <div className="offerCourses">
        <div className="offerCoursesList">
          {OfferCourses.map((course, index) => (
            <div key={index} className="coursesOffer">
              <div className="circleOffer"></div>
              {course.courseName}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Landing;
