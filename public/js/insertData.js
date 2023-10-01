import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const submit = document.querySelector("#submitButton");
console.log(submit);
submit.addEventListener("click", (event) => {
    event.preventDefault();
    const priority = document.querySelector("[name='priority']").value;
    const date = document.querySelector("[name='date']").value;
    const activity = document.querySelector("[name='activity']").value;
    const location = document.querySelector("[name='location']").value;
    const form = document.querySelector("#addForm");


    if (location && priority && date && activity) {
        console.log("Cocksucker!");
        axios.post("/add/todo", {priority, location, date, activity})
        console.log("elerunk eddig?");
        form.reset();
        //window.location.href = "/add/"
    } else {
        alert("Please provide all the information needed!");
    }
    //console.log(priority.value, date.value, activity.value, location.value);
});