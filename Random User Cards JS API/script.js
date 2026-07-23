function getUsers() {
    fetch("https://randomuser.me/api/?results=3")
        .then((rawData) => rawData.json())
        .then((data) => {
            document.querySelector(".container").innerHTML = "";
            data.results.forEach((user) => {

                const userCard = document.createElement("div");
                userCard.className = "user";

                const image = document.createElement("div");
                image.className = "image";

                const img = document.createElement("img");
                img.src = user.picture.large;
                img.alt = "Profile Image";


                const info = document.createElement("div");
                info.className = "info";


                const h2 = document.createElement("h2");
                h2.textContent = user.name.first + " " + user.name.last;


                const p = document.createElement("p");
                p.textContent = user.email;


                const span = document.createElement("span");
                span.textContent = "Active";


                image.appendChild(img);

                info.appendChild(h2);
                info.appendChild(p);
                info.appendChild(span);

                userCard.appendChild(image);
                userCard.appendChild(info);

                // Add to the page
                document.querySelector(".container").appendChild(userCard);
            });

        });
}

getUsers();


let refreshBtn = document.querySelector("#refreshtBtn");

refreshBtn.addEventListener("click", () => {
    getUsers();
})

