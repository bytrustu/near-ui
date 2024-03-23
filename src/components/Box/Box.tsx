import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled } from '../../styles';
import type { AsProps, StyleProps } from '../../types';

type BoxProps = PropsWithChildren<StyleProps & AsProps>;

const Root = styled(DefaultStyled)<BoxProps>``;

export const Box = ({ children, ...props }: BoxProps) => <Root {...props}>{children}</Root>;

Box.displayName = 'Box';
