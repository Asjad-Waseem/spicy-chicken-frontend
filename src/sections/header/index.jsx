import React, { useState, FC, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
// Assets
import logo from "assets/images/logo.svg";
import heroRooster from "assets/images/roosters/hero-rooster.png";
import remove from 'assets/images/icons/SC_MINUS.png';
import add from 'assets/images/icons/SC_PLUS.png';
import particles from "./images/particles.svg";

// Components
import Paper from "components/paper";
import Glowing from "components/glowing";
import Button from "components/button";
import Socials from "components/socials";
import Countdown from "components/countdown";

import {
  useWalletModal
} from "@solana/wallet-adapter-react-ui";

const Header = ({ className }) => {

  const [ quantity, setQuantity ] = useState(0);
  const [ walletConnection, setWalletConnection ] = useState(false);
  const classes = clsx("relative container px-4", className);
  const { visible, setVisible } = useWalletModal();
  const { wallet, connect, connecting, connected } = useWallet();

  const connectWallet = async () => {
    setVisible(!visible);
  };

  connect().then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })

  const addQuantity = () => {

    setQuantity(quantity+1);

    console.log(quantity);

  }

  const removeQuantity = () => {

    setQuantity(quantity-1);

    console.log(quantity);
    
  }

  return (
    <div className={classes}>
      <div className="flex flex-wrap -mx-4">
        <div className="lg:w-6/12 w-full px-4 pt-6">
          <div className="relative inline-flex mb-14">
            <img src={logo} alt="logo" className="md:max-w-none max-w-150" />
            <Glowing bg="bg-yellow-400" width="150%" height="150%" />
          </div>
          <p className="p-lg font-bold tracking-wide text-white mb-10">
            A limited NFT collection of 10,000 randomly generated angry chickens
            on Solana. Funds will be used to create Nifty Print, our proprietary
            NFT print on-demand marketplace. Members will receive royalties from
            Spicy Chicken NFT sales on the secondary marketplace + 20 % of all
            profits from Nifty Print.
          </p>
          <Socials />
        </div>
        <div className="relative lg:w-6/12 w-full px-4 mt-8">
          <Paper className="p-8 text-center" tilt="left">
            <img src={heroRooster} alt="rooster" className="mb-3 w-full" />
            <div className="text-left ml-5">
              <h6 className="text-16 font-bold">CLAIM YOUR SPICY CHICKEN</h6>
              <h2 className="font-extrabold -mt-2">Minting</h2>
              <h6 className="text-18 font-semibold leading-4">Select your desired output in the configurator below to mint Spicy Chicken. You can mint a total of 10 per transaction. Remember to connect your wallet first.</h6>
            </div>
            <div className="text-left md:ml-5 mt-2 flex flex-row justify-between">
              <div className="flex flex-col">
              <h6 className="text-18 font-extrabold ml-5 md:ml-10">Quantity</h6>
              <div className="flex flex-row -mt-6">
            <Button onClick={removeQuantity} className="ml-1 md:ml-0 mt-2">
            <img src={remove} alt="remove-icon" />
            </Button>
            <h6 className="text-20 font-extrabold mt-5 md:ml-5">{quantity}</h6>
            <Button onClick={addQuantity} className="md:ml-6 mt-2 -mr-3 md:mr-0">
            <img src={add} alt="add-icon" />
            </Button>
            </div>
            </div>
            <Button
              className="md:w-32 md:h-10 w-16 h-5 md:text-20 text-16 font-extrabold pr-16 pl-6 md:pl-9 pb-10 mx-auto mt-3 bg-black text-white rounded"
              onClick={() => connectWallet()}
            >
              MINT
            </Button>
            <div className="flex flex-col">
              <h6 className="text-18 font-extrabold ml-3 md:ml-10 mr-6">Price</h6>
                <h6 className="text-20 font-extrabold ml-2 md:ml-9 -mt-1">2 SOL</h6>
            </div>
            </div>
            <br/>
            <Button className="text-20 font-extrabold ml-7 md:ml-16 -mt-6 -mb-4" onClick={() => setWalletConnection(!walletConnection)}>
              {walletConnection ?
              <>Disconnect Wallet</>
              :
              <>Connect Wallet</>
              }
            </Button>
          </Paper>
          <div
            className="absolute top-6 -right-20 z-10 pointer-events-none"
            style={{ width: "130%" }}
          >
            <img src={particles} alt="particles" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
