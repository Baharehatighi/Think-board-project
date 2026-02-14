
import { Brain} from 'lucide-react';
interface NavbarProps {
  onCreate: () => void;
}

const Navbar = ({ }:NavbarProps)=> {
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


       
        

      </div>
    </header>
  );
}

export default Navbar

