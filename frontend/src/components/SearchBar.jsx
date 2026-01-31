import React, { useEffect } from 'react'
import { useContext ,useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => { 
      // console.log(location.pathname);
      if(location.pathname.includes('collection')){
        setVisible(true);

      }
      else{
        setVisible(false);
      }

    },[location]);
  return  showSearch && visible ? (
    <div className='border-t-pink-700 border-b-pink-700 text-pink-500 bg-pink-100 text-center'>
        <div className='inline-flex items-center justify-center border border-pink-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 text-pink-500 outline-none bg-inherit text-sm' type="text" placeholder='Search....' />
        <img src={assets.search}  className='w-4'/>
        </div>
        <img onClick={() => setShowSearch(false)} src={assets.cross} className='inline w-3 cursor-pointer'/>

    </div>
  ) : null;
}

export default SearchBar