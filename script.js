document.addEventListener("DOMContentLoaded", () => {
    const signInOptions = document.getElementById("show-sign");
    const back = document.getElementById("back");
    const wrapper = document.getElementById("wrapper");
    const options = document.getElementById("options");
    const overlay = document.getElementById("overlay");
    overlay.classList.add("hidden");

    signInOptions.addEventListener("click", () => {
        wrapper.classList.add("hidden");
        signInOptions.classList.add("hidden");
        options.classList.remove("hidden");
        options.classList.add("show");
        overlay.classList.remove("hidden");
        overlay,classList.add("show");
    });

    back.addEventListener("click", () => {
        options.classList.add("hidden");
        options.classList.remove("show");
        wrapper.classList.remove("hidden");
        signInOptions.classList.remove("hidden");
        overlay.classList.add("hidden");
        overlay.classList.remove("show");

    });

    document.getElementById("show-sign").addEventListener("click", () => {
        document.getElementById("options").classList.add("show");
    
    });
    
    document.getElementById("back").addEventListener("click", () => {
        document.getElementById("options").classList.remove("show");
    
    });    
});
