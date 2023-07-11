import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function Home() {
  const address = useAddress();
  const handleLogIn = async () => {
    if (address) {
      console.log("firebaseToken");
    } else {
      toast.error("Address not available");
    }
  };
  return (
    <>
      <main>
        <Link href="/" className="button-86">
          Metamask Login Page
        </Link>
        <hr />
        <ConnectWallet />
        <h5>Get Firebase Auth Token</h5>
        <button onClick={handleLogIn} className="button-33" role="button">
          Get Token
        </button>
      </main>
    </>
  );
}
