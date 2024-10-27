An embeddable back arrow script tag.

<image src="https://github.com/purarue/back-arrow-script/blob/master/example.png?raw=true" />

(on <https://purarue.xyz/feed/>)

Made this for a couple of my websites which are hosted as subprojects on my website

To build, `yarn && yarn check && yarn build`, outputs to `back-arrow-bundle.js`

Add that as a script tag to the bottom of your `<body>`

```html
<script src="/path/to/back-arrow-bundle.js"></script>
```

That adds the back arrow to the top left of the page

I host a version at <https://purarue.xyz/p/back-arrow-bundle.js>

To configure, uses meta tags, like:

```html
<head>
  ...
  <!-- on hover, where to link to, and the color -->
  <meta property="ba:title" content="back home" />
  <meta property="ba:url" content="https://mywebsite.com/home" />
  <meta property="ba:color" content="#fd6c6c" />
</head>
```

To customize positioning further, can overwrite [the default CSS](https://github.com/purarue/back-arrow-script/blob/9c0f9b8acbad38cae2a4fbb86ed888ce82de4137/index.ts#L36-L49) using `!important`, like:

```css
.back-arrow {
  margin-top: 0.5rem !important;
  margin-left: 0.5rem !important;
  top: 60px !important;
  z-index: 9999 !important;
}
```
