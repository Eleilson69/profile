// seletores circulo de progresso
const circleProgres = document.querySelector('.circleProgres1')
const circleProgres2 = document.querySelector('.circleProgres2')
const circleProgres3 = document.querySelector('.circleProgres3')
const circleProgres4 = document.querySelector('.circleProgres4')
const circleProgres5 = document.querySelector('.circleProgres5')
    // seletores de percentuais
const numberPercent1 = document.querySelector('.number-percent1')
const numberPercent2 = document.querySelector('.number-percent2')
const numberPercent3 = document.querySelector('.number-percent3')
const numberPercent4 = document.querySelector('.number-percent4')
const numberPercent5 = document.querySelector('.number-percent5')

const values = [86, 75, 70, 65, 60]

const percent1 = () => {
    const number = values[0]
    numberPercent1.innerHTML = `${number} <span>%</span>`
    circleProgres.style.strokeDashoffset = 189 - (189 * number) / 100
}
const percent2 = () => {
    const number = values[1]
    numberPercent2.innerHTML = `${number} <span>%</span>`
    circleProgres2.style.strokeDashoffset = 189 - (189 * number) / 100
}
const percent3 = () => {
    const number = values[2]
    numberPercent3.innerHTML = `${number} <span>%</span>`
    circleProgres3.style.strokeDashoffset = 189 - (189 * number) / 100
}
const percent4 = () => {
    const number = values[3]
    numberPercent4.innerHTML = `${number} <span>%</span>`
    circleProgres4.style.strokeDashoffset = 189 - (189 * number) / 100
}
const percent5 = () => {
    const number = values[4]
    numberPercent5.innerHTML = `${number} <span>%</span>`
    circleProgres5.style.strokeDashoffset = 189 - (189 * number) / 100
}

const load = () => {
    percent1()
    percent2()
    percent3()
    percent4()
    percent5()
}