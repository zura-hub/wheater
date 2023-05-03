// http://api.weatherapi.com/v1/current.json?key=23dbf5d653bc44528c9132545230305&q=Georgia

const title = document.querySelector('.title')
const country = document.querySelector('.country')
const cloud = document.querySelector('.cloud')
const temp = document.querySelector('.temp')
const number = document.querySelector('.number')
const cloudNumber = document.querySelector('.cloudNumber')
const main = document.querySelector('.main')



const getWether = async () => {

    try {

        const selectCity = () => {
            const cityes = ['' , 'Tbilisi', 'Zugdidi', 'Batumi', 'Gori', 'Sokhumi']
            const select = document.createElement('select')
            select.classList.add('select')

            for (let i = 0; i < cityes.length; i++) {
                const option = document.createElement('option')
                option.value = cityes[i]
                option.textContent = cityes[i]
                select.appendChild(option)
            }
            main.appendChild(select)
            
        }

        selectCity()

        const data = await fetch('http://api.weatherapi.com/v1/current.json?key=23dbf5d653bc44528c9132545230305&q=Georgia').then(_ => _.json())
        console.log(data)
        const select = document.querySelector('select')

        console.log(select)

        select.addEventListener('input', () => {
            if(select.value === 'Tbilisi'){
                country.innerHTML = data.location.name  
                cloudNumber.innerHTML = data.current.cloud + ' %'
                number.innerHTML = data.current.temp_c + ' C'
            }else {
                country.innerHTML = ' ' 
                cloudNumber.innerHTML =  ' ' + ' %'
                number.innerHTML =  ' ' + ' C'
            }
        })


    } catch (error) {
        console.log(error)
    }
}

getWether()
