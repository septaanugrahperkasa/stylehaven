import Image from 'next/image';
import LogoImage from '/public/Logo.png';
import Link from 'next/link';

function Logo({ show = true }: { show?: boolean }) {
  return (
    <>
      {show && (
        <Link href='/'>
          <Image src={LogoImage} alt='Style Haven' height={25} width={140} />
        </Link>
      )}
    </>
  );
}

export default Logo;
