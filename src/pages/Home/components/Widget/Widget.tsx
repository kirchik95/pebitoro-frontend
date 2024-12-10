import { NavLink } from 'react-router';
import cn from 'classnames';

import { Text } from '@components/typography/Text';
import { Title } from '@components/typography/Title';
import { Icon } from '@components/ui/Icon';

import s from './Widget.module.css';

interface WidgetProps {
  className?: string;
  title: string | number;
  subtitle: string;
  to: string;
}

export const Widget = ({ className, title, subtitle, to }: WidgetProps) => {
  return (
    <div className={cn(s.root, className)}>
      <Title>{title}</Title>
      <Text className={s.subtitle} size="md">
        {subtitle}
      </Text>
      <NavLink className={s.link} to={to}>
        View details
        <Icon name="arrow-narrow-right" width={16} height={16} />
      </NavLink>
    </div>
  );
};
