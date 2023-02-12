import {
    Keypair,
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
    TransactionInstruction,
    Transaction,
    sendAndConfirmTransaction,
  } from '@solana/web3.js';
  import fs from 'mz/fs';
  import path from 'path';
  
  
  /*
    Our keypair we used to create the on-chain Rust program
  */
  const PROGRAM_KEYPAIR_PATH = path.join(
    path.resolve(__dirname, '../../dist/program'),
    'program-keypair.json'
  );
  
  
  async function main() {
    
    console.log("Launching client...")
  
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed')
  
    const secretKeyString = await fs.readFile(PROGRAM_KEYPAIR_PATH, {encoding: 'utf8'});
    const secretKey = Uint8Array.from(JSON.parse(secretKeyString));
    const programKeypair = Keypair.fromSecretKey(secretKey);
    const programId: PublicKey = programKeypair.publicKey;
  
    const triggerKeypair = Keypair.generate();
    const airdropRequest = await connection.requestAirdrop(
      triggerKeypair.publicKey,
      LAMPORTS_PER_SOL,
    );

    const latestBlockHash = await connection.getLatestBlockhash();
    await connection.confirmTransaction({
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: airdropRequest,
    });

    console.log('--Pinging Program ', programId.toBase58());
    const instruction = new TransactionInstruction({
      keys: [{pubkey: triggerKeypair.publicKey, isSigner: false, isWritable: true}],
      programId,
      data: Buffer.alloc(0),
    });

    
    const txHash = await sendAndConfirmTransaction(
      connection,
      new Transaction().add(instruction),
      [triggerKeypair],
    );
    console.log("Transaction sent with hash:", txHash);
  }
  
  
  main().then(
    () => process.exit(),
    err => {
      console.error(err);
      process.exit(-1);
    },
  );