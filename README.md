<br>
<div align="center">
    <a href="https://github.com/varun2430/realty_advisor/commits/main/"><img alt="GitHub commits" src="https://img.shields.io/github/commit-activity/t/varun2430/realty_advisor/main?style=for-the-badge"></a>
    <a href="https://github.com/varun2430/realty_advisor/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/varun2430/realty_advisor?color=brightgreen&label=issues&style=for-the-badge"></a>
    <a href="https://github.com/varun2430/realty_advisor/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/varun2430/realty_advisor?style=for-the-badge"></a>
    <a href="https://www.linkedin.com/in/varun-kadkade-7359aa214/"><img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555"></a>
</div>
<br>

<br />
<div align="center">
  <a href="https://github.com/varun2430/realty_advisor">
    <img src="readme_assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">RealtyAdvisor</h3>

  <p align="center">
    An AI enhanced real estate platform
    <br />
    <br />
    <a href="https://drive.google.com/file/d/1LErZFkU1LhsLHqkDMg0mZ27-DTZJ2MoS/view?usp=sharing">View Demo</a>
    ·
    <a href="https://github.com/varun2430/realty_advisor/issues/new?labels=bug">Report Bug</a>
    ·
    <a href="https://github.com/varun2430/realty_advisor/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

## About The Project

<div align="center">
    <img alt="RealtyAdvisor Demo Gif" src="readme_assets/demo.gif">
</div>

RealtyAdvisor is an AI-enhanced real estate platform that leverages artificial intelligence to predict property prices. This enables sellers to more accurately price their properties and empowers buyers to make informed decisions based on the predicted price compared to the actual price set by the seller. Additionally, RealtyAdvisor aims to integrate blockchain technology to ensure data transparency and security.

### Built With

The following are the list of frameworks/libraries used in this project.

<div align="center">
    <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
    <img alt="Express" src="https://img.shields.io/badge/Express-404d59?style=for-the-badge&logo=express&logoColor=white">
    <img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-00C7B7?style=for-the-badge&logo=fastapi&logoColor=white">
    <img alt="PyTorch" src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white">
    <img alt="Solidity" src="https://img.shields.io/badge/Solidity-757AB2?style=for-the-badge&logo=solidity&logoColor=white">
</div>

## Getting Started

This is a guide on how to set up the project locally. Follow these steps to get a local copy up and running.

### Prerequisites

Ensure you have the following installed:

- [Node.js LTS](https://nodejs.org/)
- [Python 3](https://www.python.org/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/varun2430/realty_advisor.git
   ```

2. Setup the Backend:

   ```sh
   cd backend
   npm install
   ```

   Create a .env file in the backend directory and set the required environment variables:

   ```sh
   MONGO=""
   JWT_SECRET=""
   ```

   Start the Express server using nodemon:

   ```sh
   npm run dev
   ```

3. Setup the Frontend:
   ```sh
   cd frontend
   npm install
   ```
   Create a .env file in the frontend directory and set the required environment variables:
   ```sh
   VITE_NODE_API_URL=""
   VITE_PYTHON_API_URL=""
   ```
   Start the development server:
   ```sh
   npm run dev
   ```

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the GPL-3.0 License. See `LICENSE` for more information.
