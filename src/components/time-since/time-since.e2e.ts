import { newE2EPage } from '@stencil/core/testing';

describe('time-since', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<time-since></time-since>');

    const element = await page.find('time-since');
    expect(element).toHaveClass('hydrated');
  });
});
