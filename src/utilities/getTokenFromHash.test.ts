import { getTokenFromHash } from './getTokenFromHash';

describe('getTokenFromHash', () => {
  it('returns null for an empty hash', () => {
    const hash = '';
    const result = getTokenFromHash(hash);
    expect(result).toBeNull();
  });

  it('returns null for a hash without access_token', () => {
    const hash = '#some_other_fragment';
    const result = getTokenFromHash(hash);
    expect(result).toBeNull();
  });

  it('returns the access token from the hash', () => {
    const hash = '#access_token=mockedToken&expires_in=3600';
    const result = getTokenFromHash(hash);
    expect(result).toBe('mockedToken');
  });
});
