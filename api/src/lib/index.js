/**
 * @module lib
 */

/**
 * @class Controller
 * @classdesc Controller representing a genercic actions
 * @constructor Controller
 * @param {Dal!} dal This is a dal used to operations, is a class extends base dal
 */
const Controller = require('./controller')
const Dal = require('./dal')
const Route = require('./route')

module.exports = {
    Controller,
    Dal,
    Route
}
