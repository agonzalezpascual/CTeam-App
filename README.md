# CTeam-App
Repositorio de la aplicación:
npx react-native start
npx react-native run-android
Expo:
npm install expo-cli --global
expo init NombreDelProyecto
Iniciar servidor de desarrollo:
cd NombreDelProyecto
npm start # si nos gusta usar npm
yarn start # si preferimos usar yarn
expo start # si queremos usar directamente el comando de expo


<div id="top"></div>
<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/agonzalezpascual/CTeam-App.svg?style=for-the-badge
[contributors-url]: https://github.com/agonzalezpascual/Best-README-Template/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/agonzalezpascual/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/agonzalezpascual/Best-README-Template/network/members

[stars-shield]: https://img.shields.io/github/stars/agonzalezpascual/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/agonzalezpascual/Best-README-Template/stargazers

[issues-shield]: https://img.shields.io/github/issues/agonzalezpascual/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/agonzalezpascual/Best-README-Template/issues

[license-shield]: https://img.shields.io/github/license/agonzalezpascual/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/agonzalezpascual/Best-README-Template/blob/master/LICENSE.txt

[product-screenshot]: assets/images/cardanocoin.png

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/agonzalezpascual/CTeam-App">
    <img src="assets/images/cardanocoin.png" alt="Logo" width="180" height="200">
  </a>

<h3 align="center">CTeam-App</h3>

  <p align="center">
    React Native cross-platform application/web focused on simplicity.
    <br />
    <a href="https://github.com/agonzalezpascual/CTeam-App"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/agonzalezpascual/CTeam-App">View Demo</a>
    ·
    <a href="https://github.com/agonzalezpascual/CTeam-App/issues">Report Bug</a>
    ·
    <a href="https://github.com/agonzalezpascual/CTeam-App/issues">Request Feature</a>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project
The ORION project seeks to create a service as accessible as possible, with its own wallet, easy to use and intuitive.
<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [Java](https://www.java.com/es/)
* [C++](https://isocpp.org/)
* [Objective-C++](https://es.wikipedia.org/wiki/Objective-C#Objective-C++)
* [JavaScript](https://nextjs.rg/)
* [Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011210)
* [ReactNative](https://reactnative.dev/)
* [Haskell](https://www.haskell.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

# Getting Started

## Installing dependencies

You will need Node, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

### Node, JDK

We recommend installing Node via Chocolatey, a popular package manager for Windows.

It is recommended to use an LTS version of Node. If you want to be able to switch between different versions, you might want to install Node via nvm-windows, a Node version manager for Windows.

React Native also requires Java SE Development Kit (JDK), which can be installed using Chocolatey as well.

Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:
  ```sh
  choco install -y nodejs-lts openjdk11
  ```
If you have already installed Node on your system, make sure it is Node 12 or newer. If you already have a JDK on your system, make sure it is version 11 or newer.
### Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

1. Install Android Studio from [https://developer.android.com/studio](https://developer.android.com/studio)
2. Install the _`Android 11 (R) SDK`_. Make sure the following items are checked when installing from the SDK Manager:
	
   ```sh
   Android SDK Platform 30
   ```
   ```sh
   Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
   ```
3. Select "SDK Tools" and check the box next to _`Show Package Details`_. Look for and expand the "Android SDK Build-Tools" entry, then make sure that _`30.0.2`_ is selected. Click "Apply".
4. Configure the `ANDROID_HOME` environment variable. The SDK is installed, by default, at the following location:
   ```js
   %LOCALAPPDATA%\Android\Sdk
   ```
5. Add platform-tools to Path
	```js
	%LOCALAPPDATA%\Android\Sdk\platform-tools
	```

<p align="right">(<a href="#top">back to top</a>)</p>


## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/agonzalezpascual/CTeam-App](https://github.com/agonzalezpascual/CTeam-App)

<p align="right">(<a href="#top">back to top</a>)</p>



## Acknowledgments

* [A mí](https://virusdestructordemundosmasivosequisde)
* [A mí otra vez](https://virusdestructordemundosmasivosequisde)
* [Yo de nuevo](https://virusdestructordemundosmasivosequisde)

<p align="right">(<a href="#top">back to top</a>)</p>

