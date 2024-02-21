import { useState, useEffect } from 'react';
import Web3 from 'web3';
import ABI from '../contracts/YourContract.json';
import DesignPage from './DesignPage';

const App = () => {
  const [wallet, setWallet] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      setWallet(`Metamask Detected`);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      // Get network ID
      const networkId = await web3Instance.eth.net.getId();

      // Get contract address from ABI based on network ID
      const contractAddress = ABI.networks[networkId].address;

      // Create contract instance
      const contractInstance = new web3Instance.eth.Contract(ABI.abi, contractAddress);
      setContract(contractInstance);

      // Get user account
      const accounts = await web3Instance.eth.getAccounts();
      setAccount(accounts[0]);
    } else {
      setWallet(`Metamask not Detected please install`);
    }
  }

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className='w-screen h-screen bg-gray-950 text-white flex  flex-col  items-center'>
     

        <h1 className='text-4xl bg-'>{wallet}</h1>
        {/* <h1 className='text-2xl'>Acc : {account}</h1> */}
      {contract && account && <DesignPage contract={contract} account={account} web3={web3} />}
    </div>
  )
}

export default App;
