import { red } from '@mui/material/colors';
import type { LinkProps } from '@mui/material/Link';
import { createTheme } from '@mui/material/styles';
import { forwardRef } from 'react';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  // components: {
  //   MuiLink: {
  //     defaultProps: {
  //       component: LinkBehavior,
  //     } as LinkProps,
  //   },
  //   MuiButtonBase: {
  //     defaultProps: {
  //       LinkComponent: LinkBehavior,
  //     },
  //   },
  // },
});
