# Docker Demo: A Full-Stack Microservices Application

![Built with Docker](https://img.shields.io/badge/Built%20with-Docker-blue?style=for-the-badge&logo=docker)

This project is a complete, three-tier web application built to demonstrate a modern polyglot (multi-language) microservices architecture using Docker and Docker Compose. It features a simple frontend that communicates with a Node.js backend, which in turn communicates with a Python backend worker to process data.

## What We Did: Project Architecture

The application is composed of three distinct services, each running in its own isolated Docker container:

1.  **Frontend Service (`frontend-service`)**: A static webpage built with **HTML, CSS, and JavaScript** and served by a high-performance **Nginx** web server. This is what the user interacts with in their browser.

2.  **Backend API (`node-service`)**: A "waiter" API built with **Node.js** and **Express**. It receives requests from the frontend, handles Cross-Origin Resource Sharing (CORS), and communicates with the Python worker service.

3.  **Backend Worker (`python-service`)**: A "chef" service built with **Python** and **Flask**. It performs a specialized task (processing input text) and returns the result. It only accepts connections from within the Docker network.

### Data Flow Diagram

```plaintext
[ User's Browser ]
       |
       | (Visits http://localhost)
       ▼
[ Frontend: Nginx Container (Port 80) ]
       |
       | (User clicks button, JavaScript sends API request)
       ▼
[ Backend API: Node.js Container (Port 3000) ]
       |
       | (Internal Docker Network Request)
       ▼
[ Backend Worker: Python Container (Port 5000) ]
