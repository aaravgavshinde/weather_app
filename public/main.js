const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');

const city_country = document.getElementById('city_country');
const temp_val = document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status');
const city = document.getElementById('city');
const country = document.getElementById('country');

const datahide = document.querySelector('.main_content');

const getInfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === '') {
        city_country.innerHTML = `<div>Enter City Name</div>`;
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fc5dd60e2fe0740963ba79c3dfdc72ac`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            city_country.innerHTML = `<div>${arrData[0].name}, ${arrData[0].sys.country}</div>`;
            temp_val.innerText = arrData[0].main.temp;

            let tempMood = arrData[0].weather[0].main;

            if(tempMood == 'Clear'){
                temp_status.innerHTML = `<i class="fa-solid fa-sun" style='color: orange;'></i>`
            }
            else if(tempMood == 'Clouds'){
                temp_status.innerHTML = `<i class="fa-solid fa-cloud" style='color: rgb(130, 211, 255);'></i>`
            }
            else if(tempMood == 'Rain'){
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-rain" style='color: rgb(8, 65, 98);'></i>`
            }
            else{
                temp_status.innerText = tempMood;
            }

            datahide.classList.remove('data_hide');
        }
        catch {
            city_country.innerHTML = `<div>Invalid Name</div>`;
            datahide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener('click', getInfo);