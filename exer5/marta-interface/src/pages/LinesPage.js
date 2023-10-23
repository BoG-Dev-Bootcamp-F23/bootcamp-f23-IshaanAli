// get static data
import { useState } from 'react';
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import './LinesPage.css'
import NavBar from '../components/NavBar.js';
import TrainList from '../components/TrainList';
import Lines from '../components/Lines.js';

export default function LinesPage() {
  // initialize some currColor state
  const [currColor, setCurrColor] = useState("GOLD");

  return (
    <div>
      <Lines currColor = {currColor}></Lines>
      <p className='title'>{currColor}</p>
      <div className='pageContent'>
        <NavBar currColor = {currColor} stationData = {stationData}></NavBar>
        <TrainList currColor = {currColor} trainData = {trainData}></TrainList>
      </div>
    </div>
  );
}