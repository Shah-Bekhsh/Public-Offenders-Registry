const HDwalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const fs = require("fs-extra");
const compiledRegistry = require("./build/Registry.json");

const provider = new HDwalletProvider({
  mnemonic: {
    phrase:
      "social vanish picnic mail sing salt tide door voyage aisle autumn leave",
  },
  providerOrUrl:
    "https://rinkeby.infura.io/v3/c03755e4c8f94b55a4076732f30ad437",
});

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from ", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledRegistry.interface)
  )
    .deploy({ data: compiledRegistry.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to address ", result.options.address);
};
deploy();
