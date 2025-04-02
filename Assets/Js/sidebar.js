function showSidebar() {
    document.getElementById("sidebar").style.display = "flex";
    document.getElementById("sidebar").style.transform = "translateX(0)";
    document.getElementById("sidebar").style.transition = "transform 0.3s ease-in-out";
}

function hideSidebar() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebar").style.transform = "translateX(100%)";
    document.getElementById("sidebar").style.transition = "transform 0.3s ease-in-out"; 
}

// =======================================================================================================================================================

// uparrow 

let calcscrollValue = () => {
    let scrollProgress = document.getElementById("scroll-Arrow");
    let progressValue = document.getElementById("uparrow");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    
    if(pos>100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display= "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(var(--primary-color) ${scrollValue}%, var(--secondary-color) ${scrollValue}%)`;
}
window.onscroll = calcscrollValue;
window.onload = calcscrollValue;

// =======================================================================================================================================================

// Dark theme
var icon = document.getElementById("MS");
theme.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        MS.src = "./Assets/images/Theme/sun.png";
    }else{
        MS.src = "Assets/images/Theme/moon.png";
    }
}

// =======================================================================================================================================================

// logo & About profile change on dark theme

function changelogo(){
    var img = document.getElementById("logo");
    var luffy = document.getElementById("luffy");
    if(document.body.classList.contains("dark-theme")){
        img.src = "./Assets/images/logo1.png";
        luffy.src = "./Assets/images/aboutme/avatar2.png";
    }else{
        img.src = "./Assets/images/logo1.png";
        luffy.src = "./Assets/images/aboutme/avatar1.png" ;
    }
}
// =======================================================================================================================================================
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents default form submission

    let formData = new FormData(this); // Get form data

    fetch(this.action, {
        method: this.method,
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert("Form submitted successfully!");
            this.reset(); // Clears the form fields
        } else {
            alert("Error submitting the form!");
        }
    })
    .catch(error => console.error("Error:", error));
});