import axios from "axios";

axios.defaults.baseURL = "https://soundscape-app-3ca90467c35e.herokuapp.com/";
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;