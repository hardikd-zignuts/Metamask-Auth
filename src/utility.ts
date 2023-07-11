import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { toast } from "react-hot-toast";

export async function checkOrCreateNonce(address: string): Promise<string> {
  const addressRef = doc(db, "users/", address);

  try {
    const snapshot = await getDoc(addressRef);

    if (snapshot.exists()) {
      const { nonce } = snapshot.data() as { nonce: string };

      if (nonce) {
        toast.error("Nonce already exists and returning");
        return nonce; // Nonce found, return existing value
      }
    } else {
      toast.error("Nonce not found, creating");
    }

    // Nonce not found, generate a random nonce
    const randomNonce = generateRandomNonce();

    // Save the random nonce in the database
    await setDoc(addressRef, { nonce: randomNonce }).then(() => {
      toast.success("Nonce created and set in database");
    });

    return randomNonce;
  } catch (error) {
    console.error("Error checking or creating nonce:", error);
    throw error;
  }
}

// Helper function to generate a random nonce
function generateRandomNonce(): string {
  // Implement your logic to generate a random nonce here
  // For example, you can use a library like `crypto` to generate a random string
  return Math.random().toString(36).substr(2, 10);
}

export function toHex(stringToConvert: string): string {
  return stringToConvert
    .split("")
    .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
    .join("");
}
