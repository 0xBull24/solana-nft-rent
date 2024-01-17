import { useEffect, useState } from 'react';
import './App.css'
import Button from './components/Button';
import { Keypair } from '@solana/web3.js';

function App() {
  // alternatively, use clusterApiUrl("mainnet-beta");
  const NETWORK = "https://api.devnet.solana.com";
  const provider = getProvider();
  const connection = new Connection(NETWORK);
  const message = "Sign here to deal with rentable tokenns.";

  const [pubkey, setPubkey] = useState("");

  async function connectWallet(): string {
    try {
      const resp = await provider.connect();
      setPubkey(resp.publicKey.toString());
    } catch (err) {
      console.log("Error found", err);
    }
  }

  const getProvider = () => {
    if ("phantom" in window) {
      const provider = window.phantom?.solana;

      if (provider?.isPhantom) {
        return provider;
      }
    }
    window.open("https://phantom.app/", "_blank");
  };

  // Check that phantom is installed
  useEffect(() => {
    setPubkey(getProvider());
  }, []);

  return (
    <>
      <Button name={"Connect"} clickAction={connectWallet} />
    </>
  );
}

export default App
