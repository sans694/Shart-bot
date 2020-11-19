const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
client.setMaxListeners(200);
const prefix = "-"

client.on('ready', () => {
	console.log('ShartBot is now online!');
	client.user.setActivity('Fuck', { type: "WATCHING"})
		.then(presence => console.log(`Activity set to Watching ${presence.activities[0].name}`))
		.catch(console.error);
});

client.on('message', message => {
	if (message.content === prefix+"shart") {
			message.channel.send('This is cool');
	}
});

client.on('message', message => { 
	if (message.content === prefix+'Shart') {
			message.channel.send('This is cool')
	}
});

client.on('message', message => {
	if (message.content === prefix+"SHART") {
			message.channel.send('This is cool');
		}
});

client.on('message', message => {
	if (message.content === prefix+'help') {
			message.channel.send("`user-info: Displays user information \nprefix: - \nRomania: Romania \nsex: linus is only one for me \nMan: Man \nFart: sends a fat rip in that direction \nFour: this is four \nCum in the eye: Self explanatory \npissfart: for those times for when you want to piss and fart \nSee more: you see. more \nJoe: do not ask whomst joe i`");
	}
});

client.on('message', message => {
	if (message.content === prefix+'fart') {
			message.channel.send("As I walk through the valley of the shadow of death I take a look at my life and realize there's not much left 'Coz I've been blastin' and laughin' so long, that Even my mama thinks that my mind is gone But I ain't never crossed a man that didn't deserve it Me be treated like a punk you know that's unheard of You better watch how you're talkin', and where you're walkin' Or you and your homies might be lined in chalk I really hate to trip but I gotta, loc As I grow I see myself in the pistol smoke, fool I'm the kinda G the little homies wanna be like On my knees in the night, sayin' prayers in the streetlight Been spendin' most their lives, Livin' in the gangsta's paradise Been spendin' most their lives, Livin' in the gangsta's paradise Keep spendin' most our lives, Livin' in the gangsta's paradise Keep spendin' most our lives, Livin' in the gangsta's paradise They got the situation, they got me facin' I can't live a normal life, I was raised by the stripes So I gotta be down with the hood team Too much television watchin' got me chasin' dreams I'm an educated fool with money on my mind Got my 10 in my hand and a gleam in my eye I'm a loc'd out gangsta set trippin' banger And my homies is down so don't arouse my anger, fool Death ain't nothin' but a heartbeat away I'm livin' life, do or die, what can I say I'm twenty-three now, but will I live to see twenty-four The way things are going I don't know Tell me why are we, so blind to see That the one's we hurt, are you and me Been spendin' most their lives, Livin' in the gangsta's paradise Been spendin' most their lives, Livin' in the gangsta's paradise Keep spendin' most our lives, Livin' in the gangsta's paradise Keep spendin' most our lives, Livin' in the gangsta's paradise");
	}
});

client.on('message', message => {
	if (message.content === prefix+'Fart') {
			message.channel.send("As I walk through the valley of the shadow of death I take a look at my life and realize there's not much left 'Coz I've been blastin' and laughin' so long, that Even my mama thinks that my mind is gone But I ain't never crossed a man that didn't deserve it Me be treated like a punk you know that's unheard of You better watch how you're talkin', and where you're walkin' Or you and your homies might be lined in chalk I really hate to trip but I gotta, loc As I grow I see myself in the pistol smoke, fool I'm the kinda G the little homies wanna be like On my knees in the night, sayin' prayers in the streetlight Been spendin' most their lives, Livin' in the gangsta's paradise Been spendin' most their lives, Livin' in the gangsta's paradise Keep spendin' most our lives, Livin' in the gangsta's paradise Keep spendin' most our lives, Livin' in the gangsta's paradise They got the situation, they got me facin' I can't live a normal life, I was raised by the stripes So I gotta be down with the hood team Too much television watchin' got me chasin' dreams I'm an educated fool with money on my mind Got my 10 in my hand and a gleam in my eye I'm a loc'd out gangsta set trippin' banger And my homies is down so don't arouse my anger, fool Death ain't nothin' but a heartbeat away I'm livin' life, do or die, what can I say I'm twenty-three now, but will I live to see twenty-four The way things are going I don't know Tell me why are we, so blind to see That the one's we hurt, are you and me Been spendin' most their lives, Livin' in the gangsta's paradise Been spendin' most their lives, Livin' in the gangsta's paradise Keep spendin' most our lives, Livin' in the gangsta's paradise Keep spendin' most our lives, Livin' in the gangsta's paradise");
	}
});

