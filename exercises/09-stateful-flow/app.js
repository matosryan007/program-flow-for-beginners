/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["locked"]
    B["locked"] -->|event: coin| C["unlocked"]
    B["locked"] --> B["locked"]
    C["unlocked"] -->|event: push| D["output"]
    C["unlocked"] --> C["unlocked"]
    D["output"] --> B["locked"]
    B["locked"] --> E("end")
`;

module.exports = answer.trim();