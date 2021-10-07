// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('../config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// setting up the NYH notes 
const nhynotes = [
    'https://twitter.com/i/birdwatch/n/1387069180101472258',
    'https://twitter.com/i/birdwatch/n/1418789085922185225',
    'https://twitter.com/i/birdwatch/n/1428196766529245188',
    'https://twitter.com/i/birdwatch/n/1426378386822291458',
    'https://twitter.com/i/birdwatch/n/1432058425056403459',
    'https://twitter.com/i/birdwatch/n/1434995783510765568',
    'https://twitter.com/i/birdwatch/n/1421634280330088448',
    'https://twitter.com/i/birdwatch/n/1435439002195316738',
    'https://twitter.com/i/birdwatch/n/1436909526821834752',
    'https://twitter.com/i/birdwatch/n/1440122295142522880'
]

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('🤖 bot ready! 🤖');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'nyh2ratepls') {
        const i = Math.floor(Math.random() * nhynotes.length);
        const reply = nhynotes[i];
        await interaction.reply(reply);
    }
});

// Login to Discord with your client's token
client.login(token);