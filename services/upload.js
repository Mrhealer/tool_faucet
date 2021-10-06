import dayjs from "dayjs";

const path = require('path');

const multer = require('multer');


const diskStorage = multer.diskStorage({

    destination: (req, file, callback) => {

        callback(null, __basedir + '/uploads/');

    },

    filename: (req, file, callback) => {

        const now = dayjs(Date.now());

        //default is upload Avatar

        let filename = `${now.format('YYYYMMDD')}_${now.format('HHmmss')}${path.extname(file.originalname)}`;

        callback(null, filename);

    },

});

const uploadFile = multer({ storage: diskStorage });

module.exports = {

    uploadFile

};