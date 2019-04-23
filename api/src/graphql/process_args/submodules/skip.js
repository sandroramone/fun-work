exports.Skip = (args, query) => {
    if (args.skip !== undefined) {
        query['$skip'] = args.skip
        delete args.skip
    }
}
