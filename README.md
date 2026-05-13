# egypt-view

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
* home page => hero section => remove router link from the hero image
* don't use css ids
* wassa3 el denia
* ServicesDropdown => add toggleOpen to every route call and move it from the parent dev to the first child
* ServicesDropdown => add <div v-if="isDropdownOpen" class="fixed inset-0 z-10" @click="toggleOpen" /> => z-20 on the service parent div, to make the dropdown toggle when click outside
* every route change should scroll up
* add router scroll behaviour top 0
* add egypt-view as baseURL only in production, use vite mode to set it in vite config
* home page => Services section => labels are links but span across the entire div, change that and add a hover effect to the labels
* Meet Our Team add hekmat photo
* Contact Info research if should be links or not
* remove Coverage from team
* add v-bind="$attrs" for each svgicon and defineOptions({ inheritAttrs: false }); for the iconsvg.vue
* send every IconSVG the classes it needs from the parent
-