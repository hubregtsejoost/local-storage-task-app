# Local Storage Task App

A simple task application that stores the tasks in local storage and can be updated by marking a task as completed.

## Features

- Create new tasks

- Mark tasks as complete/incomplete

- Delete tasks

- Stores tasks and task status in local storage

- "Form validation" so you can't create multiple open tasks at once and have to save the current open task to create another task.

## Getting Started

### Prerequisites

- Just any browser will do.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hubregtsejoost/notes-app.git
```

2. Navigate to the project directory:

```bash
cd notes-app
```

3. Open `index.html` in your browser or use a local server to run the application.

## Usage

1. Click the "+" button to add a new task

2. Enter your task in the input field

3. Click the checkmark icon to save the task locally

4. Click the circle icon to mark a task as complete

5. Click the minus icon on the right to delete a task

## Project Structure

```
notes-app/
├── app/
│   └── script.js      # Main JS functionality
├── styles/
│   └── main.css       # CSS styles
└── index.html         # Main HTML file
```

## Features in Detail

### Task Management

- Create new tasks with a single click

- Edit tasks before saving

- Able to mark a task as completed

- Delete tasks

### Data Persistence

- All tasks are automatically saved to the browser's local storage

- Tasks remain available after page refresh or browser restart

- No server-side storage required

## License

This project is open source and available under the [MIT License](LICENSE).
