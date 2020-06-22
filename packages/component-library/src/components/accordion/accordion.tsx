import { h, Component, Prop } from "@stencil/core";

@Component({
  tag: "accordion-container",
  shadow: true,
  styleUrl: 'styles.css'
})
export class Accordion {
  @Prop() heading: string;
  render() {
    return (
      <div>
        <h1>{this.heading}</h1>
        <slot />
      </div>
    );
  }
}
