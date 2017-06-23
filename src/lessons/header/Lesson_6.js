export const challengeTitle = 'Responsiveness - Lesson 6'

export const challengeDescription = `
  There is one thing we haven't talked about yet: responsivness. How can we combine flexbox layouts for different screen sizes?

  We can combine different properties with CSS [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to suits our design choices.

  For example in a layout like the one we had in origin:
  \`\`\`
  <div class="navbar" id="parent">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  \`\`\`
  Where we dictated that all the elements should be placed at the end thaks to the \`justify-content: flex-end\` property; we can instruct our navbar to evenly space out the content if the size of the viewport is less than 800px by combining \`media queries\` and \`justify-content\` like so:
  \`\`\`css
  /* css */
  .navbar {
    background-color: #00d1b2;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  @media all and (max-width: 800px) {
    .navbar {
      justify-content: space-around;
    }
  }
  \`\`\`

  Feel free to play around with the example code below before finishing our navbar example in the next lesson.
`//end comment

export const seedHtml = `<!-- html -->
<div class="navbar" id="parent">
  <div class="square _1">1</div>
  <div class="square _2">2</div>
  <div class="square _3">3</div>
</div>`

export const seedCss = `/* css */
/* css */
.navbar {
  background-color: #00d1b2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

@media all and (max-width: 800px) {
  .navbar {
    justify-content: space-around;
  }
}


/* some extra CSS for the squares display */

.square {
    display: block;
    padding: 1em;
}

._1 {
 background-color: #90F3FF;
 color: black;
}

._2 {
 background-color: #E5E1EE;
 color: black;
}

._3 {
    background-color: #90BEDE;
}
`
