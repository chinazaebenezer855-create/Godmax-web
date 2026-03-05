


 const navbar = document.getElementById("navbar");

 window.addEventListener("scroll", () => {
   if (window.scrollY > 0 || window.scrollY >= 12340) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});





// scroll to top

let btn = document.querySelector(".my-btn");

// make the button show 

 window.addEventListener("scroll", function () {
   if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {

     btn.style.display = "block";
   } else {
     btn.style.display = "none"

   }

 })

// // movement

 btn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });

 }

)

//all scrolls

const hireBtn = document.getElementById("hireme");
const contactSection = document.getElementById("info1");

hireBtn.addEventListener("click", function(){
  contactSection.scrollIntoView(
    {
      behavior:"smooth"
    }
  );
}

);

//primary

const hireBtn1 = document.getElementById("start");
const contactSection1 = document.getElementById("form");

hireBtn1.addEventListener("click", function(){
  contactSection1.scrollIntoView(
    {
      behavior:"smooth"
    }
  );
}

);












// dropdown f ask questios



// alert("hi welcome");

const helpBoxes = document.querySelectorAll(".help-box");

helpBoxes.forEach(box => {
  const header = box.querySelector(".help-header");

  header.addEventListener("click", () => {

    // Close all other boxes
    helpBoxes.forEach(item => {
      if (item !== box) {
        item.classList.remove("active");
      }
    });

    // Toggle current
    box.classList.toggle("active");
  });

});


















document.getElementById("collabContactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const subject = document.getElementById("userSubject").value.trim();
    const message = document.getElementById("userMessage").value.trim();
    const response = document.getElementById("formResponse");

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validation
    if(name === "" || email === "" || subject === "" || message === "") {
        response.style.color = "red";
        response.innerText = "Please fill in all fields.";
        return;
    }

    if(!email.match(emailPattern)) {
        response.style.color = "red";
        response.innerText = "Please enter a valid email address.";
        return;
    }

    // Success
    response.style.color = "green";
    response.innerText = "Message sent successfully! ✅";

    // Clear form
    document.getElementById("collabContactForm").reset();
});



