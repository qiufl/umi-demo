import * as React from 'react';
import classNames from 'classnames';
import './index.less';


type BorderContainerDesign = 'headline' | 'sidebar';
export interface BorderContainerProps {
  className?: string;
  style?: React.CSSProperties;
  design?: BorderContainerDesign;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  main: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function BorderContainer(props: BorderContainerProps) {
  const { className, style, design = 'sidebar', left, right, top, bottom, main, } = props;
  const classString = classNames(
    className, 'border-container', {
        ['border-container-headline']: design === 'headline',
    }
  );
  const leftClassString = classNames('border-container-pane', 'border-container-left');
  const rightClassString = classNames('border-container-pane', 'border-container-right');
  const topClassString = classNames('border-container-pane', 'border-container-top');
  const bottomClassString = classNames('border-container-pane', 'border-container-bottom');
  const mainClassString = classNames('border-container-pane', 'border-container-main');
  const centerClassString = classNames('border-container-center', {
    ['border-container-center-sidebar'] : design === 'sidebar',
  });
  const spinningStyles = { height: '100%', width: '100%'};
  return (
    <div className={classString} style={style}>
      { design === 'sidebar' && left && <div className={leftClassString}>{left}</div>}
      { design === 'headline' && top && <div className={topClassString}>{top}</div>}
      <div className={centerClassString}>
        { design === 'sidebar' && top && <div className={topClassString}>{top}</div>}
        { design === 'headline' && left && <div className={leftClassString}>{left}</div>}
        <div className={mainClassString}>{main}</div>
        { design === 'sidebar' && bottom && <div className={bottomClassString}>{bottom}</div>}
        { design === 'headline' && right && <div className={rightClassString}>{right}</div>}
      </div>
      { design === 'sidebar' && right && <div className={rightClassString}>{right}</div>}
      { design === 'headline' && bottom && <div className={bottomClassString}>{bottom}</div>}
    </div>
  );
}