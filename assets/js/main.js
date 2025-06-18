console.log("iftekher mahmud pervez");

mahmud = document.querySelector(".mahmud");
text = document.querySelector(".alert");
input = document.querySelector("input[type=text]");
btn = document.querySelector("button");

var ListData = localStorage.getItem("list_data")
  ? JSON.parse(localStorage.getItem("list_data"))
  : [];

window.onload = () => {
  showData();
};

const storeData = (data) => {
  localStorage.setItem("list_data", JSON.stringify(data));
};

const showData = () => {
  mahmud.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("list_data"));
  if (!data) return;
  data.forEach((item) => {
    const html = `
    <li class="listgroup"><h4>${item.title}</h4><button onclick="deleteData(${item.id})">delete</button></li>
    `;
    mahmud.insertAdjacentHTML("beforeend", html);
  });
};

btn.onclick = (e) => {
  e.preventDefault();
  if (!input.value == "") {
    const pushData = {
      id: ListData.length ? ListData.length + 1 : 0,
      title: input.value,
    };

    ListData.push(pushData);
    storeData(ListData);
    showData();

    setTimeout(() => {
      input.value = "";
      text.style.color = "green";
      text.innerHTML = "text submit successfully";
    }, 100);
    setTimeout(() => {
      text.innerHTML = "add some note on it";
      text.style.color = "white";
    }, 3000);
  } else {
    text.innerHTML = "enter the valiate text";
    text.style.color = "red";
  }
};

const deleteData = (data_id) => {
  const pushData = ListData.filter((item) => data_id != item.id);
  ListData = pushData;
  storeData(ListData);
  showData();
  setTimeout(() => {
    input.value = "";
    text.style.color = "red";
    text.innerHTML = "text Delete Successfully";
  }, 100);
  setTimeout(() => {
    text.innerHTML = "add some note on it";
    text.style.color = "white";
  }, 3000);
};
