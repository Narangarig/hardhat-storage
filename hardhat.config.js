require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "ALCHEMY API KEY";
const RINKEY_PRIVATE_KEY = "Your private key";

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${RINKEY_PRIVATE_KEY}`],
    },
  },
};
