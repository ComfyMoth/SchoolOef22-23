import './App.css'

function App() {
  const random : number = Math.random();
  const getal1 : number = Math.floor(Math.random() * 10);
  const getal2 : number = Math.floor(Math.random() * 10);

  const sommetje = (somgetal1 : number, somgetal2: number): number => {
    return somgetal1 + somgetal2;
  }

  const vermenigvuldiging = (vermeniggetal1: number, vermeniggetal2: number): number => {
    return vermeniggetal1 * vermeniggetal2;
  }

  return (
    <>
      <h1>Labo 1</h1>
      <p>{random}</p>
      <p>{getal1}</p>
      <p>{getal2}</p>
      <p>{random > 0.5 ? <>{getal1} + {getal2} = {sommetje(getal1, getal2)}</> : <>{getal1} * {getal2} = {vermenigvuldiging(getal1, getal2)}</>}</p>
    </>
  )
}

export default App
