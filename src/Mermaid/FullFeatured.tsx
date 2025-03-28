import { ChevronDown, ChevronRight } from 'lucide-react';
import { ReactNode, memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import ActionIcon from '@/ActionIcon';
import CopyButton from '@/CopyButton';

import { useStyles } from './style';
import { MermaidProps } from './type';

export interface MermaidFullFeaturedProps extends Omit<MermaidProps, 'children'> {
  children: ReactNode;
  content: string;
}

export const MermaidFullFeatured = memo<MermaidFullFeaturedProps>(
  ({
    showLanguage,
    content,
    children,
    className,
    copyable,
    actionsRender,
    style,
    fileName = 'Mermaid',
    ...rest
  }) => {
    const [expand, setExpand] = useState(true);
    const { styles, cx } = useStyles('block');
    const container = cx(styles.container, className);

    const size = { blockSize: 24, fontSize: 14, strokeWidth: 2 };

    const originalActions = copyable && (
      <CopyButton content={content} placement="left" size={size} />
    );

    const actions = actionsRender
      ? actionsRender({ actionIconSize: size, content, originalNode: originalActions })
      : originalActions;

    return (
      <div className={container} data-code-type="mermaid" style={style} {...rest}>
        <Flexbox align={'center'} className={styles.header} horizontal justify={'space-between'}>
          <ActionIcon
            icon={expand ? ChevronDown : ChevronRight}
            onClick={() => setExpand(!expand)}
            size={{ blockSize: 24, fontSize: 14, strokeWidth: 3 }}
          />
          {showLanguage && (
            <Flexbox
              align={'center'}
              className={styles.select}
              gap={2}
              horizontal
              justify={'center'}
            >
              {fileName}
            </Flexbox>
          )}
          <Flexbox align={'center'} flex={'none'} gap={4} horizontal>
            {actions}
          </Flexbox>
        </Flexbox>
        <div style={expand ? {} : { height: 0, overflow: 'hidden' }}>{children}</div>
      </div>
    );
  },
);

export default MermaidFullFeatured;
