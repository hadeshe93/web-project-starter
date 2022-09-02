import React, { memo, ReactNode } from 'react';

type Props = {
  if?: boolean;
  show?: boolean;
} & WrapperProps;

type WrapperProps = {
  children?: ReactNode;
  [key: string]: any;
};

function Wrapper(props: WrapperProps) {
  const { children, ...restProps } = props;
  return <div {...restProps}>{ children }</div>
}

export default memo(function Condition(oriProps: Props) {
  const { if: vIf, show: vShow, ...props } = oriProps;
  if (vIf === false) {
    const { children, ...restProps } = props;
    return Wrapper(restProps);
  }
  if (vIf === true) {
    return Wrapper(props);
  }
  if (vShow === false) {
    return Wrapper({
      ...props,
      style: {
        display: 'none',
      }
    });
  }
  if (vShow === true) {
    return Wrapper(props);
  }
});
