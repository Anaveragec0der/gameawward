import { useRef, useState } from "react"

export default function Hero(){
    const [currentIndex, setCurrentIndex]=useState(1)
    const [hasClicked, setHasClicked]=useState(false)
    const [isLoading, setIsLoading]=useState(true)
    const [loadedVideos, setLoadedVideos]=useState(0)

    const totalVideos=3
    const nextVideoRef=useRef(null)

    const upcomingVideo=(currentIndex%totalVideos)+1
    console.log(upcomingVideo, 'upcoming video')
    const handleMiniVdClick =()=>{
        setHasClicked(true)
        
        setCurrentIndex(upcomingVideo)
        console.log(currentIndex, 'current index')
        console.log(upcomingVideo, 'upcoming index')
    }

    const handleVideoLoaded =()=>{
       setLoadedVideos((prev)=>prev+1)
    }

    const getVideoSrc =(index)=> `videos/hero-${index}.mp4`

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
             <div id='video-frame' className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transtion-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                            <video 
                              ref={nextVideoRef}
                              loop
                              src={getVideoSrc(currentIndex+1)}
                              muted
                              id='current-video'
                              className="size-64 origin-center scale-150 object-cover object-center"
                              onLoadedData={handleVideoLoaded}
                            />
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}