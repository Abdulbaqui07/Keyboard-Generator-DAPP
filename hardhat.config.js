require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: process.env.NODE_API_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
    },
  },
};
