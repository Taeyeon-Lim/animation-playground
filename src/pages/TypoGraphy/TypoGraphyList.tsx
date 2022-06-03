import React, { useState } from 'react';
import TypoGraphyItem from './TypoGraphyItem';
import styles from './index.module.scss';
import classNames from 'classnames/bind';
import DefaultButton, {
  restartBtnColor,
  restartBtnSize,
} from '../../components/DefaultButton';

const cx = classNames.bind(styles);
const palette = ['blue', 'pink', 'gray', 'froly', 'concrete'];
const sizeSet = ['large', 'medium', 'small'];

type TypoListSettingsType = {
  stroke: string;
  size: restartBtnSize;
  color: restartBtnColor;
};

function TypoGraphyList() {
  const [typoListSettings, setTypoListSettings] =
    useState<TypoListSettingsType>({
      stroke: styles['color-blue'],
      size: 'large',
      color: 'blue',
    });

  const onChangeSetting = (type: 'stroke' | 'size' | 'color', text: string) =>
    setTypoListSettings(prev => {
      return { ...prev, [type]: text };
    });

  return (
    <div className={cx('typo_graphy-list')}>
      <TypoGraphyItem
        title={`TypoGraphy@${typoListSettings.color} 야!`}
        fontSize={100}
        stroke={typoListSettings.stroke}
        viewBox={'0 0 1260 150'}
        dy={'5rem'}
        restartBtnSize={typoListSettings.size}
        restartBtnColor={typoListSettings.color}
      >
        {sizeSet.map(size => (
          <DefaultButton
            key={'button' + size}
            name={size}
            onClickButton={() => onChangeSetting('size', size)}
            size={typoListSettings.size}
            color={typoListSettings.color}
          />
        ))}
        {palette.map(color => (
          <DefaultButton
            key={'button' + color}
            name={color}
            onClickButton={() => {
              onChangeSetting('color', color);
              onChangeSetting('stroke', styles[`color-${color}`]);
            }}
            size={typoListSettings.size}
            color={typoListSettings.color}
          />
        ))}
      </TypoGraphyItem>
      <TypoGraphyItem
        title={`TypoGraphy@Froly 야!`}
        fontSize={75}
        stroke={styles['color-froly']}
        viewBox={'0 0 1260 150'}
        dy={'5rem'}
        restartBtnSize={'large'}
        restartBtnColor={'froly'}
      />
    </div>
  );
}

export default TypoGraphyList;
