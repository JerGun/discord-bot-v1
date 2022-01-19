const separator = require("number-separator");
const axios = require("axios");

async function getAll() {
  const data = {
    btc: {
      symbol: "BTC",
      name: "Bitcoin",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    eth: {
      symbol: "ETH",
      name: "Ethereum",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    bnb: {
      symbol: "BNB",
      name: "Binance Coin",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    kub: { symbol: "KUB", name: "Bitkub", price: { thb: 0 }, change: 0 },
    ccar: {
      symbol: "CCAR",
      name: "CryptoCars",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    cpan: {
      symbol: "CPAN",
      name: "CryptoPlanes",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    cgar: {
      symbol: "CGAR",
      name: "CryptoGuards",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    bcoin: {
      symbol: "BCOIN",
      name: "Bomber Coin",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
  };
  await axios
    .get("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then((res) => {
      data.btc.price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data.btc.price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data.btc.change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/ethereum")
    .then((res) => {
      data.eth.price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data.eth.price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data.eth.change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/binancecoin")
    .then((res) => {
      data.bnb.price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data.bnb.price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data.bnb.change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://www.bitkub.com/api/market/information?currency=KUB")
    .then((res) => {
      data.kub.price.thb = separator(
        res.data["data"]["last"]["thb"].toFixed(2),
        ",",
        ""
      );
      data.kub.change = String(res.data["data"]["percentage"]);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/cryptocars")
    .then((res) => {
      data.ccar.price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data.ccar.price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data.ccar.change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/cryptoplanes")
    .then((res) => {
      data.cpan.price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data.cpan.price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data.cpan.change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/cryptoguards")
    .then((res) => {
      data.cgar.price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data.cgar.price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data.cgar.change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/bomber-coin")
    .then((res) => {
      data.bcoin.price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data.bcoin.price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data.bcoin.change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });
  return data;
}

async function getBTC() {
  const price = [];
  await axios
    .get("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["usd"].toFixed(2));
      price.push(res.data["market_data"]["current_price"]["thb"].toFixed(2));
    });
  return price;
}

async function getETH() {
  const price = [];
  await axios
    .get("https://api.coingecko.com/api/v3/coins/ethereum")
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["usd"].toFixed(2));
      price.push(res.data["market_data"]["current_price"]["thb"].toFixed(2));
    });
  return price;
}

async function getBNB() {
  const price = [];
  await axios
    .get("https://api.coingecko.com/api/v3/coins/binancecoin")
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["usd"].toFixed(2));
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
    .get("https://api.coingecko.com/api/v3/coins/cryptocars")
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["usd"].toFixed(6));
      price.push(res.data["market_data"]["current_price"]["thb"].toFixed(2));
    });
  return price;
}

async function getCPAN() {
  const price = [];
  await axios
    .get("https://api.coingecko.com/api/v3/coins/cryptoplanes")
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["usd"].toFixed(6));
      price.push(res.data["market_data"]["current_price"]["thb"].toFixed(2));
    });
  return price;
}

async function getCGAR() {
  const price = [];
  await axios
    .get("https://api.coingecko.com/api/v3/coins/cryptoguards")
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["usd"].toFixed(6));
      price.push(res.data["market_data"]["current_price"]["thb"].toFixed(2));
    });
  return price;
}

async function getBCOIN() {
  const price = [];
  await axios
    .get("https://api.coingecko.com/api/v3/coins/bomber-coin")
    .then((res) => {
      price.push(res.data["market_data"]["current_price"]["usd"].toFixed(6));
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
    .get(
      "https://query1.finance.yahoo.com/v8/finance/chart/USDTHB=X?region=US&lang=en-US&includePrePost=false&interval=2m&useYfid=true&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance",
      {}
    )
    .then((res) => {
      return res.data["chart"]["result"][0]["meta"]["regularMarketPrice"];
    });
}

module.exports = {
  getAll,
  getBTC,
  getETH,
  getBNB,
  getKUB,
  getCCAR,
  getCPAN,
  getCGAR,
  getBCOIN,
  getLUMI,
  getTHB,
};
