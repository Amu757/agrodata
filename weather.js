function getData(city) {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5a70cce1b0msh8cd57baa00fe235p14d387jsn4e20d2d31bb1',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    return fetch(url, options)
        .then(response => response.json())
        .then(data => {
            return data; // Return the data from the response
        })
        .catch(error => {
            console.log('Error:', error);
            throw error; // Rethrow the error to propagate it
        });
}

// at page load
cityName.innerHTML = "Delhi";
getData("delhi")
    .then(report => {
        console.log("defoult data:", report);
        temp.innerHTML = report.temp;
        feels_like.innerHTML = report.feels_like;
        humidity.innerHTML = report.humidity;
        min_temp.innerHTML = report.min_temp;
        max_temp.innerHTML = report.max_temp;
        wind_speed.innerHTML = report.wind_speed;
        wind_degrees.innerHTML = report.wind_degrees;

        //sunrise
        // Get the Unix epoch timestamp
        var timestamp1 = report.sunrise;

        // Create a new Date object using the timestamp (in milliseconds)
        var date1 = new Date(timestamp1 * 1000);

        var hours1 = date1.getHours();
        var minutes1 = date1.getMinutes();
        var seconds1 = date1.getSeconds();

        sunrhr.innerHTML = hours1;
        sunrmin.innerHTML = minutes1;
        sunrsec.innerHTML = seconds1;
        // sunset
        var timestamp2 = report.sunset;
        var date2 = new Date(timestamp2 * 1000);
        var hours2 = date2.getHours();
        var minutes2 = date2.getMinutes();
        var seconds2 = date2.getSeconds();

        sunshr.innerHTML = hours2;
        sunsmin.innerHTML = minutes2;
        sunssec.innerHTML = seconds2;

    })


// search result
submit.addEventListener("click", (e) => {
    e.preventDefault();
    cityName.innerHTML = city.value;

    getData(city.value)
        .then(report => {
            console.log("Here is your search info:", report);
            temp.innerHTML = report.temp;
            feels_like.innerHTML = report.feels_like;
            humidity.innerHTML = report.humidity;
            min_temp.innerHTML = report.min_temp;
            max_temp.innerHTML = report.max_temp;
            wind_speed.innerHTML = report.wind_speed;
            wind_degrees.innerHTML = report.wind_degrees;

            //sunrise
            // Get the Unix epoch timestamp
            var timestamp1 = report.sunrise;

            // Create a new Date object using the timestamp (in milliseconds)
            var date1 = new Date(timestamp1 * 1000);

            var hours1 = date1.getHours();
            var minutes1 = date1.getMinutes();
            var seconds1 = date1.getSeconds();

            sunrhr.innerHTML = hours1;
            sunrmin.innerHTML = minutes1;
            sunrsec.innerHTML = seconds1;
            // sunset
            var timestamp2 = result.sunset;
            var date2 = new Date(timestamp2 * 1000);
            var hours2 = date2.getHours();
            var minutes2 = date2.getMinutes();
            var seconds2 = date2.getSeconds();

            sunshr.innerHTML = hours2;
            sunsmin.innerHTML = minutes2;
            sunssec.innerHTML = seconds2;

        })
        .catch(error => {
            console.log('Error:', error);
        });
})

function tabledata(report, rowname) {
    // Get the table row
    const row = document.querySelector(rowname);
    // const row = document.querySelector('.row1');

    // Get all the <td> elements within the row
    const tds = row.querySelectorAll('td');
    tds[0].innerHTML = `${report.temp} <sup>0</sup>C`;
    tds[1].innerHTML = `${report.feels_like} <sup>0</sup>C`;
    tds[2].innerHTML = `${report.max_temp} <sup>0</sup>C`;
    tds[3].innerHTML = `${report.min_temp} <sup>0</sup>C`;
    tds[4].innerHTML = `${report.humidity} %`;

    tds[5].innerHTML = `${report.wind_degrees} <sup>0</sup>`;
    tds[6].innerHTML = `${report.wind_speed} Km/h`;

    sunrise
    var timestamp1 = report.sunrise;
    var sunrise = new Date(timestamp1 * 1000);

    var hours1 = sunrise.getHours();
    var minutes1 = sunrise.getMinutes();
    var seconds1 = sunrise.getSeconds();

    tds[7].innerHTML = `${hours1}H:${minutes1}M:${seconds1}S`;

    // sunset
    var timestamp2 = report.sunset;
    var sunset = new Date(timestamp2 * 1000);
    hours1 = sunset.getHours();
    minutes1 = sunset.getMinutes();
    seconds1 = sunset.getSeconds();

    tds[8].innerHTML = `${hours1}H:${minutes1}M:${seconds1}S`;
}


// get table values 
getData("chandrapur")
    .then(report => {
        console.log("Here is shanghai data   :", report);
        tabledata(report, ".row1");
    })
getData("nagpur")
    .then(report => {
        console.log("Here is shanghai data   :", report);
        tabledata(report, ".row2");
    })
getData("yavatmal")
    .then(report => {
        console.log("Here is shanghai data   :", report);
        tabledata(report, ".row3");
    })
getData("ballarpur")
    .then(report => {
        console.log("Here is shanghai data   :", report);
        tabledata(report, ".row4");
    })
getData("mul")
    .then(report => {
        console.log("Here is shanghai data   :", report);
        tabledata(report, ".row5");
    })
getData("amravati")
    .then(report => {
        console.log("Here is shanghai data   :", report);
        tabledata(report, ".row6");
    })
