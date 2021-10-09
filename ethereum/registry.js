import web3 from "./web3";
import Registry from "./build/Registry.json";

const instance = new web3.eth.Contract(
  JSON.parse(Registry.interface),
  "0x418247EF83a525E2a2C9DB5116C53e6aFc97DF13"
);

export default instance;
