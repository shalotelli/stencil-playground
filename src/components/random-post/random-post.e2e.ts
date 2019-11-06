import { newE2EPage } from '@stencil/core/testing';

describe('random-post', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<random-post></random-post>');

    const element = await page.find('random-post');
    expect(element).toHaveClass('hydrated');
  });
});
