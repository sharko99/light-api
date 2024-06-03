# LightAPI - Lightweight Express Boilerplate

Welcome to **LightAPI**, the most modular, easy-to-use, and feature-rich Express API template! Whether you're a beginner or an experienced developer, LightAPI provides a solid foundation to kickstart your project.

## Features

LightAPI comes packed with a variety of powerful features:

- 🔄 **Routes handling**: Easily define and manage your API routes.
- 🔐 **User authentication with JWT**: Secure user authentication out of the box.
- 💾 **MySQL2 / Postgres basic functions**: Simple and efficient MySQL2 and Postgres integration.
- 📧 **Nodemailer included**: Send emails effortlessly with Nodemailer.
- 🔧 **Configuration with DotEnv**: Manage environment variables with ease.
- 📝 **Winston logging**: Robust logging for better debugging and monitoring.
- 📡 **CORS enabled**: Cross-Origin Resource Sharing for flexible API usage.
- 🚫 **Rate limiting**: Protect your API from abuse with built-in rate limiting.
- 🔍 **Joi validation**: Validate incoming requests with Joi.
- 🛡️ **Middleware ready**: Pre-configured middleware for common tasks.
- 📦 **Modular structure**: Highly modular design for easy customization and extension.
- 🚀 **Works out of the box!**: Get up and running quickly with minimal configuration.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
    ```sh
        git clone https://github.com/yourusername/lightapi.git
        cd lightapi
    ```

2. Install dependencies:
    ```sh
        npm install
    ```

3. Copy the `.env.example` file to `.env` in the root directory and configure your environment variables:
    ```bash
        # Application settings
        PORT=3000
        JWT_SECRET=your_jwt_secret

        # MySQL2 settings
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=password
        DB_NAME=testdb

        # NodeMailer settings
        EMAIL_HOST=smtp.example.com
        EMAIL_PORT=587
        EMAIL_SECURE=false
        EMAIL_USER=your_email@example.com
        EMAIL_PASS=your_email_password
        EMAIL_FROM='Your Name <your_email@example.com>'
    ```

### Usage

1. Start the server:
    ```sh
        node app.js
    ```

Your API will be running on http://localhost:3000.

## Project Structure

```bash
    lightapi/
    ├── app.js
    ├── logger.js
    ├── classes/
    │   ├── htmlProcessor.js
    │   ├── mailer.js
    │   └── userHandler.js
    ├── db/
    │   ├── postgres.js
    │   ├── mysql.js
    │   └── db.js
    ├── routes/
    │   ├── index.js
    │   ├── log.js
    │   ├── user.js
    │   └── validation.js
    ├── middlewares/
    │   └── authenticate.js
    ├── node_modules/
    ├── package.json
    └── .env.example
    └── .gitignore
```

## Key Modules

• app.js: Entry point of the application. Sets up middleware and routes. \
• db.js: Database connection and basic functions using MySQL2 or Postgres. \
• logger.js: Configured Winston logger for application-wide logging. \
• mailer.js: Nodemailer setup for sending emails. \
• userHandler.js: User-related operations, including registration and login. \
• authenticate.js: JWT authentication middleware. \
• htmlProcessor.js: Functions to process HTML files and strings with placeholders. \
• routes/: Directory containing route definitions. \

## Contributing
We welcome contributions from the community! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
If you have any questions, feel free to open an issue or contact us at logan+lightapi@creativehorizons.net

## My portfolio

[Logan Bunelle](https://loganbunelle.com/)
