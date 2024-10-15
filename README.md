# Dappier Job Application API

## Overview

The Dappier Job Application API is a RESTful service built using NestJS, designed to power the Dappier job application system. It enables users to upload resumes and job descriptions, which are then processed by an integrated RAG (Retrieve and Generate) model to provide actionable feedback and generate interview questions. The API is configured to securely interact with a Flask backend hosting the RAG model and utilizes AWS S3 and MongoDB for data storage solutions.

## Features

- **Cloud-Based Storage:** The system leverages AWS S3 for efficient resume and job description file storage.
  
- **Robust Authentication:** Implements JWT-based authentication for secure login and signup processes, ensuring user-wise authorization. Passwords are securely hashed before database storage.

- **Comprehensive API Architecture:** The NestJS project is structured with clearly defined modules, controllers, services, repositories, and domain entities for optimal performance and scalability.

- **User Management:** Features comprehensive user management through a dedicated User module, which includes a repository and controller. Has facilities for user sign-up and login, enhanced by password hashing, and utilizes a UserContext decorator for extracting user information from authentication tokens.

- **Flexible File Handling:** Incorporates a File Upload module and Resume module to manage and control file uploads and resume-specific operations, respectively. Resumes and user entities are timestamped with creation and update dates.

- **Server-Side Communication & Authentication:** Employs HMAC signatures for secure server-to-server communication between the NestJS backend and the Flask AI model backend.

- **AI-Powered Feedback & Question Generation:** Deploys endpoints for chat completion and resume training, interacting with a Flask-hosted AI model. The API provides dynamically generated feedback and interview questions based on uploaded data.

- **Content Transformation Utilities:** Includes utilities for converting object notation from snake_case to camelCase and vice versa to maintain consistency across different system components.

- **Continuous AI Model Training:** The API supports resume training with the AI model, storing only successful training outcomes in the database while providing user notifications for failed training attempts, prompting re-uploads.

This comprehensive suite of features not only streamlines the job application process but also enhances user interactions through intelligent feedback generation and secure data management practices.

## Project Structure

```plaintext
src
├── app.module.ts
├── config
│   ├── database.config.ts
│   ├── jwt.config.ts
│   └── s3-client.config.ts
├── controllers
│   ├── auth
│   │   ├── auth.controller.spec.ts
│   │   └── auth.controller.ts
│   ├── file-upload
│   │   ├── file-upload.controller.spec.ts
│   │   └── file-upload.controller.ts
│   ├── resume
│   │   ├── resume.controller.spec.ts
│   │   └── resume.controller.ts
│   └── user
│       ├── user.controller.spec.ts
│       └── user.controller.ts
├── decorators
│   ├── allow-anonymous.decorator.ts
│   ├── index.ts
│   └── user-context.decorator.ts
├── domain
│   ├── constants
│   │   └── index.ts
│   ├── entities
│   │   ├── index.ts
│   │   ├── resume.ts
│   │   └── user.ts
│   ├── index.ts
│   ├── requests
│   │   ├── chat-completion-request.ts
│   │   ├── chat-history-request.ts
│   │   ├── create-resume-request.ts
│   │   ├── create-user-request.ts
│   │   ├── index.ts
│   │   ├── login-request.ts
│   │   ├── signup-request.ts
│   │   └── train-model-request.ts
│   ├── response
│   │   ├── chat-completion-response.ts
│   │   ├── file-upload-response.ts
│   │   ├── index.ts
│   │   └── train-model-response.ts
│   └── types
│       ├── index.ts
│       └── user-context.ts
├── guards
│   └── auth
│       ├── auth.guard.spec.ts
│       └── auth.guard.ts
├── main.ts
├── modules
│   ├── auth.module.ts
│   ├── file-upload.module.ts
│   ├── resume.module.ts
│   └── user.module.ts
├── repositories
│   ├── resume.repository.ts
│   └── user.repository.ts
├── services
│   ├── auth
│   │   ├── auth.service.spec.ts
│   │   └── auth.service.ts
│   ├── aws-s3
│   │   ├── aws-s3.service.spec.ts
│   │   └── aws-s3.service.ts
│   ├── dappier-bot
│   │   ├── dappier-bot.service.spec.ts
│   │   └── dappier-bot.service.ts
│   ├── hmac
│   │   ├── hmac.service.spec.ts
│   │   └── hmac.service.ts
│   └── resume
│       ├── resume.service.spec.ts
│       └── resume.service.ts
├── test.txt
└── utils
    └── case-converter.ts
```

## Getting Started

Follow the steps below to get the API up and running on your local machine.

## Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (optional for running MongoDB locally)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Amaan09/dappier-job-app-api.git
   cd dappier-job-app-api
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configuration:**

   Create a `.env` file in the root directory and populate it with the following variables:

   ```plaintext
   #DATABASE
   MONGO_CONNECTION_STRING=

   #S3
   S3_ACCESS_KEY=
   S3_SECRET_ACCESS_KEY=
   S3_REGION=
   S3_BUCKET_NAME=

   #JWT
   JWT_SECRET=

   #DAPPIER_BOT
   DAPPIER_BOT_BASE_URL=http://127.0.0.1:8000/
   DAPPIER_BOT_API_SECRET=
   ```

## Usage

1. **Start the Application:**

   ```bash
   npm start
   ```

2. **Access the API:**

   Once the application is running, you can start making requests to the API endpoints for uploading resumes and job descriptions, and receiving feedback or questions generated by the RAG model.

3. **Testing:**

   Run the test suite to ensure your installation is correct:

   ```bash
   npm test
   ```

--- 

This project is part of a larger system including the [Dappier Job Application Bot](https://github.com/Amaan09/dappier-job-app-bot) for RAG model processing and the [Dappier Job Application UI](https://github.com/Amaan09/dappier-job-app-ui) as the frontend interface.
```
