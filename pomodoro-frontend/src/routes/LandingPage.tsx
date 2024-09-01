import cloud from "/Group.png"
import Ellipse12 from "/Ellipse12.png"
import Ellipse10 from "/Ellipse10.png"
import Ellipse15 from "/Ellipse15.png"
import timer from "/timerIMG.png"

function LandingPage() {
  return (
        <div className='w-full h-full bg-custom-gradient text-white flex flex-col'>
        
        
        <div className='flex-1 flex'>
            <div className='flex-1 flex items-center justify-center'>
                <div className='grid-rows-2 gap-6 mt-4'>
                    <div className='flex items-center justify-center mb-6'>
                        <img src={cloud} alt='cloud image' className='w-auto max-h-full lg:h-72 object-cover' />

                    </div>
                    
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="flex items-center justify-center col-span-1 row-span-2">
                    <img
                    src={Ellipse12}
                    alt="cloud image"
                    className="w-auto max-h-full lg:h-56 object-cover"
                    />
                </div>

                <img
                    src={Ellipse10}
                    alt="cloud image"
                    className="w-auto max-h-full lg:h-40 object-cover col-start-2 row-start-1"
                />

                <img
                    src={Ellipse15}
                    alt="cloud image"
                    className="w-auto max-h-full lg:h-40 object-cover col-start-2 row-start-2"
                />
                </div>


                </div>
            
            </div>

            <div className='flex-1 flex items-center justify-center'>
                <img src={timer} alt='timer' className='h-full w-auto p-8'></img>
            </div>
        </div>
        </div>
  )
}

export default LandingPage