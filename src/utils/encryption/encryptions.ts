import CryptoJS from "crypto-js";

const encryptionKey = "NTD921!"; // Reemplaza con tu propia clave segura

export function encryptUID(uid: string): string {
  const encryptedUID = CryptoJS.AES.encrypt(uid, encryptionKey).toString();
  return encryptedUID;
}

export function decryptUID(encryptedUID: string): string {
  if (encryptUID !== null) {
    const decryptedUID = CryptoJS.AES.decrypt(
      encryptedUID,
      encryptionKey
    ).toString(CryptoJS.enc.Utf8);
    return decryptedUID;
  }
  return "";
}
