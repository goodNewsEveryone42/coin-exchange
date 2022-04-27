import axios from "axios";

 // setting instance server auth
export const httpServer = axios.create({
    baseURL: "https://ce.vk.team/api/v1/",
    headers:
  {
    // Authorization: `Basic ${Buffer.from('hyita neponyatnaya').toString('base64')}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  });

    // setting instance test
export const httpTest = axios.create({
    baseURL: "https://picsum.photos/v2/list?page=1&limit=10",
});

