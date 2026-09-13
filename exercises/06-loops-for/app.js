/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["input"]
    B["input"] --> C{"loop"}
    C{"loop"} -->|yes| D["do task"]
    D["do task"] --> E["next task"]
    E["next task"] --> B["input"]
    C{"loop"} -->|no| F["output"]
    F["output"] --> G("end")

`;

module.exports = answer.trim();