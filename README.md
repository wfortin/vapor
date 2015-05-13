[![Build Status](https://img.shields.io/travis/Coveo/styleguide.svg?style=flat-square)](https://travis-ci.org/Coveo/styleguide)
[![dev-dependencies](https://img.shields.io/david/dev/Coveo/styleguide.svg?style=flat-square)](https://github.com/Coveo/styleguide/blob/master/package.json)
[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/Coveo/styleguide/blob/master/LICENSE)

Coveo UI StyleGuide
===================

Coveo StyleGuide is a collection of UI components used in Coveo's Cloud Services administration console. All components and their documentation is [available here](http://coveo.github.io/styleguide/)

It is widely inspired by [Bootstrap 3.0](https://github.com/twbs/bootstrap) and borrows some of its components.

The project is at its early stages, some components can still have _lots_ of breaking changes.


# Compiling
Make sure you have Node JS and NPM installed.
Run `npm install` to get the required dependencies.

### Styleguide

To compile the whole styleguide, run `npm run styleguide`.
The compiled styleguide will be available in the `/styleguide` folder.

### Library

If you prefer simply referencing the generated styleguide in one of your project,
you can run `npm run compile` and retrieve the files in the `/target/package` folder.

# License

Coveo StyleGuide is distributed under MIT license.

Copyright (c) 2015 Coveo

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
