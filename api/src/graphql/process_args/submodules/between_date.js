const between_date = (date) => {
    let { start, end } = date

    if (!start) {
        start = new Date()
        start.setHours(0, 0, 0, 0)
    } else {
        start = new Date(start)
        start.setHours(0, 0, 0, 0)
    }

    if (!end) {
        end = new Date()
        end.setHours(23, 59, 59, 0)
    } else {
        end = new Date(end)
        end.setHours(23, 59, 59, 0)
    }

    return { start, end }
}

exports.CreatedAt = (args, query) => {
    if (args.createdAt) {
        if (!query['$and']) {
            query['$and'] = []
        }

        const { start, end } = between_date(args.createdAt)

        if (start)
            query['$and'].push({ createdAt: { $gte: start } })

        if (end)
            query['$and'].push({ createdAt: { $lte: end } })

        delete args.createdAt
    }
}

exports.UpdatedAt = (args, query) => {
    if (args.updatedAt) {
        if (!query['$and']) {
            query['$and'] = []
        }

        const { start, end } = between_date(args.updatedAt)

        if (start)
            query['$and'].push({ updatedAt: { $gte: start } })

        if (end)
            query['$and'].push({ updatedAt: { $lte: end } })

        delete args.updatedAt
    }
}

exports.Birthdate = (args, query) => {
    if (args.birthdate) {
        if (!query['$and']) {
            query['$and'] = []
        }

        const { start, end } = between_date(args.birthdate)

        query['$and'].push({ birthdate: { $gte: start } })
        query['$and'].push({ birthdate: { $lte: end } })
        delete args.birthdate
    }
}
