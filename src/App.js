import './App.css';
import eventsData from "./events.json";
import GlobalStyle from './components/GlobalStyle';

import { PageBoard } from './components/Pageboard/PageBoard.jsx';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PageBoard data={eventsData} />
    </div>
  );
}

export default App;
