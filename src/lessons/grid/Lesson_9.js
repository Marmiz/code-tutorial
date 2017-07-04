export const challengeTitle = `Setting the content size - Grid - Lesson 9`

export const challengeDescription = `If you are thinking about a grid system is probably because you want certain content inside your page to occupy a defined space.
To achieve so we can use the flexbox ability to set the width of elements based on the remaining space on the page.

Think about the markup we had before:
\`\`\`
<div class="container">
  <div class="content">
    <p>1</p>
  </div>
  <div class="content">
    <p>2</p>
  </div>
  <div class="content">
    <p>3</p>
  </div>
</div>
\`\`\`

If we want the first \`content\` column to occupy exactly half the container space, we can achieve this easily by setting it's \`width: 50%\`, and let flexbox figure out the space the other two \`content\` needs to occupy by giving them the same value of \`flex-grow: 1\`.
\`\`\`
.half {
  width: 50%;
}
.auto {
  flex-grow: 1
}
\`\`\`

I proceed and created three different "containers" each with its own "content".
Keeping in mind the example above proceed to:
- give to the class called \`.auto\` the ability of occupy the available space with \`flex-grow\`
- give to the class called \`.oneThird\` the width of 1/3(in percentage) of the container row; I'll let you figure it out the math yourself
- give the class called \`.half\` the width of half the container row; I'll let you figure it out the math yourself
- create a class called \`.twoThird\` the width of 2/3(in percentage) of the container row; I'll let you figure it out the math yourself
`

export const seedHtml = `<!-- html -->
<div class="container">
  <div class="content oneThird">
    <p class="toEdit"> one third </p>
  </div>
  <div class="content auto">
    <p class="red"> auto </p>
  </div>
  <div class="content auto">
    <p class="green"> auto </p>
  </div>
</div>

<div class="container">
  <div class="content half">
    <p class="toEdit"> half </p>
  </div>
  <div class="content auto">
    <p class="red"> auto </p>
  </div>
  <div class="content auto">
    <p class="green"> auto </p>
  </div>
</div>

<div class="container">
  <div class="content twoThird">
    <p class="toEdit"> two third </p>
  </div>
  <div class="content auto">
    <p class="red"> auto </p>
  </div>
  <div class="content auto">
    <p class="green"> auto </p>
  </div>
</div>
`

export const seedCss = `/* css */
.container {
background-color: #E4FDFF;
display: flex;
}

.auto {
  /* edit me */
}

.oneThird {
  /* edit me */
}

.half {
 /* edit me */
}

.twoThird {
 /* edit me */
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

.toEdit {
    background-color: #698BA2;
}

.red {
    color: white;
    background-color: #ff3860;
}

.green {
    color: white;
    background-color: #23d160;
}
`
