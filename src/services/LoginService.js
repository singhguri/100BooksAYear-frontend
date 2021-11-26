import axios from "axios";

import { baseUrl } from "../components/index";

export const LoginService = async (email, password) => {
  if (baseUrl) {
    try {
      let res = await axios({
        url: baseUrl + "/login",
        timeout: 8000,
        method: "POST",
        data: {
          email,
          password,
        },
      });

      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
};
