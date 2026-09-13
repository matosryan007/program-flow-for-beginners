/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/

const answer = `
flowchart TD
    A("Start") --> B["input age"]
    B["input age"] --> C{"is older then 21?"}
    C{"is older then 21?"} -->|yes| D["input has license?"]
    D["input has license?"] --> F{"haves a license?"}
    C{"is older then 21?"} -->|no| E["rejected"]
    F{"haves a license?"} -->|no| E["rejected"]
    F{"haves a license?"} --> G["can rent"]
    E["rejected"] --> H(["end"])
    G["can rent"] --> H(["end"])

`;

// Do not modify this
module.exports = answer.trim();