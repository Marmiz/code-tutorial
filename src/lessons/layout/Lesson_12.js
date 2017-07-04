export const challengeTitle = `2 Column Layout - Page Layout - Lesson 12`

export const challengeDescription = `Since we approach this problem with the 'mobile first' in mind, now it's time to desing our 2 colum layout for medium size screen.

We are gonna declare a \`@media\` query that dictate the position of the two elements we want to align on the same row: \`artice\` and \`aside\` so that the main \`section\` will stay on a single row.

In order for the two elements to align we simply have to revert the \`flex-basis\` property we gave early and let flexbox figure out how much space they need to occupy.

---
For example in a case similar as the one we saw before:
\`\`\`
<div class="wrapper">
  <div class="nav">
  </div>
  <div class="section">
  </div>
  <div class="footer">
  </div>
</div>
\`\`\`
Where the elements span across the whole length of the page:
\`\`\`
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.nav, .section, .footer {
  flex-grow: 1;
  flex-basis: 100%;
}
\`\`\`
We can declare a media query that target two of the elements that we want to be side by side by reverting to \`flex-basis: auto\`
\`\`\`
@media all and (min-width: 750px) {
  .section, .footer {
    flex-grow : 1;
    flex-basis: auto;
  }
}
\`\`\`

---

- Declare a \`media\` query that target screens with \`min-width: 600px\`
- Inside that media query create an entry for \`.aside\` and \`.article\`
- assing the two classes a \`flex-grow\` value of \`1\` and a \`flex-basis\` of \`auto\`
`

export const seedHtml = `<!-- html -->
<div class="wrapper">
    <header class="header">Header</header>
    <nav class="nav">Nav</nav>
    <section class="section">
        <p>Section</p>
    </section>
    <article class="article" id="article">
        Article
    </article>
    <aside class="aside" id="aside">Aside</aside>
    <footer class="footer">Footer</footer>
</div>`

export const seedCss = `/* css */
.wrapper {
  display: flex;
  flex-flow: row wrap;
  text-align: center;
}


/* We tell all items to be 100% width */
/* Switch to a different format for test purpose */
.wrapper > * {
  flex: 1 100%;
  padding: 0.35rem;
}


/* extra CSS for better display */
body {
  margin: 0;
}
.main {
    padding: 0px;
}
.header {
    background-color: #ff470f;
}

.nav {
    background-color: 	#ffdd57;
}

.section {
    background-color: #00d1b2;
}

/* Switch to a different format for test purpose */
#article {
    background-color: #23d160;
}

/* Switch to a different format for test purpose */
#aside {
    background-color: #68EDC6;
}

.footer {
    background-color: #b86bff;
}`
