/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Reemplaza el contenido del literal de cadena `answer` con tu diagrama Mermaid.

Mantén este formato:
    const answer = `...`;
    module.exports = answer.trim();
*/

const answer = `
flowchart TD
    A("Start") --> B["get mug"]
    B["get mug"] --> C["set mug under coffee machine"]
    C["set mug under coffee machine"] --> D["open capsel holder of the coffee machine"]
    D["open capsel holder of the coffee machine"] --> E["put capsel into coffee machine"]
    E["put capsel into coffee machine"] --> F["press start on machine"]
    F["press start on machine"] --> G["serv coffee"]
    G["serv coffee"] --> H("end")

`;

module.exports = answer.trim();