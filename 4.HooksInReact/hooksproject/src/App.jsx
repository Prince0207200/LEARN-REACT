import React, { useEffect, useState } from 'react'
import "./App.css"


// function App() {
//   let color="blue"
//   return (
//     <div className='app'>
//       <h1>My favorite color is {color}</h1>
//       <button onClick={()=>{
//         color=(color=="black")?"blue":"black"
//         console.log(color)
//       }}>Change color</button>
//      < h1>My favorite color is {color}</h1>
//     </div>
//   )
// }


//useState hook
// function App() {
//   let [color,setColor]=useState("blue")
//   let [count,setCount]=useState(0)
//   let [dcount,setDcount]=useState(100)

//   return (
//     <div className='app'>
//       <button onClick={()=>{
//         setDcount(count=>count-1)
//       }}>decount {dcount}</button>

//       <h1 color={color}>My favorite color is {color}</h1>

//       <button onClick={()=>{
//         setColor(
//           color=(color=="black")?"blue":"black"
//         )
//       }}>Change color</button>
//      < h1>My favorite color is {color} and decount {dcount} and count {count}</h1>

//      <button onClick={()=>{
//       setCount(count=>count+1)
//      }}>count {count}</button>
//     </div>
//   )
// }



// //useEffect hook 
// function App() {
//   let [count,setCount]=useState(0)
//   let [color,setColor]=useState("blue")

//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //     setCount(++count)
//   //   },1000)
//   // })//without dependency


//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //     setCount(++count)
//   //   },1000)
//   // },[])//with empty arr dependency

//   // useEffect(()=>{
//   //   setTimeout(()=>{
//   //     setCount(++count)
//   //   },1000)
//   // },[count])//with  dependency

//   useEffect(()=>{
//     setTimeout(()=>{
//       setColor(color="black")
//     },2000)
//   },[color])//with  dependency


  

//   return (
//     <div className='app'>
      
     
//      < h1> count is {count}</h1>
//      <h1 on>color is {color}</h1>
//      <button onClick={()=>{setColor(color=("pink"==color)?"blue":"pink")}}>Change</button>

     
//     </div>
//   )
// }
// export default App


//useEffect hook 
function App() {
  let [count1,setCount1]=useState(0)
  let [count2,setCount2]=useState(0)

 

  useEffect(()=>{
    console.log("count1",count1)
    console.log("count2",count2)
    
  },[count1])


  

  return (
    <div className='app'>
      
     <button onClick={()=>{setCount1(count1=>count1+1)}}>{count1}</button>
     <button onClick={()=>{setCount2(count2=>count2+1)}}>{count2}</button>


     
    </div>
  )
}
export default App