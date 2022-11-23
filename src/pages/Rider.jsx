import ConnectWallet from '../components/WebThree';
import Map from '../components/Map';
import MainLayout from '../components/MainLayout';
import Driver from '../components/Driver';

import './Rider.css';

const Rider = ()=>{
  
  return (
    <div className='rider'>
      <div className='rider-left'>
        <div className='rider-left-content'>
          <div className="collectWallet">
            <ConnectWallet />
          </div>
          <div className="mainLayout">
            <MainLayout />
          </div>
          <div className='drivers'>
            <Driver />
            <Driver />
            <Driver />
          </div>
        </div>  
      </div>
      <div className='rider-right'>
        <div className="rider-right-content">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Rider