import './Aside.css'

function Aside() {
  let isContactShowing:boolean = false
  const HandleContactButton = () => {
    const buttonShow = document.querySelector('.narrow-show-contact')
    if (isContactShowing) {
      document.querySelector('.sidebar')?.classList.remove('moreinfo-show')
      isContactShowing = false
      if(buttonShow) {
        buttonShow.textContent = "Contact"
      }
    } else {
      document.querySelector('.sidebar')?.classList.add('moreinfo-show')
      isContactShowing = true
      if(buttonShow) {
        buttonShow.textContent = "Hide"
      }
    
    }}
/*
    A = (20, 13) = (x1, y1)
    B = (10, 10) = (x2, y2)
    C = (15, 20) = (x3, y3)
                    x1  y1     x2  y2   x1-x2,y1-y2
    BA-> = A - B = (20, 13) - (10, 10) = (10, 3)
    BC-> = C - B = (15, 20) - (10, 10) = (5, 10)
                    x3  y3     x2  y2   x3-x2,y3-y1

    |BA->| = sqrt(10^2 + 3^2) = sqrt(109)
    |BC->| = sqrt(5^2 + 10^2) = sqrt(125)

       10 * 5 + 3 * 10
    --------------------- = 
    sqrt(109) * sqrt(125)
*/

  return (
    <>
      <aside className='sidebar'>
        <div className='sidebar-presentation'>
          <figure className='profile-picture'>
            <img className='pfp-image' src='./../../squarepfp.jpeg' alt='Cute Cat' width={120}></img>
          </figure>
          <div className='basic-info'>
            <h1 className='name'>UnBittenKitten</h1>
            <p className='title'>Computer Engineer</p>
          </div>
        </div>

        <div className='sidebar-moreinfo'>
          <div className='separator'></div>
          <ul className='contact-list'>
            <li className='contact-item'>
              <div className='wrapper-icon-box'>
                <div className='icon-box'>
                  <svg className='logo' xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24" fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </div>
              </div>
              <div className='contact-info'>
                <p className='contact-title'>EMAIL</p>
                <a className='contact-link' href='mailto:unbittenkittenwork@gmail.com'>unbit***@gmail.com</a>
              </div>
            </li>

            <li className='contact-item'>
              <div className='wrapper-icon-box'>
                <div className='icon-box'>
                  <svg className='logoCake' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470" stroke='currentColor' strokeWidth='4' fill='none'>
                  <path d="m462.5,420h-35.876v-142.99c0-0.02 0-30.01 0-30.01 0-26.191-21.309-47.5-47.5-47.5h-116.624v-68.191c0-9.649-7.851-17.5-17.5-17.5h-2.5v-22.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v22.5h-2.5c-9.649,0-17.5,7.851-17.5,17.5v68.191h-123.043c-26.191,0-47.5,21.309-47.5,47.5v173h-29.457c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h4.343l4.325,15.137c3.182,11.138 14.748,19.863 26.332,19.863h385c11.584,0 23.15-8.725 26.332-19.862l4.325-15.138h4.343c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zm-240-288.691c0-1.355 1.145-2.5 2.5-2.5h20c1.355,0 2.5,1.145 2.5,2.5v68.191h-25v-68.191zm-138.043,83.191h294.667c17.92,0 32.5,14.58 32.5,32.5v23c-13.563,1.819-21.473,8.441-28.555,14.402-7.553,6.357-13.519,11.378-26.396,11.378s-18.842-5.021-26.396-11.378c-8.299-6.985-17.706-14.903-36.055-14.903-18.347,0-27.752,7.917-36.051,14.903-7.552,6.357-13.517,11.378-26.391,11.378-12.875,0-18.839-5.021-26.392-11.378-8.299-6.985-17.705-14.903-36.052-14.903-18.347,0-27.752,7.917-36.051,14.903-4.436,3.734-8.626,7.262-14.052,9.321-2.912,1.105-4.838,3.896-4.838,7.012v51.285c0,4.136-3.364,7.5-7.5,7.5-4.135,0-7.5-3.364-7.5-7.5v-51.039c0.105-3.161-1.803-6.105-4.835-7.256-5.427-2.06-9.618-5.588-14.054-9.323-7.081-5.961-14.989-12.583-28.55-14.402v-23c0.001-17.92 14.58-32.5 32.501-32.5zm-32.5,70.688c8.032,1.574 12.983,5.717 18.89,10.69 3.871,3.258 8.145,6.856 13.55,9.688v46.454c0,12.407 10.093,22.5 22.5,22.5s22.5-10.093 22.5-22.5l.001-46.454c5.404-2.832 9.679-6.43 13.549-9.688 7.552-6.357 13.517-11.378 26.391-11.378 12.875,0 18.84,5.021 26.392,11.378 8.299,6.985 17.705,14.903 36.052,14.903s27.753-7.917 36.051-14.903c7.552-6.357 13.517-11.378 26.391-11.378 12.877,0 18.843,5.021 26.396,11.379 8.299,6.985 17.706,14.902 36.055,14.902s27.755-7.917 36.055-14.902c5.909-4.973 10.861-9.117 18.896-10.691v134.812h-359.669v-134.812zm387.452,160.829c-1.343,4.701-7.02,8.983-11.909,8.983h-385c-4.89,0-10.566-4.282-11.909-8.983l-3.148-11.017h415.114l-3.148,11.017z"/>
                  <path d="m205.002,95.547c1.778,0 3.563-0.628 4.993-1.905 3.09-2.759 3.358-7.5 0.6-10.59-5.353-5.995-8.3-13.71-8.3-21.726 0-17.564 13.299-35.9 32.706-45.552 19.407,9.651 32.706,27.987 32.706,45.552 0,8.016-2.948,15.731-8.3,21.726-2.759,3.089-2.491,7.831 0.599,10.589 3.088,2.758 7.83,2.491 10.589-0.599 7.81-8.747 12.111-20.01 12.111-31.716 0-24.235-18.382-49.196-44.702-60.699-1.915-0.837-4.092-0.836-6.007,0-26.32,11.503-44.702,36.463-44.702,60.698 0,11.706 4.301,22.969 12.111,31.716 1.481,1.661 3.534,2.507 5.596,2.506z"/>
                  </svg>
                </div>
              </div>
              <div className='contact-info'>
                <p className='contact-title'>BIRTHDAY</p>
                <p className='contact-description'>21 May</p>
              </div>
            </li>
          </ul>
        </div>
        <button className='narrow-show-contact' onClick={HandleContactButton}>Contact</button>
      </aside>
    </>
  )
}

export default Aside