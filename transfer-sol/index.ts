import { Keypair, PublicKey, Connection, Transaction, SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from "@solana/web3.js"

export const transferSol = async (from: Keypair, to: PublicKey, amount: number) => {
    // create connection
    const conn = new Connection("http://127.0.0.1:8899", "confirmed")

    // initialize transaction
    const transaction = new Transaction()

    // create instruction
    const instruction = SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: LAMPORTS_PER_SOL * amount
    })

    transaction.add(instruction)
    await sendAndConfirmTransaction(conn, transaction, [from])
    console.log("Sol transferred")
}
