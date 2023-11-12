import { render, screen } from '@testing-library/react';
import useAuth from 'hooks/useAuth/useAuth';
import Routes from './index';

jest.mock('hooks/useAuth/useAuth');

describe('Routes', () => {
  it('renders Discover component when authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue('fake-token');

    render(<Routes />);
    const releasedThisWeekElement = screen.getByRole('heading', {
      name: 'RELEASED THIS WEEK',
    });
    expect(releasedThisWeekElement).toBeInTheDocument();
  });

  it('renders Login component when not authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue(null);

    render(<Routes />);

    const spotifyLoginButton = screen.getByRole('link', {
      name: 'Login with Spotify',
    });
    expect(spotifyLoginButton).toBeInTheDocument();
  });
});
