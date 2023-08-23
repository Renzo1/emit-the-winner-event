require('dotenv').config();
const ethers = require('ethers');

const contractABI = [
    {
      "inputs": [],
      "name": "callContractAttempt",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
    /* // Better Alternative for getting the contracts ABI
  let artifacts = await hre.artifacts.readArtifact("PassCallData");
  const contractABI = artifacts.abi
    */

  const provider = new ethers.providers.AlchemyProvider(
    'goerli',
    process.env.TESTNET_ALCHEMY_KEY
  );

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  async function main() {
    const Contract = new ethers.Contract(
      '0x4E82252e3Fca5c004A49ED2f14E2f629a84B816e',
      contractABI,
      wallet
    );

    let tx1 = await Contract.callContractAttempt();

    console.log(tx1.hash);

    }

    main();

