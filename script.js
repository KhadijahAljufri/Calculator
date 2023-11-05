const resultInput = document.querySelector('.container .result');
const numberItems = document.querySelectorAll('.container .items-container .bottom-side .numbers-container div');
const operatorItems = document.querySelectorAll('.container .items-container .operators-container div');
const equalOperator = document.querySelector('.container .items-container .bottom-side .equal');

numberItems.forEach(item => {
    item.addEventListener('click', () => {
        resultInput.append(item.textContent)
    })
});
operatorItems.forEach(item => {
    item.addEventListener('click', () => {
        let itemImage = document.createElement("img")
        itemImage.src = `./assets/${item.className}.svg`
        resultInput.append(itemImage)
    })
});
