const toggleFall = () => {
    /*
        Your task: target the body element and change it's class to "fall"
    */
   document.querySelector("body").className = "fall"; 
   document.querySelector("h1").textContent = "Fall in Asheville"; 

}

const toggleWinter = () => {
    /*
        Your task: target the body element and change it's class to "winter"
    */
     document.querySelector("body").className = "winter";
     document.querySelector("h1").textContent = "Winter in Asheville"; 
}

const toggleSpring = () => {
    /*
        Your task: target the body element and change it's class to "spring"
    */
    document.querySelector("body").className = "spring"; 
    document.querySelector("h1").textContent = "Spring in Asheville"; 
    // document.querySelector("h1").innerText = "Fall in Asheville"; 
    // document.querySelector("h1").innerHTML = "Fall in Asheville"; 
}