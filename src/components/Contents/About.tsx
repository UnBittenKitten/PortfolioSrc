import './About.css'

function About() {
  return (
    <>
      <h1 className='title-decorator'>About me</h1>
      <p className='about-text'> I am Luis, a third semester Computer Engineer student that specializes in making optimized software and learning everything I can to become a better engineer. I particularly like to spend my free time working on personal projects. I also really like cats.</p>
      <h2 className='sub-title'>What I'm doing</h2> 
      <ul className='doing-ul'>
        <li className='doing-item'>
          <div className='wrapper-doing-icon'>
            <div className='doing-icon'>
              <svg className='doing-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M6 8h.01" />
                <path d="M9 8h.01" />
              </svg>
            </div>
          </div>
          <div className='doing-content'>
            <h3 className='doing-title'>Desktop Development</h3>
            <p className='doing-description'>I enjoy making desktop applications that are useful to and satisfy the user.</p>
          </div>
        </li>

        <li className='doing-item'>
          <div className='wrapper-doing-icon'>
            <div className='doing-icon'>
              <svg className='doing-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M7 4l-2.75 2" />
                <path d="M17 4l2.75 2" />
                <path d="M10 13h4" />
                <path d="M12 11v4" />
              </svg>
            </div>
          </div>
          <div className='doing-content'>
            <h3 className='doing-title'>Optimization{/* placeholder */}</h3> 
            <p className='doing-description'>The creation of software that is the most performant and optimized possible.</p>
          </div>
        </li>

        <li className='doing-item'>
          <div className='wrapper-doing-icon'>
            <div className='doing-icon'>
              <svg className='doing-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 12l18 0" />
                <path d="M12 3l0 18" />
                <path d="M16.5 4.5l3 3" />
                <path d="M19.5 4.5l-3 3" />
                <path d="M6 4l0 4" />
                <path d="M4 6l4 0" />
                <path d="M18 16l.01 0" />
                <path d="M18 20l.01 0" />
                <path d="M4 18l4 0" />
              </svg>
            </div>
          </div>
          <div className='doing-content'>
            <h3 className='doing-title'>Mathematics{/* placeholder */}</h3>
            <p className='doing-description'>Since a young age I have had a liking for maths and try to make of use of it on my job.</p>
          </div>
        </li>

        <li className='doing-item'>
          <div className='wrapper-doing-icon'>
            <div className='doing-icon'>
              <svg className='doing-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
              </svg>
            </div>
          </div>
          <div className='doing-content'>
            <h3 className='doing-title'>Web Development</h3>
            <p className='doing-description'>I deliver high quality websites at a profesional level that prioritize ease of use.</p>
          </div>
        </li>
      </ul>
      <h2 className='title-decorator'>Developer Friends</h2>
      <ul className='friends-list'>
        <li className='friend-item'>
          <div className='friend-name-and-pfp'>
            <img className='friend-logo' src='./mrmikepfp.png' alt='MrMikeDev'></img>
            <h3 className='friend-name'>MrMikeDev</h3>
          </div>
          <div className='friend-info'>
            <p className='friend-description'>Junior WebDev specialized in UI/UX. Creates magical projects with React, TypeScript & Astro.</p>
            <ul className='friend-socials'>
              <li className='friend-soc'>
                <a target='_blank' href='https://github.com/MisterMikeDev' className='friend-link'>
                  <svg className='friend-social-logo' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </a>
              </li>
              <li className='friend-soc'>
                <a target='_blank' href='https://twitter.com/_MrMikeDev' className='friend-link'>
                  <svg className='friend-social-logo' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
              </li>
              <li className='friend-soc'>
                <a target='_blank' href='https://www.instagram.com/mrmikedev/' className='friend-link'>
                  <svg className='friend-social-logo' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </li>
        <li className='friend-item'>
          <div className='friend-name-and-pfp'>
            <img className='friend-logo' src='./jorgepfp.png' alt='Jorge' width={100}></img>
            <h3 className='friend-name'>Jorge</h3>
          </div>
          <div className='friend-info'>
            <p className='friend-description'>Software Developer that makes Desktop Applications and cool looking webs.</p>  
            <ul className='friend-socials'>
              <li className='friend-soc'>
                <a target='_blank' href='https://github.com/Jorgemacias-12' className='friend-link'>
                  <svg className='friend-social-logo' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </a>
              </li>
              {/* <li className='friend-soc'>
                <a target='_blank' href='https://twitter.com/_MrMikeDev' className='friend-link'>
                  <svg className='friend-social-logo' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
              </li> */}
              <li className='friend-soc'>
                <a target='_blank' href='https://www.instagram.com/jorgemacias164' className='friend-link'>
                  <svg className='friend-social-logo' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </li>
        <li className='friend-item'>
          <div className='friend-name-and-pfp'>
            <img className='friend-logo' src='./leopfp.jpeg' alt='Leo' width={100}></img>
            <h3 className='friend-name'>Leo</h3>
          </div>
          <div className='friend-info'>
            <p className='friend-description'>Junior Software Developer that is learning multiple technologies revolving web development.</p>
            <ul className='friend-socials'>
              <li className='friend-soc'>
                <a target='_blank' href='https://github.com/RamGuiCodes45' className='friend-link'>
                  <svg className='friend-social-logo' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </a>
              </li>
              {/* <li className='friend-soc'>
                <a target='_blank' href='https://twitter.com/_MrMikeDev' className='friend-link'>
                  <svg className='friend-social-logo' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
              </li> */}
              <li className='friend-soc'>
                <a target='_blank' href='https://www.instagram.com/leo45_basket' className='friend-link'>
                  <svg className='friend-social-logo' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </li>
      </ul>
    </>
  )
}

export default About