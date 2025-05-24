function waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(() => {
          if (document.querySelector(selector)) {
              resolve(document.querySelector(selector));
              observer.disconnect();
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}

(async function() {
  (await waitForElm('div.main-nowPlayingBar-extraControls')).insertAdjacentHTML('afterbegin',
  /*html*/`<style>
  @charset "UTF-8";
/*#sleep-timer-menu {
/*!
 * Bootstrap  v5.2.1 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Copyright 2011-2022 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
/* rtl:begin:ignore */
/* rtl:end:ignore */
/* rtl:begin:ignore */
/* rtl:end:ignore */
/* rtl:begin:ignore */
/* rtl:end:ignore */
/* rtl:begin:ignore */
/* rtl:end:ignore */
/* rtl:begin:ignore */
/* rtl:end:ignore */
/* rtl:options: {
  "autoRename": true,
  "stringMap":[ {
    "name"    : "prev-next",
    "search"  : "prev",
    "replace" : "next"
  } ]
} */
/* rtl:begin:remove */
/* rtl:end:remove */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
}*/
#sleep-timer-menu :root {
--bs-blue: #1ed760;
--bs-indigo: #6610f2;
--bs-purple: #9b479f;
--bs-pink: #e83e8c;
--bs-red: #1ed760;
--bs-orange: #d9831f;
--bs-yellow: #ffc107;
--bs-green: #1ed760;
--bs-teal: #20c997;
--bs-cyan: #029acf;
--bs-black: #000;
--bs-white: #fff;
--bs-gray: #777;
--bs-gray-dark: #373a3c;
--bs-gray-100: #f8f9fa;
--bs-gray-200: #ddd;
--bs-gray-300: #ccc;
--bs-gray-400: #bbb;
--bs-gray-500: #adb5bd;
--bs-gray-600: #777;
--bs-gray-700: #444;
--bs-gray-800: #373a3c;
--bs-gray-900: #212529;
--bs-primary: #1ed760;
--bs-secondary: #fff;
--bs-success: #1ed760;
--bs-info: #029acf;
--bs-warning: #d9831f;
--bs-danger: #9b479f;
--bs-light: #fff;
--bs-dark: #373a3c;
--bs-primary-rgb: 30, 215, 96;
--bs-secondary-rgb: 255, 255, 255;
--bs-success-rgb: 70, 148, 8;
--bs-info-rgb: 2, 154, 207;
--bs-warning-rgb: 217, 131, 31;
--bs-danger-rgb: 155, 71, 159;
--bs-light-rgb: 255, 255, 255;
--bs-dark-rgb: 55, 58, 60;
--bs-white-rgb: 255, 255, 255;
--bs-black-rgb: 0, 0, 0;
--bs-body-color-rgb: 33, 37, 41;
--bs-body-bg-rgb: 252, 252, 252;
--bs-font-sans-serif: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
--bs-body-font-family: var(--bs-font-sans-serif);
--bs-body-font-size: 1rem;
--bs-body-font-weight: 400;
--bs-body-line-height: 1.5;
--bs-body-color: #212529;
--bs-body-bg: #fcfcfc;
--bs-border-width: 1px;
--bs-border-style: solid;
--bs-border-color: #ccc;
--bs-border-color-translucent: rgba(0, 0, 0, 0.175);
--bs-border-radius: 0.375rem;
--bs-border-radius-sm: 0.25rem;
--bs-border-radius-lg: 0.5rem;
--bs-border-radius-xl: 1rem;
--bs-border-radius-2xl: 2rem;
--bs-border-radius-pill: 50rem;
--bs-link-color: #1ed760;
--bs-link-hover-color: #ae1c0c;
--bs-code-color: #e83e8c;
--bs-highlight-bg: #fff3cd;
}
#sleep-timer-menu *,
#sleep-timer-menu *::before,
#sleep-timer-menu *::after {
box-sizing: border-box;
}
@media (prefers-reduced-motion: no-preference) {
#sleep-timer-menu :root {
  scroll-behavior: smooth;
}
}
#sleep-timer-menu body {
margin: 0;
font-family: var(--bs-body-font-family);
font-size: var(--bs-body-font-size);
font-weight: var(--bs-body-font-weight);
line-height: var(--bs-body-line-height);
color: var(--bs-body-color);
text-align: var(--bs-body-text-align);
background-color: var(--bs-body-bg);
-webkit-text-size-adjust: 100%;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
#sleep-timer-menu hr {
margin: 1rem 0;
color: inherit;
border: 0;
border-top: 1px solid;
opacity: 0.25;
}
#sleep-timer-menu h6, #sleep-timer-menu .h6, #sleep-timer-menu h5, #sleep-timer-menu .h5, #sleep-timer-menu h4, #sleep-timer-menu .h4, #sleep-timer-menu .h3, #sleep-timer-menu h2, #sleep-timer-menu .h2, #sleep-timer-menu h1, #sleep-timer-menu .h1 {
margin-top: 0;
margin-bottom: 0.5rem;
font-weight: 500;
line-height: 1.2;
}
#sleep-timer-menu h1, #sleep-timer-menu .h1 {
font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
#sleep-timer-menu h1, #sleep-timer-menu .h1 {
  font-size: 2.5rem;
}
}
#sleep-timer-menu h2, #sleep-timer-menu .h2 {
font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
#sleep-timer-menu h2, #sleep-timer-menu .h2 {
  font-size: 2rem;
}
}
#sleep-timer-menu h4, #sleep-timer-menu .h4 {
font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
#sleep-timer-menu h4, #sleep-timer-menu .h4 {
  font-size: 1.5rem;
}
}
#sleep-timer-menu h5, #sleep-timer-menu .h5 {
font-size: 1.25rem;
}
#sleep-timer-menu h6, #sleep-timer-menu .h6 {
font-size: 1rem;
}
#sleep-timer-menu p {
margin-top: 0;
margin-bottom: 1rem;
}
#sleep-timer-menu abbr[title] {
text-decoration: underline dotted;
cursor: help;
text-decoration-skip-ink: none;
}
#sleep-timer-menu address {
margin-bottom: 1rem;
font-style: normal;
line-height: inherit;
}
#sleep-timer-menu ol,
#sleep-timer-menu ul {
padding-left: 2rem;
}
#sleep-timer-menu ol,
#sleep-timer-menu ul,
#sleep-timer-menu dl {
margin-top: 0;
margin-bottom: 1rem;
}
#sleep-timer-menu ol ol,
#sleep-timer-menu ul ul,
#sleep-timer-menu ol ul,
#sleep-timer-menu ul ol {
margin-bottom: 0;
}
#sleep-timer-menu dt {
font-weight: 700;
}
#sleep-timer-menu dd {
margin-bottom: 0.5rem;
margin-left: 0;
}
#sleep-timer-menu blockquote {
margin: 0 0 1rem;
}
#sleep-timer-menu b,
#sleep-timer-menu strong {
font-weight: bolder;
}
#sleep-timer-menu small, #sleep-timer-menu .small {
font-size: 0.875em;
}
#sleep-timer-menu mark, #sleep-timer-menu .mark {
padding: 0.1875em;
background-color: var(--bs-highlight-bg);
}
#sleep-timer-menu sub,
#sleep-timer-menu sup {
position: relative;
font-size: 0.75em;
line-height: 0;
vertical-align: baseline;
}
#sleep-timer-menu sub {
bottom: -0.25em;
}
#sleep-timer-menu sup {
top: -0.5em;
}
#sleep-timer-menu a {
color: var(--bs-link-color);
text-decoration: underline;
}
#sleep-timer-menu a:hover {
color: var(--bs-link-hover-color);
}
#sleep-timer-menu a:not([href]):not([class]), #sleep-timer-menu a:not([href]):not([class]):hover {
color: inherit;
text-decoration: none;
}
#sleep-timer-menu pre,
#sleep-timer-menu code,
#sleep-timer-menu kbd,
#sleep-timer-menu samp {
font-family: var(--bs-font-monospace);
font-size: 1em;
}
#sleep-timer-menu pre {
display: block;
margin-top: 0;
margin-bottom: 1rem;
overflow: auto;
font-size: 0.875em;
}
#sleep-timer-menu pre code {
font-size: inherit;
color: inherit;
word-break: normal;
}
#sleep-timer-menu code {
font-size: 0.875em;
color: var(--bs-code-color);
word-wrap: break-word;
}
a > #sleep-timer-menu code {
color: inherit;
}
#sleep-timer-menu kbd {
padding: 0.1875rem 0.375rem;
font-size: 0.875em;
color: var(--bs-body-bg);
background-color: var(--bs-body-color);
border-radius: 0.25rem;
}
#sleep-timer-menu kbd kbd {
padding: 0;
font-size: 1em;
}
#sleep-timer-menu figure {
margin: 0 0 1rem;
}
#sleep-timer-menu img,
#sleep-timer-menu svg {
vertical-align: middle;
}
#sleep-timer-menu table {
caption-side: bottom;
border-collapse: collapse;
}
#sleep-timer-menu caption {
padding-top: 0.5rem;
padding-bottom: 0.5rem;
color: #777;
text-align: left;
}
#sleep-timer-menu th {
text-align: inherit;
text-align: -webkit-match-parent;
}
#sleep-timer-menu thead,
#sleep-timer-menu tbody,
#sleep-timer-menu tfoot,
#sleep-timer-menu tr,
#sleep-timer-menu td,
#sleep-timer-menu th {
border-color: inherit;
border-style: solid;
border-width: 0;
}
#sleep-timer-menu label {
display: inline-block;
}
#sleep-timer-menu button {
border-radius: 0;
}
#sleep-timer-menu button:focus:not(:focus-visible) {
outline: 0;
}
#sleep-timer-menu input,
#sleep-timer-menu button,
#sleep-timer-menu select,
#sleep-timer-menu optgroup,
#sleep-timer-menu textarea {
margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;
}
#sleep-timer-menu button,
#sleep-timer-menu select {
text-transform: none;
}
#sleep-timer-menu [role=button] {
cursor: pointer;
}
#sleep-timer-menu select {
word-wrap: normal;
}
#sleep-timer-menu select:disabled {
opacity: 1;
}
#sleep-timer-menu [list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
display: none !important;
}
#sleep-timer-menu button,
#sleep-timer-menu [type=button],
#sleep-timer-menu [type=reset],
#sleep-timer-menu [type=submit] {
-webkit-appearance: button;
}
#sleep-timer-menu button:not(:disabled),
#sleep-timer-menu [type=button]:not(:disabled),
#sleep-timer-menu [type=reset]:not(:disabled),
#sleep-timer-menu [type=submit]:not(:disabled) {
cursor: pointer;
}
#sleep-timer-menu ::-moz-focus-inner {
padding: 0;
border-style: none;
}
#sleep-timer-menu textarea {
resize: vertical;
}
#sleep-timer-menu fieldset {
min-width: 0;
padding: 0;
margin: 0;
border: 0;
}
#sleep-timer-menu legend {
float: left;
width: 100%;
padding: 0;
margin-bottom: 0.5rem;
font-size: calc(1.275rem + 0.3vw);
line-height: inherit;
}
@media (min-width: 1200px) {
#sleep-timer-menu legend {
  font-size: 1.5rem;
}
}
#sleep-timer-menu legend + * {
clear: left;
}
#sleep-timer-menu ::-webkit-datetime-edit-fields-wrapper,
#sleep-timer-menu ::-webkit-datetime-edit-text,
#sleep-timer-menu ::-webkit-datetime-edit-minute,
#sleep-timer-menu ::-webkit-datetime-edit-hour-field,
#sleep-timer-menu ::-webkit-datetime-edit-day-field,
#sleep-timer-menu ::-webkit-datetime-edit-month-field,
#sleep-timer-menu ::-webkit-datetime-edit-year-field {
padding: 0;
}
#sleep-timer-menu ::-webkit-inner-spin-button {
height: auto;
}
#sleep-timer-menu [type=search] {
outline-offset: -2px;
-webkit-appearance: textfield;
}
#sleep-timer-menu ::-webkit-search-decoration {
-webkit-appearance: none;
}
#sleep-timer-menu ::-webkit-color-swatch-wrapper {
padding: 0;
}
#sleep-timer-menu ::file-selector-button {
font: inherit;
-webkit-appearance: button;
}
#sleep-timer-menu output {
display: inline-block;
}
#sleep-timer-menu iframe {
border: 0;
}
#sleep-timer-menu summary {
display: list-item;
cursor: pointer;
}
#sleep-timer-menu progress {
vertical-align: baseline;
}
#sleep-timer-menu [hidden] {
display: none !important;
}
#sleep-timer-menu .lead {
font-size: 1.25rem;
font-weight: 300;
}
#sleep-timer-menu .display-1 {
font-size: calc(1.625rem + 4.5vw);
font-weight: 300;
line-height: 1.2;
}
@media (min-width: 1200px) {
#sleep-timer-menu .display-1 {
  font-size: 5rem;
}
}
#sleep-timer-menu .display-2 {
font-size: calc(1.575rem + 3.9vw);
font-weight: 300;
line-height: 1.2;
}
@media (min-width: 1200px) {
#sleep-timer-menu .display-2 {
  font-size: 4.5rem;
}
}
#sleep-timer-menu .display-3 {
font-size: calc(1.525rem + 3.3vw);
font-weight: 300;
line-height: 1.2;
}
@media (min-width: 1200px) {
#sleep-timer-menu .display-3 {
  font-size: 4rem;
}
}
#sleep-timer-menu .display-4 {
font-size: calc(1.475rem + 2.7vw);
font-weight: 300;
line-height: 1.2;
}
@media (min-width: 1200px) {
#sleep-timer-menu .display-4 {
  font-size: 3.5rem;
}
}
#sleep-timer-menu .display-5 {
font-size: calc(1.425rem + 2.1vw);
font-weight: 300;
line-height: 1.2;
}
@media (min-width: 1200px) {
#sleep-timer-menu .display-5 {
  font-size: 3rem;
}
}
#sleep-timer-menu .display-6 {
font-size: calc(1.375rem + 1.5vw);
font-weight: 300;
line-height: 1.2;
}
@media (min-width: 1200px) {
#sleep-timer-menu .display-6 {
  font-size: 2.5rem;
}
}
#sleep-timer-menu .list-unstyled {
padding-left: 0;
list-style: none;
}
#sleep-timer-menu .list-inline {
padding-left: 0;
list-style: none;
}
#sleep-timer-menu .list-inline-item {
display: inline-block;
}
#sleep-timer-menu .list-inline-item:not(:last-child) {
margin-right: 0.5rem;
}
#sleep-timer-menu .initialism {
font-size: 0.875em;
text-transform: uppercase;
}
#sleep-timer-menu .blockquote {
margin-bottom: 1rem;
font-size: 1.25rem;
}
#sleep-timer-menu .blockquote > :last-child {
margin-bottom: 0;
}
#sleep-timer-menu .blockquote-footer {
margin-top: -1rem;
margin-bottom: 1rem;
font-size: 0.875em;
color: #777;
}
#sleep-timer-menu .blockquote-footer::before {
content: "— ";
}
#sleep-timer-menu .img-fluid {
max-width: 100%;
height: auto;
}
#sleep-timer-menu .img-thumbnail {
padding: 0.25rem;
background-color: #fcfcfc;
border: 1px solid var(--bs-border-color);
border-radius: 0.375rem;
max-width: 100%;
height: auto;
}
#sleep-timer-menu .figure {
display: inline-block;
}
#sleep-timer-menu .figure-img {
margin-bottom: 0.5rem;
line-height: 1;
}
#sleep-timer-menu .figure-caption {
font-size: 0.875em;
color: #777;
}
#sleep-timer-menu .container,
#sleep-timer-menu .container-fluid,
#sleep-timer-menu .container-xxl,
#sleep-timer-menu .container-xl,
#sleep-timer-menu .container-lg,
#sleep-timer-menu .container-md,
#sleep-timer-menu .container-sm {
--bs-gutter-x: 1.5rem;
--bs-gutter-y: 0;
width: 100%;
padding-right: calc(var(--bs-gutter-x) * 0.5);
padding-left: calc(var(--bs-gutter-x) * 0.5);
margin-right: auto;
margin-left: auto;
}
@media (min-width: 576px) {
#sleep-timer-menu .container-sm, #sleep-timer-menu .container {
  max-width: 540px;
}
}
@media (min-width: 768px) {
#sleep-timer-menu .container-md, #sleep-timer-menu .container-sm, #sleep-timer-menu .container {
  max-width: 720px;
}
}
@media (min-width: 992px) {
#sleep-timer-menu .container-lg, #sleep-timer-menu .container-md, #sleep-timer-menu .container-sm, #sleep-timer-menu .container {
  max-width: 960px;
}
}
@media (min-width: 1200px) {
#sleep-timer-menu .container-xl, #sleep-timer-menu .container-lg, #sleep-timer-menu .container-md, #sleep-timer-menu .container-sm, #sleep-timer-menu .container {
  max-width: 1140px;
}
}
@media (min-width: 1400px) {
#sleep-timer-menu .container-xxl, #sleep-timer-menu .container-xl, #sleep-timer-menu .container-lg, #sleep-timer-menu .container-md, #sleep-timer-menu .container-sm, #sleep-timer-menu .container {
  max-width: 1320px;
}
}
#sleep-timer-menu .row {
--bs-gutter-x: 1.5rem;
--bs-gutter-y: 0;
display: flex;
flex-wrap: wrap;
margin-top: calc(-1 * var(--bs-gutter-y));
margin-right: calc(-0.5 * var(--bs-gutter-x));
margin-left: calc(-0.5 * var(--bs-gutter-x));
}
#sleep-timer-menu .row > * {
flex-shrink: 0;
width: 100%;
max-width: 100%;
padding-right: calc(var(--bs-gutter-x) * 0.5);
padding-left: calc(var(--bs-gutter-x) * 0.5);
margin-top: var(--bs-gutter-y);
}
#sleep-timer-menu .col {
flex: 1 0 0%;
}
#sleep-timer-menu .row-cols-auto > * {
flex: 0 0 auto;
width: auto;
}
#sleep-timer-menu .row-cols-1 > * {
flex: 0 0 auto;
width: 100%;
}
#sleep-timer-menu .row-cols-2 > * {
flex: 0 0 auto;
width: 50%;
}
#sleep-timer-menu .row-cols-3 > * {
flex: 0 0 auto;
width: 33.3333333333%;
}
#sleep-timer-menu .row-cols-4 > * {
flex: 0 0 auto;
width: 25%;
}
#sleep-timer-menu .row-cols-5 > * {
flex: 0 0 auto;
width: 20%;
}
#sleep-timer-menu .row-cols-6 > * {
flex: 0 0 auto;
width: 16.6666666667%;
}
#sleep-timer-menu .col-auto {
flex: 0 0 auto;
width: auto;
}
#sleep-timer-menu .col-1 {
flex: 0 0 auto;
width: 8.33333333%;
}
#sleep-timer-menu .col-2 {
flex: 0 0 auto;
width: 16.66666667%;
}
#sleep-timer-menu .col-3 {
flex: 0 0 auto;
width: 25%;
}
#sleep-timer-menu .col-4 {
flex: 0 0 auto;
width: 33.33333333%;
}
#sleep-timer-menu .col-5 {
flex: 0 0 auto;
width: 41.66666667%;
}
#sleep-timer-menu .col-6 {
flex: 0 0 auto;
width: 50%;
}
#sleep-timer-menu .col-7 {
flex: 0 0 auto;
width: 58.33333333%;
}
#sleep-timer-menu .col-8 {
flex: 0 0 auto;
width: 66.66666667%;
}
#sleep-timer-menu .col-9 {
flex: 0 0 auto;
width: 75%;
}
#sleep-timer-menu .col-10 {
flex: 0 0 auto;
width: 83.33333333%;
}
#sleep-timer-menu .col-11 {
flex: 0 0 auto;
width: 91.66666667%;
}
#sleep-timer-menu .col-12 {
flex: 0 0 auto;
width: 100%;
}
#sleep-timer-menu .offset-1 {
margin-left: 8.33333333%;
}
#sleep-timer-menu .offset-2 {
margin-left: 16.66666667%;
}
#sleep-timer-menu .offset-3 {
margin-left: 25%;
}
#sleep-timer-menu .offset-4 {
margin-left: 33.33333333%;
}
#sleep-timer-menu .offset-5 {
margin-left: 41.66666667%;
}
#sleep-timer-menu .offset-6 {
margin-left: 50%;
}
#sleep-timer-menu .offset-7 {
margin-left: 58.33333333%;
}
#sleep-timer-menu .offset-8 {
margin-left: 66.66666667%;
}
#sleep-timer-menu .offset-9 {
margin-left: 75%;
}
#sleep-timer-menu .offset-10 {
margin-left: 83.33333333%;
}
#sleep-timer-menu .offset-11 {
margin-left: 91.66666667%;
}
#sleep-timer-menu .g-0,
#sleep-timer-menu .gx-0 {
--bs-gutter-x: 0;
}
#sleep-timer-menu .g-0,
#sleep-timer-menu .gy-0 {
--bs-gutter-y: 0;
}
#sleep-timer-menu .g-1,
#sleep-timer-menu .gx-1 {
--bs-gutter-x: 0.25rem;
}
#sleep-timer-menu .g-1,
#sleep-timer-menu .gy-1 {
--bs-gutter-y: 0.25rem;
}
#sleep-timer-menu .g-2,
#sleep-timer-menu .gx-2 {
--bs-gutter-x: 0.5rem;
}
#sleep-timer-menu .g-2,
#sleep-timer-menu .gy-2 {
--bs-gutter-y: 0.5rem;
}
#sleep-timer-menu .g-3,
#sleep-timer-menu .gx-3 {
--bs-gutter-x: 1rem;
}
#sleep-timer-menu .g-3,
#sleep-timer-menu .gy-3 {
--bs-gutter-y: 1rem;
}
#sleep-timer-menu .g-4,
#sleep-timer-menu .gx-4 {
--bs-gutter-x: 1.5rem;
}
#sleep-timer-menu .g-4,
#sleep-timer-menu .gy-4 {
--bs-gutter-y: 1.5rem;
}
#sleep-timer-menu .g-5,
#sleep-timer-menu .gx-5 {
--bs-gutter-x: 3rem;
}
#sleep-timer-menu .g-5,
#sleep-timer-menu .gy-5 {
--bs-gutter-y: 3rem;
}
@media (min-width: 576px) {
#sleep-timer-menu .col-sm {
  flex: 1 0 0%;
}
#sleep-timer-menu .row-cols-sm-auto > * {
  flex: 0 0 auto;
  width: auto;
}
#sleep-timer-menu .row-cols-sm-1 > * {
  flex: 0 0 auto;
  width: 100%;
}
#sleep-timer-menu .row-cols-sm-2 > * {
  flex: 0 0 auto;
  width: 50%;
}
#sleep-timer-menu .row-cols-sm-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}
#sleep-timer-menu .row-cols-sm-4 > * {
  flex: 0 0 auto;
  width: 25%;
}
#sleep-timer-menu .row-cols-sm-5 > * {
  flex: 0 0 auto;
  width: 20%;
}
#sleep-timer-menu .row-cols-sm-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}
#sleep-timer-menu .col-sm-auto {
  flex: 0 0 auto;
  width: auto;
}
#sleep-timer-menu .col-sm-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}
#sleep-timer-menu .col-sm-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}
#sleep-timer-menu .col-sm-3 {
  flex: 0 0 auto;
  width: 25%;
}
#sleep-timer-menu .col-sm-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}
#sleep-timer-menu .col-sm-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}
#sleep-timer-menu .col-sm-6 {
  flex: 0 0 auto;
  width: 50%;
}
#sleep-timer-menu .col-sm-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}
#sleep-timer-menu .col-sm-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}
#sleep-timer-menu .col-sm-9 {
  flex: 0 0 auto;
  width: 75%;
}
#sleep-timer-menu .col-sm-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}
#sleep-timer-menu .col-sm-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}
#sleep-timer-menu .col-sm-12 {
  flex: 0 0 auto;
  width: 100%;
}
#sleep-timer-menu .offset-sm-0 {
  margin-left: 0;
}
#sleep-timer-menu .offset-sm-1 {
  margin-left: 8.33333333%;
}
#sleep-timer-menu .offset-sm-2 {
  margin-left: 16.66666667%;
}
#sleep-timer-menu .offset-sm-3 {
  margin-left: 25%;
}
#sleep-timer-menu .offset-sm-4 {
  margin-left: 33.33333333%;
}
#sleep-timer-menu .offset-sm-5 {
  margin-left: 41.66666667%;
}
#sleep-timer-menu .offset-sm-6 {
  margin-left: 50%;
}
#sleep-timer-menu .offset-sm-7 {
  margin-left: 58.33333333%;
}
#sleep-timer-menu .offset-sm-8 {
  margin-left: 66.66666667%;
}
#sleep-timer-menu .offset-sm-9 {
  margin-left: 75%;
}
#sleep-timer-menu .offset-sm-10 {
  margin-left: 83.33333333%;
}
#sleep-timer-menu .offset-sm-11 {
  margin-left: 91.66666667%;
}
#sleep-timer-menu .g-sm-0,
#sleep-timer-menu .gx-sm-0 {
  --bs-gutter-x: 0;
}
#sleep-timer-menu .g-sm-0,
#sleep-timer-menu .gy-sm-0 {
  --bs-gutter-y: 0;
}
#sleep-timer-menu .g-sm-1,
#sleep-timer-menu .gx-sm-1 {
  --bs-gutter-x: 0.25rem;
}
#sleep-timer-menu .g-sm-1,
#sleep-timer-menu .gy-sm-1 {
  --bs-gutter-y: 0.25rem;
}
#sleep-timer-menu .g-sm-2,
#sleep-timer-menu .gx-sm-2 {
  --bs-gutter-x: 0.5rem;
}
#sleep-timer-menu .g-sm-2,
#sleep-timer-menu .gy-sm-2 {
  --bs-gutter-y: 0.5rem;
}
#sleep-timer-menu .g-sm-3,
#sleep-timer-menu .gx-sm-3 {
  --bs-gutter-x: 1rem;
}
#sleep-timer-menu .g-sm-3,
#sleep-timer-menu .gy-sm-3 {
  --bs-gutter-y: 1rem;
}
#sleep-timer-menu .g-sm-4,
#sleep-timer-menu .gx-sm-4 {
  --bs-gutter-x: 1.5rem;
}
#sleep-timer-menu .g-sm-4,
#sleep-timer-menu .gy-sm-4 {
  --bs-gutter-y: 1.5rem;
}
#sleep-timer-menu .g-sm-5,
#sleep-timer-menu .gx-sm-5 {
  --bs-gutter-x: 3rem;
}
#sleep-timer-menu .g-sm-5,
#sleep-timer-menu .gy-sm-5 {
  --bs-gutter-y: 3rem;
}
}
@media (min-width: 768px) {
#sleep-timer-menu .col-md {
  flex: 1 0 0%;
}
#sleep-timer-menu .row-cols-md-auto > * {
  flex: 0 0 auto;
  width: auto;
}
#sleep-timer-menu .row-cols-md-1 > * {
  flex: 0 0 auto;
  width: 100%;
}
#sleep-timer-menu .row-cols-md-2 > * {
  flex: 0 0 auto;
  width: 50%;
}
#sleep-timer-menu .row-cols-md-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}
#sleep-timer-menu .row-cols-md-4 > * {
  flex: 0 0 auto;
  width: 25%;
}
#sleep-timer-menu .row-cols-md-5 > * {
  flex: 0 0 auto;
  width: 20%;
}
#sleep-timer-menu .row-cols-md-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}
#sleep-timer-menu .col-md-auto {
  flex: 0 0 auto;
  width: auto;
}
#sleep-timer-menu .col-md-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}
#sleep-timer-menu .col-md-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}
#sleep-timer-menu .col-md-3 {
  flex: 0 0 auto;
  width: 25%;
}
#sleep-timer-menu .col-md-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}
#sleep-timer-menu .col-md-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}
#sleep-timer-menu .col-md-6 {
  flex: 0 0 auto;
  width: 50%;
}
#sleep-timer-menu .col-md-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}
#sleep-timer-menu .col-md-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}
#sleep-timer-menu .col-md-9 {
  flex: 0 0 auto;
  width: 75%;
}
#sleep-timer-menu .col-md-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}
#sleep-timer-menu .col-md-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}
#sleep-timer-menu .col-md-12 {
  flex: 0 0 auto;
  width: 100%;
}
#sleep-timer-menu .offset-md-0 {
  margin-left: 0;
}
#sleep-timer-menu .offset-md-1 {
  margin-left: 8.33333333%;
}
#sleep-timer-menu .offset-md-2 {
  margin-left: 16.66666667%;
}
#sleep-timer-menu .offset-md-3 {
  margin-left: 25%;
}
#sleep-timer-menu .offset-md-4 {
  margin-left: 33.33333333%;
}
#sleep-timer-menu .offset-md-5 {
  margin-left: 41.66666667%;
}
#sleep-timer-menu .offset-md-6 {
  margin-left: 50%;
}
#sleep-timer-menu .offset-md-7 {
  margin-left: 58.33333333%;
}
#sleep-timer-menu .offset-md-8 {
  margin-left: 66.66666667%;
}
#sleep-timer-menu .offset-md-9 {
  margin-left: 75%;
}
#sleep-timer-menu .offset-md-10 {
  margin-left: 83.33333333%;
}
#sleep-timer-menu .offset-md-11 {
  margin-left: 91.66666667%;
}
#sleep-timer-menu .g-md-0,
#sleep-timer-menu .gx-md-0 {
  --bs-gutter-x: 0;
}
#sleep-timer-menu .g-md-0,
#sleep-timer-menu .gy-md-0 {
  --bs-gutter-y: 0;
}
#sleep-timer-menu .g-md-1,
#sleep-timer-menu .gx-md-1 {
  --bs-gutter-x: 0.25rem;
}
#sleep-timer-menu .g-md-1,
#sleep-timer-menu .gy-md-1 {
  --bs-gutter-y: 0.25rem;
}
#sleep-timer-menu .g-md-2,
#sleep-timer-menu .gx-md-2 {
  --bs-gutter-x: 0.5rem;
}
#sleep-timer-menu .g-md-2,
#sleep-timer-menu .gy-md-2 {
  --bs-gutter-y: 0.5rem;
}
#sleep-timer-menu .g-md-3,
#sleep-timer-menu .gx-md-3 {
  --bs-gutter-x: 1rem;
}
#sleep-timer-menu .g-md-3,
#sleep-timer-menu .gy-md-3 {
  --bs-gutter-y: 1rem;
}
#sleep-timer-menu .g-md-4,
#sleep-timer-menu .gx-md-4 {
  --bs-gutter-x: 1.5rem;
}
#sleep-timer-menu .g-md-4,
#sleep-timer-menu .gy-md-4 {
  --bs-gutter-y: 1.5rem;
}
#sleep-timer-menu .g-md-5,
#sleep-timer-menu .gx-md-5 {
  --bs-gutter-x: 3rem;
}
#sleep-timer-menu .g-md-5,
#sleep-timer-menu .gy-md-5 {
  --bs-gutter-y: 3rem;
}
}
@media (min-width: 992px) {
#sleep-timer-menu .col-lg {
  flex: 1 0 0%;
}
#sleep-timer-menu .row-cols-lg-auto > * {
  flex: 0 0 auto;
  width: auto;
}
#sleep-timer-menu .row-cols-lg-1 > * {
  flex: 0 0 auto;
  width: 100%;
}
#sleep-timer-menu .row-cols-lg-2 > * {
  flex: 0 0 auto;
  width: 50%;
}
#sleep-timer-menu .row-cols-lg-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}
#sleep-timer-menu .row-cols-lg-4 > * {
  flex: 0 0 auto;
  width: 25%;
}
#sleep-timer-menu .row-cols-lg-5 > * {
  flex: 0 0 auto;
  width: 20%;
}
#sleep-timer-menu .row-cols-lg-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}
#sleep-timer-menu .col-lg-auto {
  flex: 0 0 auto;
  width: auto;
}
#sleep-timer-menu .col-lg-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}
#sleep-timer-menu .col-lg-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}
#sleep-timer-menu .col-lg-3 {
  flex: 0 0 auto;
  width: 25%;
}
#sleep-timer-menu .col-lg-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}
#sleep-timer-menu .col-lg-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}
#sleep-timer-menu .col-lg-6 {
  flex: 0 0 auto;
  width: 50%;
}
#sleep-timer-menu .col-lg-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}
#sleep-timer-menu .col-lg-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}
#sleep-timer-menu .col-lg-9 {
  flex: 0 0 auto;
  width: 75%;
}
#sleep-timer-menu .col-lg-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}
#sleep-timer-menu .col-lg-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}
#sleep-timer-menu .col-lg-12 {
  flex: 0 0 auto;
  width: 100%;
}
#sleep-timer-menu .offset-lg-0 {
  margin-left: 0;
}
#sleep-timer-menu .offset-lg-1 {
  margin-left: 8.33333333%;
}
#sleep-timer-menu .offset-lg-2 {
  margin-left: 16.66666667%;
}
#sleep-timer-menu .offset-lg-3 {
  margin-left: 25%;
}
#sleep-timer-menu .offset-lg-4 {
  margin-left: 33.33333333%;
}
#sleep-timer-menu .offset-lg-5 {
  margin-left: 41.66666667%;
}
#sleep-timer-menu .offset-lg-6 {
  margin-left: 50%;
}
#sleep-timer-menu .offset-lg-7 {
  margin-left: 58.33333333%;
}
#sleep-timer-menu .offset-lg-8 {
  margin-left: 66.66666667%;
}
#sleep-timer-menu .offset-lg-9 {
  margin-left: 75%;
}
#sleep-timer-menu .offset-lg-10 {
  margin-left: 83.33333333%;
}
#sleep-timer-menu .offset-lg-11 {
  margin-left: 91.66666667%;
}
#sleep-timer-menu .g-lg-0,
#sleep-timer-menu .gx-lg-0 {
  --bs-gutter-x: 0;
}
#sleep-timer-menu .g-lg-0,
#sleep-timer-menu .gy-lg-0 {
  --bs-gutter-y: 0;
}
#sleep-timer-menu .g-lg-1,
#sleep-timer-menu .gx-lg-1 {
  --bs-gutter-x: 0.25rem;
}
#sleep-timer-menu .g-lg-1,
#sleep-timer-menu .gy-lg-1 {
  --bs-gutter-y: 0.25rem;
}
#sleep-timer-menu .g-lg-2,
#sleep-timer-menu .gx-lg-2 {
  --bs-gutter-x: 0.5rem;
}
#sleep-timer-menu .g-lg-2,
#sleep-timer-menu .gy-lg-2 {
  --bs-gutter-y: 0.5rem;
}
#sleep-timer-menu .g-lg-3,
#sleep-timer-menu .gx-lg-3 {
  --bs-gutter-x: 1rem;
}
#sleep-timer-menu .g-lg-3,
#sleep-timer-menu .gy-lg-3 {
  --bs-gutter-y: 1rem;
}
#sleep-timer-menu .g-lg-4,
#sleep-timer-menu .gx-lg-4 {
  --bs-gutter-x: 1.5rem;
}
#sleep-timer-menu .g-lg-4,
#sleep-timer-menu .gy-lg-4 {
  --bs-gutter-y: 1.5rem;
}
#sleep-timer-menu .g-lg-5,
#sleep-timer-menu .gx-lg-5 {
  --bs-gutter-x: 3rem;
}
#sleep-timer-menu .g-lg-5,
#sleep-timer-menu .gy-lg-5 {
  --bs-gutter-y: 3rem;
}
}
@media (min-width: 1200px) {
#sleep-timer-menu .col-xl {
  flex: 1 0 0%;
}
#sleep-timer-menu .row-cols-xl-auto > * {
  flex: 0 0 auto;
  width: auto;
}
#sleep-timer-menu .row-cols-xl-1 > * {
  flex: 0 0 auto;
  width: 100%;
}
#sleep-timer-menu .row-cols-xl-2 > * {
  flex: 0 0 auto;
  width: 50%;
}
#sleep-timer-menu .row-cols-xl-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}
#sleep-timer-menu .row-cols-xl-4 > * {
  flex: 0 0 auto;
  width: 25%;
}
#sleep-timer-menu .row-cols-xl-5 > * {
  flex: 0 0 auto;
  width: 20%;
}
#sleep-timer-menu .row-cols-xl-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}
#sleep-timer-menu .col-xl-auto {
  flex: 0 0 auto;
  width: auto;
}
#sleep-timer-menu .col-xl-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}
#sleep-timer-menu .col-xl-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}
#sleep-timer-menu .col-xl-3 {
  flex: 0 0 auto;
  width: 25%;
}
#sleep-timer-menu .col-xl-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}
#sleep-timer-menu .col-xl-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}
#sleep-timer-menu .col-xl-6 {
  flex: 0 0 auto;
  width: 50%;
}
#sleep-timer-menu .col-xl-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}
#sleep-timer-menu .col-xl-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}
#sleep-timer-menu .col-xl-9 {
  flex: 0 0 auto;
  width: 75%;
}
#sleep-timer-menu .col-xl-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}
#sleep-timer-menu .col-xl-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}
#sleep-timer-menu .col-xl-12 {
  flex: 0 0 auto;
  width: 100%;
}
#sleep-timer-menu .offset-xl-0 {
  margin-left: 0;
}
#sleep-timer-menu .offset-xl-1 {
  margin-left: 8.33333333%;
}
#sleep-timer-menu .offset-xl-2 {
  margin-left: 16.66666667%;
}
#sleep-timer-menu .offset-xl-3 {
  margin-left: 25%;
}
#sleep-timer-menu .offset-xl-4 {
  margin-left: 33.33333333%;
}
#sleep-timer-menu .offset-xl-5 {
  margin-left: 41.66666667%;
}
#sleep-timer-menu .offset-xl-6 {
  margin-left: 50%;
}
#sleep-timer-menu .offset-xl-7 {
  margin-left: 58.33333333%;
}
#sleep-timer-menu .offset-xl-8 {
  margin-left: 66.66666667%;
}
#sleep-timer-menu .offset-xl-9 {
  margin-left: 75%;
}
#sleep-timer-menu .offset-xl-10 {
  margin-left: 83.33333333%;
}
#sleep-timer-menu .offset-xl-11 {
  margin-left: 91.66666667%;
}
#sleep-timer-menu .g-xl-0,
#sleep-timer-menu .gx-xl-0 {
  --bs-gutter-x: 0;
}
#sleep-timer-menu .g-xl-0,
#sleep-timer-menu .gy-xl-0 {
  --bs-gutter-y: 0;
}
#sleep-timer-menu .g-xl-1,
#sleep-timer-menu .gx-xl-1 {
  --bs-gutter-x: 0.25rem;
}
#sleep-timer-menu .g-xl-1,
#sleep-timer-menu .gy-xl-1 {
  --bs-gutter-y: 0.25rem;
}
#sleep-timer-menu .g-xl-2,
#sleep-timer-menu .gx-xl-2 {
  --bs-gutter-x: 0.5rem;
}
#sleep-timer-menu .g-xl-2,
#sleep-timer-menu .gy-xl-2 {
  --bs-gutter-y: 0.5rem;
}
#sleep-timer-menu .g-xl-3,
#sleep-timer-menu .gx-xl-3 {
  --bs-gutter-x: 1rem;
}
#sleep-timer-menu .g-xl-3,
#sleep-timer-menu .gy-xl-3 {
  --bs-gutter-y: 1rem;
}
#sleep-timer-menu .g-xl-4,
#sleep-timer-menu .gx-xl-4 {
  --bs-gutter-x: 1.5rem;
}
#sleep-timer-menu .g-xl-4,
#sleep-timer-menu .gy-xl-4 {
  --bs-gutter-y: 1.5rem;
}
#sleep-timer-menu .g-xl-5,
#sleep-timer-menu .gx-xl-5 {
  --bs-gutter-x: 3rem;
}
#sleep-timer-menu .g-xl-5,
#sleep-timer-menu .gy-xl-5 {
  --bs-gutter-y: 3rem;
}
}
@media (min-width: 1400px) {
#sleep-timer-menu .col-xxl {
  flex: 1 0 0%;
}
#sleep-timer-menu .row-cols-xxl-auto > * {
  flex: 0 0 auto;
  width: auto;
}
#sleep-timer-menu .row-cols-xxl-1 > * {
  flex: 0 0 auto;
  width: 100%;
}
#sleep-timer-menu .row-cols-xxl-2 > * {
  flex: 0 0 auto;
  width: 50%;
}
#sleep-timer-menu .row-cols-xxl-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}
#sleep-timer-menu .row-cols-xxl-4 > * {
  flex: 0 0 auto;
  width: 25%;
}
#sleep-timer-menu .row-cols-xxl-5 > * {
  flex: 0 0 auto;
  width: 20%;
}
#sleep-timer-menu .row-cols-xxl-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}
#sleep-timer-menu .col-xxl-auto {
  flex: 0 0 auto;
  width: auto;
}
#sleep-timer-menu .col-xxl-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}
#sleep-timer-menu .col-xxl-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}
#sleep-timer-menu .col-xxl-3 {
  flex: 0 0 auto;
  width: 25%;
}
#sleep-timer-menu .col-xxl-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}
#sleep-timer-menu .col-xxl-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}
#sleep-timer-menu .col-xxl-6 {
  flex: 0 0 auto;
  width: 50%;
}
#sleep-timer-menu .col-xxl-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}
#sleep-timer-menu .col-xxl-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}
#sleep-timer-menu .col-xxl-9 {
  flex: 0 0 auto;
  width: 75%;
}
#sleep-timer-menu .col-xxl-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}
#sleep-timer-menu .col-xxl-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}
#sleep-timer-menu .col-xxl-12 {
  flex: 0 0 auto;
  width: 100%;
}
#sleep-timer-menu .offset-xxl-0 {
  margin-left: 0;
}
#sleep-timer-menu .offset-xxl-1 {
  margin-left: 8.33333333%;
}
#sleep-timer-menu .offset-xxl-2 {
  margin-left: 16.66666667%;
}
#sleep-timer-menu .offset-xxl-3 {
  margin-left: 25%;
}
#sleep-timer-menu .offset-xxl-4 {
  margin-left: 33.33333333%;
}
#sleep-timer-menu .offset-xxl-5 {
  margin-left: 41.66666667%;
}
#sleep-timer-menu .offset-xxl-6 {
  margin-left: 50%;
}
#sleep-timer-menu .offset-xxl-7 {
  margin-left: 58.33333333%;
}
#sleep-timer-menu .offset-xxl-8 {
  margin-left: 66.66666667%;
}
#sleep-timer-menu .offset-xxl-9 {
  margin-left: 75%;
}
#sleep-timer-menu .offset-xxl-10 {
  margin-left: 83.33333333%;
}
#sleep-timer-menu .offset-xxl-11 {
  margin-left: 91.66666667%;
}
#sleep-timer-menu .g-xxl-0,
#sleep-timer-menu .gx-xxl-0 {
  --bs-gutter-x: 0;
}
#sleep-timer-menu .g-xxl-0,
#sleep-timer-menu .gy-xxl-0 {
  --bs-gutter-y: 0;
}
#sleep-timer-menu .g-xxl-1,
#sleep-timer-menu .gx-xxl-1 {
  --bs-gutter-x: 0.25rem;
}
#sleep-timer-menu .g-xxl-1,
#sleep-timer-menu .gy-xxl-1 {
  --bs-gutter-y: 0.25rem;
}
#sleep-timer-menu .g-xxl-2,
#sleep-timer-menu .gx-xxl-2 {
  --bs-gutter-x: 0.5rem;
}
#sleep-timer-menu .g-xxl-2,
#sleep-timer-menu .gy-xxl-2 {
  --bs-gutter-y: 0.5rem;
}
#sleep-timer-menu .g-xxl-3,
#sleep-timer-menu .gx-xxl-3 {
  --bs-gutter-x: 1rem;
}
#sleep-timer-menu .g-xxl-3,
#sleep-timer-menu .gy-xxl-3 {
  --bs-gutter-y: 1rem;
}
#sleep-timer-menu .g-xxl-4,
#sleep-timer-menu .gx-xxl-4 {
  --bs-gutter-x: 1.5rem;
}
#sleep-timer-menu .g-xxl-4,
#sleep-timer-menu .gy-xxl-4 {
  --bs-gutter-y: 1.5rem;
}
#sleep-timer-menu .g-xxl-5,
#sleep-timer-menu .gx-xxl-5 {
  --bs-gutter-x: 3rem;
}
#sleep-timer-menu .g-xxl-5,
#sleep-timer-menu .gy-xxl-5 {
  --bs-gutter-y: 3rem;
}
}
#sleep-timer-menu .table {
--bs-table-color: var(--bs-body-color);
--bs-table-bg: transparent;
--bs-table-border-color: var(--bs-border-color);
--bs-table-accent-bg: transparent;
--bs-table-striped-color: var(--bs-body-color);
--bs-table-striped-bg: rgba(0, 0, 0, 0.05);
--bs-table-active-color: var(--bs-body-color);
--bs-table-active-bg: rgba(0, 0, 0, 0.1);
--bs-table-hover-color: var(--bs-body-color);
--bs-table-hover-bg: rgba(0, 0, 0, 0.075);
width: 100%;
margin-bottom: 1rem;
color: var(--bs-table-color);
vertical-align: top;
border-color: var(--bs-table-border-color);
}
#sleep-timer-menu .table > :not(caption) > * > * {
padding: 0.5rem 0.5rem;
background-color: var(--bs-table-bg);
border-bottom-width: 1px;
box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
#sleep-timer-menu .table > tbody {
vertical-align: inherit;
}
#sleep-timer-menu .table > thead {
vertical-align: bottom;
}
#sleep-timer-menu .table-group-divider {
border-top: 2px solid currentcolor;
}
#sleep-timer-menu .caption-top {
caption-side: top;
}
#sleep-timer-menu .table-sm > :not(caption) > * > * {
padding: 0.25rem 0.25rem;
}
#sleep-timer-menu .table-bordered > :not(caption) > * {
border-width: 1px 0;
}
#sleep-timer-menu .table-bordered > :not(caption) > * > * {
border-width: 0 1px;
}
#sleep-timer-menu .table-borderless > :not(caption) > * > * {
border-bottom-width: 0;
}
#sleep-timer-menu .table-borderless > :not(:first-child) {
border-top-width: 0;
}
#sleep-timer-menu .table-striped > tbody > tr:nth-of-type(odd) > * {
--bs-table-accent-bg: var(--bs-table-striped-bg);
color: var(--bs-table-striped-color);
}
#sleep-timer-menu .table-striped-columns > :not(caption) > tr > :nth-child(even) {
--bs-table-accent-bg: var(--bs-table-striped-bg);
color: var(--bs-table-striped-color);
}
#sleep-timer-menu .table-active {
--bs-table-accent-bg: var(--bs-table-active-bg);
color: var(--bs-table-active-color);
}
#sleep-timer-menu .table-hover > tbody > tr:hover > * {
--bs-table-accent-bg: var(--bs-table-hover-bg);
color: var(--bs-table-hover-color);
}
#sleep-timer-menu .table-primary {
--bs-table-color: #000;
--bs-table-bg: #f7d3cf;
--bs-table-border-color: #debeba;
--bs-table-striped-bg: #ebc8c5;
--bs-table-striped-color: #000;
--bs-table-active-bg: #debeba;
--bs-table-active-color: #000;
--bs-table-hover-bg: #e4c3bf;
--bs-table-hover-color: #000;
color: var(--bs-table-color);
border-color: var(--bs-table-border-color);
}
#sleep-timer-menu .table-secondary {
--bs-table-color: #000;
--bs-table-bg: white;
--bs-table-border-color: #e6e6e6;
--bs-table-striped-bg: #f2f2f2;
--bs-table-striped-color: #000;
--bs-table-active-bg: #e6e6e6;
--bs-table-active-color: #000;
--bs-table-hover-bg: #ececec;
--bs-table-hover-color: #000;
color: var(--bs-table-color);
border-color: var(--bs-table-border-color);
}
#sleep-timer-menu .table-success {
--bs-table-color: #000;
--bs-table-bg: #daeace;
--bs-table-border-color: #c4d3b9;
--bs-table-striped-bg: #cfdec4;
--bs-table-striped-color: #000;
--bs-table-active-bg: #c4d3b9;
--bs-table-active-color: #000;
--bs-table-hover-bg: #cad8bf;
--bs-table-hover-color: #000;
color: var(--bs-table-color);
border-color: var(--bs-table-border-color);
}
#sleep-timer-menu .table-info {
--bs-table-color: #000;
--bs-table-bg: #ccebf5;
--bs-table-border-color: #b8d4dd;
--bs-table-striped-bg: #c2dfe9;
--bs-table-striped-color: #000;
--bs-table-active-bg: #b8d4dd;
--bs-table-active-color: #000;
--bs-table-hover-bg: #bdd9e3;
--bs-table-hover-color: #000;
color: var(--bs-table-color);
border-color: var(--bs-table-border-color);
}
#sleep-timer-menu .table-warning {
--bs-table-color: #000;
--bs-table-bg: #f7e6d2;
--bs-table-border-color: #decfbd;
--bs-table-striped-bg: #ebdbc8;
--bs-table-striped-color: #000;
--bs-table-active-bg: #decfbd;
--bs-table-active-color: #000;
--bs-table-hover-bg: #e4d5c2;
--bs-table-hover-color: #000;
color: var(--bs-table-color);
border-color: var(--bs-table-border-color);
}
#sleep-timer-menu .table-danger {
--bs-table-color: #000;
--bs-table-bg: #ebdaec;
--bs-table-border-color: #d4c4d4;
--bs-table-striped-bg: #dfcfe0;
--bs-table-striped-color: #000;
--bs-table-active-bg: #d4c4d4;
--bs-table-active-color: #000;
--bs-table-hover-bg: #d9cada;
--bs-table-hover-color: #000;
color: var(--bs-table-color);
border-color: var(--bs-table-border-color);
}
#sleep-timer-menu .table-light {
--bs-table-color: #000;
--bs-table-bg: #fff;
--bs-table-border-color: #e6e6e6;
--bs-table-striped-bg: #f2f2f2;
--bs-table-striped-color: #000;
--bs-table-active-bg: #e6e6e6;
--bs-table-active-color: #000;
--bs-table-hover-bg: #ececec;
--bs-table-hover-color: #000;
color: var(--bs-table-color);
border-color: var(--bs-table-border-color);
}
#sleep-timer-menu .table-dark {
--bs-table-color: #fff;
--bs-table-bg: #373a3c;
--bs-table-border-color: #4b4e50;
--bs-table-striped-bg: #414446;
--bs-table-striped-color: #fff;
--bs-table-active-bg: #4b4e50;
--bs-table-active-color: #fff;
--bs-table-hover-bg: #46494b;
--bs-table-hover-color: #fff;
color: var(--bs-table-color);
border-color: var(--bs-table-border-color);
}
#sleep-timer-menu .table-responsive {
overflow-x: auto;
-webkit-overflow-scrolling: touch;
}
@media (max-width: 575.98px) {
#sleep-timer-menu .table-responsive-sm {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
}
@media (max-width: 767.98px) {
#sleep-timer-menu .table-responsive-md {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
}
@media (max-width: 991.98px) {
#sleep-timer-menu .table-responsive-lg {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
}
@media (max-width: 1199.98px) {
#sleep-timer-menu .table-responsive-xl {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
}
@media (max-width: 1399.98px) {
#sleep-timer-menu .table-responsive-xxl {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
}
#sleep-timer-menu .form-label {
margin-bottom: 0.5rem;
}
#sleep-timer-menu .col-form-label {
padding-top: calc(0.375rem + 1px);
padding-bottom: calc(0.375rem + 1px);
margin-bottom: 0;
font-size: inherit;
line-height: 1.5;
}
#sleep-timer-menu .col-form-label-lg {
padding-top: calc(0.5rem + 1px);
padding-bottom: calc(0.5rem + 1px);
font-size: 1.25rem;
}
#sleep-timer-menu .col-form-label-sm {
padding-top: calc(0.25rem + 1px);
padding-bottom: calc(0.25rem + 1px);
font-size: 0.875rem;
}
#sleep-timer-menu .form-text {
margin-top: 0.25rem;
font-size: 0.875em;
color: #777;
}
#sleep-timer-menu .form-control {
display: block;
width: 100%;
padding: 0.375rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
background-color: #fcfcfc;
background-clip: padding-box;
border: 1px solid #bbb;
appearance: none;
border-radius: 0.375rem;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .form-control {
  transition: none;
}
}
#sleep-timer-menu .form-control[type=file] {
overflow: hidden;
}
#sleep-timer-menu .form-control[type=file]:not(:disabled):not([readonly]) {
cursor: pointer;
}
#sleep-timer-menu .form-control:focus {
color: #212529;
background-color: #fcfcfc;
border-color: color-mix(in srgb, var(--spice-button, #1db954), #fff 50%);
outline: 0;
box-shadow: 0 0 0 0.25rem color-mix(in srgb, var(--spice-button, #1db954) 46%, #fff 17%);
}
#sleep-timer-menu .form-control::-webkit-date-and-time-value {
height: 1.5em;
}
#sleep-timer-menu .form-control::placeholder {
color: #777;
opacity: 1;
}
#sleep-timer-menu .form-control:disabled {
background-color: #ddd;
opacity: 1;
}
#sleep-timer-menu .form-control::file-selector-button {
padding: 0.375rem 0.75rem;
margin: -0.375rem -0.75rem;
margin-inline-end: 0.75rem;
color: #212529;
background-color: #ddd;
pointer-events: none;
border-color: inherit;
border-style: solid;
border-width: 0;
border-inline-end-width: 1px;
border-radius: 0;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .form-control::file-selector-button {
  transition: none;
}
}
#sleep-timer-menu .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
background-color: #d2d2d2;
}
#sleep-timer-menu .form-control-plaintext {
display: block;
width: 100%;
padding: 0.375rem 0;
margin-bottom: 0;
line-height: 1.5;
color: #212529;
background-color: transparent;
border: solid transparent;
border-width: 1px 0;
}
#sleep-timer-menu .form-control-plaintext:focus {
outline: 0;
}
#sleep-timer-menu .form-control-plaintext.form-control-sm, #sleep-timer-menu .form-control-plaintext.form-control-lg {
padding-right: 0;
padding-left: 0;
}
#sleep-timer-menu .form-control-sm {
min-height: calc(1.5em + 0.5rem + 2px);
padding: 0.25rem 0.5rem;
font-size: 0.875rem;
border-radius: 0.25rem;
}
#sleep-timer-menu .form-control-sm::file-selector-button {
padding: 0.25rem 0.5rem;
margin: -0.25rem -0.5rem;
margin-inline-end: 0.5rem;
}
#sleep-timer-menu .form-control-lg {
min-height: calc(1.5em + 1rem + 2px);
padding: 0.5rem 1rem;
font-size: 1.25rem;
border-radius: 0.5rem;
}
#sleep-timer-menu .form-control-lg::file-selector-button {
padding: 0.5rem 1rem;
margin: -0.5rem -1rem;
margin-inline-end: 1rem;
}
#sleep-timer-menu textarea.form-control {
min-height: calc(1.5em + 0.75rem + 2px);
}
#sleep-timer-menu textarea.form-control-sm {
min-height: calc(1.5em + 0.5rem + 2px);
}
#sleep-timer-menu textarea.form-control-lg {
min-height: calc(1.5em + 1rem + 2px);
}
#sleep-timer-menu .form-control-color {
width: 3rem;
height: calc(1.5em + 0.75rem + 2px);
padding: 0.375rem;
}
#sleep-timer-menu .form-control-color:not(:disabled):not([readonly]) {
cursor: pointer;
}
#sleep-timer-menu .form-control-color::-moz-color-swatch {
border: 0 !important;
border-radius: 0.375rem;
}
#sleep-timer-menu .form-control-color::-webkit-color-swatch {
border-radius: 0.375rem;
}
#sleep-timer-menu .form-control-color.form-control-sm {
height: calc(1.5em + 0.5rem + 2px);
}
#sleep-timer-menu .form-control-color.form-control-lg {
height: calc(1.5em + 1rem + 2px);
}
#sleep-timer-menu .form-select {
display: block;
width: 100%;
padding: 0.375rem 2.25rem 0.375rem 0.75rem;
-moz-padding-start: calc(0.75rem - 3px);
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
background-color: #fcfcfc;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23373a3c' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
background-repeat: no-repeat;
background-position: right 0.75rem center;
background-size: 16px 12px;
border: 1px solid #bbb;
border-radius: 0.375rem;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
appearance: none;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .form-select {
  transition: none;
}
}
#sleep-timer-menu .form-select:focus {
border-color: rgb(30 215 96 / 50%);
outline: 0;
box-shadow: 0 0 0 0.25rem rgba(30, 215, 96, 0.25);
}
#sleep-timer-menu .form-select[multiple], #sleep-timer-menu .form-select[size]:not([size="1"]) {
padding-right: 0.75rem;
background-image: none;
}
#sleep-timer-menu .form-select:disabled {
background-color: #ddd;
}
#sleep-timer-menu .form-select:-moz-focusring {
color: transparent;
text-shadow: 0 0 0 #212529;
}
#sleep-timer-menu .form-select-sm {
padding-top: 0.25rem;
padding-bottom: 0.25rem;
padding-left: 0.5rem;
font-size: 0.875rem;
border-radius: 0.25rem;
}
#sleep-timer-menu .form-select-lg {
padding-top: 0.5rem;
padding-bottom: 0.5rem;
padding-left: 1rem;
font-size: 1.25rem;
border-radius: 0.5rem;
}
#sleep-timer-menu .form-check {
display: block;
min-height: 1.5rem;
padding-left: 1.5em;
margin-bottom: 0.125rem;
}
#sleep-timer-menu .form-check .form-check-input {
float: left;
margin-left: -1.5em;
}
#sleep-timer-menu .form-check-reverse {
padding-right: 1.5em;
padding-left: 0;
text-align: right;
}
#sleep-timer-menu .form-check-reverse .form-check-input {
float: right;
margin-right: -1.5em;
margin-left: 0;
}
#sleep-timer-menu .form-check-input {
width: 1em;
height: 1em;
margin-top: 0.25em;
background-color: #fcfcfc;
background-repeat: no-repeat;
background-position: center;
background-size: contain;
border: 1px solid rgba(0, 0, 0, 0.25);
appearance: none;
print-color-adjust: exact;
}
#sleep-timer-menu .form-check-input[type=checkbox] {
border-radius: 0.25em;
}
#sleep-timer-menu .form-check-input[type=radio] {
border-radius: 50%;
}
#sleep-timer-menu .form-check-input:active {
filter: brightness(90%);
}
#sleep-timer-menu .form-check-input:focus {
border-color: rgba(30, 215, 96, 0.5);
outline: 0;
box-shadow: 0 0 0 0.25rem rgba(30, 215, 96, 0.25);
}
#sleep-timer-menu .form-check-input:checked {
background-color: #1ed760;
border-color: #1ed760;
}
#sleep-timer-menu .form-check-input:checked[type=checkbox] {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}
#sleep-timer-menu .form-check-input:checked[type=radio] {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
#sleep-timer-menu .form-check-input[type=checkbox]:indeterminate {
background-color: #1ed760;
border-color: #1ed760;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
#sleep-timer-menu .form-check-input:disabled {
pointer-events: none;
filter: none;
opacity: 0.5;
}
#sleep-timer-menu .form-check-input[disabled] ~ .form-check-label, #sleep-timer-menu .form-check-input:disabled ~ .form-check-label {
cursor: default;
opacity: 0.5;
}
#sleep-timer-menu .form-switch {
padding-left: 2.5em;
}
#sleep-timer-menu .form-switch .form-check-input {
width: 2em;
margin-left: -2.5em;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
background-position: left center;
border-radius: 2em;
transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .form-switch .form-check-input {
  transition: none;
}
}
#sleep-timer-menu .form-switch .form-check-input:focus {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23ec9187'/%3e%3c/svg%3e");
}
#sleep-timer-menu .form-switch .form-check-input:checked {
background-position: right center;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
#sleep-timer-menu .form-switch.form-check-reverse {
padding-right: 2.5em;
padding-left: 0;
}
#sleep-timer-menu .form-switch.form-check-reverse .form-check-input {
margin-right: -2.5em;
margin-left: 0;
}
#sleep-timer-menu .form-check-inline {
display: inline-block;
margin-right: 1rem;
}
#sleep-timer-menu .btn-check {
position: absolute;
clip: rect(0, 0, 0, 0);
pointer-events: none;
}
#sleep-timer-menu .btn-check[disabled] + .btn, #sleep-timer-menu .btn-check:disabled + .btn {
pointer-events: none;
filter: none;
opacity: 0.65;
}
#sleep-timer-menu .form-range {
width: 100%;
height: 1.5rem;
padding: 0;
background-color: transparent;
appearance: none;
}
#sleep-timer-menu .form-range:focus {
outline: 0;
}
#sleep-timer-menu .form-range:focus::-webkit-slider-thumb {
box-shadow: 0 0 0 1px #fcfcfc, 0 0 0 0.25rem rgba(30, 215, 96, 0.25);
}
#sleep-timer-menu .form-range:focus::-moz-range-thumb {
box-shadow: 0 0 0 1px #fcfcfc, 0 0 0 0.25rem rgba(30, 215, 96, 0.25);
}
#sleep-timer-menu .form-range::-moz-focus-outer {
border: 0;
}
#sleep-timer-menu .form-range::-webkit-slider-thumb {
width: 1rem;
height: 1rem;
margin-top: -0.25rem;
background-color: #1ed760;
border: 0;
border-radius: 1rem;
transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
appearance: none;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .form-range::-webkit-slider-thumb {
  transition: none;
}
}
#sleep-timer-menu .form-range::-webkit-slider-thumb:active {
background-color: #f4bdb7;
}
#sleep-timer-menu .form-range::-webkit-slider-runnable-track {
width: 100%;
height: 0.5rem;
color: transparent;
cursor: pointer;
background-color: #ccc;
border-color: transparent;
border-radius: 1rem;
}
#sleep-timer-menu .form-range::-moz-range-thumb {
width: 1rem;
height: 1rem;
background-color: #1ed760;
border: 0;
border-radius: 1rem;
transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
appearance: none;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .form-range::-moz-range-thumb {
  transition: none;
}
}
#sleep-timer-menu .form-range::-moz-range-thumb:active {
background-color: #f4bdb7;
}
#sleep-timer-menu .form-range::-moz-range-track {
width: 100%;
height: 0.5rem;
color: transparent;
cursor: pointer;
background-color: #ccc;
border-color: transparent;
border-radius: 1rem;
}
#sleep-timer-menu .form-range:disabled {
pointer-events: none;
}
#sleep-timer-menu .form-range:disabled::-webkit-slider-thumb {
background-color: #adb5bd;
}
#sleep-timer-menu .form-range:disabled::-moz-range-thumb {
background-color: #adb5bd;
}
#sleep-timer-menu .form-floating {
position: relative;
}
#sleep-timer-menu .form-floating > .form-control,
#sleep-timer-menu .form-floating > .form-control-plaintext,
#sleep-timer-menu .form-floating > .form-select {
height: calc(3.5rem + 2px);
line-height: 1.25;
}
#sleep-timer-menu .form-floating > label {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
padding: 1rem 0.75rem;
overflow: hidden;
text-align: start;
text-overflow: ellipsis;
white-space: nowrap;
pointer-events: none;
border: 1px solid transparent;
transform-origin: 0 0;
transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .form-floating > label {
  transition: none;
}
}
#sleep-timer-menu .form-floating > .form-control,
#sleep-timer-menu .form-floating > .form-control-plaintext {
padding: 1rem 0.75rem;
}
#sleep-timer-menu .form-floating > .form-control::placeholder,
#sleep-timer-menu .form-floating > .form-control-plaintext::placeholder {
color: transparent;
}
#sleep-timer-menu .form-floating > .form-control:focus, #sleep-timer-menu .form-floating > .form-control:not(:placeholder-shown),
#sleep-timer-menu .form-floating > .form-control-plaintext:focus,
#sleep-timer-menu .form-floating > .form-control-plaintext:not(:placeholder-shown) {
padding-top: 1.625rem;
padding-bottom: 0.625rem;
}
#sleep-timer-menu .form-floating > .form-control:-webkit-autofill,
#sleep-timer-menu .form-floating > .form-control-plaintext:-webkit-autofill {
padding-top: 1.625rem;
padding-bottom: 0.625rem;
}
#sleep-timer-menu .form-floating > .form-select {
padding-top: 1.625rem;
padding-bottom: 0.625rem;
}
#sleep-timer-menu .form-floating > .form-control:focus ~ label,
#sleep-timer-menu .form-floating > .form-control:not(:placeholder-shown) ~ label,
#sleep-timer-menu .form-floating > .form-control-plaintext ~ label,
#sleep-timer-menu .form-floating > .form-select ~ label {
opacity: 0.65;
transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
#sleep-timer-menu .form-floating > .form-control:-webkit-autofill ~ label {
opacity: 0.65;
transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
#sleep-timer-menu .form-floating > .form-control-plaintext ~ label {
border-width: 1px 0;
}
#sleep-timer-menu .input-group {
position: relative;
display: flex;
flex-wrap: wrap;
align-items: stretch;
width: 100%;
}
#sleep-timer-menu .input-group > .form-control,
#sleep-timer-menu .input-group > .form-select,
#sleep-timer-menu .input-group > .form-floating {
position: relative;
flex: 1 1 auto;
width: 1%;
min-width: 0;
}
#sleep-timer-menu .input-group > .form-control:focus,
#sleep-timer-menu .input-group > .form-select:focus,
#sleep-timer-menu .input-group > .form-floating:focus-within {
z-index: 5;
}
#sleep-timer-menu .input-group .btn {
position: relative;
z-index: 2;
}
#sleep-timer-menu .input-group .btn:focus {
z-index: 5;
}
#sleep-timer-menu .input-group-text {
display: flex;
align-items: center;
padding: 0.375rem 0.75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
text-align: center;
white-space: nowrap;
background-color: #ddd;
border: 1px solid #bbb;
border-radius: 0.375rem;
}
#sleep-timer-menu .input-group-lg > .form-control,
#sleep-timer-menu .input-group-lg > .form-select,
#sleep-timer-menu .input-group-lg > .input-group-text,
#sleep-timer-menu .input-group-lg > .btn {
padding: 0.5rem 1rem;
font-size: 1.25rem;
border-radius: 0.5rem;
}
#sleep-timer-menu .input-group-sm > .form-control,
#sleep-timer-menu .input-group-sm > .form-select,
#sleep-timer-menu .input-group-sm > .input-group-text,
#sleep-timer-menu .input-group-sm > .btn {
padding: 0.25rem 0.5rem;
font-size: 0.875rem;
border-radius: 0.25rem;
}
#sleep-timer-menu .input-group-lg > .form-select,
#sleep-timer-menu .input-group-sm > .form-select {
padding-right: 3rem;
}
#sleep-timer-menu .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
#sleep-timer-menu .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3),
#sleep-timer-menu .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control,
#sleep-timer-menu .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select {
border-top-right-radius: 0;
border-bottom-right-radius: 0;
}
#sleep-timer-menu .input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
#sleep-timer-menu .input-group.has-validation > .dropdown-toggle:nth-last-child(n+4),
#sleep-timer-menu .input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control,
#sleep-timer-menu .input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select {
border-top-right-radius: 0;
border-bottom-right-radius: 0;
}
#sleep-timer-menu .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
margin-left: -1px;
border-top-left-radius: 0;
border-bottom-left-radius: 0;
}
#sleep-timer-menu .input-group > .form-floating:not(:first-child) > .form-control,
#sleep-timer-menu .input-group > .form-floating:not(:first-child) > .form-select {
border-top-left-radius: 0;
border-bottom-left-radius: 0;
}
#sleep-timer-menu .valid-feedback {
display: none;
width: 100%;
margin-top: 0.25rem;
font-size: 0.875em;
color: #469408;
}
#sleep-timer-menu .valid-tooltip {
position: absolute;
top: 100%;
z-index: 5;
display: none;
max-width: 100%;
padding: 0.25rem 0.5rem;
margin-top: 0.1rem;
font-size: 0.875rem;
color: #fff;
background-color: rgba(70, 148, 8, 0.9);
border-radius: 0.375rem;
}
.was-validated #sleep-timer-menu:valid ~ .valid-feedback,
.was-validated #sleep-timer-menu:valid ~ .valid-tooltip, #sleep-timer-menu.is-valid ~ .valid-feedback,
#sleep-timer-menu.is-valid ~ .valid-tooltip {
display: block;
}
.was-validated #sleep-timer-menu .form-control:valid, #sleep-timer-menu .form-control.is-valid {
border-color: #469408;
padding-right: calc(1.5em + 0.75rem);
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23469408' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
background-repeat: no-repeat;
background-position: right calc(0.375em + 0.1875rem) center;
background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated #sleep-timer-menu .form-control:valid:focus, #sleep-timer-menu .form-control.is-valid:focus {
border-color: #469408;
box-shadow: 0 0 0 0.25rem rgba(70, 148, 8, 0.25);
}
.was-validated #sleep-timer-menu textarea.form-control:valid, #sleep-timer-menu textarea.form-control.is-valid {
padding-right: calc(1.5em + 0.75rem);
background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}
.was-validated #sleep-timer-menu .form-select:valid, #sleep-timer-menu .form-select.is-valid {
border-color: #469408;
}
.was-validated #sleep-timer-menu .form-select:valid:not([multiple]):not([size]), .was-validated #sleep-timer-menu .form-select:valid:not([multiple])[size="1"], #sleep-timer-menu .form-select.is-valid:not([multiple]):not([size]), #sleep-timer-menu .form-select.is-valid:not([multiple])[size="1"] {
padding-right: 4.125rem;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23373a3c' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23469408' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
background-position: right 0.75rem center, center right 2.25rem;
background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated #sleep-timer-menu .form-select:valid:focus, #sleep-timer-menu .form-select.is-valid:focus {
border-color: #469408;
box-shadow: 0 0 0 0.25rem rgba(70, 148, 8, 0.25);
}
.was-validated #sleep-timer-menu .form-control-color:valid, #sleep-timer-menu .form-control-color.is-valid {
width: calc(3rem + calc(1.5em + 0.75rem));
}
.was-validated #sleep-timer-menu .form-check-input:valid, #sleep-timer-menu .form-check-input.is-valid {
border-color: #469408;
}
.was-validated #sleep-timer-menu .form-check-input:valid:checked, #sleep-timer-menu .form-check-input.is-valid:checked {
background-color: #469408;
}
.was-validated #sleep-timer-menu .form-check-input:valid:focus, #sleep-timer-menu .form-check-input.is-valid:focus {
box-shadow: 0 0 0 0.25rem rgba(70, 148, 8, 0.25);
}
.was-validated #sleep-timer-menu .form-check-input:valid ~ .form-check-label, #sleep-timer-menu .form-check-input.is-valid ~ .form-check-label {
color: #469408;
}
#sleep-timer-menu .form-check-inline .form-check-input ~ .valid-feedback {
margin-left: 0.5em;
}
.was-validated #sleep-timer-menu .input-group > .form-control:not(:focus):valid, #sleep-timer-menu .input-group > .form-control:not(:focus).is-valid,
.was-validated #sleep-timer-menu .input-group > .form-select:not(:focus):valid,
#sleep-timer-menu .input-group > .form-select:not(:focus).is-valid,
.was-validated #sleep-timer-menu .input-group > .form-floating:not(:focus-within):valid,
#sleep-timer-menu .input-group > .form-floating:not(:focus-within).is-valid {
z-index: 3;
}
#sleep-timer-menu .invalid-feedback {
display: none;
width: 100%;
margin-top: 0.25rem;
font-size: 0.875em;
color: #9b479f;
}
#sleep-timer-menu .invalid-tooltip {
position: absolute;
top: 100%;
z-index: 5;
display: none;
max-width: 100%;
padding: 0.25rem 0.5rem;
margin-top: 0.1rem;
font-size: 0.875rem;
color: #fff;
background-color: rgba(155, 71, 159, 0.9);
border-radius: 0.375rem;
}
.was-validated #sleep-timer-menu:invalid ~ .invalid-feedback,
.was-validated #sleep-timer-menu:invalid ~ .invalid-tooltip, #sleep-timer-menu.is-invalid ~ .invalid-feedback,
#sleep-timer-menu.is-invalid ~ .invalid-tooltip {
display: block;
}
.was-validated #sleep-timer-menu .form-control:invalid, #sleep-timer-menu .form-control.is-invalid {
border-color: #9b479f;
padding-right: calc(1.5em + 0.75rem);
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%239b479f'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%239b479f' stroke='none'/%3e%3c/svg%3e");
background-repeat: no-repeat;
background-position: right calc(0.375em + 0.1875rem) center;
background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated #sleep-timer-menu .form-control:invalid:focus, #sleep-timer-menu .form-control.is-invalid:focus {
border-color: #9b479f;
box-shadow: 0 0 0 0.25rem rgba(155, 71, 159, 0.25);
}
.was-validated #sleep-timer-menu textarea.form-control:invalid, #sleep-timer-menu textarea.form-control.is-invalid {
padding-right: calc(1.5em + 0.75rem);
background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}
.was-validated #sleep-timer-menu .form-select:invalid, #sleep-timer-menu .form-select.is-invalid {
border-color: #9b479f;
}
.was-validated #sleep-timer-menu .form-select:invalid:not([multiple]):not([size]), .was-validated #sleep-timer-menu .form-select:invalid:not([multiple])[size="1"], #sleep-timer-menu .form-select.is-invalid:not([multiple]):not([size]), #sleep-timer-menu .form-select.is-invalid:not([multiple])[size="1"] {
padding-right: 4.125rem;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23373a3c' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%239b479f'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%239b479f' stroke='none'/%3e%3c/svg%3e");
background-position: right 0.75rem center, center right 2.25rem;
background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated #sleep-timer-menu .form-select:invalid:focus, #sleep-timer-menu .form-select.is-invalid:focus {
border-color: #9b479f;
box-shadow: 0 0 0 0.25rem rgba(155, 71, 159, 0.25);
}
.was-validated #sleep-timer-menu .form-control-color:invalid, #sleep-timer-menu .form-control-color.is-invalid {
width: calc(3rem + calc(1.5em + 0.75rem));
}
.was-validated #sleep-timer-menu .form-check-input:invalid, #sleep-timer-menu .form-check-input.is-invalid {
border-color: #9b479f;
}
.was-validated #sleep-timer-menu .form-check-input:invalid:checked, #sleep-timer-menu .form-check-input.is-invalid:checked {
background-color: #9b479f;
}
.was-validated #sleep-timer-menu .form-check-input:invalid:focus, #sleep-timer-menu .form-check-input.is-invalid:focus {
box-shadow: 0 0 0 0.25rem rgba(155, 71, 159, 0.25);
}
.was-validated #sleep-timer-menu .form-check-input:invalid ~ .form-check-label, #sleep-timer-menu .form-check-input.is-invalid ~ .form-check-label {
color: #9b479f;
}
#sleep-timer-menu .form-check-inline .form-check-input ~ .invalid-feedback {
margin-left: 0.5em;
}
.was-validated #sleep-timer-menu .input-group > .form-control:not(:focus):invalid, #sleep-timer-menu .input-group > .form-control:not(:focus).is-invalid,
.was-validated #sleep-timer-menu .input-group > .form-select:not(:focus):invalid,
#sleep-timer-menu .input-group > .form-select:not(:focus).is-invalid,
.was-validated #sleep-timer-menu .input-group > .form-floating:not(:focus-within):invalid,
#sleep-timer-menu .input-group > .form-floating:not(:focus-within).is-invalid {
z-index: 4;
}
#sleep-timer-menu .btn {
--bs-btn-padding-x: 0.75rem;
--bs-btn-padding-y: 0.375rem;
--bs-btn-font-family: ;
--bs-btn-font-size: 1rem;
--bs-btn-font-weight: 400;
--bs-btn-line-height: 1.5;
--bs-btn-color: #212529;
--bs-btn-bg: transparent;
--bs-btn-border-width: 1px;
--bs-btn-border-color: transparent;
--bs-btn-border-radius: 0.375rem;
--bs-btn-hover-border-color: transparent;
--bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
--bs-btn-disabled-opacity: 0.65;
--bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
display: inline-block;
padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
font-family: var(--bs-btn-font-family);
font-size: var(--bs-btn-font-size);
font-weight: var(--bs-btn-font-weight);
line-height: var(--bs-btn-line-height);
color: var(--bs-btn-color);
text-align: center;
text-decoration: none;
vertical-align: middle;
cursor: pointer;
user-select: none;
border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
border-radius: var(--bs-btn-border-radius) !important;
background-color: var(--bs-btn-bg);
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .btn {
  transition: none;
}
}
:not(.btn-check) + #sleep-timer-menu .btn:hover, #sleep-timer-menu .btn:first-child:hover {
color: var(--bs-btn-hover-color);
background-color: var(--bs-btn-hover-bg);
border-color: var(--bs-btn-hover-border-color);
}
#sleep-timer-menu .btn:focus-visible {
color: var(--bs-btn-hover-color);
background-color: var(--bs-btn-hover-bg);
border-color: var(--bs-btn-hover-border-color);
outline: 0;
box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn-check:focus-visible + #sleep-timer-menu .btn {
border-color: var(--bs-btn-hover-border-color);
outline: 0;
box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn-check:checked + #sleep-timer-menu .btn, :not(.btn-check) + #sleep-timer-menu .btn:active, #sleep-timer-menu .btn:first-child:active, #sleep-timer-menu .btn.active, #sleep-timer-menu .btn.show {
color: var(--bs-btn-active-color);
background-color: var(--bs-btn-active-bg);
border-color: var(--bs-btn-active-border-color);
}
.btn-check:checked + #sleep-timer-menu .btn:focus-visible, :not(.btn-check) + #sleep-timer-menu .btn:active:focus-visible, #sleep-timer-menu .btn:first-child:active:focus-visible, #sleep-timer-menu .btn.active:focus-visible, #sleep-timer-menu .btn.show:focus-visible {
box-shadow: var(--bs-btn-focus-box-shadow);
}
#sleep-timer-menu .btn:disabled, #sleep-timer-menu .btn.disabled, fieldset:disabled #sleep-timer-menu .btn {
color: var(--bs-btn-disabled-color);
pointer-events: none;
background-color: var(--spice-button-disabled, var(--bs-btn-disabled-bg));
border-color: var(--spice-highlight-elevated, var(--bs-btn-disabled-border-color));
opacity: var(--bs-btn-disabled-opacity);
cursor: grabbing;
}
#sleep-timer-menu .btn-primary {
--bs-btn-color: #fff;
--bs-btn-bg: #d9230f;
--bs-btn-border-color: #d9230f;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #b81e0d;
--bs-btn-hover-border-color: #ae1c0c;
--bs-btn-focus-shadow-rgb: 223, 68, 51;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #ae1c0c;
--bs-btn-active-border-color: #a31a0b;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #fff;
--bs-btn-disabled-bg: #d9230f;
--bs-btn-disabled-border-color: #d9230f;
}
#sleep-timer-menu .btn-secondary {
--bs-btn-color: #000;
--bs-btn-bg: #fff;
--bs-btn-border-color: #fff;
--bs-btn-hover-color: #000;
--bs-btn-hover-bg: white;
--bs-btn-hover-border-color: white;
--bs-btn-focus-shadow-rgb: 217, 217, 217;
--bs-btn-active-color: #000;
--bs-btn-active-bg: white;
--bs-btn-active-border-color: white;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #000;
--bs-btn-disabled-bg: #fff;
--bs-btn-disabled-border-color: #fff;
}
#sleep-timer-menu .btn-success {
--bs-btn-color: #fff;
--bs-btn-bg: #469408;
--bs-btn-border-color: #159b44;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #159b44;
--bs-btn-hover-border-color: #1ed760;
--bs-btn-focus-shadow-rgb: 98, 164, 45;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #1ed760;
--bs-btn-active-border-color: #356f06;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #fff;
--bs-btn-disabled-bg: #28361d;
--bs-btn-disabled-border-color: #469408;
}
#sleep-timer-menu .btn-info {
--bs-btn-color: #fff;
--bs-btn-bg: #029acf;
--bs-btn-border-color: #029acf;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #0283b0;
--bs-btn-hover-border-color: #027ba6;
--bs-btn-focus-shadow-rgb: 40, 169, 214;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #027ba6;
--bs-btn-active-border-color: #02749b;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #fff;
--bs-btn-disabled-bg: #029acf;
--bs-btn-disabled-border-color: #029acf;
}
#sleep-timer-menu .btn-warning {
--bs-btn-color: #fff;
--bs-btn-bg: #d9831f;
--bs-btn-border-color: #d9831f;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #b86f1a;
--bs-btn-hover-border-color: #ae6919;
--bs-btn-focus-shadow-rgb: 223, 150, 65;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #ae6919;
--bs-btn-active-border-color: #a36217;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #fff;
--bs-btn-disabled-bg: #d9831f;
--bs-btn-disabled-border-color: #d9831f;
}
#sleep-timer-menu .btn-danger {
--bs-btn-color: #fff;
--bs-btn-bg: #9b479f;
--bs-btn-border-color: #9b479f;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #843c87;
--bs-btn-hover-border-color: #7c397f;
--bs-btn-focus-shadow-rgb: 170, 99, 173;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #7c397f;
--bs-btn-active-border-color: #743577;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #fff;
--bs-btn-disabled-bg: #9b479f;
--bs-btn-disabled-border-color: #9b479f;
}
#sleep-timer-menu .btn-light {
--bs-btn-color: #000;
--bs-btn-bg: #fff;
--bs-btn-border-color: #fff;
--bs-btn-hover-color: #000;
--bs-btn-hover-bg: #d9d9d9;
--bs-btn-hover-border-color: #cccccc;
--bs-btn-focus-shadow-rgb: 217, 217, 217;
--bs-btn-active-color: #000;
--bs-btn-active-bg: #cccccc;
--bs-btn-active-border-color: #bfbfbf;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #000;
--bs-btn-disabled-bg: #fff;
--bs-btn-disabled-border-color: #fff;
}
#sleep-timer-menu .btn-dark {
--bs-btn-color: #fff;
--bs-btn-bg: #373a3c;
--bs-btn-border-color: #373a3c;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #555859;
--bs-btn-hover-border-color: #4b4e50;
--bs-btn-focus-shadow-rgb: 85, 88, 89;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #5f6163;
--bs-btn-active-border-color: #4b4e50;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #fff;
--bs-btn-disabled-bg: #373a3c;
--bs-btn-disabled-border-color: #373a3c;
}
#sleep-timer-menu .btn-outline-primary {
--bs-btn-color: #1ed760;
--bs-btn-border-color: #1ed760;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #1ed760;
--bs-btn-hover-border-color: #1ed760;
--bs-btn-focus-shadow-rgb: 30, 215, 96;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #1ed760;
--bs-btn-active-border-color: #1ed760;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #1ed760;
--bs-btn-disabled-bg: transparent;
--bs-btn-disabled-border-color: #1ed760;
--bs-gradient: none;
}
#sleep-timer-menu .btn-outline-secondary {
--bs-btn-color: #fff;
--bs-btn-border-color: #fff;
--bs-btn-hover-color: #000;
--bs-btn-hover-bg: #fff;
--bs-btn-hover-border-color: #fff;
--bs-btn-focus-shadow-rgb: 30, 215, 96;
--bs-btn-active-color: #000;
--bs-btn-active-bg: #fff;
--bs-btn-active-border-color: #fff;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #fff;
--bs-btn-disabled-bg: transparent;
--bs-btn-disabled-border-color: #fff;
--bs-gradient: none;
}
#sleep-timer-menu .btn-outline-success {
--bs-btn-color: #469408;
--bs-btn-border-color: #469408;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #469408;
--bs-btn-hover-border-color: #469408;
--bs-btn-focus-shadow-rgb: 70, 148, 8;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #469408;
--bs-btn-active-border-color: #469408;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #469408;
--bs-btn-disabled-bg: transparent;
--bs-btn-disabled-border-color: #469408;
--bs-gradient: none;
}
#sleep-timer-menu .btn-outline-info {
--bs-btn-color: #029acf;
--bs-btn-border-color: #029acf;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #029acf;
--bs-btn-hover-border-color: #029acf;
--bs-btn-focus-shadow-rgb: 2, 154, 207;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #029acf;
--bs-btn-active-border-color: #029acf;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #029acf;
--bs-btn-disabled-bg: transparent;
--bs-btn-disabled-border-color: #029acf;
--bs-gradient: none;
}
#sleep-timer-menu .btn-outline-warning {
--bs-btn-color: #d9831f;
--bs-btn-border-color: #d9831f;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #d9831f;
--bs-btn-hover-border-color: #d9831f;
--bs-btn-focus-shadow-rgb: 217, 131, 31;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #d9831f;
--bs-btn-active-border-color: #d9831f;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #d9831f;
--bs-btn-disabled-bg: transparent;
--bs-btn-disabled-border-color: #d9831f;
--bs-gradient: none;
}
#sleep-timer-menu .btn-outline-danger {
--bs-btn-color: #9b479f;
--bs-btn-border-color: #9b479f;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #9b479f;
--bs-btn-hover-border-color: #9b479f;
--bs-btn-focus-shadow-rgb: 155, 71, 159;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #9b479f;
--bs-btn-active-border-color: #9b479f;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #9b479f;
--bs-btn-disabled-bg: transparent;
--bs-btn-disabled-border-color: #9b479f;
--bs-gradient: none;
}
#sleep-timer-menu .btn-outline-light {
--bs-btn-color: #fff;
--bs-btn-border-color: #fff;
--bs-btn-hover-color: #000;
--bs-btn-hover-bg: #fff;
--bs-btn-hover-border-color: #fff;
--bs-btn-focus-shadow-rgb: 255, 255, 255;
--bs-btn-active-color: #000;
--bs-btn-active-bg: #fff;
--bs-btn-active-border-color: #fff;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #fff;
--bs-btn-disabled-bg: transparent;
--bs-btn-disabled-border-color: #fff;
--bs-gradient: none;
}
#sleep-timer-menu .btn-outline-dark {
--bs-btn-color: #373a3c;
--bs-btn-border-color: #373a3c;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #373a3c;
--bs-btn-hover-border-color: #373a3c;
--bs-btn-focus-shadow-rgb: 55, 58, 60;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: #373a3c;
--bs-btn-active-border-color: #373a3c;
--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
--bs-btn-disabled-color: #373a3c;
--bs-btn-disabled-bg: transparent;
--bs-btn-disabled-border-color: #373a3c;
--bs-gradient: none;
}
#sleep-timer-menu .btn-link {
--bs-btn-font-weight: 400;
--bs-btn-color: var(--bs-link-color);
--bs-btn-bg: transparent;
--bs-btn-border-color: transparent;
--bs-btn-hover-color: var(--bs-link-hover-color);
--bs-btn-hover-border-color: transparent;
--bs-btn-active-color: var(--bs-link-hover-color);
--bs-btn-active-border-color: transparent;
--bs-btn-disabled-color: #777;
--bs-btn-disabled-border-color: transparent;
--bs-btn-box-shadow: none;
--bs-btn-focus-shadow-rgb: 223, 68, 51;
text-decoration: underline;
}
#sleep-timer-menu .btn-link:focus-visible {
color: var(--bs-btn-color);
}
#sleep-timer-menu .btn-link:hover {
color: var(--bs-btn-hover-color);
}
#sleep-timer-menu .btn-lg, #sleep-timer-menu .btn-group-lg > .btn {
--bs-btn-padding-y: 0.5rem;
--bs-btn-padding-x: 1rem;
--bs-btn-font-size: 1.25rem;
--bs-btn-border-radius: 0.5rem;
}
#sleep-timer-menu .btn-sm, #sleep-timer-menu .btn-group-sm > .btn {
--bs-btn-padding-y: 0.25rem;
--bs-btn-padding-x: 0.5rem;
--bs-btn-font-size: 0.875rem;
--bs-btn-border-radius: 0.25rem;
}
#sleep-timer-menu .fade {
transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .fade {
  transition: none;
}
}
#sleep-timer-menu .fade:not(.show) {
opacity: 0;
}
#sleep-timer-menu .collapse:not(.show) {
display: none;
}
#sleep-timer-menu .collapsing {
height: 0;
overflow: hidden;
transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .collapsing {
  transition: none;
}
}
#sleep-timer-menu .collapsing.collapse-horizontal {
width: 0;
height: auto;
transition: width 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .collapsing.collapse-horizontal {
  transition: none;
}
}
#sleep-timer-menu .dropup,
#sleep-timer-menu .dropend,
#sleep-timer-menu .dropdown,
#sleep-timer-menu .dropstart,
#sleep-timer-menu .dropup-center,
#sleep-timer-menu .dropdown-center {
position: relative;
}
#sleep-timer-menu .dropdown-toggle {
white-space: nowrap;
}
#sleep-timer-menu .dropdown-toggle::after {
display: inline-block;
margin-left: 0.255em;
vertical-align: 0.255em;
content: "";
border-top: 0.3em solid;
border-right: 0.3em solid transparent;
border-bottom: 0;
border-left: 0.3em solid transparent;
}
#sleep-timer-menu .dropdown-toggle:empty::after {
margin-left: 0;
}
#sleep-timer-menu .dropdown-menu {
--bs-dropdown-zindex: 1000;
--bs-dropdown-min-width: 10rem;
--bs-dropdown-padding-x: 0;
--bs-dropdown-padding-y: 0.5rem;
--bs-dropdown-spacer: 0.125rem;
--bs-dropdown-font-size: 1rem;
--bs-dropdown-color: #212529;
--bs-dropdown-bg: #fff;
--bs-dropdown-border-color: var(--bs-border-color-translucent);
--bs-dropdown-border-radius: 0.375rem;
--bs-dropdown-border-width: 1px;
--bs-dropdown-inner-border-radius: calc(0.375rem - 1px);
--bs-dropdown-divider-bg: var(--bs-border-color-translucent);
--bs-dropdown-divider-margin-y: 0.5rem;
--bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
--bs-dropdown-link-color: #212529;
--bs-dropdown-link-hover-color: #fff;
--bs-dropdown-link-hover-bg: #1ed760;
--bs-dropdown-link-active-color: #fff;
--bs-dropdown-link-active-bg: #1ed760;
--bs-dropdown-link-disabled-color: #adb5bd;
--bs-dropdown-item-padding-x: 1rem;
--bs-dropdown-item-padding-y: 0.25rem;
--bs-dropdown-header-color: #777;
--bs-dropdown-header-padding-x: 1rem;
--bs-dropdown-header-padding-y: 0.5rem;
position: absolute;
z-index: var(--bs-dropdown-zindex);
display: none;
min-width: var(--bs-dropdown-min-width);
padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
margin: 0;
font-size: var(--bs-dropdown-font-size);
color: var(--bs-dropdown-color);
text-align: left;
list-style: none;
background-color: var(--bs-dropdown-bg);
background-clip: padding-box;
border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
border-radius: var(--bs-dropdown-border-radius);
}
#sleep-timer-menu .dropdown-menu[data-bs-popper] {
top: 100%;
left: 0;
margin-top: var(--bs-dropdown-spacer);
}
#sleep-timer-menu .dropdown-menu-start {
--bs-position: start;
}
#sleep-timer-menu .dropdown-menu-start[data-bs-popper] {
right: auto;
left: 0;
}
#sleep-timer-menu .dropdown-menu-end {
--bs-position: end;
}
#sleep-timer-menu .dropdown-menu-end[data-bs-popper] {
right: 0;
left: auto;
}
@media (min-width: 576px) {
#sleep-timer-menu .dropdown-menu-sm-start {
  --bs-position: start;
}
#sleep-timer-menu .dropdown-menu-sm-start[data-bs-popper] {
  right: auto;
  left: 0;
}
#sleep-timer-menu .dropdown-menu-sm-end {
  --bs-position: end;
}
#sleep-timer-menu .dropdown-menu-sm-end[data-bs-popper] {
  right: 0;
  left: auto;
}
}
@media (min-width: 768px) {
#sleep-timer-menu .dropdown-menu-md-start {
  --bs-position: start;
}
#sleep-timer-menu .dropdown-menu-md-start[data-bs-popper] {
  right: auto;
  left: 0;
}
#sleep-timer-menu .dropdown-menu-md-end {
  --bs-position: end;
}
#sleep-timer-menu .dropdown-menu-md-end[data-bs-popper] {
  right: 0;
  left: auto;
}
}
@media (min-width: 992px) {
#sleep-timer-menu .dropdown-menu-lg-start {
  --bs-position: start;
}
#sleep-timer-menu .dropdown-menu-lg-start[data-bs-popper] {
  right: auto;
  left: 0;
}
#sleep-timer-menu .dropdown-menu-lg-end {
  --bs-position: end;
}
#sleep-timer-menu .dropdown-menu-lg-end[data-bs-popper] {
  right: 0;
  left: auto;
}
}
@media (min-width: 1200px) {
#sleep-timer-menu .dropdown-menu-xl-start {
  --bs-position: start;
}
#sleep-timer-menu .dropdown-menu-xl-start[data-bs-popper] {
  right: auto;
  left: 0;
}
#sleep-timer-menu .dropdown-menu-xl-end {
  --bs-position: end;
}
#sleep-timer-menu .dropdown-menu-xl-end[data-bs-popper] {
  right: 0;
  left: auto;
}
}
@media (min-width: 1400px) {
#sleep-timer-menu .dropdown-menu-xxl-start {
  --bs-position: start;
}
#sleep-timer-menu .dropdown-menu-xxl-start[data-bs-popper] {
  right: auto;
  left: 0;
}
#sleep-timer-menu .dropdown-menu-xxl-end {
  --bs-position: end;
}
#sleep-timer-menu .dropdown-menu-xxl-end[data-bs-popper] {
  right: 0;
  left: auto;
}
}
#sleep-timer-menu .dropup .dropdown-menu[data-bs-popper] {
top: auto;
bottom: 100%;
margin-top: 0;
margin-bottom: var(--bs-dropdown-spacer);
}
#sleep-timer-menu .dropup .dropdown-toggle::after {
display: inline-block;
margin-left: 0.255em;
vertical-align: 0.255em;
content: "";
border-top: 0;
border-right: 0.3em solid transparent;
border-bottom: 0.3em solid;
border-left: 0.3em solid transparent;
}
#sleep-timer-menu .dropup .dropdown-toggle:empty::after {
margin-left: 0;
}
#sleep-timer-menu .dropend .dropdown-menu[data-bs-popper] {
top: 0;
right: auto;
left: 100%;
margin-top: 0;
margin-left: var(--bs-dropdown-spacer);
}
#sleep-timer-menu .dropend .dropdown-toggle::after {
display: inline-block;
margin-left: 0.255em;
vertical-align: 0.255em;
content: "";
border-top: 0.3em solid transparent;
border-right: 0;
border-bottom: 0.3em solid transparent;
border-left: 0.3em solid;
}
#sleep-timer-menu .dropend .dropdown-toggle:empty::after {
margin-left: 0;
}
#sleep-timer-menu .dropend .dropdown-toggle::after {
vertical-align: 0;
}
#sleep-timer-menu .dropstart .dropdown-menu[data-bs-popper] {
top: 0;
right: 100%;
left: auto;
margin-top: 0;
margin-right: var(--bs-dropdown-spacer);
}
#sleep-timer-menu .dropstart .dropdown-toggle::after {
display: inline-block;
margin-left: 0.255em;
vertical-align: 0.255em;
content: "";
}
#sleep-timer-menu .dropstart .dropdown-toggle::after {
display: none;
}
#sleep-timer-menu .dropstart .dropdown-toggle::before {
display: inline-block;
margin-right: 0.255em;
vertical-align: 0.255em;
content: "";
border-top: 0.3em solid transparent;
border-right: 0.3em solid;
border-bottom: 0.3em solid transparent;
}
#sleep-timer-menu .dropstart .dropdown-toggle:empty::after {
margin-left: 0;
}
#sleep-timer-menu .dropstart .dropdown-toggle::before {
vertical-align: 0;
}
#sleep-timer-menu .dropdown-divider {
height: 0;
margin: var(--bs-dropdown-divider-margin-y) 0;
overflow: hidden;
border-top: 1px solid var(--bs-dropdown-divider-bg);
opacity: 1;
}
#sleep-timer-menu .dropdown-item {
display: block;
width: 100%;
padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
clear: both;
font-weight: 400;
color: var(--bs-dropdown-link-color);
text-align: inherit;
text-decoration: none;
white-space: nowrap;
background-color: transparent;
border: 0;
}
#sleep-timer-menu .dropdown-item:hover, #sleep-timer-menu .dropdown-item:focus {
color: var(--bs-dropdown-link-hover-color);
background-color: var(--bs-dropdown-link-hover-bg);
}
#sleep-timer-menu .dropdown-item.active, #sleep-timer-menu .dropdown-item:active {
color: var(--bs-dropdown-link-active-color);
text-decoration: none;
background-color: var(--bs-dropdown-link-active-bg);
}
#sleep-timer-menu .dropdown-item.disabled, #sleep-timer-menu .dropdown-item:disabled {
color: var(--bs-dropdown-link-disabled-color);
pointer-events: none;
background-color: transparent;
}
#sleep-timer-menu .dropdown-menu.show {
display: block;
}
#sleep-timer-menu .dropdown-header {
display: block;
padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
margin-bottom: 0;
font-size: 0.875rem;
color: var(--bs-dropdown-header-color);
white-space: nowrap;
}
#sleep-timer-menu .dropdown-item-text {
display: block;
padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
color: var(--bs-dropdown-link-color);
}
#sleep-timer-menu .dropdown-menu-dark {
--bs-dropdown-color: #ccc;
--bs-dropdown-bg: #373a3c;
--bs-dropdown-border-color: var(--bs-border-color-translucent);
--bs-dropdown-box-shadow: ;
--bs-dropdown-link-color: #ccc;
--bs-dropdown-link-hover-color: #fff;
--bs-dropdown-divider-bg: var(--bs-border-color-translucent);
--bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);
--bs-dropdown-link-active-color: #fff;
--bs-dropdown-link-active-bg: #1ed760;
--bs-dropdown-link-disabled-color: #adb5bd;
--bs-dropdown-header-color: #adb5bd;
}
#sleep-timer-menu .btn-group,
#sleep-timer-menu .btn-group-vertical {
position: relative;
display: inline-flex;
vertical-align: middle;
}
#sleep-timer-menu .btn-group > .btn,
#sleep-timer-menu .btn-group-vertical > .btn {
position: relative;
flex: 1 1 auto;
}
#sleep-timer-menu .btn-group > .btn-check:checked + .btn,
#sleep-timer-menu .btn-group > .btn-check:focus + .btn,
#sleep-timer-menu .btn-group > .btn:hover,
#sleep-timer-menu .btn-group > .btn:focus,
#sleep-timer-menu .btn-group > .btn:active,
#sleep-timer-menu .btn-group > .btn.active,
#sleep-timer-menu .btn-group-vertical > .btn-check:checked + .btn,
#sleep-timer-menu .btn-group-vertical > .btn-check:focus + .btn,
#sleep-timer-menu .btn-group-vertical > .btn:hover,
#sleep-timer-menu .btn-group-vertical > .btn:focus,
#sleep-timer-menu .btn-group-vertical > .btn:active,
#sleep-timer-menu .btn-group-vertical > .btn.active {
z-index: 1;
}
#sleep-timer-menu .btn-toolbar {
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
}
#sleep-timer-menu .btn-toolbar .input-group {
width: auto;
}
#sleep-timer-menu .btn-group {
border-radius: 0.375rem;
}
#sleep-timer-menu .btn-group > :not(.btn-check:first-child) + .btn,
#sleep-timer-menu .btn-group > .btn-group:not(:first-child) {
margin-left: -1px;
}
#sleep-timer-menu .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
#sleep-timer-menu .btn-group > .btn.dropdown-toggle-split:first-child,
#sleep-timer-menu .btn-group > .btn-group:not(:last-child) > .btn {
border-top-right-radius: 0;
border-bottom-right-radius: 0;
}
#sleep-timer-menu .btn-group > .btn:nth-child(n+3),
#sleep-timer-menu .btn-group > :not(.btn-check) + .btn,
#sleep-timer-menu .btn-group > .btn-group:not(:first-child) > .btn {
border-top-left-radius: 0;
border-bottom-left-radius: 0;
}
#sleep-timer-menu .dropdown-toggle-split {
padding-right: 0.5625rem;
padding-left: 0.5625rem;
}
#sleep-timer-menu .dropdown-toggle-split::after, .dropup #sleep-timer-menu .dropdown-toggle-split::after, .dropend #sleep-timer-menu .dropdown-toggle-split::after {
margin-left: 0;
}
.dropstart #sleep-timer-menu .dropdown-toggle-split::before {
margin-right: 0;
}
#sleep-timer-menu .btn-sm + .dropdown-toggle-split, #sleep-timer-menu .btn-group-sm > .btn + .dropdown-toggle-split {
padding-right: 0.375rem;
padding-left: 0.375rem;
}
#sleep-timer-menu .btn-lg + .dropdown-toggle-split, #sleep-timer-menu .btn-group-lg > .btn + .dropdown-toggle-split {
padding-right: 0.75rem;
padding-left: 0.75rem;
}
#sleep-timer-menu .btn-group-vertical {
flex-direction: column;
align-items: flex-start;
justify-content: center;
}
#sleep-timer-menu .btn-group-vertical > .btn,
#sleep-timer-menu .btn-group-vertical > .btn-group {
width: 100%;
}
#sleep-timer-menu .btn-group-vertical > .btn:not(:first-child),
#sleep-timer-menu .btn-group-vertical > .btn-group:not(:first-child) {
margin-top: -1px;
}
#sleep-timer-menu .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
#sleep-timer-menu .btn-group-vertical > .btn-group:not(:last-child) > .btn {
border-bottom-right-radius: 0;
border-bottom-left-radius: 0;
}
#sleep-timer-menu .btn-group-vertical > .btn ~ .btn,
#sleep-timer-menu .btn-group-vertical > .btn-group:not(:first-child) > .btn {
border-top-left-radius: 0;
border-top-right-radius: 0;
}
#sleep-timer-menu .nav {
--bs-nav-link-padding-x: 1rem;
--bs-nav-link-padding-y: 0.9rem;
--bs-nav-link-font-weight: ;
--bs-nav-link-color: var(--bs-link-color);
--bs-nav-link-hover-color: var(--bs-link-hover-color);
--bs-nav-link-disabled-color: #bbb;
display: flex;
flex-wrap: wrap;
padding-left: 0;
margin-bottom: 0;
list-style: none;
}
#sleep-timer-menu .nav-link {
display: block;
padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
font-size: var(--bs-nav-link-font-size);
font-weight: var(--bs-nav-link-font-weight);
color: var(--bs-nav-link-color);
text-decoration: none;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .nav-link {
  transition: none;
}
}
#sleep-timer-menu .nav-link:hover, #sleep-timer-menu .nav-link:focus {
color: var(--bs-nav-link-hover-color);
}
#sleep-timer-menu .nav-link.disabled {
color: var(--bs-nav-link-disabled-color);
pointer-events: none;
cursor: default;
}
#sleep-timer-menu .nav-tabs {
--bs-nav-tabs-border-width: 1px;
--bs-nav-tabs-border-color: #eeeeee;
--bs-nav-tabs-border-radius: 0.375rem;
--bs-nav-tabs-link-hover-border-color: #ddd #ddd #eeeeee;
--bs-nav-tabs-link-active-color: #444;
--bs-nav-tabs-link-active-bg: #fcfcfc;
--bs-nav-tabs-link-active-border-color: #ccc #ccc #fcfcfc;
border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);
}
#sleep-timer-menu .nav-tabs .nav-link {
margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
background: none;
border: var(--bs-nav-tabs-border-width) solid transparent;
border-top-left-radius: var(--bs-nav-tabs-border-radius);
border-top-right-radius: var(--bs-nav-tabs-border-radius);
}
#sleep-timer-menu .nav-tabs .nav-link:hover, #sleep-timer-menu .nav-tabs .nav-link:focus {
isolation: isolate;
border-color: var(--bs-nav-tabs-link-hover-border-color);
}
#sleep-timer-menu .nav-tabs .nav-link.disabled, #sleep-timer-menu .nav-tabs .nav-link:disabled {
color: var(--bs-nav-link-disabled-color);
background-color: transparent;
border-color: transparent;
}
#sleep-timer-menu .nav-tabs .nav-link.active,
#sleep-timer-menu .nav-tabs .nav-item.show .nav-link {
color: var(--bs-nav-tabs-link-active-color);
background-color: var(--bs-nav-tabs-link-active-bg);
border-color: var(--bs-nav-tabs-link-active-border-color);
}
#sleep-timer-menu .nav-tabs .dropdown-menu {
margin-top: calc(-1 * var(--bs-nav-tabs-border-width));
border-top-left-radius: 0;
border-top-right-radius: 0;
}
#sleep-timer-menu .nav-pills {
--bs-nav-pills-border-radius: 0.375rem;
--bs-nav-pills-link-active-color: #fff;
--bs-nav-pills-link-active-bg: #1ed760;
}
#sleep-timer-menu .nav-pills .nav-link {
background: none;
border: 0;
border-radius: var(--bs-nav-pills-border-radius);
}
#sleep-timer-menu .nav-pills .nav-link:disabled {
color: var(--bs-nav-link-disabled-color);
background-color: transparent;
border-color: transparent;
}
#sleep-timer-menu .nav-pills .nav-link.active,
#sleep-timer-menu .nav-pills .show > .nav-link {
color: var(--bs-nav-pills-link-active-color);
background-color: var(--bs-nav-pills-link-active-bg);
}
#sleep-timer-menu .nav-fill > .nav-link,
#sleep-timer-menu .nav-fill .nav-item {
flex: 1 1 auto;
text-align: center;
}
#sleep-timer-menu .nav-justified > .nav-link,
#sleep-timer-menu .nav-justified .nav-item {
flex-basis: 0;
flex-grow: 1;
text-align: center;
}
#sleep-timer-menu .nav-fill .nav-item .nav-link,
#sleep-timer-menu .nav-justified .nav-item .nav-link {
width: 100%;
}
#sleep-timer-menu .tab-content > .tab-pane {
display: none;
}
#sleep-timer-menu .tab-content > .active {
display: block;
}
#sleep-timer-menu .navbar {
--bs-navbar-padding-x: 0;
--bs-navbar-padding-y: 0.5rem;
--bs-navbar-color: rgba(0, 0, 0, 0.55);
--bs-navbar-hover-color: rgba(0, 0, 0, 0.7);
--bs-navbar-disabled-color: rgba(0, 0, 0, 0.3);
--bs-navbar-active-color: rgba(0, 0, 0, 0.9);
--bs-navbar-brand-padding-y: 0.7125rem;
--bs-navbar-brand-margin-end: 1rem;
--bs-navbar-brand-font-size: 1.25rem;
--bs-navbar-brand-color: rgba(0, 0, 0, 0.9);
--bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);
--bs-navbar-nav-link-padding-x: 0.5rem;
--bs-navbar-toggler-padding-y: 0.25rem;
--bs-navbar-toggler-padding-x: 0.75rem;
--bs-navbar-toggler-font-size: 1.25rem;
--bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
--bs-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);
--bs-navbar-toggler-border-radius: 0.375rem;
--bs-navbar-toggler-focus-width: 0.25rem;
--bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
position: relative;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
}
#sleep-timer-menu .navbar > .container,
#sleep-timer-menu .navbar > .container-fluid,
#sleep-timer-menu .navbar > .container-sm,
#sleep-timer-menu .navbar > .container-md,
#sleep-timer-menu .navbar > .container-lg,
#sleep-timer-menu .navbar > .container-xl,
#sleep-timer-menu .navbar > .container-xxl {
display: flex;
flex-wrap: inherit;
align-items: center;
justify-content: space-between;
}
#sleep-timer-menu .navbar-brand {
padding-top: var(--bs-navbar-brand-padding-y);
padding-bottom: var(--bs-navbar-brand-padding-y);
margin-right: var(--bs-navbar-brand-margin-end);
font-size: var(--bs-navbar-brand-font-size);
color: var(--bs-navbar-brand-color);
text-decoration: none;
white-space: nowrap;
}
#sleep-timer-menu .navbar-brand:hover, #sleep-timer-menu .navbar-brand:focus {
color: var(--bs-navbar-brand-hover-color);
}
#sleep-timer-menu .navbar-nav {
--bs-nav-link-padding-x: 0;
--bs-nav-link-padding-y: 0.9rem;
--bs-nav-link-font-weight: ;
--bs-nav-link-color: var(--bs-navbar-color);
--bs-nav-link-hover-color: var(--bs-navbar-hover-color);
--bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
display: flex;
flex-direction: column;
padding-left: 0;
margin-bottom: 0;
list-style: none;
}
#sleep-timer-menu .navbar-nav .show > .nav-link,
#sleep-timer-menu .navbar-nav .nav-link.active {
color: var(--bs-navbar-active-color);
}
#sleep-timer-menu .navbar-nav .dropdown-menu {
position: static;
}
#sleep-timer-menu .navbar-text {
padding-top: 0.9rem;
padding-bottom: 0.9rem;
color: var(--bs-navbar-color);
}
#sleep-timer-menu .navbar-text a,
#sleep-timer-menu .navbar-text a:hover,
#sleep-timer-menu .navbar-text a:focus {
color: var(--bs-navbar-active-color);
}
#sleep-timer-menu .navbar-collapse {
flex-basis: 100%;
flex-grow: 1;
align-items: center;
}
#sleep-timer-menu .navbar-toggler {
padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
font-size: var(--bs-navbar-toggler-font-size);
line-height: 1;
color: var(--bs-navbar-color);
background-color: transparent;
border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
border-radius: var(--bs-navbar-toggler-border-radius);
transition: var(--bs-navbar-toggler-transition);
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .navbar-toggler {
  transition: none;
}
}
#sleep-timer-menu .navbar-toggler:hover {
text-decoration: none;
}
#sleep-timer-menu .navbar-toggler:focus {
text-decoration: none;
outline: 0;
box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);
}
#sleep-timer-menu .navbar-toggler-icon {
display: inline-block;
width: 1.5em;
height: 1.5em;
vertical-align: middle;
background-image: var(--bs-navbar-toggler-icon-bg);
background-repeat: no-repeat;
background-position: center;
background-size: 100%;
}
#sleep-timer-menu .navbar-nav-scroll {
max-height: var(--bs-scroll-height, 75vh);
overflow-y: auto;
}
@media (min-width: 576px) {
#sleep-timer-menu .navbar-expand-sm {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
#sleep-timer-menu .navbar-expand-sm .navbar-nav {
  flex-direction: row;
}
#sleep-timer-menu .navbar-expand-sm .navbar-nav .dropdown-menu {
  position: absolute;
}
#sleep-timer-menu .navbar-expand-sm .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}
#sleep-timer-menu .navbar-expand-sm .navbar-nav-scroll {
  overflow: visible;
}
#sleep-timer-menu .navbar-expand-sm .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
#sleep-timer-menu .navbar-expand-sm .navbar-toggler {
  display: none;
}
#sleep-timer-menu .navbar-expand-sm .offcanvas {
  position: static;
  z-index: auto;
  flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  transform: none !important;
  transition: none;
}
#sleep-timer-menu .navbar-expand-sm .offcanvas .offcanvas-header {
  display: none;
}
#sleep-timer-menu .navbar-expand-sm .offcanvas .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}
}
@media (min-width: 768px) {
#sleep-timer-menu .navbar-expand-md {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
#sleep-timer-menu .navbar-expand-md .navbar-nav {
  flex-direction: row;
}
#sleep-timer-menu .navbar-expand-md .navbar-nav .dropdown-menu {
  position: absolute;
}
#sleep-timer-menu .navbar-expand-md .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}
#sleep-timer-menu .navbar-expand-md .navbar-nav-scroll {
  overflow: visible;
}
#sleep-timer-menu .navbar-expand-md .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
#sleep-timer-menu .navbar-expand-md .navbar-toggler {
  display: none;
}
#sleep-timer-menu .navbar-expand-md .offcanvas {
  position: static;
  z-index: auto;
  flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  transform: none !important;
  transition: none;
}
#sleep-timer-menu .navbar-expand-md .offcanvas .offcanvas-header {
  display: none;
}
#sleep-timer-menu .navbar-expand-md .offcanvas .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}
}
@media (min-width: 992px) {
#sleep-timer-menu .navbar-expand-lg {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
#sleep-timer-menu .navbar-expand-lg .navbar-nav {
  flex-direction: row;
}
#sleep-timer-menu .navbar-expand-lg .navbar-nav .dropdown-menu {
  position: absolute;
}
#sleep-timer-menu .navbar-expand-lg .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}
#sleep-timer-menu .navbar-expand-lg .navbar-nav-scroll {
  overflow: visible;
}
#sleep-timer-menu .navbar-expand-lg .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
#sleep-timer-menu .navbar-expand-lg .navbar-toggler {
  display: none;
}
#sleep-timer-menu .navbar-expand-lg .offcanvas {
  position: static;
  z-index: auto;
  flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  transform: none !important;
  transition: none;
}
#sleep-timer-menu .navbar-expand-lg .offcanvas .offcanvas-header {
  display: none;
}
#sleep-timer-menu .navbar-expand-lg .offcanvas .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}
}
@media (min-width: 1200px) {
#sleep-timer-menu .navbar-expand-xl {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
#sleep-timer-menu .navbar-expand-xl .navbar-nav {
  flex-direction: row;
}
#sleep-timer-menu .navbar-expand-xl .navbar-nav .dropdown-menu {
  position: absolute;
}
#sleep-timer-menu .navbar-expand-xl .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}
#sleep-timer-menu .navbar-expand-xl .navbar-nav-scroll {
  overflow: visible;
}
#sleep-timer-menu .navbar-expand-xl .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
#sleep-timer-menu .navbar-expand-xl .navbar-toggler {
  display: none;
}
#sleep-timer-menu .navbar-expand-xl .offcanvas {
  position: static;
  z-index: auto;
  flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  transform: none !important;
  transition: none;
}
#sleep-timer-menu .navbar-expand-xl .offcanvas .offcanvas-header {
  display: none;
}
#sleep-timer-menu .navbar-expand-xl .offcanvas .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}
}
@media (min-width: 1400px) {
#sleep-timer-menu .navbar-expand-xxl {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
#sleep-timer-menu .navbar-expand-xxl .navbar-nav {
  flex-direction: row;
}
#sleep-timer-menu .navbar-expand-xxl .navbar-nav .dropdown-menu {
  position: absolute;
}
#sleep-timer-menu .navbar-expand-xxl .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}
#sleep-timer-menu .navbar-expand-xxl .navbar-nav-scroll {
  overflow: visible;
}
#sleep-timer-menu .navbar-expand-xxl .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
#sleep-timer-menu .navbar-expand-xxl .navbar-toggler {
  display: none;
}
#sleep-timer-menu .navbar-expand-xxl .offcanvas {
  position: static;
  z-index: auto;
  flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  transform: none !important;
  transition: none;
}
#sleep-timer-menu .navbar-expand-xxl .offcanvas .offcanvas-header {
  display: none;
}
#sleep-timer-menu .navbar-expand-xxl .offcanvas .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}
}
#sleep-timer-menu .navbar-expand {
flex-wrap: nowrap;
justify-content: flex-start;
}
#sleep-timer-menu .navbar-expand .navbar-nav {
flex-direction: row;
}
#sleep-timer-menu .navbar-expand .navbar-nav .dropdown-menu {
position: absolute;
}
#sleep-timer-menu .navbar-expand .navbar-nav .nav-link {
padding-right: var(--bs-navbar-nav-link-padding-x);
padding-left: var(--bs-navbar-nav-link-padding-x);
}
#sleep-timer-menu .navbar-expand .navbar-nav-scroll {
overflow: visible;
}
#sleep-timer-menu .navbar-expand .navbar-collapse {
display: flex !important;
flex-basis: auto;
}
#sleep-timer-menu .navbar-expand .navbar-toggler {
display: none;
}
#sleep-timer-menu .navbar-expand .offcanvas {
position: static;
z-index: auto;
flex-grow: 1;
width: auto !important;
height: auto !important;
visibility: visible !important;
background-color: transparent !important;
border: 0 !important;
transform: none !important;
transition: none;
}
#sleep-timer-menu .navbar-expand .offcanvas .offcanvas-header {
display: none;
}
#sleep-timer-menu .navbar-expand .offcanvas .offcanvas-body {
display: flex;
flex-grow: 0;
padding: 0;
overflow-y: visible;
}
#sleep-timer-menu .navbar-dark {
--bs-navbar-color: rgba(255, 255, 255, 0.75);
--bs-navbar-hover-color: #fff;
--bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);
--bs-navbar-active-color: #fff;
--bs-navbar-brand-color: #fff;
--bs-navbar-brand-hover-color: #fff;
--bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);
--bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
#sleep-timer-menu .card {
--bs-card-spacer-y: 1rem;
--bs-card-spacer-x: 1rem;
--bs-card-title-spacer-y: 0.5rem;
--bs-card-border-width: 1px;
--bs-card-border-color: #eeeeee;
--bs-card-border-radius: 0.375rem;
--bs-card-box-shadow: ;
--bs-card-inner-border-radius: calc(0.375rem - 1px);
--bs-card-cap-padding-y: 0.5rem;
--bs-card-cap-padding-x: 1rem;
--bs-card-cap-bg: rgba(0, 0, 0, 0.03);
--bs-card-cap-color: ;
--bs-card-height: ;
--bs-card-color: ;
--bs-card-bg: #fff;
--bs-card-img-overlay-padding: 1rem;
--bs-card-group-margin: 0.75rem;
position: relative;
display: flex;
flex-direction: column;
min-width: 0;
height: var(--bs-card-height);
word-wrap: break-word;
background-color: var(--bs-card-bg);
background-clip: border-box;
border: var(--bs-card-border-width) solid var(--bs-card-border-color);
border-radius: var(--bs-card-border-radius);
}
#sleep-timer-menu .card > hr {
margin-right: 0;
margin-left: 0;
}
#sleep-timer-menu .card > .list-group {
border-top: inherit;
border-bottom: inherit;
}
#sleep-timer-menu .card > .list-group:first-child {
border-top-width: 0;
border-top-left-radius: var(--bs-card-inner-border-radius);
border-top-right-radius: var(--bs-card-inner-border-radius);
}
#sleep-timer-menu .card > .list-group:last-child {
border-bottom-width: 0;
border-bottom-right-radius: var(--bs-card-inner-border-radius);
border-bottom-left-radius: var(--bs-card-inner-border-radius);
}
#sleep-timer-menu .card > .card-header + .list-group,
#sleep-timer-menu .card > .list-group + .card-footer {
border-top: 0;
}
#sleep-timer-menu .card-body {
flex: 1 1 auto;
padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
color: var(--bs-card-color);
}
#sleep-timer-menu .card-title {
margin-bottom: var(--bs-card-title-spacer-y);
}
#sleep-timer-menu .card-subtitle {
margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));
margin-bottom: 0;
}
#sleep-timer-menu .card-text:last-child {
margin-bottom: 0;
}
#sleep-timer-menu .card-link + .card-link {
margin-left: var(--bs-card-spacer-x);
}
#sleep-timer-menu .card-header {
padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
margin-bottom: 0;
color: var(--bs-card-cap-color);
background-color: var(--bs-card-cap-bg);
border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
}
#sleep-timer-menu .card-header:first-child {
border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;
}
#sleep-timer-menu .card-footer {
padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
color: var(--bs-card-cap-color);
background-color: var(--bs-card-cap-bg);
border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);
}
#sleep-timer-menu .card-footer:last-child {
border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);
}
#sleep-timer-menu .card-header-tabs {
margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));
margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
border-bottom: 0;
}
#sleep-timer-menu .card-header-tabs .nav-link.active {
background-color: var(--bs-card-bg);
border-bottom-color: var(--bs-card-bg);
}
#sleep-timer-menu .card-header-pills {
margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
}
#sleep-timer-menu .card-img-overlay {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
padding: var(--bs-card-img-overlay-padding);
border-radius: var(--bs-card-inner-border-radius);
}
#sleep-timer-menu .card-img,
#sleep-timer-menu .card-img-top,
#sleep-timer-menu .card-img-bottom {
width: 100%;
}
#sleep-timer-menu .card-img,
#sleep-timer-menu .card-img-top {
border-top-left-radius: var(--bs-card-inner-border-radius);
border-top-right-radius: var(--bs-card-inner-border-radius);
}
#sleep-timer-menu .card-img,
#sleep-timer-menu .card-img-bottom {
border-bottom-right-radius: var(--bs-card-inner-border-radius);
border-bottom-left-radius: var(--bs-card-inner-border-radius);
}
#sleep-timer-menu .card-group > .card {
margin-bottom: var(--bs-card-group-margin);
}
@media (min-width: 576px) {
#sleep-timer-menu .card-group {
  display: flex;
  flex-flow: row wrap;
}
#sleep-timer-menu .card-group > .card {
  flex: 1 0 0%;
  margin-bottom: 0;
}
#sleep-timer-menu .card-group > .card + .card {
  margin-left: 0;
  border-left: 0;
}
#sleep-timer-menu .card-group > .card:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
#sleep-timer-menu .card-group > .card:not(:last-child) .card-img-top,
#sleep-timer-menu .card-group > .card:not(:last-child) .card-header {
  border-top-right-radius: 0;
}
#sleep-timer-menu .card-group > .card:not(:last-child) .card-img-bottom,
#sleep-timer-menu .card-group > .card:not(:last-child) .card-footer {
  border-bottom-right-radius: 0;
}
#sleep-timer-menu .card-group > .card:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
#sleep-timer-menu .card-group > .card:not(:first-child) .card-img-top,
#sleep-timer-menu .card-group > .card:not(:first-child) .card-header {
  border-top-left-radius: 0;
}
#sleep-timer-menu .card-group > .card:not(:first-child) .card-img-bottom,
#sleep-timer-menu .card-group > .card:not(:first-child) .card-footer {
  border-bottom-left-radius: 0;
}
}
#sleep-timer-menu .accordion {
--bs-accordion-color: var(--bs-body-color);
--bs-accordion-bg: #fcfcfc;
--bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
--bs-accordion-border-color: var(--bs-border-color);
--bs-accordion-border-width: 1px;
--bs-accordion-border-radius: 0.375rem;
--bs-accordion-inner-border-radius: calc(0.375rem - 1px);
--bs-accordion-btn-padding-x: 1.25rem;
--bs-accordion-btn-padding-y: 1rem;
--bs-accordion-btn-color: var(--bs-body-color);
--bs-accordion-btn-bg: var(--bs-accordion-bg);
--bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='var%28--bs-body-color%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
--bs-accordion-btn-icon-width: 1.25rem;
--bs-accordion-btn-icon-transform: rotate(-180deg);
--bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
--bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23c3200e'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
--bs-accordion-btn-focus-border-color: #ec9187;
--bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(30, 215, 96, 0.25);
--bs-accordion-body-padding-x: 1.25rem;
--bs-accordion-body-padding-y: 1rem;
--bs-accordion-active-color: #c3200e;
--bs-accordion-active-bg: #fbe9e7;
}
#sleep-timer-menu .accordion-button {
position: relative;
display: flex;
align-items: center;
width: 100%;
padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);
font-size: 1rem;
color: var(--bs-accordion-btn-color);
text-align: left;
background-color: var(--bs-accordion-btn-bg);
border: 0;
border-radius: 0;
overflow-anchor: none;
transition: var(--bs-accordion-transition);
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .accordion-button {
  transition: none;
}
}
#sleep-timer-menu .accordion-button:not(.collapsed) {
color: var(--bs-accordion-active-color);
background-color: var(--bs-accordion-active-bg);
box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color);
}
#sleep-timer-menu .accordion-button:not(.collapsed)::after {
background-image: var(--bs-accordion-btn-active-icon);
transform: var(--bs-accordion-btn-icon-transform);
}
#sleep-timer-menu .accordion-button::after {
flex-shrink: 0;
width: var(--bs-accordion-btn-icon-width);
height: var(--bs-accordion-btn-icon-width);
margin-left: auto;
content: "";
background-image: var(--bs-accordion-btn-icon);
background-repeat: no-repeat;
background-size: var(--bs-accordion-btn-icon-width);
transition: var(--bs-accordion-btn-icon-transition);
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .accordion-button::after {
  transition: none;
}
}
#sleep-timer-menu .accordion-button:hover {
z-index: 2;
}
#sleep-timer-menu .accordion-button:focus {
z-index: 3;
border-color: var(--bs-accordion-btn-focus-border-color);
outline: 0;
box-shadow: var(--bs-accordion-btn-focus-box-shadow);
}
#sleep-timer-menu .accordion-header {
margin-bottom: 0;
}
#sleep-timer-menu .accordion-item {
color: var(--bs-accordion-color);
background-color: var(--bs-accordion-bg);
border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);
}
#sleep-timer-menu .accordion-item:first-of-type {
border-top-left-radius: var(--bs-accordion-border-radius);
border-top-right-radius: var(--bs-accordion-border-radius);
}
#sleep-timer-menu .accordion-item:first-of-type .accordion-button {
border-top-left-radius: var(--bs-accordion-inner-border-radius);
border-top-right-radius: var(--bs-accordion-inner-border-radius);
}
#sleep-timer-menu .accordion-item:not(:first-of-type) {
border-top: 0;
}
#sleep-timer-menu .accordion-item:last-of-type {
border-bottom-right-radius: var(--bs-accordion-border-radius);
border-bottom-left-radius: var(--bs-accordion-border-radius);
}
#sleep-timer-menu .accordion-item:last-of-type .accordion-button.collapsed {
border-bottom-right-radius: var(--bs-accordion-inner-border-radius);
border-bottom-left-radius: var(--bs-accordion-inner-border-radius);
}
#sleep-timer-menu .accordion-item:last-of-type .accordion-collapse {
border-bottom-right-radius: var(--bs-accordion-border-radius);
border-bottom-left-radius: var(--bs-accordion-border-radius);
}
#sleep-timer-menu .accordion-body {
padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x);
}
#sleep-timer-menu .accordion-flush .accordion-collapse {
border-width: 0;
}
#sleep-timer-menu .accordion-flush .accordion-item {
border-right: 0;
border-left: 0;
border-radius: 0;
}
#sleep-timer-menu .accordion-flush .accordion-item:first-child {
border-top: 0;
}
#sleep-timer-menu .accordion-flush .accordion-item:last-child {
border-bottom: 0;
}
#sleep-timer-menu .accordion-flush .accordion-item .accordion-button, #sleep-timer-menu .accordion-flush .accordion-item .accordion-button.collapsed {
border-radius: 0;
}
#sleep-timer-menu .breadcrumb {
--bs-breadcrumb-padding-x: 0.75rem;
--bs-breadcrumb-padding-y: 0.375rem;
--bs-breadcrumb-margin-bottom: 1rem;
--bs-breadcrumb-bg: ;
--bs-breadcrumb-border-radius: 0.25rem;
--bs-breadcrumb-divider-color: #777;
--bs-breadcrumb-item-padding-x: 0.5rem;
--bs-breadcrumb-item-active-color: #777;
display: flex;
flex-wrap: wrap;
padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);
margin-bottom: var(--bs-breadcrumb-margin-bottom);
font-size: var(--bs-breadcrumb-font-size);
list-style: none;
background-color: var(--bs-breadcrumb-bg);
border-radius: var(--bs-breadcrumb-border-radius);
}
#sleep-timer-menu .breadcrumb-item + .breadcrumb-item {
padding-left: var(--bs-breadcrumb-item-padding-x);
}
#sleep-timer-menu .breadcrumb-item + .breadcrumb-item::before {
float: left;
padding-right: var(--bs-breadcrumb-item-padding-x);
color: var(--bs-breadcrumb-divider-color);
content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
#sleep-timer-menu .breadcrumb-item.active {
color: var(--bs-breadcrumb-item-active-color);
}
#sleep-timer-menu .pagination {
--bs-pagination-padding-x: 0.75rem;
--bs-pagination-padding-y: 0.375rem;
--bs-pagination-font-size: 1rem;
--bs-pagination-color: var(--bs-link-color);
--bs-pagination-bg: #fff;
--bs-pagination-border-width: 1px;
--bs-pagination-border-color: #eeeeee;
--bs-pagination-border-radius: 0.375rem;
--bs-pagination-hover-color: #fff;
--bs-pagination-hover-bg: #1ed760;
--bs-pagination-hover-border-color: #1ed760;
--bs-pagination-focus-color: var(--bs-link-hover-color);
--bs-pagination-focus-bg: #ddd;
--bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(30, 215, 96, 0.25);
--bs-pagination-active-color: #fff;
--bs-pagination-active-bg: #1ed760;
--bs-pagination-active-border-color: #1ed760;
--bs-pagination-disabled-color: #bbb;
--bs-pagination-disabled-bg: #fff;
--bs-pagination-disabled-border-color: #eeeeee;
display: flex;
padding-left: 0;
list-style: none;
}
#sleep-timer-menu .page-link {
position: relative;
display: block;
padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);
font-size: var(--bs-pagination-font-size);
color: var(--bs-pagination-color);
text-decoration: none;
background-color: var(--bs-pagination-bg);
border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .page-link {
  transition: none;
}
}
#sleep-timer-menu .page-link:hover {
z-index: 2;
color: var(--bs-pagination-hover-color);
background-color: var(--bs-pagination-hover-bg);
border-color: var(--bs-pagination-hover-border-color);
}
#sleep-timer-menu .page-link:focus {
z-index: 3;
color: var(--bs-pagination-focus-color);
background-color: var(--bs-pagination-focus-bg);
outline: 0;
box-shadow: var(--bs-pagination-focus-box-shadow);
}
#sleep-timer-menu .page-link.active, .active > #sleep-timer-menu .page-link {
z-index: 3;
color: var(--bs-pagination-active-color);
background-color: var(--bs-pagination-active-bg);
border-color: var(--bs-pagination-active-border-color);
}
#sleep-timer-menu .page-link.disabled, .disabled > #sleep-timer-menu .page-link {
color: var(--bs-pagination-disabled-color);
pointer-events: none;
background-color: var(--bs-pagination-disabled-bg);
border-color: var(--bs-pagination-disabled-border-color);
}
#sleep-timer-menu .page-item:not(:first-child) .page-link {
margin-left: -1px;
}
#sleep-timer-menu .page-item:first-child .page-link {
border-top-left-radius: var(--bs-pagination-border-radius);
border-bottom-left-radius: var(--bs-pagination-border-radius);
}
#sleep-timer-menu .page-item:last-child .page-link {
border-top-right-radius: var(--bs-pagination-border-radius);
border-bottom-right-radius: var(--bs-pagination-border-radius);
}
#sleep-timer-menu .pagination-lg {
--bs-pagination-padding-x: 1.5rem;
--bs-pagination-padding-y: 0.75rem;
--bs-pagination-font-size: 1.25rem;
--bs-pagination-border-radius: 0.5rem;
}
#sleep-timer-menu .pagination-sm {
--bs-pagination-padding-x: 0.5rem;
--bs-pagination-padding-y: 0.25rem;
--bs-pagination-font-size: 0.875rem;
--bs-pagination-border-radius: 0.25rem;
}
#sleep-timer-menu .badge {
--bs-badge-padding-x: 0.65em;
--bs-badge-padding-y: 0.35em;
--bs-badge-font-size: 0.75em;
--bs-badge-font-weight: 700;
--bs-badge-color: #fff;
--bs-badge-border-radius: 0.375rem;
display: inline-block;
padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
font-size: var(--bs-badge-font-size);
font-weight: var(--bs-badge-font-weight);
line-height: 1;
color: var(--bs-badge-color);
text-align: center;
white-space: nowrap;
vertical-align: baseline;
border-radius: var(--bs-badge-border-radius);
}
#sleep-timer-menu .badge:empty {
display: none;
}
#sleep-timer-menu .btn .badge {
position: relative;
top: -1px;
}
#sleep-timer-menu .alert {
--bs-alert-bg: transparent;
--bs-alert-padding-x: 1rem;
--bs-alert-padding-y: 1rem;
--bs-alert-margin-bottom: 1rem;
--bs-alert-color: inherit;
--bs-alert-border-color: transparent;
--bs-alert-border: 1px solid var(--bs-alert-border-color);
--bs-alert-border-radius: 0.375rem;
position: relative;
padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
margin-bottom: var(--bs-alert-margin-bottom);
color: var(--bs-alert-color);
background-color: var(--bs-alert-bg);
border: var(--bs-alert-border);
border-radius: var(--bs-alert-border-radius);
}
#sleep-timer-menu .alert-heading {
color: inherit;
}
#sleep-timer-menu .alert-link {
font-weight: 700;
}
#sleep-timer-menu .alert-dismissible {
padding-right: 3rem;
}
#sleep-timer-menu .alert-dismissible .btn-close {
position: absolute;
top: 0;
right: 0;
z-index: 2;
padding: 1.25rem 1rem;
}
#sleep-timer-menu .alert-primary {
--bs-alert-color: #821509;
--bs-alert-bg: #f7d3cf;
--bs-alert-border-color: #f4bdb7;
}
#sleep-timer-menu .alert-primary .alert-link {
color: #681107;
}
#sleep-timer-menu .alert-secondary {
--bs-alert-color: #999999;
--bs-alert-bg: white;
--bs-alert-border-color: white;
}
#sleep-timer-menu .alert-secondary .alert-link {
color: #7a7a7a;
}
#sleep-timer-menu .alert-success {
--bs-alert-color: #2a5905;
--bs-alert-bg: #daeace;
--bs-alert-border-color: #c8dfb5;
}
#sleep-timer-menu .alert-success .alert-link {
color: #224704;
}
#sleep-timer-menu .alert-info {
--bs-alert-color: #015c7c;
--bs-alert-bg: #ccebf5;
--bs-alert-border-color: #b3e1f1;
}
#sleep-timer-menu .alert-info .alert-link {
color: #014a63;
}
#sleep-timer-menu .alert-warning {
--bs-alert-color: #824f13;
--bs-alert-bg: #f7e6d2;
--bs-alert-border-color: #f4dabc;
}
#sleep-timer-menu .alert-warning .alert-link {
color: #683f0f;
}
#sleep-timer-menu .alert-danger {
--bs-alert-color: #5d2b5f;
--bs-alert-bg: #ebdaec;
--bs-alert-border-color: #e1c8e2;
}
#sleep-timer-menu .alert-danger .alert-link {
color: #4a224c;
}
#sleep-timer-menu .alert-light {
--bs-alert-color: #999999;
--bs-alert-bg: white;
--bs-alert-border-color: white;
}
#sleep-timer-menu .alert-light .alert-link {
color: #7a7a7a;
}
#sleep-timer-menu .alert-dark {
--bs-alert-color: #212324;
--bs-alert-bg: #d7d8d8;
--bs-alert-border-color: #c3c4c5;
}
#sleep-timer-menu .alert-dark .alert-link {
color: #1a1c1d;
}
@keyframes progress-bar-stripes {
0% {
  background-position-x: 1rem;
}
}
#sleep-timer-menu .progress {
--bs-progress-height: 1rem;
--bs-progress-font-size: 0.75rem;
--bs-progress-bg: #ddd;
--bs-progress-border-radius: 0.375rem;
--bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
--bs-progress-bar-color: #1ed760;
--bs-progress-bar-bg: #1ed760;
--bs-progress-bar-transition: width 0.6s ease;
display: flex;
height: var(--bs-progress-height);
overflow: hidden;
font-size: var(--bs-progress-font-size);
background-color: var(--bs-progress-bg);
border-radius: var(--bs-progress-border-radius);
}
#sleep-timer-menu .progress-bar {
display: flex;
flex-direction: column;
justify-content: center;
overflow: hidden;
color: var(--bs-progress-bar-color);
text-align: center;
white-space: nowrap;
background-color: var(--bs-progress-bar-bg);
transition: var(--bs-progress-bar-transition);
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .progress-bar {
  transition: none;
}
}
#sleep-timer-menu .progress-bar-striped {
background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
background-size: var(--bs-progress-height) var(--bs-progress-height);
}
#sleep-timer-menu .progress-bar-animated {
animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .progress-bar-animated {
  animation: none;
}
}
#sleep-timer-menu .list-group {
--bs-list-group-color: #212529;
--bs-list-group-bg: #fff;
--bs-list-group-border-color: #eeeeee;
--bs-list-group-border-width: 1px;
--bs-list-group-border-radius: 0.375rem;
--bs-list-group-item-padding-x: 1rem;
--bs-list-group-item-padding-y: 0.5rem;
--bs-list-group-action-color: #444;
--bs-list-group-action-hover-color: #444;
--bs-list-group-action-hover-bg: #f8f9fa;
--bs-list-group-action-active-color: #212529;
--bs-list-group-action-active-bg: #ddd;
--bs-list-group-disabled-color: #777;
--bs-list-group-disabled-bg: #eeeeee;
--bs-list-group-active-color: #fff;
--bs-list-group-active-bg: #1ed760;
--bs-list-group-active-border-color: #1ed760;
display: flex;
flex-direction: column;
padding-left: 0;
margin-bottom: 0;
border-radius: var(--bs-list-group-border-radius);
}
#sleep-timer-menu .list-group-numbered {
list-style-type: none;
counter-reset: section;
}
#sleep-timer-menu .list-group-numbered > .list-group-item::before {
content: counters(section, ".") ". ";
counter-increment: section;
}
#sleep-timer-menu .list-group-item-action {
width: 100%;
color: var(--bs-list-group-action-color);
text-align: inherit;
}
#sleep-timer-menu .list-group-item-action:hover, #sleep-timer-menu .list-group-item-action:focus {
z-index: 1;
color: var(--bs-list-group-action-hover-color);
text-decoration: none;
background-color: var(--bs-list-group-action-hover-bg);
}
#sleep-timer-menu .list-group-item-action:active {
color: var(--bs-list-group-action-active-color);
background-color: var(--bs-list-group-action-active-bg);
}
#sleep-timer-menu .list-group-item {
position: relative;
display: block;
padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
color: var(--bs-list-group-color);
text-decoration: none;
background-color: var(--bs-list-group-bg);
border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
}
#sleep-timer-menu .list-group-item:first-child {
border-top-left-radius: inherit;
border-top-right-radius: inherit;
}
#sleep-timer-menu .list-group-item:last-child {
border-bottom-right-radius: inherit;
border-bottom-left-radius: inherit;
}
#sleep-timer-menu .list-group-item.disabled, #sleep-timer-menu .list-group-item:disabled {
color: var(--bs-list-group-disabled-color);
pointer-events: none;
background-color: var(--bs-list-group-disabled-bg);
}
#sleep-timer-menu .list-group-item.active {
z-index: 2;
color: var(--bs-list-group-active-color);
background-color: var(--bs-list-group-active-bg);
border-color: var(--bs-list-group-active-border-color);
}
#sleep-timer-menu .list-group-item + .list-group-item {
border-top-width: 0;
}
#sleep-timer-menu .list-group-item + .list-group-item.active {
margin-top: calc(-1 * var(--bs-list-group-border-width));
border-top-width: var(--bs-list-group-border-width);
}
#sleep-timer-menu .list-group-horizontal {
flex-direction: row;
}
#sleep-timer-menu .list-group-horizontal > .list-group-item:first-child:not(:last-child) {
border-bottom-left-radius: var(--bs-list-group-border-radius);
border-top-right-radius: 0;
}
#sleep-timer-menu .list-group-horizontal > .list-group-item:last-child:not(:first-child) {
border-top-right-radius: var(--bs-list-group-border-radius);
border-bottom-left-radius: 0;
}
#sleep-timer-menu .list-group-horizontal > .list-group-item.active {
margin-top: 0;
}
#sleep-timer-menu .list-group-horizontal > .list-group-item + .list-group-item {
border-top-width: var(--bs-list-group-border-width);
border-left-width: 0;
}
#sleep-timer-menu .list-group-horizontal > .list-group-item + .list-group-item.active {
margin-left: calc(-1 * var(--bs-list-group-border-width));
border-left-width: var(--bs-list-group-border-width);
}
@media (min-width: 576px) {
#sleep-timer-menu .list-group-horizontal-sm {
  flex-direction: row;
}
#sleep-timer-menu .list-group-horizontal-sm > .list-group-item:first-child:not(:last-child) {
  border-bottom-left-radius: var(--bs-list-group-border-radius);
  border-top-right-radius: 0;
}
#sleep-timer-menu .list-group-horizontal-sm > .list-group-item:last-child:not(:first-child) {
  border-top-right-radius: var(--bs-list-group-border-radius);
  border-bottom-left-radius: 0;
}
#sleep-timer-menu .list-group-horizontal-sm > .list-group-item.active {
  margin-top: 0;
}
#sleep-timer-menu .list-group-horizontal-sm > .list-group-item + .list-group-item {
  border-top-width: var(--bs-list-group-border-width);
  border-left-width: 0;
}
#sleep-timer-menu .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
  margin-left: calc(-1 * var(--bs-list-group-border-width));
  border-left-width: var(--bs-list-group-border-width);
}
}
@media (min-width: 768px) {
#sleep-timer-menu .list-group-horizontal-md {
  flex-direction: row;
}
#sleep-timer-menu .list-group-horizontal-md > .list-group-item:first-child:not(:last-child) {
  border-bottom-left-radius: var(--bs-list-group-border-radius);
  border-top-right-radius: 0;
}
#sleep-timer-menu .list-group-horizontal-md > .list-group-item:last-child:not(:first-child) {
  border-top-right-radius: var(--bs-list-group-border-radius);
  border-bottom-left-radius: 0;
}
#sleep-timer-menu .list-group-horizontal-md > .list-group-item.active {
  margin-top: 0;
}
#sleep-timer-menu .list-group-horizontal-md > .list-group-item + .list-group-item {
  border-top-width: var(--bs-list-group-border-width);
  border-left-width: 0;
}
#sleep-timer-menu .list-group-horizontal-md > .list-group-item + .list-group-item.active {
  margin-left: calc(-1 * var(--bs-list-group-border-width));
  border-left-width: var(--bs-list-group-border-width);
}
}
@media (min-width: 992px) {
#sleep-timer-menu .list-group-horizontal-lg {
  flex-direction: row;
}
#sleep-timer-menu .list-group-horizontal-lg > .list-group-item:first-child:not(:last-child) {
  border-bottom-left-radius: var(--bs-list-group-border-radius);
  border-top-right-radius: 0;
}
#sleep-timer-menu .list-group-horizontal-lg > .list-group-item:last-child:not(:first-child) {
  border-top-right-radius: var(--bs-list-group-border-radius);
  border-bottom-left-radius: 0;
}
#sleep-timer-menu .list-group-horizontal-lg > .list-group-item.active {
  margin-top: 0;
}
#sleep-timer-menu .list-group-horizontal-lg > .list-group-item + .list-group-item {
  border-top-width: var(--bs-list-group-border-width);
  border-left-width: 0;
}
#sleep-timer-menu .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
  margin-left: calc(-1 * var(--bs-list-group-border-width));
  border-left-width: var(--bs-list-group-border-width);
}
}
@media (min-width: 1200px) {
#sleep-timer-menu .list-group-horizontal-xl {
  flex-direction: row;
}
#sleep-timer-menu .list-group-horizontal-xl > .list-group-item:first-child:not(:last-child) {
  border-bottom-left-radius: var(--bs-list-group-border-radius);
  border-top-right-radius: 0;
}
#sleep-timer-menu .list-group-horizontal-xl > .list-group-item:last-child:not(:first-child) {
  border-top-right-radius: var(--bs-list-group-border-radius);
  border-bottom-left-radius: 0;
}
#sleep-timer-menu .list-group-horizontal-xl > .list-group-item.active {
  margin-top: 0;
}
#sleep-timer-menu .list-group-horizontal-xl > .list-group-item + .list-group-item {
  border-top-width: var(--bs-list-group-border-width);
  border-left-width: 0;
}
#sleep-timer-menu .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
  margin-left: calc(-1 * var(--bs-list-group-border-width));
  border-left-width: var(--bs-list-group-border-width);
}
}
@media (min-width: 1400px) {
#sleep-timer-menu .list-group-horizontal-xxl {
  flex-direction: row;
}
#sleep-timer-menu .list-group-horizontal-xxl > .list-group-item:first-child:not(:last-child) {
  border-bottom-left-radius: var(--bs-list-group-border-radius);
  border-top-right-radius: 0;
}
#sleep-timer-menu .list-group-horizontal-xxl > .list-group-item:last-child:not(:first-child) {
  border-top-right-radius: var(--bs-list-group-border-radius);
  border-bottom-left-radius: 0;
}
#sleep-timer-menu .list-group-horizontal-xxl > .list-group-item.active {
  margin-top: 0;
}
#sleep-timer-menu .list-group-horizontal-xxl > .list-group-item + .list-group-item {
  border-top-width: var(--bs-list-group-border-width);
  border-left-width: 0;
}
#sleep-timer-menu .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
  margin-left: calc(-1 * var(--bs-list-group-border-width));
  border-left-width: var(--bs-list-group-border-width);
}
}
#sleep-timer-menu .list-group-flush {
border-radius: 0;
}
#sleep-timer-menu .list-group-flush > .list-group-item {
border-width: 0 0 var(--bs-list-group-border-width);
}
#sleep-timer-menu .list-group-flush > .list-group-item:last-child {
border-bottom-width: 0;
}
#sleep-timer-menu .list-group-item-primary {
color: #821509;
background-color: #f7d3cf;
}
#sleep-timer-menu .list-group-item-primary.list-group-item-action:hover, #sleep-timer-menu .list-group-item-primary.list-group-item-action:focus {
color: #821509;
background-color: #debeba;
}
#sleep-timer-menu .list-group-item-primary.list-group-item-action.active {
color: #fff;
background-color: #821509;
border-color: #821509;
}
#sleep-timer-menu .list-group-item-secondary {
color: #999999;
background-color: white;
}
#sleep-timer-menu .list-group-item-secondary.list-group-item-action:hover, #sleep-timer-menu .list-group-item-secondary.list-group-item-action:focus {
color: #999999;
background-color: #e6e6e6;
}
#sleep-timer-menu .list-group-item-secondary.list-group-item-action.active {
color: #fff;
background-color: #999999;
border-color: #999999;
}
#sleep-timer-menu .list-group-item-success {
color: #2a5905;
background-color: #daeace;
}
#sleep-timer-menu .list-group-item-success.list-group-item-action:hover, #sleep-timer-menu .list-group-item-success.list-group-item-action:focus {
color: #2a5905;
background-color: #c4d3b9;
}
#sleep-timer-menu .list-group-item-success.list-group-item-action.active {
color: #fff;
background-color: #2a5905;
border-color: #2a5905;
}
#sleep-timer-menu .list-group-item-info {
color: #015c7c;
background-color: #ccebf5;
}
#sleep-timer-menu .list-group-item-info.list-group-item-action:hover, #sleep-timer-menu .list-group-item-info.list-group-item-action:focus {
color: #015c7c;
background-color: #b8d4dd;
}
#sleep-timer-menu .list-group-item-info.list-group-item-action.active {
color: #fff;
background-color: #015c7c;
border-color: #015c7c;
}
#sleep-timer-menu .list-group-item-warning {
color: #824f13;
background-color: #f7e6d2;
}
#sleep-timer-menu .list-group-item-warning.list-group-item-action:hover, #sleep-timer-menu .list-group-item-warning.list-group-item-action:focus {
color: #824f13;
background-color: #decfbd;
}
#sleep-timer-menu .list-group-item-warning.list-group-item-action.active {
color: #fff;
background-color: #824f13;
border-color: #824f13;
}
#sleep-timer-menu .list-group-item-danger {
color: #5d2b5f;
background-color: #ebdaec;
}
#sleep-timer-menu .list-group-item-danger.list-group-item-action:hover, #sleep-timer-menu .list-group-item-danger.list-group-item-action:focus {
color: #5d2b5f;
background-color: #d4c4d4;
}
#sleep-timer-menu .list-group-item-danger.list-group-item-action.active {
color: #fff;
background-color: #5d2b5f;
border-color: #5d2b5f;
}
#sleep-timer-menu .list-group-item-light {
color: #999999;
background-color: white;
}
#sleep-timer-menu .list-group-item-light.list-group-item-action:hover, #sleep-timer-menu .list-group-item-light.list-group-item-action:focus {
color: #999999;
background-color: #e6e6e6;
}
#sleep-timer-menu .list-group-item-light.list-group-item-action.active {
color: #fff;
background-color: #999999;
border-color: #999999;
}
#sleep-timer-menu .list-group-item-dark {
color: #212324;
background-color: #d7d8d8;
}
#sleep-timer-menu .list-group-item-dark.list-group-item-action:hover, #sleep-timer-menu .list-group-item-dark.list-group-item-action:focus {
color: #212324;
background-color: #c2c2c2;
}
#sleep-timer-menu .list-group-item-dark.list-group-item-action.active {
color: #fff;
background-color: #212324;
border-color: #212324;
}
#sleep-timer-menu .btn-close {
box-sizing: content-box;
width: 1em;
height: 1em;
padding: 0.25em 0.25em;
color: #000;
background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
border: 0;
border-radius: 0.375rem;
opacity: 0.5;
}
#sleep-timer-menu .btn-close:hover {
color: #000;
text-decoration: none;
opacity: 0.75;
}
#sleep-timer-menu .btn-close:focus {
outline: 0;
box-shadow: 0 0 0 0.25rem rgba(30, 215, 96, 0.25);
opacity: 1;
}
#sleep-timer-menu .btn-close:disabled, #sleep-timer-menu .btn-close.disabled {
pointer-events: none;
user-select: none;
opacity: 0.25;
}
#sleep-timer-menu .btn-close-white {
filter: invert(1) grayscale(100%) brightness(200%);
}
#sleep-timer-menu .toast {
--bs-toast-zindex: 1090;
--bs-toast-padding-x: 0.75rem;
--bs-toast-padding-y: 0.5rem;
--bs-toast-spacing: 1.5rem;
--bs-toast-max-width: 350px;
--bs-toast-font-size: 0.875rem;
--bs-toast-color: ;
--bs-toast-bg: rgba(255, 255, 255, 0.85);
--bs-toast-border-width: 1px;
--bs-toast-border-color: var(--bs-border-color-translucent);
--bs-toast-border-radius: 0.375rem;
--bs-toast-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
--bs-toast-header-color: #777;
--bs-toast-header-bg: rgba(255, 255, 255, 0.85);
--bs-toast-header-border-color: rgba(0, 0, 0, 0.05);
width: var(--bs-toast-max-width);
max-width: 100%;
font-size: var(--bs-toast-font-size);
color: var(--bs-toast-color);
pointer-events: auto;
background-color: var(--bs-toast-bg);
background-clip: padding-box;
border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);
box-shadow: var(--bs-toast-box-shadow);
border-radius: var(--bs-toast-border-radius);
}
#sleep-timer-menu .toast.showing {
opacity: 0;
}
#sleep-timer-menu .toast:not(.show) {
display: none;
}
#sleep-timer-menu .toast-container {
position: absolute;
z-index: var(--bs-toast-zindex);
width: max-content;
max-width: 100%;
pointer-events: none;
}
#sleep-timer-menu .toast-container > :not(:last-child) {
margin-bottom: var(--bs-toast-spacing);
}
#sleep-timer-menu .toast-header {
display: flex;
align-items: center;
padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x);
color: var(--bs-toast-header-color);
background-color: var(--bs-toast-header-bg);
background-clip: padding-box;
border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);
border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
}
#sleep-timer-menu .toast-header .btn-close {
margin-right: calc(-0.5 * var(--bs-toast-padding-x));
margin-left: var(--bs-toast-padding-x);
}
#sleep-timer-menu .toast-body {
padding: var(--bs-toast-padding-x);
word-wrap: break-word;
}
#sleep-timer-menu .modal {
--bs-modal-zindex: 1055;
--bs-modal-width: 500px;
--bs-modal-padding: 1rem;
--bs-modal-margin: 0.5rem;
--bs-modal-color: ;
--bs-modal-bg: #fff;
--bs-modal-border-color: #eeeeee;
--bs-modal-border-width: 1px;
--bs-modal-border-radius: 0.5rem;
--bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
--bs-modal-inner-border-radius: calc(0.5rem - 1px);
--bs-modal-header-padding-x: 1rem;
--bs-modal-header-padding-y: 1rem;
--bs-modal-header-padding: 1rem 1rem;
--bs-modal-header-border-color: #eeeeee;
--bs-modal-header-border-width: 1px;
--bs-modal-title-line-height: 1.5;
--bs-modal-footer-gap: 0.5rem;
--bs-modal-footer-bg: ;
--bs-modal-footer-border-color: #eeeeee;
--bs-modal-footer-border-width: 1px;
position: fixed;
top: 0;
left: 0;
z-index: var(--bs-modal-zindex);
display: none;
width: 100%;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
outline: 0;
}
#sleep-timer-menu .modal-dialog {
position: relative;
width: auto;
margin: var(--bs-modal-margin);
pointer-events: none;
}
.modal.fade #sleep-timer-menu .modal-dialog {
transition: transform 0.3s ease-out;
transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
.modal.fade #sleep-timer-menu .modal-dialog {
  transition: none;
}
}
.modal.show #sleep-timer-menu .modal-dialog {
transform: none;
}
.modal.modal-static #sleep-timer-menu .modal-dialog {
transform: scale(1.02);
}
#sleep-timer-menu .modal-dialog-scrollable {
height: calc(100% - var(--bs-modal-margin) * 2);
}
#sleep-timer-menu .modal-dialog-scrollable .modal-content {
max-height: 100%;
overflow: hidden;
}
#sleep-timer-menu .modal-dialog-scrollable .modal-body {
overflow-y: auto;
}
#sleep-timer-menu .modal-dialog-centered {
display: flex;
align-items: center;
min-height: calc(100% - var(--bs-modal-margin) * 2);
}
#sleep-timer-menu .modal-content {
position: relative;
display: flex;
flex-direction: column;
width: 100%;
color: var(--bs-modal-color);
pointer-events: auto;
background-color: var(--bs-modal-bg);
background-clip: padding-box;
border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
border-radius: var(--bs-modal-border-radius);
outline: 0;
}
#sleep-timer-menu .modal-backdrop {
--bs-backdrop-zindex: 1050;
--bs-backdrop-bg: #000;
--bs-backdrop-opacity: 0.5;
position: fixed;
top: 0;
left: 0;
z-index: var(--bs-backdrop-zindex);
width: 100vw;
height: 100vh;
background-color: var(--bs-backdrop-bg);
}
#sleep-timer-menu .modal-backdrop.fade {
opacity: 0;
}
#sleep-timer-menu .modal-backdrop.show {
opacity: var(--bs-backdrop-opacity);
}
#sleep-timer-menu .modal-header {
display: flex;
flex-shrink: 0;
align-items: center;
justify-content: space-between;
padding: var(--bs-modal-header-padding);
border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);
border-top-left-radius: var(--bs-modal-inner-border-radius);
border-top-right-radius: var(--bs-modal-inner-border-radius);
}
#sleep-timer-menu .modal-header .btn-close {
padding: calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5);
margin: calc(-0.5 * var(--bs-modal-header-padding-y)) calc(-0.5 * var(--bs-modal-header-padding-x)) calc(-0.5 * var(--bs-modal-header-padding-y)) auto;
}
#sleep-timer-menu .modal-title {
margin-bottom: 0;
line-height: var(--bs-modal-title-line-height);
}
#sleep-timer-menu .modal-body {
position: relative;
flex: 1 1 auto;
padding: var(--bs-modal-padding);
}
#sleep-timer-menu .modal-footer {
display: flex;
flex-shrink: 0;
flex-wrap: wrap;
align-items: center;
justify-content: flex-end;
padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);
background-color: var(--bs-modal-footer-bg);
border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);
border-bottom-right-radius: var(--bs-modal-inner-border-radius);
border-bottom-left-radius: var(--bs-modal-inner-border-radius);
}
#sleep-timer-menu .modal-footer > * {
margin: calc(var(--bs-modal-footer-gap) * 0.5);
}
@media (min-width: 576px) {
#sleep-timer-menu .modal {
  --bs-modal-margin: 1.75rem;
  --bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
#sleep-timer-menu .modal-dialog {
  max-width: var(--bs-modal-width);
  margin-right: auto;
  margin-left: auto;
}
#sleep-timer-menu .modal-sm {
  --bs-modal-width: 300px;
}
}
@media (min-width: 992px) {
#sleep-timer-menu .modal-lg,
#sleep-timer-menu .modal-xl {
  --bs-modal-width: 800px;
}
}
@media (min-width: 1200px) {
#sleep-timer-menu .modal-xl {
  --bs-modal-width: 1140px;
}
}
#sleep-timer-menu .modal-fullscreen {
width: 100vw;
max-width: none;
height: 100%;
margin: 0;
}
#sleep-timer-menu .modal-fullscreen .modal-content {
height: 100%;
border: 0;
border-radius: 0;
}
#sleep-timer-menu .modal-fullscreen .modal-header,
#sleep-timer-menu .modal-fullscreen .modal-footer {
border-radius: 0;
}
#sleep-timer-menu .modal-fullscreen .modal-body {
overflow-y: auto;
}
@media (max-width: 575.98px) {
#sleep-timer-menu .modal-fullscreen-sm-down {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
#sleep-timer-menu .modal-fullscreen-sm-down .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
#sleep-timer-menu .modal-fullscreen-sm-down .modal-header,
#sleep-timer-menu .modal-fullscreen-sm-down .modal-footer {
  border-radius: 0;
}
#sleep-timer-menu .modal-fullscreen-sm-down .modal-body {
  overflow-y: auto;
}
}
@media (max-width: 767.98px) {
#sleep-timer-menu .modal-fullscreen-md-down {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
#sleep-timer-menu .modal-fullscreen-md-down .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
#sleep-timer-menu .modal-fullscreen-md-down .modal-header,
#sleep-timer-menu .modal-fullscreen-md-down .modal-footer {
  border-radius: 0;
}
#sleep-timer-menu .modal-fullscreen-md-down .modal-body {
  overflow-y: auto;
}
}
@media (max-width: 991.98px) {
#sleep-timer-menu .modal-fullscreen-lg-down {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
#sleep-timer-menu .modal-fullscreen-lg-down .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
#sleep-timer-menu .modal-fullscreen-lg-down .modal-header,
#sleep-timer-menu .modal-fullscreen-lg-down .modal-footer {
  border-radius: 0;
}
#sleep-timer-menu .modal-fullscreen-lg-down .modal-body {
  overflow-y: auto;
}
}
@media (max-width: 1199.98px) {
#sleep-timer-menu .modal-fullscreen-xl-down {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
#sleep-timer-menu .modal-fullscreen-xl-down .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
#sleep-timer-menu .modal-fullscreen-xl-down .modal-header,
#sleep-timer-menu .modal-fullscreen-xl-down .modal-footer {
  border-radius: 0;
}
#sleep-timer-menu .modal-fullscreen-xl-down .modal-body {
  overflow-y: auto;
}
}
@media (max-width: 1399.98px) {
#sleep-timer-menu .modal-fullscreen-xxl-down {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
#sleep-timer-menu .modal-fullscreen-xxl-down .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
#sleep-timer-menu .modal-fullscreen-xxl-down .modal-header,
#sleep-timer-menu .modal-fullscreen-xxl-down .modal-footer {
  border-radius: 0;
}
#sleep-timer-menu .modal-fullscreen-xxl-down .modal-body {
  overflow-y: auto;
}
}
#sleep-timer-menu .tooltip {
--bs-tooltip-zindex: 1080;
--bs-tooltip-max-width: 200px;
--bs-tooltip-padding-x: 0.5rem;
--bs-tooltip-padding-y: 0.25rem;
--bs-tooltip-margin: ;
--bs-tooltip-font-size: 0.875rem;
--bs-tooltip-color: #fff;
--bs-tooltip-bg: #000;
--bs-tooltip-border-radius: 0.375rem;
--bs-tooltip-opacity: 0.9;
--bs-tooltip-arrow-width: 0.8rem;
--bs-tooltip-arrow-height: 0.4rem;
z-index: var(--bs-tooltip-zindex);
display: block;
padding: var(--bs-tooltip-arrow-height);
margin: var(--bs-tooltip-margin);
font-family: var(--bs-font-sans-serif);
font-style: normal;
font-weight: 400;
line-height: 1.5;
text-align: left;
text-align: start;
text-decoration: none;
text-shadow: none;
text-transform: none;
letter-spacing: normal;
word-break: normal;
white-space: normal;
word-spacing: normal;
line-break: auto;
font-size: var(--bs-tooltip-font-size);
word-wrap: break-word;
opacity: 0;
}
#sleep-timer-menu .tooltip.show {
opacity: var(--bs-tooltip-opacity);
}
#sleep-timer-menu .tooltip .tooltip-arrow {
display: block;
width: var(--bs-tooltip-arrow-width);
height: var(--bs-tooltip-arrow-height);
}
#sleep-timer-menu .tooltip .tooltip-arrow::before {
position: absolute;
content: "";
border-color: transparent;
border-style: solid;
}
#sleep-timer-menu .bs-tooltip-top .tooltip-arrow, #sleep-timer-menu .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
bottom: 0;
}
#sleep-timer-menu .bs-tooltip-top .tooltip-arrow::before, #sleep-timer-menu .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
top: -1px;
border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;
border-top-color: var(--bs-tooltip-bg);
}
#sleep-timer-menu .bs-tooltip-end .tooltip-arrow, #sleep-timer-menu .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
left: 0;
width: var(--bs-tooltip-arrow-height);
height: var(--bs-tooltip-arrow-width);
}
#sleep-timer-menu .bs-tooltip-end .tooltip-arrow::before, #sleep-timer-menu .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
right: -1px;
border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;
border-right-color: var(--bs-tooltip-bg);
}
#sleep-timer-menu .bs-tooltip-bottom .tooltip-arrow, #sleep-timer-menu .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
top: 0;
}
#sleep-timer-menu .bs-tooltip-bottom .tooltip-arrow::before, #sleep-timer-menu .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
bottom: -1px;
border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);
border-bottom-color: var(--bs-tooltip-bg);
}
#sleep-timer-menu .bs-tooltip-start .tooltip-arrow, #sleep-timer-menu .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
right: 0;
width: var(--bs-tooltip-arrow-height);
height: var(--bs-tooltip-arrow-width);
}
#sleep-timer-menu .bs-tooltip-start .tooltip-arrow::before, #sleep-timer-menu .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
left: -1px;
border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);
border-left-color: var(--bs-tooltip-bg);
}
#sleep-timer-menu .tooltip-inner {
max-width: var(--bs-tooltip-max-width);
padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);
color: var(--bs-tooltip-color);
text-align: center;
background-color: var(--bs-tooltip-bg);
border-radius: var(--bs-tooltip-border-radius);
}
#sleep-timer-menu .popover {
--bs-popover-zindex: 1070;
--bs-popover-max-width: 276px;
--bs-popover-font-size: 0.875rem;
--bs-popover-bg: #fff;
--bs-popover-border-width: 1px;
--bs-popover-border-color: #eeeeee;
--bs-popover-border-radius: 0.5rem;
--bs-popover-inner-border-radius: calc(0.5rem - 1px);
--bs-popover-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
--bs-popover-header-padding-x: 1rem;
--bs-popover-header-padding-y: 0.5rem;
--bs-popover-header-font-size: 1rem;
--bs-popover-header-color: ;
--bs-popover-header-bg: #f0f0f0;
--bs-popover-body-padding-x: 1rem;
--bs-popover-body-padding-y: 1rem;
--bs-popover-body-color: #212529;
--bs-popover-arrow-width: 1rem;
--bs-popover-arrow-height: 0.5rem;
--bs-popover-arrow-border: var(--bs-popover-border-color);
z-index: var(--bs-popover-zindex);
display: block;
max-width: var(--bs-popover-max-width);
font-family: var(--bs-font-sans-serif);
font-style: normal;
font-weight: 400;
line-height: 1.5;
text-align: left;
text-align: start;
text-decoration: none;
text-shadow: none;
text-transform: none;
letter-spacing: normal;
word-break: normal;
white-space: normal;
word-spacing: normal;
line-break: auto;
font-size: var(--bs-popover-font-size);
word-wrap: break-word;
background-color: var(--bs-popover-bg);
background-clip: padding-box;
border: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
border-radius: var(--bs-popover-border-radius);
}
#sleep-timer-menu .popover .popover-arrow {
display: block;
width: var(--bs-popover-arrow-width);
height: var(--bs-popover-arrow-height);
}
#sleep-timer-menu .popover .popover-arrow::before, #sleep-timer-menu .popover .popover-arrow::after {
position: absolute;
display: block;
content: "";
border-color: transparent;
border-style: solid;
border-width: 0;
}
#sleep-timer-menu .bs-popover-top > .popover-arrow, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
}
#sleep-timer-menu .bs-popover-top > .popover-arrow::before, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before, #sleep-timer-menu .bs-popover-top > .popover-arrow::after, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;
}
#sleep-timer-menu .bs-popover-top > .popover-arrow::before, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
bottom: 0;
border-top-color: var(--bs-popover-arrow-border);
}
#sleep-timer-menu .bs-popover-top > .popover-arrow::after, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
bottom: var(--bs-popover-border-width);
border-top-color: var(--bs-popover-bg);
}
#sleep-timer-menu .bs-popover-end > .popover-arrow, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
width: var(--bs-popover-arrow-height);
height: var(--bs-popover-arrow-width);
}
#sleep-timer-menu .bs-popover-end > .popover-arrow::before, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before, #sleep-timer-menu .bs-popover-end > .popover-arrow::after, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;
}
#sleep-timer-menu .bs-popover-end > .popover-arrow::before, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
left: 0;
border-right-color: var(--bs-popover-arrow-border);
}
#sleep-timer-menu .bs-popover-end > .popover-arrow::after, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
left: var(--bs-popover-border-width);
border-right-color: var(--bs-popover-bg);
}
#sleep-timer-menu .bs-popover-bottom > .popover-arrow, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
}
#sleep-timer-menu .bs-popover-bottom > .popover-arrow::before, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before, #sleep-timer-menu .bs-popover-bottom > .popover-arrow::after, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);
}
#sleep-timer-menu .bs-popover-bottom > .popover-arrow::before, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
top: 0;
border-bottom-color: var(--bs-popover-arrow-border);
}
#sleep-timer-menu .bs-popover-bottom > .popover-arrow::after, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
top: var(--bs-popover-border-width);
border-bottom-color: var(--bs-popover-bg);
}
#sleep-timer-menu .bs-popover-bottom .popover-header::before, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
position: absolute;
top: 0;
left: 50%;
display: block;
width: var(--bs-popover-arrow-width);
margin-left: calc(-0.5 * var(--bs-popover-arrow-width));
content: "";
border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-header-bg);
}
#sleep-timer-menu .bs-popover-start > .popover-arrow, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
right: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
width: var(--bs-popover-arrow-height);
height: var(--bs-popover-arrow-width);
}
#sleep-timer-menu .bs-popover-start > .popover-arrow::before, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before, #sleep-timer-menu .bs-popover-start > .popover-arrow::after, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
border-width: calc(var(--bs-popover-arrow-width) * 0.5) 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);
}
#sleep-timer-menu .bs-popover-start > .popover-arrow::before, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
right: 0;
border-left-color: var(--bs-popover-arrow-border);
}
#sleep-timer-menu .bs-popover-start > .popover-arrow::after, #sleep-timer-menu .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
right: var(--bs-popover-border-width);
border-left-color: var(--bs-popover-bg);
}
#sleep-timer-menu .popover-header {
padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);
margin-bottom: 0;
font-size: var(--bs-popover-header-font-size);
color: var(--bs-popover-header-color);
background-color: var(--bs-popover-header-bg);
border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
border-top-left-radius: var(--bs-popover-inner-border-radius);
border-top-right-radius: var(--bs-popover-inner-border-radius);
}
#sleep-timer-menu .popover-header:empty {
display: none;
}
#sleep-timer-menu .popover-body {
padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);
color: var(--bs-popover-body-color);
}
#sleep-timer-menu .carousel {
position: relative;
}
#sleep-timer-menu .carousel.pointer-event {
touch-action: pan-y;
}
#sleep-timer-menu .carousel-inner {
position: relative;
width: 100%;
overflow: hidden;
}
#sleep-timer-menu .carousel-inner::after {
display: block;
clear: both;
content: "";
}
#sleep-timer-menu .carousel-item {
position: relative;
display: none;
float: left;
width: 100%;
margin-right: -100%;
backface-visibility: hidden;
transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .carousel-item {
  transition: none;
}
}
#sleep-timer-menu .carousel-item.active,
#sleep-timer-menu .carousel-item-next,
#sleep-timer-menu .carousel-item-prev {
display: block;
}
#sleep-timer-menu .carousel-item-next:not(.carousel-item-start),
#sleep-timer-menu .active.carousel-item-end {
transform: translateX(100%);
}
#sleep-timer-menu .carousel-item-prev:not(.carousel-item-end),
#sleep-timer-menu .active.carousel-item-start {
transform: translateX(-100%);
}
#sleep-timer-menu .carousel-fade .carousel-item {
opacity: 0;
transition-property: opacity;
transform: none;
}
#sleep-timer-menu .carousel-fade .carousel-item.active,
#sleep-timer-menu .carousel-fade .carousel-item-next.carousel-item-start,
#sleep-timer-menu .carousel-fade .carousel-item-prev.carousel-item-end {
z-index: 1;
opacity: 1;
}
#sleep-timer-menu .carousel-fade .active.carousel-item-start,
#sleep-timer-menu .carousel-fade .active.carousel-item-end {
z-index: 0;
opacity: 0;
transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .carousel-fade .active.carousel-item-start,
#sleep-timer-menu .carousel-fade .active.carousel-item-end {
  transition: none;
}
}
#sleep-timer-menu .carousel-control-prev,
#sleep-timer-menu .carousel-control-next {
position: absolute;
top: 0;
bottom: 0;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
width: 15%;
padding: 0;
color: #fff;
text-align: center;
background: none;
border: 0;
opacity: 0.5;
transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .carousel-control-prev,
#sleep-timer-menu .carousel-control-next {
  transition: none;
}
}
#sleep-timer-menu .carousel-control-prev:hover, #sleep-timer-menu .carousel-control-prev:focus,
#sleep-timer-menu .carousel-control-next:hover,
#sleep-timer-menu .carousel-control-next:focus {
color: #fff;
text-decoration: none;
outline: 0;
opacity: 0.9;
}
#sleep-timer-menu .carousel-control-prev {
left: 0;
}
#sleep-timer-menu .carousel-control-next {
right: 0;
}
#sleep-timer-menu .carousel-control-prev-icon,
#sleep-timer-menu .carousel-control-next-icon {
display: inline-block;
width: 2rem;
height: 2rem;
background-repeat: no-repeat;
background-position: 50%;
background-size: 100% 100%;
}
#sleep-timer-menu .carousel-control-prev-icon {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}
#sleep-timer-menu .carousel-control-next-icon {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
#sleep-timer-menu .carousel-indicators {
position: absolute;
right: 0;
bottom: 0;
left: 0;
z-index: 2;
display: flex;
justify-content: center;
padding: 0;
margin-right: 15%;
margin-bottom: 1rem;
margin-left: 15%;
list-style: none;
}
#sleep-timer-menu .carousel-indicators [data-bs-target] {
box-sizing: content-box;
flex: 0 1 auto;
width: 30px;
height: 3px;
padding: 0;
margin-right: 3px;
margin-left: 3px;
text-indent: -999px;
cursor: pointer;
background-color: #fff;
background-clip: padding-box;
border: 0;
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;
opacity: 0.5;
transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .carousel-indicators [data-bs-target] {
  transition: none;
}
}
#sleep-timer-menu .carousel-indicators .active {
opacity: 1;
}
#sleep-timer-menu .carousel-caption {
position: absolute;
right: 15%;
bottom: 1.25rem;
left: 15%;
padding-top: 1.25rem;
padding-bottom: 1.25rem;
color: #fff;
text-align: center;
}
#sleep-timer-menu .carousel-dark .carousel-control-prev-icon,
#sleep-timer-menu .carousel-dark .carousel-control-next-icon {
filter: invert(1) grayscale(100);
}
#sleep-timer-menu .carousel-dark .carousel-indicators [data-bs-target] {
background-color: #000;
}
#sleep-timer-menu .carousel-dark .carousel-caption {
color: #000;
}
#sleep-timer-menu .spinner-grow,
#sleep-timer-menu .spinner-border {
display: inline-block;
width: var(--bs-spinner-width);
height: var(--bs-spinner-height);
vertical-align: var(--bs-spinner-vertical-align);
border-radius: 50%;
animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);
}
@keyframes spinner-border {
to {
  transform: rotate(360deg) /* rtl:ignore */;
}
}
#sleep-timer-menu .spinner-border {
--bs-spinner-width: 2rem;
--bs-spinner-height: 2rem;
--bs-spinner-vertical-align: -0.125em;
--bs-spinner-border-width: 0.25em;
--bs-spinner-animation-speed: 0.75s;
--bs-spinner-animation-name: spinner-border;
border: var(--bs-spinner-border-width) solid currentcolor;
border-right-color: transparent;
}
#sleep-timer-menu .spinner-border-sm {
--bs-spinner-width: 1rem;
--bs-spinner-height: 1rem;
--bs-spinner-border-width: 0.2em;
}
@keyframes spinner-grow {
0% {
  transform: scale(0);
}
50% {
  opacity: 1;
  transform: none;
}
}
#sleep-timer-menu .spinner-grow {
--bs-spinner-width: 2rem;
--bs-spinner-height: 2rem;
--bs-spinner-vertical-align: -0.125em;
--bs-spinner-animation-speed: 0.75s;
--bs-spinner-animation-name: spinner-grow;
background-color: currentcolor;
opacity: 0;
}
#sleep-timer-menu .spinner-grow-sm {
--bs-spinner-width: 1rem;
--bs-spinner-height: 1rem;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .spinner-border,
#sleep-timer-menu .spinner-grow {
  --bs-spinner-animation-speed: 1.5s;
}
}
#sleep-timer-menu .offcanvas, #sleep-timer-menu .offcanvas-xxl, #sleep-timer-menu .offcanvas-xl, #sleep-timer-menu .offcanvas-lg, #sleep-timer-menu .offcanvas-md, #sleep-timer-menu .offcanvas-sm {
--bs-offcanvas-zindex: 1045;
--bs-offcanvas-width: 400px;
--bs-offcanvas-height: 30vh;
--bs-offcanvas-padding-x: 1rem;
--bs-offcanvas-padding-y: 1rem;
--bs-offcanvas-color: ;
--bs-offcanvas-bg: #fff;
--bs-offcanvas-border-width: 1px;
--bs-offcanvas-border-color: #eeeeee;
--bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
@media (max-width: 575.98px) {
#sleep-timer-menu .offcanvas-sm {
  position: fixed;
  bottom: 0;
  z-index: var(--bs-offcanvas-zindex);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  color: var(--bs-offcanvas-color);
  visibility: hidden;
  background-color: var(--bs-offcanvas-bg);
  background-clip: padding-box;
  outline: 0;
  transition: transform 0.3s ease-in-out;
}
}
@media (max-width: 575.98px) and (prefers-reduced-motion: reduce) {
#sleep-timer-menu .offcanvas-sm {
  transition: none;
}
}
@media (max-width: 575.98px) {
#sleep-timer-menu .offcanvas-sm.offcanvas-start {
  top: 0;
  left: 0;
  width: var(--bs-offcanvas-width);
  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(-100%);
}
}
@media (max-width: 575.98px) {
#sleep-timer-menu .offcanvas-sm.offcanvas-end {
  top: 0;
  right: 0;
  width: var(--bs-offcanvas-width);
  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(100%);
}
}
@media (max-width: 575.98px) {
#sleep-timer-menu .offcanvas-sm.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(-100%);
}
}
@media (max-width: 575.98px) {
#sleep-timer-menu .offcanvas-sm.offcanvas-bottom {
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(100%);
}
}
@media (max-width: 575.98px) {
#sleep-timer-menu .offcanvas-sm.showing, #sleep-timer-menu .offcanvas-sm.show:not(.hiding) {
  transform: none;
}
}
@media (max-width: 575.98px) {
#sleep-timer-menu .offcanvas-sm.showing, #sleep-timer-menu .offcanvas-sm.hiding, #sleep-timer-menu .offcanvas-sm.show {
  visibility: visible;
}
}
@media (min-width: 576px) {
#sleep-timer-menu .offcanvas-sm {
  --bs-offcanvas-height: auto;
  --bs-offcanvas-border-width: 0;
  background-color: transparent !important;
}
#sleep-timer-menu .offcanvas-sm .offcanvas-header {
  display: none;
}
#sleep-timer-menu .offcanvas-sm .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
  background-color: transparent !important;
}
}
@media (max-width: 767.98px) {
#sleep-timer-menu .offcanvas-md {
  position: fixed;
  bottom: 0;
  z-index: var(--bs-offcanvas-zindex);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  color: var(--bs-offcanvas-color);
  visibility: hidden;
  background-color: var(--bs-offcanvas-bg);
  background-clip: padding-box;
  outline: 0;
  transition: transform 0.3s ease-in-out;
}
}
@media (max-width: 767.98px) and (prefers-reduced-motion: reduce) {
#sleep-timer-menu .offcanvas-md {
  transition: none;
}
}
@media (max-width: 767.98px) {
#sleep-timer-menu .offcanvas-md.offcanvas-start {
  top: 0;
  left: 0;
  width: var(--bs-offcanvas-width);
  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(-100%);
}
}
@media (max-width: 767.98px) {
#sleep-timer-menu .offcanvas-md.offcanvas-end {
  top: 0;
  right: 0;
  width: var(--bs-offcanvas-width);
  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(100%);
}
}
@media (max-width: 767.98px) {
#sleep-timer-menu .offcanvas-md.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(-100%);
}
}
@media (max-width: 767.98px) {
#sleep-timer-menu .offcanvas-md.offcanvas-bottom {
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(100%);
}
}
@media (max-width: 767.98px) {
#sleep-timer-menu .offcanvas-md.showing, #sleep-timer-menu .offcanvas-md.show:not(.hiding) {
  transform: none;
}
}
@media (max-width: 767.98px) {
#sleep-timer-menu .offcanvas-md.showing, #sleep-timer-menu .offcanvas-md.hiding, #sleep-timer-menu .offcanvas-md.show {
  visibility: visible;
}
}
@media (min-width: 768px) {
#sleep-timer-menu .offcanvas-md {
  --bs-offcanvas-height: auto;
  --bs-offcanvas-border-width: 0;
  background-color: transparent !important;
}
#sleep-timer-menu .offcanvas-md .offcanvas-header {
  display: none;
}
#sleep-timer-menu .offcanvas-md .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
  background-color: transparent !important;
}
}
@media (max-width: 991.98px) {
#sleep-timer-menu .offcanvas-lg {
  position: fixed;
  bottom: 0;
  z-index: var(--bs-offcanvas-zindex);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  color: var(--bs-offcanvas-color);
  visibility: hidden;
  background-color: var(--bs-offcanvas-bg);
  background-clip: padding-box;
  outline: 0;
  transition: transform 0.3s ease-in-out;
}
}
@media (max-width: 991.98px) and (prefers-reduced-motion: reduce) {
#sleep-timer-menu .offcanvas-lg {
  transition: none;
}
}
@media (max-width: 991.98px) {
#sleep-timer-menu .offcanvas-lg.offcanvas-start {
  top: 0;
  left: 0;
  width: var(--bs-offcanvas-width);
  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(-100%);
}
}
@media (max-width: 991.98px) {
#sleep-timer-menu .offcanvas-lg.offcanvas-end {
  top: 0;
  right: 0;
  width: var(--bs-offcanvas-width);
  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(100%);
}
}
@media (max-width: 991.98px) {
#sleep-timer-menu .offcanvas-lg.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(-100%);
}
}
@media (max-width: 991.98px) {
#sleep-timer-menu .offcanvas-lg.offcanvas-bottom {
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(100%);
}
}
@media (max-width: 991.98px) {
#sleep-timer-menu .offcanvas-lg.showing, #sleep-timer-menu .offcanvas-lg.show:not(.hiding) {
  transform: none;
}
}
@media (max-width: 991.98px) {
#sleep-timer-menu .offcanvas-lg.showing, #sleep-timer-menu .offcanvas-lg.hiding, #sleep-timer-menu .offcanvas-lg.show {
  visibility: visible;
}
}
@media (min-width: 992px) {
#sleep-timer-menu .offcanvas-lg {
  --bs-offcanvas-height: auto;
  --bs-offcanvas-border-width: 0;
  background-color: transparent !important;
}
#sleep-timer-menu .offcanvas-lg .offcanvas-header {
  display: none;
}
#sleep-timer-menu .offcanvas-lg .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
  background-color: transparent !important;
}
}
@media (max-width: 1199.98px) {
#sleep-timer-menu .offcanvas-xl {
  position: fixed;
  bottom: 0;
  z-index: var(--bs-offcanvas-zindex);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  color: var(--bs-offcanvas-color);
  visibility: hidden;
  background-color: var(--bs-offcanvas-bg);
  background-clip: padding-box;
  outline: 0;
  transition: transform 0.3s ease-in-out;
}
}
@media (max-width: 1199.98px) and (prefers-reduced-motion: reduce) {
#sleep-timer-menu .offcanvas-xl {
  transition: none;
}
}
@media (max-width: 1199.98px) {
#sleep-timer-menu .offcanvas-xl.offcanvas-start {
  top: 0;
  left: 0;
  width: var(--bs-offcanvas-width);
  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(-100%);
}
}
@media (max-width: 1199.98px) {
#sleep-timer-menu .offcanvas-xl.offcanvas-end {
  top: 0;
  right: 0;
  width: var(--bs-offcanvas-width);
  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(100%);
}
}
@media (max-width: 1199.98px) {
#sleep-timer-menu .offcanvas-xl.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(-100%);
}
}
@media (max-width: 1199.98px) {
#sleep-timer-menu .offcanvas-xl.offcanvas-bottom {
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(100%);
}
}
@media (max-width: 1199.98px) {
#sleep-timer-menu .offcanvas-xl.showing, #sleep-timer-menu .offcanvas-xl.show:not(.hiding) {
  transform: none;
}
}
@media (max-width: 1199.98px) {
#sleep-timer-menu .offcanvas-xl.showing, #sleep-timer-menu .offcanvas-xl.hiding, #sleep-timer-menu .offcanvas-xl.show {
  visibility: visible;
}
}
@media (min-width: 1200px) {
#sleep-timer-menu .offcanvas-xl {
  --bs-offcanvas-height: auto;
  --bs-offcanvas-border-width: 0;
  background-color: transparent !important;
}
#sleep-timer-menu .offcanvas-xl .offcanvas-header {
  display: none;
}
#sleep-timer-menu .offcanvas-xl .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
  background-color: transparent !important;
}
}
@media (max-width: 1399.98px) {
#sleep-timer-menu .offcanvas-xxl {
  position: fixed;
  bottom: 0;
  z-index: var(--bs-offcanvas-zindex);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  color: var(--bs-offcanvas-color);
  visibility: hidden;
  background-color: var(--bs-offcanvas-bg);
  background-clip: padding-box;
  outline: 0;
  transition: transform 0.3s ease-in-out;
}
}
@media (max-width: 1399.98px) and (prefers-reduced-motion: reduce) {
#sleep-timer-menu .offcanvas-xxl {
  transition: none;
}
}
@media (max-width: 1399.98px) {
#sleep-timer-menu .offcanvas-xxl.offcanvas-start {
  top: 0;
  left: 0;
  width: var(--bs-offcanvas-width);
  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(-100%);
}
}
@media (max-width: 1399.98px) {
#sleep-timer-menu .offcanvas-xxl.offcanvas-end {
  top: 0;
  right: 0;
  width: var(--bs-offcanvas-width);
  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(100%);
}
}
@media (max-width: 1399.98px) {
#sleep-timer-menu .offcanvas-xxl.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(-100%);
}
}
@media (max-width: 1399.98px) {
#sleep-timer-menu .offcanvas-xxl.offcanvas-bottom {
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(100%);
}
}
@media (max-width: 1399.98px) {
#sleep-timer-menu .offcanvas-xxl.showing, #sleep-timer-menu .offcanvas-xxl.show:not(.hiding) {
  transform: none;
}
}
@media (max-width: 1399.98px) {
#sleep-timer-menu .offcanvas-xxl.showing, #sleep-timer-menu .offcanvas-xxl.hiding, #sleep-timer-menu .offcanvas-xxl.show {
  visibility: visible;
}
}
@media (min-width: 1400px) {
#sleep-timer-menu .offcanvas-xxl {
  --bs-offcanvas-height: auto;
  --bs-offcanvas-border-width: 0;
  background-color: transparent !important;
}
#sleep-timer-menu .offcanvas-xxl .offcanvas-header {
  display: none;
}
#sleep-timer-menu .offcanvas-xxl .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
  background-color: transparent !important;
}
}
#sleep-timer-menu .offcanvas {
position: fixed;
bottom: 0;
z-index: var(--bs-offcanvas-zindex);
display: flex;
flex-direction: column;
max-width: 100%;
color: var(--bs-offcanvas-color);
visibility: hidden;
background-color: var(--bs-offcanvas-bg);
background-clip: padding-box;
outline: 0;
transition: transform 0.3s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
#sleep-timer-menu .offcanvas {
  transition: none;
}
}
#sleep-timer-menu .offcanvas.offcanvas-start {
top: 0;
left: 0;
width: var(--bs-offcanvas-width);
border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
transform: translateX(-100%);
}
#sleep-timer-menu .offcanvas.offcanvas-end {
top: 0;
right: 0;
width: var(--bs-offcanvas-width);
border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
transform: translateX(100%);
}
#sleep-timer-menu .offcanvas.offcanvas-top {
top: 0;
right: 0;
left: 0;
height: var(--bs-offcanvas-height);
max-height: 100%;
border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
transform: translateY(-100%);
}
#sleep-timer-menu .offcanvas.offcanvas-bottom {
right: 0;
left: 0;
height: var(--bs-offcanvas-height);
max-height: 100%;
border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
transform: translateY(100%);
}
#sleep-timer-menu .offcanvas.showing, #sleep-timer-menu .offcanvas.show:not(.hiding) {
transform: none;
}
#sleep-timer-menu .offcanvas.showing, #sleep-timer-menu .offcanvas.hiding, #sleep-timer-menu .offcanvas.show {
visibility: visible;
}
#sleep-timer-menu .offcanvas-backdrop {
position: fixed;
top: 0;
left: 0;
z-index: 1040;
width: 100vw;
height: 100vh;
background-color: #000;
}
#sleep-timer-menu .offcanvas-backdrop.fade {
opacity: 0;
}
#sleep-timer-menu .offcanvas-backdrop.show {
opacity: 0.5;
}
#sleep-timer-menu .offcanvas-header {
display: flex;
align-items: center;
justify-content: space-between;
padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);
}
#sleep-timer-menu .offcanvas-header .btn-close {
padding: calc(var(--bs-offcanvas-padding-y) * 0.5) calc(var(--bs-offcanvas-padding-x) * 0.5);
margin-top: calc(-0.5 * var(--bs-offcanvas-padding-y));
margin-right: calc(-0.5 * var(--bs-offcanvas-padding-x));
margin-bottom: calc(-0.5 * var(--bs-offcanvas-padding-y));
}
#sleep-timer-menu .offcanvas-title {
margin-bottom: 0;
line-height: 1.5;
}
#sleep-timer-menu .offcanvas-body {
flex-grow: 1;
padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);
overflow-y: auto;
}
#sleep-timer-menu .placeholder {
display: inline-block;
min-height: 1em;
vertical-align: middle;
cursor: wait;
background-color: currentcolor;
opacity: 0.5;
}
#sleep-timer-menu .placeholder.btn::before {
display: inline-block;
content: "";
}
#sleep-timer-menu .placeholder-xs {
min-height: 0.6em;
}
#sleep-timer-menu .placeholder-sm {
min-height: 0.8em;
}
#sleep-timer-menu .placeholder-lg {
min-height: 1.2em;
}
#sleep-timer-menu .placeholder-glow .placeholder {
animation: placeholder-glow 2s ease-in-out infinite;
}
@keyframes placeholder-glow {
50% {
  opacity: 0.2;
}
}
#sleep-timer-menu .placeholder-wave {
mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
mask-size: 200% 100%;
animation: placeholder-wave 2s linear infinite;
}
@keyframes placeholder-wave {
100% {
  mask-position: -200% 0%;
}
}
#sleep-timer-menu .clearfix::after {
display: block;
clear: both;
content: "";
}
#sleep-timer-menu .text-bg-primary {
color: #fff !important;
background-color: RGBA(30, 215, 96, var(--bs-bg-opacity, 1)) !important;
}
#sleep-timer-menu .text-bg-secondary {
color: #000 !important;
background-color: RGBA(255, 255, 255, var(--bs-bg-opacity, 1)) !important;
}
#sleep-timer-menu .text-bg-success {
color: #fff !important;
background-color: RGBA(70, 148, 8, var(--bs-bg-opacity, 1)) !important;
}
#sleep-timer-menu .text-bg-info {
color: #fff !important;
background-color: RGBA(2, 154, 207, var(--bs-bg-opacity, 1)) !important;
}
#sleep-timer-menu .text-bg-warning {
color: #fff !important;
background-color: RGBA(217, 131, 31, var(--bs-bg-opacity, 1)) !important;
}
#sleep-timer-menu .text-bg-danger {
color: #fff !important;
background-color: RGBA(155, 71, 159, var(--bs-bg-opacity, 1)) !important;
}
#sleep-timer-menu .text-bg-light {
color: #000 !important;
background-color: RGBA(255, 255, 255, var(--bs-bg-opacity, 1)) !important;
}
#sleep-timer-menu .text-bg-dark {
color: #fff !important;
background-color: RGBA(55, 58, 60, var(--bs-bg-opacity, 1)) !important;
}
#sleep-timer-menu .link-primary {
color: #1ed760 !important;
}
#sleep-timer-menu .link-primary:hover, #sleep-timer-menu .link-primary:focus {
color: #ae1c0c !important;
}
#sleep-timer-menu .link-secondary {
color: #fff !important;
}
#sleep-timer-menu .link-secondary:hover, #sleep-timer-menu .link-secondary:focus {
color: white !important;
}
#sleep-timer-menu .link-success {
color: #469408 !important;
}
#sleep-timer-menu .link-success:hover, #sleep-timer-menu .link-success:focus {
color: #387606 !important;
}
#sleep-timer-menu .link-info {
color: #029acf !important;
}
#sleep-timer-menu .link-info:hover, #sleep-timer-menu .link-info:focus {
color: #027ba6 !important;
}
#sleep-timer-menu .link-warning {
color: #d9831f !important;
}
#sleep-timer-menu .link-warning:hover, #sleep-timer-menu .link-warning:focus {
color: #ae6919 !important;
}
#sleep-timer-menu .link-danger {
color: #9b479f !important;
}
#sleep-timer-menu .link-danger:hover, #sleep-timer-menu .link-danger:focus {
color: #7c397f !important;
}
#sleep-timer-menu .link-light {
color: #fff !important;
}
#sleep-timer-menu .link-light:hover, #sleep-timer-menu .link-light:focus {
color: white !important;
}
#sleep-timer-menu .link-dark {
color: #373a3c !important;
}
#sleep-timer-menu .link-dark:hover, #sleep-timer-menu .link-dark:focus {
color: #2c2e30 !important;
}
#sleep-timer-menu .ratio {
position: relative;
width: 100%;
}
#sleep-timer-menu .ratio::before {
display: block;
padding-top: var(--bs-aspect-ratio);
content: "";
}
#sleep-timer-menu .ratio > * {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
#sleep-timer-menu .ratio-1x1 {
--bs-aspect-ratio: 100%;
}
#sleep-timer-menu .ratio-4x3 {
--bs-aspect-ratio: 75%;
}
#sleep-timer-menu .ratio-16x9 {
--bs-aspect-ratio: 56.25%;
}
#sleep-timer-menu .ratio-21x9 {
--bs-aspect-ratio: 42.8571428571%;
}
#sleep-timer-menu .fixed-top {
position: fixed;
top: 0;
right: 0;
left: 0;
z-index: 1030;
}
#sleep-timer-menu .fixed-bottom {
position: fixed;
right: 0;
bottom: 0;
left: 0;
z-index: 1030;
}
#sleep-timer-menu .sticky-top {
position: sticky;
top: 0;
z-index: 1020;
}
#sleep-timer-menu .sticky-bottom {
position: sticky;
bottom: 0;
z-index: 1020;
}
@media (min-width: 576px) {
#sleep-timer-menu .sticky-sm-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}
#sleep-timer-menu .sticky-sm-bottom {
  position: sticky;
  bottom: 0;
  z-index: 1020;
}
}
@media (min-width: 768px) {
#sleep-timer-menu .sticky-md-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}
#sleep-timer-menu .sticky-md-bottom {
  position: sticky;
  bottom: 0;
  z-index: 1020;
}
}
@media (min-width: 992px) {
#sleep-timer-menu .sticky-lg-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}
#sleep-timer-menu .sticky-lg-bottom {
  position: sticky;
  bottom: 0;
  z-index: 1020;
}
}
@media (min-width: 1200px) {
#sleep-timer-menu .sticky-xl-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}
#sleep-timer-menu .sticky-xl-bottom {
  position: sticky;
  bottom: 0;
  z-index: 1020;
}
}
@media (min-width: 1400px) {
#sleep-timer-menu .sticky-xxl-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}
#sleep-timer-menu .sticky-xxl-bottom {
  position: sticky;
  bottom: 0;
  z-index: 1020;
}
}
#sleep-timer-menu .hstack {
display: flex;
flex-direction: row;
align-items: center;
align-self: stretch;
}
#sleep-timer-menu .vstack {
display: flex;
flex: 1 1 auto;
flex-direction: column;
align-self: stretch;
}
#sleep-timer-menu .visually-hidden,
#sleep-timer-menu .visually-hidden-focusable:not(:focus):not(:focus-within) {
position: absolute !important;
width: 1px !important;
height: 1px !important;
padding: 0 !important;
margin: -1px !important;
overflow: hidden !important;
clip: rect(0, 0, 0, 0) !important;
white-space: nowrap !important;
border: 0 !important;
}
#sleep-timer-menu .stretched-link::after {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1;
content: "";
}
#sleep-timer-menu .text-truncate {
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}
#sleep-timer-menu .vr {
display: inline-block;
align-self: stretch;
width: 1px;
min-height: 1em;
background-color: currentcolor;
opacity: 0.25;
}
#sleep-timer-menu .align-baseline {
vertical-align: baseline !important;
}
#sleep-timer-menu .align-top {
vertical-align: top !important;
}
#sleep-timer-menu .align-middle {
vertical-align: middle !important;
}
#sleep-timer-menu .align-bottom {
vertical-align: bottom !important;
}
#sleep-timer-menu .align-text-bottom {
vertical-align: text-bottom !important;
}
#sleep-timer-menu .align-text-top {
vertical-align: text-top !important;
}
#sleep-timer-menu .float-start {
float: left !important;
}
#sleep-timer-menu .float-end {
float: right !important;
}
#sleep-timer-menu .float-none {
float: none !important;
}
#sleep-timer-menu .opacity-0 {
opacity: 0 !important;
}
#sleep-timer-menu .opacity-25 {
opacity: 0.25 !important;
}
#sleep-timer-menu .opacity-50 {
opacity: 0.5 !important;
}
#sleep-timer-menu .opacity-75 {
opacity: 0.75 !important;
}
#sleep-timer-menu .opacity-100 {
opacity: 1 !important;
}
#sleep-timer-menu .overflow-auto {
overflow: auto !important;
}
#sleep-timer-menu .overflow-hidden {
overflow: hidden !important;
}
#sleep-timer-menu .overflow-visible {
overflow: visible !important;
}
#sleep-timer-menu .overflow-scroll {
overflow: scroll !important;
}
#sleep-timer-menu .d-inline {
display: inline !important;
}
#sleep-timer-menu .d-inline-block {
display: inline-block !important;
}
#sleep-timer-menu .d-block {
display: block !important;
}
#sleep-timer-menu .d-grid {
display: grid !important;
}
#sleep-timer-menu .d-table {
display: table !important;
}
#sleep-timer-menu .d-table-row {
display: table-row !important;
}
#sleep-timer-menu .d-table-cell {
display: table-cell !important;
}
#sleep-timer-menu .d-flex {
display: flex !important;
}
#sleep-timer-menu .d-inline-flex {
display: inline-flex !important;
}
#sleep-timer-menu .d-none {
display: none !important;
}
#sleep-timer-menu .shadow {
box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
#sleep-timer-menu .shadow-sm {
box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
#sleep-timer-menu .shadow-lg {
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}
#sleep-timer-menu .shadow-none {
box-shadow: none !important;
}
#sleep-timer-menu .position-static {
position: static !important;
}
#sleep-timer-menu .position-relative {
position: relative !important;
}
#sleep-timer-menu .position-absolute {
position: absolute !important;
}
#sleep-timer-menu .position-fixed {
position: fixed !important;
}
#sleep-timer-menu .position-sticky {
position: sticky !important;
}
#sleep-timer-menu .top-0 {
top: 0 !important;
}
#sleep-timer-menu .top-50 {
top: 50% !important;
}
#sleep-timer-menu .top-100 {
top: 100% !important;
}
#sleep-timer-menu .bottom-0 {
bottom: 0 !important;
}
#sleep-timer-menu .bottom-50 {
bottom: 50% !important;
}
#sleep-timer-menu .bottom-100 {
bottom: 100% !important;
}
#sleep-timer-menu .start-0 {
left: 0 !important;
}
#sleep-timer-menu .start-50 {
left: 50% !important;
}
#sleep-timer-menu .start-100 {
left: 100% !important;
}
#sleep-timer-menu .end-0 {
right: 0 !important;
}
#sleep-timer-menu .end-50 {
right: 50% !important;
}
#sleep-timer-menu .end-100 {
right: 100% !important;
}
#sleep-timer-menu .translate-middle {
transform: translate(-50%, -50%) !important;
}
#sleep-timer-menu .translate-middle-x {
transform: translateX(-50%) !important;
}
#sleep-timer-menu .translate-middle-y {
transform: translateY(-50%) !important;
}
#sleep-timer-menu .border {
border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
#sleep-timer-menu .border-0 {
border: 0 !important;
}
#sleep-timer-menu .border-top {
border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
#sleep-timer-menu .border-top-0 {
border-top: 0 !important;
}
#sleep-timer-menu .border-end {
border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
#sleep-timer-menu .border-end-0 {
border-right: 0 !important;
}
#sleep-timer-menu .border-bottom {
border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
#sleep-timer-menu .border-bottom-0 {
border-bottom: 0 !important;
}
#sleep-timer-menu .border-start {
border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
#sleep-timer-menu .border-start-0 {
border-left: 0 !important;
}
#sleep-timer-menu .border-primary {
--bs-border-opacity: 1;
border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;
}
#sleep-timer-menu .border-secondary {
--bs-border-opacity: 1;
border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;
}
#sleep-timer-menu .border-success {
--bs-border-opacity: 1;
border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
}
#sleep-timer-menu .border-info {
--bs-border-opacity: 1;
border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important;
}
#sleep-timer-menu .border-warning {
--bs-border-opacity: 1;
border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important;
}
#sleep-timer-menu .border-danger {
--bs-border-opacity: 1;
border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important;
}
#sleep-timer-menu .border-light {
--bs-border-opacity: 1;
border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important;
}
#sleep-timer-menu .border-dark {
--bs-border-opacity: 1;
border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important;
}
#sleep-timer-menu .border-white {
--bs-border-opacity: 1;
border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important;
}
#sleep-timer-menu .border-1 {
--bs-border-width: 1px;
}
#sleep-timer-menu .border-2 {
--bs-border-width: 2px;
}
#sleep-timer-menu .border-3 {
--bs-border-width: 3px;
}
#sleep-timer-menu .border-4 {
--bs-border-width: 4px;
}
#sleep-timer-menu .border-5 {
--bs-border-width: 5px;
}
#sleep-timer-menu .border-opacity-10 {
--bs-border-opacity: 0.1;
}
#sleep-timer-menu .border-opacity-25 {
--bs-border-opacity: 0.25;
}
#sleep-timer-menu .border-opacity-50 {
--bs-border-opacity: 0.5;
}
#sleep-timer-menu .border-opacity-75 {
--bs-border-opacity: 0.75;
}
#sleep-timer-menu .border-opacity-100 {
--bs-border-opacity: 1;
}
#sleep-timer-menu .w-25 {
width: 25% !important;
}
#sleep-timer-menu .w-50 {
width: 50% !important;
}
#sleep-timer-menu .w-75 {
width: 75% !important;
}
#sleep-timer-menu .w-100 {
width: 100% !important;
}
#sleep-timer-menu .w-auto {
width: auto !important;
}
#sleep-timer-menu .mw-100 {
max-width: 100% !important;
}
#sleep-timer-menu .vw-100 {
width: 100vw !important;
}
#sleep-timer-menu .min-vw-100 {
min-width: 100vw !important;
}
#sleep-timer-menu .h-25 {
height: 25% !important;
}
#sleep-timer-menu .h-50 {
height: 50% !important;
}
#sleep-timer-menu .h-75 {
height: 75% !important;
}
#sleep-timer-menu .h-100 {
height: 100% !important;
}
#sleep-timer-menu .h-auto {
height: auto !important;
}
#sleep-timer-menu .mh-100 {
max-height: 100% !important;
}
#sleep-timer-menu .vh-100 {
height: 100vh !important;
}
#sleep-timer-menu .min-vh-100 {
min-height: 100vh !important;
}
#sleep-timer-menu .flex-fill {
flex: 1 1 auto !important;
}
#sleep-timer-menu .flex-row {
flex-direction: row !important;
}
#sleep-timer-menu .flex-column {
flex-direction: column !important;
}
#sleep-timer-menu .flex-row-reverse {
flex-direction: row-reverse !important;
}
#sleep-timer-menu .flex-column-reverse {
flex-direction: column-reverse !important;
}
#sleep-timer-menu .flex-grow-0 {
flex-grow: 0 !important;
}
#sleep-timer-menu .flex-grow-1 {
flex-grow: 1 !important;
}
#sleep-timer-menu .flex-shrink-0 {
flex-shrink: 0 !important;
}
#sleep-timer-menu .flex-shrink-1 {
flex-shrink: 1 !important;
}
#sleep-timer-menu .flex-wrap {
flex-wrap: wrap !important;
}
#sleep-timer-menu .flex-nowrap {
flex-wrap: nowrap !important;
}
#sleep-timer-menu .flex-wrap-reverse {
flex-wrap: wrap-reverse !important;
}
#sleep-timer-menu .justify-content-start {
justify-content: flex-start !important;
}
#sleep-timer-menu .justify-content-end {
justify-content: flex-end !important;
}
#sleep-timer-menu .justify-content-center {
justify-content: center !important;
}
#sleep-timer-menu .justify-content-between {
justify-content: space-between !important;
}
#sleep-timer-menu .justify-content-around {
justify-content: space-around !important;
}
#sleep-timer-menu .justify-content-evenly {
justify-content: space-evenly !important;
}
#sleep-timer-menu .align-items-start {
align-items: flex-start !important;
}
#sleep-timer-menu .align-items-end {
align-items: flex-end !important;
}
#sleep-timer-menu .align-items-center {
align-items: center !important;
}
#sleep-timer-menu .align-items-baseline {
align-items: baseline !important;
}
#sleep-timer-menu .align-items-stretch {
align-items: stretch !important;
}
#sleep-timer-menu .align-content-start {
align-content: flex-start !important;
}
#sleep-timer-menu .align-content-end {
align-content: flex-end !important;
}
#sleep-timer-menu .align-content-center {
align-content: center !important;
}
#sleep-timer-menu .align-content-between {
align-content: space-between !important;
}
#sleep-timer-menu .align-content-around {
align-content: space-around !important;
}
#sleep-timer-menu .align-content-stretch {
align-content: stretch !important;
}
#sleep-timer-menu .align-self-auto {
align-self: auto !important;
}
#sleep-timer-menu .align-self-start {
align-self: flex-start !important;
}
#sleep-timer-menu .align-self-end {
align-self: flex-end !important;
}
#sleep-timer-menu .align-self-center {
align-self: center !important;
}
#sleep-timer-menu .align-self-baseline {
align-self: baseline !important;
}
#sleep-timer-menu .align-self-stretch {
align-self: stretch !important;
}
#sleep-timer-menu .order-first {
order: -1 !important;
}
#sleep-timer-menu .order-0 {
order: 0 !important;
}
#sleep-timer-menu .order-1 {
order: 1 !important;
}
#sleep-timer-menu .order-2 {
order: 2 !important;
}
#sleep-timer-menu .order-3 {
order: 3 !important;
}
#sleep-timer-menu .order-4 {
order: 4 !important;
}
#sleep-timer-menu .order-5 {
order: 5 !important;
}
#sleep-timer-menu .order-last {
order: 6 !important;
}
#sleep-timer-menu .m-0 {
margin: 0 !important;
}
#sleep-timer-menu .m-1 {
margin: 0.25rem !important;
}
#sleep-timer-menu .m-2 {
margin: 0.5rem !important;
}
#sleep-timer-menu .m-3 {
margin: 1rem !important;
}
#sleep-timer-menu .m-4 {
margin: 1.5rem !important;
}
#sleep-timer-menu .m-5 {
margin: 3rem !important;
}
#sleep-timer-menu .m-auto {
margin: auto !important;
}
#sleep-timer-menu .mx-0 {
margin-right: 0 !important;
margin-left: 0 !important;
}
#sleep-timer-menu .mx-1 {
margin-right: 0.25rem !important;
margin-left: 0.25rem !important;
}
#sleep-timer-menu .mx-2 {
margin-right: 0.5rem !important;
margin-left: 0.5rem !important;
}
#sleep-timer-menu .mx-3 {
margin-right: 1rem !important;
margin-left: 1rem !important;
}
#sleep-timer-menu .mx-4 {
margin-right: 1.5rem !important;
margin-left: 1.5rem !important;
}
#sleep-timer-menu .mx-5 {
margin-right: 3rem !important;
margin-left: 3rem !important;
}
#sleep-timer-menu .mx-auto {
margin-right: auto !important;
margin-left: auto !important;
}
#sleep-timer-menu .my-0 {
margin-top: 0 !important;
margin-bottom: 0 !important;
}
#sleep-timer-menu .my-1 {
margin-top: 0.25rem !important;
margin-bottom: 0.25rem !important;
}
#sleep-timer-menu .my-2 {
margin-top: 0.5rem !important;
margin-bottom: 0.5rem !important;
}
#sleep-timer-menu .my-3 {
margin-top: 1rem !important;
margin-bottom: 1rem !important;
}
#sleep-timer-menu .my-4 {
margin-top: 1.5rem !important;
margin-bottom: 1.5rem !important;
}
#sleep-timer-menu .my-5 {
margin-top: 3rem !important;
margin-bottom: 3rem !important;
}
#sleep-timer-menu .my-auto {
margin-top: auto !important;
margin-bottom: auto !important;
}
#sleep-timer-menu .mt-0 {
margin-top: 0 !important;
}
#sleep-timer-menu .mt-1 {
margin-top: 0.25rem !important;
}
#sleep-timer-menu .mt-2 {
margin-top: 0.5rem !important;
}
#sleep-timer-menu .mt-3 {
margin-top: 1rem !important;
}
#sleep-timer-menu .mt-4 {
margin-top: 1.5rem !important;
}
#sleep-timer-menu .mt-5 {
margin-top: 3rem !important;
}
#sleep-timer-menu .mt-auto {
margin-top: auto !important;
}
#sleep-timer-menu .me-0 {
margin-right: 0 !important;
}
#sleep-timer-menu .me-1 {
margin-right: 0.25rem !important;
}
#sleep-timer-menu .me-2 {
margin-right: 0.5rem !important;
}
#sleep-timer-menu .me-3 {
margin-right: 1rem !important;
}
#sleep-timer-menu .me-4 {
margin-right: 1.5rem !important;
}
#sleep-timer-menu .me-5 {
margin-right: 3rem !important;
}
#sleep-timer-menu .me-auto {
margin-right: auto !important;
}
#sleep-timer-menu .mb-0 {
margin-bottom: 0 !important;
}
#sleep-timer-menu .mb-1 {
margin-bottom: 0.25rem !important;
}
#sleep-timer-menu .mb-2 {
margin-bottom: 0.5rem !important;
}
#sleep-timer-menu .mb-3 {
margin-bottom: 1rem !important;
}
#sleep-timer-menu .mb-4 {
margin-bottom: 1.5rem !important;
}
#sleep-timer-menu .mb-5 {
margin-bottom: 3rem !important;
}
#sleep-timer-menu .mb-auto {
margin-bottom: auto !important;
}
#sleep-timer-menu .ms-0 {
margin-left: 0 !important;
}
#sleep-timer-menu .ms-1 {
margin-left: 0.25rem !important;
}
#sleep-timer-menu .ms-2 {
margin-left: 0.5rem !important;
}
#sleep-timer-menu .ms-3 {
margin-left: 1rem !important;
}
#sleep-timer-menu .ms-4 {
margin-left: 1.5rem !important;
}
#sleep-timer-menu .ms-5 {
margin-left: 3rem !important;
}
#sleep-timer-menu .ms-auto {
margin-left: auto !important;
}
#sleep-timer-menu .p-0 {
padding: 0 !important;
}
#sleep-timer-menu .p-1 {
padding: 0.25rem !important;
}
#sleep-timer-menu .p-2 {
padding: 0.5rem !important;
}
#sleep-timer-menu .p-3 {
padding: 1rem !important;
}
#sleep-timer-menu .p-4 {
padding: 1.5rem !important;
}
#sleep-timer-menu .p-5 {
padding: 3rem !important;
}
#sleep-timer-menu .px-0 {
padding-right: 0 !important;
padding-left: 0 !important;
}
#sleep-timer-menu .px-1 {
padding-right: 0.25rem !important;
padding-left: 0.25rem !important;
}
#sleep-timer-menu .px-2 {
padding-right: 0.5rem !important;
padding-left: 0.5rem !important;
}
#sleep-timer-menu .px-3 {
padding-right: 1rem !important;
padding-left: 1rem !important;
}
#sleep-timer-menu .px-4 {
padding-right: 1.5rem !important;
padding-left: 1.5rem !important;
}
#sleep-timer-menu .px-5 {
padding-right: 3rem !important;
padding-left: 3rem !important;
}
#sleep-timer-menu .py-0 {
padding-top: 0 !important;
padding-bottom: 0 !important;
}
#sleep-timer-menu .py-1 {
padding-top: 0.25rem !important;
padding-bottom: 0.25rem !important;
}
#sleep-timer-menu .py-2 {
padding-top: 0.5rem !important;
padding-bottom: 0.5rem !important;
}
#sleep-timer-menu .py-3 {
padding-top: 1rem !important;
padding-bottom: 1rem !important;
}
#sleep-timer-menu .py-4 {
padding-top: 1.5rem !important;
padding-bottom: 1.5rem !important;
}
#sleep-timer-menu .py-5 {
padding-top: 3rem !important;
padding-bottom: 3rem !important;
}
#sleep-timer-menu .pt-0 {
padding-top: 0 !important;
}
#sleep-timer-menu .pt-1 {
padding-top: 0.25rem !important;
}
#sleep-timer-menu .pt-2 {
padding-top: 0.5rem !important;
}
#sleep-timer-menu .pt-3 {
padding-top: 1rem !important;
}
#sleep-timer-menu .pt-4 {
padding-top: 1.5rem !important;
}
#sleep-timer-menu .pt-5 {
padding-top: 3rem !important;
}
#sleep-timer-menu .pe-0 {
padding-right: 0 !important;
}
#sleep-timer-menu .pe-1 {
padding-right: 0.25rem !important;
}
#sleep-timer-menu .pe-2 {
padding-right: 0.5rem !important;
}
#sleep-timer-menu .pe-3 {
padding-right: 1rem !important;
}
#sleep-timer-menu .pe-4 {
padding-right: 1.5rem !important;
}
#sleep-timer-menu .pe-5 {
padding-right: 3rem !important;
}
#sleep-timer-menu .pb-0 {
padding-bottom: 0 !important;
}
#sleep-timer-menu .pb-1 {
padding-bottom: 0.25rem !important;
}
#sleep-timer-menu .pb-2 {
padding-bottom: 0.5rem !important;
}
#sleep-timer-menu .pb-3 {
padding-bottom: 1rem !important;
}
#sleep-timer-menu .pb-4 {
padding-bottom: 1.5rem !important;
}
#sleep-timer-menu .pb-5 {
padding-bottom: 3rem !important;
}
#sleep-timer-menu .ps-0 {
padding-left: 0 !important;
}
#sleep-timer-menu .ps-1 {
padding-left: 0.25rem !important;
}
#sleep-timer-menu .ps-2 {
padding-left: 0.5rem !important;
}
#sleep-timer-menu .ps-3 {
padding-left: 1rem !important;
}
#sleep-timer-menu .ps-4 {
padding-left: 1.5rem !important;
}
#sleep-timer-menu .ps-5 {
padding-left: 3rem !important;
}
#sleep-timer-menu .gap-0 {
gap: 0 !important;
}
#sleep-timer-menu .gap-1 {
gap: 0.25rem !important;
}
#sleep-timer-menu .gap-2 {
gap: 0.5rem !important;
}
#sleep-timer-menu .gap-3 {
gap: 1rem !important;
}
#sleep-timer-menu .gap-4 {
gap: 1.5rem !important;
}
#sleep-timer-menu .gap-5 {
gap: 3rem !important;
}
#sleep-timer-menu .font-monospace {
font-family: var(--bs-font-monospace) !important;
}
#sleep-timer-menu .fs-1 {
font-size: calc(1.375rem + 1.5vw) !important;
}
#sleep-timer-menu .fs-2 {
font-size: calc(1.325rem + 0.9vw) !important;
}
#sleep-timer-menu .fs-3 {
font-size: calc(1.3rem + 0.6vw) !important;
}
#sleep-timer-menu .fs-4 {
font-size: calc(1.275rem + 0.3vw) !important;
}
#sleep-timer-menu .fs-5 {
font-size: 1.25rem !important;
}
#sleep-timer-menu .fs-6 {
font-size: 1rem !important;
}
#sleep-timer-menu .fst-italic {
font-style: italic !important;
}
#sleep-timer-menu .fst-normal {
font-style: normal !important;
}
#sleep-timer-menu .fw-light {
font-weight: 300 !important;
}
#sleep-timer-menu .fw-lighter {
font-weight: lighter !important;
}
#sleep-timer-menu .fw-normal {
font-weight: 400 !important;
}
#sleep-timer-menu .fw-bold {
font-weight: 700 !important;
}
#sleep-timer-menu .fw-semibold {
font-weight: 600 !important;
}
#sleep-timer-menu .fw-bolder {
font-weight: bolder !important;
}
#sleep-timer-menu .lh-1 {
line-height: 1 !important;
}
#sleep-timer-menu .lh-sm {
line-height: 1.25 !important;
}
#sleep-timer-menu .lh-base {
line-height: 1.5 !important;
}
#sleep-timer-menu .lh-lg {
line-height: 2 !important;
}
#sleep-timer-menu .text-start {
text-align: left !important;
}
#sleep-timer-menu .text-end {
text-align: right !important;
}
#sleep-timer-menu .text-center {
text-align: center !important;
}
#sleep-timer-menu .text-decoration-none {
text-decoration: none !important;
}
#sleep-timer-menu .text-decoration-underline {
text-decoration: underline !important;
}
#sleep-timer-menu .text-decoration-line-through {
text-decoration: line-through !important;
}
#sleep-timer-menu .text-lowercase {
text-transform: lowercase !important;
}
#sleep-timer-menu .text-uppercase {
text-transform: uppercase !important;
}
#sleep-timer-menu .text-capitalize {
text-transform: capitalize !important;
}
#sleep-timer-menu .text-wrap {
white-space: normal !important;
}
#sleep-timer-menu .text-nowrap {
white-space: nowrap !important;
}
#sleep-timer-menu .text-break {
word-wrap: break-word !important;
word-break: break-word !important;
}
#sleep-timer-menu .text-primary {
--bs-text-opacity: 1;
color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
#sleep-timer-menu .text-secondary {
--bs-text-opacity: 1;
color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
}
#sleep-timer-menu .text-success {
--bs-text-opacity: 1;
color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
}
#sleep-timer-menu .text-info {
--bs-text-opacity: 1;
color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
}
#sleep-timer-menu .text-warning {
--bs-text-opacity: 1;
color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
}
#sleep-timer-menu .text-danger {
--bs-text-opacity: 1;
color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}
#sleep-timer-menu .text-light {
--bs-text-opacity: 1;
color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}
#sleep-timer-menu .text-dark {
--bs-text-opacity: 1;
color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}
#sleep-timer-menu .text-black {
--bs-text-opacity: 1;
color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
}
#sleep-timer-menu .text-white {
--bs-text-opacity: 1;
color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}
#sleep-timer-menu .text-body {
--bs-text-opacity: 1;
color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
}
#sleep-timer-menu .text-muted {
--bs-text-opacity: 1;
color: #777 !important;
}
#sleep-timer-menu .text-black-50 {
--bs-text-opacity: 1;
color: rgba(0, 0, 0, 0.5) !important;
}
#sleep-timer-menu .text-white-50 {
--bs-text-opacity: 1;
color: rgba(255, 255, 255, 0.5) !important;
}
#sleep-timer-menu .text-reset {
--bs-text-opacity: 1;
color: inherit !important;
}
#sleep-timer-menu .text-opacity-25 {
--bs-text-opacity: 0.25;
}
#sleep-timer-menu .text-opacity-50 {
--bs-text-opacity: 0.5;
}
#sleep-timer-menu .text-opacity-75 {
--bs-text-opacity: 0.75;
}
#sleep-timer-menu .text-opacity-100 {
--bs-text-opacity: 1;
}
#sleep-timer-menu .bg-primary {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}
#sleep-timer-menu .bg-secondary {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
}
#sleep-timer-menu .bg-success {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}
#sleep-timer-menu .bg-info {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
}
#sleep-timer-menu .bg-warning {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
}
#sleep-timer-menu .bg-danger {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
}
#sleep-timer-menu .bg-light {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}
#sleep-timer-menu .bg-dark {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}
#sleep-timer-menu .bg-black {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
}
#sleep-timer-menu .bg-white {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
}
#sleep-timer-menu .bg-body {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;
}
#sleep-timer-menu .bg-transparent {
--bs-bg-opacity: 1;
background-color: transparent !important;
}
#sleep-timer-menu .bg-opacity-10 {
--bs-bg-opacity: 0.1;
}
#sleep-timer-menu .bg-opacity-25 {
--bs-bg-opacity: 0.25;
}
#sleep-timer-menu .bg-opacity-50 {
--bs-bg-opacity: 0.5;
}
#sleep-timer-menu .bg-opacity-75 {
--bs-bg-opacity: 0.75;
}
#sleep-timer-menu .bg-opacity-100 {
--bs-bg-opacity: 1;
}
#sleep-timer-menu .bg-gradient {
background-image: var(--bs-gradient) !important;
}
#sleep-timer-menu .user-select-all {
user-select: all !important;
}
#sleep-timer-menu .user-select-auto {
user-select: auto !important;
}
#sleep-timer-menu .user-select-none {
user-select: none !important;
}
#sleep-timer-menu .pe-none {
pointer-events: none !important;
}
#sleep-timer-menu .pe-auto {
pointer-events: auto !important;
}
#sleep-timer-menu .rounded {
border-radius: var(--bs-border-radius) !important;
}
#sleep-timer-menu .rounded-0 {
border-radius: 0 !important;
}
#sleep-timer-menu .rounded-1 {
border-radius: var(--bs-border-radius-sm) !important;
}
#sleep-timer-menu .rounded-2 {
border-radius: var(--bs-border-radius) !important;
}
#sleep-timer-menu .rounded-3 {
border-radius: var(--bs-border-radius-lg) !important;
}
#sleep-timer-menu .rounded-4 {
border-radius: var(--bs-border-radius-xl) !important;
}
#sleep-timer-menu .rounded-5 {
border-radius: var(--bs-border-radius-2xl) !important;
}
#sleep-timer-menu .rounded-circle {
border-radius: 50% !important;
}
#sleep-timer-menu .rounded-pill {
border-radius: var(--bs-border-radius-pill) !important;
}
#sleep-timer-menu .rounded-top {
border-top-left-radius: var(--bs-border-radius) !important;
border-top-right-radius: var(--bs-border-radius) !important;
}
#sleep-timer-menu .rounded-end {
border-top-right-radius: var(--bs-border-radius) !important;
border-bottom-right-radius: var(--bs-border-radius) !important;
}
#sleep-timer-menu .rounded-bottom {
border-bottom-right-radius: var(--bs-border-radius) !important;
border-bottom-left-radius: var(--bs-border-radius) !important;
}
#sleep-timer-menu .rounded-start {
border-bottom-left-radius: var(--bs-border-radius) !important;
border-top-left-radius: var(--bs-border-radius) !important;
}
#sleep-timer-menu .visible {
visibility: visible !important;
}
#sleep-timer-menu .invisible {
visibility: hidden !important;
}
@media (min-width: 576px) {
#sleep-timer-menu .float-sm-start {
  float: left !important;
}
#sleep-timer-menu .float-sm-end {
  float: right !important;
}
#sleep-timer-menu .float-sm-none {
  float: none !important;
}
#sleep-timer-menu .d-sm-inline {
  display: inline !important;
}
#sleep-timer-menu .d-sm-inline-block {
  display: inline-block !important;
}
#sleep-timer-menu .d-sm-block {
  display: block !important;
}
#sleep-timer-menu .d-sm-grid {
  display: grid !important;
}
#sleep-timer-menu .d-sm-table {
  display: table !important;
}
#sleep-timer-menu .d-sm-table-row {
  display: table-row !important;
}
#sleep-timer-menu .d-sm-table-cell {
  display: table-cell !important;
}
#sleep-timer-menu .d-sm-flex {
  display: flex !important;
}
#sleep-timer-menu .d-sm-inline-flex {
  display: inline-flex !important;
}
#sleep-timer-menu .d-sm-none {
  display: none !important;
}
#sleep-timer-menu .flex-sm-fill {
  flex: 1 1 auto !important;
}
#sleep-timer-menu .flex-sm-row {
  flex-direction: row !important;
}
#sleep-timer-menu .flex-sm-column {
  flex-direction: column !important;
}
#sleep-timer-menu .flex-sm-row-reverse {
  flex-direction: row-reverse !important;
}
#sleep-timer-menu .flex-sm-column-reverse {
  flex-direction: column-reverse !important;
}
#sleep-timer-menu .flex-sm-grow-0 {
  flex-grow: 0 !important;
}
#sleep-timer-menu .flex-sm-grow-1 {
  flex-grow: 1 !important;
}
#sleep-timer-menu .flex-sm-shrink-0 {
  flex-shrink: 0 !important;
}
#sleep-timer-menu .flex-sm-shrink-1 {
  flex-shrink: 1 !important;
}
#sleep-timer-menu .flex-sm-wrap {
  flex-wrap: wrap !important;
}
#sleep-timer-menu .flex-sm-nowrap {
  flex-wrap: nowrap !important;
}
#sleep-timer-menu .flex-sm-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
#sleep-timer-menu .justify-content-sm-start {
  justify-content: flex-start !important;
}
#sleep-timer-menu .justify-content-sm-end {
  justify-content: flex-end !important;
}
#sleep-timer-menu .justify-content-sm-center {
  justify-content: center !important;
}
#sleep-timer-menu .justify-content-sm-between {
  justify-content: space-between !important;
}
#sleep-timer-menu .justify-content-sm-around {
  justify-content: space-around !important;
}
#sleep-timer-menu .justify-content-sm-evenly {
  justify-content: space-evenly !important;
}
#sleep-timer-menu .align-items-sm-start {
  align-items: flex-start !important;
}
#sleep-timer-menu .align-items-sm-end {
  align-items: flex-end !important;
}
#sleep-timer-menu .align-items-sm-center {
  align-items: center !important;
}
#sleep-timer-menu .align-items-sm-baseline {
  align-items: baseline !important;
}
#sleep-timer-menu .align-items-sm-stretch {
  align-items: stretch !important;
}
#sleep-timer-menu .align-content-sm-start {
  align-content: flex-start !important;
}
#sleep-timer-menu .align-content-sm-end {
  align-content: flex-end !important;
}
#sleep-timer-menu .align-content-sm-center {
  align-content: center !important;
}
#sleep-timer-menu .align-content-sm-between {
  align-content: space-between !important;
}
#sleep-timer-menu .align-content-sm-around {
  align-content: space-around !important;
}
#sleep-timer-menu .align-content-sm-stretch {
  align-content: stretch !important;
}
#sleep-timer-menu .align-self-sm-auto {
  align-self: auto !important;
}
#sleep-timer-menu .align-self-sm-start {
  align-self: flex-start !important;
}
#sleep-timer-menu .align-self-sm-end {
  align-self: flex-end !important;
}
#sleep-timer-menu .align-self-sm-center {
  align-self: center !important;
}
#sleep-timer-menu .align-self-sm-baseline {
  align-self: baseline !important;
}
#sleep-timer-menu .align-self-sm-stretch {
  align-self: stretch !important;
}
#sleep-timer-menu .order-sm-first {
  order: -1 !important;
}
#sleep-timer-menu .order-sm-0 {
  order: 0 !important;
}
#sleep-timer-menu .order-sm-1 {
  order: 1 !important;
}
#sleep-timer-menu .order-sm-2 {
  order: 2 !important;
}
#sleep-timer-menu .order-sm-3 {
  order: 3 !important;
}
#sleep-timer-menu .order-sm-4 {
  order: 4 !important;
}
#sleep-timer-menu .order-sm-5 {
  order: 5 !important;
}
#sleep-timer-menu .order-sm-last {
  order: 6 !important;
}
#sleep-timer-menu .m-sm-0 {
  margin: 0 !important;
}
#sleep-timer-menu .m-sm-1 {
  margin: 0.25rem !important;
}
#sleep-timer-menu .m-sm-2 {
  margin: 0.5rem !important;
}
#sleep-timer-menu .m-sm-3 {
  margin: 1rem !important;
}
#sleep-timer-menu .m-sm-4 {
  margin: 1.5rem !important;
}
#sleep-timer-menu .m-sm-5 {
  margin: 3rem !important;
}
#sleep-timer-menu .m-sm-auto {
  margin: auto !important;
}
#sleep-timer-menu .mx-sm-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
#sleep-timer-menu .mx-sm-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}
#sleep-timer-menu .mx-sm-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}
#sleep-timer-menu .mx-sm-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}
#sleep-timer-menu .mx-sm-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}
#sleep-timer-menu .mx-sm-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}
#sleep-timer-menu .mx-sm-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
#sleep-timer-menu .my-sm-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
#sleep-timer-menu .my-sm-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}
#sleep-timer-menu .my-sm-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
#sleep-timer-menu .my-sm-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
#sleep-timer-menu .my-sm-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
#sleep-timer-menu .my-sm-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}
#sleep-timer-menu .my-sm-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}
#sleep-timer-menu .mt-sm-0 {
  margin-top: 0 !important;
}
#sleep-timer-menu .mt-sm-1 {
  margin-top: 0.25rem !important;
}
#sleep-timer-menu .mt-sm-2 {
  margin-top: 0.5rem !important;
}
#sleep-timer-menu .mt-sm-3 {
  margin-top: 1rem !important;
}
#sleep-timer-menu .mt-sm-4 {
  margin-top: 1.5rem !important;
}
#sleep-timer-menu .mt-sm-5 {
  margin-top: 3rem !important;
}
#sleep-timer-menu .mt-sm-auto {
  margin-top: auto !important;
}
#sleep-timer-menu .me-sm-0 {
  margin-right: 0 !important;
}
#sleep-timer-menu .me-sm-1 {
  margin-right: 0.25rem !important;
}
#sleep-timer-menu .me-sm-2 {
  margin-right: 0.5rem !important;
}
#sleep-timer-menu .me-sm-3 {
  margin-right: 1rem !important;
}
#sleep-timer-menu .me-sm-4 {
  margin-right: 1.5rem !important;
}
#sleep-timer-menu .me-sm-5 {
  margin-right: 3rem !important;
}
#sleep-timer-menu .me-sm-auto {
  margin-right: auto !important;
}
#sleep-timer-menu .mb-sm-0 {
  margin-bottom: 0 !important;
}
#sleep-timer-menu .mb-sm-1 {
  margin-bottom: 0.25rem !important;
}
#sleep-timer-menu .mb-sm-2 {
  margin-bottom: 0.5rem !important;
}
#sleep-timer-menu .mb-sm-3 {
  margin-bottom: 1rem !important;
}
#sleep-timer-menu .mb-sm-4 {
  margin-bottom: 1.5rem !important;
}
#sleep-timer-menu .mb-sm-5 {
  margin-bottom: 3rem !important;
}
#sleep-timer-menu .mb-sm-auto {
  margin-bottom: auto !important;
}
#sleep-timer-menu .ms-sm-0 {
  margin-left: 0 !important;
}
#sleep-timer-menu .ms-sm-1 {
  margin-left: 0.25rem !important;
}
#sleep-timer-menu .ms-sm-2 {
  margin-left: 0.5rem !important;
}
#sleep-timer-menu .ms-sm-3 {
  margin-left: 1rem !important;
}
#sleep-timer-menu .ms-sm-4 {
  margin-left: 1.5rem !important;
}
#sleep-timer-menu .ms-sm-5 {
  margin-left: 3rem !important;
}
#sleep-timer-menu .ms-sm-auto {
  margin-left: auto !important;
}
#sleep-timer-menu .p-sm-0 {
  padding: 0 !important;
}
#sleep-timer-menu .p-sm-1 {
  padding: 0.25rem !important;
}
#sleep-timer-menu .p-sm-2 {
  padding: 0.5rem !important;
}
#sleep-timer-menu .p-sm-3 {
  padding: 1rem !important;
}
#sleep-timer-menu .p-sm-4 {
  padding: 1.5rem !important;
}
#sleep-timer-menu .p-sm-5 {
  padding: 3rem !important;
}
#sleep-timer-menu .px-sm-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
#sleep-timer-menu .px-sm-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}
#sleep-timer-menu .px-sm-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}
#sleep-timer-menu .px-sm-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
#sleep-timer-menu .px-sm-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
#sleep-timer-menu .px-sm-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}
#sleep-timer-menu .py-sm-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
#sleep-timer-menu .py-sm-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}
#sleep-timer-menu .py-sm-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
#sleep-timer-menu .py-sm-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
#sleep-timer-menu .py-sm-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
#sleep-timer-menu .py-sm-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
#sleep-timer-menu .pt-sm-0 {
  padding-top: 0 !important;
}
#sleep-timer-menu .pt-sm-1 {
  padding-top: 0.25rem !important;
}
#sleep-timer-menu .pt-sm-2 {
  padding-top: 0.5rem !important;
}
#sleep-timer-menu .pt-sm-3 {
  padding-top: 1rem !important;
}
#sleep-timer-menu .pt-sm-4 {
  padding-top: 1.5rem !important;
}
#sleep-timer-menu .pt-sm-5 {
  padding-top: 3rem !important;
}
#sleep-timer-menu .pe-sm-0 {
  padding-right: 0 !important;
}
#sleep-timer-menu .pe-sm-1 {
  padding-right: 0.25rem !important;
}
#sleep-timer-menu .pe-sm-2 {
  padding-right: 0.5rem !important;
}
#sleep-timer-menu .pe-sm-3 {
  padding-right: 1rem !important;
}
#sleep-timer-menu .pe-sm-4 {
  padding-right: 1.5rem !important;
}
#sleep-timer-menu .pe-sm-5 {
  padding-right: 3rem !important;
}
#sleep-timer-menu .pb-sm-0 {
  padding-bottom: 0 !important;
}
#sleep-timer-menu .pb-sm-1 {
  padding-bottom: 0.25rem !important;
}
#sleep-timer-menu .pb-sm-2 {
  padding-bottom: 0.5rem !important;
}
#sleep-timer-menu .pb-sm-3 {
  padding-bottom: 1rem !important;
}
#sleep-timer-menu .pb-sm-4 {
  padding-bottom: 1.5rem !important;
}
#sleep-timer-menu .pb-sm-5 {
  padding-bottom: 3rem !important;
}
#sleep-timer-menu .ps-sm-0 {
  padding-left: 0 !important;
}
#sleep-timer-menu .ps-sm-1 {
  padding-left: 0.25rem !important;
}
#sleep-timer-menu .ps-sm-2 {
  padding-left: 0.5rem !important;
}
#sleep-timer-menu .ps-sm-3 {
  padding-left: 1rem !important;
}
#sleep-timer-menu .ps-sm-4 {
  padding-left: 1.5rem !important;
}
#sleep-timer-menu .ps-sm-5 {
  padding-left: 3rem !important;
}
#sleep-timer-menu .gap-sm-0 {
  gap: 0 !important;
}
#sleep-timer-menu .gap-sm-1 {
  gap: 0.25rem !important;
}
#sleep-timer-menu .gap-sm-2 {
  gap: 0.5rem !important;
}
#sleep-timer-menu .gap-sm-3 {
  gap: 1rem !important;
}
#sleep-timer-menu .gap-sm-4 {
  gap: 1.5rem !important;
}
#sleep-timer-menu .gap-sm-5 {
  gap: 3rem !important;
}
#sleep-timer-menu .text-sm-start {
  text-align: left !important;
}
#sleep-timer-menu .text-sm-end {
  text-align: right !important;
}
#sleep-timer-menu .text-sm-center {
  text-align: center !important;
}
}
@media (min-width: 768px) {
#sleep-timer-menu .float-md-start {
  float: left !important;
}
#sleep-timer-menu .float-md-end {
  float: right !important;
}
#sleep-timer-menu .float-md-none {
  float: none !important;
}
#sleep-timer-menu .d-md-inline {
  display: inline !important;
}
#sleep-timer-menu .d-md-inline-block {
  display: inline-block !important;
}
#sleep-timer-menu .d-md-block {
  display: block !important;
}
#sleep-timer-menu .d-md-grid {
  display: grid !important;
}
#sleep-timer-menu .d-md-table {
  display: table !important;
}
#sleep-timer-menu .d-md-table-row {
  display: table-row !important;
}
#sleep-timer-menu .d-md-table-cell {
  display: table-cell !important;
}
#sleep-timer-menu .d-md-flex {
  display: flex !important;
}
#sleep-timer-menu .d-md-inline-flex {
  display: inline-flex !important;
}
#sleep-timer-menu .d-md-none {
  display: none !important;
}
#sleep-timer-menu .flex-md-fill {
  flex: 1 1 auto !important;
}
#sleep-timer-menu .flex-md-row {
  flex-direction: row !important;
}
#sleep-timer-menu .flex-md-column {
  flex-direction: column !important;
}
#sleep-timer-menu .flex-md-row-reverse {
  flex-direction: row-reverse !important;
}
#sleep-timer-menu .flex-md-column-reverse {
  flex-direction: column-reverse !important;
}
#sleep-timer-menu .flex-md-grow-0 {
  flex-grow: 0 !important;
}
#sleep-timer-menu .flex-md-grow-1 {
  flex-grow: 1 !important;
}
#sleep-timer-menu .flex-md-shrink-0 {
  flex-shrink: 0 !important;
}
#sleep-timer-menu .flex-md-shrink-1 {
  flex-shrink: 1 !important;
}
#sleep-timer-menu .flex-md-wrap {
  flex-wrap: wrap !important;
}
#sleep-timer-menu .flex-md-nowrap {
  flex-wrap: nowrap !important;
}
#sleep-timer-menu .flex-md-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
#sleep-timer-menu .justify-content-md-start {
  justify-content: flex-start !important;
}
#sleep-timer-menu .justify-content-md-end {
  justify-content: flex-end !important;
}
#sleep-timer-menu .justify-content-md-center {
  justify-content: center !important;
}
#sleep-timer-menu .justify-content-md-between {
  justify-content: space-between !important;
}
#sleep-timer-menu .justify-content-md-around {
  justify-content: space-around !important;
}
#sleep-timer-menu .justify-content-md-evenly {
  justify-content: space-evenly !important;
}
#sleep-timer-menu .align-items-md-start {
  align-items: flex-start !important;
}
#sleep-timer-menu .align-items-md-end {
  align-items: flex-end !important;
}
#sleep-timer-menu .align-items-md-center {
  align-items: center !important;
}
#sleep-timer-menu .align-items-md-baseline {
  align-items: baseline !important;
}
#sleep-timer-menu .align-items-md-stretch {
  align-items: stretch !important;
}
#sleep-timer-menu .align-content-md-start {
  align-content: flex-start !important;
}
#sleep-timer-menu .align-content-md-end {
  align-content: flex-end !important;
}
#sleep-timer-menu .align-content-md-center {
  align-content: center !important;
}
#sleep-timer-menu .align-content-md-between {
  align-content: space-between !important;
}
#sleep-timer-menu .align-content-md-around {
  align-content: space-around !important;
}
#sleep-timer-menu .align-content-md-stretch {
  align-content: stretch !important;
}
#sleep-timer-menu .align-self-md-auto {
  align-self: auto !important;
}
#sleep-timer-menu .align-self-md-start {
  align-self: flex-start !important;
}
#sleep-timer-menu .align-self-md-end {
  align-self: flex-end !important;
}
#sleep-timer-menu .align-self-md-center {
  align-self: center !important;
}
#sleep-timer-menu .align-self-md-baseline {
  align-self: baseline !important;
}
#sleep-timer-menu .align-self-md-stretch {
  align-self: stretch !important;
}
#sleep-timer-menu .order-md-first {
  order: -1 !important;
}
#sleep-timer-menu .order-md-0 {
  order: 0 !important;
}
#sleep-timer-menu .order-md-1 {
  order: 1 !important;
}
#sleep-timer-menu .order-md-2 {
  order: 2 !important;
}
#sleep-timer-menu .order-md-3 {
  order: 3 !important;
}
#sleep-timer-menu .order-md-4 {
  order: 4 !important;
}
#sleep-timer-menu .order-md-5 {
  order: 5 !important;
}
#sleep-timer-menu .order-md-last {
  order: 6 !important;
}
#sleep-timer-menu .m-md-0 {
  margin: 0 !important;
}
#sleep-timer-menu .m-md-1 {
  margin: 0.25rem !important;
}
#sleep-timer-menu .m-md-2 {
  margin: 0.5rem !important;
}
#sleep-timer-menu .m-md-3 {
  margin: 1rem !important;
}
#sleep-timer-menu .m-md-4 {
  margin: 1.5rem !important;
}
#sleep-timer-menu .m-md-5 {
  margin: 3rem !important;
}
#sleep-timer-menu .m-md-auto {
  margin: auto !important;
}
#sleep-timer-menu .mx-md-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
#sleep-timer-menu .mx-md-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}
#sleep-timer-menu .mx-md-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}
#sleep-timer-menu .mx-md-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}
#sleep-timer-menu .mx-md-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}
#sleep-timer-menu .mx-md-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}
#sleep-timer-menu .mx-md-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
#sleep-timer-menu .my-md-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
#sleep-timer-menu .my-md-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}
#sleep-timer-menu .my-md-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
#sleep-timer-menu .my-md-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
#sleep-timer-menu .my-md-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
#sleep-timer-menu .my-md-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}
#sleep-timer-menu .my-md-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}
#sleep-timer-menu .mt-md-0 {
  margin-top: 0 !important;
}
#sleep-timer-menu .mt-md-1 {
  margin-top: 0.25rem !important;
}
#sleep-timer-menu .mt-md-2 {
  margin-top: 0.5rem !important;
}
#sleep-timer-menu .mt-md-3 {
  margin-top: 1rem !important;
}
#sleep-timer-menu .mt-md-4 {
  margin-top: 1.5rem !important;
}
#sleep-timer-menu .mt-md-5 {
  margin-top: 3rem !important;
}
#sleep-timer-menu .mt-md-auto {
  margin-top: auto !important;
}
#sleep-timer-menu .me-md-0 {
  margin-right: 0 !important;
}
#sleep-timer-menu .me-md-1 {
  margin-right: 0.25rem !important;
}
#sleep-timer-menu .me-md-2 {
  margin-right: 0.5rem !important;
}
#sleep-timer-menu .me-md-3 {
  margin-right: 1rem !important;
}
#sleep-timer-menu .me-md-4 {
  margin-right: 1.5rem !important;
}
#sleep-timer-menu .me-md-5 {
  margin-right: 3rem !important;
}
#sleep-timer-menu .me-md-auto {
  margin-right: auto !important;
}
#sleep-timer-menu .mb-md-0 {
  margin-bottom: 0 !important;
}
#sleep-timer-menu .mb-md-1 {
  margin-bottom: 0.25rem !important;
}
#sleep-timer-menu .mb-md-2 {
  margin-bottom: 0.5rem !important;
}
#sleep-timer-menu .mb-md-3 {
  margin-bottom: 1rem !important;
}
#sleep-timer-menu .mb-md-4 {
  margin-bottom: 1.5rem !important;
}
#sleep-timer-menu .mb-md-5 {
  margin-bottom: 3rem !important;
}
#sleep-timer-menu .mb-md-auto {
  margin-bottom: auto !important;
}
#sleep-timer-menu .ms-md-0 {
  margin-left: 0 !important;
}
#sleep-timer-menu .ms-md-1 {
  margin-left: 0.25rem !important;
}
#sleep-timer-menu .ms-md-2 {
  margin-left: 0.5rem !important;
}
#sleep-timer-menu .ms-md-3 {
  margin-left: 1rem !important;
}
#sleep-timer-menu .ms-md-4 {
  margin-left: 1.5rem !important;
}
#sleep-timer-menu .ms-md-5 {
  margin-left: 3rem !important;
}
#sleep-timer-menu .ms-md-auto {
  margin-left: auto !important;
}
#sleep-timer-menu .p-md-0 {
  padding: 0 !important;
}
#sleep-timer-menu .p-md-1 {
  padding: 0.25rem !important;
}
#sleep-timer-menu .p-md-2 {
  padding: 0.5rem !important;
}
#sleep-timer-menu .p-md-3 {
  padding: 1rem !important;
}
#sleep-timer-menu .p-md-4 {
  padding: 1.5rem !important;
}
#sleep-timer-menu .p-md-5 {
  padding: 3rem !important;
}
#sleep-timer-menu .px-md-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
#sleep-timer-menu .px-md-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}
#sleep-timer-menu .px-md-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}
#sleep-timer-menu .px-md-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
#sleep-timer-menu .px-md-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
#sleep-timer-menu .px-md-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}
#sleep-timer-menu .py-md-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
#sleep-timer-menu .py-md-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}
#sleep-timer-menu .py-md-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
#sleep-timer-menu .py-md-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
#sleep-timer-menu .py-md-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
#sleep-timer-menu .py-md-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
#sleep-timer-menu .pt-md-0 {
  padding-top: 0 !important;
}
#sleep-timer-menu .pt-md-1 {
  padding-top: 0.25rem !important;
}
#sleep-timer-menu .pt-md-2 {
  padding-top: 0.5rem !important;
}
#sleep-timer-menu .pt-md-3 {
  padding-top: 1rem !important;
}
#sleep-timer-menu .pt-md-4 {
  padding-top: 1.5rem !important;
}
#sleep-timer-menu .pt-md-5 {
  padding-top: 3rem !important;
}
#sleep-timer-menu .pe-md-0 {
  padding-right: 0 !important;
}
#sleep-timer-menu .pe-md-1 {
  padding-right: 0.25rem !important;
}
#sleep-timer-menu .pe-md-2 {
  padding-right: 0.5rem !important;
}
#sleep-timer-menu .pe-md-3 {
  padding-right: 1rem !important;
}
#sleep-timer-menu .pe-md-4 {
  padding-right: 1.5rem !important;
}
#sleep-timer-menu .pe-md-5 {
  padding-right: 3rem !important;
}
#sleep-timer-menu .pb-md-0 {
  padding-bottom: 0 !important;
}
#sleep-timer-menu .pb-md-1 {
  padding-bottom: 0.25rem !important;
}
#sleep-timer-menu .pb-md-2 {
  padding-bottom: 0.5rem !important;
}
#sleep-timer-menu .pb-md-3 {
  padding-bottom: 1rem !important;
}
#sleep-timer-menu .pb-md-4 {
  padding-bottom: 1.5rem !important;
}
#sleep-timer-menu .pb-md-5 {
  padding-bottom: 3rem !important;
}
#sleep-timer-menu .ps-md-0 {
  padding-left: 0 !important;
}
#sleep-timer-menu .ps-md-1 {
  padding-left: 0.25rem !important;
}
#sleep-timer-menu .ps-md-2 {
  padding-left: 0.5rem !important;
}
#sleep-timer-menu .ps-md-3 {
  padding-left: 1rem !important;
}
#sleep-timer-menu .ps-md-4 {
  padding-left: 1.5rem !important;
}
#sleep-timer-menu .ps-md-5 {
  padding-left: 3rem !important;
}
#sleep-timer-menu .gap-md-0 {
  gap: 0 !important;
}
#sleep-timer-menu .gap-md-1 {
  gap: 0.25rem !important;
}
#sleep-timer-menu .gap-md-2 {
  gap: 0.5rem !important;
}
#sleep-timer-menu .gap-md-3 {
  gap: 1rem !important;
}
#sleep-timer-menu .gap-md-4 {
  gap: 1.5rem !important;
}
#sleep-timer-menu .gap-md-5 {
  gap: 3rem !important;
}
#sleep-timer-menu .text-md-start {
  text-align: left !important;
}
#sleep-timer-menu .text-md-end {
  text-align: right !important;
}
#sleep-timer-menu .text-md-center {
  text-align: center !important;
}
}
@media (min-width: 992px) {
#sleep-timer-menu .float-lg-start {
  float: left !important;
}
#sleep-timer-menu .float-lg-end {
  float: right !important;
}
#sleep-timer-menu .float-lg-none {
  float: none !important;
}
#sleep-timer-menu .d-lg-inline {
  display: inline !important;
}
#sleep-timer-menu .d-lg-inline-block {
  display: inline-block !important;
}
#sleep-timer-menu .d-lg-block {
  display: block !important;
}
#sleep-timer-menu .d-lg-grid {
  display: grid !important;
}
#sleep-timer-menu .d-lg-table {
  display: table !important;
}
#sleep-timer-menu .d-lg-table-row {
  display: table-row !important;
}
#sleep-timer-menu .d-lg-table-cell {
  display: table-cell !important;
}
#sleep-timer-menu .d-lg-flex {
  display: flex !important;
}
#sleep-timer-menu .d-lg-inline-flex {
  display: inline-flex !important;
}
#sleep-timer-menu .d-lg-none {
  display: none !important;
}
#sleep-timer-menu .flex-lg-fill {
  flex: 1 1 auto !important;
}
#sleep-timer-menu .flex-lg-row {
  flex-direction: row !important;
}
#sleep-timer-menu .flex-lg-column {
  flex-direction: column !important;
}
#sleep-timer-menu .flex-lg-row-reverse {
  flex-direction: row-reverse !important;
}
#sleep-timer-menu .flex-lg-column-reverse {
  flex-direction: column-reverse !important;
}
#sleep-timer-menu .flex-lg-grow-0 {
  flex-grow: 0 !important;
}
#sleep-timer-menu .flex-lg-grow-1 {
  flex-grow: 1 !important;
}
#sleep-timer-menu .flex-lg-shrink-0 {
  flex-shrink: 0 !important;
}
#sleep-timer-menu .flex-lg-shrink-1 {
  flex-shrink: 1 !important;
}
#sleep-timer-menu .flex-lg-wrap {
  flex-wrap: wrap !important;
}
#sleep-timer-menu .flex-lg-nowrap {
  flex-wrap: nowrap !important;
}
#sleep-timer-menu .flex-lg-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
#sleep-timer-menu .justify-content-lg-start {
  justify-content: flex-start !important;
}
#sleep-timer-menu .justify-content-lg-end {
  justify-content: flex-end !important;
}
#sleep-timer-menu .justify-content-lg-center {
  justify-content: center !important;
}
#sleep-timer-menu .justify-content-lg-between {
  justify-content: space-between !important;
}
#sleep-timer-menu .justify-content-lg-around {
  justify-content: space-around !important;
}
#sleep-timer-menu .justify-content-lg-evenly {
  justify-content: space-evenly !important;
}
#sleep-timer-menu .align-items-lg-start {
  align-items: flex-start !important;
}
#sleep-timer-menu .align-items-lg-end {
  align-items: flex-end !important;
}
#sleep-timer-menu .align-items-lg-center {
  align-items: center !important;
}
#sleep-timer-menu .align-items-lg-baseline {
  align-items: baseline !important;
}
#sleep-timer-menu .align-items-lg-stretch {
  align-items: stretch !important;
}
#sleep-timer-menu .align-content-lg-start {
  align-content: flex-start !important;
}
#sleep-timer-menu .align-content-lg-end {
  align-content: flex-end !important;
}
#sleep-timer-menu .align-content-lg-center {
  align-content: center !important;
}
#sleep-timer-menu .align-content-lg-between {
  align-content: space-between !important;
}
#sleep-timer-menu .align-content-lg-around {
  align-content: space-around !important;
}
#sleep-timer-menu .align-content-lg-stretch {
  align-content: stretch !important;
}
#sleep-timer-menu .align-self-lg-auto {
  align-self: auto !important;
}
#sleep-timer-menu .align-self-lg-start {
  align-self: flex-start !important;
}
#sleep-timer-menu .align-self-lg-end {
  align-self: flex-end !important;
}
#sleep-timer-menu .align-self-lg-center {
  align-self: center !important;
}
#sleep-timer-menu .align-self-lg-baseline {
  align-self: baseline !important;
}
#sleep-timer-menu .align-self-lg-stretch {
  align-self: stretch !important;
}
#sleep-timer-menu .order-lg-first {
  order: -1 !important;
}
#sleep-timer-menu .order-lg-0 {
  order: 0 !important;
}
#sleep-timer-menu .order-lg-1 {
  order: 1 !important;
}
#sleep-timer-menu .order-lg-2 {
  order: 2 !important;
}
#sleep-timer-menu .order-lg-3 {
  order: 3 !important;
}
#sleep-timer-menu .order-lg-4 {
  order: 4 !important;
}
#sleep-timer-menu .order-lg-5 {
  order: 5 !important;
}
#sleep-timer-menu .order-lg-last {
  order: 6 !important;
}
#sleep-timer-menu .m-lg-0 {
  margin: 0 !important;
}
#sleep-timer-menu .m-lg-1 {
  margin: 0.25rem !important;
}
#sleep-timer-menu .m-lg-2 {
  margin: 0.5rem !important;
}
#sleep-timer-menu .m-lg-3 {
  margin: 1rem !important;
}
#sleep-timer-menu .m-lg-4 {
  margin: 1.5rem !important;
}
#sleep-timer-menu .m-lg-5 {
  margin: 3rem !important;
}
#sleep-timer-menu .m-lg-auto {
  margin: auto !important;
}
#sleep-timer-menu .mx-lg-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
#sleep-timer-menu .mx-lg-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}
#sleep-timer-menu .mx-lg-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}
#sleep-timer-menu .mx-lg-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}
#sleep-timer-menu .mx-lg-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}
#sleep-timer-menu .mx-lg-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}
#sleep-timer-menu .mx-lg-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
#sleep-timer-menu .my-lg-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
#sleep-timer-menu .my-lg-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}
#sleep-timer-menu .my-lg-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
#sleep-timer-menu .my-lg-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
#sleep-timer-menu .my-lg-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
#sleep-timer-menu .my-lg-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}
#sleep-timer-menu .my-lg-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}
#sleep-timer-menu .mt-lg-0 {
  margin-top: 0 !important;
}
#sleep-timer-menu .mt-lg-1 {
  margin-top: 0.25rem !important;
}
#sleep-timer-menu .mt-lg-2 {
  margin-top: 0.5rem !important;
}
#sleep-timer-menu .mt-lg-3 {
  margin-top: 1rem !important;
}
#sleep-timer-menu .mt-lg-4 {
  margin-top: 1.5rem !important;
}
#sleep-timer-menu .mt-lg-5 {
  margin-top: 3rem !important;
}
#sleep-timer-menu .mt-lg-auto {
  margin-top: auto !important;
}
#sleep-timer-menu .me-lg-0 {
  margin-right: 0 !important;
}
#sleep-timer-menu .me-lg-1 {
  margin-right: 0.25rem !important;
}
#sleep-timer-menu .me-lg-2 {
  margin-right: 0.5rem !important;
}
#sleep-timer-menu .me-lg-3 {
  margin-right: 1rem !important;
}
#sleep-timer-menu .me-lg-4 {
  margin-right: 1.5rem !important;
}
#sleep-timer-menu .me-lg-5 {
  margin-right: 3rem !important;
}
#sleep-timer-menu .me-lg-auto {
  margin-right: auto !important;
}
#sleep-timer-menu .mb-lg-0 {
  margin-bottom: 0 !important;
}
#sleep-timer-menu .mb-lg-1 {
  margin-bottom: 0.25rem !important;
}
#sleep-timer-menu .mb-lg-2 {
  margin-bottom: 0.5rem !important;
}
#sleep-timer-menu .mb-lg-3 {
  margin-bottom: 1rem !important;
}
#sleep-timer-menu .mb-lg-4 {
  margin-bottom: 1.5rem !important;
}
#sleep-timer-menu .mb-lg-5 {
  margin-bottom: 3rem !important;
}
#sleep-timer-menu .mb-lg-auto {
  margin-bottom: auto !important;
}
#sleep-timer-menu .ms-lg-0 {
  margin-left: 0 !important;
}
#sleep-timer-menu .ms-lg-1 {
  margin-left: 0.25rem !important;
}
#sleep-timer-menu .ms-lg-2 {
  margin-left: 0.5rem !important;
}
#sleep-timer-menu .ms-lg-3 {
  margin-left: 1rem !important;
}
#sleep-timer-menu .ms-lg-4 {
  margin-left: 1.5rem !important;
}
#sleep-timer-menu .ms-lg-5 {
  margin-left: 3rem !important;
}
#sleep-timer-menu .ms-lg-auto {
  margin-left: auto !important;
}
#sleep-timer-menu .p-lg-0 {
  padding: 0 !important;
}
#sleep-timer-menu .p-lg-1 {
  padding: 0.25rem !important;
}
#sleep-timer-menu .p-lg-2 {
  padding: 0.5rem !important;
}
#sleep-timer-menu .p-lg-3 {
  padding: 1rem !important;
}
#sleep-timer-menu .p-lg-4 {
  padding: 1.5rem !important;
}
#sleep-timer-menu .p-lg-5 {
  padding: 3rem !important;
}
#sleep-timer-menu .px-lg-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
#sleep-timer-menu .px-lg-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}
#sleep-timer-menu .px-lg-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}
#sleep-timer-menu .px-lg-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
#sleep-timer-menu .px-lg-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
#sleep-timer-menu .px-lg-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}
#sleep-timer-menu .py-lg-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
#sleep-timer-menu .py-lg-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}
#sleep-timer-menu .py-lg-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
#sleep-timer-menu .py-lg-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
#sleep-timer-menu .py-lg-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
#sleep-timer-menu .py-lg-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
#sleep-timer-menu .pt-lg-0 {
  padding-top: 0 !important;
}
#sleep-timer-menu .pt-lg-1 {
  padding-top: 0.25rem !important;
}
#sleep-timer-menu .pt-lg-2 {
  padding-top: 0.5rem !important;
}
#sleep-timer-menu .pt-lg-3 {
  padding-top: 1rem !important;
}
#sleep-timer-menu .pt-lg-4 {
  padding-top: 1.5rem !important;
}
#sleep-timer-menu .pt-lg-5 {
  padding-top: 3rem !important;
}
#sleep-timer-menu .pe-lg-0 {
  padding-right: 0 !important;
}
#sleep-timer-menu .pe-lg-1 {
  padding-right: 0.25rem !important;
}
#sleep-timer-menu .pe-lg-2 {
  padding-right: 0.5rem !important;
}
#sleep-timer-menu .pe-lg-3 {
  padding-right: 1rem !important;
}
#sleep-timer-menu .pe-lg-4 {
  padding-right: 1.5rem !important;
}
#sleep-timer-menu .pe-lg-5 {
  padding-right: 3rem !important;
}
#sleep-timer-menu .pb-lg-0 {
  padding-bottom: 0 !important;
}
#sleep-timer-menu .pb-lg-1 {
  padding-bottom: 0.25rem !important;
}
#sleep-timer-menu .pb-lg-2 {
  padding-bottom: 0.5rem !important;
}
#sleep-timer-menu .pb-lg-3 {
  padding-bottom: 1rem !important;
}
#sleep-timer-menu .pb-lg-4 {
  padding-bottom: 1.5rem !important;
}
#sleep-timer-menu .pb-lg-5 {
  padding-bottom: 3rem !important;
}
#sleep-timer-menu .ps-lg-0 {
  padding-left: 0 !important;
}
#sleep-timer-menu .ps-lg-1 {
  padding-left: 0.25rem !important;
}
#sleep-timer-menu .ps-lg-2 {
  padding-left: 0.5rem !important;
}
#sleep-timer-menu .ps-lg-3 {
  padding-left: 1rem !important;
}
#sleep-timer-menu .ps-lg-4 {
  padding-left: 1.5rem !important;
}
#sleep-timer-menu .ps-lg-5 {
  padding-left: 3rem !important;
}
#sleep-timer-menu .gap-lg-0 {
  gap: 0 !important;
}
#sleep-timer-menu .gap-lg-1 {
  gap: 0.25rem !important;
}
#sleep-timer-menu .gap-lg-2 {
  gap: 0.5rem !important;
}
#sleep-timer-menu .gap-lg-3 {
  gap: 1rem !important;
}
#sleep-timer-menu .gap-lg-4 {
  gap: 1.5rem !important;
}
#sleep-timer-menu .gap-lg-5 {
  gap: 3rem !important;
}
#sleep-timer-menu .text-lg-start {
  text-align: left !important;
}
#sleep-timer-menu .text-lg-end {
  text-align: right !important;
}
#sleep-timer-menu .text-lg-center {
  text-align: center !important;
}
}
@media (min-width: 1200px) {
#sleep-timer-menu .float-xl-start {
  float: left !important;
}
#sleep-timer-menu .float-xl-end {
  float: right !important;
}
#sleep-timer-menu .float-xl-none {
  float: none !important;
}
#sleep-timer-menu .d-xl-inline {
  display: inline !important;
}
#sleep-timer-menu .d-xl-inline-block {
  display: inline-block !important;
}
#sleep-timer-menu .d-xl-block {
  display: block !important;
}
#sleep-timer-menu .d-xl-grid {
  display: grid !important;
}
#sleep-timer-menu .d-xl-table {
  display: table !important;
}
#sleep-timer-menu .d-xl-table-row {
  display: table-row !important;
}
#sleep-timer-menu .d-xl-table-cell {
  display: table-cell !important;
}
#sleep-timer-menu .d-xl-flex {
  display: flex !important;
}
#sleep-timer-menu .d-xl-inline-flex {
  display: inline-flex !important;
}
#sleep-timer-menu .d-xl-none {
  display: none !important;
}
#sleep-timer-menu .flex-xl-fill {
  flex: 1 1 auto !important;
}
#sleep-timer-menu .flex-xl-row {
  flex-direction: row !important;
}
#sleep-timer-menu .flex-xl-column {
  flex-direction: column !important;
}
#sleep-timer-menu .flex-xl-row-reverse {
  flex-direction: row-reverse !important;
}
#sleep-timer-menu .flex-xl-column-reverse {
  flex-direction: column-reverse !important;
}
#sleep-timer-menu .flex-xl-grow-0 {
  flex-grow: 0 !important;
}
#sleep-timer-menu .flex-xl-grow-1 {
  flex-grow: 1 !important;
}
#sleep-timer-menu .flex-xl-shrink-0 {
  flex-shrink: 0 !important;
}
#sleep-timer-menu .flex-xl-shrink-1 {
  flex-shrink: 1 !important;
}
#sleep-timer-menu .flex-xl-wrap {
  flex-wrap: wrap !important;
}
#sleep-timer-menu .flex-xl-nowrap {
  flex-wrap: nowrap !important;
}
#sleep-timer-menu .flex-xl-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
#sleep-timer-menu .justify-content-xl-start {
  justify-content: flex-start !important;
}
#sleep-timer-menu .justify-content-xl-end {
  justify-content: flex-end !important;
}
#sleep-timer-menu .justify-content-xl-center {
  justify-content: center !important;
}
#sleep-timer-menu .justify-content-xl-between {
  justify-content: space-between !important;
}
#sleep-timer-menu .justify-content-xl-around {
  justify-content: space-around !important;
}
#sleep-timer-menu .justify-content-xl-evenly {
  justify-content: space-evenly !important;
}
#sleep-timer-menu .align-items-xl-start {
  align-items: flex-start !important;
}
#sleep-timer-menu .align-items-xl-end {
  align-items: flex-end !important;
}
#sleep-timer-menu .align-items-xl-center {
  align-items: center !important;
}
#sleep-timer-menu .align-items-xl-baseline {
  align-items: baseline !important;
}
#sleep-timer-menu .align-items-xl-stretch {
  align-items: stretch !important;
}
#sleep-timer-menu .align-content-xl-start {
  align-content: flex-start !important;
}
#sleep-timer-menu .align-content-xl-end {
  align-content: flex-end !important;
}
#sleep-timer-menu .align-content-xl-center {
  align-content: center !important;
}
#sleep-timer-menu .align-content-xl-between {
  align-content: space-between !important;
}
#sleep-timer-menu .align-content-xl-around {
  align-content: space-around !important;
}
#sleep-timer-menu .align-content-xl-stretch {
  align-content: stretch !important;
}
#sleep-timer-menu .align-self-xl-auto {
  align-self: auto !important;
}
#sleep-timer-menu .align-self-xl-start {
  align-self: flex-start !important;
}
#sleep-timer-menu .align-self-xl-end {
  align-self: flex-end !important;
}
#sleep-timer-menu .align-self-xl-center {
  align-self: center !important;
}
#sleep-timer-menu .align-self-xl-baseline {
  align-self: baseline !important;
}
#sleep-timer-menu .align-self-xl-stretch {
  align-self: stretch !important;
}
#sleep-timer-menu .order-xl-first {
  order: -1 !important;
}
#sleep-timer-menu .order-xl-0 {
  order: 0 !important;
}
#sleep-timer-menu .order-xl-1 {
  order: 1 !important;
}
#sleep-timer-menu .order-xl-2 {
  order: 2 !important;
}
#sleep-timer-menu .order-xl-3 {
  order: 3 !important;
}
#sleep-timer-menu .order-xl-4 {
  order: 4 !important;
}
#sleep-timer-menu .order-xl-5 {
  order: 5 !important;
}
#sleep-timer-menu .order-xl-last {
  order: 6 !important;
}
#sleep-timer-menu .m-xl-0 {
  margin: 0 !important;
}
#sleep-timer-menu .m-xl-1 {
  margin: 0.25rem !important;
}
#sleep-timer-menu .m-xl-2 {
  margin: 0.5rem !important;
}
#sleep-timer-menu .m-xl-3 {
  margin: 1rem !important;
}
#sleep-timer-menu .m-xl-4 {
  margin: 1.5rem !important;
}
#sleep-timer-menu .m-xl-5 {
  margin: 3rem !important;
}
#sleep-timer-menu .m-xl-auto {
  margin: auto !important;
}
#sleep-timer-menu .mx-xl-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
#sleep-timer-menu .mx-xl-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}
#sleep-timer-menu .mx-xl-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}
#sleep-timer-menu .mx-xl-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}
#sleep-timer-menu .mx-xl-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}
#sleep-timer-menu .mx-xl-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}
#sleep-timer-menu .mx-xl-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
#sleep-timer-menu .my-xl-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
#sleep-timer-menu .my-xl-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}
#sleep-timer-menu .my-xl-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
#sleep-timer-menu .my-xl-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
#sleep-timer-menu .my-xl-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
#sleep-timer-menu .my-xl-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}
#sleep-timer-menu .my-xl-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}
#sleep-timer-menu .mt-xl-0 {
  margin-top: 0 !important;
}
#sleep-timer-menu .mt-xl-1 {
  margin-top: 0.25rem !important;
}
#sleep-timer-menu .mt-xl-2 {
  margin-top: 0.5rem !important;
}
#sleep-timer-menu .mt-xl-3 {
  margin-top: 1rem !important;
}
#sleep-timer-menu .mt-xl-4 {
  margin-top: 1.5rem !important;
}
#sleep-timer-menu .mt-xl-5 {
  margin-top: 3rem !important;
}
#sleep-timer-menu .mt-xl-auto {
  margin-top: auto !important;
}
#sleep-timer-menu .me-xl-0 {
  margin-right: 0 !important;
}
#sleep-timer-menu .me-xl-1 {
  margin-right: 0.25rem !important;
}
#sleep-timer-menu .me-xl-2 {
  margin-right: 0.5rem !important;
}
#sleep-timer-menu .me-xl-3 {
  margin-right: 1rem !important;
}
#sleep-timer-menu .me-xl-4 {
  margin-right: 1.5rem !important;
}
#sleep-timer-menu .me-xl-5 {
  margin-right: 3rem !important;
}
#sleep-timer-menu .me-xl-auto {
  margin-right: auto !important;
}
#sleep-timer-menu .mb-xl-0 {
  margin-bottom: 0 !important;
}
#sleep-timer-menu .mb-xl-1 {
  margin-bottom: 0.25rem !important;
}
#sleep-timer-menu .mb-xl-2 {
  margin-bottom: 0.5rem !important;
}
#sleep-timer-menu .mb-xl-3 {
  margin-bottom: 1rem !important;
}
#sleep-timer-menu .mb-xl-4 {
  margin-bottom: 1.5rem !important;
}
#sleep-timer-menu .mb-xl-5 {
  margin-bottom: 3rem !important;
}
#sleep-timer-menu .mb-xl-auto {
  margin-bottom: auto !important;
}
#sleep-timer-menu .ms-xl-0 {
  margin-left: 0 !important;
}
#sleep-timer-menu .ms-xl-1 {
  margin-left: 0.25rem !important;
}
#sleep-timer-menu .ms-xl-2 {
  margin-left: 0.5rem !important;
}
#sleep-timer-menu .ms-xl-3 {
  margin-left: 1rem !important;
}
#sleep-timer-menu .ms-xl-4 {
  margin-left: 1.5rem !important;
}
#sleep-timer-menu .ms-xl-5 {
  margin-left: 3rem !important;
}
#sleep-timer-menu .ms-xl-auto {
  margin-left: auto !important;
}
#sleep-timer-menu .p-xl-0 {
  padding: 0 !important;
}
#sleep-timer-menu .p-xl-1 {
  padding: 0.25rem !important;
}
#sleep-timer-menu .p-xl-2 {
  padding: 0.5rem !important;
}
#sleep-timer-menu .p-xl-3 {
  padding: 1rem !important;
}
#sleep-timer-menu .p-xl-4 {
  padding: 1.5rem !important;
}
#sleep-timer-menu .p-xl-5 {
  padding: 3rem !important;
}
#sleep-timer-menu .px-xl-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
#sleep-timer-menu .px-xl-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}
#sleep-timer-menu .px-xl-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}
#sleep-timer-menu .px-xl-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
#sleep-timer-menu .px-xl-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
#sleep-timer-menu .px-xl-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}
#sleep-timer-menu .py-xl-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
#sleep-timer-menu .py-xl-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}
#sleep-timer-menu .py-xl-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
#sleep-timer-menu .py-xl-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
#sleep-timer-menu .py-xl-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
#sleep-timer-menu .py-xl-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
#sleep-timer-menu .pt-xl-0 {
  padding-top: 0 !important;
}
#sleep-timer-menu .pt-xl-1 {
  padding-top: 0.25rem !important;
}
#sleep-timer-menu .pt-xl-2 {
  padding-top: 0.5rem !important;
}
#sleep-timer-menu .pt-xl-3 {
  padding-top: 1rem !important;
}
#sleep-timer-menu .pt-xl-4 {
  padding-top: 1.5rem !important;
}
#sleep-timer-menu .pt-xl-5 {
  padding-top: 3rem !important;
}
#sleep-timer-menu .pe-xl-0 {
  padding-right: 0 !important;
}
#sleep-timer-menu .pe-xl-1 {
  padding-right: 0.25rem !important;
}
#sleep-timer-menu .pe-xl-2 {
  padding-right: 0.5rem !important;
}
#sleep-timer-menu .pe-xl-3 {
  padding-right: 1rem !important;
}
#sleep-timer-menu .pe-xl-4 {
  padding-right: 1.5rem !important;
}
#sleep-timer-menu .pe-xl-5 {
  padding-right: 3rem !important;
}
#sleep-timer-menu .pb-xl-0 {
  padding-bottom: 0 !important;
}
#sleep-timer-menu .pb-xl-1 {
  padding-bottom: 0.25rem !important;
}
#sleep-timer-menu .pb-xl-2 {
  padding-bottom: 0.5rem !important;
}
#sleep-timer-menu .pb-xl-3 {
  padding-bottom: 1rem !important;
}
#sleep-timer-menu .pb-xl-4 {
  padding-bottom: 1.5rem !important;
}
#sleep-timer-menu .pb-xl-5 {
  padding-bottom: 3rem !important;
}
#sleep-timer-menu .ps-xl-0 {
  padding-left: 0 !important;
}
#sleep-timer-menu .ps-xl-1 {
  padding-left: 0.25rem !important;
}
#sleep-timer-menu .ps-xl-2 {
  padding-left: 0.5rem !important;
}
#sleep-timer-menu .ps-xl-3 {
  padding-left: 1rem !important;
}
#sleep-timer-menu .ps-xl-4 {
  padding-left: 1.5rem !important;
}
#sleep-timer-menu .ps-xl-5 {
  padding-left: 3rem !important;
}
#sleep-timer-menu .gap-xl-0 {
  gap: 0 !important;
}
#sleep-timer-menu .gap-xl-1 {
  gap: 0.25rem !important;
}
#sleep-timer-menu .gap-xl-2 {
  gap: 0.5rem !important;
}
#sleep-timer-menu .gap-xl-3 {
  gap: 1rem !important;
}
#sleep-timer-menu .gap-xl-4 {
  gap: 1.5rem !important;
}
#sleep-timer-menu .gap-xl-5 {
  gap: 3rem !important;
}
#sleep-timer-menu .text-xl-start {
  text-align: left !important;
}
#sleep-timer-menu .text-xl-end {
  text-align: right !important;
}
#sleep-timer-menu .text-xl-center {
  text-align: center !important;
}
}
@media (min-width: 1400px) {
#sleep-timer-menu .float-xxl-start {
  float: left !important;
}
#sleep-timer-menu .float-xxl-end {
  float: right !important;
}
#sleep-timer-menu .float-xxl-none {
  float: none !important;
}
#sleep-timer-menu .d-xxl-inline {
  display: inline !important;
}
#sleep-timer-menu .d-xxl-inline-block {
  display: inline-block !important;
}
#sleep-timer-menu .d-xxl-block {
  display: block !important;
}
#sleep-timer-menu .d-xxl-grid {
  display: grid !important;
}
#sleep-timer-menu .d-xxl-table {
  display: table !important;
}
#sleep-timer-menu .d-xxl-table-row {
  display: table-row !important;
}
#sleep-timer-menu .d-xxl-table-cell {
  display: table-cell !important;
}
#sleep-timer-menu .d-xxl-flex {
  display: flex !important;
}
#sleep-timer-menu .d-xxl-inline-flex {
  display: inline-flex !important;
}
#sleep-timer-menu .d-xxl-none {
  display: none !important;
}
#sleep-timer-menu .flex-xxl-fill {
  flex: 1 1 auto !important;
}
#sleep-timer-menu .flex-xxl-row {
  flex-direction: row !important;
}
#sleep-timer-menu .flex-xxl-column {
  flex-direction: column !important;
}
#sleep-timer-menu .flex-xxl-row-reverse {
  flex-direction: row-reverse !important;
}
#sleep-timer-menu .flex-xxl-column-reverse {
  flex-direction: column-reverse !important;
}
#sleep-timer-menu .flex-xxl-grow-0 {
  flex-grow: 0 !important;
}
#sleep-timer-menu .flex-xxl-grow-1 {
  flex-grow: 1 !important;
}
#sleep-timer-menu .flex-xxl-shrink-0 {
  flex-shrink: 0 !important;
}
#sleep-timer-menu .flex-xxl-shrink-1 {
  flex-shrink: 1 !important;
}
#sleep-timer-menu .flex-xxl-wrap {
  flex-wrap: wrap !important;
}
#sleep-timer-menu .flex-xxl-nowrap {
  flex-wrap: nowrap !important;
}
#sleep-timer-menu .flex-xxl-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
#sleep-timer-menu .justify-content-xxl-start {
  justify-content: flex-start !important;
}
#sleep-timer-menu .justify-content-xxl-end {
  justify-content: flex-end !important;
}
#sleep-timer-menu .justify-content-xxl-center {
  justify-content: center !important;
}
#sleep-timer-menu .justify-content-xxl-between {
  justify-content: space-between !important;
}
#sleep-timer-menu .justify-content-xxl-around {
  justify-content: space-around !important;
}
#sleep-timer-menu .justify-content-xxl-evenly {
  justify-content: space-evenly !important;
}
#sleep-timer-menu .align-items-xxl-start {
  align-items: flex-start !important;
}
#sleep-timer-menu .align-items-xxl-end {
  align-items: flex-end !important;
}
#sleep-timer-menu .align-items-xxl-center {
  align-items: center !important;
}
#sleep-timer-menu .align-items-xxl-baseline {
  align-items: baseline !important;
}
#sleep-timer-menu .align-items-xxl-stretch {
  align-items: stretch !important;
}
#sleep-timer-menu .align-content-xxl-start {
  align-content: flex-start !important;
}
#sleep-timer-menu .align-content-xxl-end {
  align-content: flex-end !important;
}
#sleep-timer-menu .align-content-xxl-center {
  align-content: center !important;
}
#sleep-timer-menu .align-content-xxl-between {
  align-content: space-between !important;
}
#sleep-timer-menu .align-content-xxl-around {
  align-content: space-around !important;
}
#sleep-timer-menu .align-content-xxl-stretch {
  align-content: stretch !important;
}
#sleep-timer-menu .align-self-xxl-auto {
  align-self: auto !important;
}
#sleep-timer-menu .align-self-xxl-start {
  align-self: flex-start !important;
}
#sleep-timer-menu .align-self-xxl-end {
  align-self: flex-end !important;
}
#sleep-timer-menu .align-self-xxl-center {
  align-self: center !important;
}
#sleep-timer-menu .align-self-xxl-baseline {
  align-self: baseline !important;
}
#sleep-timer-menu .align-self-xxl-stretch {
  align-self: stretch !important;
}
#sleep-timer-menu .order-xxl-first {
  order: -1 !important;
}
#sleep-timer-menu .order-xxl-0 {
  order: 0 !important;
}
#sleep-timer-menu .order-xxl-1 {
  order: 1 !important;
}
#sleep-timer-menu .order-xxl-2 {
  order: 2 !important;
}
#sleep-timer-menu .order-xxl-3 {
  order: 3 !important;
}
#sleep-timer-menu .order-xxl-4 {
  order: 4 !important;
}
#sleep-timer-menu .order-xxl-5 {
  order: 5 !important;
}
#sleep-timer-menu .order-xxl-last {
  order: 6 !important;
}
#sleep-timer-menu .m-xxl-0 {
  margin: 0 !important;
}
#sleep-timer-menu .m-xxl-1 {
  margin: 0.25rem !important;
}
#sleep-timer-menu .m-xxl-2 {
  margin: 0.5rem !important;
}
#sleep-timer-menu .m-xxl-3 {
  margin: 1rem !important;
}
#sleep-timer-menu .m-xxl-4 {
  margin: 1.5rem !important;
}
#sleep-timer-menu .m-xxl-5 {
  margin: 3rem !important;
}
#sleep-timer-menu .m-xxl-auto {
  margin: auto !important;
}
#sleep-timer-menu .mx-xxl-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
#sleep-timer-menu .mx-xxl-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}
#sleep-timer-menu .mx-xxl-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}
#sleep-timer-menu .mx-xxl-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}
#sleep-timer-menu .mx-xxl-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}
#sleep-timer-menu .mx-xxl-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}
#sleep-timer-menu .mx-xxl-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
#sleep-timer-menu .my-xxl-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
#sleep-timer-menu .my-xxl-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}
#sleep-timer-menu .my-xxl-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
#sleep-timer-menu .my-xxl-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
#sleep-timer-menu .my-xxl-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
#sleep-timer-menu .my-xxl-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}
#sleep-timer-menu .my-xxl-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}
#sleep-timer-menu .mt-xxl-0 {
  margin-top: 0 !important;
}
#sleep-timer-menu .mt-xxl-1 {
  margin-top: 0.25rem !important;
}
#sleep-timer-menu .mt-xxl-2 {
  margin-top: 0.5rem !important;
}
#sleep-timer-menu .mt-xxl-3 {
  margin-top: 1rem !important;
}
#sleep-timer-menu .mt-xxl-4 {
  margin-top: 1.5rem !important;
}
#sleep-timer-menu .mt-xxl-5 {
  margin-top: 3rem !important;
}
#sleep-timer-menu .mt-xxl-auto {
  margin-top: auto !important;
}
#sleep-timer-menu .me-xxl-0 {
  margin-right: 0 !important;
}
#sleep-timer-menu .me-xxl-1 {
  margin-right: 0.25rem !important;
}
#sleep-timer-menu .me-xxl-2 {
  margin-right: 0.5rem !important;
}
#sleep-timer-menu .me-xxl-3 {
  margin-right: 1rem !important;
}
#sleep-timer-menu .me-xxl-4 {
  margin-right: 1.5rem !important;
}
#sleep-timer-menu .me-xxl-5 {
  margin-right: 3rem !important;
}
#sleep-timer-menu .me-xxl-auto {
  margin-right: auto !important;
}
#sleep-timer-menu .mb-xxl-0 {
  margin-bottom: 0 !important;
}
#sleep-timer-menu .mb-xxl-1 {
  margin-bottom: 0.25rem !important;
}
#sleep-timer-menu .mb-xxl-2 {
  margin-bottom: 0.5rem !important;
}
#sleep-timer-menu .mb-xxl-3 {
  margin-bottom: 1rem !important;
}
#sleep-timer-menu .mb-xxl-4 {
  margin-bottom: 1.5rem !important;
}
#sleep-timer-menu .mb-xxl-5 {
  margin-bottom: 3rem !important;
}
#sleep-timer-menu .mb-xxl-auto {
  margin-bottom: auto !important;
}
#sleep-timer-menu .ms-xxl-0 {
  margin-left: 0 !important;
}
#sleep-timer-menu .ms-xxl-1 {
  margin-left: 0.25rem !important;
}
#sleep-timer-menu .ms-xxl-2 {
  margin-left: 0.5rem !important;
}
#sleep-timer-menu .ms-xxl-3 {
  margin-left: 1rem !important;
}
#sleep-timer-menu .ms-xxl-4 {
  margin-left: 1.5rem !important;
}
#sleep-timer-menu .ms-xxl-5 {
  margin-left: 3rem !important;
}
#sleep-timer-menu .ms-xxl-auto {
  margin-left: auto !important;
}
#sleep-timer-menu .p-xxl-0 {
  padding: 0 !important;
}
#sleep-timer-menu .p-xxl-1 {
  padding: 0.25rem !important;
}
#sleep-timer-menu .p-xxl-2 {
  padding: 0.5rem !important;
}
#sleep-timer-menu .p-xxl-3 {
  padding: 1rem !important;
}
#sleep-timer-menu .p-xxl-4 {
  padding: 1.5rem !important;
}
#sleep-timer-menu .p-xxl-5 {
  padding: 3rem !important;
}
#sleep-timer-menu .px-xxl-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
#sleep-timer-menu .px-xxl-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}
#sleep-timer-menu .px-xxl-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}
#sleep-timer-menu .px-xxl-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
#sleep-timer-menu .px-xxl-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
#sleep-timer-menu .px-xxl-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}
#sleep-timer-menu .py-xxl-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
#sleep-timer-menu .py-xxl-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}
#sleep-timer-menu .py-xxl-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
#sleep-timer-menu .py-xxl-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
#sleep-timer-menu .py-xxl-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
#sleep-timer-menu .py-xxl-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
#sleep-timer-menu .pt-xxl-0 {
  padding-top: 0 !important;
}
#sleep-timer-menu .pt-xxl-1 {
  padding-top: 0.25rem !important;
}
#sleep-timer-menu .pt-xxl-2 {
  padding-top: 0.5rem !important;
}
#sleep-timer-menu .pt-xxl-3 {
  padding-top: 1rem !important;
}
#sleep-timer-menu .pt-xxl-4 {
  padding-top: 1.5rem !important;
}
#sleep-timer-menu .pt-xxl-5 {
  padding-top: 3rem !important;
}
#sleep-timer-menu .pe-xxl-0 {
  padding-right: 0 !important;
}
#sleep-timer-menu .pe-xxl-1 {
  padding-right: 0.25rem !important;
}
#sleep-timer-menu .pe-xxl-2 {
  padding-right: 0.5rem !important;
}
#sleep-timer-menu .pe-xxl-3 {
  padding-right: 1rem !important;
}
#sleep-timer-menu .pe-xxl-4 {
  padding-right: 1.5rem !important;
}
#sleep-timer-menu .pe-xxl-5 {
  padding-right: 3rem !important;
}
#sleep-timer-menu .pb-xxl-0 {
  padding-bottom: 0 !important;
}
#sleep-timer-menu .pb-xxl-1 {
  padding-bottom: 0.25rem !important;
}
#sleep-timer-menu .pb-xxl-2 {
  padding-bottom: 0.5rem !important;
}
#sleep-timer-menu .pb-xxl-3 {
  padding-bottom: 1rem !important;
}
#sleep-timer-menu .pb-xxl-4 {
  padding-bottom: 1.5rem !important;
}
#sleep-timer-menu .pb-xxl-5 {
  padding-bottom: 3rem !important;
}
#sleep-timer-menu .ps-xxl-0 {
  padding-left: 0 !important;
}
#sleep-timer-menu .ps-xxl-1 {
  padding-left: 0.25rem !important;
}
#sleep-timer-menu .ps-xxl-2 {
  padding-left: 0.5rem !important;
}
#sleep-timer-menu .ps-xxl-3 {
  padding-left: 1rem !important;
}
#sleep-timer-menu .ps-xxl-4 {
  padding-left: 1.5rem !important;
}
#sleep-timer-menu .ps-xxl-5 {
  padding-left: 3rem !important;
}
#sleep-timer-menu .gap-xxl-0 {
  gap: 0 !important;
}
#sleep-timer-menu .gap-xxl-1 {
  gap: 0.25rem !important;
}
#sleep-timer-menu .gap-xxl-2 {
  gap: 0.5rem !important;
}
#sleep-timer-menu .gap-xxl-3 {
  gap: 1rem !important;
}
#sleep-timer-menu .gap-xxl-4 {
  gap: 1.5rem !important;
}
#sleep-timer-menu .gap-xxl-5 {
  gap: 3rem !important;
}
#sleep-timer-menu .text-xxl-start {
  text-align: left !important;
}
#sleep-timer-menu .text-xxl-end {
  text-align: right !important;
}
#sleep-timer-menu .text-xxl-center {
  text-align: center !important;
}
}
@media (min-width: 1200px) {
#sleep-timer-menu .fs-1 {
  font-size: 2.5rem !important;
}
#sleep-timer-menu .fs-2 {
  font-size: 2rem !important;
}
#sleep-timer-menu .fs-3 {
  font-size: 1.75rem !important;
}
#sleep-timer-menu .fs-4 {
  font-size: 1.5rem !important;
}
}
@media print {
#sleep-timer-menu .d-print-inline {
  display: inline !important;
}
#sleep-timer-menu .d-print-inline-block {
  display: inline-block !important;
}
#sleep-timer-menu .d-print-block {
  display: block !important;
}
#sleep-timer-menu .d-print-grid {
  display: grid !important;
}
#sleep-timer-menu .d-print-table {
  display: table !important;
}
#sleep-timer-menu .d-print-table-row {
  display: table-row !important;
}
#sleep-timer-menu .d-print-table-cell {
  display: table-cell !important;
}
#sleep-timer-menu .d-print-flex {
  display: flex !important;
}
#sleep-timer-menu .d-print-inline-flex {
  display: inline-flex !important;
}
#sleep-timer-menu .d-print-none {
  display: none !important;
}
}
#sleep-timer-menu .navbar {
border-style: solid;
border-width: 1px;
}
#sleep-timer-menu .navbar-fixed-top {
border-width: 0 0 1px;
}
#sleep-timer-menu .navbar-fixed-bottom {
border-style: solid;
border-top-width: 1px 0 0 0;
}
#sleep-timer-menu .navbar.bg-primary {
background-color: #1ed760 !important;
border-color: #bd1e0d !important;
}
#sleep-timer-menu .navbar.bg-dark {
border-color: #303234 !important;
}
#sleep-timer-menu .navbar.bg-light {
border-color: #dedede;
}
#sleep-timer-menu .btn-primary,
#sleep-timer-menu .btn-primary:hover {
background: var(--spice-notification-error, #d9230f);
filter: none;
border: 1px solid var(--spice-notification-error, #d9230f);
}
#sleep-timer-menu .btn-secondary,
#sleep-timer-menu .btn-secondary:hover {
background-image: linear-gradient(white, #fff 6%, #f0f0f0);
filter: none;
border: 1px solid #dedede;
}
#sleep-timer-menu .btn-secondary:focus,
#sleep-timer-menu .btn-secondary:not([disabled]):not(.disabled):active,
#sleep-timer-menu .btn-secondary:not([disabled]):not(.disabled).active {
box-shadow: 0 0 0 0.2rem rgba(221, 221, 221, 0.5);
}
#sleep-timer-menu .btn-success,
#sleep-timer-menu .btn-success:hover {
background: var(--spice-button, #1ed760);
filter: none;
border: 1px solid var(--spice-button, #1ed760);
}
#sleep-timer-menu .btn-info,
#sleep-timer-menu .btn-info:hover {
background-image: linear-gradient(#11a0d2, #029acf 6%, #0291c3);
filter: none;
border: 1px solid #0286b4;
}
#sleep-timer-menu .btn-warning,
#sleep-timer-menu .btn-warning:hover {
background-image: linear-gradient(#db8a2c, #d9831f 6%, #cc7b1d);
filter: none;
border: 1px solid #bd721b;
}
#sleep-timer-menu .btn-danger,
#sleep-timer-menu .btn-danger:hover {
background-image: linear-gradient(#a152a5, #9b479f 6%, #924395);
filter: none;
border: 1px solid #873e8a;
}
#sleep-timer-menu .btn-dark,
#sleep-timer-menu .btn-dark:hover {
background-image: linear-gradient(#434648, #373a3c 6%, #343738);
filter: none;
border: 1px solid #303234;
}
#sleep-timer-menu .btn-light,
#sleep-timer-menu .btn-light:hover {
background-image: linear-gradient(white, #fff 6%, #f0f0f0);
filter: none;
border: 1px solid #dedede;
}
#sleep-timer-menu .btn-outline-secondary {
color: #bbb;
border-color: #bbb;
}
#sleep-timer-menu .btn-outline-secondary:hover {
color: #fff;
background-color: #bbb;
}
#sleep-timer-menu .text-secondary {
color: #777 !important;
}
#sleep-timer-menu .breadcrumb {
border: 1px solid #dedede;
}
#sleep-timer-menu .pagination .page-link:hover {
text-decoration: none;
}
#sleep-timer-menu .badge.bg-secondary, #sleep-timer-menu .badge.bg-light {
color: #373a3c;
}



.dMODvo {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  margin-block: 0px;
  font-size: 1.125rem;
  font-weight: 700;
  font-family: var(--font-family,CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif));
  color: var(--text-base,#000000);
}


.input-spinner-input-spinner input {
  width: 35px;
}

#sleep-timer-menu {
  width: 200px;
}

button#sleep-timer-start {
  margin: 10px 10px;
  width: calc(100% - 20px);
  font-size: 24px !important;
  padding: 0 !important;

  filter: brightness(100%) !important;
  transition: filter 0.15s !important;
}
button#sleep-timer-start.timer:not(:hover) {
  font-weight: 600;
}

button#sleep-timer-start.btn-primary:not(.timer) {
  font-size: 15px !important;
}
button#sleep-timer-start.btn-primary:not(.timer) b {
  font-size: 24px;
}

button#sleep-timer-start.btn-success {
  color: var(--spice-shadow);
}
button#sleep-timer-start.btn-primary {
  color: var(--spice-text);
}
button#sleep-timer-start.btn-primary:hover, button#sleep-timer-start.btn-primary:hover b {
  font-size: 0 !important;
}
button#sleep-timer-start.btn-primary:hover::after {
  content: "Stop";
  font-size: 24px;
}

button#sleep-timer-start:hover {
  filter: brightness(90%) !important;
}

#sleep-timer-menu div.input-spinner-input-spinner {
  width: 127px;
  margin: 0 auto;
  transition: box-shadow 0.15s;
  border-radius: 0.375rem;
}
#sleep-timer-menu div.input-spinner-input-spinner > * {
  height: 28px;
}
#sleep-timer-menu div.input-spinner-input-spinner button strong {
  position: absolute;
  transform: translate(-4.5px, -12px);
}

#sleep-timer-menu div.input-spinner-input-spinner button:first-child {
  border-radius: var(--bs-btn-border-radius) 0 0 var(--bs-btn-border-radius) !important;
}
#sleep-timer-menu div.input-spinner-input-spinner input {
  border-radius: 0 !important;
}
#sleep-timer-menu div.input-spinner-input-spinner button:last-child {
  border-radius: 0 var(--bs-btn-border-radius) var(--bs-btn-border-radius) 0 !important;
}

#sleep-timer-menu label svg {
  transition: filter 0.15s,
              transform 0.3s ease-in-out;
}

#sleep-timer-menu label .timer-icons-label {
  transition: transform 0.3s ease-in-out,
              opacity 0.3s ease-in-out;
  opacity: 0;
  position: absolute;
  right: 0;
  font-size: 11px;
  color: var(--spice-subtext);
}
#sleep-timer-menu label:hover .timer-icons-label {
  opacity: 1;
}
#sleep-timer-menu label:hover .timer-icons-label.icons-label-songs {
  transform: translate(-10px, 2px) !important;
}
#sleep-timer-menu label:hover .timer-icons-label.icons-label-minutes {
  transform: translate(-5px, 3px) !important;
}

#sleep-timer-menu input[type=radio]:checked + label div.input-spinner-input-spinner {
  box-shadow: 0 0 10px #ffffff;
}
#sleep-timer-menu input[type=radio]:checked + label svg {
  filter: drop-shadow(0 0 0.325rem white);
}

#sleep-timer-menu label:hover div.input-spinner-input-spinner {
  box-shadow: 0 0 10px #ffffff6b;
}
#sleep-timer-menu label:hover svg {
  filter: drop-shadow(0 0 0.325rem white);
  transform: translateY(-3px);
}

div:has(~ button#sleep-timer-start.btn-primary).form > label > div,
div:has(~ button#sleep-timer-start.btn-primary).form > label > svg,
div:has(~ button#sleep-timer-start.btn-primary).form > label > span {
  filter: blur(0.8px) brightness(0.8);
}
div:has(~ button#sleep-timer-start.btn-primary).form > label {
  pointer-events: none;
}


.popup-menu {
background: var(--spice-card);
border-radius: 5px;
bottom: 29px;
-webkit-box-shadow: 0 4px 12px 4px rgba(var(--spice-rgb-shadow),.5);
box-shadow: 0 4px 12px 4px rgba(var(--spice-rgb-shadow),.5);
display: none;
position: absolute;
right: -121px;
width: 280px;
z-index: 1002
}

.popup-menu--is-visible {
-webkit-animation: fadeIn 333ms cubic-bezier(.3,0,0,1);
animation: fadeIn 333ms cubic-bezier(.3,0,0,1);
display: block
}

.popup-menu:before {
border: 10px solid transparent;
border-top-color: var(--spice-card);
bottom: -20px;
content: "";
left: auto;
margin-left: -10px;
margin-right: -10px;
position: absolute;
right: 138px
}

@keyframes fadeIn {
0% {
    opacity: 0;
    -webkit-transform: translateY(10px);
    transform: translateY(10px)
}

to {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
}
}

  </style>
  <div style="position: relative;">
      <div id="sleep-timer-menu" class="popup-menu">
          <div style="max-height: calc(100vh - 90px); overflow-y: auto; padding: 5px;">
              <div class="Type__TypeElement-goli3j-0 dMODvo" style="position: relative; text-align: center;">
                  <h3 style="padding: 14px 14px 0px;" tabindex="-1">Sleep Timer<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="16px" x="0px" y="0px" viewBox="0 0 121.85 126.24" xml:space="preserve" fill="gray" style="bottom: 21px;position: absolute;margin-left: 1px;"><g><path d="M5.27,44.71l22.38-26.77H12.93c-1.27,0-2.47-0.16-3.59-0.49c-0.66-0.19-1.27-0.44-1.83-0.73c-0.56-0.3-1.09-0.66-1.57-1.08 l-0.03-0.02c-0.48-0.42-0.9-0.87-1.27-1.37c-0.36-0.5-0.68-1.04-0.93-1.62C3.48,12.08,3.3,11.5,3.18,10.9 c-0.12-0.61-0.19-1.22-0.19-1.83c0-0.62,0.06-1.23,0.17-1.82c0.12-0.6,0.29-1.18,0.52-1.74c0.24-0.58,0.55-1.13,0.9-1.64 c0.36-0.51,0.77-0.98,1.24-1.42l0.04-0.03c0.47-0.43,0.99-0.8,1.56-1.12C8,0.99,8.61,0.72,9.27,0.52c0.57-0.17,1.16-0.31,1.77-0.39 C11.66,0.04,12.29,0,12.93,0h31.91c1.62,0,3.08,0.22,4.38,0.66c1.33,0.45,2.49,1.14,3.47,2.05c1.02,0.95,1.79,2.09,2.3,3.41 c0.5,1.29,0.75,2.75,0.75,4.36c0,1.26-0.13,2.45-0.39,3.55c-0.14,0.61-0.33,1.19-0.56,1.76c-0.23,0.56-0.51,1.1-0.82,1.6 c-0.22,0.35-0.49,0.74-0.8,1.17c-0.27,0.38-0.63,0.85-1.06,1.39l-1.28,1.6L28.97,47.58h19.64c0.61,0,1.22,0.04,1.83,0.12 c0.58,0.07,1.16,0.19,1.72,0.34c0.66,0.18,1.26,0.42,1.81,0.69c0.55,0.28,1.06,0.62,1.54,1.01l0.03,0.03 c0.51,0.42,0.95,0.88,1.33,1.39c0.39,0.52,0.71,1.07,0.96,1.66l0.11,0.29c0.2,0.5,0.34,1.04,0.44,1.6c0.1,0.56,0.15,1.13,0.15,1.7 c0,0.62-0.06,1.24-0.17,1.84c-0.11,0.6-0.28,1.18-0.5,1.73c-0.24,0.59-0.54,1.15-0.91,1.67c-0.37,0.52-0.79,1.01-1.27,1.44 l-0.06,0.05c-0.47,0.42-1,0.8-1.57,1.11c-0.56,0.31-1.16,0.56-1.81,0.76l-0.23,0.06c-0.52,0.14-1.07,0.25-1.64,0.32 c-0.59,0.07-1.19,0.11-1.78,0.11H12.16c-1.66,0-3.19-0.21-4.58-0.62l-0.01,0c-0.78-0.23-1.52-0.53-2.2-0.91 c-0.69-0.38-1.33-0.82-1.89-1.33c-0.57-0.51-1.08-1.07-1.52-1.68c-0.44-0.61-0.81-1.26-1.1-1.96c-0.29-0.68-0.5-1.39-0.64-2.1 C0.07,56.19,0,55.44,0,54.68c0-0.59,0.06-1.19,0.16-1.78c0.11-0.59,0.27-1.16,0.48-1.7l0.03-0.08c0.08-0.21,0.17-0.43,0.27-0.64 l0.31-0.61l0.36-0.61c0.15-0.21,0.3-0.44,0.46-0.65l-0.05-0.04L5.27,44.71L5.27,44.71z M12.48,111.33l14.9-17.82h-9.34 c-0.91,0-1.76-0.12-2.57-0.35c-0.48-0.14-0.93-0.32-1.33-0.53c-0.41-0.22-0.8-0.49-1.15-0.79l-0.05-0.05 c-0.34-0.29-0.64-0.62-0.89-0.97c-0.27-0.36-0.49-0.76-0.68-1.18c-0.18-0.4-0.31-0.83-0.4-1.27c-0.09-0.44-0.14-0.89-0.14-1.34 c0-0.45,0.04-0.89,0.13-1.32c0.09-0.44,0.21-0.86,0.38-1.27c0.18-0.42,0.4-0.83,0.66-1.2c0.25-0.36,0.56-0.71,0.91-1.03l0.01-0.02 c0.35-0.32,0.73-0.59,1.15-0.83c0.42-0.23,0.87-0.42,1.34-0.57c0.41-0.13,0.84-0.22,1.28-0.28c0.45-0.06,0.9-0.09,1.35-0.09h21.96 c1.15,0,2.2,0.16,3.13,0.48c0.96,0.33,1.81,0.82,2.52,1.49c0.74,0.69,1.31,1.52,1.68,2.48c0.36,0.93,0.54,1.98,0.54,3.13 c0,0.43-0.02,0.86-0.07,1.3c-0.05,0.43-0.12,0.84-0.2,1.23c-0.1,0.43-0.24,0.85-0.4,1.26c-0.16,0.4-0.36,0.79-0.59,1.15 c-0.14,0.24-0.33,0.51-0.56,0.83l-0.73,0.97l-0.88,1.1l-14.56,17.32h12.73c0.43,0,0.86,0.03,1.31,0.08 c0.43,0.05,0.84,0.14,1.23,0.24c0.48,0.13,0.92,0.3,1.31,0.5c0.41,0.21,0.79,0.46,1.15,0.76c0.37,0.3,0.7,0.65,0.98,1.02 c0.29,0.38,0.52,0.79,0.71,1.22l0.08,0.22c0.14,0.37,0.25,0.76,0.32,1.17c0.08,0.41,0.11,0.83,0.11,1.23 c0,0.45-0.04,0.89-0.12,1.33c-0.08,0.44-0.2,0.86-0.37,1.26c-0.17,0.43-0.4,0.84-0.67,1.22c-0.27,0.39-0.58,0.74-0.92,1.05 l-0.04,0.04c-0.35,0.31-0.73,0.58-1.15,0.81c-0.4,0.22-0.84,0.4-1.31,0.55l-0.18,0.05c-0.37,0.1-0.76,0.18-1.17,0.23 c-0.43,0.05-0.86,0.08-1.27,0.08H17.5c-0.57,0-1.13-0.04-1.69-0.11c-0.55-0.07-1.07-0.19-1.57-0.33c-0.57-0.17-1.1-0.39-1.6-0.66 c-0.49-0.27-0.95-0.59-1.37-0.96c-0.42-0.37-0.78-0.77-1.1-1.21c-0.32-0.43-0.58-0.91-0.8-1.42c-0.21-0.5-0.36-1-0.47-1.52 c-0.1-0.52-0.15-1.06-0.15-1.61c0-0.42,0.04-0.86,0.12-1.29c0.08-0.43,0.2-0.84,0.35-1.23c0.08-0.15,0.15-0.35,0.22-0.51l0.22-0.44 l0.41-0.65l-0.05-0.04L12.48,111.33L12.48,111.33z M70.52,74.89l21.47-25.68H77.93c-0.6,0-1.2-0.04-1.79-0.12 c-0.58-0.08-1.14-0.2-1.67-0.35c-0.63-0.18-1.22-0.42-1.76-0.7c-0.55-0.29-1.06-0.64-1.52-1.04l-0.06-0.06 c-0.45-0.39-0.84-0.82-1.18-1.28c-0.36-0.48-0.66-1.01-0.9-1.57c-0.23-0.53-0.41-1.09-0.53-1.68c-0.12-0.59-0.18-1.18-0.18-1.77 c0-0.6,0.06-1.19,0.17-1.77c0.11-0.58,0.28-1.14,0.51-1.67c0.23-0.56,0.53-1.09,0.87-1.58c0.34-0.48,0.74-0.94,1.2-1.36l0.02-0.02 c0.46-0.42,0.97-0.79,1.52-1.1c0.55-0.31,1.15-0.56,1.78-0.75c0.56-0.17,1.13-0.3,1.71-0.38c0.59-0.08,1.2-0.13,1.82-0.13h30.7 c1.56,0,2.97,0.21,4.23,0.64c1.29,0.44,2.41,1.1,3.36,1.98c0.99,0.92,1.73,2.02,2.23,3.3c0.48,1.25,0.73,2.65,0.73,4.21 c0,1.22-0.12,2.36-0.37,3.42c-0.14,0.58-0.32,1.15-0.54,1.7c-0.22,0.55-0.49,1.06-0.79,1.54c-0.2,0.32-0.46,0.7-0.77,1.13 c-0.29,0.41-0.63,0.86-1.01,1.34l-1.23,1.53c-0.38,0.47-0.84,1.02-1.38,1.66l-19.6,23.32h18.8c1.22,0,2.37,0.15,3.42,0.44 c0.62,0.17,1.2,0.4,1.74,0.67c0.55,0.28,1.06,0.61,1.53,1l0.02,0.02c0.49,0.41,0.91,0.85,1.27,1.33c0.37,0.5,0.69,1.04,0.93,1.61 l0.1,0.27c0.19,0.49,0.34,1.01,0.44,1.55c0.1,0.55,0.15,1.1,0.15,1.64c0,0.6-0.06,1.2-0.16,1.78c-0.11,0.58-0.27,1.14-0.49,1.67 c-0.23,0.57-0.52,1.11-0.88,1.62c-0.35,0.5-0.76,0.96-1.22,1.39l-0.06,0.06c-0.46,0.42-0.97,0.78-1.51,1.07 c-0.54,0.3-1.12,0.54-1.74,0.73l-0.22,0.06c-0.52,0.14-1.06,0.25-1.6,0.32c-0.55,0.07-1.12,0.1-1.71,0.1H77.19 c-0.78,0-1.55-0.05-2.3-0.15c-0.74-0.1-1.45-0.25-2.12-0.45l-0.01,0c-0.75-0.22-1.47-0.52-2.13-0.87 c-0.66-0.36-1.27-0.79-1.82-1.28c-0.56-0.49-1.05-1.04-1.48-1.62c-0.43-0.59-0.78-1.23-1.07-1.9c-0.27-0.66-0.48-1.33-0.62-2.03 c-0.14-0.7-0.21-1.42-0.21-2.16c0-0.57,0.05-1.15,0.16-1.72c0.1-0.56,0.26-1.11,0.46-1.64c0.05-0.19,0.21-0.51,0.29-0.7l0.3-0.59 c0.1-0.19,0.22-0.39,0.35-0.59c0.15-0.21,0.3-0.44,0.46-0.65l-0.05-0.04L70.52,74.89L70.52,74.89z"></path></g></svg></h3>
              </div>
              <div class="form" style="padding-bottom: 10px; margin-top: -2px;">
                  <input class="form-check-input" type="radio" id="sleep-after-song" name="sleep-after" value="song" style="display: none;">
                  <label for="sleep-after-song" style="display: flex; align-items: self-end;">
                    <div style="width: 162px;">
                      <label for="sleep-after-song-count"></label>
                      <input type="number" id="sleep-after-song-count" name="sleep-after-song-count" min="1" value="1">
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px" style="height: 16px; margin-bottom: 6px; fill: color-mix(in srgb, var(--spice-subtext), #fff 42%); cursor: pointer;"><path d="M470.4 1.5L150.4 96A32 32 0 0 0 128 126.5v261.4A139 139 0 0 0 96 384c-53 0-96 28.7-96 64s43 64 96 64 96-28.7 96-64V214.3l256-75v184.6a138.4 138.4 0 0 0 -32-3.9c-53 0-96 28.7-96 64s43 64 96 64 96-28.7 96-64V32a32 32 0 0 0 -41.6-30.5z"/></svg>
                    <span class="timer-icons-label icons-label-songs" style="transform: translateX(-10px); cursor: pointer;">songs</span>
                  </label>
                  <input class="form-check-input" type="radio" id="sleep-after-minutes" name="sleep-after" value="minutes" style="display: none;">
                  <label for="sleep-after-minutes" style="display: flex; align-items: self-end;">
                    <div style="width: 162px;">
                      <label for="sleep-after-minutes-count"></label>
                      <input type="number" id="sleep-after-minutes-count" name="sleep-after-minutes-count" min="1" value="30">
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 24 24"  style="height: 23px; margin-bottom: 2px; margin-left: -3px; cursor: pointer;" fill="lightgray"><path d="m20.145 8.27 1.563-1.563-1.414-1.414L18.586 7c-1.05-.63-2.274-1-3.586-1-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7a6.966 6.966 0 0 0-1.855-4.73zM15 18c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M14 10h2v4h-2zm-1-7h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2z"></path></svg>
                    <span class="timer-icons-label icons-label-minutes" style="transform: translateX(-5px); cursor: pointer;">minutes</span>
                  </label>
              </div>
              <button type="button" class="btn btn-success" id="sleep-timer-start" disabled onclick="sleepTimerSubmit()">Start</button>
          </div>
      </div>
  </div>`);

  let bootstrapScript = document.createElement( "script" );
  bootstrapScript.setAttribute( 'src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js' );
  bootstrapScript.setAttribute( 'integrity', 'sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8' );
  bootstrapScript.setAttribute( 'crossorigin', 'anonymous' );
  bootstrapScript.setAttribute( 'referrerpolicy', 'no-referrer' );
  document.head.appendChild( bootstrapScript );
  let jQueryScript = document.createElement( "script" );
  jQueryScript.setAttribute( 'src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js' );
  jQueryScript.setAttribute( 'integrity', 'sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==' );
  jQueryScript.setAttribute( 'crossorigin', 'anonymous' );
  jQueryScript.setAttribute( 'referrerpolicy', 'no-referrer' );
  document.head.appendChild( jQueryScript );
  let momentScript = document.createElement( "script" );
  momentScript.setAttribute( 'src', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js' );
  momentScript.setAttribute( 'integrity', 'sha512-+H4iLjY3JsKiF2V6N366in5IQHj2uEsGV7Pp/GRcm0fn76aPAk5V8xB6n8fQhhSonTqTXs/klFz4D0GIn6Br9g==' );
  momentScript.setAttribute( 'crossorigin', 'anonymous' );
  momentScript.setAttribute( 'referrerpolicy', 'no-referrer' );
  document.head.appendChild( momentScript );

  function waitForElement(){
      if(typeof jQuery !== "undefined"){
          $('#sleep-timer-menu').find('input').each(function(){
              $(this).change(function(){
                    $('button#sleep-timer-start').prop('disabled', false);
              });
          });

          let inputSpinnerScript = document.createElement( "script" );
          inputSpinnerScript.setAttribute( 'src', 'https://cdn.jsdelivr.net/npm/bootstrap-input-spinner/src/bootstrap-input-spinner.js' );
          document.head.appendChild( inputSpinnerScript );
          function waitForSpinner(){
            if(typeof $("input#sleep-after-song-count").inputSpinner !== "undefined"){
                $("input#sleep-after-song-count").inputSpinner({ groupClass: 'input-spinner-input-spinner' });
                $("input#sleep-after-minutes-count").inputSpinner({ groupClass: 'input-spinner-input-spinner' });
            }
            else{
                setTimeout(waitForSpinner, 250);
            }
          }
          waitForSpinner();
      }
      else{
          setTimeout(waitForElement, 250);
      }
  }
  waitForElement();
})();


var sleepTimerButton = new Spicetify.Playbar.Button("Sleep Timer", `<svg class="Svg-sc-ytk21e-0 Svg-img-icon-small Svg-img-icon Svg-img-16 Svg-img-16-icon uPxdw e-9890-icon e-9890-baseline" xml:space="preserve" viewBox="0 0 1000 1000" y="0px" x="0px" height="16px" width="16px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller); display: flex; fill: currentColor;"><path d="M525.3,989.5C241.2,989.5,10,758.3,10,474.1c0-196.8,109.6-373.6,285.9-461.4c7.9-3.9,17.5-2.4,23.7,3.8c6.2,6.2,7.9,15.8,4,23.7c-32.2,65.4-48.5,135.7-48.5,208.9c0,261.4,212.7,474.1,474.1,474.1c74,0,145-16.7,211-49.5c7.9-3.9,17.5-2.4,23.7,3.8c6.3,6.3,7.9,15.8,3.9,23.7C900.5,879,723.3,989.5,525.3,989.5z"></path></svg>`, SleepTimer);

var sleepTimer = { type: 'disabled' };

function SleepTimer() { // Toggle menu show
  const menu = document.querySelector('div#sleep-timer-menu');
  if (menu.classList.contains('popup-menu--is-visible')) menu.classList.remove('popup-menu--is-visible');
  else menu.classList.add('popup-menu--is-visible');
}

function toggleSleepTimer() {
  if (sleepTimer.type != 'disabled') disableSleepTimer();
  else enableSleepTimer();
}

function enableSleepTimer() {
  let type = document.querySelector('input[name="sleep-after"]:checked').value;
  sleepTimer = { type, count: Number($(`input#sleep-after-${type}-count`).val()) };
  $('button#sleep-timer-start').html(type == 'song' ? `<b>${sleepTimer.count}</b> song${sleepTimer.count == 1 ? '' : 's'} remain${sleepTimer.count == 1 ? 's' : ''}` : '').addClass('btn-primary').removeClass('btn-success');
  sleepTimerButton.label = `${type == 'song' ? `${sleepTimer.count} song${sleepTimer.count == 1 ? '' : 's'} remaining` : 'Sleep Timer'}`;
  sleepTimerButton.active = true;

  if (type == 'minutes') {
    let start = Date.now();
    sleepTimer.timer = setInterval(function() {
        var delta = Date.now() - start; // milliseconds elapsed since start
        let timeRemaining = (sleepTimer.count - (delta / 1000 / 60)) >= 60 ? moment.utc((sleepTimer.count * 60 * 1000) - delta).format('HH:mm:ss') : moment.utc((sleepTimer.count * 60 * 1000) - delta).format('mm:ss');
        $('button#sleep-timer-start').text(timeRemaining).addClass('timer');
        sleepTimerButton.label = `${timeRemaining} remaining`;
        if (Math.floor(delta / 1000 / 60) >= sleepTimer.count) {
          clearInterval(sleepTimer.timer);
          disableSleepTimer();
          Spicetify.Player.pause();
        }
    }, 100);
  }
}

function disableSleepTimer() {
  clearInterval(sleepTimer.timer);
  sleepTimer = { type: 'disabled' };
  $('button#sleep-timer-start').text('Start').addClass('btn-success').removeClass('btn-primary timer');
  sleepTimerButton.active = false;
  sleepTimerButton.label = 'Sleep Timer';
}


function sleepTimerSubmit() {
  SleepTimer();
  toggleSleepTimer();
}


Spicetify.Player.addEventListener('songchange', function() {
  if (sleepTimer.type == 'disabled') return;
  if (sleepTimer.type == 'song') {
    if (sleepTimer.count == 1) {
      disableSleepTimer();
      let volumeBefore = Spicetify.Player.getVolume();
      Spicetify.Player.setVolume(0);
      Spicetify.Player.pause();
      let intid = setInterval(() => {
        if (Spicetify.Player.isPlaying()) {
          if (Spicetify.Player.getVolume()) Spicetify.Player.setVolume(0);
          Spicetify.Player.pause();
        }
      }, 500);
      setTimeout(() => {
        clearInterval(intid);
        Spicetify.Player.pause();
        Spicetify.Player.setVolume(volumeBefore);
        Spicetify.Player.skipBack(99999999);
      }, 3100)
    } else {
      $('button#sleep-timer-start').html(`<b>${--sleepTimer.count}</b> song${sleepTimer.count == 1 ? '' : 's'} remain${sleepTimer.count == 1 ? 's' : ''}`);
      sleepTimerButton.label = `${sleepTimer.count} song${sleepTimer.count == 1 ? '' : 's'} remaining`;
    }
  }
});
document.addEventListener('mouseup', event => {
  if (event.button != 0) return false; // Only left click

  // Close menu on click outside
  const menu = document.querySelector('div#sleep-timer-menu').parentElement;
  if (!menu.contains(event.target) && !sleepTimerButton.element.contains(event.target)) {
      document.querySelector('div#sleep-timer-menu').classList.remove('popup-menu--is-visible');
  }

  // Select radio input when number input is clicked on
  const spinners = document.querySelectorAll('.input-group.input-spinner-input-spinner');
  spinners.forEach(function(s) {
    if (s.contains(event.target)) {
      $(`#${$(event.target).closest('label[for]').attr('for')}`).prop("checked", true);
      $('button#sleep-timer-start').prop('disabled', false);
    }
  });
});
