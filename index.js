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

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });


    /* // Better Alternative for interacting with contract
    const hre = require("hardhat");

    const CONTRACT_ADDR = "";

    async function main() {
        // getContractAt gets the ABI and byteCode for the Contract
        // An instance of the Contract is returned and stored in the contract variable which allows us to interact with the contract
        const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);

        await contract.callContractAttempt();
    }
    */