client.on('message', message => {
	if (message.content === prefix+'FART') {
			message.channel.send("As I walk through the valley of the shadow of death I take a look at my life and realize there's not much left 'Coz I've been blastin' and laughin' so long, that Even my mama thinks that my mind is gone But I ain't never crossed a man that didn't deserve it Me be treated like a punk you know that's unheard of You better watch how you're talkin', and where you're walkin' Or you and your homies might be lined in chalk I really hate to trip but I gotta, loc As I grow I see myself in the pistol smoke, fool I'm the kinda G the little homies wanna be like On my knees in the night, sayin' prayers in the streetlight Been spendin' most their lives, Livin' in the gangsta's paradise Been spendin' most their lives, Livin' in the gangsta's paradise Keep spendin' most our lives, Livin' in the gangsta's paradise Keep spendin' most our lives, Livin' in the gangsta's paradise They got the situation, they got me facin' I can't live a normal life, I was raised by the stripes So I gotta be down with the hood team Too much television watchin' got me chasin' dreams I'm an educated fool with money on my mind Got my 10 in my hand and a gleam in my eye I'm a loc'd out gangsta set trippin' banger And my homies is down so don't arouse my anger, fool Death ain't nothin' but a heartbeat away I'm livin' life, do or die, what can I say I'm twenty-three now, but will I live to see twenty-four The way things are going I don't know Tell me why are we, so blind to see That the one's we hurt, are you and me Been spendin' most their lives, Livin' in the gangsta's paradise Been spendin' most their lives, Livin' in the gangsta's paradise Keep spendin' most our lives, Livin' in the gangsta's paradise Keep spendin' most our lives, Livin' in the gangsta's paradise");
	}
});

client.on('message', message => {
	if (message.content === prefix+"four")
		message.channel.send("shut the fuck up.");
})

client.on('message', message => {
	if (message.content === prefix+"Four")
		message.channel.send("shut the fuck up.");
})

client.on('message', message => {
	if (message.content === prefix+"4")
		message.channel.send("shut the fuck up.");
})

client.on('message', message => {
	if (message.content === prefix+'cum in the eye')
		message.channel.send('https://cdn.discordapp.com/attachments/503587295740559361/773263094364241970/sad.mp4');
})

client.on('message', message => {
	if (message.content === prefix+'Cum in the eye')
		message.channel.send('https://cdn.discordapp.com/attachments/503587295740559361/773263094364241970/sad.mp4')
})

client.on('message', message => {
	if (message.content === prefix+'pissfart')
		message.channel.send('https://cdn.discordapp.com/attachments/770094079102681198/773594915833511946/oe6gsmt4n4c51.jpg')
})

client.on('message', message => {
	if (message.content === prefix+'Pissfart')
		message.channel.send('https://cdn.discordapp.com/attachments/770094079102681198/773594915833511946/oe6gsmt4n4c51.jpg')
})

client.on('message', message => {
	if (message.content === prefix+'man')
		message.channel.send('https://media.discordapp.net/attachments/724009203072761876/739168273043554444/image0-35.gif')
})

client.on('message', message => {
	if (message.content === prefix+'Man')
		message.channel.send('https://media.discordapp.net/attachments/724009203072761876/739168273043554444/image0-35.gif')
})

client.on('message', message => {
	if (message.content === prefix+'romania')
		message.channel.send('https://tenor.com/view/lakarak-romania-bunny-gif-18775532')
})

client.on('message', message => {
	if (message.content === prefix+'Romania')
		message.channel.send('https://tenor.com/view/lakarak-romania-bunny-gif-18775532')
})

client.on('message', message => {
	if (message.content === prefix+'black man lol')
		message.channel.send('nigga')
});

client.on('message', message => {
if (message.content === prefix+"your-message-here") {
  		message.delete({ timeout: 10 });
	}	
});

client.on('message', message => {
	if (message.content === prefix+"3.141") {
		message.delete({ timeout: 10 })
	}
})

