
Player.Description = `Code available here: https://github.com/keykey5/BC-BOT-repository
Comment and suggestion thread on BC Discord: https://discord.com/channels/554377975714414605/1024007221845164052
----------------------------------------
This little kinky game needs two players. When the game start you will be able to make actions. 
Use emote <*> to play.
` // end of description
ServerSend("AccountUpdate", { Description: Player.Description });
ChatRoomCharacterUpdate(Player)
