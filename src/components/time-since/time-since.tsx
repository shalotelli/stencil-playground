import { Component, Prop, State, Watch, Host, h } from '@stencil/core';

@Component({
  tag: 'time-since',
  styleUrl: 'time-since.css',
  shadow: true
})
export class TimeSince {
  @Prop() timestamp: Date;
  @Prop() unit: string;

  @State() displayValue: number;

  componentWillLoad() {
    this.display();
  }

  @Watch('timestamp')
  display() {
    this.displayValue = this.diff()
  }

  monthsSince() {
    const now = new Date;

    return ((now.getFullYear() - this.timestamp.getFullYear()) * 12) + (now.getMonth() - this.timestamp.getMonth())
  }

  // https://github.com/moment/moment/blob/develop/src/lib/moment/diff.js
  diff() {
    let val = 0;

    if (this.timestamp) {
      switch (this.unit) {
        case 'year': val = this.monthsSince() / 12; break;
        case 'month': val = this.monthsSince(); break;
        case 'quarter': val = this.monthsSince() / 3; break;
        case 'second': val = (+new Date() - +this.timestamp) / 1e3; break;  // 1000
        case 'minute': val = (+new Date() - +this.timestamp) / 6e4; break;  // 1000 * 60
        case 'hour': val = (+new Date() - +this.timestamp) / 36e5; break;   // 1000 * 60 * 60
        case 'day': val = (+new Date() - +this.timestamp) / 864e5; break;   // 1000 * 60 * 60 * 24
        case 'week': val = (+new Date() - +this.timestamp) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7
        default: val = +new Date() - +this.timestamp;
      }

    }

    return Math.round(val);
  }

  render() {
    return (
      <Host>
        {this.displayValue < 1 ?
          <div>just now</div> :
          <div>{this.displayValue} {this.unit}{this.displayValue !== 1 ? 's' : ''} ago</div>
        }
      </Host>
    );
  }

}
