const Discord = require('discord.js'),
    config = require('../config.json')
 
module.exports = {
    run: (message, args, client) => {
        if (args[0]) {
            const command = client.commands.get(args[0].toLowerCase())
            if (!command || !command.help) return message.channel.send('Cette commande n\'existe pas.')
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`**Commande : ${command.name}**\n\n${command.help.description}\n\nSyntaxe : \`${config.prefix}${command.name}${command.help.syntax ? ` ${command.help.syntax}` : ''}\``))
        }
        else {
             message.channel.send(new Discord.MessageEmbed()
            .setTitle('⚒️ Modération ⚒️')
            .setDescription('__Commande de modération.__')
            .setColor('#FF3333')
            .addField('**?kick**', '?kick <@membre> [raison]', true)
            .addField('**?ban**', '?ban <@membre> [raison]', true)
            .addField('**?tempban**', '?tempban <@membre> [temps]', true)
            .addField('**?warn**', '?warn <@membre> [raison]', true)
            .addField('**?unwarn**', '?unwarn <@membre> [ID]', true)
            .addField('**?mute**', '?mute <@membre>', true)
            .addField('**?tempmute**', '?tempmute <@membre> [temps]', true)
            .addField('**?unmute**', '?unmute <@membre>', true)
            .addField('**?clear**', '?clear [1-99]', true)
            .addField('**?infractions**', '?infractions <@membre>', true)
            .setAuthor('Liste des commandes', '', 'https://google.fr')
            .setTimestamp()
            .setURL('https://google.fr'))
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('📋 Utilitére 📋')
            .setDescription('__Commande utile.__')
            .setColor('#1700FF')
            .addField('**?ticket**', '?ticket', true)
            .addField('**?report**', '?report', true)
            .addField('**?embed**', '?embed', true)
            .addField('**?user-info**', '?user-info <@membre>', true)          
            .addField('**?role-info  **', '?role-info <@role>', true)
            .addField('**?server-info**', '?server-info true)', true)
            .setAuthor('Liste des commandes', '', 'https://google.fr')
            .setTimestamp()
            .setURL('https://google.fr'))
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('🎲 Fun 🎲')
            .setDescription('__Commande de jeux.__')
            .setColor('#FFF300')
            .addField('**?8ball**', '?8ball [Question]', true)
            .addField('**?poll**', '?poll [Question] | [Réponse1] | [Réponse2] | ...(max: 20)', true)
            .addField('**?say**', '?say [Texte]', true)
            .setAuthor('Liste des commandes', '', 'https://google.fr')
            .setTimestamp()
            .setURL('https://google.fr'))
        }
    },
    name: 'help',
    help: {
        description: 'Cette commande permet d\'avoir de l\'aide.',
        syntax: '[nom de la commande]'
    }
}
