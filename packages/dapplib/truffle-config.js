require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember artwork give arena blue gasp'; 
let testAccounts = [
"0x965dc97e794d3d222e6a5c01ec744bbf62fe6d7490b53db6f828454bbae540f8",
"0x74b7fd5d7b37a8f0f890b859e6499c9c9db9db38c084b59218cc8df9ecae94f8",
"0x3ac0f28b239b14e94cf9b9172361189e045f40772d863da65a6a3f2a4b9d5939",
"0x2089a12feb6792dedc144810e30820f053eb7d3ea0766c5c1e8c4b8fdc201366",
"0xe8457176b8dccae2f9fefbab0822bf18792e7eb55521d15bcf6b2066ef1f3e1f",
"0x1c90b80428bc67037dd0d378593dc96de2f89358188cfe3122cc84e862cd7d8d",
"0x887de9ab58e6098bf19a0573e0bbba6a0989ca155ac48691f97d98100fe512c8",
"0x5de688ec77ed5703544073e088af98bccdc13ea23ae01f36869f0361b66d2e03",
"0x3fb9b8770ff2c608aa61b4e5c136a99af04d6a3fe29b2182947372fc9ba501bd",
"0x5b2d7b4a189b5a8ef29cf2f0c5703692b92a169b7b152d136bb7512553171ab1"
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

