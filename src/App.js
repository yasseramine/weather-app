import { useContext } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import ThemeContext from './context/theme.context';
import './styles/components/App.scss';

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
