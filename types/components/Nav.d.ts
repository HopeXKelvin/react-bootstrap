import * as React from 'react';

import NavItem from './NavItem';
import NavLink from './NavLink';

import { BsPrefixComponent, SelectCallback } from './helpers';

export interface NavProps {
  navbarBsPrefix?: string;
  cardHeaderBsPrefix?: string;
  variant?: 'tabs' | 'pills';
  activeKey?: unknown;
  defaultActiveKey?: unknown;
  fill?: boolean;
  justify?: boolean;
  onSelect?: SelectCallback;
  role?: string;
  navbar?: boolean;
  onKeyDown?: React.KeyboardEventHandler<this>;
}

declare class Nav<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As, NavProps> {
  static Item: typeof NavItem;
  static Link: typeof NavLink;
}

export default Nav;
