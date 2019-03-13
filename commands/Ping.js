const Chariot = require('chariot.js');

class Ping {
    constructor() {
        this.name = 'ping';
        this.aliases = [];
        this.owner = false;
    }

    async execute(message, args, chariot) {
        message.channel.createMessage("Pong!");
    }
}

module.exports = new Ping();