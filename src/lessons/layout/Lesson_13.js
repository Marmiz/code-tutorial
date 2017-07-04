export const challengeTitle = `3 Column Layout - Page Layout - Lesson 13`

export const challengeDescription = `Now That we have tackled the two column layout; it's time to pass to the 3 column  design for bigger screens.

As we did before, we are gonna create the layout using the aid of \`media query\` and flexbox's \`order\` property.

- Declare a \`media\` query that target screens with \`min-width: 1000px\`
- Inside that media query create an entry for \`.section\`
- Give to the newly \`.section\` class a \`flex\` property of \`3 0 0\`

\`flex\` is the shorter version of \`flex-grow flex-shrink flex-basis\`.
By giving  \`.section flex: 3 0 0\` we are deciding that Section should take three time the space as Article and Aside. (Remember that we gave a \`flex\` property to those element in the previous challenge)

However, as you can see \`section\` is the leftmost element, while we want it to be at the center of our page.
To do so we can simply use the \`order\` property to display the elements in this order: article, section, aside, footer.

Inside the same \`media query\` created before add an instance for the following classes to modify the order:

- \`.aside\` should have \`order: 1\`
- \`.section\` should have \`order: 2\`
- \`.article\` should have \`order: 3\`
- \`.footer\` should have \`order: 4\`


`//end description

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
  display: flex;
  flex-flow: row wrap;
  text-align: center;
}


/* We tell all items to be 100% width */
.header, .section, .nav, .aside, .footer, .article {
  flex: 1 100%;
  padding: 0.35rem;
}

@media all and (min-width: 600px) {
 .aside, .article { flex: 1  0 auto; }
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

.article {
    background-color: #23d160;
}

.aside {
    background-color: #68EDC6;
}

.footer {
    background-color: #b86bff;
}`
