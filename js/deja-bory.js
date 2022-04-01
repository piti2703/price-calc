const producerNettoBasic = document.querySelector('.producer-netto-basic')
const producerNettoTen = document.querySelector('.producer-netto-ten')
const producerNettoThirty = document.querySelector('.producer-netto-thirty')

const producerBruttoBasic = document.querySelector('.producer-brutto-basic')
const producerBruttoTen = document.querySelector('.producer-brutto-ten')
const producerBruttoThirty = document.querySelector('.producer-brutto-thirty')

const eshopBasic = document.querySelector('.eshop-basic')
const eshopTen = document.querySelector('.eshop-ten')
const eshopThirty = document.querySelector('.eshop-thirty')

const allegroBasic = document.querySelector('.allegro-basic')
const allegroTen = document.querySelector('.allegro-ten')
const allegroThirty = document.querySelector('.allegro-thirty')

const profitBrutto = document.querySelector('.profit-brutto')
const profitNetto = document.querySelector('.profit-netto')
const delivery = document.querySelector('.delivery')

const errorText = document.querySelector('.calculator__error')


const pricesCalculator = () => {
    producerNettoTen.value = (producerNettoBasic.value * 1.1).toFixed(2)
    producerNettoThirty.value = (producerNettoBasic.value * 1.3).toFixed(2)

    producerBruttoBasic.value = (producerNettoBasic.value * 1.23).toFixed(2)
    producerBruttoTen.value = (producerNettoTen.value * 1.23).toFixed(2)
    producerBruttoThirty.value = (producerNettoThirty.value * 1.23).toFixed(2)

    eshopBasic.value = (parseFloat(producerBruttoBasic.value) + parseFloat(profitBrutto.value)).toFixed(2)
    eshopTen.value = (parseFloat(producerBruttoTen.value) + parseFloat(profitBrutto.value)).toFixed(2)
    eshopThirty.value = (parseFloat(producerBruttoThirty.value) + parseFloat(profitBrutto.value)).toFixed(2)

    const allegroInvisibleFirst = ((parseFloat(eshopBasic.value) + 0.1 * parseFloat(delivery.value)) / 0.9).toFixed(2)
    const allegroInvisibleSecond = ((parseFloat(eshopTen.value) + 0.1 * parseFloat(delivery.value)) / 0.9).toFixed(2)
    const allegroInvisibleThird = ((parseFloat(eshopThirty.value) + 0.1 * parseFloat(delivery.value)) / 0.9).toFixed(2)
    
    
    if(parseFloat(allegroInvisibleFirst) + parseFloat(delivery.value) >= 2000) {
        allegroBasic.value = (parseFloat(eshopBasic.value) + 200).toFixed(2)
    }
    else {
        allegroBasic.value = ((parseFloat(eshopBasic.value) + 0.1 * parseFloat(delivery.value)) / 0.9).toFixed(2)
    }

    if(parseFloat(allegroInvisibleSecond) + parseFloat(delivery.value) >= 2000) {
        allegroTen.value = (parseFloat(eshopTen.value) + 200).toFixed(2)
    }
    else {
        allegroTen.value = ((parseFloat(eshopTen.value) + 0.1 * parseFloat(delivery.value)) / 0.9).toFixed(2)
    }

    if(parseFloat(allegroInvisibleThird) + parseFloat(delivery.value) >= 2000) {
        allegroThirty.value = (parseFloat(eshopThirty.value) + 200).toFixed(2)
    }
    else {
        allegroThirty.value = ((parseFloat(eshopThirty.value) + 0.1 * parseFloat(delivery.value)) / 0.9).toFixed(2)
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