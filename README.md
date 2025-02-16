# Feedback Slide Deck App

Welcome to the Feedback Slide Deck app! This project leverages [Next.js](https://nextjs.org/) and [Reveal.js](https://revealjs.com/) to create powerful and beautiful presentations with React.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Local Setup](#local-setup)
- [Contributing](#contributing)

## Description
This project combines the best of both worlds: the simplicity and performance of Next.js with the sleek presentation capabilities of Reveal.js. It's perfect for creating engaging presentations that can be hosted as a web application.

## Features
- Create and customize presentations using React components.
- Navigate slides using keyboard or mouse.
- Embed multimedia content seamlessly.
- Utilize various themes and transitions provided by Reveal.js.

## Technologies Used
- [Next.js](https://nextjs.org/): A React framework for building fast, user-friendly web applications.
- [Reveal.js](https://revealjs.com/): A framework for creating beautiful presentations using HTML.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/)
- npm (comes with Node.js)

### Local Setup

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/feedback-slide-deck.git
   cd feedback-slide-deck
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Initialize the data:**
   ```bash
   cp ./data/employees.sample.ts ./data/employees.ts
   ```
   Modify the file [`employees.ts`](./data/employees.ts)

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Contributing

We welcome contributions to improve and expand this project. Here's how you can contribute:

1. **Fork the repository:**
   Click the "Fork" button at the top right corner of the repository page.

2. **Clone your fork:**
   ```bash
   git clone https://github.com/your-username/feedback-slide-deck.git
   cd feedback-slide-deck
   ```

3. **Create a new branch:**
   ```bash
   git checkout -b feature-branch-name
   ```

4. **Make your changes:**
   Develop your feature or fix a bug. Ensure your code follows the project's coding style and standards.

5. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add new feature or fix description"
   ```

6. **Push to your fork:**
   ```bash
   git push origin feat/feature-branch-name
   ```

7. **Create a pull request:**
   Go to the original repository and click "New Pull Request". Provide a detailed description of your changes.
