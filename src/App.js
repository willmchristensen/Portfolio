import './index.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {items,icons} from './constants/items'
function App() {
  return (
    <div className="App">
      <NavBar items={items}></NavBar>
      <Main></Main>
      <Footer items={items} icons={icons} />
    </div>
  );
}

export default App;
