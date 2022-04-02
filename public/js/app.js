console.log('Client side javascript file is loaded!')




const weatherForm = document.querySelector('form')
const searchForm = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    message1.textContent = "loading..."
    message2.textContent = ''
    const location = searchForm.value
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if(data.error){
            message1.textContent = data.error
        } else {
            message1.textContent = data.location
            message2.textContent = data.forecast
        }
    })
})
})