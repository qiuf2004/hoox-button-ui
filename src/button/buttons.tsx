import { useConfig } from '@linewell/config-provider';
import React from 'react';
import { ButtonProps, InternalButton } from './Button';
const Button = React.forwardRef<any, ButtonProps>(InternalButton);

export const Add = React.forwardRef<any, ButtonProps>((props, ref) => {
  const { localeMessages } = useConfig();

  const defaultText = localeMessages?.Button?.add;

  return (
    <Button type="primary" {...props} ref={ref}>
      {props.children ?? defaultText}
    </Button>
  );
});

export const Delete = React.forwardRef<any, ButtonProps>((props, ref) => {
  const { confirmOptions, ...otherProps } = props;
  const { localeMessages } = useConfig();

  const defaultText = localeMessages?.Button?.delete;
  const defaultDeleteConfirmOptions = {
    title: localeMessages?.Button.confirmOptions.title,
    content: localeMessages?.Button.confirmOptions.content,
  };

  return (
    <Button
      danger
      confirmOptions={{
        okType: 'danger',
        ...defaultDeleteConfirmOptions,
        ...confirmOptions,
      }}
      {...otherProps}
      ref={ref}
    >
      {props.children ?? defaultText}
    </Button>
  );
});

export const Save = React.forwardRef<any, ButtonProps>((props, ref) => {
  const { localeMessages } = useConfig();

  const defaultText = localeMessages?.Button?.save;

  return (
    <Button type="primary" {...props} ref={ref}>
      {props.children ?? defaultText}
    </Button>
  );
});

export const Back = React.forwardRef<any, ButtonProps>((props, ref) => {
  const { localeMessages } = useConfig();

  const defaultText = localeMessages?.Button?.back;

  return (
    <Button {...props} ref={ref}>
      {props.children ?? defaultText}
    </Button>
  );
});

export const Confirm = React.forwardRef<any, ButtonProps>((props, ref) => {
  const { confirmOptions, ...otherProps } = props;

  const { localeMessages } = useConfig();

  const defaultText = localeMessages?.Button?.confirm;

  return (
    <Button confirmOptions={{ ...confirmOptions }} {...otherProps} ref={ref}>
      {props.children ?? defaultText}
    </Button>
  );
});
