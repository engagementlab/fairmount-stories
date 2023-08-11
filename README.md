## Quickstart

#### Installation
* In your local repo run `pnpm install` or `npm install`

## Development

```bash
npm run dev
```

Change the script in `package.json` to `"dev": "svelte-kit dev --host"` to test on your local network on a different device.

## Deploy
```bash
npm run build
```

This generates a directory called `build` with the statically rendered app.

A shortcut for github pages:
```bash
make github
```

## Style

There are a few stylesheets included by default in `src/styles`. Refer to them in `app.css`, the place for applying global styles.

For variable parity in both CSS and JS, modify files in the `properties` folder using the [Style Dictionary](https://amzn.github.io/style-dictionary/) API.

Run `npm run style` to regenerate the style dictionary.

#### Some css utility classes in reset.css
* `.sr-only`: makes content invisible available for screen reader
* `.text-outline`: adds a psuedo stroke to text element

### Custom Fonts
For locally hosted fonts, simply add the font to the `static/assets` folder and include a reference in `src/styles/font.css`, making sure the url starts with `"assets/..."`.

## Google Docs and Sheets

* Create a Google Doc or Sheet
* Click `Share` -> `Advanced` -> `Change...` -> `Anyone with this link`
* In the address bar, grab the ID - eg. "...com/document/d/**1IiA5a5iCjbjOYvZVgPcjGzMy5PyfCzpPF-LnQdCdFI0**/edit"
* paste in the ID above into `google.config.js`, and set the filepath to where you want the file saved
* If you want to do a Google Sheet, be sure to include the `gid` value in the url as well

Running `npm run gdoc` at any point (even in new tab while server is running) will fetch the latest from all Docs and Sheets.

## Structural Overview

### Pages
The `src/routes` directory contains pages for your app. For a single-page app (most cases) you don't have to modify anything in here. `+page.svelte` represents the root page, think of it as the `index.html` file. It is prepopulated with a few things like metadata and font preloading. It also includes a reference to a blank slate component `src/components/Index.svelte`. This is the file you want to really start in for your app.


## Pre-loaded helpers

### Components

Located in `src/components`.

```js
// Usage
import Example from "$components/Example.svelte";
```


### Helper Components

Located in `src/components/helpers`.

```js
// Usage
import Example from "$components/helpers/Example.svelte";
```

### Stores

These are located in `src/stores`. You can put custom ones in `src/stores/misc.js` or create unique files for more complex ones.

```js
// Usage
import example from "$stores/example.js";
import { example } from "$stores/misc.js";
```