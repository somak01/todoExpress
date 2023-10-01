import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

document.addEventListener("DOMContentLoaded", () => {
    const editButton = document.querySelector("#editButton");
    const hiddenForm = document.querySelector("#hiddenForm");
    const deleteButton = document.querySelector("#deleteButton");
    const selectElement = document.querySelector("[name='activitySelect']")

    
    deleteButton.addEventListener("click", async (event) => {
        event.preventDefault()
        try {
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            const selectedId = selectedOption.id;
            const response = await axios.delete(`/modify/delete/${selectedId}`);

            if (response.status === 200) {
                console.log("Finally!!!");
                window.location.reload();
            }
            
        } catch (error) {

            console.error(error);
        }
    })

    editButton.addEventListener("click", async (event) => {
        event.preventDefault();
        hiddenForm.style.display = "block";
    })
})