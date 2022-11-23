import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../redux/actions/RiderActions";

import './WebThree.css';

const ConnectWallet = () => {
  const rider = useSelector((state) => state.rider);
  const dispatch = useDispatch();

  const [btnText, setBtnText] = useState("Connect Wallet");
  const [btnColor, setBtnColor] = useState("bg-blue-500");


  const connectWallet = async () => {
    if (rider.walletAddress == null) {
      await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (walletAddress) => {
          dispatch(Actions.login_rider(walletAddress[0]));
        });

      setBtnText("Connected");
      setBtnColor("bg-green-700")
    } else {
      dispatch(Actions.logout_rider());
      setBtnText("Connect to Wallet");
      setBtnColor("bg-blue-500");
    }

    console.log(rider.walletAddress);
  };

  return (
    <div className="webthree">
      <h1>
        {rider.walletAddress != null ? "Wallet Addres" : "Login to Continue"}
      </h1>

      <button
        onClick={() => connectWallet()}
        className={"px-4 py-2 text-white rounded-2xl shadow-lg "+btnColor} id="connection">
        {btnText}
      </button>
    </div>
  );
};

export default ConnectWallet;
