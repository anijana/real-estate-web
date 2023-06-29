import { useState } from 'react';
import {Accordion, 
    AccordionItem, 
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion'

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="image-container" style={{width:'80%', borderRadius:  "90px", border: '5px solid #cbcbcb'}}>
                    <img src="./OIP.jpg" alt="value" />
                </div>
            </div>

            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span style={{color:'#838282'}}>We always ready to help by providijng the best services for you. <br />
                      We beleive a good blace to live can make your life better</span>

                <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
                    {
                        data.map((item, idx) =>{
                            const [className, setClassName] = useState(null);

                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={idx} uuid={idx}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>

                                            <AccordionItemState>
                                                {({expanded}) =>expanded ? setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState>
                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p style={{color:'#838282'}}>{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        }) 
                    }
                </Accordion>      
            </div>
        </div>
    </section>
  )
}

export default Value