import { h, Component, Prop} from "@stencil/core";


@Component({
  tag: "accordion-item",
  shadow: true,
  styleUrl: 'styles.css'
})

export class AccordionItem {
  accordionRef: HTMLElement
  @Prop() heading: string;
  @Prop() content: string;

  toggle() {

    this.accordionRef.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    const panel: any = this.accordionRef.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }
  render() {
    return ([
    <button class="accordion" ref={el => this.accordionRef = el} onClick={() => {this.toggle()}}>{this.heading}</button>,
      <div class="panel">
       { this.content && <p>{this.content}</p> }
       <slot name="content"/>
      </div>]
    );
  }
}
