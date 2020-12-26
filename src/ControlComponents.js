import React,{useState,useEffect} from 'react'


const ControlComponents = ({play, setPlay,breakVal,setBreakval, sessionVal,setSessionVal,obj, setObj}) => {

const  [counter,setCounter] = useState()
       
const beepSound  = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";


 useEffect(() => {

   let i
   if(play == true ){

      console.log("use");
      i = setInterval(() => {
            timer()
        
      }, 1000);
    }

  return () => {
 
      clearInterval(i);
  } 
}, [play,obj.change]);
 
 


const clockCountdown = ()=>{
  
      console.log("run");
  if(play === true && obj.sessionRunning === true){   //if countdown on then stop clock
    
    setCounter(clearInterval(counter))
  
    setPlay(false);      
    //  console.log("stop");
       
       
  } else if (play === false && obj.sessionRunning === true) {
  //  console.log("start");
    setPlay(true);   
    
    setCounter(setInterval(timer,1000))
    
   
      
    
  } else if(play === true && obj.breakRunning === true){   //if countdown on then stop clock
  //   // make play false //////
  //  console.log("stop");
     
   
    setPlay(false) ; 
   setCounter(clearInterval(counter))
 
   
  } else if(play === false && obj.breakRunning === true) {
    //  console.log("start");
   
    setPlay(true)   
 
   setCounter(setInterval(timer,1000))
    
    
  }
    
    
  
}  // end of clockdown function


function stopTimer(){        

       setCounter(clearInterval(counter))
     
}       


 function timer(){
                  
                              
                              if(obj.name === "Session"){

                                    if(obj.timeleft !== 0){
                                        let   calc = obj.timeleft -=1
                                    setObj({...obj, timeleft: calc, change: false})
                                      return
                                    }

                                    if(obj.timeleft == 0){
                                        // document.getElementById("beep").play()
                                                  let calc = breakVal * 60 ;                         
                                      setObj({...obj, breaktimeleft: calc, sessionRunning: false,  breakRunning: true,  name: "Break", change: true})
                              
                                         return
                                                                              
                                   }
                                  

                            } else if(obj.name === "Break"){
                               
                                // console.log("break");
                                  if(obj.breaktimeleft !==0){

                                  let   calc1 = obj.breaktimeleft -=1
                                    setObj({...obj,  breaktimeleft: calc1, })
                                      return
                                  }
                                  if(obj.breaktimeleft == 0){  
                                        // document.getElementById("beep").play()
                                        let calc1 = sessionVal * 60
                                    
                                       setObj({...obj, timeleft: calc1,  sessionRunning: true,  breakRunning: false,  name: "Session", change: false})
                                    
                                       stopTimer()                                      
                                       return
                                  }
                            }



                        
     } 




      //  format clock
        function timeRemaining(val){
                  let minutes = Math.floor(val / 60);
            let seconds = val - minutes * 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return minutes + ':' + seconds;
                      
        }
     
        function stopCountDown(){
          //  console.log("stop pressed")
          

        document.getElementById("beep").pause()

        setPlay(false) ;   
        stopTimer() 
        //  stopTimer()
        setBreakval(5)
        setSessionVal(25)


        setObj({...obj,  sessionRunning: true,
        breakRunning: false,
        name: "Session",
        timeleft: 1500, breaktimeleft:  300 })
              
              
            
        };  // end of stop
    
    return (

        <>


         <div id="session">

            <div id="timer-label">{obj.name}</div>            
          <div id="time-left">{
            obj.name === "Session" ? timeRemaining(obj.timeleft) : 
          timeRemaining(obj.breaktimeleft)}</div>

          
        </div>

        <div id="controls">

            <button className="control-buttons"  id="start_stop" onClick={clockCountdown}>Play / Pause</button>
            <button className ="control-buttons" id="reset" onClick={stopCountDown}>Reset</button>
            <audio src={beepSound} id="beep"></audio>

        </div>
         
       

       </>
         
    )
}

export default ControlComponents
