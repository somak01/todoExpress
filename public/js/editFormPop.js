import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

document.addEventListener("DOMContentLoaded", () => {
    const editButton = document.querySelector("#editButton");
    const hiddenForm = document.querySelector("#hiddenForm");
    const deleteButton = document.querySelector("#deleteButton");
    const selectElement = document.querySelector("[name='activitySelect']")
    const dateField = document.querySelector("[name='date']");
    const activityField = document.querySelector("[name='activity']");
    const locationField = document.querySelector("[name='location']");
    const saveButton = document.querySelector("#saveButton");

    
    deleteButton.addEventListener("click", async (event) => {
        event.preventDefault()
        try {
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            if (selectedOption) {
                const selectedId = selectedOption.id;
                console.log("This?");
                const response = await axios.delete(`/modify/delete/${selectedId}`);
                if (response.status === 200) {
                    console.log("Finally!!!");
                    window.location.reload();
                }
            } else {
                alert("There's nothing to delete!!!");
            }
            
        } catch (error) {

            console.error(error);
        }
    })

    editButton.addEventListener("click", async (event) => {
        event.preventDefault();
        try {
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            if (selectedOption) {
                hiddenForm.style.display = "block";
                const selectedId = selectedOption.id;
                const response  = await axios.get("/modify/:id/", {params:{id:selectedId}});
                const {priority, date, activity, location} = response.data;
                selectedOption.value = priority;
                activityField.value = activity;
                locationField.value = location;
                dateField.value = date.slice(0, 10);
            } else {
                alert("There's nothing to edit!!!");
            }
        } catch(error) {
            console.error(error);
        }
    })



    saveButton.addEventListener("click",async (event) => {
        event.preventDefault();
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        const selectedId = selectedOption.id;
        const activity = activityField.value;
        const priority = selectedOption.value;
        const date = dateField.value;
        const location = locationField.value;
        try{
            if (selectedId && activity && priority && date && location) {
                const response = await axios.put(`/modify/update/${selectedId}`, {
                    priority:priority,
                    date: date,
                    activity:activity,
                    location:location,
                });
                if (response.status === 200) {
                    alert("Succesfull update!");
                    window.location.reload();
                }
            }
        } catch(error) {
            console.error(error);
        }
         
    })
})