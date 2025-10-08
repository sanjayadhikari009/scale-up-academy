import { useNavigate } from "react-router-dom"
import { NavBar, CoursePage,GetReady,Footer} from "../../Components/ExportComponents"
import "./Cources.css"
import figma from "../../Photos/figma.jpg";
import adobephotoshop from "../../Photos/adobephotoshop.webp"
const Cources = () => {
    const linkTo = useNavigate();

    document.title = "ScaleUp Academy | Cources"
    return (
        <>
            <div className="coursesPage">
                <NavBar/>
                <CoursePage/>
            </div>
            <GetReady clean={true} />
            <Footer/>
        </>
    )
}
export default Cources