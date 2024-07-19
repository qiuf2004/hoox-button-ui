import React from 'react';
import { ButtonProps, InternalButton } from './Button';
import { Add, Back, Confirm, Delete, Save } from './buttons';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLElement>
  > {
  Add: typeof Add;
  Delete: typeof Delete;
  Save: typeof Save;
  Back: typeof Back;
  Confirm: typeof Confirm;
}

const Button = React.forwardRef<any, ButtonProps>(
  InternalButton,
) as CompoundedComponent;

Button.Add = Add;
Button.Delete = Delete;
Button.Save = Save;
Button.Back = Back;
Button.Confirm = Confirm;

export default Button;
