# User Management System

This project was created as a job task for N2Mobil Tracking Systems Inc. It includes pages for users, todos, posts, and albums. The main features and technologies used in this project are listed below.

## Features

- **Users Page:** Displays a list of users. Clicking on a user navigates to the posts page for that user.
- **Todos Page:** Displays a list of todos.
- **Posts Page:** Displays a list of posts. Users can navigate between posts.
- **Albums Page:** Displays a list of albums.
- **Navigation:** Seamless navigation between different pages via links.
- **Theme Selector:** Allows users to switch between light and dark modes.
- **Language Selector:** Provides language support for multiple languages.
- **Persistent Settings:** Theme and language preferences are stored in `localStorage`.

## Technologies Used

- **Vite:** Used for fast and efficient project setup and development.
- **UnoCSS:** A utility-first CSS engine used for styling, incorporating TailwindCSS presets.
- **i18n:** Integrated for internationalization support.
- **Dark Mode:** Added support for dark mode.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/cibilex/n2-task.git
   ```
2. Navigate to the project directory:
   ```bash
   cd n2-task
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

**Notes**

- I deliberately did not include .env files in .gitignore.
- This project includes additional features beyond the given task, such as dark mode and language support, to enhance the user experience.


**Demo**

Check out the live demo [here](https://deluxe-cassata-4211a5.netlify.app).
