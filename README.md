This project is built by React Js and Tailwindcss.

### Project Initialisation:
=> Create a new Folder 

=> Open it in any IDE prefer (VS Code)

=> Open the IDE terminal in the Folder

### Create the project 
     Type command in the terminal
      Command: npx create-react-app Name

=> Then navigate to the created folder in the terminal by typing : cd Name

### Install Tailwindcss
  Type the below commands one by one 
 1) npm install -D tailwindcss
 2) npx tailwindcss init
 3) Addthe below changes in "tailwind.config.js" code.
 
  Code : 

   content: [

      "./src/*/.{js,jsx,ts,tsx}",

      ],

 ### Make changes in the "index.css" by replacing the existing code with provided code.

  Code:
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

### Install React-Router
   Type command in the terminal
   Command: npm install react-router-dom

### Start/Run the project
   Type command in the terminal :
    Command : npm start
