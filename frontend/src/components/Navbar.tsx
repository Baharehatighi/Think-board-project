import { Plus } from 'lucide-react';
import { Brain} from 'lucide-react';
interface NavbarProps {
  onCreate: () => void;
}

const Navbar = ({ onCreate}:NavbarProps)=> {
  return (
     <header className="w-full  bg-gray-900 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <div className='flex items-center gap-2 '>
        <h1 className="text-xl font-bold text-white">
          ThinkBoard
          </h1>
          <button className='cursor-pointer'>
          <Brain/>
          </button>
        </div>


       
        <button onClick={onCreate} className="cursor-pointer flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-xl hover:bg-blue-400 transition">
          <Plus size={18} />
          New Note
        </button>

      </div>
    </header>
  );
}

export default Navbar