import {PublicKey, Connection, LAMPORTS_PER_SOL} from "@solana/web3.js"

export const airdrop = async(address: string, amount: number) => {
    const publicKey = new PublicKey(address)
    const conn = new Connection("http://127.0.0.1:8899", "confirmed")
    const signature = await conn.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL)
    await conn.confirmTransaction(signature)

}

airdrop("3in3ZPg4DHxPJ3ttBUia2f5VLkuYAe68cTFbewQLFJf2", 5)