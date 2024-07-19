import { useConfig } from '@linewell/config-provider';
import React from 'react';
import { ITextButton, TextButtonProps } from './TextButton';

const TextButton = React.forwardRef<any, TextButtonProps>(ITextButton);

export const Edit = React.forwardRef<any, TextButtonProps>((props, ref) => {
  const { localeMessages } = useConfig();

  const defaultText = localeMessages?.Button?.edit;

  return (
    <TextButton {...props} ref={ref}>
      {props.children ?? defaultText}
    </TextButton>
  );
});

export const Delete = React.forwardRef<any, TextButtonProps>((props, ref) => {
  const { confirmOptions, style, ...otherProps } = props;
  const { localeMessages } = useConfig();

  const defaultText = localeMessages?.Button?.delete;
  const defaultDeleteConfirmOptions = {
    title: localeMessages?.Button.confirmOptions.title,
    content: localeMessages?.Button.confirmOptions.content,
  };

  return (
    <TextButton
      confirmOptions={{
        okType: 'danger',
        ...defaultDeleteConfirmOptions,
        ...confirmOptions,
      }}
      style={{ color: 'red', ...style }}
      {...otherProps}
      ref={ref}
    >
      {props.children ?? defaultText}
    </TextButton>
  );
});
