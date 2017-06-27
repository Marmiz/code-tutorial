export const challengeTitle = `Lesson 10`

export const challengeDescription = `Combining what we saw in the previous chapter we can combine the \`width\` and \`flex\` property with \`media queries\` to create a layout that changes its behaviour for different screen sizes.

For instance in this example page the \`bigger\` class is added only for screen wider than 1000px making the first div occupy 2/3 of the row.

But for screen wider less than 1000px the three divs will have the same size, until the third breakpoint of 600px is reached to display the content in columns.

Feel free to play around in the example and try to create some different behaviour fpr different screen sizes.
`

export const seedHtml = `<!-- html -->
<div class="container">
  <div class="content bigger">
    <p class="blue"> resize </p>
  </div>
  <div class="content">
    <p class="red"> the </p>
  </div>
  <div class="content">
    <p class="green"> page </p>
  </div>
</div>`

export const seedCss = `/* css */
.container {
background-color: #E4FDFF;
display: flex;
}

.content {
  flex: 1 1 0;
}

@media all and (min-width: 1000px) {
  .bigger {
    flex: none;
    width: 66.66%;
  }
}

@media all and (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}

/*  additional CSS for better visualization  */

p {
text-align: center;
font-size: 2em;
margin: 0.15em;
}

.content {
padding: 0.25rem;
}

.blue {
    background-color: #698BA2;
}

.red {
    color: white;
    background-color: #ff3860;
}

.green {
    color: white;
    background-color: #23d160;
}`
