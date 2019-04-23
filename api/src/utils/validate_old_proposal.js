exports.existsOldProposal = async (cpf, model) => {
    // ms in minutes * minutes in hour * hours in day * 90 days
    const days = 60000 * 60 * 24 * 90
    const dateLimit = new Date(new Date().getTime() - days)
    const query = {
        cpf: cpf.replace(/\D/g, ''),
        createdAt: { $gte: dateLimit.toISOString() }
    }

    try {
        const count = await model.count(query)
        return count > 0 ? true : false
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error.stack)
        return null
    }
}
