const discord = require('discord.js');
const bot = new discord.Client();
const config = require('./config.json')

bot.on('ready', message =>{
	console.log('bot is ready!');
  bot.user.setActivity('【g*】ゲームクラブ!!', {
    type: 'PLAYING'
  });
});

bot.on('guildMemberAdd', member => {
  member.send({embed:{
    author: {
      name: "ゲームクラブ専属Bot!!",
      icon_url: "https://cdn.discordapp.com/attachments/697420867025633360/705385051805843456/image0-0004.jpg"
    },
    title:"ゲームクラブへようこそ！",
    description:"ゲームクラブに参加してくれてありがとうございます！\nこの鯖はみんな優しく、楽しくにぎやかなサーバーです！\nまずは<#697420827213299732>、<#697420863917654036>を読んで、<#701279610540654642>で自己紹介をしましょう！\n楽しんで行ってね!",
    footer:{
      icon_url: "https://cdn.discordapp.com/attachments/697420867025633360/705385051805843456/image0-0004.jpg",
      text:"~~利用規約長くてめんどいから適当でいいよ！~~"
    }
  }})
});

bot.on('message', async message =>{
  const msg = message.content;

  if (message.author.bot == true)return;


  switch(message.content){
    case "こんにちは":
            message.channel.send('やっはろ～')
    break
    case "thinking":
      message.channel.send(":thinking:")
    break

  }

  if(msg.includes("ちね") || msg.includes("しね") || msg.includes("死ね") || msg.includes("シネ") || msg.includes("fuck") || msg.includes("ふぁっく") || msg.includes("ファック")){
    message.channel.send("そんなこと言ったらだめだよ！")
  }

  if(msg === "すき"){
    message.channel.send("急にそんなこと言われても...///")
  }

  if(msg === "ばか"){
    message.channel.send("そんなにツンツンしなくても...少しはデレてもいいんだよ///")
  }

  if(msg.includes("ぴえん")){
    message.channel.send("(´；ω；`)ｳｩｩ")
  }

  if(msg.includes("うんこ") || msg.includes("うんち")){
    message.channel.send("💩" + "hello!")
    const reaction = await message.react('💩');
  }

  if(msg.includes("ぶちょー") || msg.includes("部長") || msg.includes("ぶちょう")){
    message.channel.send("よんだ？[壁]ω・｀)ﾋｮｺ")
    const filter = msg => msg.author.id === message.author.id
     const collected = await message.channel.awaitMessages(filter, { max: 1, time: 10000 })
     const response = collected.first()
    const m = response.content
    if(response.content == "no" || response.content == "いや" || response.content == "いいえ" || response.content == "呼んでない" || response.content == "よんでない"){
      message.channel.send("(´；ω；`)")
    }
  }

	if(message.content === `<@${bot.user.id}>`){
		message.reply( 'なに？なにか文句があるならろんげにいって()' );
		return;
	}

      if(message.content.indexOf(config.prefix) !== 0) {
            const log =bot.channels.filter(ch => ch.id === '707144668701392898').forEach(ch =>
      ch.send({
        embed:{
          title:"コマンド実行log",
          timestamp: new Date(),
          color:3066993,
          description:"`[実行者]:"+message.author.tag+" | Id:"+message.author.id+"\n[メッセージ全体]:"+message.content+"　| id:"+message.id+"`",
        }}))
      return;
      }
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  switch(command){

    case "ping":
      message.channel.send(` Ping を確認しています...`)
            .then((pingcheck) => pingcheck.edit(`botの速度|${pingcheck.createdTimestamp - message.createdTimestamp} ms\nAPIの速度|${Math.round(bot.ping)}ms`))
    break
    case "say":
      const sayMessage = args.join(" ");
      message.delete().catch(msg=>{});
      message.channel.send(sayMessage);
    break
    case "help":
    break
    case "sjoin":
            message.channel.send(
          {embed:{
            title:'bot導入サーバー',
             color: 3066993,
            description: (bot.guilds.map(g => g.name).join("\n")),
            fields: [{
              name: "導入サーバー数",
              value: `${bot.guilds.size}サーバー` },
            ]
          }
        }
        );
    break
    case "about":
      let about_cooltime = 3000
      const about_msg_1 = await message.channel.send('僕の何をみようっていうの？！この変態///');

    function about_msg_2(){
      about_msg_1.edit("と言いつつ見せるんだけどねw")
      message.channel.send({embed:{
        author: {
          name: "僕について...",
          icon_url: "https://cdn.discordapp.com/attachments/697420867025633360/705385051805843456/image0-0004.jpg"
        },
        title:"ゲームクラブのぶちょー",
        color:0x67a8dd,
        description:"ゲームクラブの部長です！\n悪い子はお仕置きしちゃうぞ///",
        fields:[
          {
            name:"bot名",
            value:"ゲームクラブ専属Bot!!"
          },
          {
            name:"制作者",
            value:"ろんげ･|9 Ø /V (?, €#6269"
          },
          {
            name:"作成日",
            value:"2020/5/1"
          },
          {
            name:"使用言語",
            value:"Discord.js"
          },
          {
            name:"全ファイル容量",
            value:"34MB"
          }
        ]
      }})
    }
    setTimeout(about_msg_2, about_cooltime)
    break
    case "amakun":
      message.channel.send("僕の大切な部員に何の用？まさかあーゆーこととかこーゆーこととか...?///")
    break
    case "ronge":
      message.channel.send("ん？ろんげ？あー好きにしていいよ。")
    break
    case "yonngou" || "4gou":
      message.channel.send("よん！よん！よんじゅうよん！よんせんよんひゃくよんじゅうよん！")
    break
    case "tao":
      const TAO = await message.channel.send('<#697420914182062140>で月島が出たよ！');
      function TAO_uso(){
        TAO.edit("ま、嘘だけどね。")
      }
      setTimeout(TAO_uso, 5000)
      message.channel.send("テスト")
    break
    case "profile":
      message.channel.send({embed:{
        title:"僕の自己紹介！",
        fields:[
          {
            name:"名前",
            value:"めろ\nめろちゃんって呼んでもいいよ！"
          },
          {
            name:"性別",
            value:"女の子"
          },
          {
            name:"年齢",
            value:"14歳!"
          },
          {
            name:"性格",
            value:"負けず嫌い...だと思う"
          }
        ]
      }})
    break
    case "userinfo":
        function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
      mention = mention.slice(2, -1);

      if (mention.startsWith('!')) {
        mention = mention.slice(1);
      }

      return bot.users.get(mention);
    }
  }
    const user = getUserFromMention(args[0]);
		message.channel.send({
      embed:{
        title:`${user.username}さんの情報`,
        thumbnail:{
          url:user.displayAvatarURL,
        },
        description:`[name]:${user.tag} \n \n [id]:${user.id} \n \n [created]:${user.createdAt}\n\n[if bot]${user.bot}\n\n [avatarURL]${user.avatarURL}`,
      }
    })
    break
    case "ban":
      message.channel.send(`僕には...僕にはそんなつらいことできないよ...。\nだって${args[0]}さんは僕たちの大切な仲間なんだよ...?`)
    break


    default:
      if(command === "開発者")return;
      message.channel.send("あっれぇ？そんなコマンドあったっけ...:thinking:おっかしいな～...")

    break
  }
  if(command === "開発者"){
    message.channel.send("<@502816456052834314>")
    .then(log)
  }
    const author = message.author.tag
    const log =bot.channels.filter(ch => ch.id === '710762672185933886').forEach(ch =>
      ch.send({
        embed:{
          title:"コマンド実行log",
          color:3066993,
          description:"`[実行者]:"+author+" | Id:"+message.author.id+"\n[鯖名]:"+message.guild.name+"| id:"+message.guild.id+"\n[使用コマンド]:"+command+"\n[引数1]:"+args[0]+"\n[引数2]:"+args[1]+"\n[引数3]:"+args[2]+"\n[メッセージ全体]:"+message.content+"`",
        }}))

});

