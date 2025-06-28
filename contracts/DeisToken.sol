// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.30;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

/// @title This code implements the DeisToken contract which is a ERC20 token with some extensions.
/// @dev DeisToken contract inherits from ERC20, ERC20Burnable, ERC20Permit contracts implemented by OpenZeppelin
contract DeisToken is ERC20, ERC20Burnable, ERC20Permit {
    //max token total supply mint with contract deploy
    uint constant public cap = 100e6 ether;

    constructor()
        ERC20('Deis', 'Deis')
        ERC20Permit('Deis') {
        _mint(msg.sender, cap);
    }
}
