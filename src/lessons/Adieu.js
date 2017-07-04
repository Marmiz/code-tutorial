export const challengeTitle = `...and they lived forever displayed after`

export const challengeDescription = `So far we had just scratched the surface of what you can achieve with a proper usage of flexbox and CSS.

My goal in this few lessons was to stimulate your critical thinking and show you that, sometimes, CSS positioning can be made easy.


Thanks for sticking till the end of this journey, if you have any comment or feedback you can always reach me on twitter \`@akailbiondo\`, and of course you are always welcome here to play with the examples.

Also don't forget to check out the \`Github repo\` to see how this tutorial was made, and grab a template to code a brand new one in case you want to make a tutorial of your own

Happy coding.`

export const seedHtml=`<!-- html -->
<h1>The world is but a canvas</h1>
<div class="wrapper">
  <nav class="nav">
    <ul class="nav_link">
      <li>Home</li>
      <li>Store</li>
      <li>About</li>
    </ul>
  </nav>
  <section class="section">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
  </section>
  <article class="article">
    <div class="square_container">
      <div class="square">1</div>
      <div class="square">2</div>
      <div class="square">3</div>
      <div class="square">4</div>
    </div>
  </article>
  <aside class="aside">
    <ul class="aside_link">
      <li>Blog</li>
      <li>Post</li>
      <li>Contacts</li>
    </ul>
  </aside>
  <footer class="footer">
      <ul class="footer_link">
      <li>Social</li>
      <li>Portfolio</li>
      <li>Media</li>
    </ul>
  </footer>
</div>`

export const seedCss=`/* css */
/* to our imagination */
h1 {
  text-align: center;
  font-size: 2rem;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.wrapper {
  display: flex;
  flex-flow: row wrap;
  text-align: center;
}

/* We tell all items to be 100% width */
.section, .nav, .aside, .footer, .article {
  flex: 1 100%;
}

@media all and (min-width: 600px) {
  .aside, .article {
    flex: 1 1 auto;
  }
}

@media all and (min-width: 1000px) {
  .section {
    flex: 3 0 0;
  }
  .aside {
    order: 1;
  }
  .section {
    order: 2;
  }
  .article {
    order: 3;
  }
  .footer {
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
.nav {
  background-color: skyblue;
  padding: 0 1rem;
}

.nav_link {
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  justify-content: flex-end;
}

.nav_link > li {
  color: white;
  padding: 0.25rem;
}

.section {
  background-color: #00d1b2;
  text-align: justify;
  font-size: 1.2em;
  padding: 1rem;
}

.article {
  background-color: #23d160;
}

.square_container {
  display: flex;
  flex-flow: row wrap;
}

.square {
  flex: 1 1 30%;
  border: 1px solid white;
  background-color: tomato;
  width: auto;
  min-height: 100px;
  line-height: 100px;
  font-size: 2em;
  font-weight: bold;
}

.aside {
  background-color: #68EDC6;
}

.aside_link {
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  text-align: justify;
}

.aside_link > li {
   color: blue;
  padding: 0.4rem;
}

.footer {
  background-color: #b86bff;
}

.footer_link {
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  justify-content: space-around;
  font-weight: bold;
}`
