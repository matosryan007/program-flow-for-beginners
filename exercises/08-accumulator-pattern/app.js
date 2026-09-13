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
    C{"loop"} -->|yes| D["accumalte"]
    D["accumalte"] --> B["input"]
    C{"loop"} -->|no| E["output"]
    E["output"] --> F("end")

`;

module.exports = answer.trim();