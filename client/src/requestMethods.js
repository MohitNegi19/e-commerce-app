import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDY5NGZjMWYwYjEwOGUzYTFmOWY4OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTM3NTgyOSwiZXhwIjoxNjYxNjM1MDI5fQ.NFSdwyJIZU7R-xA63n_T_jhfJgYcki2iUQjCKwxr22k"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
