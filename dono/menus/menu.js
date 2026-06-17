//NAO TIRA OS CRÉDITOS LEIA O README PARA ENTENDER O PORQUE

const linha = '╾━╼❖╾━╼❖╾━╼❖╾━╼❖╾━╼❖╾━╼❖';

const userTag = (sender) => `@${sender?.split('@')[0] || 'user'}`;

const rodape = () => `
╚═━───────━━▒۞▒━━───────━═╝
🌌❤️‍🔥 ⟡ 𝒁𝒚𝒓𝒐𝒏-𝑨𝑰 ⟡ ❤️‍🔥🌌`;

const menu = (prefix, sender, NickDono, NomeBot, data, hora, NumberDono, version) => {
return `╔═━───────━━▒۞▒━━───────━═╗
┃ 🌌⚙️ ⟡ 𝐌𝐄𝐍𝐔 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋 ⟡ ⚙️🌌
├${linha}
┃ 👤 Usuário: ${userTag(sender)}
┃ 🤖 Bot: ${NomeBot || 'Zyron-AI'}
┃ 👑 Dono: ${NickDono || 'GzeeScriptsDev'}
┃ 📅 Data: ${data || '--/--/----'}
┃ ⏰ Hora: ${hora || '--:--'}
┃ 🧬 Versão: ${version || '1.0'}
├${linha}
┃
┃ 👮‍♂️👑 𝐀𝐃𝐌𝐈𝐍
┃ ⟡⃟🚫 ${prefix}ban
┃ ⟡⃟❌ ${prefix}kick
┃ ⟡⃟👑 ${prefix}promover
┃ ⟡⃟👤 ${prefix}rebaixar
┃ ⟡⃟🌐 ${prefix}linkgp
┃ ⟡⃟🛡️ ${prefix}antilink
├${linha}
┃ 🎄🛬 𝐁𝐎𝐀𝐒-𝐕𝐈𝐍𝐃𝐀𝐒
┃ ⟡⃟🛬 ${prefix}bemvindo
┃ ⟡⃟📝 ${prefix}legendabv
┃ ⟡⃟🛫 ${prefix}legendasaiu
┃ ⟡⃟🖼️ ${prefix}pack
├${linha}
┃ 🎁🖼️ 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒
┃ ⟡⃟🖼️ ${prefix}sticker
┃ ⟡⃟🖼️ ${prefix}toimg
┃ ⟡⃟📦 ${prefix}figurinhas
┃ ⟡⃟😂 ${prefix}figu_memes
┃ ⟡⃟🖼️ ${prefix}
├${linha}
┃ ❤️‍🔥🌐 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃
┃ ⟡⃟🎧 ${prefix}play
┃ ⟡⃟🎬 ${prefix}ytmp3
┃ ⟡⃟🖼️ ${prefix}ytmp4
┃ ⟡⃟🖼️ ${prefix}video
┃ ⟡⃟🎬 ${prefix}tiktokdl
┃ ⟡⃟📸 ${prefix}instadl
┃ ⟡⃟🎵 ${prefix}spotify
┃ ⟡⃟🌐 ${prefix}mediafire
┃ ⟡⃟📩 ${prefix}dlpv
├${linha}
┃ ❤️‍🔥🤖 𝐈𝐀
┃ ⟡⃟🌌 ${prefix}nano
┃ ⟡⃟🌌 Zyron (pergunta)
┃ ⟡⃟🌌 ${prefix}gemma
┃ ⟡⃟🧠 ${prefix}gerarnick
┃ ⟡⃟🏓 ${prefix}ping
┃ ⟡⃟🎨 ${prefix}flux
┃ ⟡⃟🌌 Veyron (pergunta)
┃ ⟡⃟🌌 ${prefix}zyronimg (prompt)
├${linha}
┃ 🤖🌌 𝐁𝐎𝐓
┃ ⟡⃟⚙️ ${prefix}setprefix
┃ ⟡⃟🔄 ${prefix}reiniciar
┃ ⟡⃟❌ ${prefix}botoff
┃ ⟡⃟✅ ${prefix}boton
├${linha}
┃ 📜👾 𝐔𝐓𝐄𝐈𝐒
┃ ⟡⃟🌐 ${prefix}google (pesquisa)
┃ ⟡⃟🔞 ${prefix}xvideos (pesquisa)
┃ ⟡⃟⬜ ${prefix}qr (gera um QR com foto ou link)
┃ ⟡⃟🔞 ${prefix}marketplace (loja entre users)
${rodape()}`;
};
exports.menu = menu;

