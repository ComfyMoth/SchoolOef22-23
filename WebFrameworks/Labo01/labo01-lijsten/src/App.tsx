import './App.css'

function App() {
  const getallen : number[] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5,];

  interface Student {
    id: number,
    name: string,
    leeftijd: number
  }

  let studenten: Student[] = [
    {
      id: 0,
      name: "Joshie",
      leeftijd: 17
    },
    {
      id: 1,
      name: "Stephanie",
      leeftijd: 20
    }
  ]

  return (
    <>
      <h1>Labo 1: Lijsten</h1>
      <ul>
        {getallen.map((getal: number) => {return <li key={getal}>{getal}</li>})}
      </ul>
    </>
  )
}

export default App
