An embeddable back arrow script tag.

Made this for a couple of my websites which are hosted as subprojects on my website

To build, `yarn && yarn check && yarn build`, outputs to `back-arrow-bundle.js`

Add that as a script tag to the bottom of your `<body>`

```html
<script src="/path/to/back-arrow-bundle.js"></script>
```

I host a version at <https://sean.fish/p/back-arrow-bundle.js>

To configure, uses meta tags, like:

```html
<head>
  ...
  <!-- on hover, where to link to, and the color -->
  <meta property="ba:title" content="back home" />
  <meta property="ba:url" content="/" />
  <meta property="ba:color" content="#fd6c6c" />
</head>

```

To customize positioning further, can overwrite [the default CSS](https://github.com/seanbreckenridge/back-arrow-script/blob/9c0f9b8acbad38cae2a4fbb86ed888ce82de4137/index.ts#L36-L49) using `!important`, like:

```css
.back-arrow {
  margin-top: 0.5rem !important;
  margin-left: 0.5rem !important;
  top: 60px !important;
  z-index: 9999 !important;
}
```
