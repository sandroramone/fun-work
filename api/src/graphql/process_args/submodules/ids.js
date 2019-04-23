exports.Ids = (args, query) => {
    if (args.ids && args.ids.length) {
        query['_id'] = {}
        query['_id']['$in'] = args.ids
        delete args.ids
    }
}
