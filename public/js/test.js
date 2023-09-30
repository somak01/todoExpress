


document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        window.location.reload();
        console.log("Hurray!");
    }
})