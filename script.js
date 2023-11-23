const resultInput = document.querySelector('.container .result');
const numberItems = document.querySelectorAll('.container .items-container .bottom-side .numbers-container .number');
const operatorItems = document.querySelectorAll('.container .items-container .operators-container div');
const equalOperator = document.querySelector('.container .items-container .bottom-side .equal');
const clear = document.querySelector('.container .items-container .bottom-side .numbers-container .equal');
const dot = document.querySelector('.container .items-container .bottom-side .numbers-container .dot');
let operatingInput = [];
numberItems.forEach(item => {
    item.addEventListener('click', () => {
        resultInput.append(item.textContent)
        operatingInput.push(item.textContent)
    })
});
operatorItems.forEach(item => {
    item.addEventListener('click', () => {
        let itemImage = document.createElement("img")
        itemImage.src = `./assets/${item.className}.svg`
        resultInput.append(itemImage)
        if(item.className == 'plus'){
            operatingInput.push('+')
        } else if(item.className == 'minus'){
            operatingInput.push('-')
        } else if(item.className == 'divide'){
            operatingInput.push('/')
        } else if(item.className == 'multiply'){
            operatingInput.push('*')
        }
    })
});
equalOperator.addEventListener('click', () => {
    if(eval(operatingInput.join("")) !== undefined){
        resultInput.innerHTML = eval(operatingInput.join(""))
        operatingInput = [eval(operatingInput.join(""))]
    }
})
clear.addEventListener('click', () => {
    resultInput.innerHTML = ''
    operatingInput = []
})                               
dot.addEventListener('click', () => {
    const lastItem = operatingInput[operatingInput.length - 1]
    if(lastItem !== '+' && lastItem !== '/' && lastItem !== '*' && lastItem !== '-' && lastItem !== '.'){
        operatingInput.push('.')
        if(eval(operatingInput.join("")) !== undefined){
            operatingInput.push('.')
            resultInput.append('.')
        }
    }
    operatingInput.pop('.')
})
