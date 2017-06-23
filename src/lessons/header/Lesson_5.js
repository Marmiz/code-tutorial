export const challengeTitle = `Learn about flex-grow - Lesson 5`

export const challengeDescription  = `So what if we now want to add an element that stays at the left of the navbar, like a 'Home' link for example.

Turns out that with flexbox is fairly easy to do. Since we are pushing all our elements on the right with \`justify-content: flex-end;\` we can instruct an element to grow and takes up all the spaces it has available.
We can achieve this by specifing the \`flex-grow\` property on the child element we want to be bigger.
Here's a quick example:

\`\`\`
<div class="navbar">
  <div class="bigger">
    1
  </div>
  <div>
    2
  </div>
  <div>
    3
  </div>
</div>
\`\`\`
\`\`\`
.bigger {
  flex-grow: 1;
}
\`\`\`

Now go ahead and try to create an alement that takes up more space.
- Inside the \`parent div\` add a new div, nest inside a link with a text *Home*
- Make sure this is now the first div inside the \`parent\`
- Add to this div a class called \`grow\`
- In the CSS section, add the \`grow\` class and give it a \`flex-grow\` value of \`1\`


*Note:* After completing the tasks, try hovering on the newly made 'Home' link, you should see the background-color changes all the way till the next link. This is because with felx-grow we instructed the div to take up all the space it has available.

If you want, try playing around with CSS and see if you can think of a way to keep the parent div to takes all the length but keep the link small.
`//close comment

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
