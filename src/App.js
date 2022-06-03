import './App.css';
import Greeting from'./components/Greeting';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/configureStore';

function App() {
  return (
      <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={ 'Hello'} />
        <Route path='/greeting' element={<Greeting />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
