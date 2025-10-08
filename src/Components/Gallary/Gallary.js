import "./Gallary.css";
import gallery1 from "../../Photos/Gallery/IMG_5890.jpeg"
const Gallery = () => {
    const img = "https://imgs.search.brave.com/B651j43j22_rYvx53HzVvAZEoHVy4Rkxasnf6h6ubIY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaW1hZ2Vz/L2FpL2ltYWdlLWdl/bmVyYXRvci9jb3Zl/ci9pbWFnZS1nZW5l/cmF0b3ItaGVhZGVy/LndlYnA_dz0zODQw/Jmg9MTkyMCZxPTkw/JTIwMzg0MHcsJTIw/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaW1hZ2Vz/L2FpL2ltYWdlLWdl/bmVyYXRvci9jb3Zl/ci9pbWFnZS1nZW5l/cmF0b3ItaGVhZGVy/LndlYnA_dz03Njgw/Jmg9Mzg0MCZxPTkw/JTIwNzY4MHc";

    const academyHas = [
        "SCALEUP ACADEMY",
        "SCALEUP SKILL HUB",
        "SCALEUP TECH LAB",
        "SCALEUP INNOVATION",
        "SCALEUP YOUR FUTURE",
        "SCALEUP TALENT ZONE",
        "SCALEUP CODERS",
        // "SCALEUP LEARNING",
        // "SCALEUP NEXT GEN"
    ];

    return (
        <>
            <div className="gallerySection">
                <div className="galleryTitle">Gallery Section</div>
                <div className="hr">
                </div>

                <div className="lifeatScaleup">
                    Life at Scaleup Academy
                </div>

                <div className="gallerySpike">
                    {academyHas.map((tag)=>
                        <>
                            <div className="scale">
                                <div class="star-3">
                                    <div class="star-ray"></div>
                                    <div class="star-ray"></div>
                                    <div class="star-ray"></div>
                                    <div class="star-ray"></div>
                                    <div class="star-ray"></div>
                                    <div class="star-ray"></div>
                                    <div class="star-ray"></div>
                                    <div class="star-ray"></div>
                                </div>
                                {tag}
                            </div>
                        </>
                    )}
                </div>

                <div className="gallery">
                    <div className="galleryRow1">
                        <div className="imgDiv">
                            <img src={gallery1} />

                        </div>

                        <div className="imgDiv">
                            <img src={gallery1} />
                        </div>

                        <div className="imgDiv">
                            <img src={gallery1} />
                        </div>

                        <div className="imgDiv">
                            <img src={gallery1} />
                        </div>
                        <div className="imgDiv">
                            <img src={gallery1} />
                        </div>
                        <div className="imgDiv">
                            <img src={gallery1} />
                        </div>
                    </div>

                    <div className="galleryRow2">
                        <div className="imgDivs">
                            <img src={gallery1} />
                        </div>

                        <div className="imgDivs">
                            <img src={gallery1} />
                        </div>

                        <div className="imgDivs">
                            <img src={gallery1} />
                        </div>

                        <div className="imgDivs">
                            <img src={gallery1} />
                        </div>
                        <div className="imgDivs">
                            <img src={gallery1} />
                        </div>
                        <div className="imgDivs">
                            <img src={gallery1} />
                        </div>
                    </div>
                </div>
                <div className="gallaryText">
                    Bhanubhakta
                </div>

                <div className="gallery">
                    <div className="galleryRow1">
                        <div className="imgDiv">
                            <img src={gallery1} />
                        </div>

                        <div className="imgDiv">
                            <img src={gallery1} />
                        </div>

                        <div className="imgDiv">
                            <img src={gallery1} />
                        </div>

                        <div className="imgDiv">
                            <img src={gallery1} />
                        </div>
                        <div className="imgDiv">
                            <img src={gallery1} />
                        </div>
                        <div className="imgDiv">
                            <img src={gallery1} />
                        </div>
                    </div>

                    <div className="galleryRow2">
                        <div className="imgDivs">
                            <img src={gallery1} />
                        </div>

                        <div className="imgDivs">
                            <img src={gallery1} />
                        </div>

                        <div className="imgDivs">
                            <img src={gallery1} />
                        </div>

                        <div className="imgDivs">
                            <img src={gallery1} />
                        </div>
                        <div className="imgDivs">
                            <img src={gallery1} />
                        </div>
                        <div className="imgDivs">
                            <img src={gallery1} />
                        </div>
                    </div>
                </div>
            </div >
            <div className='forNiddleG'><div className="needleLine"></div></div>
        </>
    )
}
export default Gallery;