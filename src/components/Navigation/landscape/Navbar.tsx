import React from 'react';
import Logo from '../Logo';
import NavBtns from '../NavBtns';
import Search from '../Search';
import UserOptions from '@/components/auth/UserOptions';

export default async function LandscapeNavbar() {
  return (
    <div className='mx-[6rem] mb-[0rem] mt-[2rem] max-[1210px]:m-[2rem] max-lg-1k:hidden max-[1000px]:m-[4rem] max-[650px]:m-[2rem]'>
      <div className='m-auto flex w-full items-center justify-between'>
        <Logo />
        <NavBtns />
        <Search />
        <UserOptions />
      </div>
    </div>
  );
}
