import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'random-post',
  styleUrl: 'random-post.css',
  shadow: true
})
export class RandomPost {
  content: any;

  componentWillLoad() {
    console.log('testing')

    // https://jsonplaceholder.typicode.com/
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.content = data;
      })
  }

  render() {
    return (
      <Host>
        Random Post
      </Host>
    );
  }

}
