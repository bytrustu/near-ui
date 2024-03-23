import { PropsWithChildren } from 'react';
import { Stack } from '../Stack';
import type { AsProps, StyleProps } from '../../types';

type VStackProps = PropsWithChildren<
  StyleProps &
    AsProps & {
      spacing?: string;
    }
>;
export const VStack = ({ children, spacing, ...props }: VStackProps) => (
  <Stack flexDirection="column" spacing={spacing} {...props}>
    {children}
  </Stack>
);

VStack.displayName = 'VStack';
