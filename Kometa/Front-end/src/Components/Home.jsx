import kometa from '../../public/kometa.svg';
import '../assets/CSS/home.css'

function Home(){
    return <>
    <main>
        <div id="logoHomeDiv">
            <img id="logoHome" src={kometa}/>
        </div>
        <h3 id='subTitle'>The fastest delivery in the universe.</h3>
        <div className='homeLog'>
            <button id='logIn'>Log in</button>
            <button id='register'>Register</button>
        </div>
    </main>
    </>
}

export default Home;