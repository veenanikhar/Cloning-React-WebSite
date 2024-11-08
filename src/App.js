import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/header';
import './App.css';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppService from './components/service';
import AppWorks from './components/works';


function App() {
  return (
    <div className="App">
      <header id = "header">
        <AppHeader />
      </header>
      <main>
        <AppHero/>
        <AppAbout/>
        <AppService/>
        <AppWorks/>
      </main>
    </div>
  );
}

export default App;
