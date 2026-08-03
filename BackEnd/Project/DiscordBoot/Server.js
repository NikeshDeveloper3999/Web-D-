const { Client, Events, GatewayIntentBits } = require('discord.js');


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.tag}`);
});


client.on('messageCreate', (message) => {
  if(message.author.bot) return;
  if(message.content.startsWith('create') ) {
    const url = message.content.split('create')[1];
    return message.reply({
      content: url,
    });
  }; 
  
  message.reply({
    content: 'hii i am bot',
  });

});


client.on("interactionCreate" , (interaction) => {
    console.log(interaction)
    interaction.reply(pong);
})



client.login('MTUzMzc3NTMyNTI4MzIyNTczMA.Gd3tSN.El4Y_XR2_fyJwaZ2lslL03Qu5efMQMTiD0PJeU');



