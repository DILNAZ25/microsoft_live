const showsign = document.getElementById("show-sign");
    const back = document.getElementById("back");
    const wrapper = document.getElementById("wrapper");
    const options = document.getElementById("options");

    showsign.addEventListener("click", () => {
        wrapper.classList.add("hidden");
        options.classList.remove("show");
    });

    back.addEventListener("click", () => {
        options.classList.add("hidden");
        wrapper.classList.remove("show");
    });