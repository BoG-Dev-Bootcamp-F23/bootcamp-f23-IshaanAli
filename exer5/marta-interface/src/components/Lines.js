import './css/Lines.css'

export default function Lines(props) {
    const {currColor, setCurrColor} = props;

    let colorKeys = {
        "RED" : '#FF0000',
        "BLUE" : '#4169E1',
        "GOLD" : '#FFD700',
        "GREEN" : '#228B22'
    }

    return (
        <div className='lines'>
            <button style={{backgroundColor: colorKeys["GOLD"]}}><p>Gold</p></button>
            <button style={{backgroundColor: colorKeys["RED"]}}><p>Red</p></button>
            <button style={{backgroundColor: colorKeys["BLUE"]}}><p>Blue</p></button>
            <button style={{backgroundColor: colorKeys["GREEN"]}}><p>Green</p></button>
        </div>
    )
}