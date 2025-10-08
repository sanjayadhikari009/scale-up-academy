import "./Review.css";
import { FaArrowRight } from 'react-icons/fa';
import { useState, useEffect, useRef } from "react";
import left from "../../Photos/Icons/arrowIconThink.png";
import { FaA } from "react-icons/fa6";
const Review = () => {
  const img = "https://imgs.search.brave.com/y37tRYaAaKgLNGG4Uh_AEvh6pqmTqGziDci9xYe2Qew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZmlsbW5lcGFs/LmNvbS91cGxvYWRz/L21lZGlhcy9iYWxl/bi1zaGFoLmpwZw";
  const img2 = "https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/448267865_773272055006287_4312168140936838199_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9S-XmuZH6c8Q7kNvwHw3Yfp&_nc_oc=Adm4sseM5i5yRJKCbLtVKa_kfvg_rihx7ly-kDiTrLJOho-WbnPC76ufcdFCnYc6oaA&_nc_zt=23&_nc_ht=scontent.fktm9-2.fna&_nc_gid=UNsbdOcKGzSk2mXOeDRX5w&oh=00_Afd0V74Re2eNA2G6OHKJ2QKCW077NKb0rJBjVAfQvdpIfw&oe=68EA7CFE";


  const reviews = [
    {
      quote: "Untitled has saved us thousands of hours of work and has unlocked data insights we never thought possible.",
      name: "Koray Okumus",
      title: "UX Designer, Circooles",
      image: img
    },
    {
      quote: "Untitled transformed how we manage projects—faster, smarter, and more collaborative than ever.",
      name: "Aarav Shrestha",
      title: "Product Manager, DevNepal",
      image: img2
    },
    {
      quote: "We never imagined data visualization could be this intuitive. Untitled nailed it.",
      name: "Priya Karki",
      title: "Data Analyst, InsightWorks",
      image: img
    },
    {
      quote: "From onboarding to execution, Untitled made everything seamless and scalable.",
      name: "Ravi Thapa",
      title: "CTO, CodeCraft",
      image: img2
    },
    {
      quote: "Untitled helped us unify our design and dev teams—finally speaking the same language.",
      name: "Sneha Gurung",
      title: "Design Lead, PixelPulse",
      image: img
    },
    {
      quote: "The automation features in Untitled saved us weeks of manual work every month.",
      name: "Bibek Lama",
      title: "Operations Head, Streamline",
      image: img2
    },
    {
      quote: "The support team at Untitled is phenomenal—fast, friendly, and deeply knowledgeable.",
      name: "Meera Rai",
      title: "Customer Success Lead, EngageHub",
      image: img
    },
    {
      quote: "Untitled is not just a tool—it’s a mindset shift in how we approach data and design.",
      name: "Dipesh Adhikari",
      title: "Founder, Studio Elevate",
      image: img2
    }
  ];


  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  // Auto-update activeIndex every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        let nextIndex = prevIndex + direction;

        if (nextIndex >= reviews.length) {
          setDirection(-1);
          nextIndex = prevIndex - 1;
        } else if (nextIndex < 0) {
          setDirection(1);
          nextIndex = prevIndex + 1;
        }

        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction, reviews.length]);

  // Center the active review
  useEffect(() => {
    const container = containerRef.current;
    const activeItem = itemRefs.current[activeIndex];

    if (container && activeItem) {
      const containerWidth = container.offsetWidth;
      const itemOffsetLeft = activeItem.offsetLeft;
      const itemWidth = activeItem.offsetWidth;

      const scrollTo = itemOffsetLeft - containerWidth / 2 + itemWidth / 2;
      container.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }, [activeIndex]);

  function minusIndex() {
    if (activeIndex === 0) {

    }
    else {
      const ind = activeIndex - 1;
      setActiveIndex(ind);
    }
  }

  function plusIndex() {
    if (activeIndex === reviews.length - 1) {

    }
    else {
      const ind = activeIndex + 1;
      setActiveIndex(ind);
    }
  }

  // For Image Index
  const getZIndex = (index, activeIndex) => {
    const distance = Math.abs(index - activeIndex);
    const maxZ = 5; // highest z-index at center
    return Math.max(maxZ - distance, 0); // ensures z-index never goes negative
  };

  return (
    <>
      <div className="reviewPage">
        <div className="reviewTitle">
          <p>What<br /> They Say About Us</p>
          <p>Real words. Real experiences. Real impact.</p>
        </div>

        {/* <div className="studentsImages">
          <div className="listImage">
              <img style={{ zIndex: 1}} className=""  src={activeIndex <0 ? "": reviews[activeIndex-2].image} alt="std" />
              <img style={{ zIndex: 2}} className=""  src={activeIndex <1 ? "": reviews[activeIndex-1].image} alt="std" />
              <img style={{ zIndex: 3}} className="active"  src={reviews[activeIndex].image} alt="std" />
              <img style={{ zIndex: 2}} className=""  src={reviews[1].image} alt="std" />
              <img style={{ zIndex: 1}} className=""  src={reviews[1].image} alt="std" />
          </div>
        </div> */}

        <div className="studentsImages">
          <div className="listImage">
            {[-2, -1, 0, 1, 2].map((offset, i) => {
              const index = activeIndex + offset;

              // Wrap around if index is out of range
              const validIndex = (index + reviews.length) % reviews.length;
              const review = reviews[validIndex];

              return (
                <img
                  key={i}
                  src={review.image}
                  alt="student"
                  className={`student-img ${offset === 0 ? "active" : ""}`}
                  style={{
                    zIndex: 5 - Math.abs(offset),
                    transform: offset === 0 ? "scale(1.2)" : `scale(${1 - Math.abs(offset) * 0.1})`,
                    opacity: offset === 0 ? 1 : 0.6,
                    transition: "all 0.4s ease",
                  }}
                />
              );
            })}
          </div>
        </div>


        <div ref={containerRef} className="listReviews">
          <div className="reviewBox" >
            <div className="review1">

            </div>
            <div className="review2">

            </div>

            {reviews.map((rev, index) =>
              <div className={`review ${index === activeIndex ? "active" : "notactive"}`}
                ref={(el) => (itemRefs.current[index] = el)}
                key={index} >
                <p className="quote">
                  "{rev.quote}"
                </p>
                <div className="profile">
                  <img src={rev.image} alt="Koray Okumus" className="avatar" />
                  <div className="info">
                    <p className="name">{rev.name} </p>
                    <p className="title">{rev.title} </p>
                  </div>
                </div>
              </div>
            )}
            <div className="review2">

            </div>
            <div className="review1">

            </div>

          </div>
        </div>

        <div className="changeIndex">
          {/* <FaArrowRight onClick={() => minusIndex()} className="left" /> */}
            <img onClick={() => minusIndex()} src={left} className="right" />
            <img onClick={() => plusIndex()} src={left} className="left" />
          {/* <FaArrowRight onClick={() => plusIndex()} className="right" /> */}
        </div>
      </div>
    </>
  )
}
export default Review;