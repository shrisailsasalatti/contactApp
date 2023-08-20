import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, getCovid, getDate } from "../actions/covidaction.tsx";
import { RootState } from "../store/configureStore";
import { Chart } from "react-google-charts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./style.css";

export const options = {
  chart: {
    title: "Niisjkjwkd",
    subtitle: "in millions of dollars (USD)",
  },
};

interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
  active: number;
  recovered: number;
  deaths: number;
  // Add other properties as needed
}

const Covid: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data);
  const data2 = useSelector((state: RootState) => state.data2);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);

  useEffect(() => {
    dispatch(getCountry("https://disease.sh/v3/covid-19/countries"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCovid("https://disease.sh/v3/covid-19/all"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getDate("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
    );
  }, [dispatch]);

  const dataChart = [
    ["Day", "Cases"],
    ["1/22/20", 557],
    ["1/23/20", 657],
    ["1/24/20", 944],
    ["1/25/20", 1437],
    ["1/26/20", 2120],
    ["1/27/20", 2929],
    ["1/28/20", 5580],
    ["1/29/20", 6169],
    ["1/30/20", 8237],
    ["1/31/20", 9927],
    ["2/1/20", 12038],
    ["2/2/20", 16787],
    ["2/3/20", 19887],
    ["2/4/20", 23899],
    ["2/5/20", 27644],
    ["2/6/20", 30806],
    ["2/7/20", 34400],
    ["2/8/20", 37131],
    ["2/9/20", 40162],
    ["2/10/20", 42771],
    ["2/11/20", 44814],
    ["2/12/20", 45232],
    ["2/13/20", 60384],
    ["2/14/20", 66912],
    ["2/15/20", 69055],
    ["2/16/20", 71238],
    ["2/17/20", 73273],
    ["2/18/20", 75155],
    ["2/19/20", 75655],
    ["2/20/20", 76216],
    ["2/21/20", 76846],
    ["2/22/20", 78608],
    ["2/23/20", 78990],
    ["2/24/20", 79558],
    ["2/25/20", 80412],
    ["2/26/20", 81384],
    ["2/27/20", 82728],
    ["2/28/20", 84152],
    ["2/29/20", 86023],
    ["3/1/20", 88402],
    ["3/2/20", 90382],
    ["3/3/20", 92994],
    ["3/4/20", 95338],
    ["3/5/20", 98078],
    ["3/6/20", 102062],
    ["3/7/20", 106199],
    ["3/8/20", 109997],
    ["3/9/20", 114292],
    ["3/10/20", 119051],
    ["3/11/20", 126527],
    ["3/12/20", 133283],
    ["3/13/20", 146477],
    ["3/14/20", 157365],
    ["3/15/20", 168598],
    ["3/16/20", 183165],
    // Add new data point
    ["3/17/20", 693682156], // Replace with the actual data
  ];

  return (
    <>
      <div className="chart-wrapper flex flex-wrap justify-center items-center space-x-4 p-8">
        <div className="w-full ">
          <div style={{ width: "100%", height: "400px" }}>
            <Chart
              chartType="Line"
              width="100%"
              height="100%"
              data={dataChart}
              options={{
                chart: {
                  title: "COVID-19 Cases",
                  subtitle: "Total cases over time",
                },
                hAxis: {
                  title: "Date",
                },
                vAxis: {
                  title: "Cases",
                },
                legend: {
                  position: "top",
                },
              }}
            />
          </div>
        </div>
        <div className="chart-map ">
          {" "}
          {/* Set the desired height */}
          <MapContainer
            center={[0, 0]}
            zoom={0}
            style={{ height: "50%", width: "50%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {data.data2.map((country: CountryData, index: number) => (
              <Marker
                key={index}
                position={[country.countryInfo.lat, country.countryInfo.long]}
              >
                <Popup>
                  <div>
                    <h2>{country.country}</h2>
                    <p>Total Active Cases: {country.active}</p>
                    <p>Total Recovered: {country.recovered}</p>
                    <p>Total Deaths: {country.deaths}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Covid;
