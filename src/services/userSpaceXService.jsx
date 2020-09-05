import axios from "axios";

var baseUrl = "https://api.spaceXdata.com/v3/launches?limit=100";

const createUrl = (data) => {
  var urlArr = Object.entries(data);
  var urlQueryParameter = "";
  urlArr.forEach((ele) => {
    if (ele[1]) {
      if (ele[0] ==="year") {
        urlQueryParameter = urlQueryParameter + `&launch_year=${ele[1]}`;
      } else if (ele[0] === "launch") {
        urlQueryParameter = urlQueryParameter + `&launch_success=${ele[1]}`;
      } else if (ele[0] === "landing") {
        urlQueryParameter = urlQueryParameter + `&land_success=${ele[1]}`;
      }
    }
  });
  return urlQueryParameter;
};
const userSpaceXService = {
  getUserList: (data) => {
    var url = baseUrl + createUrl(data);
    console.log(url);
    return axios.get(url);
  },
};

export default userSpaceXService;
