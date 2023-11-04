import './App.css';
import Cherry from './assets/Cherry.png';
import Lemon from './assets/Lemon.png';
import Watermelon from './assets/Watermelon.png';
import Plum from './assets/Plum.png';
import Seven from './assets/Seven.png';


function App() {
  const slot1 : number = Math.floor(Math.random() * 4) + 1;
  const slot2 : number = Math.floor(Math.random() * 4) + 1;
  const slot3 : number = Math.floor(Math.random() * 4) + 1;

  const verlorenOfGewonnen = (waarde1 : number, waarde2 : number, waarde3 : number) : string => {
    if (waarde1 == waarde2 && waarde2 == waarde3) {
      return "Je hebt gewonnen"
    } else {
      return "Je hebt verloren"
    }
  }

  const getalMetImage = (waardeVanGetal : number) : any => {
    switch(waardeVanGetal) {
      case 1: {
        return <img src={Cherry} alt="Cherry" height="100"/>;
      };
      case 2: {
        return <img src={Lemon} alt="Lemon" height="100"/>;
      };
      case 3: {
        return <img src={Watermelon} alt="Watermelon" height="100"/>;
      };
      case 4: {
        return <img src={Plum} alt="Plum" height="100"/>;
      };
      case 4: {
        return <img src={Seven} alt="Seven" height="100"/>;
      };
      default: {
        break;
      };
    } 
  }

  return (
    <>
      <img src={Cherry} alt="Cherry" height="100"/><img src={Lemon} alt="Lemon" height="100"/><img src={Watermelon} alt="Watermelon" height="100"/><img src={Plum} alt="Plum" height="100"/><img src={Seven} alt="Seven" height="100"/>
      <p>{slot1}, {slot2}, {slot3}</p>
      <p>{getalMetImage(slot1)}{getalMetImage(slot2)}{getalMetImage(slot3)}</p>
      <p>{verlorenOfGewonnen(slot1, slot2, slot3)}</p>
    </>
  )
}

export default App
