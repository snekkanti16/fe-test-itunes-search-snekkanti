import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import './App.css';
import configureStore from './store/store';
import Home from './components/home';
const store = configureStore();


function App() {
  return (
    <ReduxProvider store={store}>
    <div>
      <Home/>
    </div>
    </ReduxProvider>
  );
}

export default App;
