import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { assert } from "chai";
import { GreetProgram } from "../target/types/greet_program";

describe("greet-program", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.GreetProgram as Program<GreetProgram>;

  const userWallet = anchor.workspace.GreetProgram.provider.wallet;

  it("Is initialized!", async () => {
    let listener = program.addEventListener("GreetEvent", async (event) => {
      assert.equal(event.name, "anish");
      assert.equal(event.sender, userWallet.publicKey.toString());
    });

    const tx = await program.methods.greet("anish").rpc();

    program.removeEventListener(listener);

    console.log("Your transaction signature", tx);
  });
});
