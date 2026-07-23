// Toaster
function createToaster(config){
    return function (dets){
        let div = document.createElement("div");

        div.textContent = dets;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 shadow-lg pointer-events-none`;
        document.querySelector(".parent").appendChild(div);

        setTimeout( () => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    };

}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3
});

toaster("Download Completed!")

        setTimeout( () => {
            toaster("See you again!")
        }, 2000);
