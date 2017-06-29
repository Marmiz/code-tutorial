export const challengeTitle = ` Page Layout - Mobile First`

export const challengeDescription = `We are gonna use [HTML5 semantic](https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5) tags to create a barebone layout for our webpage.

Planning is important when deciding ordering and layout, since a well organized stucture from the start ensure a cleaner and easier to debug code.

We are gonna start from mobile first and we will build up the rest of the layout.
- for mobile we will have the items displayed in the full width
- for medium scren we will have a 2 colums display
- for big screen we will spilt the content over 3 colums

---

![mobile](https://dl.dropboxusercontent.com/s/aw0egotg6s0ec8i/mobile-layout.png?dl=0)
![2-col](https://dl.dropboxusercontent.com/s/xrce7vbjcgjysxv/2col-new.png?dl=0)
![3-col](https://dl.dropboxusercontent.com/s/pdlz5wn6h6v116z/3col-new.png?dl=0)

---

To achieve a mobile full-width layout we need  to have the main \`wrapper\`
to have a display flex property with a row layout. Then give all the elements in the page a width of 100% thanks to the \`flex-basis\` property.

- In the stylesheet declare the \`wrapper\` class \`display\` property as \`flex\`
- Again for \`wrapper\` set \`flex-direction\` as \`row\` and \`flex-wrap\` as \`wrap\`
- For all the elements give a \`flex-grow\` value of \`1\` and a \`flex-basis\` of \`100%\`
`

export const seedHtml = `<!-- html -->
<div class="wrapper">
    <header class="header">Header</header>
    <nav class="nav">Nav</nav>
    <section class="section">
        <p>Section</p>
    </section>
    <article class="article">
        Article
    </article>
    <aside class="aside">Aside</aside>
    <footer class="footer">Footer</footer>
</div>`

export const seedCss = `/* css */
.wrapper {
  /* wrapper css here */
}

/* We tell all items to be 100% width */
.header, .section, .nav, .aside, .footer, .article {
  /* css for all the elements */
}

/* extra CSS for better display */
body {
  margin: 0;
}
.header {
    background-color: #ff470f;
    padding: 0.35rem;
}

.nav {
    background-color: 	#ffdd57;
    padding: 0.35rem;
}

.section {
    background-color: #00d1b2;
    padding: 0.35rem;
}

.article {
    background-color: #23d160;
    padding: 0.35rem;
}

.aside {
    background-color: #68EDC6;
    padding: 0.35rem;
}

.footer {
    background-color: #b86bff;
    padding: 0.35rem;
}`
