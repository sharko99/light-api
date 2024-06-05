# 🌟 LightAPI - Lightweight Express Boilerplate

Welcome to **LightAPI**, the most modular, easy-to-use, and feature-rich Express API template! Whether you're a beginner or an experienced developer, LightAPI provides a solid foundation to kickstart your project.

## 📝 Change Log
<sub>Date format: YYYY-MM-DD</sub>

### 🚀 1.0.3 - 2024-06-05
- 🐰 Added Bun compatibility ([kush-js](https://github.com/kush-js))

### 🚀 1.0.2 - 2024-06-04
- 🔧 Added a middleware to disable routes easily: `app.get('/register', disabled, (req, res) => {` => This route now returns a 403 error

### 🚀 1.0.1 - 2024-06-04
- 🐘 Added postgreSQL support. Credits: [kush-js](https://github.com/kush-js)
- 🔄 Changed the default port to 5005
- 🔒 Added a field in the .env to hide user id from userHandler token
- 📜 Added Authorization header in the routes comments examples
- ✅ Protected routes and MySQL2 functions have been tested and are working
- 🧪 Still need a complete test for postgreSQL (Your PR are welcome :))

### 🚀 1.0.0 - 2024-06-03
- 🎉 Initial release


## Features

LightAPI comes packed with a variety of powerful features:

- 🔄 **Routes handling**: Easily define and manage your API routes.
- 🔐 **User authentication with JWT**: Secure user authentication out of the box.
- 💾 **MySQL2 / Postgres basic functions**: Simple and efficient MySQL2 and Postgres integration.
- 🐘 **PostgreSQL support**: Switch between MySQL2 and Postgres with ease.
- 📧 **Nodemailer included**: Send emails effortlessly with Nodemailer.
- 🔧 **Configuration with DotEnv**: Manage environment variables with ease.
- 📝 **Winston logging**: Robust logging for better debugging and monitoring.
- 📡 **CORS enabled**: Cross-Origin Resource Sharing for flexible API usage.
- 🚫 **Rate limiting**: Protect your API from abuse with built-in rate limiting.
- 🔍 **Joi validation**: Validate incoming requests with Joi.
- 🛡️ **Middleware ready**: Pre-configured middleware for common tasks.
- 📦 **Modular structure**: Highly modular design for easy customization and extension.
- 🔒 **Easy route disabling**: Disable routes easily with middleware.
- 🐰 **Bun compatibility**: Works with Bun out of the box. Autodetects the runtime runner.
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
    Or with Bun
    ```sh
        bun install
    ```

3. Copy the `.env.example` file to `.env` in the root directory and configure your environment variables:
    ```bash
        # Application settings
        PORT=5005
        JWT_SECRET=your_jwt_secret

        # Light API settings
        HIDE_USERID=true # Hide user id in the user token

        # Database Type <mysql or postgres>
        DBTYPE=mysql

        # MySQL2 settings
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=password
        DB_NAME=testdb

        # PostGres settings
        PGHOST=localhost
        PGUSER=root
        PGPASSWORD=PASSWORD
        PGNAME=testdb

        # NodeMailer settings
        EMAIL_HOST=smtp.example.com
        EMAIL_PORT=587
        EMAIL_SECURE=false
        EMAIL_USER=your_email@example.com
        EMAIL_PASS=your_email_password
        EMAIL_FROM='Your Name <your_email@example.com>'
    ```

#### Database Tables Setup

For your comfort, here are two queries that you can use on your database to create a LightAPI compatible users table:

**Mysql:**

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

**Postgres:**

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trigger and function to update the updated_at field automatically
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
```

### Usage

1. Start the server:
    ```sh
        node app.js
    ```
    with Bun:
    ```sh
        bun run app.js
    ```

Your API will be running on http://localhost:5005.

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
    │   ├── disabled.js
    │   └── authenticate.js
    ├── runtime/
    │   └── runtime.js
    ├── node_modules/
    ├── package.json
    ├── runtime/
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
• disabled.js: Middleware to disable routes. \
• routes/: Directory containing route definitions. 

## Contributing
We welcome contributions from the community! Please fork the repository and submit a pull request.

- [kush-js](https://github.com/kush-js): Database engine switcher (interoperability) & Postgres integration
- [u/MinuteScientist7254](https://www.reddit.com/user/MinuteScientist7254/): Asked the feature to hide userid from token
- [kush-js](https://github.com/kush-js): Added Bun compatibility

## License
This project is licensed under the MIT License.

## Contact
If you have any questions, feel free to open an issue or contact us at logan+lightapi@creativehorizons.net

## My portfolio

[Logan Bunelle](https://loganbunelle.com/en)
