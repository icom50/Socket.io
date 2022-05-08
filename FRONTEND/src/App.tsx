import 'antd/dist/antd.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from "./components/Routes/Routing";
import { AppProvider } from './contexts/appContext';

function App() {

  return (
    <div >
      <BrowserRouter>
        <AppProvider>
          <Routing />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
