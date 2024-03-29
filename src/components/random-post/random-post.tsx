import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'random-post',
  styleUrl: 'random-post.scss',
  shadow: true
})
export class RandomPost {
  @Element() el: HTMLElement;
  content: any;

  componentWillLoad() {
    return fetch('https://jsonplaceholder.typicode.com/comments/1')
      .then(response => response.json())
      .then(data => this.content = data);
  }

  componentDidLoad() {
    const timeSince = this.el.shadowRoot.querySelector('time-since');
    const secondsToCount = 10;
    let i = 0;

    const countInterval = setInterval(() => {
      const timestamp = new Date;

      if (i < secondsToCount) {
        i += 1;

        timestamp.setSeconds(timestamp.getSeconds() - i);
        timeSince.timestamp = timestamp;
      } else {
        clearInterval(countInterval);
      }
    }, 1000);
  }

  render() {
    return (
      <Host>
        <div class="header">
          <img src="https://placeimg.com/300/300/animals" />
          <div class="username">{this.content.name}</div>
        </div>

        <div class="content">{this.content.body}</div>

        <div class="footer">
          <span>Posted</span> <time-since unit="second"></time-since>
        </div>
      </Host>
    );
  }

}
