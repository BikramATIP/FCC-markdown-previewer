import { useState } from 'react';
import './App.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

let defaultMarkdown = `
# Main Heading (H1)

This is an example of **bold text** at the top. Bold text is simple but effective for emphasis.

## Sub Heading (H2)

Below the subheading, we can use \`inline code\` for quick snippets or commands.

Here’s a quick example of inline code in a sentence: \`console.log('Hello World!')\`.

### Code Block

A larger chunk of code goes here, which is better placed in a code block for readability:

\`\`\`
function greet() {
 console.log("Welcome to the Markdown Editor!");
}

greet();
\`\`\`

## Heres a TABLE! 🤯

| Name    | Age | Occupation       |
|---------|-----|------------------|
| Nicolas Jackson    | 25  | Software Engineer|
| Caicedo   | 30  | Data Scientist   |
| Cole Palmer | 22  | Product Manager  |

- **List item 1**: Here’s a bullet point.
- **List item 2**: Another item, can be descriptive.
- **List item 3**: Lists are great for bullet points.

> This is a blockquote. Blockquotes are useful for quoting other people or providing emphasized content.

### Cucu 🥶🥶🔵🔵

![Cucurella](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM03CTLGHsDFslEDOYG_izBfkKoVfSwns5tg&s)

You can also create links like this: [freeCodeCamp.com](https://www.freecodecamp.org) for more information about AI research and development.
`



function App() {
 const [markdown, setMarkdown] = useState(defaultMarkdown)

 marked.setOptions({
  breaks: true, 
});


  return (
    <>
    <div className="editor-container">
      <div className="editor-label">Markdown Editor</div>
     <textarea id="editor" className="editor" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
     </div>
      <div className="preview-container">
        <div className="preview-label">Preview</div>
     <div id="preview" className="preview"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked(markdown)),
      }}
     ></div>
     </div>
    </>
  )
}

export default App
