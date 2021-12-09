/* eslint-disable import/no-unresolved */
import fs from "fs";
import admin from "firebase-admin";

import {createRequire} from 'module';

const require = createRequire(import.meta.url);

//const serviceAccount = JSON.parse(fs.readFileSync("ots-firebase-privatekey.json", "utf-8"));

const serviceAccount = require('./ots-firebase-privatekey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
export default admin;
