'use client';

import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { type DivProps } from '@/types';

export type FormFooterProps = DivProps;

const useStyles = createStyles(({ css, responsive }) => {
  return {
    container: css`
      ${responsive.mobile} {
        padding: 16px;
      }
    `,
  };
});

const FormFooter = memo<FormFooterProps>(({ className, children, ...rest }) => {
  const { cx, styles } = useStyles();
  return (
    <Flexbox
      className={cx(styles.container, className)}
      gap={8}
      horizontal
      justify={'flex-end'}
      {...rest}
    >
      {children}
    </Flexbox>
  );
});

export default FormFooter;
