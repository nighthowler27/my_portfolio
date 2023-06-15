import Image from 'next/image'
import ParallaxBG from '@/components/parallaxBG/parallaxBG'

export default function Home() {
  return (
   <div className="landingPage">
        <div className="parallaxBG">
            <ParallaxBG />
        </div>    
        
        <div className="leftside">
            <div className="descBox">
                <h1>Hi, I'm Stephen</h1>
                <h2 aria-label="Hi! I'm a developer"> a certified&nbsp;<span class="typewriter thick"></span></h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia soluta vel, facilis ea non.
                </p>
                <button type="button" >Hire me</button>
            </div>
        </div>

        <div className="rightside">
            <div className="resume-btn">
                <button>CV | Resume</button>
            </div>
            
            <div className="myPic">
                <Image src="/img/homepage_pic.png" fill={true} alt="homepage_pic.png"/>
            </div>
            
        </div>
   </div>
  )
}
