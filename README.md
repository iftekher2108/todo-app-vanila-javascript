# 📝 To-Do List App (Vanilla JavaScript + LocalStorage)

This is a simple, lightweight To-Do List web app built using **HTML**, **CSS**, and **Vanilla JavaScript**. It allows users to add, view, and delete tasks using the browser's `localStorage`, so tasks persist even after refreshing or closing the browser tab.

## 🔧 Features

- ✅ Add new tasks
- 📋 Display list of tasks on page load
- ❌ Delete individual tasks
- 💾 Stores all data in `localStorage`
- 🎨 Basic styling with custom CSS
- ⚡ Super lightweight (no frameworks)

## 📂 Project Structure

todo-app-vanilla-javascript/ <br>
│ <br>
├── assets/ <br>
│ ├── css/ <br>
│ │ └── style.css <br>
│ ├── image/ <br>
│ │ └── banner.jpg <br>
│ └── js/ <br>
│ └── main.js <br>
│
├── index.html <br>
└── README.md <br>


## 💻 How It Works

- When the page loads, the app fetches tasks from `localStorage` (if any) and displays them.
- You can add a task using the input field.
- Tasks are displayed dynamically using JavaScript's `insertAdjacentHTML`.
- You can remove a task using the delete button next to each one.
- All data is stored in `localStorage` under the key `list_data`.

## 🛠 Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **LocalStorage API**

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app-vanilla-javascript.git

🙌 Credits
Made with ❤️ by Iftekher Mahmud Pervez
