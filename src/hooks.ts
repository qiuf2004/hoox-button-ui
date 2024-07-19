import { Modal } from 'antd';
import { ModalFuncProps } from 'antd/lib/modal/Modal';
import React, { useState } from 'react';

export type ConfirmOptions = Omit<ModalFuncProps, 'onCancel' | 'visible'>;

export type ClickCallback = (
  event?: React.MouseEvent<HTMLElement, MouseEvent>,
) => any | PromiseLike<any>;

interface IOptions {
  onClick?: ClickCallback;
  confirmOptions?: Omit<ConfirmOptions, 'onOk'>;
}

export const useButton = (options: IOptions) => {
  const { onClick, confirmOptions } = options;
  const [loading, setLoading] = useState(false);

  const handleClick = (e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (confirmOptions) {
      Modal.confirm({
        ...confirmOptions,
        async onOk() {
          await onClick?.(e);
        },
      });
    } else {
      const fn = onClick?.(e);
      if (fn?.then) {
        setLoading(true);
      }
      fn?.finally(() => {
        setLoading(false);
      });
    }
  };

  return {
    loading,
    handleClick,
  };
};
