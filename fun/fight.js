module.exports = {
    name: 'fight',
    usage: '<p>fight <user>',
    permission: 1,
    main: function(bot, msg) {
                var responses = [
                    ' was hit on the head by ',
                    ' was kicked by ',
                    ' was slammed into a wall by ',
                    ' was dropkicked by ',
                    ' was DDoSed by ',
                    ' was chokeslammed by ',
                    ' was run over with a robot by ',
                    ' had their IQ dropped 15 points by ',
                    ' had a heavy object dropped on them by ',
                    ' was beat up by ',
                ];
                var player1 = msg.author;
                var player2 = msg.mentions.users.array()[0];
                var hp1 = 1000;
                var hp2 = 1000;
                var damage = [100, 150, 200, 300, 50, 250];
                var turn1 = Math.random() > 0.5;
                var times = 0;
                var michael = bot.users.get("171319044715053057").tag;

                if (!msg.mentions.users.first()) return msg.channel.send("Mention someone, you dumbass!");

                if (player2.id === bot.user.id) {
                    msg.channel.send(bot.user.username + ' **never loses, ** ' + player1.username + '! *[-999999 HP] [0 HP remaining]*');
                    msg.channel.send("*Hint: Don't try to fight me! Nothing personal, kid.*");
                } else if (player2.id === bot.config.owner) {
                    msg.channel.send(player2.username + ' **suplexed you, ** ' + player1.username + '! *[-999999 HP] [0 HP remaining]*');
                    msg.channel.send("*Hint: Don't try to fight " + player2.username + '! Nothing personal, kid.*');
                } else if (player2 !== null) {
                    while (hp1 > 0 && hp2 > 0) {
                        times++;
                        var i = Math.floor(Math.random() * responses.length);
                        var x = Math.floor(Math.random() * damage.length);
                        if (turn1 === true) {
                            hp2 -= damage[x];
                            sendMessage('**' + player2.username + '**' + responses[i] + '**' + player1.username + '**! *[-' + damage[x] + ' hp] [' + hp2 + ' HP remaining]*', times);
                            turn1 = false;
                        } else {
                            hp1 -= damage[x];
                            sendMessage('**' + player1.username + '**' + responses[i] + '**' + player2.username + '**! *[-' + damage[x] + ' hp] [' + hp1 + ' HP remaining]*', times);
                            turn1 = true;
                        }
                    }

                    if (hp1 <= 0) {
                        sendMessage(player1 + ' got their shit kicked in! GG ' + player2 + '! *(Shoutout to ' + michael + ' for originally coding this module.)*', times);
                    } else if (hp2 <= 0) {
                        sendMessage(player2 + ' was absolutely demolished! GG ' + player1 + '! *(Shoutout to ' + michael + ' for originally coding this module.)*', times);
                    }

                    setTimeout(() => {
                        msg.channel.fetchMessages({ limit: 100 })
                            .then(messages => {
                                var msgar = messages.array();
                                msgar = msgar.filter(msg2 => msg2.author.id === bot.user.id && msg2.content.includes('HP remaining'));
                                msgar.length = 20;
                                msgar.map(msg2 => msg2.delete().catch(console.error));
                            });
                        }, (times * 1500) + 2000);
                    } else {
                        msg.reply('please mention someone!');
                    }
             
                    function sendMessage(content, times) {
                        setTimeout(() => {
                            msg.channel.sendMessage(content);
                        }, 1500 * times);
                    }
                },
            };