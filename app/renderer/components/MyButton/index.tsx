/**
 * @description 按钮组件
 */
import React from 'react';
import classnames from 'classnames';
import './index.less';

export interface Button {
  /**
   * @description 按钮大小
   */
  size: 'middle' | 'big' | 'small';
  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * @description 子组件
   */
  children?: React.ReactNode | any;
  /**
   * @description 禁止
   */
  disabled?: boolean;
  className?: string;
  onClick?: Function;
  /**
   * @description 是否显示边框
   */
  border?: boolean;
}
function MyButton({ size = 'small', style, children, disabled, className, onClick, border = true }: Button) {
  return (
    <div
      style={style}
      className={className}
      styleName={classnames('es-button', {
        [`es-button-${size}`]: true,
        'es-button-disabled': disabled,
        'es-button-border': border,
      })}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </div>
  );
}

export default MyButton;