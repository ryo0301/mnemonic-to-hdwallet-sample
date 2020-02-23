const bip39 = require('bip39');
const EthereumHDKey = require('ethereumjs-wallet/hdkey');


console.log('--- Mnemonic ---');
const mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

console.log(`Mnemonic: ${mnemonic}`);
console.log(`Seed: ${seed.toString('hex')}`);


console.log('--- HDWallet ---');
const path = "m/44'/60'/0'/0/0"  // ETH
const hdkey = EthereumHDKey.fromMasterSeed(seed);
const wallet = hdkey.derivePath(path).getWallet();

console.log(`PrivateKey: ${wallet.getPrivateKeyString()}`);
console.log(`PublicKey: ${wallet.getPublicKeyString()}`);
console.log(`Address: ${wallet.getAddressString()}`);
console.log(`ChecksumAddress: ${wallet.getChecksumAddressString()}`);
