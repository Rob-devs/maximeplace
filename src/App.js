import './App.css';
import { WorkPage } from './components/WorkPage';
import { HomePage } from './components/HomePage';
import { ContactPage } from './components/ContactPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <WorkPage />
      <ContactPage />
    </div >
  );
}

export default App;