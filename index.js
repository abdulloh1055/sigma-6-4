let body = document.querySelector("body");

fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => {
    console.log();
    for (let i = 0; i < 10; i++) {
      let user = data[i];

      let box = document.createElement("div");
      let name = document.createElement("h2");
      let username = document.createElement("p");
      let list = document.createElement("ul");
      let emali = document.createElement("li");
      let addres = document.createElement("li");
      let phone = document.createElement("li");

      box.classList.add("box")

      name.textContent = user.name;
      username.textContent = user.name;
      phone.textContent = user.phone;
      username.textContent = user.emali;
      addres.textContent = user.address.city;




      list.appendChild(phone);
      list.appendChild(emali);
      list.appendChild(addres);

      box.appendChild(name);
      box.appendChild(username);
      box.appendChild(list);

      body.appendChild(box)

    }
})