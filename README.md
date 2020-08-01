# Omnibox

[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) 

Omnibox is a solution for power and network supply.In emergency cases, power and network could be shut down, So the user  just need to open the App and search for the nearest Omnibox ,of course offline should be available.
Use your map to navigate the target box and scan the QR code to show that you are qualified with Omnibox Community and you would get a  battery supply.
Omnibox would also have hot-spot  to help those who lost network connection.
You can browse the information and send message outside  so that you could seek help instantly.



## Contents

1. [Short description](#short-description)
1. [Demo video](#demo-video)
1. [The architecture](#the-architecture)
1. [Project roadmap](#project-roadmap)
1. [Getting started](#getting-started)
1. [Running the tests](#running-the-tests)
1. [Live demo](#live-demo)
1. [Built with](#built-with)
1. [Contributing](#contributing)
1. [Versioning](#versioning)
1. [Authors](#authors)
1. [License](#license)

## Short description

### What's the problem?

According to the World Health Organization, around 160 million people are affected by natural disasters. And one of the biggest issues that affect people, is the loss of electricity, and internet, which leads to the losses of  communications with the outside.

A report sponsored by an agency of the United States Government, named “ value of internet in emergency responses” stated that “one of the advantages (of internet) is that a great deal of real-time information can be made available to a large audience”, which is exactly what people need right after a natural disaster happens. 

### How can technology help?

For example, the internet can help the outside to receive the listings of people who are affected by disasters and their locations”, knowing their status, then, give accurate rescue plans case by case as fast as possible. 

Whe

### The idea

So, how are we going to prevent people from losing connections from the outside, during or after the natural disasters. Here, we introduce you, the omnibox.

Basically we use the device Omnibox to provide power and network service .
Usually we encourage the community to deploy our Omnibox to earn rent. When a disaster strikes, people would find it easy to get an Omnibox nearby so that they can get access to network and power as soon as possibile.

## Demo video

[![Watch the video](https://hacktech.oss-us-west-1.aliyuncs.com/bgm.png)](https://youtu.be/_i510TkgiO0)

## The architecture

![arch](/Users/caocao123/omnibox/arch.png)

1. The user open App and find nearest Omnibox
2. The user scan the QR code to request for a Powerbank( IBM Cloud Functions )
3. Omnibox request backend of Device Management (IBM Watson IoT Platform ) to eject the Powerbank
4. When the powerbank be returned,Omnibox would info the backend that order has been done.

## Project roadmap

![Roadmap](roadmap.jpg![roadmap](/Users/caocao123/omnibox/roadmap.png)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```bash
dnf install wget
wget http://www.example.com/install.sh
bash install.sh
```

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

## Live demo

You can find a running system to test at [callforcode.mybluemix.net](http://callforcode.mybluemix.net/)

## Built with

* [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
* [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results) - The compute platform for handing logic
* [**IBM Watson IoT Platform**]() - The IoT Platform for control IoT Devices
* [IBM API Connect](https://cloud.ibm.com/catalog?search=api%20connect#search_results) - The web framework used
* [Flutter](https://flutter.dev/) - The App framework used
* [mosca](https://github.com/moscajs/mosca) - A MQTT broker as a module
* [egg.js](https://eggjs.org/en/index.html) - The backend framework used

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **JIACHEN(THOMAS) TAO** - *Initial work & frontend developer* - [thomastao0215](https://github.com/thomastao0215)
* **YEQING  XU** - *backend  developer* - [Invv](https://github.com/invv)
* **XIANGJIE(Chauncery) ZHU** - *graphic designer - [Chauncery](https://github.com/chaunceryzhu)

See also the list of [contributors](https://github.com/Code-and-Response/Project-Sample/graphs/contributors) who participated in this project.

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details