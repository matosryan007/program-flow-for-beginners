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
    B["input"] --> C{"correct password?"}
    C{"correct password?"} -->|yes| E["correct"]
    C{"correct password?"} -->|no| D["incorrect"]
    D["incorrect"] --> B["input"]
    E["correct"] --> F("end")

`;

module.exports = answer.trim();