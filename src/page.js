// Required by @babel/plugin-proposal-private-methods
import 'core-js/modules/es.weak-set.js';

export class Page
{
    #parameters;

    constructor(parameters)
    {
        this.#parameters = parameters || {};

        this.#validateParameters();
    }

    lang(name, defaultVal = ``)
    {
        return this.#parameters.lang[name] || defaultVal;
    }

    setting(name, defaultVal = ``)
    {
        return this.#parameters.settings[name] || defaultVal;
    }

    #validateParameters()
    {
        const required = [`lang`, `settings`];
        for (let name of required) {
            if (typeof this.#parameters[name] === `undefined`) {
                throw new Error(`Invalid Argument. '${name}' parameter is missing.`);
            }
        }
    }
}
