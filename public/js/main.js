
const form = document.querySelector('.api_form')
const data=document.querySelector('.data')
const output=document.querySelector('.location_output')
const detailedOutput = document.querySelector('.detail_output')
const img = document.querySelector('.img')
const myLocation = document.querySelector('.currLocation')
const degree = document.querySelector('.degree')
const card = document.querySelector('.card')


form.addEventListener('submit',  (e) => { 
    e.preventDefault()
    img.src = ''

output.textContent='Loading'
    const out = data.value.trim()
    fetchFunc(out)
    data.value=''
})





const fetchFunc = async (location) => {
    try {
        const response = await fetch(`http://localhost:3000/weather?location=${location}`)
        const data = await response.json()
        card.style.backgroundColor='rebeccapurple'
        if (data.error) { 
            degree.textContent=``
            detailedOutput.textContent = ``
            return output.textContent = data.error
        }
        degree.textContent=`${data.farenheat}°F`
         output.textContent = `${data.region}, ${data.country}`
        detailedOutput.textContent = ` ${data.weatherCond}`
         img.src=`${data.icon}`
    }
    catch (e) {

     output.textContent = `${e.message} . Please check your internet connection`
    }
    
}
