const ethers = require('ethers');
require('dotenv').config();

async function main() {

  const url = process.env.GOERLI_URL;

  let artifacts = await hre.artifacts.readArtifact("PassCallData");

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a PassCallData Factory
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let PassCallData = await factory.deploy();

  console.log("PassCallData address:", PassCallData.address);

  await PassCallData.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});