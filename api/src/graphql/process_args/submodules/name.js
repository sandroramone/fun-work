exports.Name = (args, query) => {
    if (args.name !== undefined) {
        query['name'] = new RegExp(args.name, 'i')
        delete args.name
    }
}
