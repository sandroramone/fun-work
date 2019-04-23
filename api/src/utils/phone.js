exports.validatorPhone = phone => {
    const regex = /\+\d{2}\s\(\d{2}\)\s\d{4,5}-?\d{4}/g
    return regex.test(phone)
}
