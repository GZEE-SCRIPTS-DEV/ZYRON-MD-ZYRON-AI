const axios = require("axios");
const fs = require("fs");
const path = require("path");

const DB = path.join(__dirname, "..", "database", "tempmail.json");

if (!fs.existsSync(DB)) {
    fs.writeFileSync(DB, JSON.stringify({}, null, 2));
}

function readDB() {
    return JSON.parse(fs.readFileSync(DB));
}

function saveDB(data) {
    fs.writeFileSync(DB, JSON.stringify(data, null, 2));
}

function getUser(id) {
    const db = readDB();
    return db[id] || null;
}

function setUser(id, data) {
    const db = readDB();
    db[id] = data;
    saveDB(db);
}

function delUser(id) {
    const db = readDB();
    delete db[id];
    saveDB(db);
}

async function getDomain() {
    const { data } = await axios.get(
        "https://api.mail.tm/domains"
    );

    return data["hydra:member"][0].domain;
}

async function createMail() {

    const domain = await getDomain();

    const name =
        Math.random().toString(36).substring(2, 10);

    const password =
        Math.random().toString(36).substring(2, 18);

    const address = `${name}@${domain}`;

    await axios.post(
        "https://api.mail.tm/accounts",
        {
            address,
            password
        }
    );

    const login = await axios.post(
        "https://api.mail.tm/token",
        {
            address,
            password
        }
    );

    return {
        address,
        password,
        token: login.data.token
    };
}

async function inbox(token) {

    const { data } = await axios.get(
        "https://api.mail.tm/messages",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return data["hydra:member"];
}

async function message(id, token) {

    const { data } = await axios.get(
        `https://api.mail.tm/messages/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return data;
}

module.exports = {

    createMail,

    inbox,

    message,

    getUser,

    setUser,

    delUser

};