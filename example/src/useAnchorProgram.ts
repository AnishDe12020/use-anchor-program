import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useMemo } from "react";
import { AnchorProvider, Idl, Program } from "@project-serum/anchor";

const useAnchorProgram = <T extends Idl>(programId: string, idl: T) => {
  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();

  console.log(connection);

  const anchorProvider = useMemo(() => {
    if (!anchorWallet) return;

    return new AnchorProvider(connection, anchorWallet, {
      commitment: "confirmed",
    });
  }, [connection, anchorWallet]);

  const anchorProgram = useMemo(() => {
    if (!anchorProvider) return;

    return new Program(idl, programId, anchorProvider);
  }, [anchorProvider, idl, programId]);

  return {
    program: anchorProgram,
    connection,
  };
};

export default useAnchorProgram;
