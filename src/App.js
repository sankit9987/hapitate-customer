import './App.css';
import ApiService from './services/api.service'
import Routs from './Components/Routes'
const baseUrl = "https://apidev.hapitate.in/";
ApiService.init(baseUrl);
function App() {
  return (
   <Routs />
  );
}

export default App;
