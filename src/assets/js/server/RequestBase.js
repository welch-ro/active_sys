import axios from './../axios';

class RequestBase {
    request (urlKey, data = {}, cancelInterceptors) {
        return axios(urlKey, data, cancelInterceptors);
    }
};

export default RequestBase;
