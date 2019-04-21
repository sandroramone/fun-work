const bunyan = require('bunyan')

exports.loggerInstace = bunyan.createLogger({
    name: 'notifier',
    serializers: {
        req: require('bunyan-express-serializer'),
        res: bunyan.stdSerializers.res,
        err: bunyan.stdSerializers.err
    },
    level: 'info',
    streams: [
        {
            path: './src/log/access.log'
        },
        {
            stream: process.stdout
        }
    ]
})

exports.logResponse = (id, body, statusCode) => {
    const log = this.loggerInstace.child({
        id,
        body,
        statusCode
    }, true)
    log.info('response')
}
