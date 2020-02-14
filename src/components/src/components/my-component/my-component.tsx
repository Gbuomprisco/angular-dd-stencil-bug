import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  scoped: true
})
export class MyComponent {
  @Prop() index: number;

  render() {
    return <div>Hello, World! I'm a component at index {this.index}</div>;
  }
}
