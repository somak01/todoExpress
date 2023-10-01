import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';


const seachButton = document.querySelector("#searchButton");

seachButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const priority = document.querySelector("[name='priority']").value;
    const date = document.querySelector("[name='date']").value;
    const activity = document.querySelector("[name='activity']").value;
    const location = document.querySelector("[name='location']").value;
    const form = document.querySelector("#addForm");

    await axios.get('/home/', {params: {
        priority:priority,
        date:date, 
        activity:activity,
        location:location
    }});

})