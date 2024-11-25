import fs from 'fs';
import crypto from 'crypto';

const KEY = fs.readFileSync("key.secret").toString();
const EMAILS = fs.readFileSync("emails.secret").toString().split(/\r?\n/);
const KEYS = EMAILS.map(e => crypto.createHmac("SHA256", KEY).update(e).digest("hex").substring(0,16).toUpperCase());

fs.writeFileSync("codes.secret", KEYS.join("\n"));
fs.writeFileSync("codes_string.secret", KEYS.join(","));

fs.writeFileSync("codes_map.secret", EMAILS.map((e, i) => `${e},${KEYS[i]}`).join("\n"));
console.log("Done!");
