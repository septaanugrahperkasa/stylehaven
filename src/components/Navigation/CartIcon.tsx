import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

function CartIcon({ items_count }: { items_count: number | string }) {
  return (
    <Link className='relative' href='/cart'>
      <div className='cursor-pointer rounded-full bg-[#f1f1f1] p-3 duration-300 hover:scale-110'>
        <ShoppingCart height='22' width='22' className='dark:text-black' />
      </div>
      <span className='absolute right-0 top-0 z-[1] h-[18px] w-[18px] rounded-[50%] bg-[#f02d34] text-center text-[12px] font-[600] text-white'>
        {items_count}
      </span>
    </Link>
  );
}

export default CartIcon;
