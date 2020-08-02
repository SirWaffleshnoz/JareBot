module.exports = {
    name: 'sell',
    permission: 1,
    main: async function (bot, msg) {
        var x = msg.content.split(' ').splice(0)[0];
        let account = await bot.bank.get(msg.author.id);
        let stats = await bot.stats.get(msg.author.id);
        let fishing = await bot.fishing.get(msg.author.id);

        if (x != null && x == 'trash') {
            var y = fishing.trash;

            fishing.trash = 0;
            account.balance += 1*y;
            stats.fishing.net += 1*y;
            await bot.fishing.update(fishing);
            await bot.stats.update(stats);
            await bot.bank.update(account);
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** trash for **$` + 1*y + `**, ` + msg.author.username + `!`);
        } else if (x != null && x == 'common') {
            var y = fishing.fish1;

            fishing.fish1 = 0;
            account.balance += 20*y;
            stats.fishing.net += 20*y;
            await bot.fishing.update(fishing);
            await bot.stats.update(stats);
            await bot.bank.update(account);
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** common fish for **$` + 20*y + `**, ` + msg.author.username + `!`);
        } else if (x != null && x == 'rare') {
            var y = fishing.fish2;

            fishing.fish2 = 0;
            account.balance += 30*y;
            stats.fishing.net += 30*y;
            await bot.fishing.update(fishing);
            await bot.stats.update(stats);
            await bot.bank.update(account);
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** rare fish for **$` + 30*y + `**, ` + msg.author.username + `!`);
        } else if (x != null && x == 'crabs') {
            var y = fishing.crabs;

            fishing.crabs = 0;
            account.balance += 500*y;
            stats.fishing.net += 500*y;
            await bot.fishing.update(fishing);
            await bot.stats.update(stats);
            await bot.bank.update(account);
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** crabs for **$` + 500*y + `**, ` + msg.author.username + `!`);
        } else if (x != null && x == 'crocodiles') {
            var y = fishing.crocodiles;

            fishing.crocodiles = 0;
            account.balance += 500*y;
            stats.fishing.net += 500*y;
            await bot.fishing.update(fishing);
            await bot.stats.update(stats);
            await bot.bank.update(account);
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** crocodiles for **$` + 500*y + `**, ` + msg.author.username + `!`);
        } else if (x != null && x == 'whales') {
            var y = fishing.whales;

            fishing.whales = 0;
            account.balance += 750*y;
            stats.fishing.net += 750*y;
            await bot.fishing.update(fishing);
            await bot.stats.update(stats);
            await bot.bank.update(account);
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** whales for **$` + 750*y + `**, ` + msg.author.username + `!`);
        } else if (x != null && x == 'dolphins') {
            var y = fishing.dolphins;

            fishing.dolphins = 0;
            account.balance += 750*y;
            stats.fishing.net += 750*y;
            await bot.fishing.update(fishing);
            await bot.stats.update(stats);
            await bot.bank.update(account);
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** dolphins for **$` + 750*y + `**, ` + msg.author.username + `!`);
        } else if (x != null && x == 'blowfish') {
            var y = fishing.blowfish;

            fishing.blowfish = 0;
            account.balance += 500*y;
            stats.fishing.net += 500*y;
            await bot.fishing.update(fishing);
            await bot.stats.update(stats);
            await bot.bank.update(account);
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** blowfish for **$` + 500*y + `**, ` + msg.author.username + `!`);
        } else if (x != null && x == 'squid') {
            var y = fishing.squid;

            fishing.squid = 0;
            account.balance += 1000*y;
            stats.fishing.net += 1000*y;
            await bot.fishing.update(fishing);
            await bot.stats.update(stats);
            await bot.bank.update(account);
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** squid for **$` + 1000*y + `**, ` + msg.author.username + `!`);
        } else if (x != null && x == 'sharks') {
            var y = fishing.sharks;

            fishing.sharks = 0;
            account.balance += 1000*y;
            stats.fishing.net += 1000*y;
            await bot.fishing.update(fishing);
            await bot.stats.update(stats);
            await bot.bank.update(account);
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** sharks for **$` + 1000*y + `**, ` + msg.author.username + `!`);
        } else if (x != null && x == 'all') {
            var a = fishing.trash
            var b = fishing.fish1
            var c = fishing.fish2
            var d = fishing.crabs
            var e = fishing.crocodiles
            var f = fishing.whales
            var g = fishing.dolphins
            var h = fishing.blowfish
            var i = fishing.squid
            var j = fishing.sharks

            var z = a*1 + b*20 + c*30 + d*500 + e*500 + f*750 + g*750 + h*500 + i*1000 + j*1000;
            account.balance += z;

            var u = a*1 + b*20 + c*30 + d*500 + e*500 + f*750 + g*750 + h*500 + i*1000 + j*1000;
            stats.fishing.net += u;

            fishing.trash = 0;
            fishing.fish1 = 0;
            fishing.fish2 = 0;
            fishing.crabs = 0;
            fishing.crocodiles = 0;
            fishing.whales = 0;
            fishing.dolphins = 0;
            fishing.blowfish = 0;
            fishing.squid = 0;
            fishing.sharks = 0;

            await bot.fishing.update(fishing);
            await bot.stats.update(stats);
            await bot.bank.update(account);
            msg.channel.send(`:moneybag: | You sold your entire inventory for **$` + z + `**, ` + msg.author.username + `!`);
        } else {
            msg.reply('something went wrong! Be sure to specify if which part of your inventory you intend to sell: **trash**, **common**, **rare**, **crabs**, **crocodiles**, **whales**, **dolphins**, **blowfish**, **squid**, **sharks**, **all**.');
        }
    }
}