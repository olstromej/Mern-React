import Characters from "./screens/Characters.jsx";
import CharacterCreate from './screens/CharacterCreate.jsx'
import {Routes, Route, Link} from 'react-router-dom';
import "./App.css";

export default function App() {


  return (
    <div className="Body">
        <nav>
            <Link to="/">Characters</Link>
            <Link to="/add-character">Add Character</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/add-character" element={<CharacterCreate />} />
      </Routes>
    </div>
  );
}

// charId:22
// firstName:"Ygritte"
// lastName:"None"
// fullName:"Ygritte"
// title:"Spearwife"
// family:"Free Folk"
// image:"ygritte.jpg"
// imageUrl:"https://thronesapi.com/assets/images/ygritte.jpg"


