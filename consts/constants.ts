import { 
  Polygon,
  Mumbai,
  Chain
} from "@thirdweb-dev/chains";

// export const nftDropContractAddress =
//   "0x86eAf8D635eb11D5CD801c41744F44e50d4fd8d2";
// export const tokenContractAddress =
//   "0x12ea05ba6E8405cBeceB5b51134A821e86858F7E";
// export const stakingContractAddress =
//   "0x830Ace54DFbf3a011601bD0Bc1f9806d45D2d0E4";

// export const nftDropContractAddress =
//   "0xeE2386b533360fB5f7Ed7f6460eDd9AEA4109f4f";
// export const tokenContractAddress =
//   "0x93C10f17dB94aC17aD424dAcce57B2A36097C59E";
// export const stakingContractAddress =
//   "0xf98f4857E4989EB77BcCFF6164F4738d0648d896";

// export const nftDropContractAddress =
//   "0x4e11aa3c81445a41a61eA74a7600ABc0e7f75633";
// export const tokenContractAddress =
//   "0xa3f44d590AD0C3627BC69a7f2A772B3583a976e3";
// export const stakingContractAddress =
//   "0xA3A3987910527f260376E25b4E4366742237DA60";

export const nftDropContractAddress =
  "0xF1ba49fc081f66ef469C0e2f106B971B5518d97D";
export const tokenContractAddress =
  "0xa3f44d590AD0C3627BC69a7f2A772B3583a976e3";
export const stakingContractAddress =
  "0x0c61566cfBAE706c7B3E541B4Da231a94AD1FaD1";

// Your thirdweb api key - you can get one at https://thirdweb.com/dashboard/api-keys
export const TWApiKey: string = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID || 'da6bbe81b502ee868fcce5cef60972a5'
export const TW_SECRET_KEY: string = process.env.NEXT_PUBLIC_TEMPLATE_TW_SECRET_KEY || '9-2dXayWENngZWdPjN6fr3ZPlFCGAFOyQz-SW-F7PtUDW76jfjmwC9q6qS2ptxyXSr9vuB6_B5K_8fa1nzFuew'

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "ethereum";
export const activeChain: Chain = {
  // ...Mumbai,
  // rpc: [
  //   // Mumbai
  //   // "https://mumbai.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
  //   "https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
  //   "https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}",
  //   "https://matic-mumbai.chainstacklabs.com",
  //   "https://rpc-mumbai.maticvigil.com",
  //   // "https://matic-testnet-archive-rpc.bwarelabs.com",
  //   "https://polygon-mumbai-bor.publicnode.com"
  // ]
  ...Polygon,
  // rpc: [
  //   // Polygon
  //   // "https://polygon.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
  //   "https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
  //   "https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}",
  //   // "https://polygon-rpc.com/",
  //   // "https://rpc-mainnet.matic.network",
  //   "https://matic-mainnet.chainstacklabs.com",
  //   "https://rpc-mainnet.maticvigil.com",
  //   "https://rpc-mainnet.matic.quiknode.pro",
  //   // "https://matic-mainnet-full-rpc.bwarelabs.com",
  //   "https://polygon-bor.publicnode.com",
  // ]
};