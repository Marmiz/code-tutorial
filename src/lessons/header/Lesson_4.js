export const challengeTitle = `Some extra CSS - Lesson 4`

export const challengeDescription = `Woah! What happened here!

Nothing that you haven't already done. All I did was switching from those boring 1 - 2 - 3  and replacing them with something more appealing like some links.
\`\`\`
<div>
  <a href="#">Store</a>
</div>
\`\`\`

Then I proceed and added some basic CSS for the color of the links and navbar. This looks better isn't it?
Feel free to take a moment and look at what we have coded so far.
`//close

export const seedHtml = `<!-- html -->
<div class="navbar" id="parent">
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
