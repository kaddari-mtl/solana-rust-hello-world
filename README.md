0. Install Rust and Solana

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