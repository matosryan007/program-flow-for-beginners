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
    B["input"] --> C{"selection valid"}
    C{"selection valid"} -->|no - loop| D["invalid"]
    D["invalid"] --> B["input"]
    C{"selection valid"} -->|yes| E{"payment valid"}
    E{"payment valid"} -->|no - loop| Y["invalid"]
    Y["invalid"] --> B["input"]
    E{"payment valid"} -->|yes| Z["Valid"]
    Z["Valid"] --> F["output"]
    F["output"] --> I["end"]
`;

module.exports = answer.trim();