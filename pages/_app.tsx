import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  // ThirdwebSDKProvider,
  // metamaskWallet,
  // coinbaseWallet,
  // walletConnect
} from "@thirdweb-dev/react";
import { 
  // Polygon,
  Mumbai
} from "@thirdweb-dev/chains";
import {
  ThirdwebStorage,
  StorageDownloader,
  IpfsUploader,
} from "@thirdweb-dev/storage";
import "../styles/globals.css";

// Configure a custom ThirdwebStorage instance
const gatewayUrls = {
  "ipfs://": [
    "https://dweb.link/ipfs/",
    "https://gateway.pinata.cloud/ipfs/",
    "https://w3s.link/ipfs/",
    "https://4everland.io/ipfs/",
    "https://nftstorage.link/ipfs/",
    // "https://ipfs-2.thirdwebcdn.com/ipfs/",
    // "https://ipfs-3.thirdwebcdn.com/ipfs/",
    // "https://ipfs-4.thirdwebcdn.com/ipfs/",
    // "https://ipfs-5.thirdwebcdn.com/ipfs/",
    // "https://ipfs.filebase.io/ipfs/",
    // "https://hardbin.com/ipfs/",
    // "https://gw3.io/ipfs/",
    // "https://ipfs.runfission.com/ipfs/",
    // "https://konubinix.eu/ipfs/",
    // "https://ipfs.scalaproject.io/ipfs/",
    // "https://via0.com/ipfs/",
    "https://cf-ipfs.com/ipfs/",
    // "https://cloudflare-ipfs.com/ipfs/",
    // "https://ipfs.cf-ipfs.com/ipfs/",
    // "https://gateway.ipfscdn.io/ipfs/",
    "https://gateway.ipfs.io/ipfs/",
    // "https://ipfs.io/ipfs/"
  ],
};
const downloader = new StorageDownloader();
const uploader = new IpfsUploader();
const storage = new ThirdwebStorage({ uploader, downloader, gatewayUrls });

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = {
  ...Mumbai,
  rpc: [
    // Mumbai
    // "https://mumbai.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
    "https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}",
    "https://matic-mumbai.chainstacklabs.com",
    "https://rpc-mumbai.maticvigil.com",
    // "https://matic-testnet-archive-rpc.bwarelabs.com",
    "https://polygon-mumbai-bor.publicnode.com"
  ]
  // ...Polygon,
  // rpc: [
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

// const metamaskConfig = metamaskWallet();
// console.log("metamaskConfig", metamaskConfig.meta);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedChains={[activeChain]}
      // supportedWallets={[
      //   metamaskWallet(),
      //   // coinbaseWallet(),
      //   // walletConnect()
      // ]}
      // Provide the custom storage instance to the SDK
      storageInterface={storage}
      autoConnect={false}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
