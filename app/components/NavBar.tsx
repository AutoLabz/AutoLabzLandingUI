import Link from 'next/link'


export function NavBar() {
    return (
        <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
            <div className='max-w-7xl w-full flex items-center justify-between p-4'>
                <h6 className='font-bold'>AutoLabz</h6>
                <ul className='flex gap-8'>
                <li><Link className='transition-colors text-xs sm:text-base' href="#home">Home</Link></li>
                <li><Link className='transition-colors text-xs sm:text-base' href="#about">About</Link></li>
                <li><a className='transition-colors text-xs sm:text-base' rel="noopener noreferrer" target="_blank" href="https://calendly.com/saurabhkhanal/morning-chat">Contact</a></li>
                <li><Link className='transition-colors text-xs sm:text-base' href="/login">Login</Link></li>
                </ul>
            </div>
        </div>
      );
    }

  