const menumemb = (prefix, sender) => {
return `╔═━───────━━▒۞▒━━───────━═╗
┃ 🌌❤️‍🔥 ⟡ 𝐏𝐀𝐈𝐍𝐄𝐋 𝐃𝐎 𝐌𝐄𝐌𝐁𝐑𝐎 ⟡ ❤️‍🔥🌌
├ ${linha}
┃ 👋 Olá, ${userTag(sender)}
┃ ⚡ Comandos liberados para membros
├${linha}
┃
┃ 🌌⚙️ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐎 𝐁𝐎𝐓
┃ ⟡⃟🤖 ${prefix}botinfo
┃ ⟡⃟👑 ${prefix}criador
┃ ⟡⃟🎧 ${prefix}8d
┃ ⟡⃟⛅ ${prefix}clima
┃ ⟡⃟⭐ ${prefix}avaliar
┃ ⟡⃟🐞 ${prefix}bug
┃ ⟡⃟😵 ${prefix}suicídio
├${linha}
┃ 🌌🔥 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒
┃ ⟡⃟📊 ${prefix}status
┃ ⟡⃟🏓 ${prefix}ping
┃ ⟡⃟⏱️ ${prefix}uptime
┃ ⟡⃟🧬 ${prefix}versao
├${linha}
┃ 🌌❤️‍🔥 𝐒𝐈𝐒𝐓𝐄𝐌𝐀
┃ ⟡⃟🛡️ Segurança online
┃ ⟡⃟⚡ Respostas rápidas
┃ ⟡⃟✅ Sistema otimizado
┃ ⟡⃟🌐 Multifunções
${rodape()}`;
};
exports.menumemb = menumemb;

const menubrink = (prefix, sender) => {
return `╔═━───────━━▒۞▒━━───────━═╗
┃ 🌌🤣 ⟡ 𝐌𝐄𝐍𝐔 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒 ⟡ 🤣🌌
├${linha}
┃ 👋 Olá, ${userTag(sender)}
┃ 🎮 Diversão liberada
├${linha}
┃
┃ 🌌🤣 𝐁𝐑𝐈𝐍𝐊𝐒
┃ ⟡⃟🏳️‍🌈 ${prefix}gay @user
┃ ⟡⃟😝 ${prefix}feio @user
┃ ⟡⃟😍 ${prefix}linda @user
┃ ⟡⃟😍 ${prefix}lindo @user
┃ ⟡⃟📯 ${prefix}corno @user
┃ ⟡⃟🙄 ${prefix}invejosa @user
┃ ⟡⃟🙄 ${prefix}invejoso @user
┃ ⟡⃟🫪 ${prefix}vesgo @user
┃ ⟡⃟😡 ${prefix}chata @user
┃ ⟡⃟😡 ${prefix}chato @user
┃ ⟡⃟🫏 ${prefix}burro @user
├${linha}
┃ 🌌🏆 𝐑𝐀𝐍𝐊𝐒
┃ ⟡⃟🏳️‍🌈 ${prefix}rank gay
┃ ⟡⃟😝 ${prefix}rank feio
┃ ⟡⃟😍 ${prefix}rank lindo
┃ ⟡⃟📯 ${prefix}rank corno
┃ ⟡⃟🙄 ${prefix}rank invejoso
┃ ⟡⃟🫪 ${prefix}rank vesgo
┃ ⟡⃟😡 ${prefix}rank chato
┃ ⟡⃟🫏 ${prefix}rank burro
├${linha}
┃ 🌌🎮 𝐉𝐎𝐆𝐎𝐒
┃ ⟡⃟🤦 ${prefix}vdb
┃ ⟡⃟🙋 ${prefix}eununca
┃ ⟡⃟😵 ${prefix}forca
┃ ⟡⃟🛶 ${prefix}batalhanaval
┃ ⟡⃟🎰 ${prefix}roleta
┃ ⟡⃟🎰 ${prefix}cassino
┃ ⟡⃟🎣 ${prefix}pescar
┃ ⟡⃟⛏️ ${prefix}minerar
┃ ⟡⃟🏹 ${prefix}caca
┃ ⟡⃟🪙 ${prefix}moeda
┃ ⟡⃟✂️ ${prefix}ppt
${rodape()}`;
};
exports.menubrink = menubrink;

