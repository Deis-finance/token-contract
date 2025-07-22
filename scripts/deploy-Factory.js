const { ethers, network } = hre


const main = async () => {
    const accounts = await ethers.getSigners()
    let deployer = accounts[0]
    let nonce = await network.provider.send('eth_getTransactionCount', [deployer.address, 'latest'])
    const TokenFactory = await ethers.getContractFactory('DeisToken',deployer)
    const tokenContract = await TokenFactory.deploy( { nonce } )
    console.log('Successfully deployed token contract: ', tokenContract.target)
}

main().then(() => process.exit(0)).catch(e => {
    console.error(e)
    process.exit(1)
})
