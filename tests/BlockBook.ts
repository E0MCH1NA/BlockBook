import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { BlockBook } from "../target/types/block_book";

describe("BlockBook", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.BlockBook as Program<BlockBook>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
