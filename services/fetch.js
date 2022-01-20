const separator = require("number-separator");
const axios = require("axios");

async function getAll() {
  const data = [
    {
      id: "btc",
      symbol: "BTC",
      name: "Bitcoin",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    {
      id: "eth",
      symbol: "ETH",
      name: "Ethereum",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    {
      id: "bnb",
      symbol: "BNB",
      name: "Binance Coin",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    {
      id: "kub",
      symbol: "KUB",
      name: "Bitkub",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    {
      id: "ccar",
      symbol: "CCAR",
      name: "CryptoCars",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    {
      id: "cpan",
      symbol: "CPAN",
      name: "CryptoPlanes",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    {
      id: "cgar",
      symbol: "CGAR",
      name: "CryptoGuards",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    {
      id: "bcoin",
      symbol: "BCOIN",
      name: "Bomber Coin",
      price: { usd: 0, thb: 0 },
      change: 0,
    },
    {
      id: "usd",
      symbol: "USD",
      name: "United States Dollar",
      price: { usd: 1, thb: 0 },
      change: 0,
    },
    {
      id: "thb",
      symbol: "THB",
      name: "Thai Baht",
      price: { usd: 0, thb: 1 },
      change: 0,
    }
  ];
  await axios
    .get("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then((res) => {
      data[0].price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data[0].price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data[0].change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/ethereum")
    .then((res) => {
      data[1].price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data[1].price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data[1].change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/binancecoin")
    .then((res) => {
      data[2].price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data[2].price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data[2].change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/bitkub-coin")
    .then((res) => {
      data[3].price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data[3].price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data[3].change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/cryptocars")
    .then((res) => {
      data[4].price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data[4].price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data[4].change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/cryptoplanes")
    .then((res) => {
      data[5].price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data[5].price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data[5].change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/cryptoguards")
    .then((res) => {
      data[6].price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data[6].price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data[6].change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get("https://api.coingecko.com/api/v3/coins/bomber-coin")
    .then((res) => {
      data[7].price.usd = separator(
        res.data["market_data"]["current_price"]["usd"].toFixed(2),
        ",",
        ""
      );
      data[7].price.thb = separator(
        res.data["market_data"]["current_price"]["thb"].toFixed(2),
        ",",
        ""
      );
      data[7].change =
        res.data["market_data"]["price_change_percentage_24h_in_currency"][
          "thb"
        ].toFixed(2);
    });

  await axios
    .get(
      "https://query1.finance.yahoo.com/v8/finance/chart/USDTHB=X?region=US&lang=en-US&includePrePost=false&interval=2m&useYfid=true&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance",
      {}
    )
    .then((res) => {
      data[8].price.thb = separator(
        res.data["chart"]["result"][0]["meta"]["regularMarketPrice"].toFixed(2),
        ",",
        ""
      );
      data[9].price.thb = separator(
        (1/res.data["chart"]["result"][0]["meta"]["regularMarketPrice"]).toFixed(6),
        ",",
        ""
      );
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
