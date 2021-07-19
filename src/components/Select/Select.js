import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './Select.module.css';

export default function Select({ valueArray, onChange}) {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(valueArray[0])
    const DropdownRoot = [s.DropdownRoot]
    
    if (isOpen) {
        DropdownRoot.push(s.isOpen);
    }

    const toggling = () => setIsOpen(!isOpen);


    const onChangeValue = (e) => {
        if (e.target.nodeName === 'LI') {
            setValue(e.target.innerHTML);
        }
            setIsOpen(false);
    }

    return (
        <div className={classNames(DropdownRoot.join(' '))}>
            <div  className={s.DropdownControl} onClick={toggling} >
                <input
                  className={s.DropdownPlaceholder}
                  value={value}
                  readOnly="readonly"
                  type="text"
                  onChange={onChange}
                />
                <div className={s.DropdownArrowWrapper}>
                    <span className={s.DropdownArrow}></span>
                </div>
            </div>
            {isOpen ?
                <div className={s.DropdownMenu}>
                    <p className={s.descriptionText}>CHOOSE YOUR PACK</p>
                    <ul onClick={(e) => onChangeValue(e)}>
                        {valueArray.map((item) => {
                            if (item === value) {
                                return (
                                    <li key={uuidv4()} className={classNames([s.DropdownOption, s.isSelected].join(' '))} role="option" aria-selected="true">
                                        {item}
                                    </li>
                                )
                            }
                            return (<li key={uuidv4()} className={s.DropdownOption} role="option" aria-selected="false">
                                        {item}
                                   </li>
                           )
                        })}
                    </ul>
                </div> : ''
                }
        </div>
  );
}

Select.propTypes = {
    valueArray: PropTypes.array.isRequired,
    onChange: PropTypes.func
};
