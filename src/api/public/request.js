import axios from "axios";

export default (method = 'get',url,data = {}) => {

    return axios({

                method: method,
                url: url,
                data: data,
            });
}