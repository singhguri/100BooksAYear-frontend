import axios from "axios";

import { baseUrl } from "../components/index";

export const RegisterService = async (
  first_name,
  last_name,
  email,
  password
) => {
  if (baseUrl) {
    try {
      let res = await axios({
        url: baseUrl + "/register",
        timeout: 8000,
        method: "POST",
        data: {
          first_name,
          last_name,
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
