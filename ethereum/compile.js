const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// Delete the entire build folder
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// Read Registry.sol file from contracts folder
const registryPath = path.resolve(__dirname, "contracts", "Registry.sol");
const source = fs.readFileSync(registryPath, "utf8");

// Compile the contract and get the contracts property from its output
const output = solc.compile(source, 1).contracts;

// Create the build directory
fs.ensureDirSync(buildPath);

// Loop over the output object and write it to different files inside build folder
for (let contract in output) {
  let name = contract.replace(":", "");
  fs.outputJsonSync(path.resolve(buildPath, name + ".json"), output[contract]);
}
