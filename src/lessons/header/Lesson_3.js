export const challengeTitle = `Our first display:flex - Lesson 3`

export const challengeDescription = `In doing so you have noticed that the three elements are one below each other. So how do we manage to position it like a navbar making them all ocupying one line?

Since the 3 divs are childs, the goal is to tell the parent how he should display his elements.
The key property to look for are \` display, flex-direction, flex-wrap, justify-content\`

- Proceed by adding a new class named \`navbar\` and assign it to the parent div.
- Then move over to the CSS panel and add \`display: flex\` as a property for the newly created navbar class

You should already see that by declaring it to be a flex element the three divs align themself.

----
Finish the challenge by assigning the following properties to the navbar:
- we want \`flex-direction\` to be set as a \`row\`
- \`justify-content\` wants to be set to \`flex-end\` so that our elements will be on the right of the screen.
`//end comment

export const seedHtml = `<!--html-->
<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`

export const seedCss = `/*css*/`
