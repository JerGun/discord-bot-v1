const axios = require("axios");

async function getBTC() {
  const price = [];
  await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/bitcoin",
    )
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["usd"].toFixed(2));
    });
  await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/bitcoin",
    )
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["thb"].toFixed(2));
    });
  return price;
}

async function getETH() {
  const price = [];
  await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/ethereum",
    )
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["usd"].toFixed(2));
    });
  await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/ethereum",
    )
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["thb"].toFixed(2));
    });
  return price;
}

async function getBNB() {
  const price = [];
  await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/binancecoin",
    )
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["usd"].toFixed(2));
    });
  await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/binancecoin",
    )
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["thb"].toFixed(2));
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
      "https://api.coingecko.com/api/v3/coins/cryptocars",
    )
    .then((res) => {
      // console.log("API call response:", res.data["data"]["11502"]["quote"]["USD"]["price"].toFixed(6));
      price.push(res.data["market_data"]["current_price"]["usd"].toFixed(6));
    });
  await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/cryptocars",
    )
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["thb"].toFixed(2));
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
    .get("https://query1.finance.yahoo.com/v8/finance/chart/USDTHB=X?region=US&lang=en-US&includePrePost=false&interval=2m&useYfid=true&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance", {
    })
    .then((res) => {
      return res.data["chart"]["result"][0]["meta"]["regularMarketPrice"];
    });
}

module.exports = { getBTC, getETH, getBNB, getKUB, getCCAR, getLUMI, getTHB };
