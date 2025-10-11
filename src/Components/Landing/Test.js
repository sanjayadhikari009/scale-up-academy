import "./Test.css";
import { useEffect, useRef } from "react";

const Test = () => {
  const interBubbleRef = useRef(null);

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="test">
      <div class="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div class="gradients-container">
          <div class="g1"></div>
          <div class="g2"></div>
          <div class="g3"></div>
          <div class="g4"></div>
          <div class="g5"></div>
          <div ref={interBubbleRef} class="interactive"></div>
        </div>
      </div>
      <div className="test-content test-content-left">
        <div className="test-content-one test-subwrapper"></div>
      </div>
      <div className="test-content test-content-left">
        <div className="test-content-two test-subwrapper"></div>
      </div>
      <div className="test-content test-content-left">
        <div className="test-content-three test-subwrapper"></div>
      </div>
      <div className="test-content test-content-left">
        <div className="test-content-four test-subwrapper"></div>
      </div>
      <div className="test-content test-content-right">
        <div className="test-content-five test-subwrapper"></div>
      </div>
      <div className="test-content test-content-right">
        <div className="test-content-six test-subwrapper"></div>
      </div>
      <div className="test-content test-content-right">
        <div className="test-content-seven test-subwrapper"></div>
      </div>
      <div className="test-content test-content-right">
        <div className="test-content-eight test-subwrapper"></div>
      </div>
      <div className="test-content test-content-right">
        <div className="test-content-nine test-subwrapper"></div>
      </div>
    </div>
  );
};

export default Test;
