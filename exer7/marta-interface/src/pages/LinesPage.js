// get static data
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './LinesPage.css'
import NavBar from '../components/NavBar.js';
import TrainList from '../components/TrainList';
import '../components/css/Lines.css'

export default function LinesPage() {

	let colorKeys = {
		"RED" : '#FF0000',
		"BLUE" : '#4169E1',
		"GOLD" : '#FFD700',
		"GREEN" : '#228B22'
  	}

	const [currColor, setCurrColor] = useState("GOLD");
	const [currStation, setCurrStation] = useState("ALL");

	
	return (
		<div>
			<p className='title'>{currColor}</p>
			<div className='lines'>
				<button className = 'goldButton' style={{borderWidth: (currColor === "GOLD") ? '6px' : '3px'}} onClick={() => {
					setCurrColor("GOLD")
					setCurrStation("ALL")
				}}><p style={{fontFamily: 'Trebuchet MS', fontWeight: 'bolder'}}>Gold</p></button>
				<button className = 'redButton' style={{borderWidth: (currColor === "RED") ? '6px' : '3px'}} onClick={() => {
					setCurrColor("RED")
					setCurrStation("ALL")
				}}><p style={{fontFamily: 'Trebuchet MS', fontWeight: 'bolder'}}>Red</p></button>
				<button className = 'blueButton' style={{borderWidth: (currColor === "BLUE") ? '6px' : '3px'}} onClick={() => {
					setCurrColor("BLUE")
					setCurrStation("ALL")
				}}><p style={{fontFamily: 'Trebuchet MS', fontWeight: 'bolder'}}>Blue</p></button>
				<button className = 'greenButton' style={{borderWidth: (currColor === "GREEN") ? '6px' : '3px'}} onClick={() => {
					setCurrColor("GREEN")
					setCurrStation("ALL")
				}}><p style={{fontFamily: 'Trebuchet MS', fontWeight: 'bolder'}}>Green</p></button>
			</div>
			<div className='pageContent'>
				<NavBar currColor = {currColor} currStation={currStation} setCurrStation={setCurrStation}></NavBar>
				<TrainList currColor = {currColor} currStation={currStation}></TrainList>
			</div>
		</div>
	);
	}