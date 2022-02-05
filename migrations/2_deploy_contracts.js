const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

// Deploy Token 
module.exports = async function(deployer) {
   await deployer.deploy(Token);
    const token = await Token.deployed();
      
// Deploy EthSwap
   await deployer.deploy(EthSwap);
    const ethSwap = await EthSwap.deployed();
    const ethswap = await EthSwap.deployed();

    // transfer all tokens to EthSwap (1 million)
    await token.transfer(ethswap.address, '1000000000000000000000000');
  };

