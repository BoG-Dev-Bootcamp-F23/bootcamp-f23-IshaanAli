import './NavBar.css';

export default function NavBar(props) {
    const {currColor, stationData} = props;

    return (
        <div className="navBar">
            <p id="navBarHeader">Select your starting station</p>
            <p className="navBarElement">All Stations</p>
            {(stationData[currColor.toLowerCase()]).map((station) => {
                return (
                    <p className="navBarElement">{station}</p>
                )
            })}
        </div>
    )

}