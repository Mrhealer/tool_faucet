const axios = require('axios');
class BaseController {
    jsonResponse(res, data, code, message = '') {

        return res.status(code).json({message, data, statusCode: code});
    }

    error(res, err) {
        return res.status(500).json({
            message: err.toString()
        })
    }

    getApi(url) {
        axios.get(url)
            .then((res) => res.data)
            .catch((err) => console.error(err))
    }
}

export default BaseController;