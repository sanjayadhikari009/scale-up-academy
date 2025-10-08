import { FaArrowRight } from 'react-icons/fa';
import "./Introduction.css"
const Introduction = ({headline,title,paragraph}) => {
    return (
        <><div className='introductionBox'>
            <div className="sectionTitle">
                <FaArrowRight className="ArrowIcons" />
                <p>{headline}</p>
            </div>

            <div className="sectionInfo">
                <h2>{headline}</h2>
                <p>{paragraph}</p>
            </div>
        </div>
        </>
    )
}
export default Introduction;