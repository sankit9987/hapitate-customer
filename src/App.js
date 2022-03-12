import './App.css';
import ApiService from './services/api.service'
import Routs from './Components/Routes'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './store';

const baseUrl = "https://apidev.hapitate.in/";
ApiService.init(baseUrl);

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <Routs />
    </Provider>
  );
}

export default App;
