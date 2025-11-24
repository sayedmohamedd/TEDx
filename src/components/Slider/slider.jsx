import './style.css'
// import './script.js'
export default function Slider() {
    return (
        // <div classNameName="container">
        <div className="slider container">

            <button className="slider-prev">
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="inner-slider">
                <div className="slider-item">
                    <img src="http://localhost:3001/Portfolio/static/media/01.jpg" alt="" />
                </div>
                <div className="slider-item">
                    <img src="./imgs/02.jpg" alt="" />
                </div>
                <div className="slider-item">
                    <img src="./imgs/03.jpg" alt="" />
                </div>
                <div className="slider-item">
                    <img src="imgs/04.jpg" alt="" />
                </div>
                <div className="slider-item">
                    <img src="./imgs/01.jpg" alt="" />
                </div>
                <div className="slider-item">
                    <img src="imgs/06.jpg" alt="" />
                </div>
                <div className="slider-item">
                    <img src="imgs/07.jpg" alt="" />
                </div>
                <div className="slider-item">
                    <img src="imgs/08.jpg" alt="" />
                </div>
                <div className="slider-item">
                    <img src="imgs/09.jpg" alt="" />
                </div>
            </div>

            <button className="slider-next">
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
        // </div>
    )
}