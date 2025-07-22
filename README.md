# DeisToken

This repository contains the solidity smart contract code for DeisToken, an ERC20 token with some extensions.
Contracts implemented by OpenZeppelin

## Contract Details

- Name: Deis
- Symbol: Deis
- Decimals: 18 (as per ether standard)
- Total Supply and cup: 100 million tokens

## Features

- **ERC20 Standard** DeisToken implements the ERC20 token standard defined by Ethereum which gives base functionality for transferring tokens, as well as approving them for use by other contracts.
- **Burnable** DeisToken is also burnable, meaning that token holders can "burn" or destroy their own tokens reducing the total supply in the process.
- **Permit** It also implements EIP-2612, which introduces permit function which can be used for approval of token transfer with signature.

## Deployment

Deploying DeisToken involves the following steps:

1. Ensure all necessary packages are installed. This can be done by running `yarn install` in the project's root
   directory.
2. Compile the smart contract using Hardhat. This can be done by running `npx hardhat compile` in the project's root
   directory.
3. Setup an environment variable file (`.env`) in the project root and provide the necessary environment variables, such
   as in .env.example.
4. Run the deployment script with the command `npx hardhat run scripts/deploy.js --network <network>`, where `<network>`
   is the name of the network you wish to deploy to (e.g., `mainnetBSC`, `testnetBSC`, etc.)

After successful deployment, the DeisToken contract address will be available in the console output.
