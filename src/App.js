import React, { useState } from 'react'
import './App.css'
import { Topic1 } from './components/Topic1';
import { Topic2 } from './components/Topic2';
import { Topic3 } from './components/Topic3';
import { Topic4 } from './components/Topic4';

function App() {
  const [topic, setTopic] = useState("Topic 1");
  const changeTopic = (event) => {
    setTopic(event.target.textContent);
  }
  return (
    <div>
      <nav>
        <ul>
          <li onClick={(event) => {
            changeTopic(event)
          }}>
            All
          </li >
          <li onClick={(event) => {
            changeTopic(event)
          }}>
            Technology
          </li>
          <li onClick={(event) => {
            changeTopic(event)
          }}>
            Architecture
          </li>
          <li onClick={(event) => {
            changeTopic(event)
          }}>
            Nature
          </li>
        </ul>
      </nav>
      {topic === "Nature" ? (<Topic4 />) : (topic === "Technology" ? (<Topic2 />) : (topic === "Architecture" ? (<Topic3 />) : <Topic1 />))}
    </div>
  )

}

export default App;