const { decrypt } = require('./dist/lib/crypto.js');
const encrypted_hex = '77a53633348ab095242752c2d60daba487e0a40fba2317ff00346988b50e3e6a085a91dc68ff2cf4f427f18857a8afeb68ca92';
const iv_hex = 'a1099f21fb7a1579dabdfd0b415009e4';
const auth_tag_hex = 'b8b2969945709aaa6e0a22ff79b9eb5e';
const encrypted = Buffer.from(encrypted_hex, 'hex');
const iv = Buffer.from(iv_hex, 'hex');
const authTag = Buffer.from(auth_tag_hex, 'hex');
try {
  const decrypted = decrypt(encrypted, iv, authTag);
  console.log('Decrypted key:', decrypted.toString('utf8'));
} catch (e) {
  console.error('Error:', e.message);
}