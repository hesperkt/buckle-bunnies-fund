const name = document.getElementById("name");
const form = document.getElementById("form");
const errorDiv = document.getElementById("error");

form.addEventListener('submit',(e) => {
    let messages = []

    if (name.value === '' || name.value == null){
        messages.push("*Name is required.");
    }

    if (name.value.length < 1) {
        messages.push("*Name must be at least 1 character.");
    }

    if (city.value.length < 3) {
      messages.push("*City must be at least 3 characters.");
   }

    if (contact.value.length < 5) {
    messages.push("*Contact info must be at least 5 characters.");
   }

   if (subject.value.length < 1) {
    messages.push("*Message must be at least 1 character.");
   }

    if (messages.length > 0){
        e.preventDefault();
        errorDiv.innerHTML = messages.join("<br/>");
    }
})