function updateTime() {
  //Brazil
  let brazilElement = document.querySelector("#brazil");
  let brazilDateElement = brazilElement.querySelector(".date");
  let brazilTimeElement = brazilElement.querySelector(".time");
  let brazilTime = moment().tz("Brazil/East");

  brazilDateElement.innerHTML = brazilTime.format("MMMM Do YYYY");
  brazilTimeElement.innerHTML = brazilTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //Dublin
  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Dublin");

  dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
  dublinTimeElement.innerHTML = dublinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //Moswow
  let moscowElement = document.querySelector("#moscow");
  let moscowDateElement = moscowElement.querySelector(".date");
  let moscowTimeElement = moscowElement.querySelector(".time");
  let moscowTime = moment().tz("Europe/Moscow");

  moscowDateElement.innerHTML = moscowTime.format("MMMM Do YYYY");
  moscowTimeElement.innerHTML = moscowTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
 <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss "
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">All cities</a>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
