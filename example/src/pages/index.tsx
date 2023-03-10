import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { IDL, GreetProgram } from "../idl";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

// import useAnchorProgram from "../useAnchorProgram";
// import useAnchorProgram from "use-anchor-program";
import useAnchorProgram from "../../../dist";

export default function Home() {
  const [name, setName] = useState<string>("");

  const { publicKey } = useWallet();

  const { program } = useAnchorProgram<GreetProgram>(
    "6fmK5BV525XzSMK8kpPE76Rqb5XuxKG666Qmx7Za9nsN",
    IDL
  );

  console.log(program);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!publicKey) {
      console.log("Wallet not connected");
      return;
    }

    // if (!program) {
    //   console.log("Program not loaded");
    //   return;
    // }

    // const sig = await program.methods.greet(name).rpc();

    // console.log("Transaction signature", sig);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <WalletMultiButton />

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            placeholder="Your name (or pseudo)"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.name}
          />
          <button type="submit" disabled={!publicKey} className={styles.submit}>
            Send Greeting
          </button>

          <p style={{ marginTop: "1rem" }}>
            (see the console after sending the greeting)
          </p>
        </form>
      </main>
    </>
  );
}
