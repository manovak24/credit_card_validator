const ValidateCred = {
    validate(cardNumber) {
        if (cardNumber === 0) {
            return (() => ({
                results: 'Working'
            }))
        } else {
            return (() => ({
                results: 'Not working'
            }))
        }
    }
}

export default ValidateCred;