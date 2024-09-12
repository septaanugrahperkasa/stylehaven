'use client';

import { AlignRight, X } from 'lucide-react';
import React, { useState } from 'react';
import Logo from '../Logo';
import NavBtns from '../NavBtns';
import UserOptions from '@/components/auth/UserOptions';

export default function MobileNavbar() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className='nav-mobile-box'>
      <div
        className={`
  ${
    showOverlay &&
    `fixed left-0 top-0 z-[3] flex h-screen w-full flex-col items-center justify-center bg-white`
  }`}
      >
        {!showOverlay && (
          <div className='absolute z-[1] cursor-pointer max-lg-1k:right-16 max-lg-1k:top-16 max-[825px]:right-12 max-[825px]:top-12 max-md-650:right-8 max-md-650:top-8'>
            <AlignRight
              className='cursor-pointer'
              width='40'
              height='30'
              onClick={() => setShowOverlay(true)}
            />
          </div>
        )}

        <div>
          <div className='m-auto flex items-center justify-between'>
            <div className='absolute cursor-pointer max-lg-1k:left-16 max-lg-1k:top-16 max-[825px]:left-12 max-[825px]:top-12 max-md-650:left-8 max-md-650:top-8'>
              <Logo />
            </div>
            {showOverlay && (
              <X
                className='absolute cursor-pointer max-lg-1k:right-16 max-lg-1k:top-16 max-[825px]:right-12 max-[825px]:top-12 max-md-650:right-8 max-md-650:top-8'
                width='40'
                height='30'
                onClick={() => setShowOverlay(false)}
              />
            )}
          </div>

          {showOverlay && (
            <div className='flex flex-col items-center justify-center gap-[1rem] text-center'>
              <UserOptions />
              <NavBtns className='flex flex-col gap-4 text-center' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
