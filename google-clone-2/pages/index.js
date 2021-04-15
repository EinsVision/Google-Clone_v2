import Head from 'next/head';
import Avatar from '../components/Avatar';
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header width full, padding 5px */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon */} 
          {/* https://github.com/tailwindlabs/heroicons */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100'/>

          {/* Avatar */}
          <Avatar url='https://lh3.googleusercontent.com/ogw/ADGmqu9GElmcJVjw3GzbcE1wI1U9xhBf4fVroMKcCYsX=s192-c-mo'/>
        </div>

      </header>
      {/* Body */}
      <form>
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div>
          <SearchIcon className="h-5 ml-3 text-gray-600" />
          <input type="text" className="bg-red-500 focus:outline-none"/>
        </div>

      </form>

      {/* Footer */}

    </div>
  )
}
