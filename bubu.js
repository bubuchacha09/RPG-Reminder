
// Load up the discord.js library
const Discord = require("discord.js");
// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
const idrolexoatinnhan='720859143967080458'; //thay id role xóa tin nhắn sau hunt vào đây ...
// Here we load the config.json file that contains our token and our prefix values. 
const tenthvien = ['Buddy','còngìđểnhớ','ShinSuke','TNG LucKy']
const idthvien = ['706703492877647963','536531642018299915','451392714924097558','696164097833828453']
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
	var mscontent = message.content
	if(message.author.id=='555955826880413696') {//cái này là id của thằng EPIC RPG
		var char1 = mscontent.charAt(0)
		var descriptiontext=''
		var nametext=''
		if (message.embeds.length==1){
			descriptiontext=message.embeds[0].description
			nametext=message.embeds[0].fields[0].name
		}
		if (typeof descriptiontext =='string'){
			if (descriptiontext.startsWith('<:epicrpgarena')){
				message.channel.send('**__Arena__** <:epicrpgarena:721309296843030538> <:arenacookie:721310211830186086> <@&721290735541813268> các ngài thợ săn mau tham gia đấu trường để nhận Cookie.')
				//thay emoji id va id role arena vao dong tren
			}
		}
		if (typeof nametext == 'string'){
			if (nametext.startsWith('Help ')){
				message.channel.send('**__Mini Boss__** :dagger: <@&721290779670216805> các ngài thợ săn mau đến hỗ trợ.')
			}
			else if (nametext.startsWith('**A MEGALODON')){
				message.channel.send('**__FISH__** <:normiefish:721632403939917956> <:normiefish:721632403939917956> <@&721626025636790304> các ngài thợ săn mau đến để nhận normie fish.')
			}
			else if (nametext.startsWith('**AN EPIC TREE')){
				message.channel.send('**__CHOP__** <:woodenlog:721633717776285726> <:woodenlog:721633717776285726> <@&721625985082195989> các ngài thợ săn mau đến để nhận wooden log.')
			}
			else if (nametext.startsWith("**IT'S RAINING")){
				message.channel.send('**__CATCH__** <:coin:721630641497833503> <:coin:721630641497833503> <@&721626043437285396> các ngài thợ săn mau đến để nhận coins.')
			}
		}
		if (char1 == '*') {
		if (mscontent.includes('is training')){ //training
			var kq = '?'
			mscontent = mscontent.substring(mscontent.indexOf('is training')+18)//xóa tất cả các ký tự từ đầu chuỗi đến hết 'is training in the'
			var char4 = mscontent.charAt(3)
			if (char4 == 'r'){ //' forest' ký tự thứ 4 là r
			var typelog = [0,0,0,0,0]//woodenlog,epiclog,superlog,megalog,hyperlog
			var vitri = 11//lấy ký tự phía sau ' forest!\n<:'
			for (var i=0;i<5;i++){
				if (mscontent.charAt(vitri) == 'w'){//<:woodenlog:555047053441630209>
					typelog[0]++
					vitri = vitri + 31
				}
				else if (mscontent.charAt(vitri) == 'E'){//<:EPICwoodenlog:541056003517710348>
					typelog[1]++
					vitri = vitri + 35
				}
				else if (mscontent.charAt(vitri) == 'S'){//<:SUPEREPICwoodenlog:541384398503673866>
					typelog[2]++
					vitri = vitri + 40
				}
				else if (mscontent.charAt(vitri) == 'M'){//<:MEGASUPEREPICwoodenlog:545396411316043776>
					typelog[3]++
					vitri = vitri + 44
				}
				else if (mscontent.charAt(vitri) == 'H'){//<:HYPERMEGASUPEREPICwoodenlog:546054891408457730>
					typelog[4]++
					vitri = vitri + 49
				}
			}
			//vitri lúc này nằm ở chữ o trong 'How'
				vitri = vitri + 10 //nhảy đến ký tự sau '.......>\nHow many <:'
				if (mscontent.charAt(vitri) == 'w'){
					kq=typelog[0].toString()
				}
				else if (mscontent.charAt(vitri) == 'E'){
					kq=typelog[1].toString()
				}			
				else if (mscontent.charAt(vitri) == 'S'){
					kq=typelog[2].toString()
				}
				else if (mscontent.charAt(vitri) == 'M'){
					kq=typelog[3].toString()
				}
				else if (mscontent.charAt(vitri) == 'H'){
					kq=typelog[4].toString()
				}
			}
			else if (char4 == 'e'){ //' field' ký tự thứ 4 là e
				var char24 = mscontent.charAt(23)
				var char44 = mscontent.charAt(43)
				var thutu = 5
				if (char24 == 'r'){//r trong first
					thutu = 0
				}
				else if (char24 == 'c'){//c trong second
					thutu = 1
				}
				else if (char24 == 'i'){//i trong third
					thutu = 2
				}
				else if (char24 == 'u'){//u trong fourth
					thutu = 3
				}
				else if (char24 == 'f'){//f trong fifth
					thutu = 4
				}
				var chuoi = 'banana'
				if (char44 == 'p'){
					chuoi = 'applea'
				}
				kq = chuoi.charAt(thutu)
			}
			else if (char4 == 'v'){ //' river' ký tự thứ 4 là v
				var kq = '1'
				var char42 = mscontent.charAt(41)//check ký tự tại vị trí này là n-<:normiefish hay g-<:goldenfish hay E-<:EPICfish
				if (char42 == 'g'){
					kq = '2'
				}
				else if (char42 == 'E'){
					kq = '3'
				}
			}
			else if (char4 == ' '){ //'... casino' ký tự thứ 4 là khoảng trắng
			var char27 = mscontent.charAt(26)
			var kq = 'no'
			if (char27 == 'U'){
				var char48 = mscontent.charAt(47)
				if (char48 == 'f'){
					kq = 'yes'
				}
			}
			else if (char27 == 'A'){
				var char39 = mscontent.charAt(38)
				if (char39 == 'e'){
					kq = 'yes'
				}
			}
			else if (char27 == 'I'){
				var char36 = mscontent.charAt(35)
				if (char36 == 'c'){
					kq = 'yes'
				}
			}
			else if (char27 == 'C'){
				var char36 = mscontent.charAt(35)
				if (char36 == 'a'){
					kq = 'yes'
				}
			}
			else if (char27 == 'F'){
				var char36 = mscontent.charAt(35)
				if (char36 == 'i'){
					kq = 'yes'
				}
			}
			}
			else if (char4 == 'n'){
				kq = 'no'
			}
			setTimeout(function(){
			message.channel.send(kq);
			},1000)
		}
	}
	else if (mscontent.startsWith(':oncoming')){
		setTimeout(function(){
		message.channel.send(':blue_circle:')
		},500)
	}
}
else if (!message.author.bot){
	mscontent = mscontent.replace(/  +/g, ' ').toLowerCase()
	var nhaclenh=true
	var multi = 1
	if (message.member.roles.cache.has('720660355742957698')){ //thay id role reminder vào
		multi = 1
	}
	else if (message.member.roles.cache.has('720661036436291585')){ //thay id role giảm 10% cd
		multi = 0.9
	}
	else if (message.member.roles.cache.has('720661277512302772')){ //thay id role giảm 20% cd vào đây
		multi = 0.8
	}
	else if (message.member.roles.cache.has('720661498313179226')){ //thay id role giảm 35% cd vào đây
		multi = 0.65
	}
	else {
		nhaclenh=false
	}
	if (mscontent.startsWith('rpg hunt')){
		message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,70), {
			max: 1,
			time: 8000,
			errors: ['time']
		})
		.then(collected => {
			if (nhaclenh){
			var nhac = '__**HUNT**__ đã sẵn sàng ! <@'+message.author.id+'>'
			setTimeout(function(){
				message.channel.send(nhac);
			}, 120000*multi);
			}
			else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
		})
		.catch(collected => {
		});
	}
	else if (mscontent == 'rpg chop'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**CHOP**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
	}
	else if (mscontent == 'rpg axe'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**AXE**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
	}
	else if (mscontent == 'rpg bowsaw'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**BOWSAW**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
	}
	else if (mscontent == 'rpg chainsaw'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**CHAINSAW**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
	}
	else if (mscontent == 'rpg fish'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**FISH**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
	}
	else if (mscontent == 'rpg net'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**NET**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
	}
	else if (mscontent == 'rpg boat'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**BOAT**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
	}
	else if (mscontent == 'rpg bigboat'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**BIGBOAT**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
}
else if (mscontent == 'rpg pickup'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**PICKUP**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
}
else if (mscontent == 'rpg ladder'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**LADDER**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
}
else if (mscontent == 'rpg tractor'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**TRACTOR**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
}
else if (mscontent == 'rpg greenhouse'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**GREENHOUSE**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
}
else if (mscontent == 'rpg mine'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**MINE**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
}
else if (mscontent == 'rpg pickaxe'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**PICKAXE**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
}
else if (mscontent == 'rpg drill'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**DRILL**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
}
else if (mscontent == 'rpg dynamite'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**DYNAMITE**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
				else if (message.member.roles.cache.has(idrolexoatinnhan)){
				collected.first().delete()
				message.channel.send(':blue_circle:')
			}
			})
			.catch(() => {
			});
}
else if (mscontent == 'rpg tr'||mscontent == 'rpg training'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**TRAINING**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 900000*multi);
				}
			})
			.catch(() => { 
			});
}
else if (mscontent == 'rpg adv'||mscontent == 'rpg adventure'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**ADVENTURE**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 3600000*multi);
				}
			})
			.catch(() => {
			});
}
else if (mscontent.startsWith('rpg buy ')){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith('<:'), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**LOOTBOX**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 10800000);
				}
			})
			.catch(() => {
			});
}
else if (mscontent == 'y' || mscontent == 'yes'){
			var questcheck = '**'+message.author.username+'#'
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(questcheck), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**QUEST**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 21600000*multi);
				}
			})
			.catch(() => {
			});
}
else if (mscontent == 'n' || mscontent == 'no'){
			var notaccept = '<@'+message.author.id+'>, you did'
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(notaccept), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**QUEST**__ đã sẵn sàng ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 3600000*multi);
				}
			})
			.catch(() => {
			});
}
else if (mscontent == 'rpg guild raid' ){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.embeds.length==1, {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
					var descriptiontext=collected.first().embeds[0].description
					if (typeof descriptiontext =='string'){
						const guildraidhint= ':crossed_swords: **'+message.author.username
						if (descriptiontext.startsWith(guildraidhint)){
							setTimeout(function(){
								message.reply('**__GUILD RAID__** đã sẵn sàng')
							}, 10000*multi);
						}
					}
				}
			})
			.catch(() => {
			});
}
else if (mscontent == 'test'){
	message.channel.send({embed:
	{
    "fields":[
        {
            "name":"Raid",
            "value":"**Kyo Sohma** throws a :woodenlog: wooden log\nFAILED!! The guild resisted the impact \u2014 :purple_heart: 100\/100\n**Kyo Sohma** throws a :normiefish: normie fish\nSUCCESS!! \u2014 :purple_heart: 57\/100\n**Kyo Sohma** throws an :Apple: apple\nFAILED!! The guild resisted the impact \u2014 :purple_heart: 57\/100",
            "inline":false
        },
        {
            "name":"Energy",
            "value":"**THICCBOYS** earned **1** :low_brightness: ENERGY\n**KYO** lost **0** :low_brightness: ENERGY\nYour guild earned 1 XP",
            "inline":false
        }
    ],
    "color":10181046,
    "type":"rich",
    "description":":crossed_swords: **Kyo Sohma** RAIDED **THICCBOYS** :crossed_swords:\n**THICCBOYS** ~-~ :low_brightness: **13** :epicrpgshield: **1**"
	}
	});
}
}
});
client.login(process.env.BOT_TOKEN);
