/* tslint:disable */
/* auto-generated angular directive proxies */
import { Component, ElementRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';

function proxyInputs(Cmp: any, inputs: string[]) {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() { return this.el[item]; },
      set(val: any) { this.el[item] = val; },
    });
  });
}

function proxyMethods(Cmp: any, methods: string[]) {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.el.componentOnReady().then((el: any) => el[methodName].apply(el, args));
    };
  });
}

function proxyOutputs(instance: any, el: any, events: string[]) {
  events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
}

import { Components } from 'component-library'

export declare interface AccordionContainer extends Components.AccordionContainer {}
@Component({ selector: 'accordion-container', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['heading'] })
export class AccordionContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(AccordionContainer, ['heading']);

export declare interface AccordionItem extends Components.AccordionItem {}
@Component({ selector: 'accordion-item', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['content', 'heading'] })
export class AccordionItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(AccordionItem, ['content', 'heading']);

export declare interface DemoComponent extends Components.DemoComponent {}
@Component({ selector: 'demo-component', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['advanced', 'max', 'min', 'value'] })
export class DemoComponent {
  slideChanged!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['slideChanged']);
  }
}
proxyInputs(DemoComponent, ['advanced', 'max', 'min', 'value']);