bot.on('message', async (msg) => {
  if (!msg.content.toLowerCase().startsWith(config.prefix) || msg.author.bot) return;
  const args = msg.content.slice(config.prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command == 'help') {
    msg.delete()
    const options = { limit: 15 * 1000, min: 1, max: 10, page: 1}


//helpのページ
    const pages = {
      1:{
         title:"ゲームクラブのぶちょーのhelpです。",
         description:"下のリアクションを押してページ移動してください。\nゴミ箱のリアクションを押すとこの埋め込みを消すことができます。"
        },
      2:{
         title:"目次",
         description:"まだ書いてないです待ってくださいお願いしますなにももしませんから"
        },
      3:{
        title:"コマンド一覧です",
        fields:[
          {
            name:"ping",
            value:"BotとAPIの速度を計測します。"
          },
          {
            name:"sjoin",
            value:"このBotが導入されてるサーバー一覧を表示します"
          },
          {
            name:"about",
            value:"このBotの情報を表示します"
          },
          {
            name:"say",
            value:"Botに文章を発言させることができます"
          },
        ]
        }
    }
//helpのページ

    const awaitReactions = async (msg, m, options, filter) => {
      const { min, max, page, limit } = options;
      m.awaitReactions(filter, { max: 1, time: limit, errors: ['time'] })
        .then(async (collected) => {
        const reaction = collected.first()

        if (reaction.emoji.name === '⬅') {
      await removeReaction(m, msg, '⬅');
      if (options.page != options.min) {
      options.page = options.page - 1;
      await m.edit({ embed: pages[options.page] });
      }
  awaitReactions(msg, m, options, filter);
        }

    else if (reaction.emoji.name === '➡') {
  await removeReaction(m, msg, '➡');
  if (options.page != options.max) {
      options.page = options.page + 1;
      await m.edit({ embed: pages[options.page] });
  }
  awaitReactions(msg, m, options, filter);
    }

    else if (reaction.emoji.name === '🗑') {
  return await m.delete();
    }
    else {
      awaitReactions(msg, m, options, filter);
    };



        }).catch(() => {});
}

    const m = await msg.channel.send({ embed: pages[options.page] });
    await m.react('⬅');
    await m.react('➡');
    await m.react('🗑');

    const filter = (reaction, user) => {
      return ['⬅', '➡', '🗑'].includes(reaction.emoji.name) && user.id == msg.author.id;
    };
    awaitReactions(msg, m, options, filter);
    const removeReaction = async (m, msg, emoji) => {
  try { m.reactions.find(r => r.emoji.name == emoji).users.remove(msg.author.id); } catch(err) {}
    }

    }//command helpの()
});//client.onの()

bot.on('message', async message => {
    const { inspect } = require('util');
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.content.indexOf(config.prefix) !== 0) return

    if (command === 'eval') {
        if (message.author.id == "502816456052834314") {
            let evaled;
            try {
                evaled = await eval(args.join(' '));
                message.channel.send(inspect(evaled));
                //console.log(inspect(evaled));
                }
                catch (error) {
                    console.error(error);
                    message.channel.send(error.message);
                }
            }else message.channel.send("あなたは開発者ではありません")
            .then(message.console)
    }
});//evalコマンド

bot.on('message', message =>{
    if (message.channel.name === 'gameclub-chat'){

        if (message.author.bot) return;
        if (message.attachments.size <= 0)
        {
            message.delete()
        }
        bot.channels.cache.forEach(channel =>
            {
                if (message.attachments.size <= 0)
                {
                    const embed = new discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setDescription(message.content)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL())
                    .setTimestamp()
                    if (channel.name === 'gameclub-chat') return channel.send(embed)
                }
                if (!message.attachments.forEach(attachment => {
                    const embed = new discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setImage(attachment.url)
                    .setDescription(attachment.url)
                    .setColor(3066993)
                    .setFooter(message.guild.name, message.guild.iconURL())
                    .setTimestamp()
                    if (channel.name === 'gameclub-chat')return　channel.send(embed)
                }));
                return;
            });
        }
})//グローバルチャット


bot.login(process.env.DISCORD_BOT_TOKEN);