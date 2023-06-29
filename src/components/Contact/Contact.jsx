import { MdCall } from 'react-icons/md';
import './Contact.css';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className=" flexColStart c-left">
                <span className='orangeText'>Our Contact Us</span>
                <span className='primaryText'>Easy to contact us</span>
                <span style={{color:'#838282'}}>We always ready to help by providijng the best services for you. We beleive a good <br />
                blace to live can make your life better</span>

                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span style={{color:'#838282'}}>+91 894 555 5955</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span style={{color:'#838282'}}>+91 894 555 5955</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>
                
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span style={{color:'#838282'}}>+91 894 555 5955</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span style={{color:'#838282'}}>+91 894 555 5955</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="c-right">
                <div className="image-container" style={{width:'80%', borderRadius:  "90px", border: '5px solid #cbcbcb'}}>
                    <img src="./c.jpg" alt="c-img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact