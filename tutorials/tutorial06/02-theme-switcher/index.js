const defaultTheme = ev => {
    // your code here.
    console.log("default theme fuction check.")
    document.querySelector("body").className = "default"; 

};

const oceanTheme = ev => {
   // your code here.
   console.log("ocean theme fuction check.")
   document.querySelector("body").className = "ocean"; 
};

const desertTheme = ev => {
   // your code here.
   console.log("desert theme function check.")
   document.querySelector("body").className = "desert"; 
};

const highContrastTheme = ev => {
    // your code here.
    console.log("high contrast theme function check.")
    document.querySelector("body").className = "high-contrast"; 
}; 

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
    Questions:
    1. What do I want to target? Body tag. 
    2. What do I want to change about the body tag? It's class (which is done bt setting the className property.)
*/