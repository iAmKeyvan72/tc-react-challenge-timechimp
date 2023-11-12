import { render, screen } from '@testing-library/react';
import Routes from './index';
import { AuthContext } from 'contexts/AuthContext';

describe('Routes', () => {
  it('renders Discover component when authenticated', () => {
    render(
      <AuthContext.Provider value="token">
        <Routes />
      </AuthContext.Provider>
    );

    const discoverElement = screen.getByRole('feed');
    expect(discoverElement).toBeInTheDocument();
  });

  it('renders Login component when not authenticated', () => {
    render(
      <AuthContext.Provider value={null}>
        <Routes />
      </AuthContext.Provider>
    );

    const spotifyLoginButton = screen.getByRole('link', {
      name: 'Login with Spotify',
    });
    expect(spotifyLoginButton).toBeInTheDocument();
  });
});
