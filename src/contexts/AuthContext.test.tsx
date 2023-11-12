import { render } from '@testing-library/react';
import { AuthContext, AuthProvider } from './AuthContext';
import 'jest-localstorage-mock';

describe('AuthProvider', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders its children', () => {
    const { getByText } = render(
      <AuthProvider>
        <div>Child component</div>
      </AuthProvider>
    );

    expect(getByText('Child component')).toBeInTheDocument();
  });

  describe('when there is no token in local storage', () => {
    it('provides an AuthContext with a null when there is no hash', () => {
      const { getByText } = render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => <div>Auth context value: {value}</div>}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      expect(getByText('Auth context value:')).toBeInTheDocument();
    });

    it('provides an AuthContext with a token value when a token is present in the URL hash', () => {
      window.location.hash = 'access_token=hashToken';

      const { getByText } = render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => <div>Auth context value: {value}</div>}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      expect(getByText('Auth context value: hashToken')).toBeInTheDocument();
    });
  });

  describe('when there is token in local storage', () => {
    it('provides an AuthContext with a token value', () => {
      localStorage.setItem('token', 'localStorageToken');

      const { getByText } = render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => <div>Auth context value: {value}</div>}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      expect(
        getByText('Auth context value: localStorageToken')
      ).toBeInTheDocument();
    });
  });
});
