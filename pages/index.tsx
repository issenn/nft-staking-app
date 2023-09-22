import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* Top Section */}
        <h1 className={styles.title}>
          Welcome to <a href="">Issenn Contract</a>!
        </h1>

        <h1 className={styles.h1}>thirdweb Deploy - Custom Staking Contract</h1>

        {/* <p className={styles.description}>
          Get started by configuring your desired network in{" "}
          <code className={styles.code}>pages/_app.tsx</code>, then modify the{" "}
          <code className={styles.code}>pages/index.tsx</code> file!
        </p> */}

        {/* <div className={styles.connect}>
          <ConnectWallet />
        </div> */}

        {/* <div className={styles.grid}>
          <a href="https://portal.thirdweb.com/" className={styles.card}>
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              thirdweb.
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a href="https://portal.thirdweb.com/templates" className={styles.card}>
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </a>
        </div> */}

        <div className={styles.nftBoxGrid}>
          {/* <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push(`/mint`)}
          > */}
            {/* Mint a new NFT */}
            {/* <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
            <h2 className={styles.selectBoxTitle}>Mint a new NFT</h2>
            <p className={styles.selectBoxDescription}>
              Use the NFT Drop Contract to claim an NFT from the collection.
            </p>
          </div> */}

          <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push(`/stake`)}
          >
            {/* <a href="/stake"> */}
            {/* <link href="/stake" > */}
            {/* Staking an NFT */}
            <Image src="/icons/token.webp" alt="token" width={64} height={64} />
            <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
            <p className={styles.selectBoxDescription}>
              Use the custom staking contract deployed via <b>thirdweb Deploy</b>{" "}
              to stake your NFTs, and earn tokens from the <b>Token</b> contract.
            </p>
            {/* </link> */}
            {/* </a> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
