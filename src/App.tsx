import LOGO from './assets/IconNoBorder.svg';

function App() {
  return (
    <div className="min-h-screen w-full">
      <div className="my-2 flex w-full">
        <div className="">
          <img 
            src={LOGO} 
            alt="ARShip Logo" 
            className='size-8'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
