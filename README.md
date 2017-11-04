# splitz ease &middot; [![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

## Overview
Splitzease is an application that makes it easy for people to split items on a reciept. It's easy:
1. Select a picture
2. Confirm your totals
3. Specify the number of people in your party
4. Add tip
5. Send out Venmo payment requests to your party

![Splitzease Demo](./demo/splitzease.gif "Splitzease Demo")

The application is built with React Native and uses OCR technology to scan a reciepts for totals. Due to the limitations of the OCR library, the app currently runs on an Andriod build.

### Collaborators

* Hovsep Agop - [@hovsepa](https://github.com/hovsepa)
* Jason Messer- [@jrmesser](https://github.com/jrmesser)
* Narin Sundarabhaya - [@ricopella](https://github.com/ricopella)

### Packages Used

* [Node.JS](https://www.npmjs.com/)
* [MongoDB](https://www.npmjs.com/package/mongodb)
* [Express](https://www.npmjs.com/package/express)
* [axios](https://www.npmjs.com/package/axios)
* [firebase](https://www.npmjs.com/package/firebase)
* [native-base](https://www.npmjs.com/package/native-base)
* [react](https://www.npmjs.com/package/react)
* [react-native](https://www.npmjs.com/package/react-native)
* [react-native-communications](https://www.npmjs.com/package/react-native-communications)
* [react-native-image-picker](https://www.npmjs.com/package/react-native-image-picker)
* [react-native-router-flux](https://www.npmjs.com/package/react-router-flux)
* [react-native-tesseract-ocr](https://www.npmjs.com/package/react-native-tesseract-ocr)
* [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)
* [react-native-redux](https://www.npmjs.com/package/redux)
* [Heroku](https://www.npmjs.com/package/heroku)

### APK File

Coming Soon...

### How to run it

**Please Note:** Due to limitations of [Tesseract React-Native OCR](https://github.com/jonathanpalma/react-native-tesseract-ocr) this application only works on Andorid devices.

1. `git clone https://github.com/ricopella/splitz-ease` the repository to your local computer
2. `git bash` into the directory created by the clone
3. Run `npm install`
4. Run `react-native link`
5. Start Android-Studio Emulator - Nexus 5X API 23
6. In terminal run: `react-native run-android` 

### History
Modified on October 12th 2017
Created on September 25th 2017





