const Chariot = require('chariot.js');
const KuineraConfig = require('./config/KuineraConfig');

class Kuinera extends Chariot.Client {
    
    constructor() {
        super(
            new Chariot.Config(
                KuineraConfig.token,
                KuineraConfig.commandPath,
                {
                    prefix: KuineraConfig.prefix,
                    owner:  KuineraConfig.owners
                }
            )
        );
    }
}

module.exports = new Kuinera();