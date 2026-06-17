

const msg = {
    SoAdm: "*_❗Voce não é administrador seu filha da puta, nem tenta colocar essa merda de novo!_*", 
    SoDono: "*_❗Somente meu dono pode usar esse comando, cê tem problema desgraça_*",
    BotAdmin: "*_❕Eu preciso ser admin do grupo pra essa porra de comando funcionar desgraça_*",
    SoEmGrupos: "*_❕Esse comando só funciona em grupos poha_*",
    Download: "*_⌛ Realizando ação, aguarde.._*"
};

// TRANSFORMA EM FUNÇÃO
const Cmd = (command, NomeGrupo, prefix) => ({
    Ativado: `❕| *_O recurso "${command}" foi ativado com sucesso no grupo: "${NomeGrupo}"_*\n\n*_Para desativar use: ${prefix + command} 0_*`,
    Desativado: `❗| *_O recurso "${command}" foi desativado com sucesso no grupo: "${NomeGrupo}"_*\n\n*_Para ativar novamente use: ${prefix + command} 1_*`
});

module.exports = { msg, Cmd };
