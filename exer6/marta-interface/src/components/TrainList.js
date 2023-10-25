import Train from "../components/Train.js";
import arrivals from "../server/trainData.js";
import './css/TrainList.css'
import { useState } from "react";
import { useEffect } from "react";

export default function TrainList(props) {
    const {currColor, currStation} = props;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [arrivalsFilter, setArrivalsFilter] = useState(false);
    const [scheduledFilter, setScheduledFilter] = useState(false);
    const [direction1Filter, setDirection1Filter] = useState(false);
    const [direction2Filter, setDirection2Filter] = useState(false);

    const arrivalsURL = " http://13.59.196.129:3001/arrivals/";

    async function getData() {
        const res = await fetch(arrivalsURL + currColor.toLowerCase());
        const data = await res.json();
        setData(data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [currColor]);

    function directionFirst() {
        if (currColor === "GOLD" || currColor === "RED") {
            return "Northbound";
        } else {
            return "Westbound";
        }
    }

    function directionSecond() {
        if (currColor === "GOLD" || currColor === "RED") {
            return "Southbound";
        } else {
            return "Eastbound";
        }
    }

    return (
        <div className="train-content">
            <div className="buttons" style={{marginLeft: (loading) ? '100px' : '0px'}}>
                <button className="arriving" style={{backgroundColor: (arrivalsFilter) ? 'black' : '#EFEFEF', color: (arrivalsFilter) ? '#EFEFEF' : 'black'}} onClick={() => {
                    if (arrivalsFilter === false) {
                        setArrivalsFilter(true);
                    } else if (arrivalsFilter === true) {
                        setArrivalsFilter(false);
                    }
                    if (arrivalsFilter === true) {
                        setData(data.filter(arrival => arrival["WAITING_TIME"] == "Arriving"));
                        console.log("filtered")
                    }
                }}><p>Arriving</p></button>
                <button className="scheduled" style={{backgroundColor: (scheduledFilter) ? 'black' : '#EFEFEF', color: (scheduledFilter) ? '#EFEFEF' : 'black'}} onClick={() => {
                    if (scheduledFilter === false) {
                        setScheduledFilter(true);
                    } else if (scheduledFilter === true) {
                        setScheduledFilter(false);
                    }
                }}><p>Scheduled</p></button>
                <button className="first-direction" style={{backgroundColor: (direction1Filter) ? 'black' : '#EFEFEF', color: (direction1Filter) ? '#EFEFEF' : 'black'}} onClick={() => {
                    if (direction1Filter === false) {
                        setDirection1Filter(true);
                    } else if (direction1Filter === true) {
                        setDirection1Filter(false);
                    }
                }}><p>{directionFirst()}</p></button>
                <button className="second-direction" style={{backgroundColor: (direction2Filter) ? 'black' : '#EFEFEF', color: (direction2Filter) ? '#EFEFEF' : 'black'}} onClick={() => {
                    if (direction2Filter === false) {
                        setDirection2Filter(true);
                    } else if (direction2Filter === true) {
                        setDirection2Filter(false);
                    }
                }}><p>{directionSecond()}</p></button>
            </div>
            <div className="trainList">
            {data?.map((train) => {
              if(train["LINE"] === currColor && train["STATION"] === (currStation.toUpperCase() + " STATION")) {
                return <Train currColor={currColor} currStation={currStation} trainData={train} />
            } else if (train["LINE"] == currColor && currStation === "ALL") {
                return <Train currColor={currColor} trainData={train} />
            }
                })}
            </div>
        </div>
      )
}