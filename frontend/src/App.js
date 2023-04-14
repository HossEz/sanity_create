import { Route, Routes } from 'react-router-dom';
import './App.css';
import FrontPage from './components/FrontPage';
import Show from './components/Show';
import AddShow from './components/AddShow';

function App() {
  return (
    <section>
      <h1>TV-SERIER</h1>
      <Routes>
        <Route path='/' index element={<FrontPage />} />
        <Route path=':id' element={<Show />} />
        <Route path='/add-show' element={<AddShow />} />
      </Routes>
    </section>
  );
}

export default App;
