export const challengeTitle = ` Page Layout - 12`

export const challengeDescription = ``

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

@media all and (min-width: 1000px) {
    .section {
        flex: 3 0 0;
    }
    .aside {
        order: 1;
    }
    .section{
        order : 2;
    }
    .article{
        order: 3;
    }
    .footer{
        order: 4;
    }
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
