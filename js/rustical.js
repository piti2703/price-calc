const producerNettoBasic = document.querySelector('.producer-netto-basic')
const producerNettoFive = document.querySelector('.producer-netto-five')
const producerNettoTen = document.querySelector('.producer-netto-ten')

const producerBruttoBasic = document.querySelector('.producer-brutto-basic')
const producerBruttoFive = document.querySelector('.producer-brutto-five')
const producerBruttoTen = document.querySelector('.producer-brutto-ten')

const eshopBasic = document.querySelector('.eshop-basic')
const eshopFive = document.querySelector('.eshop-five')
const eshopTen = document.querySelector('.eshop-ten')

const allegroBasic = document.querySelector('.allegro-basic')
const allegroFive = document.querySelector('.allegro-five')
const allegroTen = document.querySelector('.allegro-ten')

const profitBrutto = document.querySelector('.profit-brutto')
const profitNetto = document.querySelector('.profit-netto')
const delivery = document.querySelector('.delivery')

const errorText = document.querySelector('.calculator__error')


const pricesCalculator = () => {
    producerNettoFive.value = (producerNettoBasic.value * 1.05).toFixed(2)
    producerNettoTen.value = (producerNettoBasic.value * 1.1).toFixed(2)

    producerBruttoBasic.value = (producerNettoBasic.value * 1.23).toFixed(2)
    producerBruttoFive.value = (producerNettoFive.value * 1.23).toFixed(2)
    producerBruttoTen.value = (producerNettoTen.value * 1.23).toFixed(2)

    eshopBasic.value = (parseFloat(producerBruttoBasic.value) + parseFloat(profitBrutto.value)).toFixed(2)
    eshopFive.value = (parseFloat(producerBruttoFive.value) + parseFloat(profitBrutto.value)).toFixed(2)
    eshopTen.value = (parseFloat(producerBruttoTen.value) + parseFloat(profitBrutto.value)).toFixed(2)

    const allegroInvisibleFirst = ((parseFloat(eshopBasic.value) + 0.1 * parseFloat(delivery.value)) / 0.9).toFixed(2)
    const allegroInvisibleSecond = ((parseFloat(eshopFive.value) + 0.1 * parseFloat(delivery.value)) / 0.9).toFixed(2)
    const allegroInvisibleThird = ((parseFloat(eshopTen.value) + 0.1 * parseFloat(delivery.value)) / 0.9).toFixed(2)
    
    
    if(parseFloat(allegroInvisibleFirst) + parseFloat(delivery.value) >= 2000) {
        allegroBasic.value = (parseFloat(eshopBasic.value) + 200).toFixed(2)
    }
    else {
        allegroBasic.value = ((parseFloat(eshopBasic.value) + 0.1 * parseFloat(delivery.value)) / 0.9).toFixed(2)
    }

    if(parseFloat(allegroInvisibleSecond) + parseFloat(delivery.value) >= 2000) {
        allegroFive.value = (parseFloat(eshopFive.value) + 200).toFixed(2)
    }
    else {
        allegroFive.value = ((parseFloat(eshopFive.value) + 0.1 * parseFloat(delivery.value)) / 0.9).toFixed(2)
    }

    if(parseFloat(allegroInvisibleThird) + parseFloat(delivery.value) >= 2000) {
        allegroTen.value = (parseFloat(eshopTen.value) + 200).toFixed(2)
    }
    else {
        allegroTen.value = ((parseFloat(eshopTen.value) + 0.1 * parseFloat(delivery.value)) / 0.9).toFixed(2)
    }

    profitNetto.value = (profitBrutto.value * 0.77).toFixed(2)

    console.log(parseFloat(allegroInvisibleFirst) + parseFloat(delivery.value));
}

const checkInputs = () => {


    if(producerNettoBasic.value == 0 || profitBrutto.value == 0 || delivery.value == 0) {
        errorText.style.visibility = 'visible'
    }
    else {
        errorText.style.visibility = 'hidden'
        pricesCalculator()
    }
}


pricesCalculator()

producerNettoBasic.addEventListener('keyup', checkInputs)
profitBrutto.addEventListener('keyup', checkInputs)
delivery.addEventListener('keyup', checkInputs)