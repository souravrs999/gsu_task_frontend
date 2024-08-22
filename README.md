# GSU Task Frontend

## Overview

GSU Task Frontend is a web application built with Next.js that provides a user-friendly interface for managing tasks. The frontend interacts with the backend API to perform various operations such as creating, updating, and deleting tasks. This project showcases best practices in modern frontend development using React and TypeScript.

## Features

- **User Authentication**: Sign up, log in, and manage user sessions.
- **Task Management**: Create, view, edit, and delete tasks.
- **Real-time Updates**: Receive real-time updates for task changes.
- **Responsive Design**: Accessible and functional across different devices and screen sizes.

## Technologies

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: Superset of JavaScript that adds static types.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: For styling components.

## Installation

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn

### Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/souravrs999/gsu_task_frontend.git
   cd gsu_task_frontend
   ```

2. **Install Dependencies**

Using npm:
```bash
npm install
```
Or using yarn:
```bash
yarn install
```
3. **Environment Variables**

Create a .env.local file in the root directory of the project and add your environment variables. Example:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

4. **Run the Development Server**
```bash
npm run dev
```
Or using yarn:
```bash
yarn dev
```

Visit http://localhost:3000 in your browser to see the application.

## Usage
- **Sign Up / Log In**: Navigate to the authentication pages to create an account or log in.
- **Manage Tasks**: Use the dashboard to manage your tasks, including creating new ones, updating existing tasks, and deleting them.

## Project Structure
- **pages/**: Contains the application's pages and routing logic.
- **components/**: Reusable React components.
- **styles/**: CSS modules or styled components.
- **public/**: Static files such as images.
- **types/**: TypeScript type definitions.