let config = {
  "bot": {
    "token": process.env.BOT_TOKEN,
    "oauth": process.env.BOT_OAUTH
  },
  "database": {
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "password": process.env.DB_PASSWORD,
    "user": process.env.DB_USER
  },
  "settings": {
    "prefix": process.env.BOT_PREFIX,
    "autodeletemsg": process.env.AUTO_DELETE_MSG,
    "deleteTimeout": process.env.DELETE_TIMEOUT,
    "deleteTimeoutLong": process.env.DELETE_TIMEOUT_LONG,
    "maxvcslots": process.env.MAX_VC_SLOT,
    "leaveAfterEndOfPlaylist": process.env.LEAVE_AFTER_PLAYLIST
  },
  "bezerk": {
    "use": process.env.USE_BEZERK,
    "uri": process.env.BEZERK_URI
  },
  "elasticsearch": {
    "use": process.env.USE_ES,
    "client": {
      "host": process.env.ES_HOST
    }
  },
  "permissions": {
    "master": process.env.MASTER_USERS,
    "level1": [],
    "level2": [],
    "level3": []
  },
  "api_keys": {
    "imgflip": {
      "username": process.env.IMGFLIP_USER,
      "password": process.env.IMGFLIP_PASSWORD
    },
    "google": process.env.API_GOOGLE,
    "twitchId": process.env.API_TWITCH,
    "bugsnag": process.env.API_BUGSNAG,
    "imgur": process.env.API_IMGUR,
    "cleverbot_user": "",
    "cleverbot_key": ""
  }
}


exports.config = config