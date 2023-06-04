import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { NETWORK } from "../const/contractAddresses";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={NETWORK}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
