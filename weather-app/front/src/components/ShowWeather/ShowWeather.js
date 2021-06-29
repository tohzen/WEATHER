import React from "react";
function ShowWeather(props) {
  console.log(props);
  return (
    <div>
      {props.haveInfo === false ? (
        <div>Search Something!</div>
      ) : (
        <>
          <div>
            Current Weather: {props.targetName}, {props.targetCountry}{" "}
          </div>
          <div>
            Temperature: {props.info.temp}
            <br />
            Feels like: {props.info.feels_like}
            <br />
            Lowest: {props.info.temp_min}
            <br />
            Higest: {props.info.temp_max}
            <br />
            humidity: {props.info.humidity}
          </div>
        </>
      )}
    </div>
  );
}
export default ShowWeather;