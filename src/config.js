const description = "Rodney's Roadhouse";
const baseUri = "ipfs://QmdADtqNyPuNvzqdydekUAraX93ZvGUp4kaLLsp1M9JPGR";

const layerConfigurations = [
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "RODNEYBACKGROUND" },
      { name: "RODNEYBODY" },
      { name: "RODNEYHEAD" },
      { name: "RODNEYEYES" },
      { name: "RODNEYSTACHE" },
      { name: "RODNEYBALLS" },
    ],
  },
];

const format = {
  width: 2222,
  height: 2400,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
