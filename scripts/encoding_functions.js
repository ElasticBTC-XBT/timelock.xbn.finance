const Web3 = require('web3');

const web3 = new Web3();

const methodId = web3.utils.keccak256('updateDelay(uint256)').substr(0, 10); //0xc7cee1b7

// In this function call, the first and only parameter uses a dynamic type: string
// https://docs.soliditylang.org/en/latest/abi-spec.html#use-of-dynamic-types

// we use the offset in bytes to the start of their data area, measured from the start of the value encoding
// offset to start of data part of second parameter, 1*32 bytes, exactly the size of the head part

const uintArgument = web3.eth.abi.encodeParameter('uint256', 10).replace('0x', '');;
// 0000000000000000000000000000000000000000000000000000000000000020


const call = methodId + uintArgument;
console.log(call);


// upgrade contract 


const methodId2 = web3.utils.keccak256('upgrade(address,address)').substr(0, 10); //0xc7cee1b7

// In this function call, the first and only parameter uses a dynamic type: string
// https://docs.soliditylang.org/en/latest/abi-spec.html#use-of-dynamic-types

// we use the offset in bytes to the start of their data area, measured from the start of the value encoding
// offset to start of data part of second parameter, 1*32 bytes, exactly the size of the head part

const addressArgument21 = web3.eth.abi.encodeParameter('address', '0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC').replace('0x', '');;
const addressArgument22 = web3.eth.abi.encodeParameter('address', '0x53319829B15cfF46868d5c3970CD56FA7594E0D7').replace('0x', '');;
// 0000000000000000000000000000000000000000000000000000000000000020


const call2 = methodId2 + addressArgument21+addressArgument22;
console.log(call2);