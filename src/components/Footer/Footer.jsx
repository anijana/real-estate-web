import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="footer logo" />

                <span style={{color:'#838282'}}>
                Our vision is to make all people <br />
                the best place to live for them.
                </span>
            </div>
            <div className="flexColStart mid">
                <span style={{fontWeight:'600', fontSize:20,color: '#1f3e72'}}>@ Contact by below Social Media</span>

                <div className="socialmedia">
                    <img src="./Facebook-logo.png" alt="facebook" width={40}/>
                    <img src="./twitter_logo.jpg" alt="twitter" width={45} />
                    <img src="./y.png" alt="whatsapp" width={30} />
                    <img src="./instagram.jpg" alt="youtube" width={50}/>
                </div>

                <span style={{fontWeight:'500', fontSize:15,color:'#838282'}}>@Copyright Design By @ Designer & Devloper</span>
            </div>

            <div className=" flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span style={{color:'#838282'}}>Salt Lake, New Town, Kolkata, WestBengal, India</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer