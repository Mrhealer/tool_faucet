import BaseController from "./BaseController";
const init = require('../tools/faucet/init');
const reader = require('xlsx')
const Web3 = require('web3');


export default class UploadController extends BaseController {
    async upload(req, res) {
        try {
            const { file } = req;

            console.log('file', file.path);

            console.log('fuckboy')
            // Reading our test file
            const fileRead = reader.readFile(file.path)

            let data = ['0xAc5444556C076f576409096EcADfF1538Fb9B707','0x6EcE0bA71F8D5c51De5f2e3889d561267B15295d','0x3D2dE7b1032981bdb9efE5E2ac0B766797511A52','0x873E730108285812DF047FF67eeDE037F236aa75']
            // const sheets = fileRead.SheetNames
            // const temp = reader.utils.sheet_to_json(
            //     fileRead.Sheets[fileRead.SheetNames[1]])
            // temp.forEach((res) => {
            //     for (var i in res) {
            //         if (i == 'What is your Metamask Wallet Address?') {
            //             if (Web3.utils.isAddress(res[i])) {
            //                 data.push(res[i])
            //             }
            //         }
            //     }

            // })

            for (let i = 0; i < data.length; i++) {
                await init.handleToken(data[i]);
            }

            return super.jsonResponse(res, data, 200, 'success');

        } catch (error) {
            super.error(res, error);
        }
    }
}