import { Button } from 'antd';
import type { ButtonProps as AntdButtonProps } from 'antd/es/button/button';
import React from 'react';
import { ClickCallback, ConfirmOptions, useButton } from '../hooks';

export interface ButtonProps extends AntdButtonProps {
  onClick?: ClickCallback;
  confirmOptions?: Omit<ConfirmOptions, 'onOk'>;
}

export const InternalButton: React.ForwardRefRenderFunction<
  any,
  ButtonProps
> = (props, ref) => {
  const { onClick, confirmOptions, ...otherProps } = props;
  const { handleClick, loading } = useButton({ onClick, confirmOptions });

  return (
    <Button
      className="zw-button"
      onClick={handleClick}
      loading={loading}
      ref={ref}
      {...otherProps}
    >
      {props.children}
    </Button>
  );
};
