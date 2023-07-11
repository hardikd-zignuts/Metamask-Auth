import { checkOrCreateNonce } from "@/utility";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const address = useAddress();

  const handleLogIn = async () => {
    if (address) {
      const nonce = await checkOrCreateNonce(address);
      console.log(nonce);
      if (nonce) {
        const signature = await window?.ethereum.request({
          method: "personal_sign",
          params: [nonce, address],
        });
        console.log(signature);
        // axios.post("/api/verifyAuth", { nonce, signature }).then((res) => {
        //   console.log("res", res);
        // });
      }
    }
  };
  return (
    <>
      <main>
        <Link href="/home" className="button-86">
          Auth Token Page
        </Link>
        <hr />
        <ConnectWallet />
        <h5>Login with MetaMask</h5>
        <button onClick={handleLogIn} className="button-33" role="button">
          Login
        </button>
      </main>
    </>
  );
}
