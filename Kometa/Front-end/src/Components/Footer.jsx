import  '../assets/CSS/footer.css'



function Footer(){
    return <>
        <main id='footerMain'>
            <section id='discoverKometa'>
                <h4>Discover Kometa</h4>
                <ul>
                    <li>About us</li>
                    <li>Takeaway</li>
                    <li>Business signup</li>
                    <li>Become a rider</li>
                </ul>
            </section>
            <section id='legalTerms'>
                <h4>Legal</h4>
                <ul>
                    <li>Terms and conditions</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>
            </section>
            <section id='help'>
                <h4>Help</h4>
                <ul>
                    <li>Contact</li>
                    <li>FAQs</li>
                </ul>
            </section>
            <section id='socialMedia'>
                <h4>Social</h4>
                <ul>
                    <li><i className="fa-brands fa-twitter"/></li>
                    <li><i className="fa-brands fa-instagram"/></li>
                </ul>
            </section>
        </main>
    </>
}

export default Footer;