import {
  useAddress,
  useContract,
  useDisconnect,
  useMetamask,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const { contract } = useContract(
    "0xd52bc82124D34296A9b575835d1C8f4a6e34C40E"
  );

  useEffect(() => {
    if (contract) {
      contract
        .call("getBioByUsername", "furqan")
        .then((bio) => console.log({ bio }))
        .catch((err) => console.error(err));
    }
  }, [contract]);
  return (
    <div>
      {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect with Metamask</button>
      )}
    </div>
  );
};

export default Home;
