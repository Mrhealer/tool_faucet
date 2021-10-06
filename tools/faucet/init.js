const util = require('util')
const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const Faucet = require('../../build/contracts/Faucet.json');

const address = '';
const privateKey = '';
const infuraUrl = '';


const provider = new Provider(privateKey, infuraUrl);
const web3 = new Web3(provider);

const handleToken = async (str) => {
  console.log(`str: ` + str);
  try {
    const signedTx = await web3.eth.accounts.signTransaction(
      {
        from: address,
        to: str,
        value: web3.utils.toWei('1', 'ether'),
        gas: '21000',
      },
      privateKey
    );

    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(`Transaction hash: ` + receipt.transactionHash);
  } catch (e) {
    console.log(e);
  }

}

module.exports = {
  handleToken
};
