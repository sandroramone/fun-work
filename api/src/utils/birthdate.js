exports.isBirthdateValid = birthday => {
    const dateStart = new Date(birthday)
    const dateEnd = new Date()

    let years_old = dateEnd.getFullYear() - dateStart.getFullYear()

    if (
        dateEnd.getMonth() < dateStart.getMonth() ||
        dateEnd.getMonth() === dateStart.getMonth() &&
        dateEnd.getDate() < dateStart.getDate()
    )
        years_old--

    return years_old >= 18 && years_old <= 65 ? true : false
}
