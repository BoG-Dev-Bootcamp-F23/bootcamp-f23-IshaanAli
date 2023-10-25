import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="heading">
                <h1 className="marta">MARTA</h1>
                <p className="about" onClick={() => {
                    navigate("/about");
                }}>About</p>
            </div>
            <div className="content">


            </div>
        </div>
    )
}