import "./App.css";

function App() {
  const getallen: number[] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

  interface Student {
    id: number;
    name: string;
    leeftijd: number;
  }

  let studenten: Student[] = [
    {
      id: 0,
      name: "Jef",
      leeftijd: 20,
    },
    {
      id: 1,
      name: "Jan",
      leeftijd: 21,
    },
    {
      id: 2,
      name: "Joris",
      leeftijd: 22,
    },
    {
      id: 3,
      name: "Andie",
      leeftijd: 23,
    },
    {
      id: 4,
      name: "Senne",
      leeftijd: 24,
    },
  ];

  return (
    <>
      <h1>Labo 1: Lijsten</h1>
      <h2>Getallenlijst</h2>
      <ul>
        {getallen.map((getal: number) => {
          return <li key={getal}>{getal}</li>;
        })}
      </ul>

      <h2>Studentenlijst</h2>
      <ol>
        {studenten.map((student: Student) => {
          return <li key={student.name}>{student.name}</li>;
        })}
      </ol>

      <h2>Studentenlijst met J</h2>
      <ol>
        {studenten
          .filter((student) => student.name.startsWith("J"))
          .map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
      </ol>

      <h2>Select</h2>
      <select>
        {studenten.map((student) => (
          <option key={student.id}>{student.name}</option>
        ))}
      </select>

      <h2>Table</h2>
      <table>
        <thead>
          <tr>
            <th>Naam</th>
            <th>Leeftijd</th>
          </tr>
        </thead>
        <tbody>
          {studenten.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.leeftijd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
