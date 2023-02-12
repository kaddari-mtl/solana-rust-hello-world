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