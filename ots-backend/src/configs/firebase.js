/* eslint-disable import/no-unresolved */
import fs from "fs";
import admin from "firebase-admin";

const serviceAccount = JSON.parse(fs.readFileSync("./ots-firebase-privatekey.json", "utf-8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
