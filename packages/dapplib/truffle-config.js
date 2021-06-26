require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture stomach razor situate comfort install end army gather'; 
let testAccounts = [
"0xcd8dda596b9e030197c10c2cd55e79f982f4b6a7fa7c93b840bccb226d955523",
"0x4ce888d369ac13ccb305082a15d09dd0a8a978e4f80096431088f95e4a2ce7b3",
"0xba9f28826dbf156b3913047b44201b6bd655712e5ecd757ed41380e91a3558a0",
"0x253080bd9b0cef2a4a46537ff555dfe88134f6b05b1c9b7c7bc9ed06a9821301",
"0x3c0cdfe0e21c876a01e89810e1ae38c5b8a796f6e1cf3a162862d2fe1669f06b",
"0x3971a586a733a1db5344a79810be0394c4ce33c3113a5106d8a1123c8fa2383c",
"0x44da6b5235f6bbaac81b866adb92d68d2152adf2e28536f4ae75a47adc4e1f1d",
"0x54cd518a62b7ea0a0017271cb9f015f5416543ca280b2f8b868b5d9427fcd871",
"0xe77bc4e1a9fb3089163a9353e7fd3af1f48f7a71fc49524c6be145d4f15e79c5",
"0x6bb47f44b71d0df37a5acf315ff2eeb35fcf88f8e10ae44d85e5811f25d7259b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

