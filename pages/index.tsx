import {
  useAddress,
  useContract,
  useDisconnect,
  useMetamask,
} from "@thirdweb-dev/react";
import { useEffect } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const { contract } = useContract(
    "0xf1B4FC3e438c62216CC581C206EC76D59347a148"
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
      <Heading p={4}>Welcome to Eth.bio</Heading>
      <Text fontSize="sm" p={4}>
        This is where you can create your decentralized profile
      </Text>
      <Box p={4}>
        {address ? (
          <>
            <Button onClick={disconnectWallet}>Disconnect Wallet</Button>
            <p>Your address: {address}</p>
          </>
        ) : (
          <>
            <Button onClick={connectWithMetamask}>Connect with Metamask</Button>
          </>
        )}
      </Box>
    </div>
  );
};

export default Home;
