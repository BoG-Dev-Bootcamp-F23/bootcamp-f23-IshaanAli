import Train from "../components/Train.js";
import arrivals from "../server/trainData.js";
import './css/TrainList.css'

export default function TrainList(props) {
    const {currColor, trainData} = props;

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
            <div className="buttons">
                <button className="arriving"><p>Arriving</p></button>
                <button className="scheduled"><p>Scheduled</p></button>
                <button className="first-direction"><p>{directionFirst()}</p></button>
                <button className="second-direction"><p>{directionSecond()}</p></button>
            </div>
            <div className="trainList">
            {arrivals["RailArrivals"].map((train) => {
              if(train["LINE"] === currColor) {
                return <Train currColor={currColor} trainData={train} />
            }
                })}
            </div>
        </div>
      )
}