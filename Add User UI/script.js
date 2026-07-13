let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
    users: [],

    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },

    submitForm: function (e) {
        e.preventDefault();
        this.addUsers();

    },

    addUsers: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });

        this.renderUI();
        form.reset();
    },

    renderUI: function () {
        const container = document.querySelector(".card-container");
        container.innerHTML = "";

        this.users.forEach(function (user) {
            const card = document.createElement("div");
            card.className = "card";

            const img = document.createElement("img");
            img.src = user.photo;
            img.alt = "";

            const h2 = document.createElement("h2");
            h2.textContent = user.username;

            const h4 = document.createElement("h4");
            h4.textContent = user.role;

            const p = document.createElement("p");
            p.textContent = user.bio;

            card.append(img, h2, h4, p);

            container.appendChild(card);
        });
    },

    removeUsers: function () { },
};

userManager.init();