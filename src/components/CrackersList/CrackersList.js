import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { crackerDelete } from '../../redux/crackers/crackers-operations';
import { getCrackers } from '../../redux/crackers/crackers-selectors';
import { CSSTransition } from 'react-transition-group';
import s from './CrackersList.module.css';
import Coffee from '../../images/cofee-semen.png';
import Range1 from '../../images/svg/range-1.svg';
import Range2 from '../../images/svg/range-2.svg';
import Range3 from '../../images/svg/range-3.svg';
import Range4 from '../../images/svg/range-4.svg';




export default function ContactsList() {
  const crackers = useSelector(getCrackers);

  const dispatch = useDispatch();

  const onDeleteCracker = useCallback((id) => dispatch(crackerDelete(id)), [dispatch]);
 

  return (
    <>
      <ul className={s.listCrackers}>
            <li className={s.itemIconCrackers}>
                <img className={s.iconCracker} src={Range1} alt="icon-cracker1"/>
                <img className={s.iconCracker} src={Range2} alt="icon-cracker2" />
                <img className={s.iconCracker} src={Range3} alt="icon-cracker3" />
                <img className={s.iconCracker} src={Range4} alt="icon-cracker4"/>
           </li>
        {crackers.map(({ id, range1, range2, range3, range4 }) => {
          return (
            <CSSTransition key={id} timeout={250} classNames="e-fade" appear={true}>
              <li id={id} className={s.itemCracker}>
              
                <img className={s.imageCoffee} src={Coffee} alt="count" />
                <div className={s.itemCrackerContainer}>
                  <p className={s.rangeCount}>{range1}%</p>
                  <p className={s.rangeCount}>{range2}%</p>
                  <p className={s.rangeCount}>{range3}%</p>
                  <p className={s.rangeCount}>{range4}%</p>
                  <p className={s.weightCount}>150KG</p>
                  <p className={s.costCount}>85 &#8364;</p>
              </div>
              <button className={s.buttonDelete} type="button" onClick={() => onDeleteCracker(id)}></button>
            </li>
            </CSSTransition>
          );
        })}
        <li className={s.footerList}>
          <span className={s.totalText}>TOTAL: 143 &#8364;</span>
          <button type="button" className={s.checkoutButton}>CHECKOT</button>
        </li>
      </ul>
    </>
  );
 }




