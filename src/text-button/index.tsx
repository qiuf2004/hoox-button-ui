import React from 'react';
import { ITextButton, TextButtonProps } from './TextButton';
import { Delete, Edit } from './textButtons';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<TextButtonProps> {
  Edit: typeof Edit;
  Delete: typeof Delete;
}

const TextButton = React.forwardRef<any, TextButtonProps>(
  ITextButton,
) as CompoundedComponent;

TextButton.Edit = Edit;
TextButton.Delete = Delete;

export default TextButton;
