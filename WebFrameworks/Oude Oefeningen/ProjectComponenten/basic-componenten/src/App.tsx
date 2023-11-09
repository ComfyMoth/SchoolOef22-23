import './App.css'

function App() {
  const titleHead : string = "Welkom tot het dierenparadijs";
  let Diertjes : string[] = ["hond","kat","olifant","slang"]
  const randomGetal : number = Math.floor(Math.random() * 100) + 1;
  

  return (
    <>
      <h1>{titleHead}</h1>
      <p>{Diertjes.map((dier : string) => {return <div key={dier}>{dier}</div>})}</p>
      <p>{randomGetal}</p>
      <button type="button">Maak geluid!</button>
    </>
  )
}

export default App
