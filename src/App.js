import './App.css';
import Logo from './Images/logo.png'

function App() {
  return (
    <div>
      <h1 className='heading'>
        The Evolution of Airbnb's Frontend
      </h1>
      <p className='subHeading'>
        @spikebrehm
      </p>
      <div className='logo'><img src={Logo} alt="logo" className='img'/></div>
    </div>
    
  );
}

export default App;
