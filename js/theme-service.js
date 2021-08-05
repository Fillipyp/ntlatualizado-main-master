const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#dark-theme-service");


// Listen for a click on the button
btn.addEventListener("click", function() {
  
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "css-service/darkmode/geral.css") {
 
 
    // ... then switch it to "dark-theme.css"
    theme.href = "css-service/lightmode/geralsecondary.css";
    
   
   
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "css-service/darkmode/geral.css";
   
  }
});
