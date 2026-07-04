import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      {/* Header start */}
      <header className='bg-[#120b14] text-white'>
        <div className='mx-auto flex items-center px-8 py-5'>
          {/*Logo*/}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="https://www.photopea.com/promo/icon512.png" alt="logo" className='w-10 h-10'/>
            <h1 className='text-3xl font-bold'>Photopea</h1>
          </div>

          {/*Menu*/}
          <nav className='ml-12'>
            <ul className="flex items-center gap-10 text-lg font-medium">
              <li><a href="#" className='font-normal'>Learn</a></li>

              <li><a href="#" className='font-normal'>Tutorials</a></li>

              <li><a href="#" className='font-normal'>Templates</a></li>

              <li><a href="#" className='font-normal'> API</a></li>
            </ul>
          </nav>

        </div>
      </header>
      {/* Header end */}


      {/*Hero section-1 start*/}
      <div className='bg-[#120b14] text-white min-h-screen'>
        {/*Free Online Photo Editor*/}
        <div className="max-w-6xl mx-auto pt-14">
          <h1 className="text-6xl font-bold text-center">Free Online Photo Editor</h1>

          <h2 className="text-2xl font-semibold text-center mt-8">
            Unlock your creativity with the best free photo editor.
          </h2>

          <p className="text-center text-gray-400 mt-8 max-w-5xl mx-auto text-lg">
            Transform your photos with professional-grade tools in a free online
            photo editor that works right in your browser. No downloads, no
            hassle.
          </p>

           <div className="flex justify-center mt-10">
              <button className="border border-[#3482F6] rounded-full px-10 py-3 text-xl hover:border-[#5789d6]">
                Start using Photopea
              </button>
            </div>
        </div>

        {/*Full local*/}
        <section className='max-w-6xl mx-auto flex  gap-20 items-center mt-20 pb-20'>
          {/*Left*/}
          <div>
            <img src="https://www.photopea.com/img/table.webp" alt="picture1" className='w-220 h-120 shadow-2xl'/>
          </div>

          {/*Right*/}
          <div className='space-y-10'>
            <div>
              <h2 className="text-2xl font-bold leading-5">Fully local</h2>

              <p className="text-gray-400 text-lg mt-2 leading-6">
                There are no uploads. Photopea runs on your device,
                using your CPU and GPU. All files open instantly,
                and never leave your device.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold leading-5">Cost-Effective</h2>

              <p className="text-gray-400 text-lg mt-2 leading-6">Enjoy all the premium features without spending a dime.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold leading-5">Convenient Editor</h2>

              <p className="text-gray-400 text-lg mt-2 leading-6">
                No need to install heavy software on your device.
                Just open your browser and start editing.
              </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold leading-5">
              Runs Everywhere
            </h2>

            <p className="text-gray-400 text-lg mt-2 leading-6">
              Our photo editor runs on any device.
              The better hardware you have, the better it runs.
            </p>
          </div>

          <button className="border border-blue-500 ml-[150px] rounded-full px-10 py-3 text-xl">
            Start using Photopea
          </button>

          </div>
        </section>

      </div>
      {/*Hero section-1 end*/}


      {/*Hero section-2 start*/}
      <div className='bg-[#120b14] text-white min-h-screen'>

      </div>
      {/*Hero section-2 end*/}
    </>
  )
}

export default App
