import React,{useState} from 'react'
import ControlComponents from './ControlComponents'

import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


const LengthComponent = () => {

            const [breakVal,setBreakval] = useState(5)
            const [sessionVal,setSessionVal] = useState(25)
            const [play, setPlay] = useState(false)   // when u press the play/ pause btn. init()
            
            const initial =  {
                    sessionRunning: true,
                    breakRunning: false,
                    name: "Session",
                     timeleft: 1500,
                    breaktimeleft:  300,
                  change: false
             }

            const [obj, setObj] = useState(initial)   
            
            
            



            const handleChange = (item, item2) =>{
                        let x = ""
                // console.log(item, counter);
                        if(play){return}  // if countdown is on then dont update any values
                      
                             if(item === "break" && item2 === "decrement"){
                                             
                                               if(breakVal >= 60 || breakVal <=1){ // amendment file
                                                       //do nothing
                                                      } else {  
                                                                                                                                                
                                                          setBreakval(breakVal -1)
                                                          x = obj.breaktimeleft - 60
                                                          setObj({...obj, breaktimeleft: x}) 
                                                    
                                                    }  
                                                    
                                                    
                                                     if(obj.breakRunning){
                                                   }



                              } else if(item === "break" && item2=== "increment"){

                                             
                                              
                                                     if(breakVal >= 60 ){
                                                       //do nothing
                                                      } else {  
                                                                                                                                                
                                                          setBreakval(breakVal +1)
                                                          x = obj.breaktimeleft + 60
                                                          setObj({...obj, breaktimeleft: x}) 
                                                    
                                                    }  
                                                    
                                                    
                                                     if(obj.breakRunning){
                                                      }
                                          
                                        



                              } else if(item === "session" && item2 === "increment"){

                                       
                                              
                                                     if(sessionVal >= 60 ){
                                                //do nothing
                                                      } else {  
                                                                                                                                              
                                                          setSessionVal(sessionVal +1)
                                                          x = obj.timeleft + 60
                                                          setObj({...obj, timeleft: x}) 
                                                    
                                                    } 

                                                     if(obj.sessionRunning){     
                                               }
                                

                              } else {  //decrease

                                             
                                              
                                                     if(sessionVal <= 1 ){
                                                //do nothing
                                                      } else {  
                                                                                                                                                
                                                          setSessionVal(sessionVal -1)
                                                          x = obj.timeleft - 60
                                                          setObj({...obj, timeleft: x}) 
                                                    
                                                    } 
                                                    if(obj.sessionRunning){     
                                                    }



                              }

               

            }   // << end of handleChange



    return (  
          <>
          <div id="length">
          
              <div id="break-label">
                <h1>Break Length</h1>
                <button className="arrow-buttons" id="break-decrement" onClick={()=>handleChange("break","decrement")}><FaArrowDown /></button>
                <span id="break-length">{breakVal}</span>
                <button className="arrow-buttons"  id="break-increment" onClick={()=>handleChange("break","increment")}><FaArrowUp/></button>
              </div>

              <div id="session-label">
                <h1>Session Length</h1>
                  <button className="arrow-buttons"  id="session-decrement" onClick={()=>handleChange("session","decrement")}><FaArrowDown/></button>
                  <span id="session-length">{sessionVal}</span>
                  <button className="arrow-buttons"  id="session-increment" onClick={()=>handleChange("session","increment")}><FaArrowUp /></button>
             </div>
         </div>

          
           <ControlComponents  play={play} setPlay={setPlay} sessionVal={sessionVal} setSessionVal={setSessionVal} breakVal={breakVal} setBreakval={setBreakval} obj={{...obj}} setObj={setObj}  />   
        
          </>

    )
}

export default LengthComponent
