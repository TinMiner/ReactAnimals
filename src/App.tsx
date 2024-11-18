import { useState } from 'react'
import AnimalShow from './AnimalShow';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function getRandomAnimal() {
  const animals: string[] = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getRandomAnimal());

function App() {
 const [animals, setAnimals] = useState<string[]>([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  )
}

export default App
