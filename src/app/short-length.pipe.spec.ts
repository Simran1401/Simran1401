import { ShortLengthPipe } from './short-length.pipe';

describe('ShortLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
