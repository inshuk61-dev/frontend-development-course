async function getData() {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();

    console.log(data);

    const parent = document.getElementById("first");

    for (const user of data) {

        const card = document.createElement("div");
        card.classList.add("card");

        const element = document.createElement("h1");
        element.innerHTML = user.login;

        const image = document.createElement("img");
        image.src = user.avatar_url;
        image.alt = user.login;
        image.width = 150;
        image.height = 150;

        const a = document.createElement("a");
        a.href = user.html_url;
        a.target = "_blank";

        const button = document.createElement("button");
        button.innerText = "Go To Github";

        a.appendChild(button);

        card.appendChild(image);
        card.appendChild(element);
        card.appendChild(a);

        parent.appendChild(card);
    }
}

getData();