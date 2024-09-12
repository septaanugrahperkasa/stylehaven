import { SearchIcon } from 'lucide-react';
import React from 'react';

function Search() {
  return (
    <div className='flex w-[30%] items-center gap-2 rounded-md border-[1px] border-[#e4e5eb] px-2 text-xs'>
      <SearchIcon width='1em' />
      <input type='text' placeholder='What are you looking for' />
    </div>
  );
}

export default Search;
