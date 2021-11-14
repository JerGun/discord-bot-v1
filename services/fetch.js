const axios = require("axios");

async function getBTC() {
  const price = [];
  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_KEY,
        },
      }
    )
    .then((res) => {
      price.push(res.data["data"]["1"]["quote"]["USD"]["price"].toFixed(6));
    });
  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1&convert=THB",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_KEY,
        },
      }
    )
    .then((res) => {
      price.push(res.data["data"]["1"]["quote"]["THB"]["price"].toFixed(2));
    });
  return price;
}

async function getETH() {
  const price = [];
  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1027",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_KEY,
        },
      }
    )
    .then((res) => {
      price.push(res.data["data"]["1027"]["quote"]["USD"]["price"].toFixed(6));
    });
  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1027&convert=THB",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_KEY,
        },
      }
    )
    .then((res) => {
      price.push(res.data["data"]["1027"]["quote"]["THB"]["price"].toFixed(2));
    });
  return price;
}

async function getBNB() {
  const price = [];
  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1839",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_KEY,
        },
      }
    )
    .then((res) => {
      price.push(res.data["data"]["1839"]["quote"]["USD"]["price"].toFixed(6));
    });
  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1839&convert=THB",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_KEY,
        },
      }
    )
    .then((res) => {
      price.push(res.data["data"]["1839"]["quote"]["THB"]["price"].toFixed(2));
    });
  return price;
}

function getKUB() {
  return axios
    .get("https://www.bitkub.com/api/market/information?currency=KUB")
    .then((res) => {
      return res.data["data"]["last"]["thb"];
    });
}

async function getCCAR() {
  const price = [];
  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=11502",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_KEY,
        },
      }
    )
    .then((res) => {
      // console.log("API call response:", res.data["data"]["11502"]["quote"]["USD"]["price"].toFixed(6));
      price.push(res.data["data"]["11502"]["quote"]["USD"]["price"].toFixed(6));
    });
  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=11502&convert=THB",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_KEY,
        },
      }
    )
    .then((res) => {
      price.push(res.data["data"]["11502"]["quote"]["THB"]["price"].toFixed(2));
    });
  return price;
}

async function getLUMI() {
  const price = [];
  const thb = await getTHB();
  await axios
    .get(
      "https://api.loremboard.finance/api/v2/charts/info?symbol=0x95013Dcb6A561e6C003AED9C43Fb8B64008aA361-bkc-usd"
    )
    .then((res) => {
      price.push(res.data["priceUSD"], res.data["priceUSD"] * thb);
    });

  return price;
}

function getTHB() {
  return axios
    .get("https://www.xe.com/api/protected/midmarket-converter/", {
      headers: {
        authorization:
          "Basic bG9kZXN0YXI6b09EZndjbENXUGtLVUIyeGlhdmdPS25mQmp4N01LMVI=",
      },
    })
    .then((res) => {
      return res.data["rates"]["THB"];
    });
}

module.exports = { getBTC, getETH, getBNB, getKUB, getCCAR, getLUMI, getTHB };
