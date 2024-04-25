import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import background from '../src/background.jpg'
import netflix from '../src/netflix.png'
import hello from '../src/d1.gif'
import { FaHome } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
import { Fahome } from "react-icons/fa"







function App() {

  //state

  const [dropdownVisible, setDropdownvisible] = useState(false)
  const [dropdownVisible1, setDropdownvisible1] = useState(false)
  const [dropdownVisible2, setDropdownvisible2] = useState(false)
  const [dropdownVisible3, setDropdownvisible3] = useState(false)
  const [dropdownVisible4, setDropdownvisible4] = useState(false)
  const [dropdownVisible5, setDropdownvisible5] = useState(false)



  function toggleDropdown() {
    setDropdownvisible(!dropdownVisible)

  }

  function toggleDropdown1() {
    setDropdownvisible1(!dropdownVisible1)
  }

  function toggleDropdown2() {
    setDropdownvisible2(!dropdownVisible2)
  }

  function toggleDropdown3() {
    setDropdownvisible3(!dropdownVisible3)
  }

  function toggleDropdown4() {
    setDropdownvisible4(!dropdownVisible4)
  }

  function toggleDropdown5() {
    setDropdownvisible5(!dropdownVisible5)
  }


  return (
    <>
    


    <div className="relative object-cover w-full h-700px " style={{ backgroundImage: 'url("https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg")' }}>
      <div className='bg-black/65'>

        <nav className='flex justify-around items-center'>
          <img src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" className='w-[220px] h-[130px] ' alt=''></img>
          <div className='flex gap-10'>
            <select className='bg-transparent text-white border-rounded border-white' name='English' id=''>
              <option value="1">English</option>
              <option value={2}>Malayalam</option>
            </select>
            <button className='bg-red-600 bg-tranparent p-2 text-white'>Sign Up</button>
          </div>
        </nav>
        <section className='flex flex-wrap text-white flax-col h-[564px] gap-5 justify-center items-center '>
          <div className="flex flex-col justify-center ">
            <h1 className='text-6xl'><b>Unlimited movies,TV shows and more</b></h1>
            <h5 className='text-3xl'>Watch anywhere. Cancel anytime.</h5>
            <p className='text-2xl'>Ready to watch? Enter your email to clear or restart your membership.</p>
            <div className='flex gap-3'>
              <input type='text' className='p-2 w-[500px] border-black bg-stone-900 text-black'></input>
              <button className='text-white bg-red-500 p-2 hover:bg-white hover:text-black hover:text'>Get Started</button>
            </div>
          </div>
        </section>
      </div>
    </div>
        {/* Dark background overlay */ }

     
      

        <div className="bg-zinc-800  h-2"></div>

        <section className='p-10 flex-wrap bg-black h-[600px]'>
          <div className='container flex justify-around items-center'>
            <div className="text-white flex flex-col gap-5 mb-[200x]">
              <h1 className='text-6xl'><b>Enjoy on your TV</b></h1>
              <h5 className='text-3xl'>Watch on smart TVs,PlayStation,Xbox,Chromecast,Apple TV,Blue-ray players and more.</h5>
            </div>
            <div className="">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className='relative z-50' />
              <video className='relative top-[-280px] right-[-60px] w-[340px]' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" muted autoPlay loop playsInline />
            </div>
          </div>
        </section>

        <div className="bg-zinc-800  h-2"></div>

        <section className='p-10 flex-wrap bg-black h-[600px]'>
          <div className=" container flex justify-around  items-center">

            <div className="">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
              <div className="bg-black flex justify-around  items-center ring-white ring-2 relative-top-[150px] p-[5px] rounded-lg">
                <div className="">
                  <img className='h-[100px] w-[100px]' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png ' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className='text-white'><b>Stranger Things</b></h1>
                  <h2 className='text-blue-600'>Downloading...</h2>
                </div>
                <div className="bg-black">
                  <img className='bg-black h-[100px] w-[100px]' src={hello} alt='' />
                </div>
              </div>
            </div>
            <div className="">
              <img />
            </div>
            <div className="  text-white flex flex-col gap-5 mb-[200x] " >
              <h1 className='text-6xl'><b>Download your shows to watch offline</b></h1>
              <h5 className='text-3xl'>Save your favourites easily and always have something to watch.</h5>
            </div>
          </div>
        </section>

        <div className="bg-zinc-800  h-2"></div>


        <section className='p-10 flex-wrap bg-black h-[600px]'>
          <div className='container flex justify-around items-center'>
            <div className="text-white flex flex-col gap-5 mb-[200x]">
              <h1 className='text-6xl'><b>Watch everywhere</b></h1>
              <h5 className='text-3xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h5>
            </div>
            <div className="">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" className='relative z-50' />
              <video className='relative top-[-350px] right-[-80px] w-[320px]' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" muted autoPlay loop playsInline />
            </div>
          </div>
        </section>

        <div className="bg-zinc-800  h-2"></div>

        <section className='p-10 flex-wrap bg-black h-[600px]'>
          <div className='container flex justify-around items-center'>
            <div className="">
              <img src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" />

            </div>
            <div className="text-white flex flex-col gap-5 mb-[200x]">
              <h1 className='text-6xl'><b>Create profiles for kids</b></h1>
              <h5 className='text-3xl'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h5>
            </div>
          </div>
        </section>


        <div className="bg-zinc-800  h-2"></div>
        


        <section className='h-[800px] p-5  bg-black flex flex-col gap-1   items-center justify-center ' >
          <div className='text-6xl text-white items bg-center justify-center mb-8'><b>Frequently Asked Questions</b></div>

          <div className="bg-zinc-800 p-5 text-white flex items-center  justify-between w-[1000px] hover:text hover:bg-zinc-700">
            <p>What is netflix ?</p>
            <div className="ralative">
              <button onClick={toggleDropdown} className='text-white font-bold py-2 px-4 rounded'>
                <FaPlus />
              </button>

              {dropdownVisible && (
                <div className="dropdown-content mt-4 right-[256px] w-[1000px] text-center absolute bg-red-800 text-white py-4 rounded">
                  <p>
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-zinc-800 p-5 text-white flex items-center  justify-between w-[1000px] hover:text hover:bg-zinc-700">
            <p>How much does Netflix cost?</p>
            <div className="ralative">
              <button onClick={toggleDropdown1} className='text-white font-bold py-2 px-4 rounded'>
                <FaPlus />
              </button>

              {dropdownVisible1 && (
                <div className="dropdown-content mt-4 right-[256px] w-[1000px] text-center absolute bg-red-800 text-white py-4 rounded">
                  <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
                </div>
              )}
            </div>
          </div>


          <div className="bg-zinc-800 p-5 text-white flex items-center  justify-between w-[1000px] hover:text hover:bg-zinc-700">
            <p>Where can I watch?</p>
            <div className="ralative">
              <button onClick={toggleDropdown2} className='text-white font-bold py-2 px-4 rounded'>
                <FaPlus />
              </button>

              {dropdownVisible2 && (
                <div className="dropdown-content mt-4 right-[256px] w-[1000px] text-center absolute bg-red-800 text-white py-4 rounded">
                  <p>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-zinc-800 p-5 text-white flex items-center  justify-between w-[1000px] hover:text hover:bg-zinc-700 ">
            <p>How do I cancel?</p>
            <div className="ralative">
              <button onClick={toggleDropdown3} className='text-white font-bold py-2 px-4 rounded'>
                <FaPlus />
              </button>

              {dropdownVisible3 && (
                <div className="dropdown-content mt-4 right-[256px] w-[1000px] text-center absolute bg-red-800 text-white py-4 rounded">
                  <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-zinc-800 p-5 text-white flex items-center  justify-between w-[1000px] hover:text hover:bg-zinc-700">
            <p>What can I watch on Netflix?</p>
            <div className="ralative">
              <button onClick={toggleDropdown4} className='text-white font-bold py-2 px-4 rounded'>
                <FaPlus />
              </button>

              {dropdownVisible4 && (
                <div className="dropdown-content mt-4 right-[256px] w-[1000px] text-center absolute bg-red-800 text-white py-4 rounded">
                  <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-zinc-800 p-5 text-white flex items-center  justify-between w-[1000px] hover:text hover:bg-zinc-700">
            <p>Is Netflix good for kids?</p>
            <div className="ralative">
              <button onClick={toggleDropdown5} className='text-white font-bold py-2 px-4 rounded'>
                <FaPlus />
              </button>

              {dropdownVisible5 && (
                <div className="dropdown-content mt-4 right-[256px] w-[1000px] text-center absolute bg-red-800 text-white py-4 rounded">
                  <p>
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                  </p>
                </div>
              )}
            </div>
          </div>


          <div className="flex  text-white  flax-col h-[600px] gap-5  justify-center items-center">
            <p className='text-2xl'>Ready to watch? Enter your email to crear or restart your membership.</p>
          </div>
          <div className='flex gap-3 '>
            <input type='text' className='p-2 w-[500px] border-black bg-stone-900 text-black'></input>
            <button className='text-white bg-red-500  p-2  hover:bg-white hover:text-black hover:text'>Get Started</button>
          </div>
        </section>

        <div className="bg-zinc-800  h-2"></div>

        <footer className='bg-black h-[250px] pt-[80px] flex flex-col  justify-center  items-center '>
          <div className=" flex justify-around item-center gap-[300px] text-white">
            <div>
              <a href='' className='underline'>FAQ</a>
              <a href='' className='underline'>Help Centre</a>
              < a href='' className='underline'>Account</a>
              <a href='' className='underline'>Media Centre</a>
            </div>

            <div >
              <p>Invester Relation</p>
              <p>Jobs</p>
              <p>Ways to Watch</p>
              <p>Terms of Use</p>
              <p>Privecy</p>
            </div>
            <div>
              <p>Cookie Preferences</p>
              <p>Corporate Information</p>
              <p>Contact Us</p>
              <p>Legal Notices</p>
              <p> Only on Netflix </p>
            </div>
          </div>
        </footer>


        </>
  

  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <App />




  </React.StrictMode>
);