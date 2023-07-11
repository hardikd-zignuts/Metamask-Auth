import { toHex } from "@/utility";
// import { recoverPersonalSignature } from "@metamask/eth-sig-util";
const { ethers } = require('ethers');
import Web3 from 'web3';


export default async function handler(
  req,
  res
) {
  const { nonce, signature } = req.body;
  // const recoveredAddress = recoverPersonalSignature({
  //   data: `0x${toHex(nonce)}`,
  //   signature,
  // });
  const web3 = new Web3();

  const recoverSignature = (message, signature) => {
    const signer = ethers.utils.verifyMessage(message, signature);
    return signer;
  };
  console.log(recoverSignature)

  res.status(200).json({ recoverSignature });
}


// Example code to recover personal signature using ethers.js
