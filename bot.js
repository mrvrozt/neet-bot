const Discord = require('discord.js');
const commando = require('discord.js-commando');

const client = new Discord.Client();
const activities_list = ["Playing", "Watching"];

//let statuses = ["with Bobbo's Penis", "with Steve and Pokie", "Nintendo Switch", "Playstation 4", "Steam", "XBOX One", "with Himself", "with His Slime"]; //Status for Playing
let statuses = ["Hentai", "Pornhub", "my Penis Grow", "Gay Porn", "Someone Jerk Off"]; //Status for Watching

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);

	setInterval(function(){
		let status = statuses[Math.floor(Math.random()*statuses.length)];
		//client.user.setPresence({ game: { name: status, type: 'STREAMING' }, status: 'IDLE'});
		//client.user.setPresence({ game: { name: status, type: 'LISTENING' }, status: 'IDLE'});
		//client.user.setPresence({ game: { name: status, type: 'PLAYING' }, status: 'IDLE'});
		client.user.setPresence({ game: { name: status, type: 'WATCHING' }, status: 'IDLE'});
	}, 3000000);
//client.user.setActivity("TV", {type: "Watching"})
//client.user.setActivity("with Bobbo", {type: "Sleeping"})
//client.user.setActivity("Nintendo Switch")
//client.user.setActivity("with my dick")
//client.user.setActivity("with Bobbo")
//client.user.setActivity("with Steve and Pokie")
});

//client.on('message', (recievedMessage) => {
//	if (recievedMessage.author == client.user)	{
//		return
//	}
//	recievedMessage.channel.send("ZzZZzzzzz" + recievedMessage.author.toString() + ": " + recievedMessage.content)
//});

client.on('message', message => {

	var sender = message.author;
	var msg = message.content.toUpperCase();
	var fs  = require(`fs`);

	var commandList = fs.readFileSync(`commands.txt`, `utf8`);

	if (sender.id === `557942571238817802`){
		return;
	}

	if (msg.includes(`.HELP`)){
		message.channel.send(commandList);
	}

	if (msg.includes(`:THONKK:`)){
		message.channel.send("<:thonkk:533178439646183429>");
	}

	if (msg.includes(`FUCK`)){
		message.channel.send(`${message.author} No! bad person!`);
		//message.delete();
		//message.author.send(`The word **LETTUCE** is banned`)
	}


	if (msg.includes(`.NEET`)){
		message.channel.send("Hey look it's me :grin:");
		number = 30;
		imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
		message.channel.send( {files: ["./tsath/" + imageNumber + ".jpg"]});
		//message.channel.send({files: ["https://pbs.twimg.com/media/D2DtzaXX0AMhTKv.jpg"]});
	}

	if (msg.includes(`.PINCH`)){
		message.channel.send(":blush:");
		message.channel.send( {files: ["./tsath/pinch.png"]});
	}

	if (msg.includes(`SHIT`)){
		message.channel.send("EeWww!");
	}

	if (msg.includes(`I'M SATISFIED`)){
		message.channel.send(`${message.author} I'm happy for you :relaxed:`);
	}

	if (msg.includes(`I'M SO SATISFIED`)){
		message.channel.send(`${message.author} <:luv:550567524320804875>`);
	}

	if (msg.includes(`.SETACTIVITY`)){
		message.channel.send(`${message.author} Sorry you don't have permission to do this`);
	}

	if (msg.includes(`TRASH`)){
		message.channel.send("Hey don't say **TRASH**! :rage:");
	}

	if (msg.includes(`.PING`)){
		message.channel.send(`${message.author} Pong!`);
	}

	if (msg.includes(`.KISS`)){
		message.channel.send(":kissing_closed_eyes:");
	}

	if (msg.includes(`.COFFEE`)){
		message.channel.send(":coffee:");
	}

	if (msg.includes(`.TEA`)){
		message.channel.send(":tea:");
	}

	if (msg.includes(`.DING`)){
		message.channel.send("Dong!");
	}

	if (msg.includes(`BE GOOD TSATH`)){
		message.channel.send("Yes, I'll try my best :grin:");
	}


	//if (msg.includes(`WTF`)){
	//	message.channel.send("Oh no you said a bad word!");
	//}

	//if (msg.includes(`BITCH`)){
	//	message.channel.send("Oh no you said a bad word!");
	//}

	//if (msg.includes(`ASSHOLE`)){
	//	message.channel.send("Oh no you said a bad word!");
	//}

});