client.on('message', message => {
if (message.content === prefix+"sex") {
		message.channel.send("https://cdn.discordapp.com/attatchments/503587295740559361/773992646589939722/save_image_as.jpg")
	}	
});	

client.on('message', message => {
if (message.content === prefix+"Sex") {
		message.channel.send("https://cdn.discordapp.com/attatchments/503587295740559361/773992646589939722/save_image_as.jpg")
	}	
})

client.on('message', message => {
if (message.content === prefix+"SEX") {
		message.channel.send("https://cdn.discordapp.com/attatchments/503587295740559361/773992646589939722/save_image_as.jpg")
	}	
})


client.on('message', message => {
if (message.content === prefix+"SEX") {
		message.channel.send("https://cdn.discordapp.com/attatchments/503587295740559361/773992646376947712/naked_man_go_brr.jpeg")
	}
});

client.on('message', message => {
if (message.content === prefix+"Sex") {
		message.channel.send("https://cdn.discordapp.com/attatchments/503587295740559361/773992646376947712/naked_man_go_brr.jpeg")
	}
});

client.on('message', message => {
if (message.content === prefix+"sex") {
		message.channel.send("https://cdn.discordapp.com/attatchments/503587295740559361/773992646376947712/naked_man_go_brr.jpeg")
	}
});

client.on('message', message => {
	if (message.content === prefix+"mass shooting") {
			message.channel.send("https://media.discordapp.net/attachments/671340986223296574/749346976847626352/image0.gif")
		}
});


client.on('message', message => {
	if (message.content === prefix+"Mass shooting") {
			message.channel.send("https://media.discordapp.net/attachments/671340986223296574/749346976847626352/image0.gif")
		}
});

client.on('message', message => {
	if (message.content === prefix+"sex") {
			message.channel.send("https://cdn.discordapp.com/attachments/534431681872920610/775115029027749928/save_image_as.jpg")
			message.channel.send("https://cdn.discordapp.com/attachments/534431681872920610/775115058367037460/naked_man_go_brr.jpeg")
		}
});

client.on('message', message => {
	if (message.content === prefix+"Sex") {
			message.channel.send("https://cdn.discordapp.com/attachments/534431681872920610/775115029027749928/save_image_as.jpg")
			message.channel.send("https://cdn.discordapp.com/attachments/534431681872920610/775115058367037460/naked_man_go_brr.jpeg")
		}
});

client.on('message', message => {
	if (message.content === prefix+"SEX") {
			message.channel.send("https://cdn.discordapp.com/attachments/534431681872920610/775115029027749928/save_image_as.jpg")
			message.channel.send("https://cdn.discordapp.com/attachments/534431681872920610/775115058367037460/naked_man_go_brr.jpeg")
		}
});

client.on('message', message => {
	if (message.content === prefix+"see more") {
			message.channel.send("https://cdn.discordapp.com/attachments/534431681872920610/775117213857218611/966906_logo.png")
		}
});

client.on('message', message => {
	if (message.content === prefix+"See more") {
			message.channel.send("https://cdn.discordapp.com/attachments/534431681872920610/775117213857218611/966906_logo.png")
		}
});

client.on('message', message => {
	if (message.content === prefix+"SEE MORE") {
			message.channel.send("https://cdn.discordapp.com/attachments/534431681872920610/775117213857218611/966906_logo.png")
		}
});

client.on('message', message => {
	if (message.content === prefix+'dogecat') {
			message.channel.send('https://cdn.discordapp.com/attachments/773619261897179136/776869943353540618/unknown-9.png')
	}
});

client.on('message', message => {
	if (message.content === prefix+'Dogecat') {
			message.channel.send('https://cdn.discordapp.com/attachments/773619261897179136/776869943353540618/unknown-9.png')
	}
});

client.on('message', message => {
	if (message.content === prefix+'DOGECAT') {
			message.channel.send('https://cdn.discordapp.com/attachments/773619261897179136/776869943353540618/unknown-9.png')
	}
});

client.on('message', message => {
	if (message.content === prefix+'joe') {
		 message.channel.send('mama')
	}
});

client.on('message', message => {
	if (message.content === prefix+'Joe') {
		 message.channel.send('mama')
	}
});

client.on('message', message => {
	if (message.content === prefix+'JOE') {
		 message.channel.send('mama')
	}
});

client.login(config.token);