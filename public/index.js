async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    const response = await fetch('http://localhost:9001/counter');

    const result = await response.json();
    
    let countValue = result.value;

    async function updateCounter(newValue){
        let response = await fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'value': newValue
            })
        })
        let result = await response.json()
        console.log(result)
    }

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
        updateCounter(countValue)
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        updateCounter(countValue)
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()