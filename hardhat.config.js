require('dotenv').config()
require("@nomicfoundation/hardhat-ethers");


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: process.env.BSC_RPC_NODE_URL
        // url: process.env.BSC_RPC_TESTNET_NODE_URL
      }
    },
    localhost: {
      host: "127.0.0.1",
      port: 8545
    },
    testnetBSC: {
      url: process.env.BSC_RPC_TESTNET_NODE_URL,
      chainId: 97,
      gasPrice: 20e9,
      accounts: [process.env.DEPLOYER_PK]
    },
    mainnetBSC: {
      url: process.env.BSC_RPC_NODE_URL,
      chainId: 56,
      gasLimit: 5e18,
      gasPrice: 5e9,
      accounts: [process.env.DEPLOYER_PK]
    },
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY
  },
  solidity: {
    compilers: [
      {
        version: "0.8.30",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ],
    outputSelection: {
      "*": {
        "*": ["storageLayout"]
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
}
