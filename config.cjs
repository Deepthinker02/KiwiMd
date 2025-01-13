// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"mJRMyxx9oAce5YiIruzQYGOFY0UFGFxwkAo4rWCQeHE="},"public":{"type":"Buffer","data":"nEDqRAfeyWUm83vtpIc2GUIDzJ3I+doIjle7dHp/EAI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"eMgA5lxYFozwYjr61UrY/aCK9znlj4Yd0zzKUTLTh1o="},"public":{"type":"Buffer","data":"/gaf14Q75+oTGXPBI3rGhlHML+GuPXWMWFlkI/XbE2Q="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"mKWV67KXzHX0Bhh09Vr0wSLkqEiNTqS7H2jTql0iv0k="},"public":{"type":"Buffer","data":"DzEgwG4kxLEuoTU6bLcbfJzrzbJrwHGanAI3AkGl+yI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"mG+nDNP+YBmjt6wsidfaeQaRait24KALI3vyLENJA1U="},"public":{"type":"Buffer","data":"b1Txztjslv68UW7f7Egb87K9JFQxZxLrLPsa3mLc+1Q="}},"signature":{"type":"Buffer","data":"7Z2pTdkF6TNXGB/KrFqcnInYl/M3zuUefJojq39JaqD7sC4Ci/jCDWgx/cMH27Y35WSLp8AV4Bpp28WLYvT6hQ=="},"keyId":1},"registrationId":38,"advSecretKey":"F/L5qU1V6+o+kBCPNnMZLIb8tFPUXj+NX3TE5Ig71gI=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"YBb5KmdETmmWS7xjHgKYnw","phoneId":"326d7db6-dd12-4c64-b230-cd2eca4b25ef","identityId":{"type":"Buffer","data":"6XstG/K5SKvUrLeBL+YzwB2AyR8="},"registered":true,"backupToken":{"type":"Buffer","data":"rq3nq18xv/JXBogKsfFvH33zTKE="},"registration":{},"pairingCode":"APTZJDHA","me":{"id":"923189492995:78@s.whatsapp.net","lid":"119808381182150:78@lid"},"account":{"details":"CPrZriwQ1bmTvAYYLyAAKAA=","accountSignatureKey":"y6iRVVDaN7E+NBZW0uKYAec2D54rT6gKPr7BRYnHT38=","accountSignature":"UJ0d8lo207uQdSMXgkvBjFODD9Bv20zfvmpoy36Z7bzRuhoGuKrofkuf6dI+E4k6vyD8c/MwvDqPrulh0eK3Bw==","deviceSignature":"HLexhvnj2UWmTLQxeWC/AqJFiB6ak/veox7xz8x+oHnM3yXdijQGbr/KD0U9azFw8o+gzBotSO1E1dVkMQLfiw=="},"signalIdentities":[{"identifier":{"name":"923189492995:78@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BcuokVVQ2jexPjQWVtLimAHnNg+eK0+oCj6+wUWJx09/"}}],"platform":"android","lastAccountSyncTimestamp":1736760536,"myAppStateKeyId":"AAAAAAwk"}",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'false' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'false' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'false' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'false' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'false' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'false' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'false' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "꧁༺𝕶𝖎𝖓𝖌 𓆩Awais࿐༻꧂",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923189492995",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'false' : false, 
};


module.exports = config;
