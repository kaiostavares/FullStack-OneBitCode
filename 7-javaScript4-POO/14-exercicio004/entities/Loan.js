const Installment = require('./Installment')

module.exports = class Loan{
    static #fee = 1.0639
    
    constructor(value, installments){
        this.value = value
        this.installment = []
        this.date = Date()
        this.#calculateInstallments(installments)
    }

    static get fee(){
        return Loan.#fee
    }
    static set fee(newFeePercentage){
        Loan.#fee = 1 + newFeePercentage/100
    }

    #calculateInstallments(installments){
        const debit = this.value * Math.pow(Loan.#fee, installments)
        for(let i=1; i<= installments; i++){
            this.installment.push(new Installment( debit/installments, i))
        }
    }
}