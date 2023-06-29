import './GetStarted.css';

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span style={{color:'white', fontWeight: 600}}>Get started with Homyz</span>
                <span style={{color:"rgba(255, 255, 255, 0.587)"}}>Subscribe and find super attractive price quotes from us. <br />
                Find your residence soon</span>
                <button className="button">
                    <a href="https://www.google.co.in" >Get Started</a>
                </button>
            </div>
        </div>   
    </section>
  )
}

export default GetStarted