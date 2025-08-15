//creating h1 using js
// let h1=document.createElement("h1")
// h1.innerHTML="Prince Gupta"

// document.getElementById("root").appendChild(h1)

//now creating h1 using react
let h1=React.createElement("h1",null,"Prince Gupta")

//reactdom creating parent jske ander h1 ko append krenge
ReactDOM.createRoot(document.getElementById("root")).render(h1)

