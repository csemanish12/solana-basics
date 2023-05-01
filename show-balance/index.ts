import { PublicKey, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js"

export const showBalance = async (publicKey: PublicKey) => {
    console.log("checking balaance......")
    const conn = new Connection("http://127.0.0.1:8899", "confirmed")
    const response = await conn.getAccountInfo(publicKey)
    return response.lamports / LAMPORTS_PER_SOL
}


(async() => {
    const publicKey = "3in3ZPg4DHxPJ3ttBUia2f5VLkuYAe68cTFbewQLFJf2"
    const balance = await showBalance(new PublicKey(publicKey))
    console.log(`The balance for the key ${publicKey} is ${balance}`)

})()
