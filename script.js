document.addEventListener('DOMContentLoaded', function(){
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    if(savedTheme){
        body.setAttribute("data-bs-theme", savedTheme);
        updateIcon(savedTheme);
    }

    themeToggle.addEventListener('click', () =>{
        let currentTheme = body.getAttribute("data-bs-theme");
        let newTheme = currentTheme === "light" ? "dark" : "light";
        body.setAttribute("data-bs-theme", newTheme);
    
        localStorage.setItem("theme", newTheme);
        updateIcon(newTheme);
    });
    

    function updateIcon(theme){
        if(theme === "dark"){
              themeIcon.classList.remove("bi-moon-fill");
              themeIcon.classList.add("bi-sun-fill");
        }
        else{
            themeIcon.classList.remove("bi-sun-fill");
            themeIcon.classList.add("bi-moon-fill");
        }
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, 
                    behavior: "smooth"
                });
            }
        });
    });
}) ;