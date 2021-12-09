import admin from "../configs/firebase.js";

async function createCustomClaims(email, claims) {
  const user = await admin.auth().getUserByEmail(email); // 1

  return admin.auth().setCustomUserClaims(user.uid, {
    ...claims,
  }); // 3
}

export default createCustomClaims;
