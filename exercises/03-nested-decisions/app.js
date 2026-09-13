/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart LR
    A("Start") --> B["input"]
    B["input"] --> C{"Age >= 21?"}
    C{"Age >= 21?"} -->|yes| D{"Haves license?"}
    D{"Haves license?"} -->|no| E["invalid"]
    C{"Age >= 21?"} -->|no| F["valid"]
    F["valid"] -->|yes| D{"Haves license?"}
    F["valid"] --> G(["End"])
    G(["End"]) --> E["invalid"]

`;

module.exports = answer.trim();