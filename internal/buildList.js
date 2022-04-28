const { version } = require("../package.json");

const mainnet = require("../assets/tokens/mainnet.json");
const bscTestnet = require("../assets/tokens/bsc-testnet.json");
const evmos = require("../assets/tokens/evmos.json");
const evmosTestnet = require("../assets/tokens/evmos-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "EvmoSwap Menu",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/evmoswap/default-token-list/master/assets/logox200.png",
    keywords: ["EvmoSwap", "default"],
    tokens: [
      ...mainnet,
      ...evmos,
      ...bscTestnet,
      ...evmosTestnet,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
