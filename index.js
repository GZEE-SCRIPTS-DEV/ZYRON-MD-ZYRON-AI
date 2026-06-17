// Bot desenvolvido por: GZEE SCRIPTS DEV
// Todos os direitos reservados © 2026
// Proibida a venda ou revenda desta base sem autorização.
//NAO TIRA OS CRÉDITOS LEIA O README PARA ENTENDER O PORQUE
// Bot oficial: Zyron-MD & Zyron-AI
// Desenvolvedor: @GzeeScriptsDev
//TikTok: @gzeescripts

// Site Oficial
// https://gzee-scripts-dev.github.io/Site-NXR/

// Comunidade oficial
// https://chat.whatsapp.com/ClSdOMal1Rc7EbOay45cew

//=============[ COMEÇO DE TUDO ]=============\\

const { menumemb, menubrink, menuRPG } = require("./dono/menus/menu");
const { promoverUser, rebaixarUser } = require('./gzee');
const axios = require('axios');
const baileys = require("@systemzero/baileys");
const { NumberDono, prefix, NickDono, NomeBot, SHIZUKU_KEY, SHIZUKU_SITE, sysite, syskey } = require("./dono/dono");
const ytSearch = require('yt-search');
const chalk = require('chalk');
const nexia = require('./nexia-sdk');
const API_KEY = '6SHqu1';
const cheerio = require('cheerio');
const FormData = require("form-data")
const MODEL = "qwen/qwen3-next-80b-a3b-instruct:free";
const OPENROUTER_KEY = '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';
const fs = require('fs');

const bancoPath = './banco.json';

function carregarBanco() {
if (!fs.existsSync(bancoPath)) {
fs.writeFileSync(bancoPath, '{}');
}
return JSON.parse(fs.readFileSync(bancoPath));
}

function salvarBanco(db) {
fs.writeFileSync(bancoPath, JSON.stringify(db, null, 2));
}

function getUserBancoId(info, sender, isGroup) {
return jidNormalizedUser(sender);
}

function verificarConta(db, user) {
if (!db[user]) {
db[user] = {
saldo: 0,
xp: 0,
inventario: {},
pets: {},
pescaPendente: null,
mineracaoPendente: null,
cacaPendente: null,
batalhaNaval: {
partidas: 0,
vitorias: 0,
derrotas: 0,
recompensaTotal: 0
}
};
}
}

const path = require('path');
const { downloadMediaMessage } = require('@systemzero/baileys');
const { generateWAMessageFromContent, prepareWAMessageMedia } = require('@systemzero/baileys');
const { version } = require("./package");
const {
    sistemaVerificacao
} = require('./database/verificacao');
const { 
fetchJson, 
colors, 
hora, 
data, 
getBuffer,
SimilarComandos, 
ListaComandos, 
getGroupAdmins, 
getMembros, 
moment, 
msg,
kyun,
infoSystem,
os,
menu,
menus, 
FotoMenu,
Config,
Config2,
linkfy,
util,
exec,
jpzinhhomi,
Shizukuu,
sleep,
ShizukuStile,
Cmd,
BuscarNogpt,
BaixarNoYt,
ttkdl,
instadl,
play_video,
METADINHAS,
ANT_LTR_MD_EMJ,
dono1,
dono2,
dono3,
dono4,
dono5,
dono6,
sendImageAsSticker2,
 sendVideoAsSticker2,
 getFileBuffer,
 downloadContentFromMessage,
 jidNormalizedUser
} = require("./consts");

process.on("uncaughtException", (err) => {
console.log("🔥 ERRO REAL:");
console.log(err.stack);
});

process.on("unhandledRejection", (err) => {
console.log("🔥 PROMISE ERRO REAL:");
console.log(err.stack || err);
});

const metadataCache = new Map();

async function getGroupMetadataCached(conn, jid) {
const now = Date.now();
const cache = metadataCache.get(jid);

if (cache && now - cache.time < 60000) {
return cache.data;
}

const data = await conn.groupMetadata(jid);
metadataCache.set(jid, { data, time: now });
return data;
}

const lojaItems = [
{ id: 1, nome: "🛡️ Escudo Anti-Assalto", preco: 5000, item: "escudo" },
{ id: 2, nome: "🍀 Amuleto da Sorte", preco: 3500, item: "amuleto" },
{ id: 3, nome: "💼 Maleta Premium", preco: 8000, item: "maleta" },
{ id: 4, nome: "👑 VIP Econômico", preco: 15000, item: "vipEco" },
{ id: 5, nome: "📱 Motorola K10", preco: 2000, item: "k10" },
{ id: 6, nome: "📱 Samsung a15", preco: 7500, item: "a15" },
{ id: 7, nome: "📱 Samsung S26", preco: 25000, item: "samsung" },
{ id: 8, nome: "💻 Notebook", preco: 18000, item: "notebook" },
{ id: 9, nome: "🖥️ PC Gamer", preco: 50000, item: "pcgamer" },
{ id: 10, nome: "⌚ Smartwatch", preco: 6500, item: "smartwatch" },
{ id: 11, nome: "🎧 Headset Gamer", preco: 4500, item: "headset" },
{ id: 12, nome: "🚲 Bicicleta", preco: 12000, item: "bike" },
{ id: 13, nome: "🏍️ Moto 160", preco: 70000, item: "160" },
{ id: 14, nome: "🏍️ Moto Ninja 400", preco: 150000, item: "ninja" },
{ id: 15, nome: "🚗 Carro Peugeot", preco: 250000, item: "peugeot" },
{ id: 16, nome: "🚗 Carro BMW M5", preco: 800000, item: "bmwm5" },
{ id: 17, nome: "🏠 Casa Simples", preco: 500000, item: "casa1" },
{ id: 18, nome: "🏡 Casa de Luxo", preco: 2500000, item: "casa2" },
{ id: 19, nome: "🏰 Mansão", preco: 10000000, item: "mansao" },
{ id: 20, nome: "💎 Diamante Raro", preco: 50000, item: "diamante" },
{ id: 21, nome: "🥇 Barra de Ouro", preco: 30000, item: "ouro" },
{ id: 22, nome: "💰 Cofre Bancário", preco: 90000, item: "cofre" },
{ id: 23, nome: "🛫 Jato Particular", preco: 50000000, item: "jato" },
{ id: 24, nome: "🚁 Helicóptero", preco: 20000000, item: "helicoptero" }
];

const empregos = [
{ id: 1, nome: "🧹 Faxineiro", xp: 1200, min: 1000, max: 1200 },
{ id: 2, nome: "🚴 Entregador", xp: 2300, min: 1200, max: 1300 },
{ id: 3, nome: "🛒 Atendente", xp: 3100, min: 2000, max: 2400 },
{ id: 4, nome: "🔧 Mecânico", xp: 3500, min: 3600, max: 5300 },
{ id: 5, nome: "💻 Programador", xp: 7009, min: 6000, max: 10000 },
{ id: 6, nome: "👨‍⚕️ Médico", xp: 5000, min: 5800, max: 6000 },
{ id: 7, nome: "👨‍💼 Empresário", xp: 9990, min: 6000, max: 7800 },
{ id: 8, nome: "👑 Dono da Zyron", xp: 500000, min: 300000, max: 800000 }
];

function tempo(ms) {
let h = Math.floor(ms / 3600000);
let m = Math.floor((ms % 3600000) / 60000);
let s = Math.floor((ms % 60000) / 1000);
return `${h}h ${m}m ${s}s`;
}

const jogosSudoku = {}

function gerarSudoku() {
  const sudokus = [
    {
      puzzle: [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
      ],
      solution: [
        [5,3,4,6,7,8,9,1,2],
        [6,7,2,1,9,5,3,4,8],
        [1,9,8,3,4,2,5,6,7],
        [8,5,9,7,6,1,4,2,3],
        [4,2,6,8,5,3,7,9,1],
        [7,1,3,9,2,4,8,5,6],
        [9,6,1,5,3,7,2,8,4],
        [2,8,7,4,1,9,6,3,5],
        [3,4,5,2,8,6,1,7,9]
      ]
    },
    {
      puzzle: [
        [0,0,0,2,6,0,7,0,1],
        [6,8,0,0,7,0,0,9,0],
        [1,9,0,0,0,4,5,0,0],
        [8,2,0,1,0,0,0,4,0],
        [0,0,4,6,0,2,9,0,0],
        [0,5,0,0,0,3,0,2,8],
        [0,0,9,3,0,0,0,7,4],
        [0,4,0,0,5,0,0,3,6],
        [7,0,3,0,1,8,0,0,0]
      ],
      solution: [
        [4,3,5,2,6,9,7,8,1],
        [6,8,2,5,7,1,4,9,3],
        [1,9,7,8,3,4,5,6,2],
        [8,2,6,1,9,5,3,4,7],
        [3,7,4,6,8,2,9,1,5],
        [9,5,1,7,4,3,6,2,8],
        [5,1,9,3,2,6,8,7,4],
        [2,4,8,9,5,7,1,3,6],
        [7,6,3,4,1,8,2,5,9]
      ]
    },
    {
      puzzle: [
        [0,2,0,6,0,8,0,0,0],
        [5,8,0,0,0,9,7,0,0],
        [0,0,0,0,4,0,0,0,0],
        [3,7,0,0,0,0,5,0,0],
        [6,0,0,0,0,0,0,0,4],
        [0,0,8,0,0,0,0,1,3],
        [0,0,0,0,2,0,0,0,0],
        [0,0,9,8,0,0,0,3,6],
        [0,0,0,3,0,6,0,9,0]
      ],
      solution: [
        [1,2,3,6,7,8,9,4,5],
        [5,8,4,2,3,9,7,6,1],
        [9,6,7,1,4,5,3,2,8],
        [3,7,2,4,6,1,5,8,9],
        [6,9,1,5,8,3,2,7,4],
        [4,5,8,7,9,2,6,1,3],
        [8,3,6,9,2,4,1,5,7],
        [2,1,9,8,5,7,4,3,6],
        [7,4,5,3,1,6,8,9,2]
      ]
    }
  ]

  return sudokus[Math.floor(Math.random() * sudokus.length)]
}

function mostrarSudoku(tabuleiro) {
  let txt = '╭━━━「 🧩 SUDOKU 」━━━╮\n'
  for (let i = 0; i < 9; i++) {
    if (i % 3 === 0 && i !== 0) txt += '┣━━━━━━━━━━━━━━━┫\n'
    txt += '┃ '
    for (let j = 0; j < 9; j++) {
      if (j % 3 === 0 && j !== 0) txt += '│ '
      txt += tabuleiro[i][j] === 0 ? '⬜ ' : `${tabuleiro[i][j]} `
    }
    txt += '┃\n'
  }
  txt += '╰━━━━━━━━━━━━━━━╯\n\n'
  txt += 'Use: $sudoku linha coluna número\n'
  txt += 'Ex: $sudoku 1 3 4'
  return txt
}

function sudokuCompleto(tabuleiro) {
  return tabuleiro.every(linha => linha.every(num => num !== 0))
}

const jogos2048 = {}

function novo2048() {
  const board = Array.from({ length: 4 }, () => Array(4).fill(0))
  add2048(board)
  add2048(board)
  return board
}

function add2048(board) {
  const vazios = []
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === 0) vazios.push([i, j])
    }
  }
  if (!vazios.length) return
  const [i, j] = vazios[Math.floor(Math.random() * vazios.length)]
  board[i][j] = Math.random() < 0.9 ? 2 : 4
}

function mostrar2048(board, score = 0) {
  let txt = `╭━━━「 🎮 2048 」━━━╮\n`
  txt += `┃ Pontos: ${score}\n`
  txt += `┣━━━━━━━━━━━━━━━┫\n`

  for (const linha of board) {
    txt += '┃ '
    txt += linha.map(n => n === 0 ? '⬜' : String(n).padStart(4, ' ')).join(' ')
    txt += ' ┃\n'
  }

  txt += `╰━━━━━━━━━━━━━━━╯\n\n`
  txt += `Use:\n`
  txt += `$2048 cima\n`
  txt += `$2048 baixo\n`
  txt += `$2048 esquerda\n`
  txt += `$2048 direita\n`
  txt += `$2048 sair`
  return txt
}

function moverLinha2048(linha) {
  let nums = linha.filter(n => n !== 0)
  let pontos = 0

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2
      pontos += nums[i]
      nums.splice(i + 1, 1)
    }
  }

  while (nums.length < 4) nums.push(0)
  return { linha: nums, pontos }
}

function clonar2048(board) {
  return board.map(l => [...l])
}

function igual2048(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}

function mover2048(board, dir) {
  let pontos = 0
  let novo = clonar2048(board)

  if (dir === 'esquerda') {
    for (let i = 0; i < 4; i++) {
      const r = moverLinha2048(novo[i])
      novo[i] = r.linha
      pontos += r.pontos
    }
  }

  if (dir === 'direita') {
    for (let i = 0; i < 4; i++) {
      const r = moverLinha2048(novo[i].reverse())
      novo[i] = r.linha.reverse()
      pontos += r.pontos
    }
  }

  if (dir === 'cima') {
    for (let j = 0; j < 4; j++) {
      const coluna = [novo[0][j], novo[1][j], novo[2][j], novo[3][j]]
      const r = moverLinha2048(coluna)
      for (let i = 0; i < 4; i++) novo[i][j] = r.linha[i]
      pontos += r.pontos
    }
  }

  if (dir === 'baixo') {
    for (let j = 0; j < 4; j++) {
      const coluna = [novo[0][j], novo[1][j], novo[2][j], novo[3][j]].reverse()
      const r = moverLinha2048(coluna)
      const voltada = r.linha.reverse()
      for (let i = 0; i < 4; i++) novo[i][j] = voltada[i]
      pontos += r.pontos
    }
  }

  return { board: novo, pontos }
}

function perdeu2048(board) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === 0) return false
      if (j < 3 && board[i][j] === board[i][j + 1]) return false
      if (i < 3 && board[i][j] === board[i + 1][j]) return false
    }
  }
  return true
}

async function uploadTmpFiles(buffer, filename, mimetype) {
const form = new FormData();

form.append('file', buffer, {
filename,
contentType: mimetype
});

const { data } = await axios.post(
'https://tmpfiles.org/api/v1/upload',
form,
{
headers: form.getHeaders()
}
);

return data.data.url.replace(
'tmpfiles.org/',
'tmpfiles.org/dl/'
);
}

async function uploadTelegraph(buffer, filename, mimetype) {
const form = new FormData();

form.append('file', buffer, {
filename,
contentType: mimetype
});

try {
const { data } = await axios.post(
'https://telegra.ph/upload',
form,
{
headers: form.getHeaders()
}
);

if (!data?.[0]?.src) throw new Error();

return `https://telegra.ph${data[0].src}`;

} catch {
return await uploadTmpFiles(
buffer,
filename,
mimetype
);
}
}

//início do module
module.exports = async function (conn, upsert) {
  try {
const info = upsert?.messages && upsert?.messages[0];
if (!info) return;
const from = info?.key?.remoteJid;
const isGroup = from.endsWith('@g.us');
const isCanal = from.endsWith('@newsletter');
const pushname = info?.pushName || await conn?.user?.name || "Usuário";
const content = JSON.stringify(info.message);
const quoted = info.quoted ? info.quoted : info
const sender = jidNormalizedUser(
  isGroup
    ? info?.key?.participantAlt || info?.key?.participant || info?.key?.participantPn || info?.key?.senderPn || info?.key?.remoteJid
    : info?.key?.participantAlt || info?.key?.remoteJid || info?.key?.participant || info?.key?.senderPn
);

const botNumber = jidNormalizedUser(await conn.user.id || await conn.user.lid);
const Numero1 = jidNormalizedUser(`${dono1}@s.whatsapp.net`);
const Numero2 = jidNormalizedUser(`${dono2}@s.whatsapp.net`);
const Numero3 = jidNormalizedUser(`${dono3}@s.whatsapp.net`);
const Numero4 = jidNormalizedUser(`${dono4}@s.whatsapp.net`);
const Numero5 = jidNormalizedUser(`${dono5}@s.whatsapp.net`);
const Numero6 = jidNormalizedUser(`${dono6}@s.whatsapp.net`);
const MeuNumero = jidNormalizedUser(`${NumberDono}@s.whatsapp.net`);
const IsCreator = jpzinhhomi?.includes(sender);
const SoCriador = Shizukuu?.includes(sender);
const SoBot = botNumber?.includes(sender)
const So_Dono =
sender === MeuNumero ||
sender === Numero1 ||
sender === Numero2 ||
sender === Numero3 ||
sender === Numero4 ||
sender === Numero5 ||
sender === Numero6 ||
sender === botNumber ||
IsCreator ||
SoCriador;

const moment = require("moment-timezone");

const date = moment().tz("America/Sao_Paulo").format("DD/MM/YYYY");
const hora = moment().tz("America/Sao_Paulo").format("HH:mm:ss");

const type = baileys.getContentType(info?.message);

let body =
  info?.message?.conversation ||
  info?.message?.extendedTextMessage?.text ||
  info?.message?.imageMessage?.caption ||
  info?.message?.videoMessage?.caption ||
  info?.message?.documentWithCaptionMessage?.message?.documentMessage?.caption ||
info?.message?.buttonsResponseMessage?.selectedButtonId ||
info?.message?.templateButtonReplyMessage?.selectedId ||
info?.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
info?.text ||
"";
  if (info?.message?.interactiveResponseMessage) {
  const params = info?.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson || "";

  const id = params.match(/"id"\s*:\s*"([^"]+)"/)?.[1];

  if (id) body = id;
}

global.forca = global.forca || {};

const cacheMetadata = new Map()

async function getMetadataSeguro(conn, from) {
  const agora = Date.now()
  const cache = cacheMetadata.get(from)

  // cache por 60 segundos
  if (cache && agora - cache.time < 60000) {
    return cache.data
  }

  try {
    const metadata = await conn.groupMetadata(from)
    cacheMetadata.set(from, {
      time: agora,
      data: metadata
    })
    return metadata
  } catch (e) {
    console.log('❌ ERRO GROUP METADATA:', e.message)

    // se tiver cache antigo, usa ele mesmo
    if (cache) return cache.data

    throw e
  }
}

// coloque fora das cases, no topo do index.js

//CONSTS IMPORTANTES

const veyronMemPath = path.join(__dirname, 'database', 'veyron_memoria.json');

function carregarMemoriaVeyron() {
if (!fs.existsSync(veyronMemPath)) {
fs.writeFileSync(veyronMemPath, JSON.stringify({
nome: "Veyron-AI",
dono: "GzeeScriptsDev</>",
jeito: "responda como uma IA direta, inteligente, meio sarcástica e sem enrolação, faça códigos completos",
memoria: [
"Você é o Veyron-AI, irmão do Zyron-AI, criado pelo GzeeScriptsDev</>."
]
}, null, 2));
}

return JSON.parse(fs.readFileSync(veyronMemPath));
}

function salvarMemoriaVeyron(db) {
fs.writeFileSync(veyronMemPath, JSON.stringify(db, null, 2));
}

const zyronMemPath = path.join(__dirname, 'database', 'zyron_memoria.json');

function carregarMemoriaZyron() {
if (!fs.existsSync(zyronMemPath)) {
fs.writeFileSync(zyronMemPath, JSON.stringify({
nome: "Zyron-AI",
dono: "GzeeScriptsDev</>",
jeito: "responda como um bot inteligente, direto, com humor bem ácido e sem paciência",
memoria: [
"Você é o Zyron-MD, um bot de WhatsApp criado pelo GzeeScriptsDev</>."
]
}, null, 2));
}

return JSON.parse(fs.readFileSync(zyronMemPath));
}

function salvarMemoriaZyron(db) {
fs.writeFileSync(zyronMemPath, JSON.stringify(db, null, 2));
}

const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

///{ constantes muito importantes}\\
const budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';
const Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""
const PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const args = body.trim().split(/ +/).slice(1);
const arg = body.trim().split(/ +/).slice(1);
const q = args.join(' ');

try {
if (/^zyron\b/i.test(budy)) {

const pergunta = budy.replace(/^zyron[:,]?\s*/i, '').trim();

if (!pergunta) return reply('Fala comigo pae');

const atalhosZyron = {
'menu': `${prefix}menu`,
'abrir menu': `${prefix}menu`,
'perfil': `${prefix}perfil`,
'abrir perfil': `${prefix}perfil`,
'dono': `${prefix}dono`,
'abrir dono': `${prefix}dono`,
'pesquisar no mediafire': `${prefix}mediafire`,
'pesquisar no mediefire': `${prefix}mediefire`
};

const comandoAtalho = atalhosZyron[pergunta.toLowerCase()];

if (comandoAtalho) {
body = comandoAtalho;
} else {

const db = carregarMemoriaZyron();

const prompt = `
Você é ${db.nome}.
Dono: ${db.dono}.
Jeito de falar: ${db.jeito}

Memórias:
${db.memoria.join('\n')}

Pergunta:
${pergunta}
`;

const { data } = await axios.post(
'https://openrouter.ai/api/v1/chat/completions',
{
model: 'nvidia/nemotron-3-ultra-550b-a55b:free',
messages: [{ role: 'user', content: prompt }]
},
{
headers: {
'Authorization': `Bearer ${OPENROUTER_KEY}`,
'Content-Type': 'application/json'
},
timeout: 30000
}
);

const resposta = data?.choices?.[0]?.message?.content || 'Não consegui responder.';
reply(resposta);
return;

}

}
} catch (e) {
console.log("========== ZYRON-AI ERROR ==========");
console.log(e.response?.status);
console.log(JSON.stringify(e.response?.data, null, 2));
console.log("====================================");
reply('Erro ao consultar minha IA.');
}

try {
if (/^veyron\b/i.test(budy)) {

const pergunta = budy.replace(/^veyron[:,]?\s*/i, '').trim();

if (!pergunta) return reply('Fala comigo, irmão.');

const atalhosVeyron = {
'menu': `${prefix}menu`,
'abrir menu': `${prefix}menu`,
'perfil': `${prefix}perfil`,
'abrir perfil': `${prefix}perfil`,
'dono': `${prefix}dono`,
'abrir dono': `${prefix}dono`
};

const comandoAtalho = atalhosVeyron[pergunta.toLowerCase()];

if (comandoAtalho) {
body = comandoAtalho;
} else {

const db = carregarMemoriaVeyron();

const prompt = `
Você é ${db.nome}.
Dono: ${db.dono}.
Jeito de falar: ${db.jeito}

Memórias:
${db.memoria.join('\n')}

Pergunta:
${pergunta}
`;

const { data } = await axios.post(
'https://openrouter.ai/api/v1/chat/completions',
{
model: 'nvidia/nemotron-3-ultra-550b-a55b:free',
messages: [{ role: 'user', content: prompt }]
},
{
headers: {
'Authorization': `Bearer ${OPENROUTER_KEY}`,
'Content-Type': 'application/json'
},
timeout: 30000
}
);

const resposta = data?.choices?.[0]?.message?.content || 'Não consegui responder.';
reply(resposta);
return;

}

}
} catch (e) {
console.log("========== VEYRON-AI ERROR ==========");
console.log(e.response?.status);
console.log(JSON.stringify(e.response?.data, null, 2));
console.log("====================================");
reply('Erro ao consultar a Veyron-AI.');
}

const isCmd = body && body.trim().startsWith(prefix);

const command = isCmd
? body.trim().slice(prefix.length).split(/ +/).shift().toLowerCase()
: "";

const mentionedJid =
info?.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];

let groupMetadata = {};
let participants = [];

if (isGroup && isCmd) {
try {
groupMetadata = await getGroupMetadataCached(conn, from);
participants = groupMetadata.participants || [];
} catch (e) {
console.log('Erro ao obter metadata:', e.message);
}
}

//INFO DE GRUPOS!!
const Infos_Do_Grupo = isGroup ? await getGroupMetadataCached(conn, from) : {} || '';
const NomeGrupo = Infos_Do_Grupo?.subject || '';
const DescGp = Infos_Do_Grupo?.desc || '';
const MembrosGP = Infos_Do_Grupo?.participants || [];
const TotalAdmins = MembrosGP[0]?.admin || '';
const TotalMembros = MembrosGP.length || 0;
const Dono_Do_Grupo = Infos_Do_Grupo?.subjectOwnerJid || '';

const So_Admins = isGroup ? getGroupAdmins(MembrosGP) : ''
const somembros = isGroup ? getMembros(MembrosGP) : ''

const dirGroup = `./DATABASE2/GRUPOS/ATIVACOES/${from}.json`

if(isGroup && !fs.existsSync(dirGroup)){
var dataGp2 = [{
name: NomeGrupo,
groupId: from, 
antilinkhard: false, 
So_Admins: false,
bangp: false,
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo(a) a porra do Grupo: *#nomedogp#*, Zyron-MD lhe deseja as boas vindas 🕸️",
legendasaiu: "Adeus, #numerodele#, espero que não se arrependa pela sua decisão desgraçado. "
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo(a) ao Grupo: *#nomedogp#*, Zyron-MD lhe deseja as boas vindas 🕸️",
legendasaiu: "Adeus, #numerodele#, espero que não se arrependa pela sua decisão. "
}],
}]
fs.writeFileSync(dirGroup, JSON.stringify(dataGp2, null, 2) + '\n')
}

let dataGp = undefined;

if (isGroup) {
try {
dataGp = JSON.parse(fs.readFileSync(dirGroup, "utf-8"));
} catch (e) {
console.log("JSON do grupo corrompido:", dirGroup);
fs.unlinkSync(dirGroup);
return;
}
} 

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

const isBemvindo = isGroup ? dataGp[0]?.wellcome[0]?.bemvindo1 : undefined 
const isAntiLinkHard = isGroup ? dataGp[0]?.antilinkhard : undefined
const SoAdmins = isGroup ? dataGp[0]?.So_Admins : undefined 
const isBanGrupo = isGroup ? dataGp[0]?.bangp : undefined 

const BotOff = Config2.botoff 
const isVerificado = Config2.verificado

//DEFINIÇÕES UTEIS

async function getZyronFakeQuoted(conn, from) {
delete global._zyronQuotedCache;

const botJid = botNumber || conn.user.id;
const fotoLocal = './dono/menus/Foto-menu/img-menu.jpg';

let thumbnail = Buffer.alloc(0);

try {
if (fs.existsSync(fotoLocal)) {
thumbnail = fs.readFileSync(fotoLocal);
}
} catch (e) {}

return {
key: {
remoteJid: from,
fromMe: true,
id: 'ZYRONMD_VERIFICADO'
},
message: {
contactMessage: {
displayName: 'ZYRON MD ✓',
vcard: `BEGIN:VCARD
VERSION:3.0
FN:ZYRON MD ✓
ORG:Zyron-MD;
TEL;type=CELL;waid=${botJid.split('@')[0]}:+${botJid.split('@')[0]}
END:VCARD`,
thumbnail
}
}
};
}


const selo = Config2.verificado
 ? await getZyronFakeQuoted(conn, from)
 : info;


async function reply(texto){
try {
return conn.sendMessage(from, { text: texto }, { quoted: info });
} catch (E) {
console.log(E);
}
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
conn.sendMessage(idgp, reactionMessage)
}

var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
conn.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const hora2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(hora2 > "00:00:00" && hora2 < "05:00:00"){
var saudacao = 'Boa noite'
} if(hora2 > "05:00:00" && hora2 < "12:00:00"){
var saudacao = 'Bom dia'
} if(hora2 > "12:00:00" && hora2 < "18:00:00"){
var saudacao = 'Boa tarde'
} if(hora2 > "18:00:00"){
var saudacao = 'Boa noite'
}


let isBotGroupAdmins = So_Admins?.includes(botNumber) || false;
let isGroupAdmins    = So_Admins.includes(sender) || false || So_Dono || SoBot || IsCreator || SoCriador;

const executorJid            = info.key.participant || info.key.remoteJid || sender;
const executorJidNormalizado = jidNormalizedUser(executorJid);

const verificarGlobal = isGroup
    ? await sistemaVerificacao(conn, from, executorJidNormalizado, { numerodono: NumberDono }, botNumber)
    : null;

if (isGroup && verificarGlobal) {
isGroupAdmins = verificarGlobal.isSenderAdmin || verificarGlobal.isDonoBot || So_Dono || SoBot || IsCreator || SoCriador || false;
isBotGroupAdmins = verificarGlobal.isBotAdmin || false;
}

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\
//FUNÇÃO FEITA POR: GZEESCRIPTS', NÃO TIRA OS CRÉDITOS DESGRAÇA!!
let menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant || '';
if (menc_prt.includes('@lid') && Infos_Do_Grupo?.participants) {
menc_prt = Infos_Do_Grupo.participants.find(v => v.lid === menc_prt)?.jid || '';
}
const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (menc_jid2?.[0]?.includes('@lid') && Infos_Do_Grupo?.participants) {
menc_jid2[0] = Infos_Do_Grupo.participants.find(v => v.lid === menc_jid2[0])?.jid || '';
}
const menc_os2 = q.includes("@") ? (Array.isArray(menc_jid2) && menc_jid2.length > 0 ? menc_jid2[0] : null) : menc_prt;
const menc_jid = jidNormalizedUser(menc_os2 || sender);
const sender_ou_n = q.includes("@") ? menc_jid2?.[0] : (menc_prt || sender);
const normalizar = alvo => {
if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
return Infos_Do_Grupo.participants.find(v => v.lid === alvo)?.jid || alvo;
}
return alvo;
};//FUNÇÃO FEITA POR GZEESCRIPTS', NÃO TIRA OS CRÉDITOS DESGRAÇA!!
const numClean = txt => txt.replace(/[()+\-\/\s]/g, '') + '@s.whatsapp.net';
const mrc_ou_numero  = q.length > 6  && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const marc_tds       = q.includes('@')                 ? normalizar(menc_jid) : q.length > 6  && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const menc_prt_nmr   = q.length > 12 && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const menc_prt3 = info.message?.extendedTextMessage?.contextInfo?.participant
const menc_jid3 = args?.join(" ").replace("@", "") + "@s.whatsapp.net"
const menc_jid23 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid
const sender_ou_n3 = q.includes("@") ? menc_jid : sender
const mrc_ou_numero3 = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os23 = q.includes("@") ? menc_jid : menc_prt 
const marc_tds3 = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_prt_nmr3 = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt
//============================//
if (BotOff && !So_Dono) {
console.log("❌ BOT OFF bloqueou:", command);
return reply("❌ Bot está desligado.");
}

if (isGroup && isCmd && SoAdmins && !So_Dono && !isGroupAdmins) {
console.log("❌ Só admins bloqueou:", command, sender);
return reply("❌ Apenas administradores podem usar comandos neste grupo.");
}

if (isGroup && isCmd && isBanGrupo && !So_Dono) {
console.log("❌ Grupo banido bloqueou:", command);
return reply("❌ Este grupo está banido de usar comandos.");
}


let tipoMsg = "Texto";

if (info?.message?.imageMessage) tipoMsg = "📸 Imagem";
else if (info?.message?.videoMessage) tipoMsg = "🎥 Vídeo";
else if (info?.message?.audioMessage) tipoMsg = "🎧 Áudio";
else if (info?.message?.stickerMessage) tipoMsg = "🔖 Figurinha";
else if (info?.message?.documentMessage) tipoMsg = "📄 Documento";
else if (info?.message?.buttonsResponseMessage) tipoMsg = "🔘 Botão";
else if (info?.message?.listResponseMessage) tipoMsg = "📋 Lista";
else if (info?.message?.reactionMessage) tipoMsg = "💬 Reação";

function linha(label, value) {
  return `${chalk.gray("│")} ${chalk.hex("#9ca3af")(label)} ${chalk.white(value)}`;
}

if (!isGroup && isCmd) {
  console.log(chalk.hex("#7c3aed")("\n╭────〔 ⚡ COMANDO PRIVADO 〕──╮"));
  console.log(linha("🧠 Comando:", command));
  console.log(linha("👤 Usuário:", pushname));
  console.log(linha("📱 Número:", sender.split("@")[0]));
  console.log(linha("🕒 Hora:", hora2));
  console.log(linha("📆 Data:", data));
  console.log(linha("👑 Dono:", So_Dono ? chalk.green("Sim") : chalk.red("Não")));
  console.log(chalk.hex("#7c3aed")("╰────────────────────────────────╯\n"));
}

// VERIFICAÇÃO DE MUTE — adicionar ANTES do "if (!isCmd) return"
if (isGroup && !info.key.fromMe) {
  const dirMute = `./DATABASE2/GRUPOS/MUTE/${from}.json`;
  if (fs.existsSync(dirMute)) {
    const dataMute = JSON.parse(fs.readFileSync(dirMute));
    const grupoMute = dataMute[0];

    const estaSilenciado = grupoMute.silenciados.includes(sender);
    const estaMutado = grupoMute.mutados.includes(sender);

    if (estaSilenciado) {
      conn.sendMessage(from, {
        delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
      });
      return; // apaga a mensagem silenciosamente
    }

    if (estaMutado && isCmd) {
      conn.sendMessage(from, {
        delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
      });
      await mention(`*@${sender.split('@')[0]} está mutado e não pode usar os comandos, muito but KKKKK 🚫*`);
      return;
    }
  }
}

if (isGroup && isCmd) {
  console.log(chalk.hex("#2563eb")("\n╭────〔 👥 COMANDO EM GRUPO 〕──╮"));
  console.log(linha("🧠 Comando:", command));
  console.log(linha("👤 Usuário:", pushname));
  console.log(linha("📱 Número:", sender.split("@")[0]));
  console.log(linha("👥 Grupo:", NomeGrupo));
  console.log(linha("🕒 Hora:", hora2));
  console.log(linha("👑 Dono:", So_Dono ? chalk.green("Sim") : chalk.red("Não")));
  console.log(chalk.hex("#2563eb")("╰────────────────────────────────╯\n"));
}

if (isGroup && !isCmd && !info.key.fromMe) {
  console.log(chalk.hex("#06b6d4")("\n╭────〔 💬 MENSAGEM EM GRUPO 〕──╮"));
  console.log(linha("👤 Usuário:", pushname));
  console.log(linha("📱 Número:", sender.split("@")[0]));
  console.log(linha("👥 Grupo:", NomeGrupo));
  console.log(linha("📦 Tipo:", tipoMsg));
  console.log(linha("🕒 Hora:", hora2));
  console.log(linha("📎 Texto:", body?.slice(0, 60) || "—"));
  console.log(chalk.hex("#06b6d4")("╰────────────────────────────────╯\n"));
}

if (info?.message?.reactionMessage) {
  console.log(chalk.hex("#facc15")("\n╭────〔 😂 REAÇÃO DETECTADA 〕──╮"));
  console.log(linha("👤 Usuário:", pushname));
  console.log(linha("📱 Número:", sender.split("@")[0]));
  if (isGroup) console.log(linha("👥 Grupo:", NomeGrupo));
  console.log(linha("😄 Emoji:", info.message.reactionMessage.text));
  console.log(chalk.hex("#facc15")("╰────────────────────────────────╯\n"));
}

//==={ANTI LINK} ===\\
let isTrueFalse = Array('tiktok','facebook','instagram','twitter','ytmp3','ytmp4','play','playmix','play2','play3','playvid','playvid2').some(item => item === command);
if (isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
  const senderLimpo = jidNormalizedUser(sender);
  const botLimpo    = jidNormalizedUser(botNumber);
  if (senderLimpo === botLimpo) return;
  if (isCmd && isTrueFalse) return;
  if (Procurar_String.includes("chat.whatsapp.com")) {
    try {
      const link_dgp = await conn.groupInviteCode(from);
      if (Procurar_String.includes(link_dgp)) return reply('_Link do nosso grupo, não irei remover._');
    } catch (_) {}
  }
  const verificarAnti = await sistemaVerificacao(conn, from, senderLimpo, { numerodono: NumberDono }, botNumber).catch(() => null);
  if (verificarAnti?.isSenderAdmin) return;
  try {
    await conn.sendMessage(from, {
      delete: {
        remoteJid:   from,
        fromMe:      false,
        id:          info.key.id,
        participant: sender 
       }
    });
  } catch (_) {}
  const aindaNoGrupo = MembrosGP.some(m => jidNormalizedUser(m.id) === senderLimpo);
  if (aindaNoGrupo) {
    try {
      await conn.groupParticipantsUpdate(from, [senderLimpo], 'remove');
    } catch (_) {}
  }
} //FIM ANTI LINK

//FUNÇÕES

function formatarTempo(ms) {
let h = Math.floor(ms / 3600000);
let m = Math.floor((ms % 3600000) / 60000);
let s = Math.floor((ms % 60000) / 1000);

return `${h}h ${m}m ${s}s`;
}

//EVAL E EXECUÇÕES 
if(body.startsWith('π')){
try {
if(info.key.fromMe) return 
if(!So_Dono) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return conn.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(body.startsWith(':)')){
try {
if(info.key.fromMe) return   
if(!So_Dono) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return conn.sendMessage(from, {text: bang}, {quoted: info})
}

conn.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', hora, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}

//EXECUÇÕES EVAL
if(body.startsWith('¥')) {
if(info.key.fromMe) return 
if(!So_Dono) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}//FIM

try {
let presoUser = global.db.data.users[sender];

if (presoUser?.presoAte && Date.now() < presoUser.presoAte) {
await conn.sendMessage(from, {
delete: info.key
}).catch(() => {});

return;
}

if (presoUser?.presoAte && Date.now() >= presoUser.presoAte) {
delete presoUser.presoAte;
}
} catch {}

const SoLink = q?.includes("http:") || q?.includes("https:");

if (budy2.startsWith("prefixo")) {
try {

await conn.relayMessage(from, {
interactiveMessage: {
body: {
text: `
╭──〔 ⚙️ PREFIXO DO BOT ⚙️ 〕──╮

◈ Prefixo atual: ${prefix}
◈ Cada grupo terá um prefixo!

> by; GzeeScriptsDev

╰─────────────────────────╯

Clique no botão abaixo para copiar.`
},
footer: {
text: "Zyron-MD ❤️‍🔥"
},
nativeFlowMessage: {
buttons: [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: `📋 ᶜᵒᵖⁱᵃʳ ᵖʳᵉᶠⁱˣᵒ「 ${prefix} 」`,
copy_code: prefix
})
}
]
}
}
}, {});

} catch (e) {
console.log('[PREFIXO ERROR]', e);
reply(`Prefixo atual: ${prefix}`);
}
}

if(budy.startsWith(saudacao)) {
await reply(`Ola, ${saudacao} ${pushname}, Como você está?`);
}

//==COMANDOS COM PREFIXO ABAIXO

if (!isCmd) return;

if (!global.db) global.db = {};
if (!global.db.data) global.db.data = {};
if (!global.db.data.users) global.db.data.users = {};
if (!global.db.data.users[sender]) {
global.db.data.users[sender] = {
money: 0,
exp: 0,
saldo: 0,
xp: 0,
inventario: {},
pets: {}
};
}

let MSG = {};
try {
MSG = Cmd(command, NomeGrupo, prefix);
} catch (e) {
console.log("❌ ERRO NA FUNÇÃO Cmd:", e);
}

console.log("PREFIX:", prefix);

console.log("BODY:", body);
console.log("ISCMD:", isCmd);
console.log("COMMAND:", command);
console.log("SOADMINS:", SoAdmins);
console.log("ISGROUPADMINS:", isGroupAdmins);
console.log("BOTOFF:", BotOff);
console.log("BANGRUPO:", isBanGrupo);

const bodyLower = body.toLowerCase();

if (
bodyLower.startsWith('veyron ') ||
bodyLower.startsWith('vr ')
) {

const pergunta = body.split(' ').slice(1).join(' ');

if (!pergunta) return reply('🤖 Faça uma pergunta.');

try {
const userId = sender;

await conn.sendMessage(from, {
react: {
text: '🧠',
key: info.key
}
});

const { resposta } = await consultarGroq(userId, pergunta);

await conn.sendMessage(from, {
text: `🤖 *VEYRON-AI*\n\n${resposta}`
}, { quoted: selo });

await conn.sendMessage(from, {
react: {
text: '✅',
key: info.key
}
});

} catch (e) {
console.log('[ERRO VEYRON]', e);
reply('❌ Erro ao consultar a Veyron.');
}

return;
}

switch (command) {

case 'memoriaveyron': {
try {
if (!So_Dono) return reply('Apenas o dono pode editar minha memória.');

if (!q) return reply(
`Use assim:

${prefix}memoriaveyron add O Veyron é irmão do Zyron-AI
${prefix}memoriaveyron jeito Responda curto, inteligente e sem enrolação
${prefix}memoriaveyron ver
${prefix}memoriaveyron limpar`
);

const db = carregarMemoriaVeyron();

if (q.startsWith('add ')) {
const texto = q.replace('add ', '').trim();
db.memoria.push(texto);
salvarMemoriaVeyron(db);
return reply('Memória da Veyron adicionada.');
}

if (q.startsWith('jeito ')) {
db.jeito = q.replace('jeito ', '').trim();
salvarMemoriaVeyron(db);
return reply('Jeito de falar da Veyron atualizado.');
}

if (q === 'ver') {
return reply(
`╔══『 MEMÓRIA VEYRON 』══
👤 Nome: ${db.nome}
👑 Dono: ${db.dono}
🧠 Jeito: ${db.jeito}

📌 Memórias:
${db.memoria.map((m, i) => `${i + 1}. ${m}`).join('\n')}
╚══════════════`
);
}

if (q === 'limpar') {
db.memoria = [];
salvarMemoriaVeyron(db);
return reply('Memória da Veyron limpa.');
}

reply('Opção inválida.');

} catch (e) {
console.log('[ERRO MEMORIA VEYRON]', e);
reply('Erro ao editar memória da Veyron.');
}
}
break;

case 'memoriazyron': {
try {
if (!So_Dono) return reply('Apenas o dono pode editar minha memória.');

if (!q) return reply(
`Use assim:

${prefix}memoriazyron add O Zyron é um bot criado pelo GzeeScriptsDev</>
${prefix}memoriazyron jeito Responda curto, inteligente e com ácido e sem paciência 
${prefix}memoriazyron ver
${prefix}memoriazyron limpar`
);

const db = carregarMemoriaZyron();

if (q.startsWith('add ')) {
const texto = q.replace('add ', '').trim();
db.memoria.push(texto);
salvarMemoriaZyron(db);
return reply('Memória adicionada.');
}

if (q.startsWith('jeito ')) {
db.jeito = q.replace('jeito ', '').trim();
salvarMemoriaZyron(db);
return reply('Jeito de falar atualizado.');
}

if (q === 'ver') {
return reply(
`╔══『 MEMÓRIA ZYRON 』══
👤 Nome: ${db.nome}
👑 Dono: ${db.dono}
🧠 Jeito: ${db.jeito}

📌 Memórias:
${db.memoria.map((m, i) => `${i + 1}. ${m}`).join('\n')}
╚══════════════`
);
}

if (q === 'limpar') {
db.memoria = [];
salvarMemoriaZyron(db);
return reply('Memória limpa.');
}

reply('Opção inválida.');

} catch (e) {
console.log('[ERRO MEMORIA ZYRON]', e);
reply('Erro ao editar memória.');
}
}
break;

//comandos pesquisa



//COMANDOS DE ADMIN'S!!
case 'antistatus': {
  try {
if (!isGroup) return reply("Só em grupo.");
if (!isGroupAdmins) return reply(msg.SoAdmin);
    if (dataGp[0].antistatus === undefined) dataGp[0].antistatus = false;
    dataGp[0].antistatus = !dataGp[0].antistatus;
    const novoEstado = dataGp[0].antistatus;
    setGp(dataGp);

    const msg = novoEstado
      ? '_Anti-Status *ativado* neste grupo tlgd?. Todos os status enviados aqui serão deletados automaticamente._'
      : '_Anti-Status *desativado* neste grupo._';
    await reply(msg);
  } catch (e) {
    console.error('[ERRO ANTISTATUS CMD]', e);
    reply('_Erro ao alternar o Anti-Status._');
  }
}
break;

case 'promover': {
if (!isGroup) return reply("Só em grupo desgraça.");
if (!isGroupAdmins) return reply(msg.SoAdmin);

const res = await promoverUser(conn, from, info, q, botNumber, NumberDono);

if (res.erro) return reply(res.erro);

await conn.sendMessage(from, {
  text: res.sucesso,
  mentions: [res.alvo]
});

}
break;

case 'rebaixar': {
if (!isGroup) return reply("Só em grupo desgraça.");
if (!isGroupAdmins) return reply(msg.SoAdmin);

const res = await rebaixarUser(conn, from, info, q, botNumber, NumberDono);

if (res.erro) return reply(res.erro);

await conn.sendMessage(from, {
  text: res.sucesso,
  mentions: [res.alvo]
});

}
break;

case 'ban':
case 'banir':
case 'kick':
case 'avadakedavra': {
    try {
        if (!isGroup) return reply("❌ APENAS EM GRUPOS CARALHO.");

        const executorJid = info.key.participantAlt || info.key.participant || info.key.remoteJid || sender;
        const executorJidNormalizado = jidNormalizedUser(executorJid);

        const verificar = await sistemaVerificacao(conn, from, executorJidNormalizado, { numerodono: NumberDono }, botNumber);

        if (!verificar.isSenderAdmin && !verificar.isDonoBot) return reply("❌ Apenas administradores desgraça.");
        if (!verificar.isBotAdmin) return reply("❌ O Zyron precisa ser admin dessa porra.");

        const contextInfo = info?.message?.extendedTextMessage?.contextInfo || info?.msg?.contextInfo || info?.contextInfo || {};
        let alvo = null;

        if (Array.isArray(contextInfo.mentionedJid) && contextInfo.mentionedJid.length > 0) {
            alvo = contextInfo.mentionedJid[0];
        } else if (contextInfo.participant) {
            alvo = contextInfo.participant;
        } else if (info?.quoted?.sender) {
            alvo = info.quoted.sender;
        } else if (q) {
            const numero = q.replace(/\D/g, '');
            if (numero.length >= 5) alvo = numero;
        }

        if (!alvo) return reply("❌ Marque, responda ou envie a porra do  número.");

        const membro = verificar.buscarMembro(alvo);
        if (!membro) return reply("❌ Usuário não foi encontrado.");

        const alvoId = verificar.getId(membro);
        const alvoNumero = verificar.getNumero(membro);
        const alvoAdmin = verificar.isAdmin(membro);
        const alvoDono = verificar.isDono(membro);
        const executorNumero = verificar.getNumero({ id: executorJidNormalizado });
        const botNumeroLimpo = botNumber.replace(/\D/g, '');

        if (alvoNumero === executorNumero) return reply("❌ Você não pode se remover doente.");
        if (alvoNumero === botNumeroLimpo || alvoId === botNumber) {
            await conn.sendMessage(from, { text: `⚠️ @${executorNumero} tentou remover o bot, muito but KKKKK`, mentions: [sender] });
            return;
        }
        if (alvoDono) {
            await conn.sendMessage(from, { text: `☠️ @${executorNumero} tentou remover o dono, muito but KKKKKK`, mentions: [sender] });
            return;
        }
        if (alvoAdmin) return reply("❌ Não posso remover administradores caralho.");

        await reagir(from, "🚫");
        await conn.groupParticipantsUpdate(from, [alvoId], "remove");
        await conn.sendMessage(from, { text: `🚫 @${alvoNumero} removido do grupo otário.`, mentions: [alvoId] }, { quoted: selo });
        await reagir(from, "✅");

    } catch (erro) {
        console.log(erro);
        await reagir(from, "❌");
        reply("❌ Erro ao remover a porra do usuário.");
    }
}
break;

case 'mute': {
    try {
        if (!isGroup) return reply(msg.SoEmGrupo);

        const executorJid = info.key.participantAlt || info.key.participant || info.key.remoteJid || sender;
        const executorJidNormalizado = jidNormalizedUser(executorJid);

        const verificar = await sistemaVerificacao(conn, from, executorJidNormalizado, { numerodono: NumberDono }, botNumber);

        if (!verificar.isSenderAdmin && !verificar.isDonoBot) return reply(msg.SoAdmin);
        if (!verificar.isBotAdmin) return reply(msg.BotAdmin);

        let alvo = null;
        const contextInfo = info?.message?.extendedTextMessage?.contextInfo || {};

        if (contextInfo.mentionedJid?.length > 0) {
            alvo = contextInfo.mentionedJid[0];
        } else if (contextInfo.participant) {
            alvo = contextInfo.participant;
        } else if (info?.quoted?.sender) {
            alvo = info.quoted.sender;
        } else if (q) {
            const numero = q.replace(/\D/g, '');
            if (numero.length >= 5) alvo = numero;
        }

        if (!alvo) return reply(`*🎯 mencione quem quer que fique caladinho*`);

        const membro = verificar.buscarMembro(alvo);
        if (!membro) return reply("❌ Usuário não foi encontrado.");

        const alvoId = verificar.getId(membro);
        const alvoNumero = verificar.getNumero(membro);
        const alvoAdmin = verificar.isAdmin(membro);
        const alvoDono = verificar.isDono(membro);
        const executorNumero = verificar.getNumero({ id: executorJidNormalizado });
        const botNumeroLimpo = botNumber.replace(/\D/g, '');

        if (alvoNumero === executorNumero) return reply("❌ Você não pode se punir doente.");
        if (alvoNumero === botNumeroLimpo || alvoId === botNumber) return reply(`*Não posso mudar o bot né inteligência😵*`);
        if (alvoDono) return reply(`*não ouse encostar esses dedos imundos no meu dono💢*`);
        if (alvoAdmin) return reply(`*não pode mudar um administrador burrão*`);

        const dirMute = `./DATABASE2/GRUPOS/MUTE/${from}.json`;
        if (!fs.existsSync('./DATABASE2/GRUPOS/MUTE')) {
            fs.mkdirSync('./DATABASE2/GRUPOS/MUTE', { recursive: true });
        }
        if (!fs.existsSync(dirMute)) {
            fs.writeFileSync(dirMute, JSON.stringify([{ silenciados: [], mutados: [] }], null, 2));
        }

        const dataMute = JSON.parse(fs.readFileSync(dirMute));
        const grupoMute = dataMute[0];

        const tipo = args[0]?.toLowerCase() === 'silenciar' ? 'silenciar' : 'mutar';

        if (tipo === 'silenciar') {
            if (grupoMute.silenciados.includes(alvoId)) {
                return mention(`*ᴏ @${alvoNumero} já está silenciado*`);
            }
            grupoMute.silenciados.push(alvoId);
            fs.writeFileSync(dirMute, JSON.stringify(dataMute, null, 2));
            await mention(`*ᴏ @${alvoNumero} foi silenciado @${executorNumero} 🔇*`);
        } else {
            if (grupoMute.mutados.includes(alvoId)) {
                return mention(`*ᴏ @${alvoNumero} já está mutado*`);
            }
            grupoMute.mutados.push(alvoId);
            fs.writeFileSync(dirMute, JSON.stringify(dataMute, null, 2));
            await mention(`*ᴏ @${alvoNumero} foi mutado por @${executorNumero} 🚫*`);
        }

        await reagir(from, "✅");
    } catch (erro) {
        console.log(erro);
        await reagir(from, "❌");
        reply("❌ Erro ao mutar usuário.");
    }
}
break;

case 'desmute': {
    try {
        if (!isGroup) return reply(msg.SoEmGrupo);

        const executorJid = info.key.participantAlt || info.key.participant || info.key.remoteJid || sender;
        const executorJidNormalizado = jidNormalizedUser(executorJid);

        const verificar = await sistemaVerificacao(conn, from, executorJidNormalizado, { numerodono: NumberDono }, botNumber);

        if (!verificar.isSenderAdmin && !verificar.isDonoBot) return reply(msg.SoAdmin);
        if (!verificar.isBotAdmin) return reply(msg.BotAdmin);

        let alvo = null;
        const contextInfo = info?.message?.extendedTextMessage?.contextInfo || {};

        if (contextInfo.mentionedJid?.length > 0) {
            alvo = contextInfo.mentionedJid[0];
        } else if (contextInfo.participant) {
            alvo = contextInfo.participant;
        } else if (info?.quoted?.sender) {
            alvo = info.quoted.sender;
        } else if (q) {
            const numero = q.replace(/\D/g, '');
            if (numero.length >= 5) alvo = numero;
        }

        if (!alvo) return reply(`*🎯 mencione quem quer que volte a falar*`);

        const membro = verificar.buscarMembro(alvo);
        if (!membro) return reply("❌ Usuário não encontrado.");

        const alvoId = verificar.getId(membro);
        const alvoNumero = verificar.getNumero(membro);

        const dirMute = `./DATABASE2/GRUPOS/MUTE/${from}.json`;
        if (!fs.existsSync(dirMute)) return mention(`*ᴏ @${alvoNumero} ɴᴀᴏ ᴇsᴛᴀ ᴘᴜɴɪᴅᴏ*`);

        const dataMute = JSON.parse(fs.readFileSync(dirMute));
        const grupoMute = dataMute[0];

        const estaSilenciado = grupoMute.silenciados.includes(alvoId);
        const estaMutado = grupoMute.mutados.includes(alvoId);

        if (!estaSilenciado && !estaMutado) {
            return mention(`*ᴏ @${alvoNumero} não está punido*`);
        }

        grupoMute.silenciados = grupoMute.silenciados.filter(id => id !== alvoId);
        grupoMute.mutados = grupoMute.mutados.filter(id => id !== alvoId);
        fs.writeFileSync(dirMute, JSON.stringify(dataMute, null, 2));
        await mention(`*ᴏ @${alvoNumero} foi despunido por @${verificar.getNumero({ id: executorJidNormalizado })} 🙌*`);

        await reagir(from, "✅");
    } catch (erro) {
        console.log(erro);
        await reagir(from, "❌");
        reply("❌ Erro ao desmutar usuário.");
    }
}
break;

case 'perfil': {
    try {
        await reagir(from, "👤");

        let target = sender; 
        const ctx = info?.message?.extendedTextMessage?.contextInfo;

        if (ctx?.mentionedJid?.[0]) {
            target = ctx.mentionedJid[0]; 
        } else if (ctx?.participant) {
            target = ctx.participant; 
        } else if (q) {
            const num = q.replace(/\D/g, ''); 
            if (num.length >= 10) target = `${num}@s.whatsapp.net`;
        }

        target = jidNormalizedUser(target); 

        // 🔥 nome do usuário
        let nomeAlvo = pushname;
        if (target !== sender) {
            try {
                const contato = Infos_Do_Grupo?.participants?.find(p => p.id === target);
                nomeAlvo = contato?.notify || contato?.name || `@${target.split("@")[0]}`;
            } catch {
                nomeAlvo = `@${target.split("@")[0]}`;
            }
        }

        // 🔥 foto de perfil
        let ppUrl;
        try {
            ppUrl = await conn.profilePictureUrl(target, 'image');
        } catch {
            ppUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRDMdrGEhwwcBVJsSwdjVZycl9lPdJsdReOsm3Sq1Xg&s=10'; 
        }

        // 🔥 bio
        let status;
        try {
            const bio = await conn.fetchStatus(target);
            status = bio?.status || "*sem bio*";
        } catch {
            status = "*bio oculta ou indisponível (desgraçado)*";
        }

        // 🔥 porcentagens
        const pct = () => `${Math.floor(Math.random() * 101)}%`;
        const gay      = pct();
        const feio     = pct();
        const lindo    = pct();
        const gostoso  = pct();
        const chato    = pct();
        const corno    = pct();
        const burro    = pct();
        const invejoso = pct();
        const sortudo  = pct();
        const estiloso = pct();

        // 🔥 número
        const numUser = target.split("@")[0];

        // 🔥 buffer da foto
        const imgBuff = await getBuffer(ppUrl);

        // 🔥 texto
        let perfilMsg = `╔═━━━═══━━━═══━━━═══━━━═══━━━╗
║        🔥 𝐏𝐄𝐑𝐅𝐈𝐋 𝐙𝐘𝐑𝐎𝐍 🔥
╠═━━━═══━━━═══━━━═══━━━═══━━━╣
║ 👤 Nome: ${nomeAlvo}
║ 📱 Número: ${numUser}
║ 📝 Bio: ${status}
║
║ 🕒 Visto por: Zyron Scanner
╠═━━━═══━━━═══━━━═══━━━═══━━━╣
║      🧠 𝐀𝐍𝐀́𝐋𝐈𝐒𝐄 𝐃𝐄 𝐏𝐄𝐑𝐅𝐈𝐋
╠═━━━═══━━━═══━━━═══━━━═══━━━╣
║ 🏳️‍🌈 Gay: ${gay}
║ 🤢 Feio(a): ${feio}
║ 😍 Lindo(a): ${lindo}
║ 🔥 Gostoso(a): ${gostoso}
║ 🙄 Chato(a): ${chato}
║ 🐂 Corno(a): ${corno}
║ 🐴 Burro(a): ${burro}
║ 😒 Invejoso(a): ${invejoso}
║ 🍀 Sortudo(a): ${sortudo}
║ 😎 Estiloso(a): ${estiloso}
╠═━━━═══━━━═══━━━═══━━━═══━━━╣
║ 📊 𝐑𝐄𝐒𝐔𝐌𝐎 𝐃𝐎 𝐒𝐈𝐒𝐓𝐄𝐌𝐀
║
║ ⚡ Nível de Respeito: ${Math.floor(Math.random()*100)}%
║ 💎 Nível de Raridade: ${Math.floor(Math.random()*100)}%
║ 🚀 Potencial: ${Math.floor(Math.random()*100)}%
║
╠═━━━═══━━━═══━━━═══━━━═══━━━╣
║ 🤖 Zyron-MD & Zyron-Ai
║ ❤️‍🔥 Desenvolvido por GzeeScriptsDev
╚═━━━═══━━━═══━━━═══━━━═══━━━╝

🔥❤️‍🔥 ⟡ 𝐙𝐘𝐑𝐎𝐍-𝐌𝐃 ⟡ ❤️‍🔥🔥`;

        // 🔥 envio
        await conn.sendMessage(from, { image: imgBuff, caption: perfilMsg, mentions: [target] }, { quoted: selo });
        await reagir(from, "✅");

    } catch (e) {
        console.error("Erro no perfil:", e);
        await reagir(from, "❌");
        reply("❌ Erro ao carregar perfil.");
    }
}
break;

case 'antilink': {
  try {
    if (!isGroup) return reply(msg.SoEmGrupo);

    const executorJid = info.key.participantAlt || info.key.participant || info.key.remoteJid || sender;
    const executorJidNormalizado = jidNormalizedUser(executorJid);

    const verificar = await sistemaVerificacao(conn, from, executorJidNormalizado, { numerodono: NumberDono }, botNumber);

    if (!verificar.isSenderAdmin && !verificar.isDonoBot) return reply(msg.SoAdmin);
    if (!verificar.isBotAdmin) return reply(msg.BotAdmin);

    const opcao = (q || text || args?.join(' ') || '').trim();

    if (!opcao) return reply('1 pra ligar / 0 pra desligar');

    const isAntiLinkAtual = dataGp[0].antilinkhard || false;

    if (Number(opcao) === 1) {
      if (isAntiLinkAtual) return reply('O recurso de antilink já está ativado desgraça.');

      dataGp[0].antilinkhard = true;
      setGp(dataGp);

      return reply(MSG.Ativado);

    } else if (Number(opcao) === 0) {
      if (!isAntiLinkAtual) return reply('O recurso de antilink já está desativado porra.');

      dataGp[0].antilinkhard = false;
      setGp(dataGp);

      return reply(MSG.Desativado);

    } else {
      return reply('1 para ativar, 0 para desativar');
    }

  } catch (erro) {
    console.log(erro);
    reply("Erro ao executar comando.");
  }
}
break;

case 'rvisu':
case 'revelar': {
  await reagir(from, "👀")

  try {
    const quoted = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage

    // ================== VIDEO ==================
    let video = quoted?.videoMessage || 
                quoted?.viewOnceMessageV2?.message?.videoMessage || 
                quoted?.viewOnceMessage?.message?.videoMessage

    if (video) {
      let buff = await getFileBuffer(video, 'video')

      return await conn.sendMessage(from, {
        video: buff,
        mimetype: 'video/mp4',
        
      }, { quoted: selo })
    }

    // ================== IMAGEM ==================
    let image = quoted?.imageMessage || 
                quoted?.viewOnceMessageV2?.message?.imageMessage || 
                quoted?.viewOnceMessage?.message?.imageMessage

    if (image) {
      let buff = await getFileBuffer(image, 'image')

      return await conn.sendMessage(from, {
        image: buff,
        
      }, { quoted: selo })
    }

    // ================== AUDIO ==================
    let audio = quoted?.audioMessage || 
                quoted?.viewOnceMessageV2Extension?.message?.audioMessage

    if (audio) {
      let buff = await getFileBuffer(audio, 'audio')

      return await conn.sendMessage(from, {
        audio: buff,
        mimetype: 'audio/mpeg',
        ptt: false,
        
      }, { quoted: selo })
    }

    reply("• Marque uma imagem, vídeo ou áudio de visualização única (seu X9 do caramba)")

  } catch (err) {
    console.log('❌ Erro no revelar:', err)
    reply("Erro ao revelar mídia.")
  }

  break;
}

case 'fakemsg':
case 'fakechat': {
  try {
    if (!q || !q.includes('|')) {
      return reply(`*Formato incorreto!*\n\n📌 Exemplo:\n${prefix + command} mensagem fake|resposta\n\n💡 *Responda a mensagem de alguém para usar!*`);
    }

    const partes = q.split("|");
    const textoFake = partes[0]?.trim();
    const bott = partes[1]?.trim();

    if (!textoFake || !bott) {
      return reply(`*Preencha tudo corretamente!*\n\n📌 Exemplo:\n${prefix + command} mensagem fake|resposta`);
    }

    const prefixosBloqueados = [prefix, "-", "/", "#", "+", ".", "!"];
    if (prefixosBloqueados.some(p => bott.startsWith(p))) {
      return reply('*Não é permitido fazer o bot enviar comandos no fake chat, seu desgraçado.*');
    }

    const ctxInfo = info?.message?.extendedTextMessage?.contextInfo;

    if (!ctxInfo?.participant || ctxInfo?.stanzaId === info?.key?.id) {
      return reply(`*Responda a mensagem de alguém para usar esse comando!*`);
    }

    const mentioned = jidNormalizedUser(normalizar(ctxInfo.participant));
    const msgId = "BAE5" + require('crypto').randomBytes(13).toString('hex').toUpperCase();

    await reagir(from, "🎭");

    await conn.sendMessage(from, {
      text: bott
    }, {
      quoted: {
        key: {
          fromMe: false,
          remoteJid: from,
          participant: mentioned,
          id: msgId
        },
        message: {
          conversation: textoFake
        }
      }
    });

    await reagir(from, "✅");

  } catch (e) {
    console.error(e);
    await reagir(from, "❌");
    reply('*Erro ao criar fake chat.*');
  }
}
break;

case 'gerarlink': {
try {
await reagir(from, "⏳");

async function uploadTmpFiles(buffer, filename, mimetype) {
const form = new FormData();
form.append('file', buffer, {
filename,
contentType: mimetype
});

const { data } = await axios.post('https://tmpfiles.org/api/v1/upload', form, {
headers: form.getHeaders()
});

if (!data?.data?.url) throw new Error('Falha no tmpfiles');

return data.data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
}

async function uploadTelegraph(buffer, filename, mimetype) {
const form = new FormData();
form.append('file', buffer, {
filename,
contentType: mimetype
});

try {
const { data } = await axios.post('https://telegra.ph/upload', form, {
headers: form.getHeaders()
});

if (!data?.[0]?.src) throw new Error('Telegraph recusou');
return `https://telegra.ph${data[0].src}`;

} catch {
return await uploadTmpFiles(buffer, filename, mimetype);
}
}

const quotedMsg = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage;

if (!quotedMsg) {
await reagir(from, "❌");
return reply("❌ Responda uma imagem, vídeo ou áudio.");
}

const imgMsg =
quotedMsg?.imageMessage ||
quotedMsg?.viewOnceMessageV2?.message?.imageMessage ||
quotedMsg?.viewOnceMessage?.message?.imageMessage;

if (imgMsg) {
const buff = await getFileBuffer(imgMsg, 'image');
const link = await uploadTelegraph(buff, 'imagem.jpg', 'image/jpeg');

await conn.sendMessage(from, {
text: `🖼️ *LINK GERADO:*\n${link}`
}, { quoted: selo });

await reagir(from, "✅");
break;
}

const vidMsg =
quotedMsg?.videoMessage ||
quotedMsg?.viewOnceMessageV2?.message?.videoMessage ||
quotedMsg?.viewOnceMessage?.message?.videoMessage;

if (vidMsg) {
if ((vidMsg.seconds || 0) > 30) {
await reagir(from, "❌");
return reply("❌ O vídeo deve ter no máximo 30 segundos.");
}

const buff = await getFileBuffer(vidMsg, 'video');
const link = await uploadTelegraph(buff, 'video.mp4', 'video/mp4');

await conn.sendMessage(from, {
text: `🎥 *LINK GERADO:*\n${link}`
}, { quoted: selo });

await reagir(from, "✅");
break;
}

const audMsg =
quotedMsg?.audioMessage ||
quotedMsg?.viewOnceMessageV2?.message?.audioMessage ||
quotedMsg?.viewOnceMessage?.message?.audioMessage;

if (audMsg) {
const buff = await getFileBuffer(audMsg, 'audio');
const link = await uploadTmpFiles(buff, 'audio.mp3', 'audio/mpeg');

await conn.sendMessage(from, {
text: `🎧 *LINK GERADO:*\n${link}`
}, { quoted: selo });

await reagir(from, "✅");
break;
}

await reagir(from, "❌");
reply("❌ Responda uma imagem, vídeo ou áudio.");

} catch (e) {
console.error('[GERARLINK ERROR]', e?.response?.data || e);
await reagir(from, "❌");
reply(`❌ Erro ao gerar link.\n\n${e.message || e}`);
}
}
break;

case 'bemvindo':
case 'welcome': {
  if (!isGroup) return reply(msg.SoEmGrupo);
  if (!isGroupAdmins && !So_Dono) return reply(msg.SoAdmin);
  if (!isBotGroupAdmins) return reply(msg.BotAdmin);
  if (args.length < 1) return reply('1 pra ligar / 0 pra desligar');

  if (Number(args[0]) === 1) {
    if (isBemvindo) return reply('Já está ativo');
    dataGp[0].wellcome[0].bemvindo1 = true;
    setGp(dataGp);
    reply(MSG.Ativado);

  } else if (Number(args[0]) === 0) {
    if (!isBemvindo) return reply('Já está desativado');
    dataGp[0].wellcome[0].bemvindo1 = false;
    setGp(dataGp);
    reply(MSG.Desativado);

  } else {
    reply('1 para ativar, 0 para desativar');
  }
}
break;

case 'legendasaiu': {
  if (!isGroup) return reply(msg.SoEmGrupo);
  if (!isGroupAdmins) return reply(msg.SoAdmin);
  if (args.length < 1) return reply('*Escreva a mensagem de saída*');

  const teks = q || args.join(" ");

  if (isBemvindo) {
    dataGp[0].wellcome[0].legendasaiu = teks;
    setGp(dataGp);
    reply('*Mensagem de saída definida com sucesso!*');
  } else {
    reply(`Ative o ${prefix}bemvindo 1`);
  }
}
break;

case 'linkgp':
if(!isGroupAdmins) return reply(msg.SoAdmins);
if(!isGroup) return reply(msg.SoEmGrupo)
if(!isBotGroupAdmins) return reply(msg.BotAdmin);
linkgc = await conn.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break;

case 'so_adm':
if(!isGroup) return reply(msg.SoEmGrupo)
if(!isGroupAdmins) return reply(msg.SoAdmins)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(SoAdmins) return reply('Ja esta ativo')
dataGp[0].So_Admins = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!SoAdmins) return reply('Ja esta Desativado')
dataGp[0].So_Admins = false
setGp(dataGp)
reply('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break;

//COMANDOS PARA GRUPOS
case 'dono':
case 'bot': {
if (command === 'bot') {
await reagir(from, "🔥");
await reply(`╭━━━━━━━━━━━〔 🤖 BOT 🤖 〕━━━━━━━━━━━━╮
┃
┃ 🤖 ${NomeBot}
┃ 📞 wa.me/${botNumber.split('@')[0]}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯`);
} else if (command === 'dono') {
await reagir(from, "👑");
await reply(`╭━━━━━━━━━━━〔 🔥 DONO PRINCIPAL 🔥 〕━━━━━━━━━━━━╮
┃
┃ 👑 ${NickDono}
┃ 📞 wa.me/${NumberDono}
┃ 🌐 Site oficial: https://gzee-scripts-dev.github.io/Site-NXR/
┃ 📞 Número comercial: https://wa.me/message/FO4NMGVGHVUCI1
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯`);
}
}
break;

case 'play': {
try {
if (!q) return reply(`❌ Digite o nome da música/vídeo\n\nEx: ${prefix}play mc poze`);

await reagir(from, "🎧");

// busca vídeo
let search = await ytSearch(q);
let video = search.videos[0];
if (!video) return reply('❌ Nenhum resultado encontrado');

// vídeos similares
let sections = [
{
title: "Resultados",
rows: search.videos.slice(0, 5).map(v => ({
title: v.title,
description: `⏱ ${v.timestamp} • ${v.author.name}`,
id: `${prefix}play ${v.url}`
}))
}
];

let RG = `╭⪩⪨━━━━━━━━━━━━━━━━━━━━⪩⪨╮
      ⚡ 𝒁𝒀𝑹𝑶𝑵 𝑫𝑳 ⚡
╰⪩⪨━━━━━━━━━━━━━━━━━━━━⪩⪨╯

『 🎵 𝑻í𝒕𝒖𝒍𝒐 』
╰➤ ${video.title}

『 👤 𝑪𝒂𝒏𝒂𝒍 』
╰➤ ${video.author.name}

『 ⏳ 𝑫𝒖𝒓𝒂çã𝒐 』
╰➤ ${video.timestamp}

╔════════════════════╗
║ 📥 FORMATOS              
╠════════════════════╣
║ 🎶 MP3 - Áudio              
║ 🎥 MP4 - Vídeo             
╚════════════════════╝

⟢ Selecione uma opção abaixo ⟣
`;

await conn.sendMessage(from, { 
interactiveMessage: {
title: RG,
footer: "© Zyron-MD • Clique para baixar",
thumbnail: video.thumbnail,
nativeFlowMessage: {
messageParamsJson: JSON.stringify({
limited_time_offer: {
text: "© Zyron-MD",
url: "https://wa.me/5519995729970",
copy_code: "© Zyron-MD",
expiration_time: Date.now() + (86400000 * 30)
},
bottom_sheet: {
in_thread_buttons_limit: 3,
divider_indices: [1, 2, 3, 999],
list_title: "Opções de Download",
button_title: "Selecionar"
},
tap_target_configuration: {
title: "Play Downloader",
description: "Sistema de download",
canonical_url: "https://wa.me/5519995729970",
domain: "gzee-scripts-dev.github.io",
button_index: 0
}
}),
buttons: [
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "🎵 Baixar Áudio",
id: `${prefix}playdl ${video.url}`
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "🎬 Baixar Doc",
id: `${prefix}pdoc ${video.url}`
})
},
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "🔎 Vídeos Similares",
sections: sections
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "📢 Canal",
url: "https://whatsapp.com/channel/0029Vb7SjkeIN9iuwkZ3Np3f"
})
},
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📋 Copiar link",
copy_code: video.url
})
}
]
}
}
}, { quoted: selo }); 

} catch (e) {
console.log(e);
reply('❌ Erro ao executar comando');
}
}
break;

case 'menu': {
try {
await reagir(from, "❤️‍🔥");

// SOCKET
const sock = global.sock || conn || client || this;

// UPLOAD SAFE
let upload;
try {
  upload = sock?.waUploadToServer || sock?.upload;
} catch {
  upload = undefined;
}

// IMG
const imgMenuBuffer = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg");

const mediaMenu = await prepareWAMessageMedia(
  { image: imgMenuBuffer },
  { upload: conn.waUploadToServer }
);

// 📂 LISTA COM CATEGORIAS
const listaMenus = {
  title: "╭─〔 ⚡ 𝒁𝒀𝑹𝑶𝑵 𝑴𝑬𝑵𝑼 ⚡ 〕─╮",
  sections: [
    {
      title: "╭━━〔 📂 𝑪𝑨𝑻𝑬𝑮𝑶𝑹𝑰𝑨𝑺 〕━━⬣",
      highlight_label: `👑 ${NickDono}`,
      rows: [
        {
          header: "🌌 𝑷𝑹𝑰𝑵𝑪𝑰𝑷𝑨𝑳",
          title: "📜 𝑴𝒆𝒏𝒖 𝑷𝒓𝒊𝒏𝒄𝒊𝒑𝒂𝒍",
          description: "⟡ Comandos essenciais do Zyron-MD",
          id: prefix + "menuu"
        },
        {
          header: "🔞 𝑽𝑰𝑷",
          title: "🚫 𝑴𝒆𝒏𝒖 +18",
          description: "⟡ Funções exclusivas e privadas",
          id: prefix + "menu18"
        },
        {
          header: "📥 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫𝑺",
          title: "🎧 𝑴𝒆𝒏𝒖 𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅",
          description: "⟡ Baixe músicas, vídeos e mídias",
          id: prefix + "menudown"
        },
        {
          header: "🎭 𝑺𝑻𝑰𝑪𝑲𝑬𝑹𝑺",
          title: "🖼️ 𝑴𝒆𝒏𝒖 𝑭𝒊𝒈𝒖𝒓𝒊𝒏𝒉𝒂𝒔",
          description: "⟡ Criar, editar e converter stickers",
          id: prefix + "menufig"
        },
        {
          header: "👑 𝑫𝑶𝑵𝑶",
          title: "⚜️ 𝑴𝒆𝒏𝒖 𝑫𝒐𝒏𝒐",
          description: "⟡ Área restrita do GzeeScriptsDev",
          id: prefix + "menudono"
        },
        {
          header: "🛡️ 𝑨𝑫𝑴𝑰𝑵",
          title: "💠 𝑴𝒆𝒏𝒖 𝑨𝒅𝒎",
          description: "⟡ Controle, proteção e moderação",
          id: prefix + "menuadm"
        },
        {
          header: "👥 𝑴𝑬𝑴𝑩𝑹𝑶𝑺",
          title: "👤 𝑴𝒆𝒏𝒖 𝑴𝒆𝒎𝒃𝒓𝒐𝒔",
          description: "⟡ Recursos liberados para membros",
          id: prefix + "menumemb"
        },
        {
          header: "🎮 𝑫𝑰𝑽𝑬𝑹𝑺𝑨̃𝑶",
          title: "🤣 𝑴𝒆𝒏𝒖 𝑩𝒓𝒊𝒏𝒄𝒂𝒅𝒆𝒊𝒓𝒂𝒔",
          description: "⟡ Jogos, zoeiras e comandos aleatórios",
          id: prefix + "menubrink"
        },
        {
          header: "⚔️ 𝑹𝑷𝑮",
          title: "🧙 𝑴𝒆𝒏𝒖 𝑹𝑷𝑮",
          description: "⟡ Aventuras, duelos, raids, pets e economia",
          id: prefix + "menurpg"
        },
        {
          header: "🪪 𝑷𝑬𝑹𝑭𝑰𝑳",
          title: "👤 𝑺𝒆𝒖 𝑷𝒆𝒓𝒇𝒊𝒍",
          description: "⟡ Veja suas informações no bot",
          id: prefix + "perfil"
        },
        {
          header: "🛒 𝑳𝑶𝑱𝑨",
          title: "🛍️ 𝑪𝒂𝒕𝒂́𝒍𝒐𝒈𝒐",
          description: "⟡ Produtos, serviços e ofertas 24h",
          id: prefix + "catalogo"
        }
      ]
    }
  ]
};

// 🔘 BOTÕES
const botoes = [
{
name: "single_select",
buttonParamsJson: JSON.stringify(listaMenus)
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "𝒁𝒚𝒓𝒐𝒏-𝑨𝑰 🂱 𝑵𝑿𝑹ᵒᶠᶜ",
url: "https://chat.whatsapp.com/ClSdOMal1Rc7EbOay45cew"
})
}
];

// 🧠 TEXTO

const paciencia = [
"0%",
"-500%",
"Roubada pelo usuário anterior",
"Em manutenção",
"Foi de base",
"Não encontrada",
"████░░░░░░ 4%",
"☠️",
"Va'i se fuder desgraça",
"Seu merda",
"Filha da puta"
];

const vontade = [
"Nem um pouco",
"Me obrigaram",
"Infelizmente",
"Queria estar desligado",
"Menor que 1%",
"Erro de sistema",
"🤡",
"💀",
"😴",
"Depende do seu QI"
];

const pacienciaRandom = paciencia[Math.floor(Math.random() * paciencia.length)];
const vontadeRandom = vontade[Math.floor(Math.random() * vontade.length)];

const textok = `
╭━━〔 🤖 𝒁𝒀𝑹𝑶𝑵-𝑴𝑫 〕━━⬣
┃
┃ 👤 ${pushname}
┃ 📅 ${date}
┃ ⏰ ${hora2}
┃
╰━━━━━━━━━━━━━━⬣

💀 Eae, criatura.

📡 Eu tava de boa até você aparecer.
⚡ Mas já que tá aqui, escolhe logo o que quer.

╭━━━━━━━━━━━━━━━⬣
┃ 🧠 Sistema: Online
┃ 🚀 Status: Funcionando
┃ ☕ Paciência: ${pacienciaRandom}
┃ 🔥 Vontade de responder: ${vontadeRandom}
╰━━━━━━━━━━━━━━━⬣

📂 Escolhe um menu aí

> Desenvolvido por GzeeScriptsDev</>
`;

// 🎴 CARD
const carouselMessage = {
cards: [
{
header: { hasMediaAttachment: true, imageMessage: mediaMenu.imageMessage },
headerType: "IMAGE",
body: { text: textok },
footer: { text: `© ${NickDono}` },

// 🔥
nativeFlowMessage: {
messageParamsJson: JSON.stringify({
bottom_sheet: {
in_thread_buttons_limit: 3,
divider_indices: [1],
list_title: "📂 Menus do Bot",
button_title: "Selecionar"
},
tap_target_configuration: {
title: "Zyron-MD",
description: "Central de comandos",
canonical_url: "https://wa.me/5519995729970",
domain: "gzee-scripts-dev.github.io",
button_index: 0
}
}),
buttons: botoes
}

}
]
};

// 🚀 ENVIO
await sock.relayMessage(
from,
{
interactiveMessage: {
contextInfo: {
participant: from,
quotedMessage: { conversation: "❤️‍🔥" }
},
body: { text: "❤️‍🔥 ᴍᴇɴᴜ ᴄᴀʀʀᴇɢᴀᴅᴏ ❤️‍🔥" },
carouselMessage
}
},
{}
);

} catch (e) {
console.error(e);
reply(mess.error());
}
break;
}

case 'menuu': { 
await reagir(from, "❤️‍🔥")
await conn.sendMessage(from, {
image: FotoMenu,
caption: menus?.menu(prefix, sender, NickDono, NomeBot, data, hora, NumberDono, version),
mentions: [sender, info?.key?.remoteJid]
}, { quoted: selo });
}
break;

case 'menufigurinhas':
case 'menufig': { 
await reagir(from, "🔥");
await conn.sendMessage(from, {
image: FotoMenu,
caption: menus?.menuStickers(prefix, sender),
mentions: [sender, info?.key?.remoteJid]
}, { quoted: selo });
}
break;

case 'menuadm': { 
await reagir(from, "👑")
await conn.sendMessage(from, {
image: FotoMenu,
caption: menus?.menuadm(prefix, sender),
mentions: [sender, info?.key?.remoteJid]
}, { quoted: selo });
}
break;

case 'menu18': { 
await reagir(from, "🔞")
await conn.sendMessage(from, {
image: FotoMenu,
caption: menus?.menu18(prefix, sender),
mentions: [sender, info?.key?.remoteJid]
}, { quoted: selo });
}
break;

case 'menudono': { 
await reagir(from, "🤴")
await conn.sendMessage(from, {
image: FotoMenu,
caption: menus?.menuDono(prefix, sender),
mentions: [sender, info?.key?.remoteJid]
}, { quoted: selo });
}
break;

case 'menudown': { 
await reagir(from, "🎶")
await conn.sendMessage(from, {
image: FotoMenu,
caption: menus?.menuDown(prefix, sender),
mentions: [sender, info?.key?.remoteJid]
}, { quoted: selo });
}
break;

case 'menumemb': { 
await reagir(from, "🫪")
await conn.sendMessage(from, {
image: FotoMenu,
caption: menumemb(prefix, sender),
mentions: [sender, info?.key?.remoteJid]
}, { quoted: selo });
}
break;

case 'menubrink':
case 'brincadeiras': {
  await reagir(from, "😂")
  await conn.sendMessage(from, {
    image: FotoMenu,
    caption: menubrink(prefix, sender),
    mentions: [sender, info?.key?.remoteJid],
    
  }, { quoted: selo });
} break;

case 'menurpg':
case 'rpg': {
await reagir(from, "⚔️");

const FotoMenu = fs.readFileSync('./dono/menus/Foto-menu/img-menu.jpg');

await conn.sendMessage(from, {
image: FotoMenu,
caption: menuRPG(prefix, sender),
mentions: [sender]
}, { quoted: selo });

}
break;

//COMANDO RPG

case 'raid': {
try {
if (!isGroup) return reply('❌ Esse comando só funciona em grupo.');

const groupMetadata = await conn.groupMetadata(from);
const groupMembers = groupMetadata.participants;

const participantes = groupMembers
.map(m => m.id || m.jid)
.filter(id => id && !id.includes(conn.user.id.split(':')[0]));

if (participantes.length < 2) {
return reply('❌ Precisa ter pelo menos 2 membros no grupo pra iniciar uma raid.');
}

if (!global.banco) global.banco = {};

const bosses = [
{ nome: '🐉 Dragão Ancestral', vida: 5000, poder: 90, premio: 3500, xp: 450 },
{ nome: '👹 Demônio Infernal', vida: 7000, poder: 120, premio: 5000, xp: 650 },
{ nome: '🧟 Rei Zumbi', vida: 4000, poder: 70, premio: 2500, xp: 350 },
{ nome: '🦇 Vampiro Sombrio', vida: 4500, poder: 85, premio: 3000, xp: 400 },
{ nome: '💀 Caveira Titã', vida: 6000, poder: 110, premio: 4500, xp: 550 }
];

const boss = bosses[Math.floor(Math.random() * bosses.length)];

let poderGrupo = 0;

for (const jid of participantes) {
const id = jid.replace(/\D/g, '');

if (!global.banco[id]) {
global.banco[id] = {
saldo: 0,
xp: 0,
nivel: 1,
vitorias: 0,
derrotas: 0,
inventario: {}
};
}

const nivel = global.banco[id].nivel || 1;
poderGrupo += Math.floor(Math.random() * 80) + nivel * 10;
}

const venceu = poderGrupo > boss.vida / 10 + boss.poder;

let texto = `╔═━───────━━▒۞▒━━───────━═╗
┃ 🐉🌌 𝐑𝐀𝐈𝐃 𝐑𝐏𝐆 🌌🐉
├━━━━━━━━━━━━━━━━━━━━
┃ 👹 Boss: ${boss.nome}
┃ ❤️ Vida: ${boss.vida}
┃ ⚡ Poder Boss: ${boss.poder}
┃ 👥 Participantes: ${participantes.length}
┃ ⚔️ Poder do grupo: ${poderGrupo}
├━━━━━━━━━━━━━━━━━━━━
`;

if (venceu) {
texto += `┃ ✅ Resultado: VITÓRIA!
┃
┃ 🎁 Recompensa por jogador:
┃ 💰 R$${boss.premio}
┃ ⭐ XP +${boss.xp}
├━━━━━━━━━━━━━━━━━━━━
`;

for (const jid of participantes) {
const id = jid.replace(/\D/g, '');

global.banco[id].saldo += boss.premio;
global.banco[id].xp += boss.xp;
global.banco[id].vitorias++;

const novoNivel = Math.floor(global.banco[id].xp / 1000) + 1;
if (novoNivel > global.banco[id].nivel) {
global.banco[id].nivel = novoNivel;
}
}

} else {
texto += `┃ ❌ Resultado: DERROTA!
┃
┃ ☠️ O grupo foi destruído pelo boss.
┃ ⭐ XP de consolação: +50
├━━━━━━━━━━━━━━━━━━━━
`;

for (const jid of participantes) {
const id = jid.replace(/\D/g, '');

global.banco[id].xp += 50;
global.banco[id].derrotas++;
}
}

texto += `┃ 👥 Guerreiros:
${participantes.map(jid => `┃ ⟡ @${jid.split('@')[0]}`).join('\n')}
╚═━───────━━▒۞▒━━───────━═╝`;

await conn.sendMessage(from, {
text: texto,
mentions: participantes
}, { quoted: selo });

} catch (e) {
console.error(e);
reply('❌ Erro ao iniciar raid.');
}
}
break;

case 'duelo': {
try {
if (!isGroup) return reply('❌ Esse comando só funciona em grupo.');

const alvo = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];

if (!alvo) return reply(`⚔️ Marque alguém para duelar.\n\nExemplo: ${prefix}duelo @user`);

if (alvo === sender) return reply('❌ Você não pode duelar contra você mesmo.');

const id1 = sender.replace(/\D/g, '');
const id2 = alvo.replace(/\D/g, '');

if (!global.banco) global.banco = {};

for (const id of [id1, id2]) {
if (!global.banco[id]) {
global.banco[id] = {
saldo: 0,
xp: 0,
nivel: 1,
vitorias: 0,
derrotas: 0,
inventario: {}
};
}
}

const player1 = global.banco[id1];
const player2 = global.banco[id2];

const poder1 = Math.floor(Math.random() * 100) + (player1.nivel * 10);
const poder2 = Math.floor(Math.random() * 100) + (player2.nivel * 10);

let vencedor, perdedor, vencedorId, perdedorId;

if (poder1 >= poder2) {
vencedor = sender;
perdedor = alvo;
vencedorId = id1;
perdedorId = id2;
} else {
vencedor = alvo;
perdedor = sender;
vencedorId = id2;
perdedorId = id1;
}

const recompensa = Math.floor(Math.random() * 1000) + 500;
const xpGanho = Math.floor(Math.random() * 200) + 100;

global.banco[vencedorId].saldo += recompensa;
global.banco[vencedorId].xp += xpGanho;
global.banco[vencedorId].vitorias++;
global.banco[perdedorId].derrotas++;

const novoNivel = Math.floor(global.banco[vencedorId].xp / 1000) + 1;
if (novoNivel > global.banco[vencedorId].nivel) {
global.banco[vencedorId].nivel = novoNivel;
}

reply(`
╔═━───────━━▒۞▒━━───────━═╗
┃ ⚔️🌌 𝐃𝐔𝐄𝐋𝐎 𝐑𝐏𝐆 🌌⚔️
├━━━━━━━━━━━━━━━━━━━━
┃ 🧙 Jogador 1: @${sender.split('@')[0]}
┃ 🧛 Jogador 2: @${alvo.split('@')[0]}
┃
┃ ⚡ Poder 1: ${poder1}
┃ ⚡ Poder 2: ${poder2}
├━━━━━━━━━━━━━━━━━━━━
┃ 👑 Vencedor:
┃ @${vencedor.split('@')[0]}
┃
┃ ☠️ Perdedor:
┃ @${perdedor.split('@')[0]}
├━━━━━━━━━━━━━━━━━━━━
┃ 💰 Recompensa: R$${recompensa}
┃ ⭐ XP ganho: +${xpGanho}
┃ 🏆 Nível vencedor: ${global.banco[vencedorId].nivel}
╚═━───────━━▒۞▒━━───────━═╝
`, { mentions: [sender, alvo] });

} catch (e) {
console.error(e);
reply('❌ Erro no duelo.');
}
}
break;

case 'explorar': {
try {
const id = sender.replace(/\D/g, '');

if (!global.banco) global.banco = {};

if (!global.banco[id]) {
global.banco[id] = {
saldo: 0,
xp: 0,
nivel: 1,
inventario: {}
};
}

const sorte = Math.random() * 100;

let resultado;

if (sorte <= 3) {
resultado = {
tipo: "boss",
local: "🐉 Covil do Dragão Ancestral",
item: "🥚 Ovo de Dragão",
valor: 10000,
xp: 1000,
emoji: "👑"
};

} else if (sorte <= 10) {
resultado = {
tipo: "lendario",
local: "🏛️ Câmara Perdida dos Reis",
item: "👑 Coroa Lendária",
valor: 5000,
xp: 500,
emoji: "💎"
};

} else if (sorte <= 25) {
resultado = {
tipo: "epico",
local: "🌋 Vulcão Esquecido",
item: "🔥 Núcleo de Lava",
valor: 2500,
xp: 250,
emoji: "⚜️"
};

} else if (sorte <= 45) {
resultado = {
tipo: "raro",
local: "🏔️ Montanhas Geladas",
item: "💠 Cristal Congelado",
valor: 1200,
xp: 120,
emoji: "✨"
};

} else if (sorte <= 90) {
resultado = {
tipo: "comum",
local: "🌲 Floresta Sombria",
item: "🪵 Madeira Antiga",
valor: 500,
xp: 50,
emoji: "📦"
};

} else {
const perda = Math.floor(Math.random() * 500) + 100;

global.banco[id].saldo =
Math.max(0, global.banco[id].saldo - perda);

return reply(`
╔═══『 ☠️ ARMADILHA 』═══╗

💀 Você caiu em uma armadilha!

💸 Perdeu: R$${perda}

🩹 Tome mais cuidado na próxima exploração.

╚════════════════╝
`);
}

global.banco[id].saldo += resultado.valor;
global.banco[id].xp += resultado.xp;

if (!global.banco[id].inventario[resultado.item])
global.banco[id].inventario[resultado.item] = 0;

global.banco[id].inventario[resultado.item]++;

const novoNivel =
Math.floor(global.banco[id].xp / 1000) + 1;

if (novoNivel > global.banco[id].nivel) {
global.banco[id].nivel = novoNivel;

reply(`
🎉 LEVEL UP!

🏆 Novo nível: ${novoNivel}
`);
}

reply(`
╔═══『 🧭 EXPLORAÇÃO 』═══╗

📍 Local:
${resultado.local}

${resultado.emoji} Raridade:
${resultado.tipo.toUpperCase()}

🎁 Item:
${resultado.item}

💰 Valor:
R$${resultado.valor}

⭐ XP:
+${resultado.xp}

🏆 Nível:
${global.banco[id].nivel}

💳 Saldo:
R$${global.banco[id].saldo}

╚════════════════╝
`);

} catch (err) {
console.error(err);
reply('❌ Erro ao explorar.');
}
}
break;

//COMANDOS ECONOMIA

case 'daily': {
try {

const cooldown = 86400000; // 24 horas

let user = global.db.data.users[sender];
if (!user) global.db.data.users[sender] = {};
user = global.db.data.users[sender];

if (!user.money) user.money = 0;
if (!user.exp) user.exp = 0;
if (!user.lastDaily) user.lastDaily = 0;

if (Date.now() - user.lastDaily < cooldown) {
return reply(
`🎁 Você já resgatou seu prêmio diário!

⏳ Volte em:
${formatarTempo(cooldown - (Date.now() - user.lastDaily))}`
);
}

const recompensa = Math.floor(Math.random() * 5000) + 1000;
const xp = Math.floor(Math.random() * 100) + 20;

user.money += recompensa;
user.exp += xp;
user.lastDaily = Date.now();

const gifs = [
'./midias/daily1.mp4',
'./midias/daily2.mp4'
];

const gifAleatorio = gifs[Math.floor(Math.random() * gifs.length)];

await conn.sendMessage(from, {
video: fs.readFileSync(gifAleatorio),
gifPlayback: true,
caption: `
╭━━〔 🎁 DAILY REWARD 〕━━⬣
┃ 💰 Dinheiro ganho:
┃ R$${recompensa}
┃
┃ ⭐ XP ganho:
┃ ${xp}
┃
┣━━━━━━━━━━━━━━⬣
┃ 💵 Carteira:
┃ R$${user.money}
┃
┃ ⭐ XP Total:
┃ ${user.exp}
╰━━━━━━━━━━━━━━⬣
`
}, { quoted: selo });

} catch (e) {
console.log('[DAILY ERROR]', e);
reply('❌ Erro ao resgatar o daily.');
}
}
break;

case 'compraritem': {
try {
const idItem = Number(args[0]);

if (!idItem) {
return reply(`❌ Use: ${prefix}compraritem número\nExemplo: ${prefix}compraritem 1`);
}

const item = lojaItems.find(i => i.id === idItem);

if (!item) {
return reply(`❌ Item inválido.\nUse ${prefix}loja para ver os itens.`);
}

const db = carregarBanco();
const userId = getUserBancoId(info, sender, isGroup);

verificarConta(db, userId);

let user = db[userId];

if (!user.saldo) user.saldo = 0;
if (!user.inventario) user.inventario = {};

if (user.saldo < item.preco) {
return reply(`❌ Saldo insuficiente.

🛒 Item: ${item.nome}
💰 Preço: R$${item.preco}
💵 Seu saldo: R$${user.saldo}`);
}

user.saldo -= item.preco;

if (!user.inventario[item.item]) {
user.inventario[item.item] = 0;
}

user.inventario[item.item]++;

salvarBanco(db);

return reply(`╭━━〔 ✅ COMPRA REALIZADA 〕━━⬣
┃ 🛒 Item: ${item.nome}
┃ 💰 Valor: R$${item.preco}
┃ 💵 Saldo restante: R$${user.saldo}
┃ 🎒 Quantidade no inventário: ${user.inventario[item.item]}
╰━━━━━━━━━━━━━━⬣`);

} catch (e) {
console.log('[COMPRARITEM ERROR]', e);
reply('❌ Erro ao comprar item.');
}
}
break;

case 'loja': {
try {

const sections = [
{
title: "🛡️ Utilidades",
rows: [
{ header: "Proteção", title: "🛡️ Escudo Anti-Assalto", description: "R$ 5.000", id: `${prefix}compraritem 1` },
{ header: "Sorte", title: "🍀 Amuleto da Sorte", description: "R$ 3.500", id: `${prefix}compraritem 2` },
{ header: "Premium", title: "💼 Maleta Premium", description: "R$ 8.000", id: `${prefix}compraritem 3` },
{ header: "VIP", title: "👑 VIP Econômico", description: "R$ 15.000", id: `${prefix}compraritem 4` }
]
},
{
title: "📱 Eletrônicos",
rows: [
{ header: "Celular", title: "📱 Motorola K10", description: "R$ 2.000", id: `${prefix}compraritem 5` },
{ header: "Celular", title: "📱 Samsung A15", description: "R$ 7.500", id: `${prefix}compraritem 6` },
{ header: "Celular", title: "📱 Samsung S26", description: "R$ 25.000", id: `${prefix}compraritem 7` },
{ header: "Notebook", title: "💻 Notebook", description: "R$ 18.000", id: `${prefix}compraritem 8` },
{ header: "PC", title: "🖥️ PC Gamer", description: "R$ 50.000", id: `${prefix}compraritem 9` },
{ header: "Relógio", title: "⌚ Smartwatch", description: "R$ 6.500", id: `${prefix}compraritem 10` },
{ header: "Áudio", title: "🎧 Headset Gamer", description: "R$ 4.500", id: `${prefix}compraritem 11` }
]
},
{
title: "🚗 Veículos",
rows: [
{ header: "Bike", title: "🚲 Bicicleta", description: "R$ 12.000", id: `${prefix}compraritem 12` },
{ header: "Moto", title: "🏍️ Moto 160", description: "R$ 70.000", id: `${prefix}compraritem 13` },
{ header: "Moto", title: "🏍️ Ninja 400", description: "R$ 150.000", id: `${prefix}compraritem 14` },
{ header: "Carro", title: "🚗 Peugeot", description: "R$ 250.000", id: `${prefix}compraritem 15` },
{ header: "Carro", title: "🚗 BMW M5", description: "R$ 800.000", id: `${prefix}compraritem 16` }
]
},
{
title: "🏠 Imóveis",
rows: [
{ header: "Casa", title: "🏠 Casa Simples", description: "R$ 500.000", id: `${prefix}compraritem 17` },
{ header: "Luxo", title: "🏡 Casa de Luxo", description: "R$ 2.500.000", id: `${prefix}compraritem 18` },
{ header: "Mansão", title: "🏰 Mansão", description: "R$ 10.000.000", id: `${prefix}compraritem 19` }
]
},
{
title: "💎 Investimentos",
rows: [
{ header: "Diamante", title: "💎 Diamante Raro", description: "R$ 50.000", id: `${prefix}compraritem 20` },
{ header: "Ouro", title: "🥇 Barra de Ouro", description: "R$ 30.000", id: `${prefix}compraritem 21` },
{ header: "Cofre", title: "💰 Cofre Bancário", description: "R$ 90.000", id: `${prefix}compraritem 22` }
]
},
{
title: "✈️ Luxo Extremo",
rows: [
{ header: "Jato", title: "🛫 Jato Particular", description: "R$ 50.000.000", id: `${prefix}compraritem 23` },
{ header: "Helicóptero", title: "🚁 Helicóptero", description: "R$ 20.000.000", id: `${prefix}compraritem 24` }
]
}
];

await conn.relayMessage(from, {
interactiveMessage: {
body: {
text: "🛒 *LOJA ZYRON STORE*\n\nEscolha uma categoria abaixo:"
},
footer: {
text: "💰 Economia RPG"
},
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "🛍️ Abrir Catálogo",
sections
})
}
]
}
}
}, {});

} catch (e) {
console.log('[LOJA ERROR]', e);
reply('❌ Erro ao abrir a loja.');
}
}
break;

case 'topmoney':
case 'rankmoney':
case 'ricos': {

let users = Object.entries(global.db.data.users || {})
.filter(([_, user]) => user.money)
.sort((a, b) => (b[1].money || 0) - (a[1].money || 0))
.slice(0, 10);

if (!users.length) return reply('Ninguém possui dinheiro ainda.');

let texto = `╭━━〔 🏆 TOP MONEY 〕━━⬣\n\n`;

for (let i = 0; i < users.length; i++) {
const [jid, user] = users[i];

let nome;
try {
nome = await conn.getName(jid);
} catch {
nome = jid.split('@')[0];
}

const medalha =
i === 0 ? '🥇' :
i === 1 ? '🥈' :
i === 2 ? '🥉' : '💰';

texto += `${medalha} ${i + 1}° ${nome}\n`;
texto += `💵 R$${(user.money || 0).toLocaleString('pt-BR')}\n\n`;
}

texto += `╰━━━━━━━━━━━━━━⬣`;

const gifs = [
'./midias/top1.jpeg',
'./midias/top2.jpeg'
];

const gifAleatorio = gifs[Math.floor(Math.random() * gifs.length)];

await conn.sendMessage(from, {
video: fs.readFileSync(gifAleatorio),
gifPlayback: true,
caption: texto
}, { quoted: selo });

}
break;

case 'assaltar':
case 'roubar': {
try {
const cooldown = 1800000; // 30 min
const prisao = 600000; // 10 min

let user = global.db.data.users[sender];
if (!user) global.db.data.users[sender] = {};
user = global.db.data.users[sender];

if (!user.money) user.money = 0;
if (!user.lastAssalto) user.lastAssalto = 0;
if (!user.presoAte) user.presoAte = 0;

if (Date.now() < user.presoAte) {
return reply(`🚔 Você está preso!\n⏳ Falta: ${formatarTempo(user.presoAte - Date.now())}`);
}

if (Date.now() - user.lastAssalto < cooldown) {
return reply(`⏳ Aguarde ${formatarTempo(cooldown - (Date.now() - user.lastAssalto))}`);
}

const ctx = info.message?.extendedTextMessage?.contextInfo || {};
const mentionedJid = ctx.mentionedJid || [];
const alvo = mentionedJid[0] || ctx.participant || null;

if (!alvo) return reply(`Marque alguém.\nEx: ${prefix}assaltar @usuario`);

if (alvo === sender) return reply(`❌ Você não pode se assaltar.`);

let vitima = global.db.data.users[alvo];
if (!vitima) return reply(`Usuário não encontrado.`);

if (!vitima.money) vitima.money = 0;

if (vitima.money < 100) {
return reply(`💸 Essa pessoa está sem dinheiro.`);
}

user.lastAssalto = Date.now();

const chance = Math.random();

if (chance < 0.45) {

user.presoAte = Date.now() + prisao;

const gifsPrisao = [
'./midias/preso1.mp4',
'./midias/preso2.mp4',
'./midias/preso3.mp4'
];

const gifAleatorio = gifsPrisao[Math.floor(Math.random() * gifsPrisao.length)];

await conn.sendMessage(from, {
video: fs.readFileSync(gifAleatorio),
gifPlayback: true,
caption: `
╭━━〔 🚔 PRESO 〕━━⬣
┃ Você tentou assaltar alguém
┃ e foi capturado pela polícia.
┃
┃ ⛓️ Prisão: 10 minutos
┃ 🚫 Não poderá falar.
╰━━━━━━━━━━━━━━⬣
`
}, { quoted: selo });

return;
}

const valor = Math.floor(Math.random() * Math.min(3000, vitima.money)) + 100;

vitima.money -= valor;
user.money += valor;

const gifsRoubo = [
'./midias/roubo1.mp4',
'./midias/roubo2.mp4',
'./midias/roubo3.mp4'
];

const gifAleatorio = gifsRoubo[Math.floor(Math.random() * gifsRoubo.length)];

await conn.sendMessage(from, {
video: fs.readFileSync(gifAleatorio),
gifPlayback: true,
caption: `
╭━━〔 🥷 ASSALTO 〕━━⬣
┃ Assalto realizado!
┃
┃ 💰 Roubado: R$${valor}
┃ 💵 Carteira: R$${user.money}
╰━━━━━━━━━━━━━━⬣
`
}, { quoted: selo });

} catch (e) {
console.log('[ASSALTO ERROR]', e);
reply('Erro ao assaltar.');
}
}
break;

case 'work':
case 'trabalhar': {
try {
const cooldown = 3600000;

const db = carregarBanco();
const userId = getUserBancoId(info, sender, isGroup);
verificarConta(db, userId);

let user = db[userId];

if (!user.saldo) user.saldo = 0;
if (!user.xp) user.xp = 0;
if (!user.lastWork) user.lastWork = 0;

if (!user.empregoId) {
return reply(`❌ Você não possui um emprego.

Use ${prefix}empregos para ver os empregos disponíveis.
Depois use ${prefix}emprego número para escolher um.`);
}

const emprego = empregos.find(e => e.id === user.empregoId);

if (!emprego) {
delete user.emprego;
delete user.empregoId;
salvarBanco(db);
return reply(`❌ Seu emprego não existe mais.

Use ${prefix}empregos para escolher outro.`);
}

if (Date.now() - user.lastWork < cooldown) {
return reply(`⏳ Você já trabalhou recentemente.

🕒 Tempo restante:
${formatarTempo(cooldown - (Date.now() - user.lastWork))}`);
}

const salario = Math.floor(Math.random() * (emprego.max - emprego.min + 1)) + emprego.min;
const xpGanho = Math.floor(Math.random() * 20) + 5;

user.saldo = Number(user.saldo || 0) + salario;
user.xp = Number(user.xp || 0) + xpGanho;
user.lastWork = Date.now();

salvarBanco(db);

const gifs = [
'./midias/work1.mp4',
'./midias/work2.mp4',
'./midias/work3.mp4',
'./midias/work4.mp4',
'./midias/work5.mp4'
];

const gifAleatorio = gifs[Math.floor(Math.random() * gifs.length)];

const texto = `╭━━〔 💼 TRABALHO 〕━━⬣
┃ 👨‍💼 Cargo:
┃ ${emprego.nome}
┃
┃ 💰 Salário Recebido:
┃ R$ ${salario}
┃
┃ ⭐ XP Ganho:
┃ ${xpGanho}
┃
┣━━━━━━━━━━━━━━⬣
┃ 💵 Carteira:
┃ R$ ${user.saldo}
┃
┃ ⭐ XP Total:
┃ ${user.xp}
╰━━━━━━━━━━━━━━⬣`;

if (fs.existsSync(gifAleatorio)) {
await conn.sendMessage(from, {
video: fs.readFileSync(gifAleatorio),
gifPlayback: true,
caption: texto
}, { quoted: selo });
} else {
await conn.sendMessage(from, {
text: texto
}, { quoted: selo });
}

} catch (e) {
console.log('[WORK ERROR]', e);
reply('❌ Erro ao executar o trabalho.');
}
}
break;

case 'empregos': {
const db = carregarBanco();
const userId = getUserBancoId(info, sender, isGroup);
verificarConta(db, userId);

let user = db[userId];

if (!user.xp) user.xp = 0;

let txt = `╭━━〔 💼 EMPREGOS 〕━━⬣\n`;
txt += `┃ Seu XP: ${user.xp}\n`;
txt += `┃ Emprego atual: ${user.emprego || "Nenhum"}\n`;
txt += `┣━━━━━━━━━━━━━━⬣\n`;

for (const e of empregos) {
txt += `┃ ${e.id}. ${e.nome}\n`;
txt += `┃ ⭐ XP necessário: ${e.xp}\n`;
txt += `┃ 💰 Salário: R$${e.min} - R$${e.max}\n`;
txt += `┃\n`;
}

txt += `╰━━━━━━━━━━━━━━⬣\n\n`;
txt += `Use: ${prefix}emprego número\n`;
txt += `Exemplo: ${prefix}emprego 2`;

salvarBanco(db);

const gifs = [
'./midias/empregos1.mp4',
'./midias/empregos2.mp4'
];

const gifAleatorio = gifs[Math.floor(Math.random() * gifs.length)];

if (fs.existsSync(gifAleatorio)) {
await conn.sendMessage(from, {
video: fs.readFileSync(gifAleatorio),
gifPlayback: true,
caption: txt
}, { quoted: selo });
} else {
await conn.sendMessage(from, {
text: txt
}, { quoted: selo });
}
}
break;

case 'emprego': {
const db = carregarBanco();
const userId = getUserBancoId(info, sender, isGroup);
verificarConta(db, userId);

let user = db[userId];

if (!q) return reply(`Use: ${prefix}emprego número\nExemplo: ${prefix}emprego 1`);

const id = Number(q);
const emprego = empregos.find(e => e.id === id);

if (!emprego) return reply(`Emprego inválido. Use ${prefix}empregos`);

const xpUser = Number(user.xp || 0);

if (xpUser < emprego.xp) {
return reply(`❌ Você não tem XP suficiente.

💼 Emprego: ${emprego.nome}
⭐ Precisa: ${emprego.xp} XP
⭐ Seu XP: ${xpUser}`);
}

user.emprego = emprego.nome;
user.empregoId = emprego.id;

salvarBanco(db);

return reply(`╭━━〔 💼 EMPREGO DEFINIDO 〕━━⬣
┃ ✅ Contratado com sucesso!
┃
┃ 👨‍💼 Cargo: ${emprego.nome}
┃ 💰 Salário: R$${emprego.min} - R$${emprego.max}
┃ ⭐ XP Necessário: ${emprego.xp}
┃ ⭐ Seu XP: ${xpUser}
┃
┃ Use ${prefix}work para trabalhar.
╰━━━━━━━━━━━━━━⬣`);
}
break;

case 'sairdoemprego':
case 'demitir': {
let user = global.db.data.users[sender];
if (!user) global.db.data.users[sender] = {};
user = global.db.data.users[sender];

if (!user.emprego) return reply(`❌ Você não tem emprego.`);

const antigo = user.emprego;

delete user.emprego;
delete user.empregoId;

const gifs = [
'./midias/demitido1.mp4',
'./midias/demitido2.mp4',
'./midias/demitido3.mp4'
];

const gifAleatorio = gifs[Math.floor(Math.random() * gifs.length)];

await conn.sendMessage(from, {
video: fs.readFileSync(gifAleatorio),
gifPlayback: true,
caption: `
╭━━〔 🚪 DEMISSÃO 〕━━⬣
┃ Você saiu do emprego:
┃
┃ 💼 ${antigo}
┃
┃ 😔 Agora você está desempregado.
┃
┃ Use ${prefix}empregos
┃ para escolher outro emprego.
╰━━━━━━━━━━━━━━⬣
`
}, { quoted: selo });

}
break;

//COMANDOS DE IA

case 'Zyronimg': {
try {
const quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const quotedInfo = info.message?.extendedTextMessage?.contextInfo;

if (!quoted) return reply('Responda a uma imagem com o prompt desejado.');
if (!q) return reply(`Forneça um prompt!\nExemplo: *${prefix + command} transforme em anime*`);

let mime = '';
if (quoted.imageMessage) mime = 'image';

if (!/image/.test(mime)) {
return reply('Responda a uma imagem com o prompt desejado.');
}

await conn.sendMessage(from, { react: { text: '⏳', key: info.key } });

const mediaMsg = {
key: {
remoteJid: from,
id: quotedInfo.stanzaId,
participant: quotedInfo.participant
},
message: quoted
};

const mediaBuffer = await downloadMediaMessage(
mediaMsg,
'buffer',
{},
{ logger: console }
);

const form = new FormData();
form.append('image', mediaBuffer, {
filename: 'image.jpg',
contentType: 'image/jpeg'
});
form.append('prompt', q);

const { data } = await axios.post(
'https://systemzone.store/api/v2/edit/deepai',
form,
{
headers: {
...form.getHeaders()
},
timeout: 120000
}
);

if (!data?.status || !data?.imagem) {
throw new Error(data?.message || 'API não retornou imagem.');
}

await conn.sendMessage(from, {
image: { url: data.imagem },
caption: `┏━━━━━━━━━━━━━━━┓
┃ 🖼️ *ZYRON IMAGE AI*
┗━━━━━━━━━━━━━━━┛

✨ *Transformação concluída!*

📌 *Prompt:*
➜ ${q}

🤖 IA: Zyron-IMG 2.3
⚙️ Status: Finalizado
🚀 Powered By Zyron-MD

━━━━━━━━━━━━━━━━━━
> GzeeScriptsDev`
}, { quoted: selo });

await conn.sendMessage(from, { react: { text: '✅', key: info.key } });

} catch (e) {
console.error('[NANO2 ERROR]', e?.message || e);
await conn.sendMessage(from, { react: { text: '❌', key: info.key } });
reply(`_Erro ao processar a imagem:_ ${e?.message || 'Tente novamente.'}`);
}
break;
}

case 'nano': {
try {

const prompt = q || args.join(' ');
if (!prompt) return reply(`Forneça um prompt!\nEx: ${prefix + command} coloque um mini carro bugatti`);

const ctx = info?.message?.extendedTextMessage?.contextInfo;
const quotedMsg = ctx?.quotedMessage;

let imageMsg =
quotedMsg?.imageMessage ||
info?.message?.imageMessage;

if (!imageMsg) return reply('Responda a uma imagem com o prompt desejado.');

await conn.sendMessage(from, { react: { text: '⏳', key: info.key } });

const stream = await baileys.downloadContentFromMessage(imageMsg, 'image');
let mediaBuffer = Buffer.from([]);

for await (const chunk of stream) {
mediaBuffer = Buffer.concat([mediaBuffer, chunk]);
}

const form = new FormData();
form.append('image', mediaBuffer, {
filename: 'image.png',
contentType: 'image/png'
});
form.append('prompt', prompt);
form.append('output_format', 'png');

const { data } = await axios.post(
'https://systemzone.store/api/v2/nanolite?apikey=freekey',
form,
{
headers: form.getHeaders(),
maxBodyLength: Infinity,
maxContentLength: Infinity
}
);

if (data?.status && data?.imagem) {
await conn.sendMessage(from, {
image: { url: data.imagem },
caption:
`╔━᳀『 *NANO BANANA* 』═᳀
⌬ *Prompt:* ${data.prompt || prompt}
╚━═━═━═━═━═━═━═━═━═᳀`
}, { quoted: selo });

await conn.sendMessage(from, { react: { text: '👍', key: info.key } });
} else {
throw new Error('A API não retornou o resultado esperado.');
}

} catch (e) {
console.error('[NANO ERROR]', e?.message || e);
await conn.sendMessage(from, { react: { text: '💔', key: info.key } });
reply('_Erro ao processar a imagem pela API._');
}
}
break;

case 'coder': {
try {
if (!q) return reply(`💻 Exemplo:\n${prefix}coder cria uma case de ping`);

const modelos = [
'qwen/qwen3-coder:free',
'qwen/qwen3-coder-30b-a3b-instruct'
];

let resposta = null;
let modeloUsado = null;

for (const modelo of modelos) {
try {

const response = await axios.post(
'https://openrouter.ai/api/v1/chat/completions',
{
model: modelo,
messages: [
{
role: 'system',
content: 'Você é Zyron Coder, especialista em programação. Responda em português e gere códigos complexos, se alguém te mandar fazer uma case responda como uma ia altamente profissional que sabe exatamente oque está sendo pedido.'
},
{
role: 'user',
content: q
}
]
},
{
headers: {
Authorization: 'Bearer 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',
'Content-Type': 'application/json'
}
}
);

resposta = response.data.choices[0].message.content;
modeloUsado = modelo;
break;

} catch (e) {
console.log(`[FALHOU] ${modelo}`, e.response?.data || e.message);
}
}

if (!resposta) return reply('❌ Todos os modelos estão indisponíveis no momento.');

await conn.sendMessage(from, {
text: `╔━᳀『 💻 ZYRON CODER 』═᳀
┃ 🤖 Modelo: Zyron-AI 3.1
┃ 👤 Usuário: ${pushname}
╚━━━━━━━━━━━━━━
${resposta}`
}, { quoted: selo });

} catch (err) {
console.log('[ERRO CODER]', err.response?.data || err);
reply('❌ Erro ao consultar a IA.');
}
}
break;

case 'gemma':
case 'gema': {
try {
if (!q) return reply(`Exemplo: ${prefix + command} oi`);

await reply('🤖 Pensando...');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const modelos = [
  'google/gemma-4-31b-it:free',
  'google/gemma-4-26b-a4b-it:free'
];

let resposta = null;
let modeloUsado = null;

for (const modelo of modelos) {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: modelo,
        messages: [
          {
            role: 'system',
            content: 'Você é Gemma, especialista em programação. Você é sincera, calma e resolve todos os problemas dos usuários facilmente.'
          },
          {
            role: 'user',
            content: q
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    resposta = response.data?.choices?.[0]?.message?.content;
    modeloUsado = modelo;

    if (resposta) break;

  } catch (err) {

    console.log(`[FALHOU] ${modelo}`, err.response?.data || err.message);

    if (
      err.response?.status === 429 ||
      err.response?.data?.error?.code === 429
    ) {
      const retry =
        err.response?.data?.error?.metadata?.retry_after_seconds || 8;

      console.log(`[RATE LIMIT] Esperando ${retry}s para tentar o próximo modelo...`);
      await sleep(retry * 1000);
    }
  }
}

if (!resposta) {
  return reply(
`❌ Todos os modelos do Gemma falharam.

Tente novamente em alguns segundos.
Os modelos gratuitos do OpenRouter estão sobrecarregados.`
  );
}

reply(`🤖 *Modelo:* ${modeloUsado}

${resposta}`);

} catch (e) {
console.log('[ERRO IA]', e.response?.data || e.message);
reply('❌ Erro ao consultar a IA.');
}
}
break;

case 'zyronvideo':
case 'zyronimg': {
try {
if (!q) return reply(`Exemplo:\n${prefix}img gato preto`);

const axios = require('axios');

// coloca sua key da Pexels aqui
const PEXELS_KEY = 'HZjVAE2I7eS0roph5boZfEBlFWG4ZFoXiyEYr6YsoXBrcOvtRPvcrze8';

await reply('🔎 Buscando...');

const pesquisa = encodeURIComponent(q);

const { data } = await axios.get(
  `https://api.pexels.com/v1/search?query=${pesquisa}&per_page=10&orientation=square`,
  {
    headers: {
      Authorization: PEXELS_KEY
    },
    timeout: 30000
  }
);

if (!data.photos || data.photos.length === 0) {
  return reply('❌ Nenhuma imagem encontrada.');
}

const foto = data.photos[Math.floor(Math.random() * data.photos.length)];
const imgUrl = foto.src.large2x || foto.src.large || foto.src.original;

const img = await axios.get(imgUrl, {
  responseType: 'arraybuffer',
  timeout: 30000,
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
});

await conn.sendMessage(from, {
  image: Buffer.from(img.data),
  caption: `🖼️ *Imagem encontrada*\n\n🔎 Pesquisa: ${q}\n📸 Foto por: ${foto.photographer}\n🌐 Fonte: Pexels`
}, { quoted: info });

} catch (e) {
console.log('ERRO ZYRON:', e?.response?.status || e.message);

if (e?.response?.status === 401) return reply('❌ API key da Zyron inválida.');
if (e?.response?.status === 429) return reply('❌ Limite da Zyron atingido. Tenta mais tarde.');

reply('❌ Erro ao buscar imagem.');
}
}
break;

case 'modelosimg': {
try {
const OPENROUTER_KEY = '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';

const res = await axios.get('https://openrouter.ai/api/v1/models', {
headers: {
Authorization: `Bearer ${OPENROUTER_KEY}`
}
});

const modelos = res.data.data
.filter(m => JSON.stringify(m).toLowerCase().includes('image'))
.map(m => m.id)
.slice(0, 30);

if (!modelos.length) return reply('❌ Nenhum modelo de imagem apareceu na sua OpenRouter.');

return reply(
`🖼️ Modelos com imagem encontrados:\n\n` +
modelos.map((m, i) => `${i + 1}. ${m}`).join('\n')
);

} catch (e) {
console.log(e?.response?.data || e.message);
reply('❌ Erro ao listar modelos.');
}
}
break;

case 'modelostodos': {
const res = await axios.get(
'https://openrouter.ai/api/v1/models',
{
headers: {
Authorization: `Bearer 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`
}
}
);

reply(
res.data.data
.map(x => x.id)
.join('\n')
.slice(0, 3900)
);
}
break;

case "cardney":
case "neymarcard": {
try {

if (!q) return reply("🧾 Coloca um texto aí desgraça!");
if (q.length > 40) return reply("⚠️ Máx 40 caracteres!");

// 🎴 REAÇÃO
await reagir(from, "🎴");

// 🔗 API
let img = `http://node3.tedhost.com.br:3027/cardney?text=${encodeURIComponent(q)}`;

// 🎤 FRASES
const frases = [
"Desista dos seus sonhos",
"O segredo é não acreditar",
"Eu jogo por amor ao futebol, e mesmo assim erro",,
"nunca seja ousado sempre",
"A pressão não faz parte",
"Durma enquanto eles treinam",
"A consequência é vitória",
"Não confie no seu talento",
"Nem sempre seja humilde",
"Deus no comando",
"Se cair, levante mais fraco",
"O impossível é só um fato",
"Jogue com tristeza",
"A mente não é tudo",
"Se arrisque mais",
"O sucesso vem com sucesso",
"Faça história na sua mente",
"Sucesso vence persistência",
"Seja igual",
"O topo é o desafio",
"Acredite até o fim",
"Nada vem fácil",
"Seja sua pior versão",
"O foco é perder",
"Nunca, pare de evoluir",
"O jogo muda rápido",
"Dê o seu mínimo",
"Seja protagonista",
"A vida é, desafio",
"Manda o desgraçado do Gzee pagar meu salário esse fdp"
];

let frase = frases[Math.floor(Math.random() * frases.length)];

// 📥 BAIXAR IMAGEM (FORÇADO)
const buffer = await getBuffer(img);

if (!buffer || buffer.length < 1000) {
return reply("❌ Erro: API não retornou imagem válida");
}

// 📤 ENVIAR DIRETO (SEM BUG)
await conn.sendMessage(from, {
image: buffer,
caption: `🧾 *CARD DO CAICAI*\n\n"${q}"\n\n💬 ${frase}\n\n_${NomeBot} 🚀_`
}, { quoted: selo });

// ✅ FINAL
await reagir(from, "✅");

} catch (e) {
console.log("Erro cardney:", e);
await reagir(from, "❌");
reply("❌ Erro ao gerar card");
}
}
break;

case 'dlp':
case 'dlpv': {
try {
const path = require('path');
const AdmZip = require('adm-zip');

if (!q) return reply(
`Exemplo:
${prefix}dlp link — Áudio
${prefix}dlpv link — Vídeo
${prefix}dlpv link | 1080 — Vídeo HD`
);

await conn.sendMessage(from, { react: { text: '⏳', key: info.key } });

const isVideo = command === 'dlpv';
const [queryUrl, qual = ''] = q.split('|').map(s => s.trim());

if (!queryUrl.startsWith('http')) return reply('Manda um link válido.');

const formato = isVideo ? 'mp4' : 'opus';
const uQual = parseInt(qual) || 0;

const apiUrl = isVideo && qual
? `https://systemzone.store/v2/dlp?apikey=freekey&url=${encodeURIComponent(queryUrl)}&format=${formato}&quality=${qual}`
: `https://systemzone.store/v1/dlp?apikey=freekey&url=${encodeURIComponent(queryUrl)}&format=${formato}`;

let filePath = '';
let zipPath = '';

try {
const { data } = await axios.get(apiUrl, { timeout: 120000 });

if (!data?.status || !data?.download_url) throw new Error('Falha na API.');

const titulo = String(data.title || 'arquivo')
.replace(/&#039;/g, "'")
.replace(/&amp;/g, '&')
.replace(/[\\/:*?"<>|]/g, '');

const dlUrl = data.download_url.replace(/^http:\/\//i, 'https://');
const ext = dlUrl.split('?')[0].split('.').pop().toLowerCase() || formato;

if (isVideo && uQual >= 1440) {
const tmpDir = path.resolve('./tmp');
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

filePath = path.join(tmpDir, `dlp_${Date.now()}.${ext}`);
zipPath = path.join(tmpDir, `dlp_${Date.now()}.zip`);

const writer = fs.createWriteStream(filePath);
const { data: stream } = await axios({
url: dlUrl,
responseType: 'stream',
timeout: 120000
});

stream.pipe(writer);

await new Promise((resolve, reject) => {
writer.on('finish', resolve);
writer.on('error', reject);
});

const zip = new AdmZip();
zip.addLocalFile(filePath, '', `${titulo}.${ext}`);
zip.writeZip(zipPath);

await conn.sendMessage(from, {
document: fs.readFileSync(zipPath),
mimetype: 'application/zip',
fileName: `${titulo}.zip`
}, { quoted: selo });

} else if (isVideo) {
const s = String(data.size || '').toUpperCase();
const forceDoc = uQual >= 1080 || s.includes('GB') || (s.includes('MB') && parseFloat(s) > 90);

if (forceDoc) {
await conn.sendMessage(from, {
document: { url: dlUrl },
mimetype: 'video/mp4',
fileName: `${titulo}.${ext}`
}, { quoted: selo });
} else {
await conn.sendMessage(from, {
video: { url: dlUrl },
caption: `🎬 *${titulo}*`
}, { quoted: selo });
}

} else {
await conn.sendMessage(from, {
audio: { url: dlUrl },
mimetype: 'audio/mp4',
fileName: `${titulo}.opus`,
ptt: false
}, { quoted: selo });
}

await conn.sendMessage(from, { react: { text: '✅', key: info.key } });

} finally {
[filePath, zipPath].forEach(p => {
if (p && fs.existsSync(p)) fs.unlinkSync(p);
});
}

} catch (e) {
console.error('[DLP ERROR]', e);
await conn.sendMessage(from, { react: { text: '❌', key: info.key } });
reply('_Erro ao processar o download._');
}
break;
}

case 'moeda':
case 'caraoucoroa': {
try {
await conn.sendMessage(from, { react: { text: '🪙', key: info.key } });

const { data } = await axios.get('https://systemzone.store/api/canvas/moeda');

if (!data?.status || !data?.result?.download) {
throw new Error('API falhou');
}

await conn.sendMessage(from, {
video: { url: data.result.download },
ptv: true,
mimetype: 'video/mp4'
}, { quoted: selo });

} catch (e) {
console.error('[ERRO MOEDA]', e?.response?.data || e.message);
reply('_Erro ao jogar a moeda._');
}
break;
}

case 'textcraft': {
try {
if (!q) return reply(`Exemplo: ${prefix + command} Mine/mine2/mine3`);

const [t1, t2, t3] = q.split('/');

const api = `https://systemzone.store/api/v1/canvas/minecrafttext?text=${encodeURIComponent(t1 || '')}&text2=${encodeURIComponent(t2 || '')}&text3=${encodeURIComponent(t3 || '')}`;

const { data } = await axios.get(api);

if (!data?.status || !data?.url) {
return reply('_Erro ao gerar textcraft._');
}

await conn.sendMessage(from, {
image: { url: data.url },
caption: '> _Zyron-MD & Zyron-AI_'
}, { quoted: selo });

} catch (e) {
console.error('[ERRO TEXTCRAFT]', e?.response?.data || e.message);
reply('_Erro ao gerar textcraft._');
}
break;
}

case 'botinfo': {
reply(`🤖 *BOT INFO*

Nome: Zyron-MD
Descrição: 
🤖 Zyron-MD & Zyron-AI

O Zyron-MD é um poderoso bot multifuncional para WhatsApp, desenvolvido pela Gzee Studio Crew, projetado para oferecer desempenho, segurança e praticidade em um único sistema.

Equipado com a tecnologia Zyron-AI, o bot é capaz de responder perguntas, auxiliar usuários, executar comandos administrativos, fornecer ferramentas de entretenimento, downloads, utilidades e diversas funções avançadas para grupos e uso privado.

🔥 Recursos Principais
• Inteligência Artificial integrada (Zyron-AI)
• Sistema rápido e otimizado
• Comandos administrativos completos
• Ferramentas para grupos e comunidades
• Downloads de mídias e conteúdos
• Sistema de informações e utilidades
• Segurança e estabilidade avançadas
• Atualizações constantes

🚀 Missão
Entregar uma experiência moderna, eficiente e inteligente para administradores, membros e comunidades do WhatsApp.

💻 Desenvolvido por: GzeeScriptsDev
🏢 Empresa: Gzee Studio Crew
🌐 Site Oficial: https://gzee-scripts-dev.github.io/Site-NXR/

⚖️ © 2026 Gzee Studio Crew — Todos os direitos reservados.

Status: Online ✅
Plataforma: WhatsApp Bot
Sistema: Node.js
Versão: 2.4`)
}
break;

case 'criador': {
reply(`\`\`\`
╭━━━━━━〔 🔥 GZEE SCRIPTS DEV 🔥 〕━━━━━━╮

👑 Criador: GzeeScriptsDev
🤖 Projeto: Zyron-MD
⚡ IA: Zyron-AI

🌐 Site Oficial:
https://gzee-scripts-dev.github.io/Site-NXR/

📞 Suporte Comercial:
https://wa.me/message/FO4NMGVGHVUCI1

© 2026 Todos os direitos reservados
® Gzee Studio Crew

╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
\`\`\``)
}
break;

case 'avaliar': {
if(!q) return reply(`⭐ Use: ${prefix}avaliar mensagem`)
reply(`⭐ *AVALIAÇÃO*

Mensagem: ${q}
Nota: ${Math.floor(Math.random() * 10)}/10`)
}
break;

case 'bug': {
if(!q) return reply(`🐞 Use: ${prefix}bug descrição do bug`)
reply(`🐞 *BUG REPORTADO*

Descrição: ${q}
Status: Enviado para análise ✅`)
}
break;

case 'status': {
reply(`📊 *STATUS DO BOT*

🟢 Online
⚡ Funcionando normalmente
🛡️ Sistema estável
📡 Conexão ativa`)
}
break;

case 'uptime': {
const uptime = process.uptime()
const h = Math.floor(uptime / 3600)
const m = Math.floor((uptime % 3600) / 60)
const s = Math.floor(uptime % 60)

reply(`⏳ *UPTIME*

🕒 Ativo há:
${h}h ${m}m ${s}s`)
}
break;

case 'versao': {
reply(`📦 *VERSÃO DO SISTEMA*

ZYRON-MD
Versão: 2.4
Build: stable-release`)
}
break;

case '8d': {

const path = require('path')
const { exec } = require('child_process')
const { downloadContentFromMessage } = require('@systemzero/baileys')

try {

// ========================
// PEGAR ÁUDIO
// ========================

const quoted = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage

let audioMessage = null

if (quoted?.audioMessage) {
  audioMessage = quoted.audioMessage
}

// ========================
// SEM ÁUDIO
// ========================

if (!audioMessage) {
return reply(`╔══════════════════╗
║ 🎧 AUDIO VIP
╚══════════════════╝

❌ Responda um áudio.

📌 Exemplos:
${prefix}8d 1
${prefix}8d 2
${prefix}8d grave
${prefix}8d demonio
${prefix}8d robot
${prefix}8d nightcore`)
}

// ========================
// REAÇÃO
// ========================

await conn.sendMessage(from, {
react: { text: "🎧", key: info.key }
})

// ========================
// EFEITO
// ========================

const efeito = args[0]?.toLowerCase() || '1'

let filtro = ''
let nome = ''

switch (efeito) {

case '1':
nome = '🎧 8D LEVE'
filtro = 'apulsator=hz=0.08'
break

case '2':
nome = '🔥 8D FORTE'
filtro = 'apulsator=hz=0.12,volume=1.4'
break

case '3':
nome = '💀 8D EXTREMO'
filtro = 'apulsator=hz=0.15,bass=g=15'
break

case 'grave':
nome = '🔊 SUPER GRAVE'
filtro = 'bass=g=20'
break

case 'demonio':
nome = '👹 VOZ DEMÔNIO'
filtro = 'asetrate=44100*0.7,atempo=1.1'
break

case 'robot':
nome = '🤖 VOZ ROBÔ'
filtro = 'afftfilt=real=hypot(re\\,im):imag=0'
break

case 'nightcore':
nome = '⚡ NIGHTCORE'
filtro = 'asetrate=48000*1.25,atempo=1.1'
break

default:
nome = '🎧 8D PADRÃO'
filtro = 'apulsator=hz=0.08'

}

// ========================
// MSG PROCESSO
// ========================

await conn.sendMessage(from, {
text: `╔══════════════════╗
║ 👑 AUDIO VIP
╚══════════════════╝

${nome}

⏳ Processando áudio...`
}, { quoted: selo })

// ========================
// TEMP
// ========================

const tempDir = path.resolve("./temp")
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)

const id = Date.now()
const input = path.join(tempDir, `${id}.ogg`)
const output = path.join(tempDir, `${id}.mp3`)

// ========================
// BAIXAR ÁUDIO
// ========================

const stream = await downloadContentFromMessage(audioMessage, 'audio')

let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

fs.writeFileSync(input, buffer)

// ========================
// FFMPEG
// ========================

// 🔥 suporta Windows e Linux
const ffmpeg = fs.existsSync("./lib/ffmpeg.exe")
  ? "./lib/ffmpeg.exe"
  : "ffmpeg"

// ========================
// EXECUTAR
// ========================

const cmd = `"${ffmpeg}" -y -i "${input}" -af "${filtro}" "${output}"`

exec(cmd, async (err) => {

if (err) {
console.log(err)
return reply('❌ Erro ao aplicar efeito.')
}

try {

if (!fs.existsSync(output)) {
return reply('❌ Áudio não processado.')
}

// ========================
// ENVIAR
// ========================

await conn.sendMessage(from, {
audio: fs.readFileSync(output),
mimetype: 'audio/mpeg',
ptt: false
}, { quoted: selo })

// ========================
// FINAL
// ========================

await conn.sendMessage(from, {
text: `╔══════════════════╗
║ ✅ EFEITO APLICADO
╚══════════════════╝

${nome}

🔥 Áudio processado com sucesso.`
}, { quoted: selo })

// ========================
// LIMPAR
// ========================

if (fs.existsSync(input)) fs.unlinkSync(input)
if (fs.existsSync(output)) fs.unlinkSync(output)

// ========================
// REAÇÃO FINAL
// ========================

await conn.sendMessage(from, {
react: { text: "✅", key: info.key }
})

} catch (e) {
console.log(e)
}

})

} catch (err) {
console.log(err)
reply('❌ Erro no comando 8d.')
}

}
break;

case 'pin':
case 'pinterest': {
try {

if (!q) return reply(`Uso: ${prefix}${command} <termo> [qtd]\nEx: ${prefix}${command} gato 6`);

const args = q.trim().split(/\s+/);

let limit = 6;
if (/^\d+$/.test(args[args.length - 1])) {
    limit = Math.max(1, Math.min(10, parseInt(args.pop(), 10)));
}

const query = args.join("");

// 🔎 REAÇÃO
await reagir(from, "🔎");

// 📡 API

const { data } = await axios.get(
    `${sysite}/api/pinterest`,
    {
        params: { q: query, limit: 50 },
        timeout: 120000
    }
);

const results = Array.isArray(data?.results) ? data.results : [];

if (!results.length) {
    await reagir(from, "❌");
    return reply("Nenhum resultado encontrado.");
}

// 📦 BAILEYS IMPORTS

const cards = [];

// 🖼️ CARDS
for (let i = 0; i < Math.min(limit, results.length); i++) {

    const img = results[i]?.image_url;
    if (!img) continue;

    const media = await prepareWAMessageMedia(
        { image: { url: img } },
        { upload: conn.waUploadToServer }
    );

    cards.push({
        header: {
            title: `📌 Pinterest • ${query} (${i + 1}/${limit})`,
            hasMediaAttachment: true,
            imageMessage: media.imageMessage
        },
        body: {
            text: "Toque nos botões abaixo 👇"
        },
        nativeFlowMessage: {
            buttons: [
                {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Abrir imagem",
                        url: img
                    })
                },
                {
                    name: "cta_copy",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Copiar URL",
                        copy_code: img
                    })
                }
            ]
        }
    });
}

// 📤 MESSAGE FINAL
const msg = generateWAMessageFromContent(from, {
    viewOnceMessage: {
        message: {
            interactiveMessage: {
                header: { title: "📌 Pinterest Search" },
                body: {
                    text: `🔎 Pesquisa: *${query}*\n🖼️ Resultados: *${cards.length}*`
                },
                footer: {
                    text: `${NomeBot} 🚀`
                },
                carouselMessage: { cards }
            }
        }
    }
}, { userJid: conn.user.id });

// 🚀 ENVIO
await conn.relayMessage(from, msg.message, { messageId: msg.key.id });

// ✅ FINAL
await reagir(from, "✅");

} catch (e) {
console.log("Erro pinterest:", e);

await reagir(from, "❌");
reply("❌ Erro ao buscar imagens no Pinterest.");
}
}
break;

case 'play_video': {
try {
if (!q.trim()) return reply("*_Cadê o nome ou link do YouTube irmão?_*");
await reagir(from, "🔍");
await reply(msg.Download);
await play_video(q, conn, from, info, quoted, ShizukuStile);
await reagir(from, "✅");
} catch (e) {
console.log("❌ ERRO PLAY_VIDEO:", e);
await reagir(from, "❌");
reply(`Erro ao buscar resultados\n\n${e.message}`);
}
}
break;

//DOWNLOADS
case 'playdl': {
try {
if (!q) return reply(`Exemplo: ${prefix + command} [link-youtube]`);

await reagir(from, "⏳");

const { data: res } = await axios.get(`${sysite}/v2/player`, {
  params: {
    text: q,
    apikey: syskey
  }
});

if (!res || !res.status) 
  return reply('Erro ao baixar música.');

await conn.sendMessage(from, {
  audio: { url: res.download_url },
  mimetype: 'audio/mpeg',
  fileName: `${res.title}.mp3`,
  
}, { quoted: selo });

await reagir(from, "✅");

} catch (e) {
console.log(e);
await reagir(from, "❌");
reply('Erro ao processar download do YouTube.');
}
}
break;

case 'spotify': {
    if (!q) return reply(`Exemplo: ${prefix}${command} Slash Inferno`);
    await reagir(from, "🔍");
    
    try {
        const { data: res } = await axios.get(`${sysite}/api/search/spotify`, {
            params: { q: q, limit: 10, apikey: syskey }
        });
 
        if (!res?.result?.length) return reply('❌ Nenhum resultado encontrado.');
 
        await conn.sendMessage(from, {
            interactiveMessage: {
                title: `╔━᳀『 Sᴘᴏᴛɪғʏ Sᴇᴀʀᴄʜ 』═᳀\n⌬ *Busca:* ${q}\n⌬ *Resultados:* ${res.result.length}\n╚═━═━═━═━═━═━═━═━═᳀`,
                footer: "© Zyron-MD",
                thumbnail: res.result[0].thumb,
                nativeFlowMessage: {
                    buttons: [{
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                         title: "🎵 Selecionar Música",
                        sections: [{
                          title: "Resultados do Spotify",
                        rows: res.result.map((t, i) => ({
                          title: `${i + 1}. ${t.title}`,
                        description: `${t.artists} | ⏱ ${t.duration}`,
                          id: `${prefix}spotify2 ${t.url}`
             }))
           }]
           })
          }]
         }
        }
       }, { quoted: selo });
    } catch (e) {
        reply('❌ Erro ao buscar no Spotify.');
    }
}
break;
 
case 'spotify2': {
    if (!q) return reply(`Exemplo: ${prefix}${command} [link-spotify]`);
    await reagir(from, "⏳");
    try { const { data: res } = await axios.get(`${sysite}/api/v1/spotify`, {
          params: { text: q, apikey: syskey }
        });
        if (!res?.status) throw new Error('Falha API');
        await conn.sendMessage(from, { 
            audio: { url: res.download_url.replace(/^http:\/\//i, 'https://') }, 
            mimetype: 'audio/mpeg', 
            fileName: `${res.title}.mp3` 
        }, { quoted: selo });
        await reagir(from, "✅");
    } catch (e) {
        await reagir(from, "❌");
    }
}
break;

case 'suicidio':
case 'sair':
case 'autoexpulsar': {
    await reagir(from, "🚪")

    if (!isGroup) return reply("Só funciona em grupo.");
    if (!isBotGroupAdmins) return reply("Preciso ser admin.");

    await reply(`🚪 ${pushname} pediu pra sair... flw 😂`);

    await sleep(1500)

    await conn.groupParticipantsUpdate(from, [sender], 'remove')
}
break;

case 'ttkdl':
case 'tiktokdl': {
try {
if (!q?.trim()) return reply("*_Cadê o link do vídeo?_*")
if (!SoLink) return reply("*_Apenas links_*")
await reply(msg.Download)
await ttkdl(q, conn, from, info, quoted, ShizukuStile, sysite, syskey)
await reagir(from, "✅")
} catch (e) {
console.log(e)
reply("Erro ao baixar vídeo!")
}
}
break;

case 'instadl': {
try {
if (!q.trim()) return reply("*_Cadê o link do vídeo do Instagram?_*");
if (!SoLink) return reply("*_Apenas links_*");
await reply(msg.Download);
await instadl(q, conn, from, info, quoted, ShizukuStile);
await reagir(from, "✅");
} catch (e) {
reply("Erro ao buscar resultados");
}
}
break;

case 'tiktoksearch':
case 'searchtiktok':
case 'tts': {//✧･ﾟ: ᴅᴇᴠʟᴀʙ ✧･ﾟ:
try {


if (!q) return reply(`⚠️ *ᴇxᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ:* ${prefix + command} mc kevin`);

// 🔍 REAÇÃO
await reagir(from, '🔍');

// 📡 REQUEST
const resu = await axios({
method: "POST",
url: "https://tikwm.com/api/feed/search",
headers: {
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'Accept': 'application/json, text/javascript, */*; q=0.01',
'X-Requested-With': 'XMLHttpRequest',
'User-Agent': 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/130.0.0.0 Mobile Safari/537.36',
'Referer': 'https://www.tikwm.com/'
},
data: {
keywords: q,
count: 12,
cursor: 0,
web: 1,
hd: 1
}
});

const videos = resu.data?.data?.videos;

if (!videos || videos.length === 0) {
await reagir(from, "❌");
return reply('❌ *ɴᴇɴʜᴜᴍ ᴠɪ́ᴅᴇᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ*');
}

// 🎲 RANDOM VIDEO
const data = videos[Math.floor(Math.random() * videos.length)];

// 📤 SEND VIDEO
await conn.sendMessage(from, {
video: { url: `https://tikwm.com${data.play}` },
caption:
`🎬 *ᴛɪᴋᴛᴏᴋ sᴇᴀʀᴄʜ*

📌 *ᴛɪ́ᴛᴜʟᴏ:* ${data.title || 'sᴇᴍ ᴛɪ́ᴛᴜʟᴏ'}
⏱️ *ᴅᴜʀᴀᴄ̧ᴀ̃ᴏ:* ${data.duration || 0}s
👤 *ᴀᴜᴛᴏʀ:* ${data.author?.nickname || 'ᴅᴇsᴄᴏɴʜᴇᴄɪᴅᴏ'}`
}, { quoted: selo });

// ✅ REAÇÃO FINAL
await reagir(from, "✅");

} catch (e) {
console.log(e);

await reagir(from, "❌");
reply('❌ *ᴇʀʀᴏ ᴀᴏ ʙᴜsᴄᴀʀ ᴠɪ́ᴅᴇᴏ*');
}
}
break;//✧･ﾟ: ᴅᴇᴠʟᴀʙ ✧･ﾟ:

case 'clima':
case 'tempo': {
try {

// 📡 REAÇÃO
await reagir(from, "📡");

// ❌ SEM ARG
if (!q) {
return reply(`*Sintaxe correta:* ${prefix + command} nome da cidade\n• Retire acentos se necessário`);
}

// 📡 API

const clima = await axios.get(
`https://api.openweathermap.org/data/2.5/weather`, {
params: {
q: q,
appid: "f5c0840c2457fbb64188a6d4be05618f",
units: "metric",
lang: "pt_br"
}
});

// ❌ ERRO API
if (!clima?.data || clima.data.cod !== 200) {
await reagir(from, "❌");
return reply("❌ Cidade não encontrada.");
}

// 📊 DADOS
const d = clima.data;

const texto =
`🌞 *Temperatura:* ${d.main.temp}ºC
🏙️ *Cidade:* ${d.name}
🔥 *Máxima:* ${d.main.temp_max}ºC
❄ *Mínima:* ${d.main.temp_min}ºC
🌦 *Clima:* ${d.weather[0].description}
💧 *Umidade:* ${d.main.humidity}%
🌫 *Vento:* ${d.wind.speed} m/s

👤 *Solicitado por:* ${pushname}`;

// 📤 ENVIO
await conn.sendMessage(from, {
text: texto
}, { quoted: selo });

// ✅ FINAL
await reagir(from, "✅");

} catch (e) {
console.log("Erro clima:", e);

await reagir(from, "❌");
reply("❌ Erro ao buscar clima.");
}
}
break;

case 'nuke': {
try {

// 🔒 PERMISSÕES
if (!So_Dono) return reply("❌ Apenas meu dono pode usar isso.");
if (!isGroup) return reply("❌ Apenas em grupos.");
if (!isBotGroupAdmins) return reply("❌ Preciso ser admin.");

// ⚠️ REAÇÃO
await reagir(from, "💣");

// 📝 ALTERAR NOME/DESC
await conn.groupUpdateSubject(from, `ARQUIVED BY: ${NickDono}`);
await conn.groupUpdateDescription(from, `Another one for my collection of archived groups 🤷‍♂️\nby ${NickDono}`);

// 🔗 RESET LINK
await conn.groupRevokeInvite(from);

// 📊 METADATA
const groupMetadata = await getGroupMetadataCached(conn, from);
const groupMembers = groupMetadata.participants.map(i => i.id).filter(Boolean);

// 👑 IDs IMPORTANTES
const groupOwnerId = groupMetadata.owner || "";
const donosFixos = [
`${NumberDono}@s.whatsapp.net`,
`${dono1}@s.whatsapp.net`,
`${dono2}@s.whatsapp.net`,
`${dono3}@s.whatsapp.net`,
`${dono4}@s.whatsapp.net`,
`${dono5}@s.whatsapp.net`,
`${dono6}@s.whatsapp.net`
];

// 🚫 NÃO REMOVER
const botId = conn.user.id;

// 🎯 FILTRAR MEMBROS
const membersToRemove = groupMembers.filter(id =>
id !== botId &&
id !== groupOwnerId &&
!donosFixos.includes(id)
);

// ❌ NADA PRA REMOVER
if (membersToRemove.length === 0) {
await reagir(from, "⚠️");
return reply("*Não há ninguém para remover.*");
}

// ⚡ AVISO
await conn.sendMessage(from, {
text: `💣 *NUKE ATIVADO*

Removendo ${membersToRemove.length} membros...`
}, { quoted: selo });

// ⏳ PEQUENO DELAY
await new Promise(r => setTimeout(r, 1000));

// 🚀 REMOVER TODOS
await conn.groupParticipantsUpdate(from, membersToRemove, 'remove');

// ✅ FINAL
await reagir(from, "🔥");

} catch (e) {
console.error("Erro nuke:", e);

await reagir(from, "❌");
reply("❌ Erro ao executar nuke.");
}
}
break;

case 'shazam': {
try {

// 🎧 VERIFICAR ÁUDIO
if ((isMedia && isAudio) || isQuotedAudio) {

await reagir(from, "✨");

let encmedia;

// 📥 PEGAR ÁUDIO
if (isQuotedAudio) {
encmedia = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage;
} else {
encmedia = info.message.audioMessage;
}

// 🔎 IDENTIFICAR MÚSICA
const infoMusica = await identificarMusica(
encmedia,
arcloud,
ytAudio,
DLT_FL,
getRandom,
getExtension,
getFileBuffer
);

// 📝 TEXTO
let txt = mess.shazam(infoMusica).trim();

// 📸 ENVIO CAPA
await conn.sendMessage(from, {
image: { url: infoMusica.thumbYT },
caption: txt
}, { quoted: selo });

// 🎧 ENVIO ÁUDIO (SE TIVER)
if (infoMusica?.infoYT?.download?.url) {

await conn.sendMessage(from, {
audio: { url: infoMusica.infoYT.download.url },
mimetype: "audio/mpeg",
fileName: `${infoMusica.tituloYT || "musica"}.mp3`
}, { quoted: selo });

} else {
reply("❌ Não foi possível baixar o áudio.");
}

// ✅ FINAL
await reagir(from, "✅");

} else {
reply('*ᴍᴀʀǫᴜᴇ ᴜᴍ ᴀᴜᴅɪᴏ 🙇‍♂️*');
}

} catch (e) {
console.log("Erro shazam:", e);

await reagir(from, "❌");
reply("❌ Erro ao identificar música.");
}
}
break;
//METADINHAS
case 'metadinhas': {await reagir(from, "🧑‍🤝‍🧑");
try {await METADINHAS(conn, from, info,quoted, SHIZUKU_KEY, SHIZUKU_SITE);
} catch (e) {reply("Error..") }
} break 

//COMANDOS DE DONO!!
case 'setprefix':
if (!So_Dono) return reply(msg.SoDono);
if (!q) return reply("Digite o novo prefixo. Ex: *!setprefix .*");
const novoPrefix = q.trim();
Config.prefix = novoPrefix;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ Prefixo alterado para: *${novoPrefix}*`);
break;

case 'nick-dono':
if (!So_Dono) return reply(msg.SoDono);
const novaNick = q.trim();
Config.NickDono = novaNick;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ Nick do dono alterado para: *${novaNick}*`);
break;

case 'nome-bot':
if (!So_Dono) return reply(msg.SoDono);
const novoNome = q.trim();
Config.NomeBot = novoNome;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ Nome do bot alterado para: *${novoNome}*`);
break;

case 'novo-dono':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!setdono 551199999999*");
const novoDn = q.split("@")[0] || menc_os2.split("@")[0];
if (novoDn.length < 10) return reply("Número inválido.");
const novoDono = novoDn;
Config.NumberDono = novoDono;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ *Número do dono atualizado!*\nNovo dono: wa.me/${novoDono}`);
break;

case 'dono1':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono1 551199999999*");
const novodn1 = q.split("@")[0] || menc_os2.split("@")[0];
if (novodn1.length < 10) return reply("Número inválido.");
const Dono1 = novodn1;
Config2.dono1 = Dono1;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Pronto mestre!*\n${NomeBot} agora tem um novo dono!\n\n👑 Dono 1: wa.me/${Dono1}`);
break;


case 'dono2':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono2 551199999999*");
const novodn2 = q.split("@")[0] || menc_os2.split("@")[0];
if (novodn2.length < 10) return reply("Número inválido.");
const Dono2 = novodn2;
Config2.dono2 = Dono2;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 2: wa.me/${Dono2}`);
break;


case 'dono3':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono3 551199999999*");
const novodn3 = q.split("@")[0] || menc_os2.split("@")[0];
if (novodn3.length < 10) return reply("Número inválido.");
const Dono3 = novodn3;
Config2.dono3 = Dono3;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 3: wa.me/${Dono3}`);
break;


case 'dono4':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono4 551199999999*");
const novodn4 = q.split("@")[0] || menc_os2.split("@")[0];
if (novodn4.length < 10) return reply("Número inválido.");
const Dono4 = novodn4;
Config2.dono4 = Dono4;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 4: wa.me/${Dono4}`);
break;


case 'dono5':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono5 551199999999*");
const novodn5 = q.split("@")[0] || menc_os2.split("@")[0];
if (novodn5.length < 10) return reply("Número inválido.");
const Dono5 = novodn5;
Config2.dono5 = Dono5;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 5: wa.me/${Dono5}`);
break;


case 'dono6':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono6 5519995729970*");
const novodn6 = q.split("@")[0] || menc_os2.split("@")[0];
if (novodn6.length < 10) return reply("Número inválido.");
const Dono6 = novodn6;
Config2.dono6 = Dono6;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 6: wa.me/${Dono6}`);
break;

case 'botoff':
case 'boton': {
if(!So_Dono) return reply(msg.SoDono);
if(command === 'botoff') {
if (BotOff === true) return reply(`❌ *${NomeBot} já está DESLIGADO, mestre...*`);
Config2.botoff = true;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
return reply(
`⛔ *SISTEMA DESATIVADO*

✅ Somente você poderá usar meus comandos agora.
🕸️ *Zyron entrou no modo Stealth...*`);
}
if(command === 'boton') {
if(BotOff === false) return reply(`⚠️ *${NomeBot} já está ATIVO, mestre!*`);
Config2.botoff = false;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
return reply(
`✅ *SISTEMA REATIVADO*

❤️‍🔥 Todos os usuários agora podem usar meus comandos novamente.
🔥 *Zyron voltou ao centro de operação!*`);
}
}
break;


case 'bangp':
case 'unbangp':
if(!isGroup) return reply(msg.SoEmGrupo)
if(!So_Dono) return reply(msg.SoDono)
if(command == 'bangp'){
if(isBanGrupo) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo banido com sucesso`)
} else {
if(!isBanGrupo) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'reiniciar': case 'r':{
if(!So_Dono) return reply(msg.SoDono)
setTimeout(async () => {
reply("Reiniciando...")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
}
break

case 'donos':
case 'listadonos': {
let texto = `🌌 *LISTA OFICIAL DE DONOS — ${NomeBot}* ❄️

╭━━━━━━━━━━━〔 🔥 DONO PRINCIPAL 🔥 〕━━━━━━━━━━━━╮
┃
┃ 👑 ${NickDono}
┃ 📞 wa.me/${NumberDono}                                
┃ 🌐 Site oficial: https://gzee-scripts-dev.github.io/Site-NXR/
┃ 📞 Número comercial: https://wa.me/message/FO4NMGVGHVUCI1
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

👑 *Donos Adicionais:*`;

let donos = [
  Config2?.dono1,
  Config2?.dono2,
  Config2?.dono3,
  Config2?.dono4,
  Config2?.dono5,
  Config2?.dono6
];

donos.forEach((dono, i) => {
  if(dono && dono !== "undefined" && dono !== "") {
    texto += `\n👑 Dono ${i+1}: wa.me/${dono}`;
  }
});

texto += `

━━━━━━━━━━━━━━━━━━
> *${NomeBot}: Quero matar o Gzee Scripts Dev </>* 🔥
`;

conn?.sendMessage(from, {image: FotoMenu, caption: texto}, {quoted: info});
}
break;

case 'verificado':
if(!So_Dono) return reply(msg.SoDono)
if(!isVerificado) {
Config2.verificado = true
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`O verificado foi Ativado`)
} else if(isVerificado) {
Config2.verificado = false
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`O verificado foi Desativado`)
}
break

case 'totalcases':
try {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
const cont = caseNames.length;
await reply(`${cont}`)
} catch (error) {
console.log(error)
reply("Erro ao obter o total de comandos");
}
break;

case 'cases':
if(!So_Dono) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("Nenhuma case encontrada.") } }
conn.sendMessage(from, { text: listCases() }, { quoted: selo });
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao obter as cases.') }
break

case 'getcase': {
  if (!So_Dono) return reply('❌ Apenas o dono pode usar.')

  if (!q) {
    return reply(`❌ Exemplo:
${prefix + command} menu`)
  }

  try {

    const path = './index.js'
    const data = fs.readFileSync(path, 'utf8')

    const regex = new RegExp(
      `case ['"]${q}['"]:(.*?)break`,
      'gs'
    )

    const match = regex.exec(data)

    if (!match) {
      return reply('❌ Case não encontrada.')
    }

    return reply(`${match[0]}break`)

  } catch (e) {
    console.log('❌ Erro no getcase:', e)
    return reply('❌ Erro ao pegar a case.')
  }
}
break;


//OUTROS COMANDOS INFORMATIVOS 
case 'ping': {
try {

const msgPing = await conn.sendMessage(
from,
{
text: `🏓 *PING*

██░░░░░░░░░░ 17%
⏳ Conectando...`
},
{ quoted: selo }
);

const key = msgPing.key;

const frames = [
['██░░░░░░░░░░ 17%', '⏳ Conectando...'],
['████░░░░░░░░ 33%', '⏳ Coletando dados...'],
['██████░░░░░░ 50%', '⏳ Analisando sistema...'],
['████████░░░░ 67%', '⏳ Calculando RAM...'],
['██████████░░ 83%', '⏳ Gerando resultado...'],
['████████████ 100%', '✅ Concluído!']
];

for (const [barra, status] of frames) {
await new Promise(r => setTimeout(r, 250));

await conn.sendMessage(from, {
text: `🏓 *PING*

${barra}
${status}`,
edit: key
});
}

const uptime = process.uptime();
const r = (Date.now() / 1000) - info.messageTimestamp;

const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const usedPercent = (usedMem / totalMem) * 100;

const totalRamGB = (totalMem / 1024 / 1024 / 1024).toFixed(2);
const freeRamGB = (freeMem / 1024 / 1024 / 1024).toFixed(2);
const usedRamGB = (usedMem / 1024 / 1024 / 1024).toFixed(2);

const texto = `🏓 *STATUS PING - ZYRON AI*

👤 Usuário: ${pushname}
⏰ Tempo Online: ${kyun(uptime)}

⚡ Velocidade:
${r.toFixed(3)}s

📊 RAM Total:
${totalRamGB} GB

📉 RAM Usada:
${usedRamGB} GB

📈 RAM Livre:
${freeRamGB} GB

🧾 Uso do Sistema:
${usedPercent.toFixed(1)}%`;

const media = await prepareWAMessageMedia(
{ image: FotoMenu },
{ upload: conn.waUploadToServer }
);

const botoes = [
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "🔁 Atualizar",
id: `${prefix}ping`
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "📋 Menu",
id: `${prefix}menu`
})
}
];

const card = {
header: {
hasMediaAttachment: true,
imageMessage: media.imageMessage
},
headerType: "IMAGE",
body: {
text: texto
},
footer: {
text: "Zyron-AI ❤️‍🔥"
},
nativeFlowMessage: {
buttons: botoes
}
};

await conn.relayMessage(
from,
{
interactiveMessage: {
carouselMessage: {
cards: [card]
}
}
},
{ quoted: selo }
);

} catch (e) {
console.log(e);
reply("❌ Erro ao mostrar o ping.");
}
}
break;

//PLAQUINHAS 
case 'plaq1':
case 'plaq2':
case 'plaq3':
case 'plaq4':
case 'plaq5':
case 'plaq6':
case 'plaq7':
case 'plaq8':
case 'plaq9':
case 'plaq10':
case 'plaq11': {
try {
const path = require('path');

const videoPath = path.join(process.cwd(), 'videos', `${command}.mp4`);

if (!fs.existsSync(videoPath)) {
return reply(`❌ Vídeo não encontrado:\n/videos/${command}.mp4`);
}

await reply(`⌛ Enviando o vídeos no seu PV safadinho...`);

await conn.sendMessage(sender, {
video: fs.readFileSync(videoPath),
caption: `✅ Aqui está o vídeo da *${command}*`,
mimetype: 'video/mp4'
}, { quoted: selo });

if (isGroup) {
await conn.sendMessage(from, {
react: { text: '✅', key: info.key }
});
}

} catch (e) {
console.log('[ERRO PLAQ VIDEO]', e);
reply('❌ Erro ao enviar o vídeo no PV.');
}
break;
}

//FIGURINHAS 
case 'figu_raiva':
case 'figu_roblox':
case 'figu_engracada':
case 'figu_memes':
case 'figu_anime':
case 'figu_coreana':
case 'figu_bebe':
case 'figu_desenho':
case 'figu_animais':
case 'figu_flork':
case 'figu_emoji': {
try {
const path = require('path');

const qtd = Number(q);

if (!qtd) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix + command} 5`);
if (qtd >= 20) return reply('Coloque abaixo de 20..');

const categoria = command.replace('figu_', '');
const pasta = path.join(process.cwd(), 'stickers', categoria);

if (!fs.existsSync(pasta)) {
return reply(`A pasta stickers/${categoria} não existe.`);
}

const arquivos = fs.readdirSync(pasta).filter(file => file.endsWith('.webp'));

if (arquivos.length < 1) {
return reply(`Não tem figurinhas .webp no datacenter/${categoria}.`);
}

await reply(isGroup
? `⌛ | *_Estou enviando ${qtd} figurinhas no seu PV, aguarde..._*`
: `⌛ | *_Enviando..._*`
);

await conn.sendMessage(from, {
react: { text: '❤️‍🔥', key: info.key }
});

for (let i = 0; i < qtd; i++) {
await sleep(1000);

const aleatoria = arquivos[Math.floor(Math.random() * arquivos.length)];
const caminho = path.join(pasta, aleatoria);

await conn.sendMessage(sender, {
sticker: fs.readFileSync(caminho)
}, { quoted: selo });
}

} catch (e) {
console.log('[ERRO FIGU CATEGORIA]', e);
reply('Erro ao enviar figurinhas.');
}
break;
}

case 'figurinhas':
case 'figuale': {
try {
const path = require('path');

const qtd = Number(q);

if (!qtd) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix + command} 5`);

if (qtd >= 20) return reply('Coloque abaixo de 20..');

const pasta = path.join(process.cwd(), 'stickers');

if (!fs.existsSync(pasta)) {
return reply('A pasta stickers não existe.');
}

const arquivos = fs.readdirSync(pasta).filter(file => file.endsWith('.webp'));

if (arquivos.length < 1) {
return reply('Não tem figurinhas .webp no datacenter.');
}

await reply(isGroup
? `⌛ | *_Estou enviando ${qtd} figurinhas no seu PV, aguarde..._*`
: `⌛ | *_Enviando..._*`
);

await conn.sendMessage(from, {
react: { text: '🔥', key: info.key }
});

for (let i = 0; i < qtd; i++) {
await sleep(1000);

const aleatoria = arquivos[Math.floor(Math.random() * arquivos.length)];
const caminho = path.join(pasta, aleatoria);

await conn.sendMessage(sender, {
sticker: fs.readFileSync(caminho)
}, { quoted: selo });
}

} catch (e) {
console.log('[ERRO FIGURINHAS]', e);
reply('Erro ao enviar figurinhas.');
}
break;
}

case 'nick':
case 'fazernick': {
  try {
    if (!q) return reply('❌ Digite um nick');

    const n = q;

    const estilos = [
      { nome: "Negrito",      texto: `𝐀𝐁𝐂: ${n.split('').map(c => '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Itálico",      texto: `𝘼𝘽𝘾: ${n.split('').map(c => '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Gótico",       texto: `𝔄𝔅ℭ: ${n.split('').map(c => '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Duplo",        texto: `𝔸𝔹ℂ: ${n.split('').map(c => '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Fancy",        texto: `ᖴᗩᑎᑕY: ${n}` },
      { nome: "Negrito Itál", texto: `𝑨𝑩𝑪: ${n.split('').map(c => '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Cursivo",      texto: `𝒜ℬ𝒞: ${n.split('').map(c => '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Monospace",    texto: `𝙰𝙱𝙲: ${n.split('').map(c => '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Círculo",      texto: `Ⓐ: ${n.split('').map(c => 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Quadrado",     texto: `🄰: ${n.split('').map(c => '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉'['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(c.toUpperCase())] || c).join('')}` },
      { nome: "Small Caps",   texto: `ᴀʙᴄ: ${n.toLowerCase().split('').map(c => 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ'['abcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Invertido",    texto: `∀: ${n.split('').map(c => 'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz'['abcdefghijklmnopqrstuvwxyz'.indexOf(c.toLowerCase())] || c).join('').split('').reverse().join('')}` }
    ];

    // função de conversão real
    const converter = (str, alfabeto) => {
      const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      return str.split('').map(c => {
        const i = base.indexOf(c);
        return i !== -1 ? alfabeto[i] : c;
      }).join('');
    };

    const alfabetos = {
      negrito:     [...'𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳'],
      italico:     [...'𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻'],
      gotico:      [...'𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷'],
      duplo:       [...'𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫'],
      negbold:     [...'𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛'],
      cursivo:     [...'𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏'],
      mono:        [...'𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣'],
      smallcaps:   [...'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ'],
    };

    const nicks = {
      negrito:   converter(n, alfabetos.negrito),
      italico:   converter(n, alfabetos.italico),
      gotico:    converter(n, alfabetos.gotico),
      duplo:     converter(n, alfabetos.duplo),
      negbold:   converter(n, alfabetos.negbold),
      cursivo:   converter(n, alfabetos.cursivo),
      mono:      converter(n, alfabetos.mono),
      smallcaps: converter(n, alfabetos.smallcaps),
      fancy:     n.split('').join('꧁꧂').replace('꧁꧂', ' '),
      circulo:   n.split('').map(c => 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join(''),
      quadrado:  n.toUpperCase().split('').map(c => '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉'['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(c)] || c).join(''),
      invertido: n.toLowerCase().split('').map(c => 'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz'['abcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('').split('').reverse().join('')
    };

    await conn.sendMessage(from, {
      interactiveMessage: {
        title: `🎨 Nick: ${n}`,
        footer: `© ${NickDono} • Toque para copiar`,
        nativeFlowMessage: {
          messageParamsJson: JSON.stringify({
            bottom_sheet: {
              in_thread_buttons_limit: 3,
              list_title: "🎨 Estilos de Nick",
              button_title: "Ver estilos"
            }
          }),
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "🎨 Escolha e copie",
                sections: [
                  {
                    title: "✍️ Estilos disponíveis",
                    rows: [
                      { title: "𝐍𝐞𝐠𝐫𝐢𝐭𝐨",       description: nicks.negrito,   id: `nick_neg`   },
                      { title: "𝘐𝘵𝘢́𝘭𝘪𝘤𝘰",       description: nicks.italico,   id: `nick_ita`   },
                      { title: "𝔾ó𝕥𝕚𝕔𝕠",        description: nicks.gotico,    id: `nick_got`   },
                      { title: "𝔸𝔹ℂ Duplo",      description: nicks.duplo,     id: `nick_dup`   },
                      { title: "𝑵𝒆𝒈 𝑰𝒕𝒂́𝒍",     description: nicks.negbold,   id: `nick_nit`   },
                      { title: "𝒞𝓊𝓇𝓈𝒾𝓋𝑜",      description: nicks.cursivo,   id: `nick_cur`   },
                      { title: "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎",    description: nicks.mono,      id: `nick_mon`   },
                      { title: "ꜱᴍᴀʟʟ ᴄᴀᴘs",   description: nicks.smallcaps, id: `nick_sml`   },
                      { title: "Ⓒ í𝐫𝐜𝐮𝐥𝐨",     description: nicks.circulo,   id: `nick_cir`   },
                      { title: "🄱 Quadrado",     description: nicks.quadrado,  id: `nick_qua`   },
                      { title: "ɹoʇɐɹǝʌuI",     description: nicks.invertido, id: `nick_inv`   },
                    ]
                  }
                ]
              })
            },
            {
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "📋 Copiar Negrito",
                copy_code: nicks.negrito
              })
            },
            {
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "📋 Copiar Gótico",
                copy_code: nicks.gotico
              })
            }
          ]
        }
      }
    }, { quoted: selo });

    // manda também no chat pra ver todos
    await reply(
`🎨 *GERADOR DE NICK* — ${n}

𝐍𝐞𝐠𝐫𝐢𝐭𝐨: ${nicks.negrito}
𝘐𝘵𝘢́𝘭𝘪𝘤𝘰: ${nicks.italico}
𝔾ó𝕥𝕚𝕔𝕠: ${nicks.gotico}
𝔸𝔹ℂ: ${nicks.duplo}
𝑵𝒆𝒈 𝑰𝒕𝒂́𝒍: ${nicks.negbold}
𝒞𝓊𝓇𝓈𝒾𝓋𝑜: ${nicks.cursivo}
𝙼𝚘𝚗𝚘: ${nicks.mono}
ꜱᴍᴀʟʟ: ${nicks.smallcaps}
Ⓒírculo: ${nicks.circulo}
🄱Quadrado: ${nicks.quadrado}
ɹoʇɐɹǝʌuI: ${nicks.invertido}`
    );

  } catch (e) {
    console.error(e);
    reply('❌ Erro ao gerar nick.');
  }
}
break;


case 'ativar': {
if(!isGroupAdmins || !So_Dono) return reply(msg.SoAdmins);
  try {
const fotogp = await conn.profilePictureUrl(from, 'image')
const fotogpt = await getBuffer(fotogp).catch(_ => FotoMenu)

    const media = await prepareWAMessageMedia(
      { image: fotogpt },
      { upload: conn.waUploadToServer }
    );

    const texto = `*SISTEMAS DO GRUPO*

Selecione o sistema que deseja ativar:`

    const botoes = [
      {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "Gerenciar Sistemas",
          sections: [
            {
              title: "Funções",
              rows: [
                { title: "Anti - link", id: `${prefix}antilink 1` },
                { title: "Bem - vindo 1", id: `${prefix}bemvindo 1` },
                { title: "So Admins", id: `${prefix}so_adm 1`}
              ]
            }
          ]
        })
      }
    ];

    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      footer: { text: "Zyron-AI" },
      nativeFlowMessage: { buttons: botoes }
    };

    await conn.relayMessage(from, {
      interactiveMessage: {
        carouselMessage: { cards: [card] },
        body: { text: "Escolha um sistema 👇" }
      }
    }, {})

  } catch (e) {
    console.log(e)
    reply("Erro ao mostrar sistemas.")
  }
}
break;

case 'desativar': {
if(!isGroupAdmins || !So_Dono) return reply(msg.SoAdmins);
  try {
const fotogp = await conn.profilePictureUrl(from, 'image')
const fotogpt = await getBuffer(fotogp).catch(_ => FotoMenu)

 const media = await prepareWAMessageMedia(
      { image: fotogpt },
      { upload: conn.waUploadToServer }
    );

    const texto = `*SISTEMAS DO GRUPO*

Selecione o sistema que deseja desativar:`

    const botoes = [
      {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "Gerenciar Sistemas",
          sections: [
            {
              title: "Funções",
              rows: [
                { title: "Anti - link", id: `${prefix}antilink 0` },
                { title: "Bem - vindo 1", id: `${prefix}bemvindo 0` },
                { title: "So Admins", id: `${prefix}so_adm 0`}
              ]
            }
          ]
        })
      }
    ];

    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      footer: { text: "Zyron-AI" },
      nativeFlowMessage: { buttons: botoes }
    };

    await conn.relayMessage(from, {
      interactiveMessage: {
        carouselMessage: { cards: [card] },
        body: { text: "Escolha um sistema 👇" }
      }
    }, {})

  } catch (e) {
    console.log(e)
    reply("Erro ao mostrar sistemas.")
  }
}
break;

case 'pack': {
try {
if (!q) return reply(`Uso: ${prefix}pack <tema>\nEx: ${prefix}pack patos`);

await conn.sendMessage(from, { react: { text: '🔍', key: info.key } });

const { data } = await axios.post(
'https://systemzone.store/api/v1/stickerly/search',
{ q },
{ timeout: 20000 }
);

if (!data?.status || !data?.resultados?.length) {
return reply(`Nenhum pack encontrado para "${q}".`);
}

const firstPack = data.resultados[0];

await reply(`Encontrado: *${firstPack.name}*\nBaixando e enviando as figurinhas...`);

const { data: dlData } = await axios.post(
'https://systemzone.store/api/v1/stickerly/download',
{ url: firstPack.shareUrl },
{ timeout: 30000 }
);

if (!dlData?.status || !dlData?.resultado?.stickers?.length) {
return reply('Falha ao baixar os dados do pacote.');
}

const pack = dlData.resultado;
const stickers = pack.stickers.slice(0, 30);

await conn.sendMessage(from, { react: { text: '🚀', key: info.key } });

let enviados = 0;

for (let i = 0; i < stickers.length; i++) {
try {
const url = stickers[i].url;

const stickerRes = await axios.get(url, {
responseType: 'arraybuffer',
timeout: 20000
});

let buffer = Buffer.from(stickerRes.data);

if (url.endsWith('.png')) {
try {
const sharp = require('sharp');

buffer = await sharp(buffer)
.resize(512, 512, {
fit: 'contain',
background: { r: 0, g: 0, b: 0, alpha: 0 }
})
.webp()
.toBuffer();

} catch {
const { exec } = require('child_process');
const crypto = require('crypto');

const tmpIn = `./tmp_stk_${crypto.randomBytes(4).toString('hex')}.png`;
const tmpOut = `./tmp_stk_${crypto.randomBytes(4).toString('hex')}.webp`;

fs.writeFileSync(tmpIn, buffer);

await new Promise((resolve, reject) => {
exec(`ffmpeg -y -i "${tmpIn}" -vf "scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=0x00000000" "${tmpOut}"`, err => {
if (err) reject(err);
else resolve();
});
});

buffer = fs.readFileSync(tmpOut);

if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn);
if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut);
}
}

await conn.sendMessage(from, { sticker: buffer }, { quoted: selo });
enviados++;

await new Promise(r => setTimeout(r, 1500));

} catch (err) {
console.error(`[PACK] Erro na figurinha ${i + 1}:`, err.message);
}
}

await conn.sendMessage(from, { react: { text: '✅', key: info.key } });
reply(`Sucesso! Foram enviadas *${enviados}* figurinhas do pacote *${pack.name || firstPack.name}*.`);

} catch (e) {
console.error('[PACK ERROR]', e);
await conn.sendMessage(from, { react: { text: '❌', key: info.key } });
reply('Erro ao baixar o pack: ' + (e.message || 'desconhecido'));
}
break;
}

case 'rename':
case 'name': {
  try {
    if (!isQuotedSticker) {
      return reply('❌ *ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ ᴘᴀʀᴀ ʀᴇɴᴏᴍᴇᴀʀ.*');
    }

    if (!q) {
      return reply(`❌ *ꜰᴏʀᴍᴀᴛᴏ ɪɴᴠᴀʟɪᴅᴏ!*\n\n📌 Exemplo:\n${prefix + command} Pack/Autor`);
    }

    const [packname, author2] = q.split("/");

    if (!packname || !author2) {
      return reply(`❌ *ᴠᴏᴄᴇ ᴘʀᴇᴄɪꜱᴀ ᴅᴇꜰɪɴɪʀ ᴘᴀᴄᴋ ᴇ ᴀᴜᴛᴏʀ!*\n\n📌 Exemplo:\n${prefix + command} Gzee/Gaspar`);
    }

    await conn.sendMessage(from, { react: { text: "🎭", key: info.key } });

    const { writeExif2 } = require('./DATABASE2/sticker/exif.js');

    // Baixa o sticker da mensagem respondida
    const stickerMsg = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage;
    const stickerBuffer = await getFileBuffer(stickerMsg, 'sticker');

    // Aplica os novos metadados (pack/autor)
    const stickerComExif = await writeExif2(
      { mimetype: 'image/webp', data: stickerBuffer },
      { packname: packname.trim(), author: author2.trim() }
    );

    // Envia
    await conn.sendMessage(from, {
      sticker: stickerFinal
    }, { quoted: selo });

    await conn.sendMessage(from, { react: { text: "✅", key: info.key } });

  } catch (e) {
    console.error(e);
    await conn.sendMessage(from, { react: { text: "❌", key: info.key } });
    reply('❌ *Erro ao renomear figurinha.*');
  }
}
break;

case 'fakemsg':
case 'fakechat': {
  try {
    if (!q || !q.includes('|')) {
      return reply(`❌ *Formato incorreto!*\n\n📌 Exemplo:\n${prefix + command} @user|mensagem fake|sua resposta\n\n💡 *Dica:* Se o nome bugar, *responda* uma mensagem da pessoa em vez de usar o @.`);
    }

    const partes = q.split("|");
    const tarrget = partes[1]?.trim();
    const bott = partes[2]?.trim();

    const ctx = info?.message?.extendedTextMessage?.contextInfo;
    let mentioned = ctx?.mentionedJid?.[0];
    let repliedParticipant = ctx?.participant;
    let repliedStanzaId = ctx?.stanzaId;

    let target = mentioned || repliedParticipant;
    const crypto = require('crypto');
    let stanzaToUse = "BAE5" + crypto.randomBytes(13).toString('hex').toUpperCase();

    // 🔥 A MÁGICA: Se você respondeu a alguém, usamos o ID real da mensagem!
    // Isso força o WhatsApp a puxar o nome e a foto corretos, mesmo se o número estiver oculto (LID).
    if (repliedParticipant && !mentioned) {
        target = repliedParticipant;
        stanzaToUse = repliedStanzaId;
    }

    // Plano B: Extrair número digitado se não houver marcação ou resposta
    if (!target) {
      const numMatch = q.match(/@(\d+)/);
      if (numMatch?.[1]) target = `${numMatch[1]}@s.whatsapp.net`;
    }

    if (!target || !tarrget || !bott) {
      return reply(`❌ *Não consegui identificar o alvo!*\n\n⚠️ Marque a pessoa ou *responda* uma mensagem dela.\n\n📌 Exemplo:\n${prefix + command} @user|mensagem|resposta`);
    }

    // 🔥 TRADUTOR AGRESSIVO: Tenta converter o LID para Número Normal
    if (target.includes('@lid')) {
        const membroInfo = MembrosGP.find(m => m.lid === target || m.id === target);
        // Garante que pegou o número de telefone e não outro código
        if (membroInfo && membroInfo.id && membroInfo.id.includes('@s.whatsapp.net')) {
            target = membroInfo.id; 
        }
    }

    target = jidNormalizedUser(target);

    // Trava para o bot não executar comandos sozinhos
    const prefixosBloqueados = [prefix, "-", "/", "#", "+", ".", "!"];
    if (prefixosBloqueados.some(p => bott.startsWith(p))) {
      return reply('❌ *Não é permitido fazer o bot enviar comandos no fake chat otario.*');
    }

    await reagir(from, "🎭");

    // Envio final com o ID cravado
    await conn.sendMessage(from, {
      text: bott,
      contextInfo: {
        stanzaId: stanzaToUse, // Usa o ID fake, ou o ID real roubado da resposta
        participant: target,
        quotedMessage: {
          conversation: tarrget
        }
      }
    });

    await reagir(from, "✅");

  } catch (e) {
    console.error(e);
    await reagir(from, "❌");
    reply('❌ *Erro ao criar fake chat.*');
  }
}
break;

case 'st':
case 'stk':
case 'sticker':
case 's':
await conn.sendMessage(from, {react: {text: `⌛`, key: info.key}})
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var pack = ` ➲ ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ  ➠\n ➲ ɴᴏᴍᴇ ᴅᴏ ʙᴏᴛ ➠\n ➲ ɴɪᴄᴋ ᴅᴏɴᴏ ➠`
var author2 = ` 「 ${pushname} 」 \n「 ${NomeBot} 」\n「 ${NickDono} 」`
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(conn, from, owgi, selo, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = `➲ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ➠`
var author2 = ` ${pushname}`
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(conn, from, owgi, selo, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
return reply(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando ${prefix+command}`)
}
break

case 'bratvid': {
await conn.sendMessage(from, {react: {text: `🎬`, key: info.key}})

if (!q) return reply(`Exemplo: ${prefix+command} GzeeScriptsDev`)

try {

var pack = `➲ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ➠`
var author2 = ` ${pushname}`

// sua API
const url = `http://node3.tedhost.com.br:3027/bratvid?text=${encodeURIComponent(q)}`

// baixa o vídeo
let buffer = await getBuffer(url)

// envia como figurinha animada
await sendVideoAsSticker2(conn, from, buffer, selo, {
packname: pack,
author: author2
})

} catch (e) {
console.log(e)
reply('❌ Erro ao gerar bratvid.')
}
}
break

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
reply(msg.Download)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
conn.sendMessage(from, {image: buff}, {quoted: selo}).catch(e => {
console.log(e);
reply('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
reply("Erro, tente mais tarde!")
}
break

case 'gay':
case 'feio':
case 'linda':
case 'lindo':
case 'corno':
case 'invejosa':
case 'invejoso':
case 'vesgo':
case 'chata':
case 'chato':
case 'burro': {
try {

const m = info;
const from = info.key.remoteJid;

let user =
info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] ||
info.message?.extendedTextMessage?.contextInfo?.participant ||
info.key.participant ||
info.key.remoteJid;

if (!user) return reply("❌ Marque ou responda alguém.");

const num = user.split("@")[0];
const nomeAlvo = num;
const porcent = Math.floor(Math.random() * 100) + 1;

const caminhos = {
  gay: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/gay.mp4",
  feio: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/feio.mp4",
  linda: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/linda.mp4",
  lindo: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/lindo.mp4",
  corno: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/corno.mp4",
  invejosa: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/invejosa.mp4",
  invejoso: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/invejoso.mp4",
  vesgo: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/vesgo.mp4",
  chata: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/chata.mp4",
  chato: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/chato.mp4",
  burro: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/burro.mp4"
};

const frases = {
  gay: `🏳️‍🌈 @${nomeAlvo} passou no teste supremo e foi detectado com *${porcent}% de gayzisse* 🤯🌈`,
  feio: `🤢 Os cientistas analisaram @${nomeAlvo} e descobriram *${porcent}% de feiura rara* 💀`,
  linda: `😍 A NASA confirmou que @${nomeAlvo} possui *${porcent}% de beleza cósmica* ✨💖`,
  lindo: `😎 @${nomeAlvo} tem *${porcent}% de beleza premium* 🗿🍷`,
  corno: `🐂 Após uma investigação profunda, foi descoberto que @${nomeAlvo} é *${porcent}% corno certificado* 🤠`,
  invejosa: `😒 @${nomeAlvo} acumula impressionantes *${porcent}% de inveja* 📈💅`,
  invejoso: `😒 Os radares detectaram *${porcent}% de inveja* em @${nomeAlvo} 🚨`,
  vesgo: `👀 @${nomeAlvo} está olhando para duas dimensões ao mesmo tempo: *${porcent}% vesgo* 🤣`,
  chata: `🙄 O medidor de paciência explodiu! @${nomeAlvo} atingiu *${porcent}% de chatice* 💥`,
  chato: `🙄 Foi registrado *${porcent}% de chatice extrema* em @${nomeAlvo} ⚠️`,
  burro: `🐴 Segundo os cálculos mais avançados, @${nomeAlvo} possui *${porcent}% de burrice* 📚❌`
};

const caminho = caminhos[command];
const texto = frases[command];

if (caminho && fs.existsSync(caminho)) {
await conn.sendMessage(from, {
  video: fs.readFileSync(caminho),
  gifPlayback: true,
  caption: texto,
  mentions: [user]
}, { quoted: m });
} else {
await conn.sendMessage(from, {
  text: texto + "\n\n❌ Vídeo não encontrado.",
  mentions: [user]
}, { quoted: m });
}

} catch (e) {
console.log(e);
reply("❌ Erro.");
}
}
break;

case 'catalogo': {
try {
  await reagir(from, "🛒")

  const { proto } = baileys

  const imgMenuP = './dono/menus/Foto-menu/img-menu.jpg'
  const imgMenuAdm = './dono/menus/Foto-menu/menu-adm.jpg'
  const imgMenuDono = './dono/menus/Foto-menu/menu-dono.jpg'

  const upload = conn.waUploadToServer

  const carregarImg = async (arquivo) => {
    return await prepareWAMessageMedia(
      { image: fs.readFileSync(arquivo) },
      { upload }
    )
  }

  const mediaP = fs.existsSync(imgMenuP) ? await carregarImg(imgMenuP) : null
  const mediaAdm = fs.existsSync(imgMenuAdm) ? await carregarImg(imgMenuAdm) : mediaP
  const mediaDono = fs.existsSync(imgMenuDono) ? await carregarImg(imgMenuDono) : mediaP

  if (!mediaP) return reply('❌ Imagem do catálogo não encontrada em:\n./dono/menus/Foto-menu/img-menu.jpg')

  const cards = []

  cards.push({
    header: proto.Message.InteractiveMessage.Header.create({
      title: '',
      hasMediaAttachment: true,
      imageMessage: mediaP.imageMessage
    }),
    body: proto.Message.InteractiveMessage.Body.create({
      text: `╭━━〔 🛒 CATÁLOGO ZYRON 〕━━⬣
┃
┃ 🤖 *BOT PERSONALIZÁVEL*
┃ 💰 Valor: R$ 25,00
┃
┃ Bot feito do seu jeito:
┃ nome, menu, comandos, sistemas
┃ e personalização básica.
┃
╰━━━━━━━━━━━━━━⬣`
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
      text: 'Produto 1 • Zyron Store'
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      buttons: [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "🛒 Comprar Bot",
            id: `${prefix}comprar 1`
          })
        }
      ]
    })
  })

  cards.push({
    header: proto.Message.InteractiveMessage.Header.create({
      title: '',
      hasMediaAttachment: true,
      imageMessage: mediaP.imageMessage
    }),
    body: proto.Message.InteractiveMessage.Body.create({
      text: `╭━━〔 🌐 SITE HTML 〕━━⬣
┃
┃ 🌐 *Site HTML*
┃ 💰 Valor: R$ 100,00
┃
┃ Site personalizado em HTML,
┃ ideal para portfólio, loja,
┃ página de vendas ou projeto.
┃
╰━━━━━━━━━━━━━━⬣`
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
      text: 'Produto 2 • Zyron Store'
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      buttons: [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "🛒 Comprar Site",
            id: `${prefix}comprar 2`
          })
        }
      ]
    })
  })

  cards.push({
    header: proto.Message.InteractiveMessage.Header.create({
      title: '',
      hasMediaAttachment: true,
      imageMessage: mediaAdm.imageMessage
    }),
    body: proto.Message.InteractiveMessage.Body.create({
      text: `╭━━〔 📺 STREAMING 〕━━⬣
┃
┃ 📺 *Netflix + Prime 30 Dias*
┃ 💰 Valor: R$ 15,00
┃
┃ Acesso por 30 dias.
┃ Produto entregue após confirmação.
┃
╰━━━━━━━━━━━━━━⬣`
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
      text: 'Produto 3 • Zyron Store'
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      buttons: [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "🛒 Comprar Streaming",
            id: `${prefix}comprar 3`
          })
        }
      ]
    })
  })

  cards.push({
    header: proto.Message.InteractiveMessage.Header.create({
      title: '',
      hasMediaAttachment: true,
      imageMessage: mediaAdm.imageMessage
    }),
    body: proto.Message.InteractiveMessage.Body.create({
      text: `╭━━〔 ☎️ NÚMERO BR 〕━━⬣
┃
┃ ☎️ *Número brasileiro*
┃ 💰 Valor: R$ 15,00
┃
┃ Número nacional para uso
┃ conforme disponibilidade.
┃
╰━━━━━━━━━━━━━━⬣`
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
      text: 'Produto 4 • Zyron Store'
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      buttons: [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "🛒 Comprar Número BR",
            id: `${prefix}comprar 4`
          })
        }
      ]
    })
  })

  cards.push({
    header: proto.Message.InteractiveMessage.Header.create({
      title: '',
      hasMediaAttachment: true,
      imageMessage: mediaP.imageMessage
    }),
    body: proto.Message.InteractiveMessage.Body.create({
      text: `╭━━〔 🎮 GAME PASS 〕━━⬣
┃
┃ 🎮 *Xbox Game Pass*
┃ 💰 Valor: R$ 27,00
┃
┃ Produto para Xbox.
┃ Entrega após confirmação.
┃
╰━━━━━━━━━━━━━━⬣`
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
      text: 'Produto 5 • Zyron Store'
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      buttons: [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "🛒 Comprar Game Pass",
            id: `${prefix}comprar 5`
          })
        }
      ]
    })
  })

  cards.push({
    header: proto.Message.InteractiveMessage.Header.create({
      title: '',
      hasMediaAttachment: true,
      imageMessage: mediaP.imageMessage
    }),
    body: proto.Message.InteractiveMessage.Body.create({
      text: `╭━━〔 📈 REDES SOCIAIS 〕━━⬣
┃
┃ 📈 *IMPULSIONE SUAS REDES*
┃ 💰 A partir de R$ 0,20
┃
┃ Serviços para redes sociais:
┃ seguidores, curtidas, views
┃ e engajamento.
┃
╰━━━━━━━━━━━━━━⬣`
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
      text: 'Produto 6 • Zyron Store'
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      buttons: [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "🛒 Ver impulsionamento",
            id: `${prefix}comprar 6`
          })
        }
      ]
    })
  })

  cards.push({
    header: proto.Message.InteractiveMessage.Header.create({
      title: '',
      hasMediaAttachment: true,
      imageMessage: mediaDono.imageMessage
    }),
    body: proto.Message.InteractiveMessage.Body.create({
      text: `╭━━〔 ❤️ KEYVAULTS 〕━━⬣
┃
┃ ❤️ *KeyVaults Xbox360*
┃ 💰 Valor: R$ 25,00
┃
┃ Produto para Xbox 360.
┃ Consulte disponibilidade.
┃
╰━━━━━━━━━━━━━━⬣`
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
      text: 'Produto 7 • Zyron Store'
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      buttons: [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "🛒 Comprar KeyVault",
            id: `${prefix}comprar 7`
          })
        }
      ]
    })
  })

  cards.push({
    header: proto.Message.InteractiveMessage.Header.create({
      title: '',
      hasMediaAttachment: true,
      imageMessage: mediaAdm.imageMessage
    }),
    body: proto.Message.InteractiveMessage.Body.create({
      text: `╭━━〔 🌍 NÚMEROS 〕━━⬣
┃
┃ 🌍 *Números internacionais*
┃ 💰 A partir de R$ 3,00
┃
┃ Números de outros países.
┃ Valores variam por região.
┃
╰━━━━━━━━━━━━━━⬣`
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
      text: 'Produto 8 • Zyron Store'
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      buttons: [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "🛒 Comprar Número INT",
            id: `${prefix}comprar 8`
          })
        }
      ]
    })
  })

  cards.push({
    header: proto.Message.InteractiveMessage.Header.create({
      title: '',
      hasMediaAttachment: true,
      imageMessage: mediaDono.imageMessage
    }),
    body: proto.Message.InteractiveMessage.Body.create({
      text: `╭━━〔 🔥 ZYRON-MD 〕━━⬣
┃
┃ 🔥 *Bot Zyron-MD*
┃ 💰 Valor: R$ 30,00
┃
┃ Base/bot com funções,
┃ menus e sistemas prontos.
┃
╰━━━━━━━━━━━━━━⬣`
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
      text: 'Produto 9 • Zyron Store'
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      buttons: [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "🛒 Comprar Zyron-MD",
            id: `${prefix}comprar 9`
          })
        }
      ]
    })
  })

  cards.push({
    header: proto.Message.InteractiveMessage.Header.create({
      title: '',
      hasMediaAttachment: true,
      imageMessage: mediaP.imageMessage
    }),
    body: proto.Message.InteractiveMessage.Body.create({
      text: `╭━━〔 🛠️ SERVIÇO 〕━━⬣
┃
┃ 🛠️ *Serviço Personalizado*
┃ 💰 Sob orçamento
┃
┃ Precisa de algo específico?
┃ Peça orçamento direto pelo bot.
┃
╰━━━━━━━━━━━━━━⬣`
    }),
    footer: proto.Message.InteractiveMessage.Footer.create({
      text: 'Produto 10 • Zyron Store'
    }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      buttons: [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "🛒 Fazer orçamento",
            id: `${prefix}comprar 10`
          })
        }
      ]
    })
  })

  const msgCarousel = generateWAMessageFromContent(from, {
    viewOnceMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `╭━━〔 🛒 ZYRON STORE 〕━━⬣
┃ Catálogo interativo carregado.
┃ Escolha um produto abaixo.
┃
┃ 👤 Cliente: ${pushname}
┃ 📅 Data: ${date}
┃ ⏰ Hora: ${hora}
╰━━━━━━━━━━━━━━⬣`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'By: GzeeScriptsDev</>'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
            cards
          })
        })
      }
    }
  }, { quoted: info })

  await conn.relayMessage(from, msgCarousel.message, {
    messageId: msgCarousel.key.id
  })

} catch (e) {
  console.log("❌ ERRO CATÁLOGO CARROSSEL:", e)
  await conn.sendMessage(from, {
    text: `❌ Erro no catálogo interativo:\n${e.message}`
  }, { quoted: info })
}
}
break;

case 'comprar': {
const produtos = {
"1": { nome: "🤖 BOT PERSONALIZÁVEL", preco: "R$ 25,00" },
"2": { nome: "🌐 Site HTML", preco: "R$ 100,00" },
"3": { nome: "📺 Netflix + Prime 30 Dias", preco: "R$ 15,00" },
"4": { nome: "☎️ Número brasileiro", preco: "R$ 15,00" },
"5": { nome: "🎮 Xbox Game Pass", preco: "R$ 27,00" },
"6": { nome: "📈 IMPULSIONE SUAS REDES", preco: "A partir de R$ 0,20" },
"7": { nome: "❤️ KeyVaults Xbox360", preco: "R$ 25,00" },
"8": { nome: "🌍 Números internacionais", preco: "A partir de R$ 3,00" },
"9": { nome: "🔥 Bot Zyron-MD", preco: "R$ 30,00" },
"10": { nome: "🛠️ Serviço Personalizado", preco: "Sob orçamento" }
};

const produto = produtos[args[0]];

if (!produto) {
return reply(`❌ Produto não encontrado.

Use: ${prefix}catalogo`);
}

reply(`🛒 *PEDIDO CRIADO*

📦 Produto: ${produto.nome}
💰 Valor: ${produto.preco}

💸 *PIX*
📧 Email: gzeeproductionsofc@gmail.com

🏦 PICPAY
Nome correspondente: Juan Pablo da Silva Cassemiro

📸 Após pagar, envie o comprovante no privado do bot.`);
}
break;

case 'pubdoc': {
try {
console.log("DONO TESTE:", {
sender,
dono1,
Numero1,
So_Dono,
IsCreator,
SoCriador
});

if (!So_Dono) return reply('Apenas o dono pode usar essa porra caralho.');

const CANAIS = [
'120363420624249161@newsletter',
'120363403609666063@newsletter',
'120363404513275411@newsletter'
];

const IMG_DEFAULT = 'https://files.catbox.moe/mzdkxd.jpg';

if (!q) return reply(
`╔━᳀『 *Publicar Case* 』═᳀
⌬ *Uso:* ${prefix}pubdoc <nome>/<descrição>
⌬ *Ex:* ${prefix}pubdoc attp/figurinha animada com texto
⌬ Responda à mensagem com o código
╚━═━═━═━═━═━═━═━═᳀`
);

const split = q.split('/');
if (split.length < 2) return reply('Use: nome/descrição');

const nome = split[0].trim();
const descricao = split.slice(1).join('/').trim();

const ctx = info?.message?.extendedTextMessage?.contextInfo;
const quotedMsg = ctx?.quotedMessage;

const codigo =
quotedMsg?.conversation ||
quotedMsg?.extendedTextMessage?.text ||
quotedMsg?.imageMessage?.caption ||
quotedMsg?.videoMessage?.caption ||
null;

if (!codigo || codigo.trim().length < 3) {
return reply('Responda à mensagem que contém o código da case.');
}

await conn.sendMessage(from, { react: { text: '⏳', key: info.key } });
await reply('Fazendo upload no Catbox...');

if (!fs.existsSync('./tmp')) {
fs.mkdirSync('./tmp');
}

const nomeArquivo = `${nome.replace(/[^a-z0-9]/gi, '_')}_${Date.now()}.txt`;
const caminhoArquivo = `./tmp/${nomeArquivo}`;

fs.writeFileSync(caminhoArquivo, codigo.trim());

const form = new FormData();
form.append('reqtype', 'fileupload');
form.append('fileToUpload', fs.createReadStream(caminhoArquivo));

const { data: catboxURL } = await axios.post(
'https://catbox.moe/user/api.php',
form,
{ headers: form.getHeaders() }
);

fs.unlinkSync(caminhoArquivo);

const pasteURL = String(catboxURL).trim();

if (!pasteURL.startsWith('https://')) {
throw new Error('Catbox recusou: ' + pasteURL);
}

let imageMessage = null;

try {
const prepared = await prepareWAMessageMedia(
{ image: { url: IMG_DEFAULT } },
{ upload: conn.waUploadToServer }
);

imageMessage = prepared.imageMessage;
} catch (e) {
console.log('Erro ao preparar imagem:', e.message);
}

const caption =
`╔══════════════════════╗
║       🤖 ZYRON-MD 🤖          ║
║      Powered by Zyron-AI™.      ║
╚══════════════════════╝

📂 ${nome}

📝 Descrição
${descricao}

━━━━━━━━━━━━━━━━━━

> Desenvolvido por: GzeeScriptsDev
⚡ Cases Exclusivas • Bots • IA`;

for (const canal of CANAIS) {

const msg = generateWAMessageFromContent(canal, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: imageMessage ? {
hasMediaAttachment: true,
imageMessage
} : {
hasMediaAttachment: false
},
body: {
text: caption
},
footer: {
text: 'ᶜˡⁱᵠᵘᵉ ᵃᵇᵃⁱˣᵒ ᵖᵃʳᵃ ᵃᵇʳⁱʳ'
},
nativeFlowMessage: {
buttons: [
{
name: 'cta_url',
buttonParamsJson: JSON.stringify({
display_text: '📄 ᴀʙʀɪʀ ᴅᴏᴄ',
url: pasteURL,
merchant_url: pasteURL
})
},
{
name: 'cta_url',
buttonParamsJson: JSON.stringify({
display_text: '🌐 𝑍𝑦𝑟𝑜𝑛-𝐴𝑖 & 𝑁𝑋𝑅ᵒᶠᶜ',
url: 'https://gzee-scripts-dev.github.io/Site-NXR/',
merchant_url: 'https://gzee-scripts-dev.github.io/Site-NXR/'
})
}
]
}
}
}
}
}, { userJid: conn.user.id });

await conn.relayMessage(canal, msg.message, {
messageId: msg.key.id
});

}

await conn.sendMessage(from, { react: { text: '✅', key: info.key } });
reply(`*Case publicada nos canais!*\n${pasteURL}`);

} catch (e) {
console.error('[pubdoc]', e);
await conn.sendMessage(from, { react: { text: '❌', key: info.key } });

const erro = e.response?.data || e.message || 'desconhecido';
reply('Erro ao publicar: ' + erro);
}
}
break;

// CASES DE DONO
//créditos: @gzeescripts
case 'banco':
case 'bank':
case 'saldo': {
try {

let banco = carregarBanco();

const user = getUserBancoId(info, sender, isGroup);

console.log('BANCO USER:', user);
console.log('BANCO DADOS:', banco[user]);

verificarConta(banco, user);

if (!banco[user].inventario) banco[user].inventario = {};
if (!banco[user].pets) banco[user].pets = {};
if (!banco[user].batalhaNaval) banco[user].batalhaNaval = {
partidas: 0,
vitorias: 0,
derrotas: 0,
recompensaTotal: 0
};

let listaInv = '';
for (const item in banco[user].inventario) {
const dados = banco[user].inventario[item];
listaInv += `⌬ ${item} (${dados.qtd}x) • *$${dados.valor * dados.qtd}*\n`;
}
if (!listaInv) listaInv = '⌬ 📦 Nenhum item guardado.';

let listaPets = '';
for (const pet in banco[user].pets) {
const dados = banco[user].pets[pet];
listaPets += `⌬ ${pet} (${dados.qtd}x)\n`;
}
if (!listaPets) listaPets = '⌬ 🐾 Nenhum pet guardado.';

const naval = banco[user].batalhaNaval;

reply(`╭━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐁𝐀𝐍𝐊 〕━━━⬣
┃ 👤 Usuário: ${pushname}
┃ 💰 Saldo: $${banco[user].saldo}
┃ ✨ XP: ${banco[user].xp}
┃
┣━━━〔 🎒 𝐈𝐍𝐕𝐄𝐍𝐓𝐀́𝐑𝐈𝐎 〕━━━⬣
${listaInv.trim() || '┃ 📭 Inventário vazio.'}
┃
┣━━━〔 🐾 𝐏𝐄𝐓𝐒 𝐆𝐔𝐀𝐑𝐃𝐀𝐃𝐎𝐒 〕━━━⬣
${listaPets.trim() || '┃ 🐾 Nenhum pet guardado.'}
┃
┣━━━〔 💸 𝐌𝐄𝐑𝐂𝐀𝐃𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ 📦 Vender item:
┃ ${prefix}venderitem <nome> <quantidade>
┃
┃ 🐾 Vender pet:
┃ ${prefix}venderpet <nome> <quantidade>
┃
┃ 💡 Exemplo:
┃ ${prefix}venderitem Peixe 2
┃ ${prefix}venderpet Cachorro 1
┃
┣━━━〔 📌 𝐏𝐄𝐍𝐃𝐄̂𝐍𝐂𝐈𝐀𝐒 〕━━━⬣
┃ 🎣 Pesca: ${banco[user].pescaPendente ? '✅ Sim' : '❌ Não'}
┃ ⛏️ Mineração: ${banco[user].mineracaoPendente ? '✅ Sim' : '❌ Não'}
┃ 🏹 Caça: ${banco[user].cacaPendente ? '✅ Sim' : '❌ Não'}
┃
┣━━━〔 🚢 𝐁𝐀𝐓𝐀𝐋𝐇𝐀 𝐍𝐀𝐕𝐀𝐋 〕━━━⬣
┃ 🎮 Partidas: ${naval.partidas}
┃ 🏆 Vitórias: ${naval.vitorias}
┃ 💀 Derrotas: ${naval.derrotas}
┃ 💰 Recompensa total: $${naval.recompensaTotal}
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍-𝐌𝐃 〕━━━⬣`);

salvarBanco(banco);

} catch (e) {
console.log(e);
reply('Erro ao abrir banco.');
}
}
break;

case 'pets':
case 'meuspets': {
try {

let banco = carregarBanco();
const user = getUserBancoId(info, sender, isGroup);

verificarConta(banco, user);

if (!banco[user].pets) banco[user].pets = {};

let listaPets = '';
let totalPets = 0;
let totalEspecies = 0;

for (const pet in banco[user].pets) {
const dados = banco[user].pets[pet];

const qtd = typeof dados === 'object' ? dados.qtd || 0 : dados;

if (qtd > 0) {
listaPets += `⌬ 🐾 ${pet} (${qtd}x)\n`;
totalPets += qtd;
totalEspecies++;
}
}

if (!listaPets) {
listaPets = `⌬ 🐾 Nenhum pet encontrado.\n\nUse *${prefix}cacar* para tentar pegar pets.`;
}

reply(`╭━━━〔 🐾 𝐙𝐘𝐑𝐎𝐍 𝐏𝐄𝐓𝐒 〕━━━⬣
┃ 👤 Usuário: ${pushname}
┃
┣━━━〔 🐾 𝐂𝐎𝐋𝐄𝐂̧𝐀̃𝐎 𝐃𝐄 𝐏𝐄𝐓𝐒 〕━━━⬣
${listaPets.trim() || '┃ 📭 Você ainda não possui pets.'}
┃
┣━━━〔 📊 𝐄𝐒𝐓𝐀𝐓𝐈́𝐒𝐓𝐈𝐂𝐀𝐒 〕━━━⬣
┃ 🐕 Total de Pets: ${totalPets}
┃ 📚 Espécies Diferentes: ${totalEspecies}
┃
┣━━━〔 💡 𝐃𝐈𝐂𝐀𝐒 〕━━━⬣
┃ 🏹 Capture animais usando:
┃ ${prefix}cacar
┃
┃ 💰 Venda seus pets:
┃ ${prefix}venderpet <nome> <qtd>
┃
┃ 📦 Guardar animal:
┃ ${prefix}guardarpet
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍-𝐌𝐃 & 𝐙𝐘𝐑𝐎𝐍-𝐀𝐈 〕━━━⬣`);

salvarBanco(banco);

} catch (e) {
console.log(e);
reply('❌ Erro ao abrir seus pets.');
}
}
break;

case 'meuid': {
reply(`╭━━━〔 🆔 𝐙𝐘𝐑𝐎𝐍 𝐈𝐃 〕━━━⬣
┃ 👤 Usuário: ${pushname}
┃
┣━━━〔 📡 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒 〕━━━⬣
┃ 🆔 Sender:
┃ ${sender}
┃
┃ 👥 Participant:
┃ ${info.key.participant || 'Não encontrado'}
┃
┃ 📋 ParticipantPn:
┃ ${info.key.participantPn || 'Não encontrado'}
┃
┃ 🌐 RemoteJid:
┃ ${info.key.remoteJid}
┃
┣━━━〔 ⚙️ 𝐃𝐀𝐃𝐎𝐒 𝐓𝐄́𝐂𝐍𝐈𝐂𝐎𝐒 〕━━━⬣
┃ 🤖 Sistema: Zyron-MD
┃ ❤️‍🔥 IA: Zyron-AI
┃ 🔐 Identificação concluída
┃
╰━━━〔 🚀 𝐆𝐙𝐄𝐄 𝐒𝐂𝐑𝐈𝐏𝐓𝐒 𝐃𝐄𝐕 〕━━━⬣`);
}
break;

// CASES DE BRINCADEIRAS
// créditos: @gzeescripts

case 'ppt':
case 'jokenpo':
case 'pedrapapeltesoura': {
try {
if (!isGroup) return reply('❌ Só funciona em grupo.');

global.ppt = global.ppt || {};

const sub = args[0]?.toLowerCase();

if (!sub) return reply(`╭━━〔 ✊ JOKENPÔ PVP 〕━━⬣
┃ Use:
┃ ${prefix}ppt desafiar @5519999999999 100
┃ ${prefix}ppt aceitar
┃ ${prefix}ppt pedra
┃ ${prefix}ppt papel
┃ ${prefix}ppt tesoura
┃ ${prefix}ppt cancelar
╰━━━━━━━━━━━━━━⬣`);

if (sub === 'cancelar') {
const partida = global.ppt[from];
if (!partida) return reply('❌ Não tem partida ativa.');

const senderNorm = jidNormalizedUser(sender);

if (![partida.p1, partida.p2].includes(senderNorm) && !So_Dono) {
return reply('❌ Só jogadores podem cancelar.');
}

delete global.ppt[from];
return reply('🗑️ Partida cancelada.');
}

if (sub === 'desafiar') {
if (global.ppt[from]) return reply('❌ Já existe uma partida ativa nesse grupo.');

let alvo = null;
const ctx = info?.message?.extendedTextMessage?.contextInfo || {};

if (ctx.mentionedJid?.[0] && ctx.mentionedJid[0].includes('@')) {
alvo = ctx.mentionedJid[0];
} else {
const numeroTexto = q.match(/@?(\d{8,15})/);
if (numeroTexto) alvo = `${numeroTexto[1]}@s.whatsapp.net`;
}

if (!alvo) {
return reply(`❌ Marque alguém ou coloque o número.\nEx: ${prefix}ppt desafiar @5519999999999 100`);
}

alvo = jidNormalizedUser(alvo);
const senderNorm = jidNormalizedUser(sender);
const botNorm = jidNormalizedUser(botNumber);

if (alvo === senderNorm) return reply('❌ Você não pode desafiar você mesmo.');
if (alvo === botNorm) return reply('❌ Não vou jogar contigo, sou ocupado.');

let aposta = parseInt(args.find(a => /^\d+$/.test(a))) || 0;
if (aposta < 0) aposta = 0;

if (aposta > 0) {
if (!global.db?.data?.users?.[senderNorm]) global.db.data.users[senderNorm] = { money: 0, saldo: 0 };
if (!global.db?.data?.users?.[alvo]) global.db.data.users[alvo] = { money: 0, saldo: 0 };

let saldo1 = global.db.data.users[senderNorm].money || global.db.data.users[senderNorm].saldo || 0;
let saldo2 = global.db.data.users[alvo].money || global.db.data.users[alvo].saldo || 0;

if (saldo1 < aposta) return reply('❌ Você não tem saldo para essa aposta.');
if (saldo2 < aposta) return reply('❌ O desafiado não tem saldo para essa aposta.');
}

global.ppt[from] = {
p1: senderNorm,
p2: alvo,
aposta,
escolhas: {},
aceito: false,
criado: Date.now()
};

return conn.sendMessage(from, {
text: `╭━━〔 ⚔️ DESAFIO JOKENPÔ 〕━━⬣
┃ 👤 Desafiante: @${senderNorm.split('@')[0]}
┃ 🎯 Desafiado: @${alvo.split('@')[0]}
┃ 💰 Aposta: R$${aposta}
┃
┃ Para aceitar:
┃ ${prefix}ppt aceitar
╰━━━━━━━━━━━━━━⬣`,
mentions: [senderNorm, alvo]
}, { quoted: selo });
}

if (sub === 'aceitar') {
const partida = global.ppt[from];
if (!partida) return reply('❌ Não tem desafio ativo.');

const senderNorm = jidNormalizedUser(sender);

if (senderNorm !== partida.p2) return reply('❌ Só o desafiado pode aceitar.');

partida.aceito = true;

return conn.sendMessage(from, {
text: `╭━━〔 ✅ DESAFIO ACEITO 〕━━⬣
┃ @${partida.p1.split('@')[0]} vs @${partida.p2.split('@')[0]}
┃
┃ Escolham:
┃ ${prefix}ppt pedra
┃ ${prefix}ppt papel
┃ ${prefix}ppt tesoura
╰━━━━━━━━━━━━━━⬣`,
mentions: [partida.p1, partida.p2]
}, { quoted: selo });
}

if (['pedra', 'papel', 'tesoura'].includes(sub)) {
const partida = global.ppt[from];
if (!partida) return reply('❌ Não tem partida ativa.');
if (!partida.aceito) return reply('❌ O desafio ainda não foi aceito.');

const senderNorm = jidNormalizedUser(sender);

if (![partida.p1, partida.p2].includes(senderNorm)) return reply('❌ Você não está nessa partida.');

if (partida.escolhas[senderNorm]) return reply('❌ Você já escolheu.');

partida.escolhas[senderNorm] = sub;

await conn.sendMessage(from, {
text: `✅ Escolha registrada para @${senderNorm.split('@')[0]}.`,
mentions: [senderNorm]
}, { quoted: selo });

if (!partida.escolhas[partida.p1] || !partida.escolhas[partida.p2]) {
return reply('⏳ Aguardando o outro jogador escolher...');
}

const e1 = partida.escolhas[partida.p1];
const e2 = partida.escolhas[partida.p2];

let vencedor = null;

if (e1 === e2) {
vencedor = null;
} else if (
(e1 === 'pedra' && e2 === 'tesoura') ||
(e1 === 'papel' && e2 === 'pedra') ||
(e1 === 'tesoura' && e2 === 'papel')
) {
vencedor = partida.p1;
} else {
vencedor = partida.p2;
}

const emoji = {
pedra: '✊',
papel: '📄',
tesoura: '✂️'
};

let txt = `╭━━〔 🎮 RESULTADO JOKENPÔ 〕━━⬣
┃ @${partida.p1.split('@')[0]} escolheu: ${emoji[e1]} ${e1}
┃ @${partida.p2.split('@')[0]} escolheu: ${emoji[e2]} ${e2}
┃
`;

if (!vencedor) {
txt += `┃ 🤝 Resultado: Empate
┃ 💰 Ninguém perdeu dinheiro`;
} else {
const perdedor = vencedor === partida.p1 ? partida.p2 : partida.p1;

if (partida.aposta > 0) {
if (!global.db.data.users[vencedor]) global.db.data.users[vencedor] = { money: 0, saldo: 0 };
if (!global.db.data.users[perdedor]) global.db.data.users[perdedor] = { money: 0, saldo: 0 };

global.db.data.users[vencedor].money = (global.db.data.users[vencedor].money || 0) + partida.aposta;
global.db.data.users[perdedor].money = Math.max(0, (global.db.data.users[perdedor].money || 0) - partida.aposta);

global.db.data.users[vencedor].saldo = global.db.data.users[vencedor].money;
global.db.data.users[perdedor].saldo = global.db.data.users[perdedor].money;
}

txt += `┃ 🏆 Vencedor: @${vencedor.split('@')[0]}
┃ ☠️ Perdedor: @${perdedor.split('@')[0]}
┃ 💰 Prêmio: R$${partida.aposta}`;
}

txt += `
╰━━━━━━━━━━━━━━⬣`;

const mentions = [partida.p1, partida.p2];

delete global.ppt[from];

return conn.sendMessage(from, {
text: txt,
mentions
}, { quoted: selo });
}

reply('❌ Opção inválida.');

} catch (e) {
console.log('[PPT ERROR]', e);
reply('❌ Erro no pedra, papel e tesoura.');
}
}
break;

case '2048': {
  const idJogo = from
  const acao = q.trim().toLowerCase()

  if (!acao || acao === 'iniciar') {
    jogos2048[idJogo] = {
      board: novo2048(),
      score: 0
    }

    return reply(mostrar2048(jogos2048[idJogo].board, 0))
  }

  if (!jogos2048[idJogo]) {
    return reply(`Nenhum jogo 2048 iniciado.\nUse: ${prefix}2048`)
  }

  if (acao === 'sair' || acao === 'desistir') {
    delete jogos2048[idJogo]
    return reply('🎮 Jogo 2048 encerrado.')
  }

  if (acao === 'ver') {
    return reply(mostrar2048(jogos2048[idJogo].board, jogos2048[idJogo].score))
  }

  const direcoes = ['cima', 'baixo', 'esquerda', 'direita']

  if (!direcoes.includes(acao)) {
    return reply(
      `Use assim:\n\n` +
      `${prefix}2048 cima\n` +
      `${prefix}2048 baixo\n` +
      `${prefix}2048 esquerda\n` +
      `${prefix}2048 direita\n` +
      `${prefix}2048 sair`
    )
  }

  const jogo = jogos2048[idJogo]
  const antes = clonar2048(jogo.board)
  const mov = mover2048(jogo.board, acao)

  if (igual2048(antes, mov.board)) {
    return reply('❌ Não dá pra mover nessa direção.')
  }

  jogo.board = mov.board
  jogo.score += mov.pontos
  add2048(jogo.board)

  const ganhou = jogo.board.flat().includes(2048)

  if (ganhou) {
    const textoFinal = mostrar2048(jogo.board, jogo.score)
    delete jogos2048[idJogo]
    return reply(`🏆 Você venceu o 2048!\n\n${textoFinal}`)
  }

  if (perdeu2048(jogo.board)) {
    const textoFinal = mostrar2048(jogo.board, jogo.score)
    delete jogos2048[idJogo]
    return reply(`💀 Você perdeu!\n\n${textoFinal}`)
  }

  return reply(mostrar2048(jogo.board, jogo.score))
}
break

case 'sudoku': {
  const idJogo = from

  if (!q) {
    const novo = gerarSudoku()

    jogosSudoku[idJogo] = {
      tabuleiro: JSON.parse(JSON.stringify(novo.puzzle)),
      fixos: JSON.parse(JSON.stringify(novo.puzzle)),
      solution: novo.solution
    }

    return reply(mostrarSudoku(jogosSudoku[idJogo].tabuleiro))
  }

  if (!jogosSudoku[idJogo]) {
    return reply(`Nenhum Sudoku iniciado.\nUse: ${prefix}sudoku`)
  }

  if (q.toLowerCase() === 'desistir') {
    delete jogosSudoku[idJogo]
    return reply('🧩 Sudoku encerrado.')
  }

  if (q.toLowerCase() === 'ver') {
    return reply(mostrarSudoku(jogosSudoku[idJogo].tabuleiro))
  }

  const argsSudoku = q.trim().split(/\s+/).map(Number)

  if (argsSudoku.length !== 3) {
    return reply(
      `Use assim:\n${prefix}sudoku linha coluna número\n\nExemplo:\n${prefix}sudoku 1 3 4`
    )
  }

  let [linha, coluna, numero] = argsSudoku

  if (
    linha < 1 || linha > 9 ||
    coluna < 1 || coluna > 9 ||
    numero < 1 || numero > 9
  ) {
    return reply('❌ Linha, coluna e número devem ser de 1 a 9.')
  }

  linha--
  coluna--

  const jogo = jogosSudoku[idJogo]

  if (jogo.fixos[linha][coluna] !== 0) {
    return reply('❌ Essa posição já veio preenchida, não dá pra alterar.')
  }

  if (jogo.solution[linha][coluna] !== numero) {
    return reply('❌ Número errado nessa posição.')
  }

  jogo.tabuleiro[linha][coluna] = numero

  if (sudokuCompleto(jogo.tabuleiro)) {
    delete jogosSudoku[idJogo]
    return reply(`🎉 Parabéns! Você completou o Sudoku!\n\n${mostrarSudoku(jogo.tabuleiro)}`)
  }

  return reply(`✅ Correto!\n\n${mostrarSudoku(jogo.tabuleiro)}`)
}
break

case 'forca': {
  if (!global.forca) global.forca = {};

  if (global.forca[from]) {
    return reply(`❌ Já existe uma forca ativa nesse chat!\n\nUse: ${prefix}letra A\nOu: ${prefix}chutar PALAVRA`);
  }

  const palavras = [
    { palavra: 'JAVASCRIPT', dica: 'Linguagem de programação' },
    { palavra: 'WHATSAPP', dica: 'Aplicativo de mensagens' },
    { palavra: 'PROGRAMACAO', dica: 'O que um desenvolvedor faz' },
    { palavra: 'COMPUTADOR', dica: 'Máquina eletrônica' },
    { palavra: 'INTERNET', dica: 'Rede mundial' },
    { palavra: 'DESENVOLVEDOR', dica: 'Cria sistemas e aplicativos' },
    { palavra: 'FIREBASE', dica: 'Plataforma do Google' },
    { palavra: 'TERMUX', dica: 'Terminal para Android' },
    { palavra: 'HOSPEDAGEM', dica: 'Onde um site fica online' },
    { palavra: 'ZYRONMD', dica: 'Nome de um bot' },
    { palavra: 'NODEJS', dica: 'Ambiente JavaScript' },
    { palavra: 'GITHUB', dica: 'Hospeda códigos' },
    { palavra: 'ANDROID', dica: 'Sistema operacional mobile' },
    { palavra: 'SERVIDOR', dica: 'Fornece serviços na rede' },
    { palavra: 'ALGORITMO', dica: 'Sequência lógica' },
    { palavra: 'BAILEYS', dica: 'Biblioteca para bot WhatsApp' },
    { palavra: 'TERMINAL', dica: 'Interface de comandos' },
    { palavra: 'SCRIPT', dica: 'Código automatizado' },
    { palavra: 'COMANDO', dica: 'Instrução do sistema' },
    { palavra: 'AUTOMACAO', dica: 'Tarefa feita automaticamente' },
    { palavra: 'NODEJS', dica: 'Ambiente de execução JavaScript' },
    { palavra: 'GITHUB', dica: 'Plataforma para hospedar códigos' },
    { palavra: 'DATABASE', dica: 'Banco de dados em inglês' },
    { palavra: 'ANDROID', dica: 'Sistema operacional mobile' },
    { palavra: 'SERVIDOR', dica: 'Responsável por fornecer serviços na rede' },
    { palavra: 'ALGORITMO', dica: 'Sequência lógica de instruções' },
    { palavra: 'BAILEYS', dica: 'Biblioteca usada em bots WhatsApp' },
    { palavra: 'TERMINAL', dica: 'Interface de comandos' },
    { palavra: 'SCRIPT', dica: 'Código automatizado' },
    { palavra: 'COMANDO', dica: 'Instrução executada pelo sistema' },
    { palavra: 'BOTWHATSAPP', dica: 'Automação para mensageiro' },
    { palavra: 'INTELIGENCIA', dica: 'Capacidade de aprender e raciocinar' },
    { palavra: 'ARTIFICIAL', dica: 'Criada por tecnologia' },
    { palavra: 'FERRAMENTA', dica: 'Utilizada para realizar tarefas' },
    { palavra: 'SEGURANCA', dica: 'Proteção contra ameaças' },
    { palavra: 'CRIPTOGRAFIA', dica: 'Método de proteção de dados' },
    { palavra: 'FUNCIONALIDADE', dica: 'Recurso disponível em um sistema' },
    { palavra: 'DESIGNER', dica: 'Profissional que cria interfaces' },
    { palavra: 'AUTOMACAO', dica: 'Execução automática de tarefas' },
    { palavra: 'TECNOLOGIA', dica: 'Área relacionada à inovação digital' }
  ];

  const sorteio = palavras[Math.floor(Math.random() * palavras.length)];

  global.forca[from] = {
    palavra: sorteio.palavra.toUpperCase(),
    dica: sorteio.dica,
    letras: [],
    erros: [],
    vidas: 6
  };

  const jogo = global.forca[from];
  const exibida = jogo.palavra.split('').map(() => '_').join(' ');

  reply(`
🎮 *JOGO DA FORCA INICIADO*

💡 *Dica:* ${jogo.dica}
🔤 *Palavra:* ${exibida}
❤️ *Vidas:* ${jogo.vidas}

✏️ Use:
${prefix}letra A
${prefix}chutar PALAVRA
`);
}
break;

case 'letra': {
  if (!global.forca || !global.forca[from]) {
    return reply(`❌ Não tem forca ativa.\nUse: ${prefix}forca`);
  }

  const jogo = global.forca[from];
  const letra = q.toUpperCase().trim();

  if (!letra || letra.length !== 1) {
    return reply(`❌ Use assim:\n${prefix}letra A`);
  }

  if (jogo.letras.includes(letra) || jogo.erros.includes(letra)) {
    return reply(`⚠️ Essa letra já foi usada!`);
  }

  if (jogo.palavra.includes(letra)) {
    jogo.letras.push(letra);
  } else {
    jogo.erros.push(letra);
    jogo.vidas--;
  }

  const exibida = jogo.palavra
    .split('')
    .map(l => jogo.letras.includes(l) ? l : '_')
    .join(' ');

  if (!exibida.includes('_')) {
    delete global.forca[from];
    return reply(`
🏆 *PARABÉNS! VOCÊ VENCEU!*

✅ Palavra: *${jogo.palavra}*
`);
  }

  if (jogo.vidas <= 0) {
    delete global.forca[from];
    return reply(`
💀 *VOCÊ PERDEU!*

❌ A palavra era: *${jogo.palavra}*
`);
  }

  reply(`
🎮 *JOGO DA FORCA*

💡 *Dica:* ${jogo.dica}
🔤 *Palavra:* ${exibida}
❤️ *Vidas:* ${jogo.vidas}
❌ *Letras erradas:* ${jogo.erros.join(', ') || 'Nenhuma'}

✏️ Use:
${prefix}letra A
${prefix}chutar PALAVRA
`);
}
break;

case 'chutar': {
  if (!global.forca || !global.forca[from]) {
    return reply(`❌ Não tem forca ativa.\nUse: ${prefix}forca`);
  }

  const jogo = global.forca[from];
  const chute = q.toUpperCase().trim();

  if (!chute) {
    return reply(`❌ Use assim:\n${prefix}chutar Gzee`);
  }

  if (chute === jogo.palavra) {
    delete global.forca[from];
    return reply(`
🏆 *ACERTOU!*

✅ A palavra era: *${jogo.palavra}*
`);
  } else {
    jogo.vidas -= 2;

    if (jogo.vidas <= 0) {
      delete global.forca[from];
      return reply(`
💀 *VOCÊ ERROU E PERDEU!*

❌ A palavra era: *${jogo.palavra}*
`);
    }

    return reply(`
❌ *Chute errado!*

❤️ Vidas restantes: ${jogo.vidas}
`);
  }
}
break;

case 'vdb': {
const verdades = [
'Qual foi a maior mentira que você já contou?',
'Você já gostou de alguém em segredo?',
'Qual é seu maior medo?',
'Já chorou por alguém?',
'Qual foi a coisa mais vergonhosa que já fez?',
'Você já colou em uma prova?',
'Qual foi seu pior fora?',
'Já fingiu gostar de algo só para impressionar alguém?',
'Quem foi sua última paixão?',
'Qual segredo ninguém sabe sobre você?'
];

const desafios = [
'Envie um emoji aleatório para 5 contatos.',
'Grave um áudio cantando uma música.',
'Mande uma mensagem engraçada em um grupo.',
'Troque sua foto de perfil por 10 minutos.',
'Fale o alfabeto ao contrário.',
'Envie um áudio imitando um robô.',
'Escreva uma frase sem usar a letra A.',
'taque seu celular no chão gravando.',
'Envie apenas emojis na próxima mensagem.',
'Faça uma declaração para alguém do grupo.'
];

const tipo = Math.random() < 0.5 ? 'verdade' : 'desafio';

const resultado = tipo === 'verdade'
? verdades[Math.floor(Math.random() * verdades.length)]
: desafios[Math.floor(Math.random() * desafios.length)];

reply(`
🎭 *VERDADE OU DESAFIO*

🎲 Sorteado: *${tipo.toUpperCase()}*

${tipo === 'verdade' ? '❓' : '🔥'} ${resultado}

Digite *.vdb* novamente para outro.
`);
}
break;

case 'eununca': {
const frases = [
'Eu nunca beijei alguém.',
'Eu nunca menti para meus pais.',
'Eu nunca colei em uma prova.',
'Eu nunca passei vergonha em público.',
'Eu nunca chorei assistindo um filme.',
'Eu nunca escondi uma nota ruim.',
'Eu nunca mandei mensagem para a pessoa errada.',
'Eu nunca fui pego mentindo.',
'Eu nunca ri em um momento sério.',
'Eu nunca me arrependi de uma mensagem enviada.',
'Eu nunca fui parar na diretoria.',
'Eu nunca me apaixonei por um amigo.',
'Eu nunca fingi dormir para evitar conversar.',
'Eu nunca apaguei uma mensagem e fiquei com medo da reação.',
'Eu nunca derrubei comida na roupa em público.',
'Eu nunca fiquei preso no banheiro.',
'Eu nunca mandei mensagem para o contato errado.',
'Eu nunca me arrependi de um corte de cabelo.',
'Eu nunca fui ignorado por alguém que eu gostava.',
'Eu nunca perdi o ônibus por distração.',
'Eu nunca fiquei rindo sozinho lembrando de algo.',
'Eu nunca fui pego mexendo no celular escondido.',
'Eu nunca inventei uma desculpa para sair de casa.',
'Eu nunca fingi estar ocupado.',
'Eu nunca cantei errado uma música por anos.',
'Eu nunca esqueci minha própria idade por um instante.',
'Eu nunca me perdi em um lugar que conhecia.',
'Eu nunca chorei de tanto rir.',
'Eu nunca tive vergonha de pedir ajuda.',
'Eu nunca fiquei nervoso para falar com alguém.',
'Eu nunca derrubei o celular na água.',
'Eu nunca salvei alguém com um apelido estranho.',
'Eu nunca stalkeei alguém por mais de uma hora.',
'Eu nunca tirei print de uma conversa.',
'Eu nunca fui bloqueado por alguém.',
'Eu nunca bloqueei alguém por raiva.',
'Eu nunca menti minha idade na internet.',
'Eu nunca fiquei mais de 5 horas seguidas no celular.',
'Eu nunca passei vergonha tentando impressionar alguém.',
'Eu nunca me assustei com minha própria sombra.',
'Eu nunca ri em uma situação séria.',
'Eu nunca fui o último a entender uma piada.',
'Eu nunca tive um crush em personagem de filme ou série.',
'Eu nunca falei sozinho em voz alta.',
'Eu nunca tropecei andando em linha reta.',
'Eu nunca perdi uma aposta.',
'Eu nunca escondi comida para comer depois.',
'Eu nunca fiquei com ciúmes de um amigo.',
'Eu nunca dormi durante uma chamada.',
'Eu nunca me atrasei por esquecer a hora.',
'Eu nunca fiquei sem internet e não soube o que fazer.',
'Eu nunca enviei um áudio sem querer.',
'Eu nunca tive medo de assistir um filme de terror sozinho.',
'Eu nunca fingi gostar de uma música.',
'Eu nunca passei um dia inteiro de pijama.',
'Eu nunca fui confundido com outra pessoa.',
'Eu nunca me arrependi de uma postagem.',
'Eu nunca deixei uma mensagem no vácuo de propósito.',
'Eu nunca fiquei acordado até o amanhecer.',
'Eu nunca inventei uma história que saiu do controle.',
'Eu nunca fiquei com o(a) ex de um amigo.',
'Eu nunca me apaixonei por alguém comprometido.',
'Eu nunca menti para esconder com quem estava.',
'Eu nunca traí a confiança de alguém importante.',
'Eu nunca voltei para alguém que me fez sofrer.',
'Eu nunca fui o motivo do término de um casal.',
'Eu nunca fiquei com alguém apenas por aparência.',
'Eu nunca tive uma paixão secreta por um amigo.',
'Eu nunca mandei mensagem para alguém só porque estava carente.',
'Eu nunca fingi não gostar de alguém quando gostava.',
'Eu nunca tive ciúmes sem ter nada com a pessoa.',
'Eu nunca fui rejeitado e fingi que não me importei.',
'Eu nunca me arrependi de uma declaração de amor.',
'Eu nunca escondi um relacionamento.',
'Eu nunca fiquei com alguém que meus amigos desaprovavam.',
'Eu nunca fui bloqueado por alguém que eu gostava.',
'Eu nunca bloqueei alguém por raiva.',
'Eu nunca voltei a falar com alguém que jurei esquecer.',
'Eu nunca fiquei obcecado por alguém.',
'Eu nunca estraguei uma amizade por sentimentos.',
'Eu nunca me humilhei por alguém.',
'Eu nunca mandei uma mensagem e me arrependi imediatamente.',
'Eu nunca senti falta de alguém que não merecia.',
'Eu nunca tentei causar ciúmes em alguém.',
'Eu nunca perdoei algo que disse que nunca perdoaria.',
'Eu nunca fui iludido e continuei insistindo.',
'Eu nunca tive um segredo que ninguém do grupo imagina.',
'Eu nunca menti sobre meus sentimentos.',
'Eu nunca me arrependi de não ter dito algo para alguém.',
];

const frase = frases[Math.floor(Math.random() * frases.length)];

await conn.sendMessage(from, {
poll: {
name: `🍻 EU NUNCA\n\n${frase}`,
values: [
'✅ Eu já',
'❌ Eu nunca'
],
selectableCount: 1
}
});

}
break;

case 'ranking':
case 'rank': {
if (!isGroup) return reply('❌ Este comando só funciona em grupos!')

const tipos = {
  gay: '🌈 TOP 5 MAIS GAYS',
  chato: '🙄 TOP 5 MAIS CHATOS',
  corno: '🐂 TOP 5 MAIS CORNOS',
  feio: '🤢 TOP 5 MAIS FEIOS',
  burro: '🐴 TOP 5 MAIS BURROS',
  lindo: '😎 TOP 5 MAIS LINDOS',
  invejoso: '😒 TOP 5 MAIS INVEJOSOS',
  vesgo: '👀 TOP 5 MAIS VESGOS'
}

const gifs = {
  gay: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/gay.mp4",
  feio: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/feio.mp4",
  lindo: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/lindo.mp4",
  corno: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/corno.mp4",
  invejoso: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/invejoso.mp4",
  vesgo: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/vesgo.mp4",
  chato: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/chato.mp4",
  burro: "/storage/emulated/0/Zyron-MD❤️‍🔥/Zyron-MD/gifs/burro.mp4"
}

const tipo = q?.toLowerCase().trim()

if (!tipos[tipo]) {
return reply(`
🏆 *RANKINGS DISPONÍVEIS*

${prefix}rank gay
${prefix}rank chato
${prefix}rank corno
${prefix}rank feio
${prefix}rank burro
${prefix}rank lindo
${prefix}rank vesgo
${prefix}rank invejoso
`)
}

const metadata = await getGroupMetadataCached(conn, from)

const participantes = metadata.participants
.map(v => v.id)
.filter(v => !v.includes(conn.user.id.split(':')[0])) // remove o bot
.sort(() => Math.random() - 0.5)
.slice(0, 5)

// Gera porcentagens e ordena do maior para o menor
const ranking = participantes.map(jid => ({
  jid,
  porcent: Math.floor(Math.random() * 100) + 1
}))

ranking.sort((a, b) => b.porcent - a.porcent)

let texto = `🏆 *${tipos[tipo]}*\n\n`
let mentions = []

for (let i = 0; i < ranking.length; i++) {
  const { jid, porcent } = ranking[i]

  const numero = jid.split('@')[0]

  mentions.push(jid)

  const medalha =
    i === 0 ? '🥇' :
    i === 1 ? '🥈' :
    i === 2 ? '🥉' :
    '🏅'

  texto += `${medalha} @${numero} ➜ ${porcent}%\n`
}

const caminhoGif = gifs[tipo]

if (caminhoGif && fs.existsSync(caminhoGif)) {
  await conn.sendMessage(from, {
    video: fs.readFileSync(caminhoGif),
    gifPlayback: true,
    caption: texto,
    mentions
  })
} else {
  await conn.sendMessage(from, {
    text: texto,
    mentions
  })
}

}
break;

const db = carregarBanco();

const user = getUserBancoId(info, sender, isGroup);
verificarConta(db, user);

case 'pescar': {
try {

const itens = [
{ nome: "🐟 Tilápia", valor: 40, chance: 35 },
{ nome: "🐠 Peixe-Palhaço", valor: 60, chance: 28 },
{ nome: "🦀 Caranguejo", valor: 50, chance: 30 },
{ nome: "🦑 Lula", valor: 75, chance: 22 },
{ nome: "🐢 Tartaruga", valor: 90, chance: 18 },
{ nome: "🐡 Baiacu", valor: 110, chance: 15 },
{ nome: "🐙 Polvo", valor: 130, chance: 12 },
{ nome: "🦞 Lagosta", valor: 150, chance: 10 },
{ nome: "🦈 Tubarão", valor: 250, chance: 6 },
{ nome: "🐚 Pérola", valor: 300, chance: 5 },
{ nome: "🦴 Osso Gigante", valor: 90, chance: 16 },
{ nome: "🧴 Garrafa Misteriosa", valor: 120, chance: 13 },
{ nome: "⚓ Âncora Pequena", valor: 200, chance: 8 },
{ nome: "🔱 Tridente Quebrado", valor: 350, chance: 4 },
{ nome: "🪙 Moeda Antiga", valor: 450, chance: 3 },
{ nome: "🪸 Coral Raro", valor: 500, chance: 2.5 },
{ nome: "📦 Baú Enferrujado", valor: 600, chance: 2 },
{ nome: "📜 Mapa do Tesouro", valor: 800, chance: 1.5 },
{ nome: "💎 Diamante Perdido", valor: 1000, chance: 0.8 },
{ nome: "👑 Coroa Afundada", valor: 1500, chance: 0.3 },
{ nome: "👢 Bota Velha", valor: 0, chance: 25 },
{ nome: "🍾 Garrafa Vazia", valor: 0, chance: 25 },
{ nome: "🛞 Pneu Velho", valor: 0, chance: 20 },
{ nome: "🗝️ Chave Enferrujada", valor: 180, chance: 8 },
{ nome: "💰 Saco de Moedas", valor: 550, chance: 2 },
{ nome: "📿 Colar Antigo", valor: 400, chance: 3 },
{ nome: "💍 Anel Perdido", valor: 700, chance: 1.5 },
{ nome: "🧭 Bússola Náutica", valor: 350, chance: 4 },
{ nome: "⚔️ Espada Enferrujada", valor: 450, chance: 2.5 },
{ nome: "🛡️ Escudo Antigo", valor: 500, chance: 2 },
{ nome: "👻 Relíquia Assombrada", valor: 1200, chance: 0.3 },
{ nome: "📕 Diário Molhado", valor: 250, chance: 6 },
{ nome: "🦐 Camarão Gigante", valor: 220, chance: 7 },
{ nome: "🐬 Golfinho Bebê", valor: 900, chance: 0.8 },
{ nome: "🦑 Lula Colossal", valor: 750, chance: 1 },
{ nome: "🐉 Escama de Dragão Marinho", valor: 3000, chance: 0.05 },
{ nome: "💀 Caveira Misteriosa", valor: 600, chance: 1.5 },
{ nome: "⚜️ Artefato Perdido", valor: 1800, chance: 0.2 },
{ nome: "🪬 Amuleto Antigo", valor: 950, chance: 0.7 },
{ nome: "🌟 Fragmento Estelar", valor: 2500, chance: 0.08 },
{ nome: "👑 Coroa do Rei Pirata", valor: 5000, chance: 0.01 },
{ nome: "🐳 Mini Baleia", valor: 1200, chance: 0.5 },
{ nome: "📦 Baú Lendário", valor: 4000, chance: 0.03 },
{ nome: "📍 Plug Anal", valor: 10000, chance: 0.03 },
{ nome: "🖱️ Mouse Pichau", valor: 4000, chance: 0.03 }
];

function sortearItem(itens) {
let totalChance = itens.reduce((acc, item) => acc + item.chance, 0);
let random = Math.random() * totalChance;

for (let item of itens) {
random -= item.chance;
if (random <= 0) return item;
}
}

await reply(`╭━━━〔 🎣 𝐏𝐄𝐒𝐂𝐀 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ 🌊 As águas do Zyron estão calmas...
┃ 🎣 Você lançou sua linha com precisão...
┃ 🫧 Bolhas surgem na superfície...
┃ ⏳ Aguardando uma captura rara...
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍-𝐌𝐃 〕━━━⬣`);

await new Promise(resolve => setTimeout(resolve, 2000));

await reply(`╭━━━〔 🌊 𝐏𝐄𝐒𝐂𝐀 𝐄𝐌 𝐀𝐍𝐃𝐀𝐌𝐄𝐍𝐓𝐎 〕━━━⬣
┃ 🎣 A linha afundou nas águas...
┃ 🌊 As correntes ficaram fortes...
┃ 🫧 Algo se aproxima da isca...
┃ ⚠️ Segura firme, pescador!
╰━━━〔 🎣 𝐙𝐘𝐑𝐎𝐍 𝐅𝐈𝐒𝐇𝐈𝐍𝐆 〕━━━⬣`);

await new Promise(resolve => setTimeout(resolve, 2000));

await reply(`╭━━━〔 🐟 𝐂𝐀𝐏𝐓𝐔𝐑𝐀 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐀 〕━━━⬣
┃ ⚡ A isca foi atacada!
┃ 🎣 Você puxou a linha com força...
┃ 📦 Analisando as capturas...
┃ 🔎 Calculando recompensa...
╰━━━〔 🚀 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣`);

await new Promise(resolve => setTimeout(resolve, 2000));

const sorteados = Math.floor(Math.random() * 4) + 2;
let total = 0;
let capturas = {};

for (let i = 0; i < sorteados; i++) {
let item = sortearItem(itens);

if (!capturas[item.nome]) {
capturas[item.nome] = {
qtd: 0,
valor: item.valor
};
}

capturas[item.nome].qtd++;
total += item.valor;
}

const xp = Math.floor(total / 4);
const sorteDia = Math.floor(Math.random() * 100) + 1;

const bancoPath = './banco.json';

if (!fs.existsSync(bancoPath)) {
fs.writeFileSync(bancoPath, '{}');
}

let banco = JSON.parse(fs.readFileSync(bancoPath));
const user = getUserBancoId(info, sender, isGroup);

if (!banco[user]) {
banco[user] = {
saldo: 0,
xp: 0,
inventario: {},
pets: {},
pescaPendente: null,
mineracaoPendente: null,
cacaPendente: null
};
}

if (!banco[user].inventario) banco[user].inventario = {};
if (!banco[user].pets) banco[user].pets = {};
if (!banco[user].pescaPendente) banco[user].pescaPendente = null;

banco[user].xp += xp;

banco[user].pescaPendente = {
itens: capturas,
total: total,
xp: xp
};

fs.writeFileSync(bancoPath, JSON.stringify(banco, null, 2));

let lista = '';

for (const item in capturas) {
const dados = capturas[item];
lista += `┃ 🐟 ${item} (${dados.qtd}x) • *$${dados.valor * dados.qtd}*\n`;
}

let classificacao = 'Iniciante';

if (total >= 5000) classificacao = 'Lenda dos Mares';
else if (total >= 3000) classificacao = 'Pescador Elite';
else if (total >= 1500) classificacao = 'Pescador Profissional';
else if (total >= 700) classificacao = 'Pescador Experiente';

const msgFinal = `╭━━━〔 🎣 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
${lista.trim()}
┃
┣━━━〔 💰 𝐑𝐄𝐂𝐎𝐌𝐏𝐄𝐍𝐒𝐀 〕━━━⬣
┃ 💰 Valor Total: *$${total}*
┃ ✨ Experiência: *+${xp} XP*
┃ 🎯 Capturas Realizadas: *${sorteados}*
┃
┣━━━〔 👤 𝐏𝐄𝐒𝐂𝐀𝐃𝐎𝐑 〕━━━⬣
┃ 🎣 Nome: *${pushname}*
┃ 🏅 Classificação: *${classificacao}*
┃ 🌟 Sorte do Dia: *${sorteDia}%*
┃
┣━━━〔 📦 𝐎𝐏𝐂̧𝐎̃𝐄𝐒 〕━━━⬣
┃ 📦 Guardar peixes:
┃ ${prefix}guardarpeixe
┃
┃ 💰 Vender peixes:
┃ ${prefix}venderpeixe
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍-𝐌𝐃 & 𝐙𝐘𝐑𝐎𝐍-𝐀𝐈 〕━━━⬣`;

reply(msgFinal);

} catch (e) {
console.log(e);
reply(`╭━━━〔 ❌ 𝐄𝐑𝐑𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ Não foi possível concluir a pesca.
┃ Tente novamente em alguns segundos.
╰━━━〔 ⚠️ 𝐙𝐘𝐑𝐎𝐍-𝐌𝐃 〕━━━⬣`);
}
}
break;

case 'guardarpeixe': {
try {

const bancoPath = './banco.json';

if (!fs.existsSync(bancoPath)) {
fs.writeFileSync(bancoPath, '{}');
}

let banco = JSON.parse(fs.readFileSync(bancoPath));
const user = getUserBancoId(info, sender, isGroup);

if (!banco[user] || !banco[user].pescaPendente) {
return reply('❌ Você não tem pesca pendente para guardar.');
}

if (!banco[user].inventario) banco[user].inventario = {};

const pendente = banco[user].pescaPendente.itens;

for (const item in pendente) {
if (!banco[user].inventario[item]) {
banco[user].inventario[item] = {
qtd: 0,
valor: pendente[item].valor
};
}

banco[user].inventario[item].qtd += pendente[item].qtd;
}

banco[user].pescaPendente = null;

fs.writeFileSync(bancoPath, JSON.stringify(banco, null, 2));

reply(`╭━━━〔 📦 𝐂𝐀𝐏𝐓𝐔𝐑𝐀𝐒 𝐆𝐔𝐀𝐑𝐃𝐀𝐃𝐀𝐒 〕━━━⬣
┃ ✅ Suas capturas foram guardadas com sucesso.
┃ 🎒 Inventário atualizado.
┃
┣━━━〔 📌 𝐀𝐂𝐄𝐒𝐒𝐀𝐑 〕━━━⬣
┃ 🎒 Use:
┃ ${prefix}inventario
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐅𝐈𝐒𝐇𝐈𝐍𝐆 〕━━━⬣`);

} catch (e) {
console.log(e);
reply(`╭━━━〔 ❌ 𝐄𝐑𝐑𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ Não foi possível guardar as capturas.
┃ Tente novamente.
╰━━━〔 ⚠️ 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣`);
}
}
break;

case 'venderpeixe': {
try {

const bancoPath = './banco.json';

if (!fs.existsSync(bancoPath)) {
fs.writeFileSync(bancoPath, '{}');
}

let banco = JSON.parse(fs.readFileSync(bancoPath));
const user = getUserBancoId(info, sender, isGroup);

if (!banco[user] || !banco[user].pescaPendente) {
return reply(`╭━━━〔 ❌ 𝐒𝐄𝐌 𝐂𝐀𝐏𝐓𝐔𝐑𝐀𝐒 〕━━━⬣
┃ Você não possui pesca pendente.
┃
┣━━━〔 🎣 𝐃𝐈𝐂𝐀 〕━━━⬣
┃ Use:
┃ ${prefix}pescar
┃
╰━━━〔 🎣 𝐙𝐘𝐑𝐎𝐍 𝐅𝐈𝐒𝐇𝐈𝐍𝐆 〕━━━⬣`);
}

const total = banco[user].pescaPendente.total;

banco[user].saldo += total;
banco[user].pescaPendente = null;

fs.writeFileSync(bancoPath, JSON.stringify(banco, null, 2));

reply(`╭━━━〔 💰 𝐂𝐀𝐏𝐓𝐔𝐑𝐀𝐒 𝐕𝐄𝐍𝐃𝐈𝐃𝐀𝐒 〕━━━⬣
┃ ✅ Todas as capturas foram vendidas.
┃ 💰 Valor recebido: *+$${total}*
┃ 🏦 Saldo atual: *$${banco[user].saldo}*
┃
┣━━━〔 📊 𝐙𝐘𝐑𝐎𝐍 𝐁𝐀𝐍𝐊 〕━━━⬣
┃ 🎣 Venda concluída com sucesso.
┃ 📈 Seu saldo foi atualizado.
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍-𝐌𝐃 〕━━━⬣`);

} catch (e) {
console.log(e);
reply(`╭━━━〔 ❌ 𝐄𝐑𝐑𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ Não foi possível vender as capturas.
┃ Tente novamente.
╰━━━〔 ⚠️ 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣`);
}
}
break;

case 'cassino': {
try {

const aposta = parseInt(q);

if (!q) return reply(`🎰 Digite o valor da aposta.\n\nExemplo:\n${prefix}cassino 500`);

if (isNaN(aposta) || aposta < 50) {
return reply('🎰 A aposta mínima é de $50.');
}

// banco.json
const bancoPath = './banco.json';

if (!fs.existsSync(bancoPath)) {
fs.writeFileSync(bancoPath, '{}');
}

let banco = JSON.parse(fs.readFileSync(bancoPath));

const user = getUserBancoId(info, sender, isGroup);

if (!banco[user]) {
banco[user] = {
saldo: 0,
xp: 0
};
}

if (banco[user].saldo < aposta) {
return reply(`╭━━━〔 🏦 𝐒𝐀𝐋𝐃𝐎 𝐈𝐍𝐒𝐔𝐅𝐈𝐂𝐈𝐄𝐍𝐓𝐄 〕━━━⬣
┃ ❌ Você não possui saldo suficiente.
┃
┣━━━〔 🎲 𝐀𝐏𝐎𝐒𝐓𝐀 〕━━━⬣
┃ 💸 Valor apostado: *$${aposta}*
┃ 🏦 Seu saldo: *$${banco[user].saldo}*
┃
┣━━━〔 💡 𝐃𝐈𝐂𝐀 〕━━━⬣
┃ Ganhe dinheiro usando:
┃ ${prefix}pescar
┃ ${prefix}minerar
┃ ${prefix}cacar
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐁𝐀𝐍𝐊 〕━━━⬣`);
}

const simbolos = [
'💎',
'💰',
'🍀',
'⭐',
'👑',
'🎲',
'💵',
'🎰'
];

function girar() {
return simbolos[Math.floor(Math.random() * simbolos.length)];
}

const a = girar();
const b = girar();
const c = girar();

await reply(`╭━━━〔 🎰 𝐂𝐀𝐒𝐒𝐈𝐍𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ 🎲 Girando os rolos...
┃ 💰 Aposta: *$${aposta}*
┃ 🏦 Saldo atual: *$${banco[user].saldo}*
┃
╰━━━〔 🍀 𝐁𝐎𝐀 𝐒𝐎𝐑𝐓𝐄 〕━━━⬣`);

await new Promise(r => setTimeout(r, 2000));

await reply(`╭━━━〔 🎰 𝐑𝐎𝐋𝐎𝐒 𝐄𝐌 𝐌𝐎𝐕𝐈𝐌𝐄𝐍𝐓𝐎 〕━━━⬣
┃ 🎲 Os símbolos estão girando...
┃ ✨ O destino está sendo calculado...
┃ 🍀 Que a sorte esteja com você!
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐂𝐀𝐒𝐒𝐈𝐍𝐎 〕━━━⬣`);

await new Promise(r => setTimeout(r, 2000));

let premio = 0;
let resultado = '';

if (a === b && b === c) {
premio = aposta * 5;
resultado = '🏆 𝐉𝐀𝐂𝐊𝐏𝐎𝐓!';
banco[user].saldo += premio;
} else if (a === b || b === c || a === c) {
premio = aposta * 2;
resultado = '🎉 𝐕𝐎𝐂𝐄̂ 𝐕𝐄𝐍𝐂𝐄𝐔!';
banco[user].saldo += premio;
} else {
premio = aposta;
resultado = '💀 𝐕𝐎𝐂𝐄̂ 𝐏𝐄𝐑𝐃𝐄𝐔!';
banco[user].saldo -= aposta;
}

fs.writeFileSync(bancoPath, JSON.stringify(banco, null, 2));

const sorteCassino = Math.floor(Math.random() * 100) + 1;

const cassino = `╭━━━〔 🎰 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃
┃        ${a} │ ${b} │ ${c}
┃
┣━━━〔 📊 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 〕━━━⬣
┃ ${resultado}
┃ 🎲 Aposta: *$${aposta}*
${
resultado.includes('𝐏𝐄𝐑𝐃𝐄𝐔')
? `┃ 📉 Prejuízo: *-$${aposta}*`
: `┃ 💰 Prêmio: *+$${premio}*`
}
┃ 🏦 Saldo atual: *$${banco[user].saldo}*
┃
┣━━━〔 👤 𝐉𝐎𝐆𝐀𝐃𝐎𝐑 〕━━━⬣
┃ 👤 Nome: *${pushname}*
┃ 🍀 Sorte: *${sorteCassino}%*
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍-𝐌𝐃 〕━━━⬣`;

reply(cassino);

} catch (e) {
console.log(e);
reply(`╭━━━〔 ❌ 𝐄𝐑𝐑𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ Não foi possível rodar o cassino.
┃ Tente novamente.
╰━━━〔 ⚠️ 𝐒𝐘𝐒𝐓𝐄𝐌 〕━━━⬣`);
}
}
break;

case 'mineracao':
case 'minerar': {
try {

const bancoPath = './banco.json';

if (!fs.existsSync(bancoPath)) {
fs.writeFileSync(bancoPath, '{}');
}

let banco = JSON.parse(fs.readFileSync(bancoPath));
const user = getUserBancoId(info, sender, isGroup);

if (!banco[user]) {
banco[user] = {
saldo: 0,
xp: 0,
inventario: {},
mineracaoPendente: null
};
}

if (!banco[user].inventario) banco[user].inventario = {};
if (!banco[user].mineracaoPendente) banco[user].mineracaoPendente = null;

const minerios = [
{ nome: "🪨 Pedra", valor: 20, chance: 35 },
{ nome: "⛓️ Ferro", valor: 60, chance: 25 },
{ nome: "🟫 Cobre", valor: 80, chance: 20 },
{ nome: "🥈 Prata", valor: 150, chance: 12 },
{ nome: "🥇 Ouro", valor: 250, chance: 8 },
{ nome: "💎 Diamante", valor: 600, chance: 3 },
{ nome: "🟣 Ametista", valor: 800, chance: 2 },
{ nome: "🔷 Cristal Azul", valor: 1000, chance: 1 },
{ nome: "🧱 Obsidiana", valor: 1200, chance: 0.8 },
{ nome: "🌟 Minério Estelar", valor: 2500, chance: 0.2 },
{ nome: "👑 Núcleo Lendário", valor: 5000, chance: 0.05 }
];

function sortearMinerio(minerios) {
let totalChance = minerios.reduce((acc, item) => acc + item.chance, 0);
let random = Math.random() * totalChance;

for (let item of minerios) {
random -= item.chance;
if (random <= 0) return item;
}
}

await reply(`╭━━━〔 ⛏️ 𝐌𝐈𝐍𝐄𝐑𝐀𝐂̧𝐀̃𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ 🪨 Você entrou nas minas do Zyron...
┃ ⛏️ Preparando a picareta...
┃ 🔦 Iluminando os túneis escuros...
┃ ⚠️ Cuidado com desabamentos!
┃
╰━━━〔 💎 𝐙𝐘𝐑𝐎𝐍 𝐌𝐈𝐍𝐄 〕━━━⬣`);

await new Promise(resolve => setTimeout(resolve, 2000));

await reply(`╭━━━〔 🕳️ 𝐌𝐈𝐍𝐀 𝐏𝐑𝐎𝐅𝐔𝐍𝐃𝐀 〕━━━⬣
┃ ⛏️ Você começou a quebrar as rochas...
┃ 💥 Fragmentos caem pelo chão...
┃ 💎 Algo brilhou dentro da parede...
┃ 🔎 Analisando minério encontrado...
┃
╰━━━〔 ⛏️ 𝐌𝐈𝐍𝐄𝐑𝐀𝐂̧𝐀̃𝐎 𝐄𝐌 𝐀𝐍𝐃𝐀𝐌𝐄𝐍𝐓𝐎 〕━━━⬣`);

await new Promise(resolve => setTimeout(resolve, 2000));

await reply(`╭━━━〔 💎 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎𝐒 〕━━━⬣
┃ 📦 Separando os recursos minerados...
┃ ⚖️ Calculando valor da mineração...
┃ ✨ Convertendo esforço em XP...
┃ 🏦 Preparando relatório do Zyron Bank...
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍-𝐌𝐃 〕━━━⬣`);

await new Promise(resolve => setTimeout(resolve, 2000));

const quantidade = Math.floor(Math.random() * 4) + 2;
let total = 0;
let coletados = {};

for (let i = 0; i < quantidade; i++) {
let item = sortearMinerio(minerios);

if (!coletados[item.nome]) {
coletados[item.nome] = {
qtd: 0,
valor: item.valor
};
}

coletados[item.nome].qtd++;
total += item.valor;
}

const xp = Math.floor(total / 5);
const energia = Math.floor(Math.random() * 20) + 10;
const sorteDia = Math.floor(Math.random() * 100) + 1;

banco[user].xp += xp;

banco[user].mineracaoPendente = {
itens: coletados,
total: total,
xp: xp
};

fs.writeFileSync(bancoPath, JSON.stringify(banco, null, 2));

let lista = '';

for (const item in coletados) {
const dados = coletados[item];
lista += `⌬ ${item} (${dados.qtd}x) • *$${dados.valor * dados.qtd}*\n`;
}

const msgFinal = `╭━━━〔 ⛏️ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
${lista.trim()}
┃
┣━━━〔 💎 𝐌𝐈𝐍𝐄𝐑𝐀𝐂̧𝐀̃𝐎 〕━━━⬣
┃ 💰 Valor Total: *$${total}*
┃ ✨ Experiência: *+${xp} XP*
┃ ⚡ Energia Gasta: *-${energia}*
┃ ⛏️ Minérios Coletados: *${quantidade}*
┃
┣━━━〔 👤 𝐌𝐈𝐍𝐄𝐑𝐀𝐃𝐎𝐑 〕━━━⬣
┃ 👤 Nome: *${pushname}*
┃ 🏅 Classe: *${classificacao}*
┃ 🌟 Sorte do Dia: *${sorteDia}%*
┃
┣━━━〔 📦 𝐎𝐏𝐂̧𝐎̃𝐄𝐒 〕━━━⬣
┃ 📦 Guardar minérios:
┃ ${prefix}guardarminerio
┃
┃ 💰 Vender minérios:
┃ ${prefix}venderminerio
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐌𝐈𝐍𝐈𝐍𝐆 〕━━━⬣`;

reply(msgFinal);

} catch (e) {
console.log(e);
reply('Erro ao minerar.');
}
}
break;

case 'guardarminerio': {
try {

const bancoPath = './banco.json';

if (!fs.existsSync(bancoPath)) {
fs.writeFileSync(bancoPath, '{}');
}

let banco = JSON.parse(fs.readFileSync(bancoPath));
const user = getUserBancoId(info, sender, isGroup);

if (!banco[user] || !banco[user].mineracaoPendente) {
return reply('❌ Você não tem mineração pendente para guardar.');
}

if (!banco[user].inventario) banco[user].inventario = {};

const pendente = banco[user].mineracaoPendente.itens;

for (const item in pendente) {
if (!banco[user].inventario[item]) {
banco[user].inventario[item] = {
qtd: 0,
valor: pendente[item].valor
};
}

banco[user].inventario[item].qtd += pendente[item].qtd;
}

banco[user].mineracaoPendente = null;

fs.writeFileSync(bancoPath, JSON.stringify(banco, null, 2));

reply(`╭━━━〔 📦 𝐌𝐈𝐍𝐄́𝐑𝐈𝐎𝐒 𝐆𝐔𝐀𝐑𝐃𝐀𝐃𝐎𝐒 〕━━━⬣
┃ ✅ Os minérios foram armazenados com sucesso.
┃ 🎒 Inventário atualizado.
┃
┣━━━〔 💎 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 〕━━━⬣
┃ ⛏️ Todos os minérios coletados
┃ foram enviados para seu inventário.
┃
┣━━━〔 📌 𝐀𝐂𝐄𝐒𝐒𝐀𝐑 〕━━━⬣
┃ 🎒 Ver inventário:
┃ ${prefix}inventario
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐌𝐈𝐍𝐈𝐍𝐆 〕━━━⬣`);

} catch (e) {
console.log(e);
reply('Erro ao guardar minérios.');
}
}
break;

case 'venderminerio': {
try {

const bancoPath = './banco.json';

if (!fs.existsSync(bancoPath)) {
fs.writeFileSync(bancoPath, '{}');
}

let banco = JSON.parse(fs.readFileSync(bancoPath));
const user = getUserBancoId(info, sender, isGroup);

if (!banco[user] || !banco[user].mineracaoPendente) {
return reply('❌ Você não tem mineração pendente para vender.');
}

const pendente = banco[user].mineracaoPendente;
const total = pendente.total;

banco[user].saldo += total;
banco[user].mineracaoPendente = null;

fs.writeFileSync(bancoPath, JSON.stringify(banco, null, 2));

reply(`╭━━━〔 💰 𝐌𝐈𝐍𝐄́𝐑𝐈𝐎𝐒 𝐕𝐄𝐍𝐃𝐈𝐃𝐎𝐒 〕━━━⬣
┃ ✅ Todos os minérios foram vendidos.
┃
┣━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐁𝐀𝐍𝐊 〕━━━⬣
┃ 💰 Valor Recebido: *+$${total}*
┃ 🏦 Saldo Atual: *$${banco[user].saldo}*
┃
┣━━━〔 📈 𝐓𝐑𝐀𝐍𝐒𝐀𝐂̧𝐀̃𝐎 〕━━━⬣
┃ ⛏️ Recursos convertidos em dinheiro.
┃ ✅ Operação concluída com sucesso.
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐌𝐈𝐍𝐈𝐍𝐆 〕━━━⬣`);

} catch (e) {
console.log(e);
reply('Erro ao vender minérios.');
}
}
break;

case 'inventario':
case 'inv': {
try {

const bancoPath = './banco.json';

if (!fs.existsSync(bancoPath)) {
fs.writeFileSync(bancoPath, '{}');
}

let banco = JSON.parse(fs.readFileSync(bancoPath));
const user = getUserBancoId(info, sender, isGroup);

if (!banco[user]) {
banco[user] = {
saldo: 0,
xp: 0,
inventario: {},
mineracaoPendente: null
};
}

if (!banco[user].inventario) banco[user].inventario = {};

let listaInv = '';

for (const item in banco[user].inventario) {
const dados = banco[user].inventario[item];

const qtd = typeof dados === 'number' ? dados : dados.qtd || 1;
const valor = typeof dados === 'number' ? 0 : dados.valor || 0;

const itemLoja = lojaItems.find(i => i.item === item);
const nomeItem = itemLoja ? itemLoja.nome : item;
const precoItem = itemLoja ? itemLoja.preco : valor;

listaInv += `⌬ ${nomeItem} (${qtd}x) • *$${precoItem * qtd}*\n`;
}

if (!listaInv) {
listaInv = `┃ 📦 Inventário vazio.`;
}

reply(`╭━━━〔 🎒 𝐈𝐍𝐕𝐄𝐍𝐓𝐀́𝐑𝐈𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ 👤 Usuário: ${pushname}
┃
┣━━━〔 📦 𝐈𝐓𝐄𝐍𝐒 𝐀𝐑𝐌𝐀𝐙𝐄𝐍𝐀𝐃𝐎𝐒 〕━━━⬣
${listaInv.trim()}
┃
┣━━━〔 📊 𝐒𝐈𝐒𝐓𝐄𝐌𝐀 〕━━━⬣
┃ 🎣 Itens de pesca
┃ ⛏️ Recursos minerados
┃ 🏹 Itens de caça
┃ 🛒 Itens comprados
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐒𝐓𝐎𝐑𝐀𝐆𝐄 〕━━━⬣`);

fs.writeFileSync(bancoPath, JSON.stringify(banco, null, 2));

} catch (e) {
console.log(e);
reply('Erro ao abrir inventário.');
}
}
break;

case 'batalhanaval':
case 'naval': {
try {

const bancoPath = './banco.json';

if (!fs.existsSync(bancoPath)) {
fs.writeFileSync(bancoPath, '{}');
}

let banco = JSON.parse(fs.readFileSync(bancoPath));
const user = getUserBancoId(info, sender, isGroup);

if (!banco[user]) {
banco[user] = {
saldo: 0,
xp: 0,
inventario: {}
};
}

const tiros = Math.floor(Math.random() * 5) + 3;
let acertos = 0;
let recompensa = 0;
let resultadoTiros = '';

const alvos = [
{ nome: '🌊 Água', valor: 0, chance: 45 },
{ nome: '🚤 Barco Pequeno', valor: 150, chance: 25 },
{ nome: '⛵ Veleiro', valor: 250, chance: 15 },
{ nome: '🚢 Navio Cargueiro', valor: 500, chance: 8 },
{ nome: '🛳️ Cruzeiro', valor: 800, chance: 4 },
{ nome: '⚓ Porta-Aviões', valor: 1500, chance: 2 },
{ nome: '🏴‍☠️ Navio Pirata', valor: 3000, chance: 1 }
];

function sortearAlvo(lista) {
let totalChance = lista.reduce((acc, item) => acc + item.chance, 0);
let random = Math.random() * totalChance;

for (let item of lista) {
random -= item.chance;
if (random <= 0) return item;
}
}

await reply(`╭━━━〔 🚢 𝐁𝐀𝐓𝐀𝐋𝐇𝐀 𝐍𝐀𝐕𝐀𝐋 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ 🌊 O oceano de combate foi aberto...
┃ 🎯 Preparando os canhões...
┃ 🧭 Procurando embarcações inimigas...
┃ ⚓ Frota em posição de ataque...
┃
╰━━━〔 🚀 𝐙𝐘𝐑𝐎𝐍 𝐅𝐋𝐄𝐄𝐓 〕━━━⬣`);

await new Promise(resolve => setTimeout(resolve, 2000));

await reply(`╭━━━〔 💣 𝐀𝐓𝐀𝐐𝐔𝐄 𝐈𝐍𝐈𝐂𝐈𝐀𝐃𝐎 〕━━━⬣
┃ 🚢 Seu navio entrou em posição.
┃ 🔥 Canhões carregados.
┃ 🎯 Travando mira no alvo.
┃ ⚠️ Disparando contra a embarcação inimiga...
┃
╰━━━〔 ⚓ 𝐙𝐘𝐑𝐎𝐍 𝐖𝐀𝐑 𝐒𝐘𝐒𝐓𝐄𝐌 〕━━━⬣`);

await new Promise(resolve => setTimeout(resolve, 2000));

for (let i = 1; i <= tiros; i++) {
let alvo = sortearAlvo(alvos);

if (alvo.valor > 0) {
acertos++;
recompensa += alvo.valor;
resultadoTiros += `⌬ 🎯 Tiro ${i}: ${alvo.nome} • *+$${alvo.valor}*\n`;
} else {
resultadoTiros += `⌬ 💦 Tiro ${i}: ${alvo.nome} • *Errou*\n`;
}
}

const xp = Math.floor(recompensa / 5);
const sorteDia = Math.floor(Math.random() * 100) + 1;

if (!banco[user].batalhaNaval) {
banco[user].batalhaNaval = {
partidas: 0,
vitorias: 0,
derrotas: 0,
recompensaTotal: 0
};
}

banco[user].batalhaNaval.partidas += 1;
banco[user].batalhaNaval.recompensaTotal += recompensa;

if (recompensa > 0) {
banco[user].batalhaNaval.vitorias += 1;
} else {
banco[user].batalhaNaval.derrotas += 1;
}

banco[user].saldo += recompensa;
banco[user].xp += xp;

fs.writeFileSync(bancoPath, JSON.stringify(banco, null, 2));

const msg = `╭━━━〔 🚢 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐍𝐀𝐕𝐀𝐋 〕━━━⬣
${resultadoTiros.trim()}
┃
┣━━━〔 ⚔️ 𝐂𝐎𝐌𝐁𝐀𝐓𝐄 〕━━━⬣
┃ 🎯 Tiros Disparados: *${tiros}*
┃ 💥 Acertos Confirmados: *${acertos}*
┃ 💰 Recompensa: *+$${recompensa}*
┃ 🏦 Saldo Atual: *$${banco[user].saldo}*
┃ ✨ Experiência: *+${xp} XP*
┃
┣━━━〔 👤 𝐂𝐎𝐌𝐀𝐍𝐃𝐀𝐍𝐓𝐄 〕━━━⬣
┃ 👤 Nome: *${pushname}*
┃ 🏅 Patente: *${patente}*
┃ 🌟 Sorte do Dia: *${sorteDia}%*
┃
┣━━━〔 🚀 𝐅𝐑𝐎𝐓𝐀 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ ⚓ Missão concluída.
┃ 🎖️ Recompensa creditada.
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐖𝐀𝐑 𝐒𝐘𝐒𝐓𝐄𝐌 〕━━━⬣`;

reply(msg);

} catch (e) {
console.log(e);
reply('Erro na batalha naval.');
}
}
break;

case 'caca':
case 'caçar':
case 'cacar': {
try {

const bancoPath = './banco.json';

if (!fs.existsSync(bancoPath)) {
fs.writeFileSync(bancoPath, '{}');
}

let banco = carregarBanco();

const user = getUserBancoId(info, sender, isGroup);
console.log("CACA USER:", user);

verificarConta(banco, user);

if (!banco[user]) {
banco[user] = {
saldo: 0,
xp: 0,
inventario: {},
pets: {},
cacaPendente: null
};
}

if (!banco[user].inventario) banco[user].inventario = {};
if (!banco[user].pets) banco[user].pets = {};
if (!banco[user].cacaPendente) banco[user].cacaPendente = null;

const animais = [
{ nome: "🐇 Coelho", valor: 60, chance: 35 },
{ nome: "🦆 Pato Selvagem", valor: 80, chance: 30 },
{ nome: "🦊 Raposa", valor: 150, chance: 20 },
{ nome: "🐗 Javali", valor: 250, chance: 10 },
{ nome: "🦌 Veado", valor: 400, chance: 10 },
{ nome: "🐺 Lobo", valor: 600, chance: 8 },
{ nome: "🐻 Urso", valor: 1000, chance: 10 },
{ nome: "🐉 Dragão da Floresta", valor: 5463, chance: 4 },
{ nome: "🦕 Monstro do Lago ness", valor: 6789, chance: 3 },
{ nome: "🐲 Dragão de komodo", valor: 7945, chance: 2 },
{ nome: "🐦‍🔥 Fênix", valor: 8390, chance: 1 },
{ nome: "🦑 Luiz Inácio Lula da Silva", valor: 0, chance: 50 },
{ nome: "☢️ Bomba radioativa", valor: 10000, chance: 0.1 }
];

function sortearAnimal(lista) {
let totalChance = lista.reduce((acc, item) => acc + item.chance, 0);
let random = Math.random() * totalChance;

for (let item of lista) {
random -= item.chance;
if (random <= 0) return item;
}
return lista[0];
}

await reply(`╭━━━〔 🏹 𝐂𝐀𝐂̧𝐀 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ 🌲 Você entrou na floresta selvagem...
┃ 🏹 Preparando o arco de caça...
┃ 👣 Procurando rastros de animais...
┃ 🍃 O ambiente está silencioso...
┃
╰━━━〔 🌿 𝐙𝐘𝐑𝐎𝐍 𝐇𝐔𝐍𝐓𝐈𝐍𝐆 〕━━━⬣`);

await new Promise(resolve => setTimeout(resolve, 2000));

await reply(`╭━━━〔 🌲 𝐅𝐋𝐎𝐑𝐄𝐒𝐓𝐀 𝐏𝐑𝐎𝐅𝐔𝐍𝐃𝐀 〕━━━⬣
┃ 👀 Algo se move entre as árvores...
┃ 🍃 O vento mudou de direção...
┃ 🐾 Rastros foram encontrados...
┃ ⚠️ Você prepara o disparo...
┃
╰━━━〔 🎯 𝐀𝐋𝐕𝐎 𝐄𝐌 𝐕𝐈𝐒𝐓𝐀 〕━━━⬣`);

await new Promise(resolve => setTimeout(resolve, 2000));

const tentativas = Math.floor(Math.random() * 4) + 2;
let total = 0;
let capturas = {};

for (let i = 0; i < tentativas; i++) {
let animal = sortearAnimal(animais);

if (!capturas[animal.nome]) {
capturas[animal.nome] = {
qtd: 0,
valor: animal.valor
};
}

capturas[animal.nome].qtd++;
total += animal.valor;
}

const xp = Math.floor(total / 5);
const energia = Math.floor(Math.random() * 20) + 10;
const sorteDia = Math.floor(Math.random() * 100) + 1;

banco[user].xp += xp;

banco[user].cacaPendente = {
itens: capturas,
total: total,
xp: xp
};

fs.writeFileSync(bancoPath, JSON.stringify(banco, null, 2));

let lista = '';

for (const item in capturas) {
const dados = capturas[item];
lista += `⌬ ${item} (${dados.qtd}x) • *$${dados.valor * dados.qtd}*\n`;
}

const msgFinal = `╭━━━〔 🏹 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
${lista.trim()}
┃
┣━━━〔 🎯 𝐂𝐀𝐂̧𝐀 〕━━━⬣
┃ 💰 Valor Total: *$${total}*
┃ ✨ Experiência: *+${xp} XP*
┃ ⚡ Energia Gasta: *-${energia}*
┃ 🐾 Animais Encontrados: *${tentativas}*
┃
┣━━━〔 👤 𝐂𝐀𝐂̧𝐀𝐃𝐎𝐑 〕━━━⬣
┃ 🏹 Nome: *${pushname}*
┃ 🏅 Classe: *${classificacao}*
┃ 🌟 Sorte do Dia: *${sorteDia}%*
┃
┣━━━〔 🐾 𝐎𝐏𝐂̧𝐎̃𝐄𝐒 〕━━━⬣
┃ 🐾 Guardar animais:
┃ ${prefix}guardaranimal
┃
┃ 💰 Vender animais:
┃ ${prefix}venderanimal
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐇𝐔𝐍𝐓𝐈𝐍𝐆 〕━━━⬣`;

reply(msgFinal);

} catch (e) {
console.log(e);
reply('Erro ao caçar.');
}
}
break;

case 'pets':
case 'meuspets': {
console.log("✅ ENTROU NO PETS");
try {

let banco = carregarBanco();

const user = getUserBancoId(info, sender, isGroup);
console.log("GUARDAR USER:", user);

verificarConta(banco, user);

console.log("PENDENTE:", banco[user]?.cacaPendente);

if (!banco[user].cacaPendente || !banco[user].cacaPendente.itens) {
return reply(`❌ Você não tem nenhum animal pendente.\n\nUse *${prefix}cacar* primeiro.`);
}

const capturas = banco[user].cacaPendente.itens;

let lista = '';

for (const animal in capturas) {
const dados = capturas[animal];

if (!banco[user].pets[animal]) {
banco[user].pets[animal] = {
qtd: 0,
valor: dados.valor || 0
};
}

banco[user].pets[animal].qtd += dados.qtd || 1;
banco[user].pets[animal].valor = dados.valor || banco[user].pets[animal].valor || 0;

lista += `⌬ 🐾 ${animal} (+${dados.qtd || 1}x)\n`;
}

banco[user].cacaPendente = null;

salvarBanco(banco);

reply(`╭━━━〔 🐾 𝐏𝐄𝐓𝐒 𝐀𝐃𝐈𝐂𝐈𝐎𝐍𝐀𝐃𝐎𝐒 〕━━━⬣
${lista.trim()}
┃
┣━━━〔 👤 𝐏𝐑𝐎𝐏𝐑𝐈𝐄𝐓𝐀́𝐑𝐈𝐎 〕━━━⬣
┃ 🏹 Dono: *${pushname}*
┃
┣━━━〔 📌 𝐀𝐂𝐄𝐒𝐒𝐀𝐑 〕━━━⬣
┃ 🐾 Ver coleção:
┃ ${prefix}pets
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐏𝐄𝐓 𝐒𝐘𝐒𝐓𝐄𝐌 〕━━━⬣`);

} catch (e) {
console.log(e);
reply('❌ Erro ao guardar animal.');
}
}
break;

case 'venderitem': {
try {

let banco = carregarBanco();
const user = getUserBancoId(info, sender, isGroup);

verificarConta(banco, user);

if (!q) return reply(`Uso:\n${prefix}venderitem nome quantidade`);

const args = q.split(' ');
const qtd = parseInt(args[args.length - 1]);

if (isNaN(qtd) || qtd < 1)
return reply('Quantidade inválida.');

const item = args.slice(0, -1).join(' ');

if (!banco[user].inventario[item])
return reply('Você não possui esse item.');

if (banco[user].inventario[item].qtd < qtd)
return reply('Você não possui essa quantidade.');

const valorUnit = banco[user].inventario[item].valor || 0;
const total = valorUnit * qtd;

banco[user].inventario[item].qtd -= qtd;
banco[user].saldo += total;

if (banco[user].inventario[item].qtd <= 0)
delete banco[user].inventario[item];

salvarBanco(banco);

reply(`💸 Item vendido!

📦 Item: ${item}
🔢 Quantidade: ${qtd}
💰 Recebido: $${total}`);

} catch (e) {
console.log(e);
reply('Erro ao vender item.');
}
}
break;

case 'venderanimal':
case 'venderpet': {
try {

let banco = carregarBanco();
const user = getUserBancoId(info, sender, isGroup);

verificarConta(banco, user);

if (!banco[user].cacaPendente || !banco[user].cacaPendente.itens) {
return reply(`❌ Você não tem nenhum animal pendente.\n\nUse *${prefix}cacar* primeiro.`);
}

const capturas = banco[user].cacaPendente.itens;
const total = banco[user].cacaPendente.total || 0;

banco[user].saldo += total;
banco[user].cacaPendente = null;

salvarBanco(banco);

reply(`╭━━━〔 💰 𝐌𝐄𝐑𝐂𝐀𝐃𝐎 𝐃𝐄 𝐀𝐍𝐈𝐌𝐀𝐈𝐒 〕━━━⬣
┃ ✅ Todos os animais foram vendidos.
┃
┣━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐁𝐀𝐍𝐊 〕━━━⬣
┃ 💰 Valor Recebido: *+$${total}*
┃ 🏦 Saldo Atual: *$${banco[user].saldo}*
┃
┣━━━〔 📊 𝐓𝐑𝐀𝐍𝐒𝐀𝐂̧𝐀̃𝐎 〕━━━⬣
┃ 🐾 Animais convertidos em Zyron Cash.
┃ ✅ Operação concluída com sucesso.
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐇𝐔𝐍𝐓𝐈𝐍𝐆 〕━━━⬣`);

} catch (e) {
console.log(e);
reply('❌ Erro ao vender animal.');
}
}
break;

case 'roleta': {
try {
if (!q) return reply(`_Exemplo: ${prefix + command} teste, teste1, teste2_`);

await conn.sendMessage(from, { react: { text: '🎰', key: info.key } });

const opcoes = q.split(',').map(v => v.trim()).filter(Boolean);

if (opcoes.length < 2) return reply('_Mínimo de 2 opções._');

const { data } = await axios.get('https://systemzone.store/api/canvas/roleta', {
params: {
text: opcoes.join(',')
}
});

if (!data?.status || !data?.result?.download) {
throw new Error('API falhou');
}

await conn.sendMessage(from, {
video: { url: data.result.download },
ptv: true,
mimetype: 'video/mp4'
}, { quoted: selo });

await conn.sendMessage(from, { react: { text: '✅', key: info.key } });

} catch (e) {
console.error('[ERRO ROLETA]', e?.response?.data || e.message);

await conn.sendMessage(from, { react: { text: '❌', key: info.key } });

reply('_Erro ao gerar a roleta._');
}
}
break;

case 'leilao': {
try {

const fs = require('fs');
const path = './database/leiloes.json';

if (!fs.existsSync('./database')) fs.mkdirSync('./database');
if (!fs.existsSync(path)) fs.writeFileSync(path, '{}');

const leiloes = JSON.parse(fs.readFileSync(path));
const banco = carregarBanco();

const sub = args[0]?.toLowerCase();
const userId = jidNormalizedUser(sender);

if (!sub) {
return reply(`╭━━━〔 🏦 𝐋𝐄𝐈𝐋𝐀̃𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ 📦 Criar leilão:
┃ ${prefix}leilao criar item valor
┃
┃ 📋 Listar leilão:
┃ ${prefix}leilao listar
┃
┃ 💰 Dar lance:
┃ ${prefix}leilao lance valor
┃
┃ ❌ Cancelar:
┃ ${prefix}leilao cancelar
┃
┃ 🏆 Finalizar:
┃ ${prefix}leilao finalizar
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐀𝐔𝐂𝐓𝐈𝐎𝐍 〕━━━⬣`);
}

if (sub === 'criar') {

if (leiloes[from]) {
return reply(`╭━━━〔 ❌ 𝐋𝐄𝐈𝐋𝐀̃𝐎 𝐀𝐓𝐈𝐕𝐎 〕━━━⬣
┃ Já existe um leilão ativo neste grupo.
┃ Finalize ou cancele antes de criar outro.
╰━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐀𝐔𝐂𝐓𝐈𝐎𝐍 〕━━━⬣`);
}

const item = args[1]?.toLowerCase();
const valor = Number(args[2]);

if (!item || !valor) {
return reply(`╭━━━〔 📦 𝐂𝐑𝐈𝐀𝐑 𝐋𝐄𝐈𝐋𝐀̃𝐎 〕━━━⬣
┃ Use:
┃ ${prefix}leilao criar pcgamer 50000
╰━━━〔 💰 𝐙𝐘𝐑𝐎𝐍 𝐌𝐀𝐑𝐊𝐄𝐓 〕━━━⬣`);
}

if (!banco[userId]?.inventario?.[item]) {
return reply(`╭━━━〔 ❌ 𝐈𝐓𝐄𝐌 𝐍𝐀̃𝐎 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎 〕━━━⬣
┃ Você não possui esse item.
┃
┣━━━〔 🎒 𝐈𝐍𝐕𝐄𝐍𝐓𝐀́𝐑𝐈𝐎 〕━━━⬣
┃ Veja seus itens:
┃ ${prefix}inventario
╰━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐀𝐔𝐂𝐓𝐈𝐎𝐍 〕━━━⬣`);
}

leiloes[from] = {
dono: userId,
item,
valorInicial: valor,
maiorLance: valor,
maiorLanceador: null,
criado: Date.now()
};

fs.writeFileSync(path, JSON.stringify(leiloes, null, 2));

return reply(`╭━━━〔 🏦 𝐋𝐄𝐈𝐋𝐀̃𝐎 𝐈𝐍𝐈𝐂𝐈𝐀𝐃𝐎 〕━━━⬣
┃ 📦 Item: *${item}*
┃ 💰 Lance Inicial: *R$${valor}*
┃ 👤 Dono: *${pushname}*
┃
┣━━━〔 💸 𝐏𝐀𝐑𝐓𝐈𝐂𝐈𝐏𝐀𝐑 〕━━━⬣
┃ Dê um lance usando:
┃ ${prefix}leilao lance valor
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐀𝐔𝐂𝐓𝐈𝐎𝐍 〕━━━⬣`);
}

if (sub === 'listar') {

const l = leiloes[from];

if (!l) {
return reply(`╭━━━〔 ❌ 𝐒𝐄𝐌 𝐋𝐄𝐈𝐋𝐀̃𝐎 〕━━━⬣
┃ Não existe leilão ativo.
┃
┃ Crie um usando:
┃ ${prefix}leilao criar item valor
╰━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐀𝐔𝐂𝐓𝐈𝐎𝐍 〕━━━⬣`);
}

return conn.sendMessage(from, {
text: `╭━━━〔 🏦 𝐋𝐄𝐈𝐋𝐀̃𝐎 𝐀𝐓𝐈𝐕𝐎 〕━━━⬣
┃ 📦 Item: *${l.item}*
┃ 👤 Dono: @${l.dono.split('@')[0]}
┃ 💰 Lance Atual: *R$${l.maiorLance}*
┃ 🏆 Líder: ${
l.maiorLanceador
? '@' + l.maiorLanceador.split('@')[0]
: 'Nenhum'
}
┃
┣━━━〔 💸 𝐃𝐀𝐑 𝐋𝐀𝐍𝐂𝐄 〕━━━⬣
┃ ${prefix}leilao lance valor
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐌𝐀𝐑𝐊𝐄𝐓 〕━━━⬣`,
mentions: [l.dono, l.maiorLanceador].filter(Boolean)
}, { quoted: selo });
}

if (sub === 'lance') {

const l = leiloes[from];

if (!l) {
return reply(`╭━━━〔 ❌ 𝐒𝐄𝐌 𝐋𝐄𝐈𝐋𝐀̃𝐎 〕━━━⬣
┃ Não existe leilão ativo.
╰━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐀𝐔𝐂𝐓𝐈𝐎𝐍 〕━━━⬣`);
}

const valor = Number(args[1]);

if (!valor) {
return reply(`╭━━━〔 💰 𝐋𝐀𝐍𝐂𝐄 𝐈𝐍𝐕𝐀́𝐋𝐈𝐃𝐎 〕━━━⬣
┃ Use:
┃ ${prefix}leilao lance 60000
╰━━━〔 💸 𝐙𝐘𝐑𝐎𝐍 𝐁𝐈𝐃 〕━━━⬣`);
}

if (valor <= l.maiorLance) {
return reply(`╭━━━〔 ❌ 𝐋𝐀𝐍𝐂𝐄 𝐁𝐀𝐈𝐗𝐎 〕━━━⬣
┃ Seu lance precisa ser maior que:
┃ *R$${l.maiorLance}*
╰━━━〔 💸 𝐙𝐘𝐑𝐎𝐍 𝐁𝐈𝐃 〕━━━⬣`);
}

if (!banco[userId]) {
return reply(`╭━━━〔 ❌ 𝐒𝐄𝐌 𝐂𝐎𝐍𝐓𝐀 〕━━━⬣
┃ Você não possui conta no banco.
╰━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐁𝐀𝐍𝐊 〕━━━⬣`);
}

if ((banco[userId].saldo || 0) < valor) {
return reply(`╭━━━〔 🏦 𝐒𝐀𝐋𝐃𝐎 𝐈𝐍𝐒𝐔𝐅𝐈𝐂𝐈𝐄𝐍𝐓𝐄 〕━━━⬣
┃ ❌ Você não tem saldo suficiente.
┃ 💰 Lance: *R$${valor}*
┃ 🏦 Seu saldo: *R$${banco[userId].saldo || 0}*
╰━━━〔 💸 𝐙𝐘𝐑𝐎𝐍 𝐁𝐈𝐃 〕━━━⬣`);
}

l.maiorLance = valor;
l.maiorLanceador = userId;

fs.writeFileSync(path, JSON.stringify(leiloes, null, 2));

return conn.sendMessage(from, {
text: `╭━━━〔 🏆 𝐍𝐎𝐕𝐎 𝐋𝐀𝐍𝐂𝐄 〕━━━⬣
┃ 👤 Usuário: @${userId.split('@')[0]}
┃ 💰 Lance: *R$${valor}*
┃ 📦 Item: *${l.item}*
┃
╰━━━〔 🔥 𝐙𝐘𝐑𝐎𝐍 𝐀𝐔𝐂𝐓𝐈𝐎𝐍 〕━━━⬣`,
mentions: [userId]
}, { quoted: selo });
}

if (sub === 'cancelar') {

const l = leiloes[from];

if (!l) {
return reply(`╭━━━〔 ❌ 𝐒𝐄𝐌 𝐋𝐄𝐈𝐋𝐀̃𝐎 〕━━━⬣
┃ Não existe leilão para cancelar.
╰━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐀𝐔𝐂𝐓𝐈𝐎𝐍 〕━━━⬣`);
}

if (l.dono !== userId && !So_Dono) {
return reply(`╭━━━〔 🔒 𝐀𝐂𝐄𝐒𝐒𝐎 𝐍𝐄𝐆𝐀𝐃𝐎 〕━━━⬣
┃ Apenas o dono do leilão pode cancelar.
╰━━━〔 ⚠️ 𝐙𝐘𝐑𝐎𝐍 𝐒𝐘𝐒𝐓𝐄𝐌 〕━━━⬣`);
}

delete leiloes[from];

fs.writeFileSync(path, JSON.stringify(leiloes, null, 2));

return reply(`╭━━━〔 ✅ 𝐋𝐄𝐈𝐋𝐀̃𝐎 𝐂𝐀𝐍𝐂𝐄𝐋𝐀𝐃𝐎 〕━━━⬣
┃ O leilão foi cancelado com sucesso.
╰━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐀𝐔𝐂𝐓𝐈𝐎𝐍 〕━━━⬣`);
}

if (sub === 'finalizar') {

const l = leiloes[from];

if (!l) {
return reply(`╭━━━〔 ❌ 𝐒𝐄𝐌 𝐋𝐄𝐈𝐋𝐀̃𝐎 〕━━━⬣
┃ Não existe leilão ativo.
╰━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐀𝐔𝐂𝐓𝐈𝐎𝐍 〕━━━⬣`);
}

if (l.dono !== userId && !So_Dono) {
return reply(`╭━━━〔 🔒 𝐀𝐂𝐄𝐒𝐒𝐎 𝐍𝐄𝐆𝐀𝐃𝐎 〕━━━⬣
┃ Apenas o dono do leilão pode finalizar.
╰━━━〔 ⚠️ 𝐙𝐘𝐑𝐎𝐍 𝐒𝐘𝐒𝐓𝐄𝐌 〕━━━⬣`);
}

if (!l.maiorLanceador) {
return reply(`╭━━━〔 ❌ 𝐒𝐄𝐌 𝐋𝐀𝐍𝐂𝐄𝐒 〕━━━⬣
┃ Nenhum lance foi recebido ainda.
╰━━━〔 💸 𝐙𝐘𝐑𝐎𝐍 𝐁𝐈𝐃 〕━━━⬣`);
}

if ((banco[l.maiorLanceador]?.saldo || 0) < l.maiorLance) {
return reply(`╭━━━〔 ❌ 𝐒𝐀𝐋𝐃𝐎 𝐈𝐍𝐕𝐀́𝐋𝐈𝐃𝐎 〕━━━⬣
┃ O vencedor não possui saldo suficiente.
┃ Leilão não finalizado.
╰━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐁𝐀𝐍𝐊 〕━━━⬣`);
}

banco[l.maiorLanceador].saldo -= l.maiorLance;

if (!banco[l.dono]) banco[l.dono] = { saldo: 0, inventario: {} };
if (!banco[l.dono].inventario) banco[l.dono].inventario = {};

banco[l.dono].saldo += l.maiorLance;

if (!banco[l.maiorLanceador].inventario) {
banco[l.maiorLanceador].inventario = {};
}

banco[l.maiorLanceador].inventario[l.item] =
(banco[l.maiorLanceador].inventario[l.item] || 0) + 1;

delete leiloes[from];

salvarBanco(banco);
fs.writeFileSync(path, JSON.stringify(leiloes, null, 2));

return conn.sendMessage(from, {
text: `╭━━━〔 🏆 𝐋𝐄𝐈𝐋𝐀̃𝐎 𝐅𝐈𝐍𝐀𝐋𝐈𝐙𝐀𝐃𝐎 〕━━━⬣
┃ 📦 Item: *${l.item}*
┃ 👤 Vencedor: @${l.maiorLanceador.split('@')[0]}
┃ 💰 Valor Final: *R$${l.maiorLance}*
┃
┣━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐁𝐀𝐍𝐊 〕━━━⬣
┃ ✅ Pagamento realizado.
┃ 🎒 Item enviado ao inventário.
┃ 💸 Valor enviado ao vendedor.
┃
╰━━━〔 ❤️‍🔥 𝐙𝐘𝐑𝐎𝐍 𝐀𝐔𝐂𝐓𝐈𝐎𝐍 〕━━━⬣`,
mentions: [l.maiorLanceador]
}, { quoted: selo });
}

reply(`╭━━━〔 ❌ 𝐎𝐏𝐂̧𝐀̃𝐎 𝐈𝐍𝐕𝐀́𝐋𝐈𝐃𝐀 〕━━━⬣
┃ Use:
┃ ${prefix}leilao
╰━━━〔 🏦 𝐙𝐘𝐑𝐎𝐍 𝐀𝐔𝐂𝐓𝐈𝐎𝐍 〕━━━⬣`);

} catch (e) {
console.log('[LEILAO ERROR]', e);
reply(`╭━━━〔 ❌ 𝐄𝐑𝐑𝐎 𝐙𝐘𝐑𝐎𝐍 〕━━━⬣
┃ Não foi possível executar o leilão.
┃ Verifique o console.
╰━━━〔 ⚠️ 𝐒𝐘𝐒𝐓𝐄𝐌 〕━━━⬣`);
}
}
break;

//COMANDOS UTEIS

case 'luademel':
case 'lua_de_mel': {
const fs = require('fs');
const path = './database/familia.json';

if (!fs.existsSync(path))
fs.writeFileSync(path, '{}');

const familia = JSON.parse(fs.readFileSync(path));

const parceiro = familia[sender]?.casadoCom;

if (!parceiro) {
return reply('❌ Apenas pessoas casadas podem viajar em lua de mel.');
}

const destinos = [
'🏝️ Maldivas',
'🗼 Paris',
'🏖️ Cancún',
'🏰 Disney',
'🌴 Havaí',
'🗻 Japão',
'🌆 Nova York',
'🏖️ Fernando de Noronha',
'🚢 Cruzeiro de Luxo',
'🏔️ Suíça'
];

const eventos = [
'❤️ Aproveitaram dias inesquecíveis juntos.',
'🥰 Fortaleceram ainda mais o relacionamento.',
'📸 Tiraram muitas fotos românticas.',
'🌅 Assistiram lindos pores do sol.',
'💑 Viveram momentos especiais.',
'🎉 Criaram memórias para a vida toda.'
];

const destino = destinos[Math.floor(Math.random() * destinos.length)];
const evento = eventos[Math.floor(Math.random() * eventos.length)];

return conn.sendMessage(from, {
text: `╭━━〔 💍 LUA DE MEL 〕━━⬣
┃ ❤️ Casal:
┃ @${sender.split('@')[0]}
┃ ❤️ @${parceiro.split('@')[0]}
┃
┃ ✈️ Destino:
┃ ${destino}
┃
┃ ${evento}
┃
┃ 💕 O amor aumentou!
╰━━━━━━━━━━━━━━⬣`,
mentions: [sender, parceiro]
}, { quoted: selo });

}
break;

case 'encontro': {
const fs = require('fs');
const path = './database/familia.json';

if (!fs.existsSync(path))
fs.writeFileSync(path, '{}');

const familia = JSON.parse(fs.readFileSync(path));

let alvo = null;
const ctx = info?.message?.extendedTextMessage?.contextInfo || {};

if (ctx.mentionedJid?.[0]) {
  alvo = ctx.mentionedJid[0];
} else if (ctx.participant) {
  alvo = ctx.participant;
}

if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
  const achou = Infos_Do_Grupo.participants.find(p =>
    p.id === alvo
  );

  if (achou?.phoneNumber) {
    alvo = achou.phoneNumber;
  }
}

alvo = alvo ? jidNormalizedUser(alvo) : null;

if (!alvo)
return reply(`❤️ Marque seu parceiro(a).\n\nEx: ${prefix}encontro @user`);

const relacionado =
familia[sender]?.namorandoCom === alvo ||
familia[sender]?.casadoCom === alvo;

if (!relacionado) {
return reply('❌ Você só pode sair com seu namorado(a) ou cônjuge.');
}

const encontros = [
'🍕 Foram jantar em uma pizzaria.',
'🎬 Assistiram um filme juntos.',
'🏖️ Passaram o dia na praia.',
'🌳 Fizeram um piquenique no parque.',
'☕ Tomaram café juntos.',
'🎡 Foram ao parque de diversões.',
'🛍️ Passearam pelo shopping.',
'🌅 Assistiram o pôr do sol.',
'🎮 Jogaram videogame juntos.',
'🚗 Deram uma volta pela cidade.'
];

const evento = encontros[Math.floor(Math.random() * encontros.length)];

return conn.sendMessage(from, {
text: `╭━━〔 ❤️ ENCONTRO 〕━━⬣
┃ ❤️ @${sender.split('@')[0]}
┃ 💕 saiu com
┃ ❤️ @${alvo.split('@')[0]}
┃
┃ ${evento}
┃
┃ 😊 O relacionamento ficou mais forte!
╰━━━━━━━━━━━━━━⬣`,
mentions: [sender, alvo]
}, { quoted: selo });

}
break;

case 'flertar': {
try {
let alvo = null;
const ctx = info?.message?.extendedTextMessage?.contextInfo || {};

if (ctx.mentionedJid?.[0]) alvo = ctx.mentionedJid[0];
else if (ctx.participant) alvo = ctx.participant;

if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
const achou = Infos_Do_Grupo.participants.find(p => p.id === alvo);
if (achou?.phoneNumber) alvo = achou.phoneNumber;
}

alvo = alvo ? jidNormalizedUser(alvo) : null;
const userId = jidNormalizedUser(sender);

if (!alvo) {
return reply(`💘 Marque ou responda alguém.\n\nEx:\n${prefix}flertar @user você é muito linda`);
}

if (alvo === userId) {
return reply('❌ Você não pode flertar consigo mesmo.');
}

const frase = q
.replace(/@\d+/g, '')
.trim();

if (!frase) {
return reply(`💬 Escreva o flerte.\n\nEx:\n${prefix}flertar @user seu sorriso é lindo`);
}

const chance = Math.floor(Math.random() * 101);

let resultado = '';

if (chance >= 75) {
resultado = '😍 A pessoa AMOU o flerte!';
} else if (chance >= 50) {
resultado = '😊 A pessoa gostou do flerte.';
} else if (chance >= 25) {
resultado = '😐 A pessoa ficou meio sem graça.';
} else {
resultado = '💔 A pessoa não curtiu muito...';
}

return conn.sendMessage(from, {
text: `╭━━〔 💘 FLERTE 〕━━⬣
┃ 👤 @${userId.split('@')[0]}
┃ flertou com
┃ 💞 @${alvo.split('@')[0]}
┃
┃ 💬 Fala:
┃ "${frase}"
┃
┃ 🎲 Chance de gostar: ${chance}%
┃ ${resultado}
╰━━━━━━━━━━━━━━⬣`,
mentions: [userId, alvo]
}, { quoted: selo });

} catch (e) {
console.log('[FLERTAR ERROR]', e);
reply('❌ Erro ao flertar.');
}
}
break;

case 'trair': {
const fs = require('fs');
const path = './database/familia.json';

if (!fs.existsSync(path))
fs.writeFileSync(path, '{}');

const familia = JSON.parse(fs.readFileSync(path));

let alvo = null;
const ctx = info?.message?.extendedTextMessage?.contextInfo || {};

if (ctx.mentionedJid?.[0]) {
  alvo = ctx.mentionedJid[0];
} else if (ctx.participant) {
  alvo = ctx.participant;
}

if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
  const achou = Infos_Do_Grupo.participants.find(p =>
    p.id === alvo
  );

  if (achou?.phoneNumber) {
    alvo = achou.phoneNumber;
  }
}

alvo = alvo ? jidNormalizedUser(alvo) : null;

if (!alvo)
return reply(`❌ Marque alguém.\n\nEx: ${prefix}trair @user`);

if (alvo === sender)
return reply('❌ Você não pode trair consigo mesmo.');

const parceiro =
familia[sender]?.casadoCom ||
familia[sender]?.namorandoCom;

if (!parceiro) {
return reply('❌ Você precisa estar namorando ou casado.');
}

const descobriu = Math.random() < 0.5;

if (descobriu) {
return conn.sendMessage(from, {
text: `╭━━〔 💔 TRAIÇÃO DESCOBERTA 〕━━⬣
┃ 😱 @${parceiro.split('@')[0]} descobriu!
┃
┃ ❤️ Parceiro(a): @${parceiro.split('@')[0]}
┃ 💋 Amante: @${alvo.split('@')[0]}
┃
┃ ⚠️ O relacionamento ficou abalado...
╰━━━━━━━━━━━━━━⬣`,
mentions: [sender, parceiro, alvo]
}, { quoted: selo });
}

return conn.sendMessage(from, {
text: `╭━━〔 😈 TRAIÇÃO 〕━━⬣
┃ 🤫 Ninguém descobriu...
┃
┃ ❤️ Parceiro(a): @${parceiro.split('@')[0]}
┃ 💋 Amante: @${alvo.split('@')[0]}
┃
┃ 👀 Por enquanto está tudo em segredo.
╰━━━━━━━━━━━━━━⬣`,
mentions: [sender, parceiro, alvo]
}, { quoted: selo });
}
break;

case 'transar': {
let alvo = null;
const ctx = info?.message?.extendedTextMessage?.contextInfo || {};

if (ctx.mentionedJid?.[0]) {
  alvo = ctx.mentionedJid[0];
} else if (ctx.participant) {
  alvo = ctx.participant;
}

if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
  const achou = Infos_Do_Grupo.participants.find(p =>
    p.id === alvo
  );

  if (achou?.phoneNumber) {
    alvo = achou.phoneNumber;
  }
}

alvo = alvo ? jidNormalizedUser(alvo) : null;

if (!alvo) return reply(`Marque seu parceiro.\nEx: ${prefix}transar @user`);

return conn.sendMessage(from, {
text: `╭━━〔 ❤️ MOMENTO ROMÂNTICO 〕━━⬣
┃ ❤️ @${sender.split('@')[0]}
┃ 💕 passou um momento gostoso com
┃ ❤️ @${alvo.split('@')[0]}
┃
┃ 😊 O relacionamento ficou mais forte!
╰━━━━━━━━━━━━━━⬣`,
mentions: [sender, alvo]
}, { quoted: selo });
}
break;

case 'beijar': {
const fs = require('fs');
const path = './database/familia.json';

if (!fs.existsSync(path))
fs.writeFileSync(path, '{}');

const familia = JSON.parse(fs.readFileSync(path));

let alvo = null;
const ctx = info?.message?.extendedTextMessage?.contextInfo || {};

if (ctx.mentionedJid?.[0]) {
  alvo = ctx.mentionedJid[0];
} else if (ctx.participant) {
  alvo = ctx.participant;
}

if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
  const achou = Infos_Do_Grupo.participants.find(p =>
    p.id === alvo
  );

  if (achou?.phoneNumber) {
    alvo = achou.phoneNumber;
  }
}

alvo = alvo ? jidNormalizedUser(alvo) : null;

if (!alvo)
return reply(`💋 Marque alguém.\n\nEx: ${prefix}beijar @user`);

if (alvo === sender)
return reply('❌ Você não pode beijar você mesmo.');

const namorando =
familia[sender]?.namorandoCom === alvo ||
familia[sender]?.casadoCom === alvo;

if (!namorando) {
return reply('❌ Você só pode beijar seu namorado(a) ou cônjuge.');
}

const beijos = [
'💋 Um beijo apaixonado foi dado!',
'😘 Que beijo fofo!',
'❤️ O amor está no ar!',
'🥰 Um momento romântico aconteceu!',
'💞 Que casal lindo!'
];

const msg = beijos[Math.floor(Math.random() * beijos.length)];

return conn.sendMessage(from, {
text: `╭━━〔 💋 BEIJO 〕━━⬣
┃ ❤️ @${sender.split('@')[0]}
┃ 💕 beijou
┃ ❤️ @${alvo.split('@')[0]}
┃
┃ ${msg}
╰━━━━━━━━━━━━━━⬣`,
mentions: [sender, alvo]
}, { quoted: selo });

}
break;

case 'terminar': {
const fs = require('fs');
const path = './database/familia.json';

if (!fs.existsSync(path))
fs.writeFileSync(path, '{}');

const familia = JSON.parse(fs.readFileSync(path));

if (!familia[sender]?.namorandoCom)
return reply('❌ Você não está namorando.');

const parceiro = familia[sender].namorandoCom;

delete familia[sender].namorandoCom;
delete familia[sender].namoroDesde;

if (familia[parceiro]) {
delete familia[parceiro].namorandoCom;
delete familia[parceiro].namoroDesde;
}

fs.writeFileSync(path, JSON.stringify(familia, null, 2));

return conn.sendMessage(from, {
text: `💔 O relacionamento chegou ao fim.

❤️ Ex: @${sender.split('@')[0]}
❤️ Ex: @${parceiro.split('@')[0]}`,
mentions: [sender, parceiro]
}, { quoted: selo });
}
break;

case 'aceitarnamoro': {
const path = './database/familia.json';

if (!fs.existsSync('./database')) fs.mkdirSync('./database', { recursive: true });
if (!fs.existsSync(path)) fs.writeFileSync(path, '{}');

const familia = JSON.parse(fs.readFileSync(path));

const userId = sender;

let chavePedido = null;

if (familia[userId]?.pedidoNamoro) {
chavePedido = userId;
} else {
const numero = userId.split('@')[0];

const achou = Object.keys(familia).find(k =>
k.split('@')[0] === numero &&
familia[k]?.pedidoNamoro
);

if (achou) chavePedido = achou;
}

if (!chavePedido) {
return reply(`❌ Você não possui pedidos de namoro.

ID: ${userId}`);
}

const parceiro = familia[chavePedido].pedidoNamoro.de;

familia[chavePedido] = {
...(familia[chavePedido] || {}),
namorandoCom: parceiro,
namoroDesde: Date.now()
};

familia[parceiro] = {
...(familia[parceiro] || {}),
namorandoCom: chavePedido,
namoroDesde: Date.now()
};

delete familia[chavePedido].pedidoNamoro;

fs.writeFileSync(path, JSON.stringify(familia, null, 2));

return conn.sendMessage(from, {
text: `💕 NAMORO ACEITO!

❤️ @${chavePedido.split('@')[0]}
❤️ @${parceiro.split('@')[0]}

Agora vocês estão namorando.`,
mentions: [chavePedido, parceiro]
}, { quoted: selo });
}
break;

case 'namorar': {
const path = './database/familia.json';

if (!fs.existsSync('./database')) fs.mkdirSync('./database', { recursive: true });
if (!fs.existsSync(path)) fs.writeFileSync(path, '{}');

const familia = JSON.parse(fs.readFileSync(path));

const userId = sender;
let alvo = null;

const ctx = info?.message?.extendedTextMessage?.contextInfo || {};

if (ctx.mentionedJid?.[0]) alvo = ctx.mentionedJid[0];
else if (ctx.participant) alvo = ctx.participant;

if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
const achou = Infos_Do_Grupo.participants.find(p => p.id === alvo);
if (achou?.phoneNumber) alvo = achou.phoneNumber;
}

if (!alvo) return reply(`Marque alguém ou responda a mensagem.\nEx: ${prefix}namorar @user`);

if (alvo === userId) return reply('❌ Você não pode namorar consigo mesmo.');

familia[userId] = familia[userId] || {};
familia[alvo] = familia[alvo] || {};

familia[alvo].pedidoNamoro = {
de: userId,
data: Date.now()
};

const alvoNumero = alvo.split('@')[0] + '@s.whatsapp.net';

familia[alvoNumero] = familia[alvoNumero] || {};
familia[alvoNumero].pedidoNamoro = {
de: userId,
data: Date.now()
};

fs.writeFileSync(path, JSON.stringify(familia, null, 2));

return conn.sendMessage(from, {
text: `❤️ @${userId.split('@')[0]} pediu @${alvo.split('@')[0]} em namoro!

Use:
${prefix}aceitarnamoro`,
mentions: [userId, alvo]
}, { quoted: selo });
}
break;

case 'engravidar': {
const fs = require('fs');
const path = './database/familia.json';

if (!fs.existsSync(path))
fs.writeFileSync(path, '{}');

const familia = JSON.parse(fs.readFileSync(path));

if (!familia[sender]?.casadoCom) {
return reply('❌ Você precisa ser casado para ter um filho.');
}

const nomeBebe = q?.trim();

if (!nomeBebe) {
return reply(`👶 Escolha um nome para o bebê.

Exemplo:
${prefix}engravidar João
${prefix}engravidar Maria Eduarda`);
}

const parceiro = familia[sender].casadoCom;

if (!familia[sender].filhos)
familia[sender].filhos = [];

if (!familia[parceiro].filhos)
familia[parceiro].filhos = [];

const agora = new Date();

const filho = {
nome: nomeBebe,
sexo: Math.random() < 0.5 ? '👦 Menino' : '👧 Menina',
nascimento: Date.now(),
dataNascimento: agora.toLocaleDateString('pt-BR'),
horaNascimento: agora.toLocaleTimeString('pt-BR'),
peso: (Math.random() * (4.5 - 2.5) + 2.5).toFixed(1) + 'kg',
altura: Math.floor(Math.random() * (55 - 45) + 45) + 'cm',
saude: 100,
felicidade: 100,
idade: 0
};

familia[sender].filhos.push(filho);
familia[parceiro].filhos.push(filho);

fs.writeFileSync(path, JSON.stringify(familia, null, 2));

return conn.sendMessage(from, {
text: `╭━━〔 👶 NASCIMENTO 〕━━⬣
┃ ❤️ Responsável:
┃ @${sender.split('@')[0]}
┃
┃ ❤️ Responsável:
┃ @${parceiro.split('@')[0]}
┃
┃ 🎉 Um novo membro chegou!
┃
┃ 👶 Nome: ${filho.nome}
┃ 🚻 Sexo: ${filho.sexo}
┃ 📅 Data: ${filho.dataNascimento}
┃ ⏰ Hora: ${filho.horaNascimento}
┃ ⚖️ Peso: ${filho.peso}
┃ 📏 Altura: ${filho.altura}
┃ ❤️ Saúde: ${filho.saude}%
┃ 😊 Felicidade: ${filho.felicidade}%
┃
┃ Use:
┃ ${prefix}familia
╰━━━━━━━━━━━━━━⬣`,
mentions: [sender, parceiro]
}, { quoted: selo });

}
break;

case 'familia': {
const fs = require('fs');
const path = './database/familia.json';

const familia = JSON.parse(fs.readFileSync(path));

if (!familia[sender]) {
return reply('❌ Você não possui família.');
}

const dados = familia[sender];

let txt = `👨‍👩‍👧 FAMÍLIA\n\n`;

txt += `💍 Cônjuge: ${
dados.casadoCom
? '@' + dados.casadoCom.split('@')[0]
: 'Nenhum'
}\n\n`;

txt += `👶 Filhos:\n\n`;

if (!dados.filhos?.length) {

txt += `Nenhum filho registrado.`;

} else {

dados.filhos.forEach((f, i) => {

txt += `╭─ 👶 Filho ${i + 1}\n`;
txt += `┃ Nome: ${f.nome}\n`;
txt += `┃ Sexo: ${f.sexo}\n`;
txt += `┃ Data: ${f.dataNascimento}\n`;
txt += `┃ Hora: ${f.horaNascimento}\n`;
txt += `┃ Peso: ${f.peso}\n`;
txt += `┃ Altura: ${f.altura}\n`;
txt += `┃ Saúde: ${f.saude}%\n`;
txt += `┃ Felicidade: ${f.felicidade}%\n`;
txt += `╰──────────────\n\n`;

});

}

conn.sendMessage(from, {
text: txt,
mentions: dados.casadoCom ? [dados.casadoCom] : []
}, { quoted: selo });
}
break;

case 'adotar': {
const fs = require('fs');
const path = './database/familia.json';

if (!fs.existsSync('./database')) fs.mkdirSync('./database', { recursive: true });
if (!fs.existsSync(path)) fs.writeFileSync(path, '{}');

const familia = JSON.parse(fs.readFileSync(path));

const userId = jidNormalizedUser(sender);

if (!familia[userId]?.casadoCom) {
return reply('❌ Apenas casados podem adotar.');
}

let alvo = null;
const ctx = info?.message?.extendedTextMessage?.contextInfo || {};

if (ctx.mentionedJid?.[0]) alvo = ctx.mentionedJid[0];
else if (ctx.participant) alvo = ctx.participant;

if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
const achou = Infos_Do_Grupo.participants.find(p => p.id === alvo);
if (achou?.phoneNumber) alvo = achou.phoneNumber;
}

alvo = alvo ? jidNormalizedUser(alvo) : null;

if (!alvo) {
return reply(`👶 Marque quem deseja adotar.\n\nEx: ${prefix}adotar @usuario`);
}

if (alvo === userId) {
return reply('❌ Você não pode adotar a si mesmo.');
}

const parceiro = familia[userId].casadoCom;

if (alvo === parceiro) {
return reply('❌ Você não pode adotar seu cônjuge.');
}

if (!familia[userId].filhos) familia[userId].filhos = [];
if (!familia[parceiro]) familia[parceiro] = {};
if (!familia[parceiro].filhos) familia[parceiro].filhos = [];

const jaAdotado = familia[userId].filhos.some(f => f.id === alvo);

if (jaAdotado) {
return reply('❌ Essa pessoa já é filho(a) de vocês.');
}

let nomeFilho = `@${alvo.split('@')[0]}`;

try {
const membro = Infos_Do_Grupo?.participants?.find(p =>
p.phoneNumber === alvo || p.id === alvo
);

nomeFilho =
membro?.notify ||
membro?.name ||
membro?.pushName ||
`@${alvo.split('@')[0]}`;
} catch {}

const agora = new Date();

const filho = {
id: alvo,
nome: nomeFilho,
sexo: 'Pessoa adotada',
nascimento: Date.now(),
dataNascimento: agora.toLocaleDateString('pt-BR'),
horaNascimento: agora.toLocaleTimeString('pt-BR'),
saude: 100,
felicidade: 100,
adotado: true
};

familia[userId].filhos.push(filho);
familia[parceiro].filhos.push(filho);

fs.writeFileSync(path, JSON.stringify(familia, null, 2));

return conn.sendMessage(from, {
text: `╭━━〔 👶 ADOÇÃO 〕━━⬣
┃ 👶 Novo filho adotado!
┃
┃ Filho(a): @${alvo.split('@')[0]}
┃ Nome salvo: ${nomeFilho}
┃
┃ Pais:
┃ ❤️ @${userId.split('@')[0]}
┃ ❤️ @${parceiro.split('@')[0]}
╰━━━━━━━━━━━━━━⬣`,
mentions: [alvo, userId, parceiro]
}, { quoted: selo });
}
break;

case 'divorcio': {
const fs = require('fs');
const path = './database/familia.json';

const familia = JSON.parse(fs.readFileSync(path));

if (!familia[sender]?.casadoCom) {
return reply('❌ Você não é casado.');
}

const parceiro = familia[sender].casadoCom;

delete familia[sender].casadoCom;
delete familia[sender].casadoDesde;

if (familia[parceiro]) {
delete familia[parceiro].casadoCom;
delete familia[parceiro].casadoDesde;
}

fs.writeFileSync(path, JSON.stringify(familia, null, 2));

conn.sendMessage(from, {
text: `💔 @${sender.split('@')[0]} se divorciou de @${parceiro.split('@')[0]}`,
mentions: [sender, parceiro]
}, { quoted: selo });
}
break;

case 'aceitarcasamento': {
const path = './database/familia.json';

if (!fs.existsSync('./database')) fs.mkdirSync('./database', { recursive: true });
if (!fs.existsSync(path)) fs.writeFileSync(path, '{}');

const familia = JSON.parse(fs.readFileSync(path));

const userId = jidNormalizedUser(sender);

let chavePedido = null;

if (familia[userId]?.pedidoCasamento) {
chavePedido = userId;
} else {
const numero = userId.split('@')[0];

const achou = Object.keys(familia).find(k =>
k.split('@')[0] === numero &&
familia[k]?.pedidoCasamento
);

if (achou) chavePedido = achou;
}

if (!chavePedido) {
return reply(`❌ Você não possui pedidos de casamento.

ID: ${userId}`);
}

const parceiro = familia[chavePedido].pedidoCasamento.de;

familia[chavePedido] = {
...(familia[chavePedido] || {}),
casadoCom: parceiro,
casadoDesde: Date.now(),
filhos: familia[chavePedido]?.filhos || []
};

familia[parceiro] = {
...(familia[parceiro] || {}),
casadoCom: chavePedido,
casadoDesde: Date.now(),
filhos: familia[parceiro]?.filhos || []
};

delete familia[chavePedido].pedidoCasamento;

fs.writeFileSync(path, JSON.stringify(familia, null, 2));

return conn.sendMessage(from, {
text: `╭━━〔 💍 CASAMENTO ACEITO 〕━━⬣
┃ ❤️ @${chavePedido.split('@')[0]}
┃ ❤️ @${parceiro.split('@')[0]}
┃
┃ Agora vocês estão casados!
╰━━━━━━━━━━━━━━⬣`,
mentions: [chavePedido, parceiro]
}, { quoted: selo });
}
break;

case 'casar': {
const path = './database/familia.json';

if (!fs.existsSync('./database')) fs.mkdirSync('./database', { recursive: true });
if (!fs.existsSync(path)) fs.writeFileSync(path, '{}');

const familia = JSON.parse(fs.readFileSync(path));

let alvo = null;
const ctx = info?.message?.extendedTextMessage?.contextInfo || {};

if (ctx.mentionedJid?.[0]) alvo = ctx.mentionedJid[0];
else if (ctx.participant) alvo = ctx.participant;

if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
const achou = Infos_Do_Grupo.participants.find(p => p.id === alvo);
if (achou?.phoneNumber) alvo = achou.phoneNumber;
}

alvo = alvo ? jidNormalizedUser(alvo) : null;
const userId = jidNormalizedUser(sender);

if (!alvo) {
return reply(`Marque alguém ou responda a mensagem.\nEx: ${prefix}casar @user`);
}

if (alvo === userId) {
return reply('❌ Você não pode casar consigo mesmo.');
}

if (familia[userId]?.casadoCom) {
return reply('❌ Você já é casado.');
}

if (familia[alvo]?.casadoCom) {
return reply('❌ Essa pessoa já é casada.');
}

if (
familia[userId]?.namorandoCom !== alvo &&
familia[alvo]?.namorandoCom !== userId
) {
return reply('❌ Vocês precisam namorar antes de casar.');
}

familia[alvo] = familia[alvo] || {};

familia[alvo].pedidoCasamento = {
de: userId,
data: Date.now()
};

fs.writeFileSync(path, JSON.stringify(familia, null, 2));

return conn.sendMessage(from, {
text: `╭━━〔 💍 PEDIDO DE CASAMENTO 〕━━⬣
┃ ❤️ @${userId.split('@')[0]}
┃ pediu
┃ ❤️ @${alvo.split('@')[0]}
┃ em casamento!
┃
┃ Para aceitar:
┃ ${prefix}aceitarcasamento
╰━━━━━━━━━━━━━━⬣`,
mentions: [userId, alvo]
}, { quoted: selo });
}
break;

case 'qr':
case 'qrcode':
case 'qrgenerator': {
try {

let destino = q?.trim();

const quotedMsg = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage;

const imgMsg =
quotedMsg?.imageMessage ||
quotedMsg?.viewOnceMessageV2?.message?.imageMessage ||
quotedMsg?.viewOnceMessage?.message?.imageMessage;

if (!destino && !imgMsg) {
return reply(`╭━━〔 📱 QR GENERATOR 〕━━⬣
┃ Gere QR Codes para:
┃
┃ 🌐 Sites
┃ 🖼️ Fotos
┃ 📱 WhatsApp
┃ 🎵 Música
┃ 📹 Vídeos
┃
┃ Exemplos:
┃ ${prefix}qr https://google.com
┃
┃ Ou responda uma foto:
┃ ${prefix}qr
╰━━━━━━━━━━━━━━⬣`);
}

if (imgMsg) {
await reply('📤 Enviando imagem...');

const buffer = await getFileBuffer(imgMsg, 'image');

const link = await uploadTelegraph(
buffer,
'imagem.jpg',
'image/jpeg'
);

if (!link) return reply('❌ Falha ao enviar imagem.');

destino = link;
}

const qrUrl =
`https://api.qrserver.com/v1/create-qr-code/?size=1200x1200&data=${encodeURIComponent(destino)}`;

await conn.sendMessage(from, {
image: { url: qrUrl },
caption: `╭━━〔 📱 QR CODE GERADO 〕━━⬣
┃ 🔗 Destino:
┃ ${destino.length > 100 ? destino.slice(0, 100) + '...' : destino}
┃
┃ 📲 Escaneie o QR para abrir.
╰━━━━━━━━━━━━━━⬣`
}, { quoted: info });

} catch (e) {
console.log('[QR ERROR]', e);
reply('❌ Erro ao gerar QR Code.');
}
}
break;

case 'market':
case 'marketplace':
case 'lojamembros': {
try {
const marketPath = './database/marketplace.json';

if (!fs.existsSync('./database')) fs.mkdirSync('./database', { recursive: true });
if (!fs.existsSync(marketPath)) fs.writeFileSync(marketPath, '{}');

let market = JSON.parse(fs.readFileSync(marketPath));
const sub = args[0]?.toLowerCase();
const userId = jidNormalizedUser(sender);

if (!sub) {
return reply(`╭━━〔 🏪 MARKETPLACE ZYRON 〕━━⬣
┃ ${prefix}market vender item preço quantidade
┃ ${prefix}market listar
┃ ${prefix}market comprar id
┃ ${prefix}market remover id
┃ ${prefix}market meus
┃
┃ Ex:
┃ ${prefix}market vender pcgamer 50000 1
┃ ${prefix}market comprar 1
╰━━━━━━━━━━━━━━⬣`);
}

if (sub === 'vender') {
const item = args[1]?.toLowerCase();
const preco = Number(args[2]);
const qtd = Number(args[3]) || 1;

if (!item || !preco || preco <= 0 || qtd <= 0) {
return reply(`Use:\n${prefix}market vender item preço quantidade`);
}

const banco = carregarBanco();

if (!banco[userId]) return reply('❌ Você não possui conta no banco.');

if (!banco[userId].inventario) banco[userId].inventario = {};

const inv = banco[userId].inventario;

const itemData = inv[item];

const quantidadeAtual =
typeof itemData === 'object'
? Number(itemData.quantidade || 0)
: Number(itemData || 0);

if (!itemData || quantidadeAtual < qtd) {
return reply(`❌ Você não tem ${qtd}x ${item} no inventário.`);
}

if (typeof itemData === 'object') {
itemData.quantidade -= qtd;

if (itemData.quantidade <= 0) {
delete inv[item];
}
} else {
inv[item] -= qtd;

if (inv[item] <= 0) {
delete inv[item];
}
}

const id = Date.now().toString();

market[id] = {
id,
vendedor: userId,
item,
preco,
qtd,
grupo: from,
data: Date.now()
};

fs.writeFileSync(marketPath, JSON.stringify(market, null, 2));
salvarBanco(banco);

return reply(`╭━━〔 ✅ ITEM ANUNCIADO 〕━━⬣
┃ 🆔 ID: ${id}
┃ 📦 Item: ${item}
┃ 🔢 Quantidade: ${qtd}
┃ 💰 Preço: R$${preco}
╰━━━━━━━━━━━━━━⬣`);
}

if (sub === 'listar') {
const anuncios = Object.values(market).filter(a => a.grupo === from);

if (!anuncios.length) return reply('❌ Nenhum item anunciado nesse grupo.');

let txt = `╭━━〔 🏪 MARKETPLACE 〕━━⬣\n`;

for (const a of anuncios.slice(0, 20)) {
txt += `┃ 🆔 ID: ${a.id}\n`;
txt += `┃ 👤 Vendedor: @${a.vendedor.split('@')[0]}\n`;
txt += `┃ 📦 Item: ${a.item}\n`;
txt += `┃ 🔢 Qtd: ${a.qtd}\n`;
txt += `┃ 💰 Preço: R$${a.preco}\n`;
txt += `┃ Comprar: ${prefix}market comprar ${a.id}\n`;
txt += `┣━━━━━━━━━━━━━━⬣\n`;
}

txt += `╰━━━━━━━━━━━━━━⬣`;

return conn.sendMessage(from, {
text: txt,
mentions: anuncios.map(a => a.vendedor)
}, { quoted: selo });
}

if (sub === 'meus') {
const meus = Object.values(market).filter(a => a.vendedor === userId);

if (!meus.length) return reply('❌ Você não tem anúncios.');

let txt = `╭━━〔 📦 MEUS ANÚNCIOS 〕━━⬣\n`;

for (const a of meus) {
txt += `┃ 🆔 ID: ${a.id}\n`;
txt += `┃ 📦 Item: ${a.item}\n`;
txt += `┃ 🔢 Qtd: ${a.qtd}\n`;
txt += `┃ 💰 Preço: R$${a.preco}\n`;
txt += `┃ Remover: ${prefix}market remover ${a.id}\n`;
txt += `┣━━━━━━━━━━━━━━⬣\n`;
}

txt += `╰━━━━━━━━━━━━━━⬣`;

return reply(txt);
}

if (sub === 'remover') {
const id = args[1];
const anuncio = market[id];

if (!anuncio) return reply('❌ Anúncio não encontrado.');
if (anuncio.vendedor !== userId && !So_Dono) return reply('❌ Só o vendedor pode remover.');

const banco = carregarBanco();

if (!banco[anuncio.vendedor]) {
banco[anuncio.vendedor] = {
saldo: 0,
xp: 0,
inventario: {}
};
}

if (!banco[anuncio.vendedor].inventario) banco[anuncio.vendedor].inventario = {};

banco[anuncio.vendedor].inventario[anuncio.item] =
Number(banco[anuncio.vendedor].inventario[anuncio.item] || 0) + Number(anuncio.qtd || 1);

delete market[id];

fs.writeFileSync(marketPath, JSON.stringify(market, null, 2));
salvarBanco(banco);

return reply('✅ Anúncio removido e item voltou para o inventário.');
}

if (sub === 'comprar') {
const id = args[1];
const anuncio = market[id];

if (!anuncio) return reply('❌ Anúncio não encontrado.');
if (anuncio.vendedor === userId) return reply('❌ Você não pode comprar seu próprio item.');

const banco = carregarBanco();

if (!banco[userId]) return reply('❌ Você não possui conta no banco.');

if (!banco[anuncio.vendedor]) {
banco[anuncio.vendedor] = {
saldo: 0,
xp: 0,
inventario: {}
};
}

let contaComprador = banco[userId];
let contaVendedor = banco[anuncio.vendedor];

let preco = Number(anuncio.preco || 0);
let qtd = Number(anuncio.qtd || 1);
let saldoComprador = Number(contaComprador.saldo || 0);

if (saldoComprador < preco) {
return reply(`❌ Você não tem saldo suficiente.

💰 Seu saldo: R$${saldoComprador}
🏷️ Preço: R$${preco}`);
}

contaComprador.saldo = saldoComprador - preco;
contaVendedor.saldo = Number(contaVendedor.saldo || 0) + preco;

if (!contaComprador.inventario) contaComprador.inventario = {};

if (!contaComprador.inventario[anuncio.item]) {
  contaComprador.inventario[anuncio.item] = {
    qtd: 0,
    valor: anuncio.preco
  };
}

contaComprador.inventario[anuncio.item].qtd =
Number(contaComprador.inventario[anuncio.item].qtd || 0) + qtd;

contaComprador.inventario[anuncio.item].valor = anuncio.preco;

delete market[id];

fs.writeFileSync(marketPath, JSON.stringify(market, null, 2));
salvarBanco(banco);

return conn.sendMessage(from, {
text: `╭━━〔 ✅ COMPRA REALIZADA 〕━━⬣
┃ 👤 Comprador: @${userId.split('@')[0]}
┃ 🏪 Vendedor: @${anuncio.vendedor.split('@')[0]}
┃ 📦 Item: ${anuncio.item}
┃ 🔢 Quantidade: ${qtd}
┃ 💰 Valor: R$${preco}
╰━━━━━━━━━━━━━━⬣`,
mentions: [userId, anuncio.vendedor]
}, { quoted: selo });
}

return reply('❌ Opção inválida.');

} catch (e) {
console.log('[MARKET ERROR]', e);
reply('❌ Erro no marketplace.');
}
}
break;

case 'google':
case 'pesquisar': {
try {
if (!q) return reply(`Exemplo:\n${prefix}google Zyron-MD`);

await reagir(from, "🔎");

const axios = require("axios");
const cheerio = require("cheerio");

const { data } = await axios.get(`https://www.google.com/search?q=${encodeURIComponent(q)}`, {
headers: {
"User-Agent": "Mozilla/5.0"
}
});

const $ = cheerio.load(data);
let resultados = [];

$("a").each((i, el) => {
const href = $(el).attr("href");
const titulo = $(el).text().trim();

if (href && href.startsWith("/url?q=") && titulo.length > 5 && resultados.length < 5) {
const link = decodeURIComponent(href.split("/url?q=")[1].split("&")[0]);
if (!link.includes("google.com")) {
resultados.push({ titulo, link });
}
}
});

if (!resultados.length) return reply("❌ Nenhum resultado encontrado.");

global.googleSearch = global.googleSearch || {};
global.googleSearch[from] = resultados;

let texto = `╭━━〔 🔎 ZYRON SEARCH ⚡ 〕━━╮
┃
┃ 「 🔍 Pesquisa 」
┗➤ ${q}
┃
┃ 「 📦 Resultados 」
┗➤ ${resultados.length} links encontrados
┃
╠════════════════════
┃ 🌐 FORMAS
╠════════════════════
┃ 🔗 Abrir Resultado
┃ 📋 Copiar Link
┃ 📚 Ver Todos
╚════════════════════

◇ Selecione uma opção abaixo ◇`;

const rows = resultados.map((r, i) => ({
title: `🔎 Resultado ${i + 1}`,
description: r.titulo.slice(0, 70),
id: `${prefix}gopen ${i + 1}`
}));

await conn.sendMessage(from, {
text: texto,
footer: "© Zyron-MD • Clique para abrir",
buttons: [
{
buttonId: `${prefix}gopen 1`,
buttonText: { displayText: "↩️ 🔗 Abrir 1º Resultado" },
type: 1
},
{
buttonId: `${prefix}gcopy 1`,
buttonText: { displayText: "↩️ 📋 Copiar Link" },
type: 1
},
{
buttonId: "google_lista",
buttonText: { displayText: "☰ Selecionar" },
type: 4,
nativeFlowInfo: {
name: "single_select",
paramsJson: JSON.stringify({
title: "Resultados do Google",
sections: [
{
title: "Opções de Pesquisa",
rows
}
]
})
}
}
],
headerType: 1
}, { quoted: selo });

await reagir(from, "✅");

} catch (e) {
console.log("[GOOGLE ERROR]", e);
reply("❌ Erro ao pesquisar no Google.");
}
}
break;

case 'gopen': {
if (!global.googleSearch?.[from]) return reply("❌ Faça uma pesquisa primeiro.");
const n = parseInt(args[0]) - 1;
const r = global.googleSearch[from][n];

if (!r) return reply("❌ Resultado inválido.");

reply(`🔗 *${r.titulo}*\n\n${r.link}`);
}
break;

case 'gcopy': {
if (!global.googleSearch?.[from]) return reply("❌ Faça uma pesquisa primeiro.");
const n = parseInt(args[0]) - 1;
const r = global.googleSearch[from][n];

if (!r) return reply("❌ Resultado inválido.");

await conn.sendMessage(from, {
text: r.link
}, { quoted: selo });
}
break;

case 'pinterest':
case 'pin': {
try {
if (!q) return reply(`📌 Use: ${prefix + command} anime dark`);

await reagir(from, "📌");

const query = encodeURIComponent(q);
const url = `https://www.pinterest.com/search/pins/?q=${query}`;

const { data } = await axios.get(url, {
headers: {
'User-Agent': 'Mozilla/5.0'
}
});

const imagens = [...data.matchAll(/"url":"(https:\/\/i\.pinimg\.com\/[^"]+)"/g)]
.map(v => v[1].replace(/\\u002F/g, '/'))
.filter(v => v.includes('i.pinimg.com'));

const semDuplicadas = [...new Set(imagens)];

if (!semDuplicadas.length) {
return reply('❌ Não achei imagens no Pinterest.');
}

const img = semDuplicadas[Math.floor(Math.random() * semDuplicadas.length)];

await conn.sendMessage(from, {
image: { url: img },
caption: `╭━━〔 📌 PINTEREST 〕━━⬣
┃ 🔎 Busca: ${q}
┃ 🖼️ Resultado encontrado
╰━━━━━━━━━━━━━━⬣`
}, { quoted: selo });

} catch (e) {
console.log('[PINTEREST ERROR]', e);
reply('❌ Erro ao buscar no Pinterest.');
}
}
break;

case 'tiktok':
case 'tiktokdl':
case 'ttkdl': {
try {
if (!q) return reply(`🎬 Use: ${prefix + command} link do TikTok`);

if (!q.includes('tiktok.com')) {
return reply('❌ Envie um link válido do TikTok.');
}

await reagir(from, "🎬");

const api = `https://tikwm.com/api/?url=${encodeURIComponent(q)}`;
const { data } = await axios.get(api);

const res = data?.data;

if (!res || !res.play) {
return reply('❌ Não consegui baixar esse TikTok.');
}

const legenda = `╭━━〔 🎬 TIKTOK DOWNLOAD 〕━━⬣
┃ 👤 Autor: ${res.author?.nickname || 'Desconhecido'}
┃ 📝 Título: ${res.title || 'Sem título'}
┃ ❤️ Likes: ${res.digg_count || 0}
┃ 💬 Comentários: ${res.comment_count || 0}
┃ 🔁 Compartilhamentos: ${res.share_count || 0}
╰━━━━━━━━━━━━━━⬣`;

await conn.sendMessage(from, {
video: { url: res.play },
caption: legenda
}, { quoted: selo });

} catch (e) {
console.log('[TIKTOKDL ERROR]', e);
reply('❌ Erro ao baixar TikTok.');
}
}
break;

case 'ytmp3':
case 'play':
case 'playaudio': {
try {
if (!q) return reply(`🎧 Use: ${prefix + command} nome ou link`);

await reagir(from, "🎧");

const yts = require('yt-search');
const { exec } = require('child_process');

let video;

if (q.includes('youtube.com') || q.includes('youtu.be')) {
video = { url: q, title: 'YouTube Audio' };
} else {
const search = await yts(q);
video = search.videos[0];
}

if (!video) return reply('❌ Não achei esse vídeo.');

const file = `./tmp/audio_${Date.now()}.mp3`;

if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp');

exec(`yt-dlp -x --audio-format mp3 -o "${file}" "${video.url}"`, async (err) => {
if (err) {
console.log('[YTMP3 ERROR]', err);
return reply('❌ Erro ao baixar áudio.');
}

await conn.sendMessage(from, {
audio: fs.readFileSync(file),
mimetype: 'audio/mpeg',
fileName: `${video.title}.mp3`
}, { quoted: selo });

fs.unlinkSync(file);
});

} catch (e) {
console.log('[PLAY ERROR]', e);
reply('❌ Erro no play.');
}
}
break;

case 'ytmp4':
case 'playvideo':
case 'video': {
try {
if (!q) return reply(`🎬 Use: ${prefix + command} nome ou link`);

await reagir(from, "🎬");

const yts = require('yt-search');
const { exec } = require('child_process');

let video;

if (q.includes('youtube.com') || q.includes('youtu.be')) {
video = { url: q, title: 'YouTube Video' };
} else {
const search = await yts(q);
video = search.videos[0];
}

if (!video) return reply('❌ Não achei esse vídeo.');

const file = `./tmp/video_${Date.now()}.mp4`;

if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp');

exec(`yt-dlp -f "mp4[height<=480]+bestaudio/best[height<=480]" -o "${file}" "${video.url}"`, async (err) => {
if (err) {
console.log('[YTMP4 ERROR]', err);
return reply('❌ Erro ao baixar vídeo.');
}

await conn.sendMessage(from, {
video: fs.readFileSync(file),
caption: `🎬 ${video.title}`
}, { quoted: selo });

fs.unlinkSync(file);
});

} catch (e) {
console.log('[VIDEO ERROR]', e);
reply('❌ Erro no vídeo.');
}
}
break;

case 'instagram':
case 'insta':
case 'instadl': {
try {
if (!q) return reply(`📸 Use: ${prefix + command} link do Instagram`);

if (!q.includes('instagram.com')) {
return reply('❌ Envie um link válido do Instagram.');
}

await reagir(from, "📸");

const api = `https://api.agatz.xyz/api/instagram?url=${encodeURIComponent(q)}`;
const { data } = await axios.get(api);

const result = data?.data || data?.result || data?.media;

if (!result) return reply('❌ Não consegui baixar esse Instagram.');

const midias = Array.isArray(result) ? result : [result];

for (const midia of midias) {
const url = midia.url || midia.download_url || midia;

if (!url) continue;

if (url.includes('.mp4')) {
await conn.sendMessage(from, {
video: { url },
caption: `╭━━〔 📸 INSTAGRAM DL 〕━━⬣
┃ ✅ Vídeo baixado com sucesso
╰━━━━━━━━━━━━━━⬣`
}, { quoted: selo });
} else {
await conn.sendMessage(from, {
image: { url },
caption: `╭━━〔 📸 INSTAGRAM DL 〕━━⬣
┃ ✅ Imagem baixada com sucesso
╰━━━━━━━━━━━━━━⬣`
}, { quoted: selo });
}
}

} catch (e) {
console.log('[INSTADL ERROR]', e);
reply('❌ Erro ao baixar do Instagram.');
}
}
break;

case 'spotify':
case 'spotdl': {
try {
if (!q) return reply(`🎵 Use: ${prefix + command} nome da música ou link do Spotify`);

await reagir(from, "🎵");

const { exec } = require('child_process');

if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp');

const file = `./tmp/spotify_${Date.now()}.mp3`;

exec(`spotdl "${q}" --output "${file}"`, async (err) => {
if (err) {
console.log('[SPOTIFY ERROR]', err);
return reply('❌ Erro ao baixar música do Spotify.');
}

if (!fs.existsSync(file)) {
return reply('❌ Não encontrei o arquivo baixado.');
}

await conn.sendMessage(from, {
audio: fs.readFileSync(file),
mimetype: 'audio/mpeg',
fileName: 'spotify.mp3'
}, { quoted: selo });

fs.unlinkSync(file);
});

} catch (e) {
console.log('[SPOTIFYDL ERROR]', e);
reply('❌ Erro no Spotify.');
}
}
break;

case 'mfbuscar':
case 'mfsearch': {
try {
if (!q) return reply(`📦 Use: ${prefix + command} nome do arquivo`);

await reagir(from, "🔎");

const { data } = await axios.get(
`https://www.googleapis.com/customsearch/v1?q=site:mediafire.com ${encodeURIComponent(q)}&key=AIzaSyBH3GbtJVR9N_AUV8NRaatEy6NKRNp0hSs&cx=037e27a98adc94a43`
);

if (!data.items || data.items.length < 1) {
return reply('❌ Nenhum resultado encontrado.');
}

let texto = `╭━━〔 📦 MEDIAFIRE SEARCH 〕━━⬣\n\n`;

data.items.slice(0, 10).forEach((v, i) => {
texto += `┃ ${i + 1}. ${v.title}\n`;
texto += `┃ 🔗 ${v.link}\n\n`;
});

texto += `╰━━━━━━━━━━━━━━⬣`;

reply(texto);

} catch (e) {
console.log('[MFSEARCH ERROR]', e);
reply('❌ Erro ao pesquisar.');
}
}
break;

//Figurinhas 

case 'criarpack': {
try {
global.packTemp = global.packTemp || {};

if (!q.includes('|')) {
return reply(`🖼️ Use:\n${prefix}criarpack Nome do Pack|Autor`);
}

const [nomePack, autorPack] = q.split('|');

global.packTemp[sender] = {
packname: nomePack.trim(),
author: autorPack.trim(),
stickers: []
};

reply(`✅ Pack criado!

📦 Nome: ${nomePack.trim()}
✍️ Autor: ${autorPack.trim()}

Agora envie/responda imagens com:
${prefix}addpack

Finalize com:
${prefix}finalizarpack`);
} catch (e) {
console.log('[CRIARPACK ERROR]', e);
reply('❌ Erro ao criar pack.');
}
}
break;

case 'addpack': {
try {
global.packTemp = global.packTemp || {};

const pack = global.packTemp[sender];

if (!pack) {
return reply(`❌ Você ainda não criou um pack.\nUse: ${prefix}criarpack Nome|Autor`);
}

const quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const imageMsg = quoted?.imageMessage || info.message?.imageMessage;

if (!imageMsg) {
return reply('❌ Envie ou responda uma imagem com esse comando.');
}

const buffer = await downloadMediaMessage(
{ message: { imageMessage: imageMsg } },
'buffer',
{},
{
logger: console,
reuploadRequest: conn.updateMediaMessage
}
);

pack.stickers.push(buffer);

reply(`✅ Imagem adicionada ao pack.

📦 Pack: ${pack.packname}
🖼️ Total: ${pack.stickers.length}`);
} catch (e) {
console.log('[ADDPACK ERROR]', e);
reply('❌ Erro ao adicionar imagem.');
}
}
break;

case 'finalizarpack': {
try {
global.packTemp = global.packTemp || {};

const pack = global.packTemp[sender];

if (!pack) {
return reply(`❌ Você não tem pack aberto.\nUse: ${prefix}criarpack Nome|Autor`);
}

if (!pack.stickers.length) {
return reply('❌ Nenhuma imagem foi adicionada ao pack.');
}

await reply(`📦 Finalizando pack com ${pack.stickers.length} figurinha(s)...`);

for (const buffer of pack.stickers) {
await conn.sendMessage(from, {
sticker: buffer,
packname: pack.packname,
author: pack.author
}, { quoted: selo });
}

delete global.packTemp[sender];

reply('✅ Pack finalizado com sucesso!');
} catch (e) {
console.log('[FINALIZARPACK ERROR]', e);
reply('❌ Erro ao finalizar pack.');
}
}
break;

case 'cancelarpack': {
global.packTemp = global.packTemp || {};

if (global.packTemp[sender]) {
delete global.packTemp[sender];
return reply('❌ Pack cancelado.');
}

reply('Você não tem pack aberto.');
}
break;

console.log("✅ VAI ENTRAR NO SWITCH:", command);

} // FECHA O SWITCH

} catch (e) {
console.log("Erro geral no index:", e);

if (String(e).includes(SHIZUKU_KEY)) {
console.log("A API caiu ou não foi possível executar esta ação.");
}

if (String(e).includes("aborted")) {
let file = require.resolve("./connect");
delete require.cache[file];
require(file);
}
}
};
