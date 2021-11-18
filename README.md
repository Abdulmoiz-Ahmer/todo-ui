<div id="top"></div>

<!-- PROJECT LOGO -->
<br />

  <h3 align="center">TODO-UI</h3>

  <p align="center">
    A todo application build with reactjs, typescript, clean code architecture and tdd
    <br />
    <br />
    <a href="http://todo.ui.cryptobros.site">View Demo</a>
    ·
    <a href="https://github.com/Abdulmoiz-Ahmer/todo-ui/issues">Report Bug</a>
    ·
    <a href="https://github.com/Abdulmoiz-Ahmer/todo-ui/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This application is based on the clean code architecture. The reason i prefer to use this architecture is because it makes change easier and in world of software only change is constant.

![](https://fullstackroyhome.files.wordpress.com/2019/03/cleanarchitecture.jpg)

Few words about the above architecture:

- Inner Layer
  Entities. Handles the creation and reading of our entities (todo).
  DB. Our choice of DB (in memory, MongoDB, SQL), this is independent of the model. Note that in Clean Architecture this is considered an outer layer framework, but for practical applications I find it easier to place it inner and have the data-access layer depend on it rather than injecting it in.

  Usecases: Defines the interaction or behavior of the system.

- Middle Layer
  Adapters. Handles transfer between the frontend and api (like an ORM).
  UseCases. As the name explains the use case are about the

- Outer Layer
  View and Containers. Represents the UI or interface (Web or CLI). It communicates only with the data-access layer. Views are dump components and containers have states related to the view.

For Deployment

- Husky pre-push to trigger tests
- CircleCI pipeline to trigger deployment on push
- Digital Ocean Droplet

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Nodejs](https://www.mongodb.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- [Nodejs](https://nodejs.org/en/download/)

- yarn
  ```sh
  npm install -g yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Abdulmoiz-Ahmer/todo-ui.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. To seed database run
   ```js
    yarn start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This repository has been used with a [todo backend api](http://todo.api.cryptobros.site/api/ping) and it's [repository.](https://github.com/Abdulmoiz-Ahmer/todo-api.git)

<p align="right">(<a href="#top">back to top</a>)</p>

## Testing

- Acceptance testing:
  Acceptance tests are in the tests/acceptance directory.
  Can be invoked with:

  ```js
  yarn test:acceptance
  ```

- Component:
  Component tests are in the tests/acceptance directory.
  Can be invoked with:

  ```js
    yarn test:component
  ```

- Unit testing:
  Component tests are in the tests/unit directory.
  Can be invoked with:

  ```js
    yarn test:unit
  ```

- Contract Driven Testing:

  ```js
    yarn test:contracts
  ```

Libraries used for testing:

- [Jest](https://www.npmjs.com/package/jest) for assertion.
- [React Testing Library](https://www.npmjs.com/package/@testing-library/react) for ui testing.
- [React Hooks Testing Library](https://www.npmjs.com/package/@testing-library/react-hooks) for custom hook testing.
- [Pact.io](https://www.npmjs.com/package/@pact-foundation/pact)

Note: To invoke all kind of tests use:

```js
 yarn test
```

<!-- CONTRIBUTING -->

## Contributing

Contributions of any kind are  
**greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [Abdulmoiz Ahmer]() - abdulmoiz1996@gmail.com

Project Link: [http://todo.ui.cryptobros.site](https://github.com/Abdulmoiz-Ahmer/todo-ui)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Clean code architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [CircleCI](https://circleci.com/)
- [Docker](https://www.docker.com/)
- [Digital Ocean Droplet](https://www.digitalocean.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://www.npmjs.com/package/jest)
- [Faker](https://www.npmjs.com/package/faker)
- [crossenv](https://www.npmjs.com/package/cross-env)
- [Husky](https://www.npmjs.com/package/husky)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
