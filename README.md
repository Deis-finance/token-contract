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