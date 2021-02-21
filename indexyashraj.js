const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'y+vc') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join(I'd voice channel) 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**📌❌**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` link server never`) // link server never
    
  client.channels.get("I'd channel text").send(
`> <:yashrajDevUp:791411050238836766> send by: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`📌The advertisement that sends me I'll put it📌`) 
});




client.login("");//Token
