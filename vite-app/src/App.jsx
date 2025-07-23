import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

const Greeting = import.meta.env.VITE_GREETING || 'Vite';
const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [count, setCount] = useState(0);
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch(`${apiUrl}/?format=json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log({ data });
        setIpAddress(data.ip || 'IP not found');
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();
  }, [apiUrl]);

  console.log(Greeting, ipAddress);
  return (
    <>
      <div>
        <Header />
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>

      <h1>Vite + {Greeting}</h1>
      <h3>
        Your IP address is <em>{ipAddress}</em>
      </h3>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  );
}

export default App;
