import { useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

const Connect = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  // Configure Web3Modal
  const web3Modal = new Web3Modal({
    network: 'mainnet', // Optional: Change to your desired network
    cacheProvider: true, // Optional: Enable caching
    providerOptions: {}, // Optional: Add additional wallet providers
  });

  // Function to connect wallet
  const connectWallet = async () => {
    try {
      const instance = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(instance);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setWalletAddress(address);
      setProvider(provider);
      setSigner(signer);

      console.log('Wallet connected:', address);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  // Function to disconnect wallet
  const disconnectWallet = () => {
    web3Modal.clearCachedProvider();
    setWalletAddress('');
    setProvider(null);
    setSigner(null);
    console.log('Wallet disconnected');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Ethereum Wallet Connection</h3>
        {walletAddress ? (
          <>
            <p>Connected Wallet: {walletAddress}</p>
            <button onClick={disconnectWallet}>Disconnect Wallet</button>
          </>
        ) : (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}
      </header>
    </div>
  );
};

export default Connect;


// import {useState} from 'react';
// import {ethers} from 'ethers';
// import { Log } from 'ethers';


// const Connect = () => {
//     const [walletAddress, setWalletAddress] = useState('');
//     const [provider, setProvider] = useState(null);
//     const [signer, setSigner] = useState(null);
  
//     // Function to connect wallet
//     const connectWallet = async () => {

//        // Check for MetaMask specifically
//     if (window.ethereum && window.ethereum.isMetaMask) {
         
//       try {
//         // Request account access
//         // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         const accounts = await window.ethereum
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = await provider.getSigner();

//         setWalletAddress(accounts[0]);
//         setProvider(provider);
//         setSigner(signer);

//         console.log('Wallet connected:', accounts[0]);
//       } catch (error) {
//         console.error('User denied account access or error occurred:', error);
//       }
//     } else {
//       console.error('MetaMask not detected');
//       alert('Please install MetaMask to use this app.');
//     }
//   };
  
//     // Function to disconnect wallet
//     const disconnectWallet = () => {
//       setWalletAddress('');
//       setProvider(null);
//       setSigner(null);
//       console.log('Wallet disconnected');
//     };

//   return (
//     <>
//      <div className="App">
//       <header className="App-header">
//         <h3>Ethereum Wallet Connection</h3>
//         {walletAddress ? (
//           <>
//             <p>Connected Wallet: {walletAddress}</p>
//             <button onClick={disconnectWallet}>Disconnect Wallet</button>
//           </>
//         ) : (
//           <button onClick={connectWallet}>Connect Wallet</button>
//         )}
//       </header>
//     </div>
//     </>
//   )
// }

// export default Connect