const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(MTUzMzc3NTMyNTI4MzIyNTczMA.Gd3tSN.El4Y_XR2_fyJwaZ2lslL03Qu5efMQMTiD0PJeU);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1533775325283225730'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
