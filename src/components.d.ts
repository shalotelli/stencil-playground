/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface RandomPost {}
  interface TimeSince {
    'timestamp': Date;
    'unit': string;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLRandomPostElement extends Components.RandomPost, HTMLStencilElement {}
  var HTMLRandomPostElement: {
    prototype: HTMLRandomPostElement;
    new (): HTMLRandomPostElement;
  };

  interface HTMLTimeSinceElement extends Components.TimeSince, HTMLStencilElement {}
  var HTMLTimeSinceElement: {
    prototype: HTMLTimeSinceElement;
    new (): HTMLTimeSinceElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'random-post': HTMLRandomPostElement;
    'time-since': HTMLTimeSinceElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface RandomPost {}
  interface TimeSince {
    'timestamp'?: Date;
    'unit'?: string;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'random-post': RandomPost;
    'time-since': TimeSince;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'random-post': LocalJSX.RandomPost & JSXBase.HTMLAttributes<HTMLRandomPostElement>;
      'time-since': LocalJSX.TimeSince & JSXBase.HTMLAttributes<HTMLTimeSinceElement>;
    }
  }
}


