import { FullHeart, EmptyHeart, Close, DriverPic, Star, Tick, CloseColored } from "./images";

import './Driver.css';

const Driver = () => {
    return (
        <div className="driver">
            <div className="driver-right-img">
                <img src={DriverPic} alt="" />
            </div>
            <div className="driver-details">
                <h2>Gowsigan M</h2>
                <p>Credit Score: 68</p>
                <p>Bided Price: $21</p>
                <div className="options">
                    <button><img src={Tick} alt="" /></button>
                    <button><img src={Close} alt="" /></button>
                </div>
            </div>
            <div className="other-options">
                <div className="heart-close">
                    <img src={FullHeart} alt="" />
                    <img src={CloseColored} alt="" />
                </div>
                <div className="stars">
                    <img src={Star} alt="" />
                    <p>4.2</p>
                </div>
            </div>
        </div>
    );
}

export default Driver;