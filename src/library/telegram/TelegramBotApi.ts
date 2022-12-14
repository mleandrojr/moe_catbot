/**
 * Catbot Telegram Bot
 *
 * This file is part of Catbot Telegram Bot.
 * You are free to modify and share this project or its files.
 *
 * @package  moe_catbot
 * @author   Marcos Leandro <mleandrojr@yggdrasill.com.br>
 * @license  GPLv3 <http://www.gnu.org/licenses/gpl-3.0.en.html>
 */

import fetch from 'node-fetch';

export default class TelegramBotApi {

    /**
     * Telegram Bot API endpoint.
     *
     * @author Marcos Leandro
     * @since  1.0.0
     */
    protected static endpoint = "https://api.telegram.org";

    /**
     * Telegram Bot API method.
     *
     * @author Marcos Leandro
     * @since  1.0.0
     */
    protected method: string;

    /**
     * Telegram Bot token.
     *
     * @author Marcos Leandro
     * @since  1.0.0
     */
    protected static token: string;

    /**
     * Request payload.
     *
     * @author Marcos Leandro
     * @since  1.0.0
     */
    protected payload: any;

    /**
     * The constructor.
     *
     * @author Marcos Leandro
     * @since  1.0.0
     */
    public constructor(method: string) {
        this.method = method;
    }

    /**
     * Sets the Telegram Bot token.
     *
     * @author Marcos Leandro
     * @since  1.0.0
     *
     * @param  {string} token
     */
    public static setToken(token: string): void {
        TelegramBotApi.token = token;
    }

    /**
     * Returns the file URL.
     *
     * @author Marcos Leandro
     * @since  1.0.0
     *
     * @param path
     *
     * @returns File URL.
     */
    public static getFileUrl(path: string): string {
        return `${TelegramBotApi.endpoint}/file/bot${TelegramBotApi.token}/${path}`;
    }

    /**
     * Makes a GET request to the Telegram Bot API.
     *
     * @author Marcos Leandro
     * @since  1.0.0
     *
     * @returns {Promise<any>}
     */
    public async get(): Promise<any> {
        return this.request("GET", this.payload);
    }

    /**
     * Makes a POST request to the Telegram Bot API.
     *
     * @author Marcos Leandro
     * @since  1.0.0
     *
     * @returns {Promise<any>}
     */
    public async post(): Promise<any> {
        return this.request("POST", this.payload);
    }

    /**
     * Makes a POST request to the Telegram Bot API.
     *
     * @author Marcos Leandro
     * @since  1.0.0
     *
     * @returns {Promise<any>}
     */
    public async put(): Promise<any> {
        return this.request("PUT", this.payload);
    }

    /**
     * Makes a POST request to the Telegram Bot API.
     *
     * @author Marcos Leandro
     * @since  1.0.0
     *
     * @returns {Promise<any>}
     */
    public async delete(): Promise<any> {
        return this.request("DELETE", this.payload);
    }

    /**
     * Makes the request to the Telegram Bot API.
     *
     * @author Marcos Leandro
     * @since  1.0.0
     *
     * @param method
     * @param payload
     *
     * @returns {Promise<any>}
     */
    private async request(method: string, payload: object): Promise<any> {

        const url  = `${TelegramBotApi.endpoint}/bot${TelegramBotApi.token}/${this.method}`;
        const body = JSON.stringify(payload) || "";

        const headers = {
            "Content-Type"   : "application/json",
            "Content-Length" : body.length.toString()
        };

        const params = {
            method  : method,
            headers : headers,
            body    : body
        };

        return fetch(url, params);
    }
}