const menuadm = (prefix, sender) => {
return `╔═━───────━━▒۞▒━━───────━═╗
┃ 🌌👑 ⟡ 𝐂𝐄𝐍𝐓𝐑𝐀𝐋 𝐀𝐃𝐌 ⟡ 👑🌌
├${linha}
┃ 👋 Admin: ${userTag(sender)}
┃ 🛡️ Painel de segurança do grupo
├${linha}
┃
┃ 🌌👥 𝐂𝐎𝐍𝐓𝐑𝐎𝐋𝐄 𝐃𝐄 𝐆𝐑𝐔𝐏𝐎
┃ ⟡⃟✅ ${prefix}ativar
┃ ⟡⃟❌ ${prefix}desativar
┃ ⟡⃟🌐 ${prefix}linkgp
┃ ⟡⃟🚫 ${prefix}antilink 1/0
┃ ⟡⃟🛡️ ${prefix}antilinkhard 1/0
┃ ⟡⃟👑 ${prefix}so_adm
├${linha}
┃ 🌌✅ 𝐁𝐎𝐀𝐒-𝐕𝐈𝐍𝐃𝐀𝐒
┃ ⟡⃟🛬 ${prefix}bemvindo 1/0
┃ ⟡⃟📝 ${prefix}legendabv
┃ ⟡⃟🛫 ${prefix}legendasaiu
├${linha}
┃ 🌌👑 𝐌𝐎𝐃𝐄𝐑𝐀𝐂̧𝐀̃𝐎
┃ ⟡⃟👑 ${prefix}promover @
┃ ⟡⃟👤 ${prefix}rebaixar @
┃ ⟡⃟🚫 ${prefix}ban @
┃ ⟡⃟❌ ${prefix}banir @
┃ ⟡⃟👥 ${prefix}totag
┃ ⟡⃟🫪 ${prefix}avadakedavra @
┃ ⟡⃟💬 ${prefix}fakechat
${rodape()}`;
};
exports.menuadm = menuadm;

const menuStickers = (prefix, sender) => {
return `╔═━───────━━▒۞▒━━───────━═╗
┃ 🌌🖼️ ⟡ 𝐌𝐄𝐍𝐔 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 ⟡ 🖼️🌌
├${linha}
┃ 👤 Usuário: ${userTag(sender)}
├${linha}
┃
┃ 👾🌌 𝐂𝐑𝐈𝐀𝐂̧𝐀̃𝐎
┃ ⟡⃟🖼️ ${prefix}s
┃ ⟡⃟🖼️ ${prefix}sticker
┃ ⟡⃟🖼️ ${prefix}toimg
┃ ⟡⃟✏️ ${prefix}rename
┃ ⟡⃟🎨 ${prefix}brat
┃ ⟡⃟🎥 ${prefix}bratvid
┃ ⟡⃟📝 ${prefix}textcraft
├${linha}
┃ 📩🌌 𝐏𝐀𝐂𝐎𝐓𝐄𝐒
┃ ⟡⃟📦 ${prefix}figurinhas
┃ ⟡⃟🎲 ${prefix}figuale
┃ ⟡⃟😡 ${prefix}figu_raiva
┃ ⟡⃟🎮 ${prefix}figu_roblox
┃ ⟡⃟😂 ${prefix}figu_engracada
┃ ⟡⃟😂 ${prefix}figu_memes
┃ ⟡⃟🌸 ${prefix}figu_anime
┃ ⟡⃟🇰🇷 ${prefix}figu_coreana
┃ ⟡⃟👶 ${prefix}figu_bebe
┃ ⟡⃟🎨 ${prefix}figu_desenho
┃ ⟡⃟🐶 ${prefix}figu_animais
┃ ⟡⃟🧃 ${prefix}figu_flork
┃ ⟡⃟😀 ${prefix}figu_emoji
${rodape()}`;
};
exports.menuStickers = menuStickers;

