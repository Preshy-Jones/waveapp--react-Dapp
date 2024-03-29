require("@nomiclabs/hardhat-waffle");

const dotenv = require("dotenv");
dotenv.config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_RINKEBY_API_KEY,
      accounts: [process.env.METAMASK_PRIVATE_KEY],
    },
    goerli: {
      url: process.env.ALCHEMY_GOERLI_API_KEY,
      accounts: [process.env.METAMASK_PRIVATE_KEY],
    },
  },
};
