import { renderHook } from '@testing-library/react-hooks';

import useAuth from './useAuth';

describe('useAuth', () => {
  afterEach(() => {
    window.location.hash = '';
    localStorage.clear();
  });

  it('returns the token from the hash', () => {
    const hash = '#access_token=mockedToken&expires_in=3600';
    window.location.hash = hash;

    const { result } = renderHook(() => useAuth());
    expect(result.current).toBe('mockedToken');
  });

  it('returns the token from localStorage if present', () => {
    window.localStorage.setItem('token', 'localStorageToken');

    const { result } = renderHook(() => useAuth());
    expect(result.current).toBe('localStorageToken');
  });

  it('returns null if no token is present', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current).toBeNull();
  });
});
