module.exports = {
    name: 'info',
    permission: 1,
    main: function (bot, msg) {
        msg.channel.send({
          embed: 
          { color: 3447003,
            footer: {
              icon_url: msg.guild.iconURL,
              text: "© Jared Lyon 2019" 
            },
            author: {
              name: "Bot Information",
              icon_url: msg.guild.iconURL
            },
            fields: [
              {
                name: "General:",
                value: "JareBot is Discord chat bot (obviously) that performs rudimentary chat tasks as well as executes complicated score and currency commands. This bot is confined to Jared's personal Discord server, and is primarily designed to assist in giveaways, moderation, and a wide array of information distribution. JareBot was initially created in August of 2017 by Michael Cao in order to teach its current developer, Jared Lyon, how to code in Javascript."
              },
              {
                name: "Last Update: v5.2.3",
                value: "-Updated info embed\n-Updated help embed\n-Added classic blackjack module\n-Streamlined j!balance command"
              },
              {
                name: "GitHub: v5.2.1",
                value: "https://github.com/KingWaffleshnoz/JareBot\nNote that this page is still a WIP."
              }
            ]
          }
        });
    }
}