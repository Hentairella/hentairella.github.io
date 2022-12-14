
Player.Description = `Code available here: https://github.com/Hentairella/hentairella.github.io
----------------------------------------
This little kinky game needs two players. When the game start you will be able to make actions. 
Use emote <*> to play.
` // end of description
ServerSend("AccountUpdate", { Description: Player.Description });
ChatRoomCharacterUpdate(Player)
