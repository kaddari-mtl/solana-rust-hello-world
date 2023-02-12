0. Install Rust and Solana :

https://www.youtube.com/playlist?list=PLUBKxx7QjtVnU3hkPc8GF1Jh4DE7cf4n1


1. Make the "Program" :
    mkdir src
    cd src
    cargo new --lib program


2. Update "Cargo.toml" with :

[dependencies]
solana-program = "1.9.9"

[dev-dependencies]
solana-program-test = "1.9.9"
solana-sdk = "1.9.9"

[lib]
crate-type = ["cdylib", "lib"]


3. Clear and update "program/src/lib.rs"


4. Build the "Program" :

cd program
cargo build-bpf


5. Deploy the "Hello world" Program :

solana program deploy /Users/huysonpham/Documents/github/solana-rust-hello-world/src/program/target/deploy/program.so

and it will returns something like this :
    Program Id: D3H4SCbd8fBWRpvFZbfk5VTN5rYT7dMRcffUUeHgeJj4


6. Create the "Client" :

    cd ../..
    npm init
    npm install --save @solana/web3.js


7. Add "scripts" and more "Dependencies and Dev-Dependencies" to "package.json


8. Install the packages and run the "build:program" script :

    npm install
    npm run build:program


9.  Deployed the "built Program" :

    solana program deploy ./dist/program/program.so

and it will returns something like :

    Program Id: Bdae1hhJGfNEqeUZSqHirFq39B73WeYSFUffNmZfMcZG

10. Complete the "Client"


11. Run the "Client" :

    npm run start

and it will returns something like :

> solana-rust-hello-world@1.0.0 start
> ts-node src/client/main.ts

Launching client...
--Pinging Program  Bdae1hhJGfNEqeUZSqHirFq39B73WeYSFUffNmZfMcZG
Transaction sent with hash: 5H8E3aEQgjjVgzA2SHyp5myqQxeCQtZNPvh6oSC1JACD6VZ3vVFkivmB3uKaq8L9iSmWXx2yMj17amaQBnRwM49G


12. Read the Transaction :

    solana confirm -v 5H8E3aEQgjjVgzA2SHyp5myqQxeCQtZNPvh6oSC1JACD6VZ3vVFkivmB3uKaq8L9iSmWXx2yMj17amaQBnRwM49G

and it will returns something like :

RPC URL: https://api.devnet.solana.com
Default Signer Path: /Users/huysonpham/.config/solana/id.json
Commitment: confirmed

Transaction executed in slot 195299361:
  Block Time: 2023-02-12T13:04:27-05:00
  Version: legacy
  Recent Blockhash: 6EWYLihDhFfTg85qEaaEggGvWvkMVh9DE6iH5dCem9H7
  Signature 0: 5H8E3aEQgjjVgzA2SHyp5myqQxeCQtZNPvh6oSC1JACD6VZ3vVFkivmB3uKaq8L9iSmWXx2yMj17amaQBnRwM49G
  Account 0: srw- 8vEJK7EXKUgqndsXfZHfEcAd9de8KE6QZm5zqKieAaYU (fee payer)
  Account 1: -r-x Bdae1hhJGfNEqeUZSqHirFq39B73WeYSFUffNmZfMcZG
  Instruction 0
    Program:   Bdae1hhJGfNEqeUZSqHirFq39B73WeYSFUffNmZfMcZG (1)
    Account 0: 8vEJK7EXKUgqndsXfZHfEcAd9de8KE6QZm5zqKieAaYU (0)
    Data: []
  Status: Ok
    Fee: ◎0.000005
    Account 0 balance: ◎1 -> ◎0.999995
    Account 1 balance: ◎0.00114144
  Compute Units Consumed: 467
  Log Messages:
    Program Bdae1hhJGfNEqeUZSqHirFq39B73WeYSFUffNmZfMcZG invoke [1]
    Program log: Hello world from Huy on Solana's Network! (with Rust!)
    Program Bdae1hhJGfNEqeUZSqHirFq39B73WeYSFUffNmZfMcZG consumed 467 of 200000 compute units
    Program Bdae1hhJGfNEqeUZSqHirFq39B73WeYSFUffNmZfMcZG success

Finalized