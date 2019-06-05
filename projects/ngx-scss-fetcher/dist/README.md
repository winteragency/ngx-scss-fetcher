# ngx-scss-fetcher

[![Latest Stable Version](https://img.shields.io/npm/v/ngx-scss-fetcher.svg)](https://www.npmjs.com/package/ngx-scss-fetcher) [![Total Downloads](https://img.shields.io/npm/dt/ngx-scss-fetcher.svg)](https://npm-stat.com/charts.html?package=ngx-scss-fetcher) [![License](https://img.shields.io/github/license/winteragency/ngx-scss-fetcher.svg)](https://github.com/winteragency/ngx-scss-fetcher) [![Made by WINTER](https://img.shields.io/badge/made%20by-%E2%9D%84%20WINTER-blue.svg)](https://winteragency.se)

This is a simple Angular 7+ service that gives you access to SCSS-variables in TypeScript.

## Installation

Add this library as a dependency to your project:

`npm install ngx-scss-fetcher`

## Usage

First import the service in your components:

```typescript
import { Component } from '@angular/core';
import { ScssFetcherService } from 'ngx-scss-fetcher';

@Component({
    selector: 'app-component',
    template: '<h1>{{value}}</h1>'
})
export class AppComponent {

    private value: string = fetcher.get('testColor');

    constructor(private fetcher: ScssFetcherService) {}

}
```

Then add the following in styles.scss

```scss

@import '~ngx-scss-fetcher/main.scss'

$color: #f0f0f0;

@include scss-fetcher('testColor', $color);

meta.fetcher-testColor {
    font-family: '/' + $color + '/';
}
```

## Methods

There is only one method in the `ScssFetcherService`:

`ScssFetcherService.get()`

## License

The MIT License

Copyright (c) 2019, WINTER AGENCY

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.