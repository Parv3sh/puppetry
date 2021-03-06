import { justify } from "service/assert";
import { renderTarget } from "service/utils";

export const focus = {
  template: ({ target }) => justify(
    `// Focusing the element\n`
    + `await ( ${ renderTarget( target ) } ).focus();` ),

  toLabel: () => ``,
  toGherkin: ({ target }) => `Focus on \`${ target }\``,
  commonly: "",

  description: `Focuses the element`,
  params: [],

  test: [
    {
      valid: true
    }
  ]
};
