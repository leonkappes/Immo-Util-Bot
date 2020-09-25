const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Start Timestamp: ${new Date().toLocaleDateString()}`)
});

client.on('message', msg => {
    if (!msg.guild) return;

});

const immoguildID = '652898771436568586';
const mfdguildID = '758784259631874090';
const mfdRoleID = '758785785255821393';

client.on('guildMemberAdd', async (member) => {
    if(member.guild.id == mfdguildID) {
        let immoGuild = await client.guilds.fetch(immoguildID);
        try {
            let immoUser = await immoGuild.members.fetch(member.id);
            member.roles.add(mfdRoleID, "Bürger Rechte zugewiesen");
        } catch(err) {
            return;
        }
    }else if(member.guild.id == immoguildID) {
        let mfdGuild = await client.guilds.fetch(mfdguildID);
        try {
            let mfdUser = await mfdGuild.members.fetch(member.id);
            mfdUser.roles.add(mfdRoleID, "Bürger Rechte zugewiesen");
        } catch(err) {
            return;
        }
    }
});

client.on('guildMemberRemove', async (member) => {
    if(member.guild.id == immoguildID) {
        let mfdGuild = await client.guilds.fetch(mfdguildID);
        try {
            let mfdUser = await mfdGuild.members.fetch(member.id);
            mfdUser.roles.remove(mfdRoleID, "Bürger Rechte entzogen");
        } catch(err) {
            return;
        }
    }
});

client.login(token);