import React from 'react'
import './Header.css'
import AppleIcon from '@mui/icons-material/Apple';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import AdbIcon from '@mui/icons-material/Adb';
import {BsBrowserFirefox} from 'react-icons/bs'
import {BsBrowserChrome} from 'react-icons/bs'
import {BsBrowserSafari} from 'react-icons/bs'
import {BsBrowserEdge} from 'react-icons/bs'
import {BsThreeDotsVertical} from 'react-icons/bs'


function Header() {

  


   
    return (
        <div className='header' >

               <div className='header_text' >
               
                <h1  style={{fontSize:'48px'}}  >Video calls loved by extraordinary teams.</h1>
                <p>Meetings don't have to crush your soul. Discover radically unique video calls designed to help hybrid-remote teams create, collaborate and celebrate together.</p>
                </div>

            <div className='header_btn'>
           
            <button  > Try for Free   
               </button>

           
                
                <button  > Download </button>
            </div>

            <div className='header_icons'>

          <div className='icon'>
<AppleIcon sx={{color:'gray',fontSize:'3rem'}}/>
<MicrosoftIcon   sx={{color:'gray',fontSize:'3rem'}} />
<p>macOS & WINDOWS</p>
</div>

<div className='icon2'>
<div className='icon2_icons'>
<BsBrowserFirefox  size={45}  />
  <BsBrowserChrome  size={45}  />
  <BsBrowserSafari size={45} />
  <BsBrowserEdge size={45}  />
  </div>
  <p>FIREFOX, CHROME, SAFARI, EDGE</p>

</div>
<div className='icon'>

<AppleIcon sx={{color:'gray',fontSize:'3rem'}}/>
<AdbIcon   sx={{color:'gray',fontSize:'3rem'}} />
<p>macOS & WINDOWS</p>

</div>

            </div>
        </div>
    )
}

export default Header
