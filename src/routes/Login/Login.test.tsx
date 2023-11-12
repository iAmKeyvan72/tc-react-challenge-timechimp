import { render, screen } from '@testing-library/react';
import Login from './index';

describe('Login', () => {
  it('renders a link with the text "Login with Spotify"', () => {
    render(<Login />);
    const spotifyLoginButton = screen.getByRole('link', {
      name: 'Login with Spotify',
    });
    expect(spotifyLoginButton).toBeInTheDocument();
  });

  it('renders an error message when CLIENT_ID is not defined', () => {
    const originalClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    delete process.env.REACT_APP_SPOTIFY_CLIENT_ID;

    render(<Login />);
    const errorMessage = screen.getByText(
      'Error: Missing or invalid configuration, Please refresh the page.'
    );
    expect(errorMessage).toBeInTheDocument();

    process.env.REACT_APP_SPOTIFY_CLIENT_ID = originalClientId;
  });

  it('renders an error message when REDIRECT_URI is not defined', () => {
    const originalRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
    delete process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

    render(<Login />);
    const errorMessage = screen.getByText(
      'Error: Missing or invalid configuration, Please refresh the page.'
    );
    expect(errorMessage).toBeInTheDocument();

    process.env.REACT_APP_SPOTIFY_REDIRECT_URI = originalRedirectUri;
  });
});
