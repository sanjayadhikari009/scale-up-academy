import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import ArrowIcon from "../../Photos/Icons/arrowIcon.png";
const Cource = ({details}) => {
    const img = "https://imgs.search.brave.com/_6izdbSVpHbwqbawMBquENAqLf6WtvwCZmTG8AhitpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/Y2hhbmdlLWxvY2F0/aW9uLndlYnA"
    const Name = "DIGITAL MARKETING"
    const Desc = "Learn SEO, social media marketing, Google Ads & content strategy to master digital marketing."


    const [pos, setPos] = useState({ x: 0, y: 0, visible: false });

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - 20; // center drop (120px / 2)
        const y = e.clientY - rect.top - 20;

        setPos({ x, y, visible: true });
    };

    const handleLeave = () => {
        setPos((prev) => ({ ...prev, visible: false }));
    };
    return (
        <>
            <div className="course">
                <div
                    className="imgageCourse"
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                >
                    {details.background &&
                        <div className='linear-gradient'></div>
                    }
                    <FaArrowRight className='circleArrow' />
                    <img src={details.image} className="courseImg" />
                    {pos.visible && (
                        <div
                            className="drop"
                            style={{ left: pos.x, top: pos.y }}
                        />
                    )}
                </div>
                <div className="CourseDetails">
                    <div className="courseDetailsLeft">
                        <p>{details.headline}</p>
                        <p>{details.desc}</p>
                    </div>
                    {/* <FaArrowRight className='upArrow' /> */}
                    <img src={ArrowIcon} className='upArrow' alt='Arrow Icon'/>
                </div>

            </div>
        </>
    )
}
export default Cource