import { Search } from 'lucide-react';
import { Brain} from 'lucide-react';
import { useState } from 'react';
export interface NavbarProps {
  onCreate: () => void;

}

const Navbar = ({ }:NavbarProps)=> {

  const [searchValue, setSearchValue] = useState("");

  return (
     <header className="w-full  bg-gray-900 shadow-2xl ">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className='flex items-center justify-between gap-200'>
        <div className='flex items-center gap-2 '>
        <h1 className="text-xl font-bold text-white">
          ThinkBoard
          </h1>
          <button className='cursor-pointer'>
          <Brain/>
          </button>
          </div>
          <div className="flex items-center gap-2">

          <input
          
            className="px-3 py-1 rounded-lg text-sm outline-none bg-blue-950"
            type="text"
            placeholder="Search notes..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            
          />
          <button 

            className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600"
          >
            <Search size={18} color="white" />
          </button>
        </div>
        </div>


       
        

      </div>
    </header>
  );
}

export default Navbar

