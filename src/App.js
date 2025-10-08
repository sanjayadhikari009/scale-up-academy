import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './App.css';
import ScrollToTop from "./Components/Scroll";
import { Home,Cources,Contact,About,UnderConstruction } from "./Pages/ExportPages";
import { useEffect,useState,useContext } from 'react';
function App() {
    const [scrollY, setScrollY] = useState(0);

     const handleScroll = () => {
        setScrollY(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Cleanup to remove listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [fullNav,setFullNav] = useState(true)
    useEffect(()=>{
        scrollY > 400 ? setFullNav(false): setFullNav(true) 
    },[scrollY]);


  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop /> {/* ✅ Place this here, not as a wrapper */}
        <Routes >
          <Route path='/' element={<Home fullNav={fullNav} />} />
          <Route path='/courses' element={<Cources fullNav={fullNav} />} />
          <Route path='/contact' element={<Contact fullNav={fullNav} />} />
          <Route path='/about' element={<About fullNav={fullNav} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
