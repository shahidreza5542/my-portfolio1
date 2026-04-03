import React from 'react'



const Card = ({
    Title = '',
    Discreption = '',
    TopTitle = '',
    Image = '',
    link,
    tags = []
}) => {
    return (
        <div className='bg-[#2A2A2A] w-90 h-140 mt-15 relative border-white/30 border-[0.5px]  flex flex-col hover:border-white'>
            <div className='pt-5 flex items-center justify-between px-3'>
                <div className='flex gap-2'>
                    <div className='bg-[#474747] h-3 w-3'></div>
                    <div className='bg-[#474747] h-3 w-3'></div>
                    <div className='bg-[#474747] h-3 w-3'></div>
                </div>
                <div>
                    <h1 className='text-white/70 font-mono tracking-widest uppercase text-xs'>{TopTitle}</h1>
                </div>
            </div>
            <div className='bg-[#1B1B1B] group transition-all duration-500 w-full h-[96%] px-7  relative mt-3 border-t-[0.5px] border-b-[0.5px] border-white/30'>
                <img src={Image} alt="" className="w-full mt-5 h-48 object-cover opacity-70 group-hover:opacity-100 transition-opacity grayscale" />
                <h1 className='uppercase mt-6 text-xl font-bold'>{Title}</h1>
                <p className='text-white/70 text-sm font-body mt-3'>{Discreption}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-1 uppercase border border-white/30 text-white/70"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex'>
                <button className="py-4 w-full font-mono text-xs uppercase font-bold text-center hover:bg-white hover:text-black transition-all bg-[#1B1B1B]">VIEW_CODE</button>
                <button className="py-4 w-full font-mono text-xs uppercase font-bold text-center hover:bg-white hover:text-black transition-all bg-[#353535]"><a href={link} target='blank'>LIVE_DEMO</a></button>
            </div>
        </div>
    )
}

export default Card
