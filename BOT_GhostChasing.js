
Player.Description = `Code available here: https://github.com/Hentairella/hentairella.github.io
----------------------------------------
This game has players trying to find and capture a ghost before dawn.

If they fail, the players will be sexually teased until they are released at dawn.
Use emote <*> to play.
` // end of description
ServerSend("AccountUpdate", { Description: Player.Description });
ChatRoomCharacterUpdate(Player)
