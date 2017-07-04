export const challengeTitle = `A simple grid system with flexbox - Grid - Lesson 8`

export const challengeDescription = `
  As we saw in the header example before, it's fairly simple to align item side by side with flexbox.

  We can use the same principles to create a simple grid layout for our content.

  In general the main elements that compose a grid system are a container and a content component. Bootstrap refers to them as "row" and "col" for example.

  Let's start by creating the barebones of this grid layout:
  - create a div and assign it the class \`container\`
  - inside the "container" nest three divs and give those the class \`content\`
  - inside each \`content\` div nest a \`<p>\` and write some text in it (even just 1 , 2, 3 is enough)
  - as we saw before, give the \`container\` class a \`display: flex\` property to align the elements

  I went ahead and created a bit of CSS for both the container and content class to ease the display of it.
`

export const seedHtml=`<!-- html -->
`

export const seedCss=`/* css */
.container {
  background-color: #E4FDFF;
}

.content {
  padding: 0.15rem;
}

.content > p {
  text-align: center;
  background-color: #90BEDE;
}


`
