import Axios from "axios";

Axios.defaults.baseURL = "https://psychology-server.herokuapp.com";

export const loginRequest = async (values) =>
  await Axios({
    method: "post",
    url: "/login",
    data: values,
  })
    .then((res) => JSON.parse(res.config.data))
    .then((res) => {
      console.log("Response from server:", res);
      return res;
    })
    .catch((err) => console.log(err));

export const logoutRequest = async () =>
  await Axios({
    method: "post",
    url: "/logout",
  })
    .then((res) => {
      console.log("Response from server:", res.data);
      return res;
    })
    .catch((err) => console.log(err));
