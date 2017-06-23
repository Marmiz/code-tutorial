export const challengeTitle = 'Double Media - Lesson 7'

export const challengeDescription = `
As we saw in the previous example we can combine media-queries and flexbox to achieve different design layouts.

Starting from the navbar we had before:
- add a media query that for screen **smaller than 800px** that:
  - space evenly the content by addig \`justify-content: space-around\` to the \`navbar\`
  - remember that we instructed \`grow\` to takes up all the space, revert this by modifying the \`flex-grow\` property back to \`0\` inside the media query

- add a second media query for screen **smaller than 600px** that:
  - display the content of the navbar as a column via \`flex-direction: column\`
`//end comment

export const seedHtml = `<!-- html -->
<div class="navbar" id="parent">
  <div class="grow">
    <a>Home</a>
  </div>
  <div>
    <a href="#">Store</a>
  </div>
  <div>
    <a href="#">Contacts</a>
  </div>
  <div>
    <a href="#">About</a>
  </div>
</div>`

export const seedCss = `/* css */
.navbar {
  background-color: #00d1b2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.grow {
  flex-grow: 1;
}

/* Some extra css for color, and general beauty. Feel free to play around */
body {
  margin: 0;
}

a {
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;
}

a:hover {
  background-color: #68EDC6;
}
`
