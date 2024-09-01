

function LandingPage() {
  return (
        <div className='w-full h-full bg-custom-gradient text-white flex flex-col'>
        
        
        <div className='flex-1 flex'>
            <div className='flex-1 flex items-center justify-center'>
                <div className='grid-rows-2 gap-6 mt-4'>
                    <div className='flex items-center justify-center mb-6'>
                        <img src='/src/assets/Group.png' alt='cloud image' className='w-auto max-h-full lg:h-72 object-cover' />

                    </div>
                    
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="flex items-center justify-center col-span-1 row-span-2">
                    <img
                    src="/src/assets/Ellipse12.png"
                    alt="cloud image"
                    className="w-auto max-h-full lg:h-56 object-cover"
                    />
                </div>

                <img
                    src="/src/assets/Ellipse10.png"
                    alt="cloud image"
                    className="w-auto max-h-full lg:h-40 object-cover col-start-2 row-start-1"
                />

                <img
                    src="/src/assets/Ellipse15.png"
                    alt="cloud image"
                    className="w-auto max-h-full lg:h-40 object-cover col-start-2 row-start-2"
                />
                </div>


                </div>
            
            </div>

            <div className='flex-1 flex items-center justify-center'>
                <img src='/src/assets/timerIMG.png' alt='timer' className='h-full w-auto p-8'></img>
            </div>
        </div>
        </div>
  )
}

export default LandingPage