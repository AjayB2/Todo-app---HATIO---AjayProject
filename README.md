Todo App
This is a full-stack Todo management application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to create projects and manage todos within those projects. The app also includes user authentication and the ability to export project summaries as GitHub Gists.

Features
User authentication (register/login)
Create, update, delete projects
Add, update, mark complete todos within projects
Export project summaries as Gists on GitHub
JWT-based authentication
Full CRUD functionality for todos
Prerequisites
Node.js
MongoDB
GitHub account with a personal access token for Gists
Objective: Develop an application to manage todos with the following capabilities:

Create a new project.
Manage todos within a project (Add, Edit, Update, and Mark as complete).
Export the project summary as a gist on GitHub.
Expectations:

Selected schema/representation should include: a. Project: Unique Id, Title, Created Date, List of Todos. b. Todo: Unique Id, Description, Status, Created Date, Updated Date.
Basic Auth for user login.
Home page provisions: a. Create a new project. b. List all projects. c. View a project.
Detailed project view should include: a. Project title (Editable). b. List of todos with description, date, and completion status. c. Actions to Add/Update/Remove a todo. d. Mark a todo as pending or complete. e. Action to export summary as a secret gist.
Application should save the exported gist file to the local system (as markdown).
Adherence to proper code conventions and style guide (package, names, indentation, etc.).
Secret gist template/format example provided.
