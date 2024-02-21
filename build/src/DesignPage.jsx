import React from 'react';

const DesignPage = ({ account , contract , web3}) => {
  return (
    <div className="design-page-container">
      <h2>Welcome to Your Dapp</h2>
      <p>Connected Account: {account}</p>
      
      {/* Add your Dapp's UI elements and interactions here */}
      <p className='italic'>Add your Dapp's UI elements and interactions here</p>
    </div>
  );
};

export default DesignPage;







// import { useState } from 'react';

// const DesignPage = ({ contract, account, web3 }) => {
//     // Add your Dapp's specific functionality here
//     const [val, setVal] = useState("");
//     const [storedValue, setStoredValue] = useState("");

//     // Handler for storing value
//     const handleStoreValue = async () => {
//         // Convert input value to number
//         const valueToStore = parseInt(val);
        
//         // Call the contract method to store the value
//         await contract.methods.store(valueToStore).send({ from: account });

//         // Update stored value state
//         setStoredValue(valueToStore);
//     };

//     // Handler for retrieving stored value
//     const handleRetrieveValue = async () => {
//         // Call the contract method to retrieve the stored value
//         const retrievedValue = await contract.methods.retrieve().call();
//         const valParsed = web3.utils.toNumber(retrievedValue)
//         // Update stored value state
//         setStoredValue(valParsed);
//     };

//     return (
//         <div className="w-full h-full flex flex-col items-center p-8">
//             <div className='flex'>
//                 <h2>Welcome to Your Dapp</h2>
//                 <p className='ml-4'>Connected Account: {account}</p>
//             </div>

//             <div className='bg-slate-500 w-full h-full rounded-2xl flex justify-center items-center'>
//                 <input 
//                     type="number" 
//                     value={val} 
//                     onChange={(e) => setVal(e.target.value)} 
//                     className="input-style"
//                 />
//                 <button onClick={handleStoreValue} className="button-style">Store Value</button>
//                 <button onClick={handleRetrieveValue} className="button-style">Retrieve Value</button>
//             </div>

//             <p className="mt-4">Stored Value: {storedValue}</p>
//         </div>
//     );
// };

// export default DesignPage;