client.on('message', msg => {

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min;
	}

if (msg.content.toLowerCase().startsWith(".8ball")) {
	var msg1 = Array(5); 
		msg1[1] = "Yes";
	    msg1[2] = "No";
		msg1[3] = "Maybe :wink:";
		msg1[4] = "Without a doubt.";
		msg1[5] = "I honestly have no idea :neutral_face:"
		msg1[6] = "Highly unlikely" 
        var x = getRandomInt(0, 20);
		if (x < 5){ 
        if (x < 3){
			msg.channel.send(msg1[1]);
		}
		else {
               msg.channel.send(msg1[3]);
		}
		}
		else if (x<= 9) {
			if (x >= 7){
			msg.channel.send(msg1[2]); }
				else{
                   msg.channel.send(msg1[4]);
				}
		} 
		else if (x <= 12 ) { 
			msg.channel.send(msg1[5]);
		}
		else {
			msg.channel.send(msg1[6])
		}
}

	if (msg.content.toLowerCase().startsWith(".rps")) {
		var msg1 = Array(3);
		msg1[1] = "Rock :black_circle:";
	    msg1[2] = "Paper :page_facing_up:";
		msg1[3] = "Scissors :scissors:"
        var x = getRandomInt(0, 9);
		if (x < 6){
        if (x < 3){
			msg.channel.send(msg1[1]);
		}
		else{
            msg.channel.send(msg1[3]);
		}
		}
		else{ 
			msg.channel.send(msg1[2]);
	}
}

		if (msg.content.toLowerCase().startsWith(".rate")) {
				msg.channel.send("I'd rate this "+ getRandomInt(1, 10)+"/10");
		}

		if (msg.content.toLowerCase().startsWith(".howgay")) {
			msg.channel.send("You are "+ getRandomInt(1, 100)+"% gay :gay_pride_flag:");
		}

		if (msg.content.toLowerCase().startsWith(".howsmyluck")) {
			msg.channel.send("Your luck is "+ getRandomInt(1, 100)+"%");
		}

		if (msg.content.toLowerCase().startsWith(".stp")) {
			msg.channel.send("You'll get a "+ getRandomInt(3, 5)+"<:starz:550571430610337794>");
		}

      	if (msg.content.toLowerCase().startsWith(".coinflip")) { 
		var msg2 = Array(2);
		msg2[1] = "Heads";
	    msg2[2] = "Tails";
        var x = getRandomInt(0, 8);
		if (x < 4){
			msg.channel.send(msg2[1]);
		}
		else{
			msg.channel.send(msg2[2]);
		}
	}

});



//const swearWords = ["stfu", "fuck", "bitch", "asshole", "wtf"];
//client.on('message', msg => {
//    if( swearWords.some(word => msg.content.includes(word)) ) {
//        //msg.reply("Oh no you said a bad word!!!");
//		msg.channel.send("Oh no you said a bad word!!!");
//    }
//});

//let censor = "[Sorry, I Swear]"; /* Replace this with what you want */
//client.on('message', message => {
//    let edit = message.content.replace(/asshole/gi, censor);
//    message.delete();
//    message.channel.send(`${message.author.username}: ${edit}`);
//}

//const trashWords = (`/trash/gi`);
//client.on('message', msg => {
//   if( trashWords.some(word => msg.content.includes(word)) ) {
//        //msg.reply("Hey don't say that! :rage:");
//		msg.channel.send("Hey don't say that! :rage:");
//    }
//});

//const coffeeWords = ["coffee"];
//client.on('message', msg => {
//    if( coffeeWords.some(word => msg.content.includes(word)) ) {
//		msg.channel.send("Heh one still hot :coffee:");
//    }
//});

//const teaWords = ["tea"];
//client.on('message', msg => {
//    if( teaWords.some(word => msg.content.includes(word)) ) {
//		msg.channel.send("Warm :tea:");
//    }
//});

//const apprWords = ["thx tsath", "thx tsathoggua", "thank you tsath", "thank you tsathoggua", "thank you so much tsath" , "thank you so much tsathoggua"];
//client.on('message', msg => {
//    if( apprWords.some(word => msg.content.includes(word)) ) {
//		msg.channel.send("You're welcome buddy :blush:");
//   }
//});


//client.on('message', msg => {
//if (msg.content === 'trash') {
//msg.reply("Don't say that :rage:");
//}
//});

//client.on('message', msg => {
//if (msg.content === 'trash') {
//msg.channel.send("Don't say that :rage:");
//}
//});

//client.on('message', (msg) => {
//	if (msg.content === "i'm handsome") {
//		msg.channel.send(`Yes you are ${msg.author}!`);
//	}
//});

//client.on('message', (msg) => {
//	if (msg.content === "ping") {
//		msg.channel.send("pong");
//	}
//});

//client.on('message', (msg) => {
//	if (msg.content === "ding") {
//		msg.channel.send("dong");
//	}
//});

client.login(process.env.BOT_TOKEN);
