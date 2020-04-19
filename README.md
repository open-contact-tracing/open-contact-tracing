<p align="center">
    <img width="400" src="https://raw.githubusercontent.com/open-contact-tracing/open-contact-tracing/master/assets/logo.svg?sanitize=true" alt="Logo">
  	<br><br>
    Open Source initiative for a complete Contact Tracing App and Backend based on the Apple/Google API
</p>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#tech">Tech</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#contributors">Contributors</a>
  <a href="#license">License</a>
</p>

## Introduction

Open Contact Tracing is a collaboration of individual professional designers,
app developers to create a great app and backend that can be deployed by
governments for contact tracing in the COVID-19 pandemic.

It is a purpose build app to just implement the framework as announced by
[Apple and Google](https://www.apple.com/covid19/contacttracing), which will be
publicly released in May 2019

Importantly we collect the mimimal amount of personal information so
registration will not be necessary.

The goal is to build an implementation of the
[open-source design prototypes that were made by a small group of designers, researchers and copywriters](https://twitter.com/Dennis_Kramer/status/1251464079610384386).

## Tech

This app is implemented using React-Native. It is a very lightweight app, with
an iOS and Android version. The API's are implemented using native code using
[react-native-contact-tracing](https://github.com/ericlewis/react-native-contact-tracing).

The backend tech has not been decided. The idea is to have a simple server:

- API endpoint to download the diagnosis keys
- Dashboard for medical professionals to generate a token to give to the
  infected person, so they are able to upload their diagnosis keys
- API endpoint for users to upload their diagnosis keys using a secure key

Given this needs to be massively scalable, I think
[Elixir](https://elixir-lang.org/) would a perfect match but also open for other
technologies.

## Getting started

### iOS

Install cocoapods dependencies

```bash
cd ios
pod install
```

Start the bundler

```bash
react-native start
```

Start the app in the simulator

```bash
react-native run-ios
```

### Android

Start the bundler

```bash
react-native start
```

Start the app in the simulator

```bash
react-native run-android
```

## Contributing

You are very welcome to contribute. To contribute please open an issue or PR,
and we will facilitate from there.

## License

The idea is to do this in the public domain we haven't decided what license is
best suited for this. It would be great if people can help out on deciding this.

## Contributors

Thanks to everyone who
[contributed](https://github.com/open-contact-tracing/open-contact-tracing/graphs/contributors)
to Open Contact Tracing!
