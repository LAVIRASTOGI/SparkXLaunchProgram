import axios from "axios";

var baseUrl = "https://api.spaceXdata.com/v3/launches?limit=100";

const userSpaceXService = {
  getUserList: (data) => {
    var url = baseUrl;
    return axios.get(url);
  },
 
};

export default userSpaceXService;
