import './App.css';
import Banner from './components/banner/Banner';
import Movies from './components/movies/Movies';
import Navbar from './components/navbar/Navbar';
import {originals,Documentaries,ComedyMovies,ActionMovies,trending,HorrorMovies,RomanceMovies,action} from './constants/url'

function App() {
  return (
    <div className="app">
      <Navbar  />
      <Banner />
      <Movies url={originals} title="Netflix Originals"/>
      <Movies url={trending} title="Trending " sizeSmall/>
      <Movies url={ComedyMovies} title="Comedy" sizeSmall/>
      <Movies url={ActionMovies} title="Action" sizeSmall/>
      <Movies url={HorrorMovies} title="Horror" sizeSmall/>
      <Movies url={RomanceMovies} title="Romance" sizeSmall/>
      <Movies url={Documentaries} title="Documentries" sizeSmall/>
     
    </div>
  );
}

export default App;
