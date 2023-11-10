import { renderHook } from '@testing-library/react-hooks';
import 'jest-localstorage-mock';

import useAuth from './useAuth';

jest.mock('utilities/getTokenFromHash', () => ({
  getTokenFromHash: jest.fn(),
}));

describe('useAuth', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return the token from localStorage if present', () => {
    localStorage.setItem('token', 'mockToken');

    const { result } = renderHook(() => useAuth());

    expect(result.current).toBe('mockToken');
  });

  it('should return the token from the hash if not present in localStorage', () => {
    window.location.hash = '#access_token=hashToken&expires_in=3600';

    jest
      .spyOn(require('utilities/getTokenFromHash'), 'getTokenFromHash')
      .mockReturnValue('hashToken');

    const { result } = renderHook(() => useAuth());

    expect(result.current).toBe('hashToken');
  });

  it('should save the token to localStorage if obtained from the hash', () => {
    window.location.hash = '#access_token=hashToken&expires_in=3600';

    jest
      .spyOn(require('utilities/getTokenFromHash'), 'getTokenFromHash')
      .mockReturnValue('hashToken');

    renderHook(() => useAuth());

    expect(localStorage.getItem('token')).toBe('hashToken');
  });
});
