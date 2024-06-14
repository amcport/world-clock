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
}
updateTime();
setInterval(updateTime, 1000);
