import UploadController from '../controllers/UploadController';

const uploadController = new UploadController;

const { uploadFile } = require('../services/Upload');
let uploadfileEx = uploadFile.single('file');


module.exports = (app) => {
   app.post('/upload', uploadfileEx, uploadController.upload)
};