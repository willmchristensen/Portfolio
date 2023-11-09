import './index.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {items,icons,locations} from './constants/items'
function App() {
  return (
    <div className="App">
      <NavBar items={items} location={locations}></NavBar>
      <Main></Main>
      <Footer items={items} icons={icons} location={locations}/>
    </div>
  );
}

export default App;
