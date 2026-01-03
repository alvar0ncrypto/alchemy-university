// Wallet Address Validator
// Checks if a given Ethereum address is valid (basic check)

function isValidAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
}

// Example
console.log(isValidAddress("0x1234567890abcdef1234567890abcdef12345678")); // true
console.log(isValidAddress("0xGHIJK")); // false
