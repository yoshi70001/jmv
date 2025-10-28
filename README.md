# JUMAVI - Juventud Mariana Vicentina

This is a web application for JUMAVI (Juventud Mariana Vicentina), a global youth movement. The application showcases the organization's history, mission, projects, and news. It also provides a contact form for interested individuals to get in touch.

## Technologies Used

*   **Frontend:**
    *   React
    *   Vite
    *   TypeScript
    *   Tailwind CSS
*   **Dependencies:**
    *   `react-router-dom` for routing
    *   `lucide-react` for icons

## Features

*   **Responsive Design:** The application is fully responsive and works on different screen sizes.
*   **Component-Based Architecture:** The application is built using a component-based architecture, making it easy to maintain and scale.
*   **Routing:** The application uses `react-router-dom` for routing, allowing users to navigate between different pages.
*   **Admin Dashboard:** A password-protected admin dashboard to manage news and projects.
*   **Contact Form:** A contact form for users to send messages to the organization.

## Installation and Usage

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/jmv.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

## Project Structure

```
jmv/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── AdminLogin.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── FourNotes.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── International.tsx
│   │   ├── Mission.tsx
│   │   ├── News.tsx
│   │   └── Projects.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── ...
├── package.json
└── vite.config.ts
```
