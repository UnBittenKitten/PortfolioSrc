import './Contact.css'

function Contact() {
  return (
    <>
      <h1 className='title-decorator'>Contact</h1>
      <div className="socials">
        <p className="subtitle">You can find me on these social media platforms!</p>
        <div className='list'>
          <a className='sn' href="https://github.com/UnBittenKitten" rel="nofollow">
            <img src="https://img.shields.io/badge/GitHub-%23000000.svg?logo=Github&amp;logoColor=white" alt="GitHub"/>
          </a>
          <a className='sn' href="https://instagram.com/luisp2125" rel="nofollow">
            <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&amp;logoColor=white" alt="Instagram"/>
          </a>
          <a className='sn' href="https://twitter.com/UnBittenKitten_" rel="nofollow">
            <img src="https://img.shields.io/badge/X-%23000000.svg?logo=X&amp;logoColor=white" alt="Twitter"/>
          </a>
          <a className='sn' href="https://discordapp.com/users/514221720068947969" rel="nofollow">
            <img src='https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&amp;logoColor=white'/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact