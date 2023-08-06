import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Layout } from './Layout';
import { theme } from './theme';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MemoryRouter initialEntries={['/overview']}>{children}</MemoryRouter>
    </ThemeProvider>
  );
};

// Just as a show case, didn't have enough time to write all scenarios
describe('Layout', () => {
  it('should render overview link', () => {
    render(<Layout />, { wrapper: Wrapper });
    const link = screen.getByRole('link', {
      name: /overview/i,
    });

    expect(link).toBeInTheDocument();
  });
});
