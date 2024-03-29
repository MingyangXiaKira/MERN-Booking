import axios from "axios";

// ************ PUBLIC APIs ************
const baseUrl = process.env.REACT_APP_API_URL;
// logout user Function
const logoutService = () => {
  localStorage.removeItem("userInfo");
  return null;
};

// login user API call
const loginService = async (user) => {
  const { data } = await axios.post(`${baseUrl}/api/users/login`, user);
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

// register user API call
const registerService = async (user) => {
  const { data } = await axios.post(`${baseUrl}/api/users`, user);
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

// ************ PRIVATE APIs ************

// update profile API call
const updateProfileService = async (user, token) => {
  const { data } = await axios.put(`${baseUrl}/api/users`, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

// delete profile API call
const deleteProfileService = async (token) => {
  const { data } = await axios.delete(`${baseUrl}/api/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (data) {
    localStorage.removeItem("userInfo");
  }
  return data;
};

// change password API call
const changePasswordService = async (passwords, token) => {
  const { data } = await axios.put(`${baseUrl}/api/users/password`, passwords, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export {
  logoutService,
  loginService,
  updateProfileService,
  deleteProfileService,
  changePasswordService,
  registerService,
};
