
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';
// require('dotenv').config();

function App() {
  return (
    <div className='back text-center h-full pb-16 flex flex-col w-full relative items-center'>
      <h1 className='bg-white  mt-11 py-3 w-11/12 rounded-lg   text-3xl font-bold '>RANDOM GIFS</h1>
      
      <div className='flex flex-col h-full  w-full items-center gap-y-10 mt-[35px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
