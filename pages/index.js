import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Airdrop1155 from "../components/erc1155Airdrop"
import Airdrop721 from "../components/erc721Airdrop"

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Airdrop Tool</h1>
          <div className={styles.grid}>
            <Airdrop1155 />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
