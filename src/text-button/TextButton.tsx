import React from 'react';
import { ClickCallback, ConfirmOptions, useButton } from '../hooks';

export interface TextButtonProps extends React.AnchorHTMLAttributes<any> {
  onClick?: ClickCallback;
  confirmOptions?: Omit<ConfirmOptions, 'onOk'>;
}

export const ITextButton: React.ForwardRefRenderFunction<
  any,
  TextButtonProps
> = (props, ref) => {
  const { onClick, confirmOptions, style, ...otherProps } = props;
  const { handleClick, loading } = useButton({ onClick, confirmOptions });

  return (
    <a
      className="zw-button"
      onClick={handleClick}
      {...otherProps}
      style={{
        // @ts-ignore
        opacity: loading ? 0.7 : null,
        // @ts-ignore
        pointerEvents: loading ? 'none' : null,
        ...style,
      }}
      ref={ref}
    >
      {props.children}
    </a>
  );
};
