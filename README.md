# Calculator

Simple calculator application created with use of [React](https://reactjs.org/), [Electron](https://electronjs.org/) and [math.js](http://mathjs.org/). Available to build on **Windows**, **Linux** and **Mac OS**. 

Supports more complex operations with brackets and percentages with following mathematical actions:

- adding;
- subtraction;
- multiplication;
- division.

## Build instructions:

Basics:

- `git clone https://github.com/ktrzos/calculator`
- `cd calculator`
- `yarn install`

And now there are two options. Application can be run in the browser or as separate desktop application. Pick your choice.

**Start in browser:**

- `yarn start`
- go to [http://localhost:3000](http://localhost:3000)

**Building desktop version:**

- **Windows**: `yarn package-win`<br />
  **Mac OS**: `yarn package-mac`<br />
  **Linux**: `yarn package-linux`
- When building is done, executables will be available in `./release-builds/` directory.

**Issues with Windows build:**

To properly build Windows version on non-windows OS, [Wine](https://winehq.org) 
must be installed. This package is **above 700MB weight**, so if you have no space 
and this app build will be for only personal use only, 
try [electron-packager-dummy-wine][dummy-wine] workaround.

## Additional

Articles that helped me with development:

- [How to build a Desktop Application with Electron and React](https://codeburst.io/how-to-desktop-application-with-electron-and-react-b606aa3cb529)
- [Electron Packager Tutorial](https://www.christianengvall.se/electron-packager-tutorial)
- [Electron App Tutorial](https://www.youtube.com/watch?v=kN1Czs0m1SU)
- [Building Reusable React Components](https://blog.bitsrc.io/building-reusable-react-components-1465a2dccc13)

## Licence

This software is published under the MIT License.

[dummy-wine]: https://github.com/rahatarmanahmed/electron-packager-dummy-wine