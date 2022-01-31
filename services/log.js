require("dotenv").config();

const axios = require("axios");

async function getIp() {
  let log = await axios.get(
    `https://api.ipdata.co/?api-key=${process.env.IPDATA_KEY}`
  );
  return log.data;
}

module.exports = { getIp };
