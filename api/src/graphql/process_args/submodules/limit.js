exports.Limit = (args, query) => {
    if (args.limit !== undefined) {
        query['$limit'] = args.limit
        delete args.limit
    }
}
