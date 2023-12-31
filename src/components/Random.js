import UseGif from '../hooks/UseGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const url='https://api.giphy.com/v1/gifs/random?api_key=X2fWHqBQWShEVCwRrVtZDdpUeWovVjN6';

export default function Random() {

  const {gif,spinner,fetchData}=UseGif();
  return (
    <div className='flex flex-col gap-4 py-4 justify-center items-center w-full lg:w-1/2 overflow-hidden aspect-auto bg-green-400 border-2 border-gray-500 rounded-2xl'>
      <h1 className='uppercase underline font-bold md:text-2xl text-xl text-center'>Random Gif</h1>
      {
        spinner ? (<span class="mt-16 loader "></span>):(<img src={gif} className='max-w-[30rem] px-4 object-contain'/>)
      }
      
      <button onClick={()=>fetchData()} className='uppercase w-4/5 py-2 bg-white/70 rounded-lg my-2 hover:bg-white transition-all font-semibold text-center'>
        Generate
      </button>
    </div>
  )
}
