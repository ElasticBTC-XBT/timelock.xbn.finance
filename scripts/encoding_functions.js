import Web3 from 'web3';

const web3 = new Web3();

const methodId = web3.utils.keccak256('testCall(string)').substr(0, 10); //0xc7cee1b7

// In this function call, the first and only parameter uses a dynamic type: string
// https://docs.soliditylang.org/en/latest/abi-spec.html#use-of-dynamic-types

// we use the offset in bytes to the start of their data area, measured from the start of the value encoding
// offset to start of data part of second parameter, 1*32 bytes, exactly the size of the head part

const stringArgument = web3.utils.padLeft(web3.utils.toHex(1*32), 64).replace('0x', '');
// 0000000000000000000000000000000000000000000000000000000000000020


const stringValue = 'TODO' // This one is a bit tricky, the docs explain it well: https://docs.soliditylang.org/en/latest/abi-spec.html#use-of-dynamic-types

const call = methodId + stringArgument + stringValue;