const menu18 = (prefix, sender) => {
return `╔═━───────━━▒۞▒━━───────━═╗
┃ 🌌🎁 ⟡ 𝐌𝐄𝐍𝐔 𝐏𝐋𝐀𝐐𝐔𝐈𝐍𝐇𝐀𝐒 ⟡ 🎁🌌
┃ ${linha}
┃ 🎅 Olá, ${userTag(sender)}
┃ 🖼️ Escolha uma plaquinha abaixo
┃ 🔞 Menu +18, Seu safado😏
├${linha}
┃
┃ 🎁🌌 𝐏𝐀𝐂𝐎𝐓𝐄 𝐃𝐄 𝐏𝐋𝐀𝐐𝐔𝐈𝐍𝐇𝐀𝐒
┃ ⟡⃟🫪 ${prefix}plaq1
┃ ⟡⃟🫪 ${prefix}plaq2
┃ ⟡⃟🫪 ${prefix}plaq3
┃ ⟡⃟🫪 ${prefix}plaq4
┃ ⟡⃟🫪 ${prefix}plaq5
┃ ⟡⃟🫪 ${prefix}plaq6
┃ ⟡⃟🫪 ${prefix}plaq7
┃ ⟡⃟🫪 ${prefix}plaq8
┃ ⟡⃟🫪 ${prefix}plaq9
┃ ⟡⃟🫪 ${prefix}plaq10
┃ ⟡⃟🫪 ${prefix}plaq11
${rodape()}`;
};
exports.menu18 = menu18;

const menuDono = (prefix, sender) => {
return `╔═━───────━━▒۞▒━━───────━═╗
┃ 🌌👑 ⟡ 𝐂𝐎𝐍𝐓𝐑𝐎𝐋𝐄 𝐒𝐔𝐏𝐑𝐄𝐌𝐎 ⟡ 👑🌌
┃ ${linha}
┃ 👑 Dono: ${userTag(sender)}
┃ ⚡ Núcleo administrativo liberado
├${linha}
┃
┃ ⚙️🌌 𝐂𝐎𝐍𝐅𝐈𝐆 𝐃𝐎 𝐁𝐎𝐓
┃ ⟡⃟📍 ${prefix}setprefix
┃ ⟡⃟🤖 ${prefix}nome-bot
┃ ⟡⃟👑 ${prefix}nick-dono
┃ ⟡⃟✅ ${prefix}verificado
┃ ⟡⃟📊 ${prefix}totalcases
┃ ⟡⃟📂 ${prefix}cases
┃ ⟡⃟📥 ${prefix}getcase
├${linha}
┃ ⚙️🌌 𝐂𝐎𝐍𝐓𝐑𝐎𝐋𝐄
┃ ⟡⃟🔄 ${prefix}reiniciar
┃ ⟡⃟🔄 ${prefix}r
┃ ⟡⃟⚙️ ${prefix}bot
┃ ⟡⃟❌ ${prefix}botoff
┃ ⟡⃟✅ ${prefix}boton
┃ ⟡⃟🚫 ${prefix}bangp
┃ ⟡⃟✅ ${prefix}unbangp
┃ ⟡⃟🫪 ${prefix}avadakedavra
├${linha}
┃ 👑🌌 𝐆𝐄𝐑𝐄̂𝐍𝐂𝐈𝐀 𝐃𝐄 𝐃𝐎𝐍𝐎
┃ ⟡⃟👑 ${prefix}dono
┃ ⟡⃟👑 ${prefix}donos
┃ ⟡⃟👑 ${prefix}listadonos
┃ ⟡⃟👑 ${prefix}novo-dono
┃ ⟡⃟👑 ${prefix}dono1 até ${prefix}dono6
├${linha}
┃ ⚙️🌌 𝐌𝐄𝐍𝐔𝐒 𝐄𝐗𝐓𝐑𝐀
┃ ⟡⃟🫪 Em desenvolvimento
${rodape()}`;
};
exports.menuDono = menuDono;

