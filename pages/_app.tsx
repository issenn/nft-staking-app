import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  // ThirdwebSDKProvider,
  metamaskWallet,
  // coinbaseWallet,
  walletConnect
} from "@thirdweb-dev/react";
import { 
  Polygon,
  // Mumbai
} from "@thirdweb-dev/chains";
import {
  ThirdwebStorage,
  StorageDownloader,
  IpfsUploader,
  DEFAULT_GATEWAY_URLS
} from "@thirdweb-dev/storage";
import type { GatewayUrls } from "@thirdweb-dev/storage";
import { TWApiKey, activeChain } from "../consts/constants";
import "../styles/globals.css";

// Configure a custom ThirdwebStorage instance
const gatewayUrls: GatewayUrls = {
  ...DEFAULT_GATEWAY_URLS,
  "ipfs://": [
    "https://nft-staking-app.myfilebase.com/ipfs/{cid}/{path}",
    // CID v1
    // "https://{cid}.ipfs.thirdwebstorage.com/{path}",
    // "https://{cid}.ipfs.thirdwebipfs.com/{path}",
    // "https://{cid}.ipfs.thirdwebgateway.com/{path}",
    // "https://{cid}.ipfs-public.thirdwebcdn.com/{path}",

    // "https://cf-ipfs.com/ipfs/{cid}/{path}",
    // "https://cloudflare-ipfs.com/ipfs/{cid}/{path}",  // GFW
    // "https://ipfs.cf-ipfs.com/ipfs/{cid}/{path}",  // GFW
    // "https://gateway.ipfscdn.io/ipfs/{cid}/{path}",  // GFW
    // "https://gateway.ipfs.io/ipfs/{cid}/{path}",
    // "https://ipfs.io/ipfs/{cid}/{path}",  // GFW

    // CID v0
    // "https://dweb.link/ipfs/",
    // "https://gateway.pinata.cloud/ipfs/",
    // "https://w3s.link/ipfs/",
    // "https://4everland.io/ipfs/",
    // "https://nftstorage.link/ipfs/",

    // "https://ipfs.thirdwebcdn.com/ipfs/",  // GFW
    // "https://ipfs-2.thirdwebcdn.com/ipfs/",  // GFW
    // "https://ipfs-3.thirdwebcdn.com/ipfs/",  // GFW
    // "https://ipfs-4.thirdwebcdn.com/ipfs/",  // GFW
    // "https://ipfs-5.thirdwebcdn.com/ipfs/",  // GFW

    // "https://ipfs.filebase.io/ipfs/",
    // "https://hardbin.com/ipfs/",
    // "https://gw3.io/ipfs/",
    // "https://ipfs.runfission.com/ipfs/",
    // "https://konubinix.eu/ipfs/",
    // "https://ipfs.scalaproject.io/ipfs/",
    // "https://via0.com/ipfs/",
  
    ...DEFAULT_GATEWAY_URLS["ipfs://"]
  ],
};
const downloader = new StorageDownloader({});
const uploader = new IpfsUploader();
const storage = new ThirdwebStorage({ uploader, downloader, gatewayUrls });
// const storage = new ThirdwebStorage({ uploader, downloader });

// const metamaskConfig = metamaskWallet();
// console.log("metamaskConfig", metamaskConfig.meta);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedChains={[activeChain]}
      supportedWallets={[
        metamaskWallet(),
        // coinbaseWallet(),
        walletConnect()
      ]}
      // Provide the custom storage instance to the SDK
      storageInterface={storage}
      clientId={TWApiKey}
      autoConnect={false}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