const menuDown = (prefix, sender) => {
return `╔═━───────━━▒۞▒━━───────━═╗
┃ 🌌❤️‍🔥 ⟡ 𝐂𝐄𝐍𝐓𝐑𝐀𝐋 𝐃𝐄 𝐌𝐈́𝐃𝐈𝐀 ⟡ ❤️‍🔥🌌
┃ ${linha}
┃ 👤 Usuário: ${userTag(sender)}
┃ 🎧 Sistema de download ativo
├${linha}
┃
┃ 🔊🌌 𝐀𝐔𝐃𝐈𝐎 & 𝐕𝐈𝐃𝐄𝐎
┃ ⟡⃟🎧 ${prefix}play
┃ ⟡⃟🎧 ${prefix}play2
┃ ⟡⃟🔊 ${prefix}play_audio
┃ ⟡⃟🎬 ${prefix}play_video
┃ ⟡⃟👁️ ${prefix}rvisu
├${linha}
┃ 🌐🌌 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃
┃ ⟡⃟🎵 ${prefix}spotify
┃ ⟡⃟🎬 ${prefix}ttkdl
┃ ⟡⃟🎬 ${prefix}tiktokdl
┃ ⟡⃟📸 ${prefix}instadl
┃ ⟡⃟📩 ${prefix}dlpv
${rodape()}`;
};
exports.menuDown = menuDown;

const menuRPG = (prefix, sender) => {
return `╔═━───────━━▒۞▒━━───────━═╗
┃ 🌌⚔️ ⟡ 𝐌𝐄𝐍𝐔 𝐑𝐏𝐆 ⟡ ⚔️🌌
├${linha}
┃ 🧙 Jogador: ${userTag(sender)}
┃ 🏰 Sistema RPG liberado
├${linha}
┃
┃ ⚔️🌌 𝐀𝐕𝐄𝐍𝐓𝐔𝐑𝐀
┃ ⟡⃟🎣 ${prefix}pescar
┃ ⟡⃟⛏️ ${prefix}minerar
┃ ⟡⃟🏹 ${prefix}caca
┃ ⟡⃟🛶 ${prefix}batalhanaval
┃ ⟡⃟🧭 ${prefix}explorar
┃ ⟡⃟⚒️ ${prefix}duelo @user
┃ ⟡⃟🐲 ${prefix}raid
├${linha}
┃ 🗺️🫂 𝐑𝐎𝐋𝐄𝐏𝐋𝐀𝐘
┃ ⟡⃟💞 ${prefix}casar @user
┃ ⟡⃟✅ ${prefix}aceitar casamento
┃ ⟡⃟👶 ${prefix}adotar @user
┃ ⟡⃟🫂 ${prefix}familia
┃ ⟡⃟🤰 ${prefix}engravidar
┃ ⟡⃟📯 ${prefix}trair
┃ ⟡⃟💞 ${prefix}namorar
┃ ⟡⃟🥰 ${prefix}flertar
┃ ⟡⃟😍 ${prefix}encontro
┃ ⟡⃟🌕 ${prefix}luademel
┃ ⟡⃟🥰 ${prefix}namorar 
┃ ⟡⃟😘 ${prefix}beijar
┃ ⟡⃟😏 ${prefix}transar
┃ ⟡⃟🏦 ${prefix}banco
┃ ⟡⃟🎁 ${prefix}daily
┃ ⟡⃟🏪 ${prefix}marketplace
┃ ⟡⃟🏦 ${prefix}leilao
┃ ⟡⃟🎒 ${prefix}inventario
┃ ⟡⃟🛒 ${prefix}loja
┃ ⟡⃟🔫 ${prefix}roubar
┃ ⟡⃟💻 ${prefix}trabalhar
┃ ⟡⃟💼 ${prefix}empregos
┃ ⟡⃟📤 ${prefix}demitir
├${linha}
┃ 🐺🌌 𝐏𝐄𝐓𝐒
┃ ⟡⃟🐾 ${prefix}pets
┃ ⟡⃟📦 ${prefix}guardarpets
┃ ⟡⃟💰 ${prefix}venderanimal
├${linha}
┃ 🏆🌌 𝐑𝐀𝐍𝐊𝐈𝐍𝐆
┃ ⟡⃟📊 ${prefix}topmoney
┃ ⟡⃟⚔️ ${prefix}rankmoney
┃ ⟡⃟💰 ${prefix}ricos
${rodape()}`;
};
exports.menuRPG = menuRPG;
/* 
pra adicionar mais menus e etcc...

segue a lógica!!

const menu2 = (prefix, sender) => {
	return `txt
	k
	k
	k
	`;
	}
	exports.menu2 = menu2;
	
na index:

conn.sendMessage(from, { image: FotoMenu, caption: menus.menu(prefix, sender), mentions: [sender]})

*/

