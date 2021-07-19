import React, { useState, useCallback } from 'react';
import s from './FormConstructor.module.css';
import { useDispatch} from 'react-redux';
import { crackersAdd } from '../../redux/crackers/crackers-operations';
import Button from '../../components/common/Button';
import InputRange from '../../components/InputRange';
import Range1 from '../../images/svg/range-1.svg';
import Range2 from '../../images/svg/range-2.svg';
import Range3 from '../../images/svg/range-3.svg';
import Range4 from '../../images/svg/range-4.svg';
import pacage from '../../images/pacage.png';
import { v4 as uuidv4 } from 'uuid';
import Select from '../../components/Select';

const options = [
  'SMALL PACK', 'MEDIUM PACK', 'LARGE PACK'
];

export default function Form() {


  const [range1, setRange1] = useState(0);
  const [range2, setRange2] = useState(0);
  const [range3, setRange3] = useState(0);
  const [range4, setRange4] = useState(0);
 

  const dispatch = useDispatch();

  const addCrackers = useCallback((newCracker) => dispatch(crackersAdd(newCracker)), [dispatch]);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'range1' && value <= 100 - (range2 + range3)) {
     setRange1(Number(value));
 
     if((Number(value) + range2 + range3) === 0) {
      setRange4(0)
    } else {
     setRange4(100 - (Number(value) + range2 + range3))
    }
      return
    }

    if (name === 'range2' && value <= 100 - (range1 + range3)) {
      setRange2(Number(value));

      if((Number(value) + range1 + range3) === 0) {
        setRange4(0)
      } else {
        setRange4(100 - (Number(value) + range1 + range3))
      }

      return
    }

    if (name === 'range3' && value <= 100 - (range1 + range2)) {
      setRange3(Number(value));
      if((Number(value) + range1 + range2) === 0) {
        setRange4(0)
      } else {
      setRange4(100 - (Number(value) + range1 + range2))
    }
      return
    }

  };

   const handleAddContact = e => {
    e.preventDefault();
     handleSubmitForm(range1, range2, range3, range4);
  };

  const handleSubmitForm = (range1, range2, range3, range4) => {

    const crackerId = uuidv4()
   
    if (range1 === 0 && range2 === 0 && range3 === 0) {

      return;
    } else {
      addCrackers({id: crackerId, range1, range2, range3, range4})
 
    }
     reset();
  };


  const reset = () => {
    setRange1(0);
    setRange2(0);
    setRange3(0);
    setRange4(0);
  };


    return ( <>
    
      <form onSubmit={handleAddContact} className={s.form}>
          <InputRange  
              name="range1"
              value={range1}
              id="range1"
              min={0}
              max={100}
              onChange={handleInputChange}
              image={Range1}
          />
             <InputRange  
              name="range2"
              value={range2}
              id="range2"
              min={0}
              max={100}
              onChange={handleInputChange}
              image={Range2}
          />
             <InputRange  
              name="range3"
              value={range3}
              id="range3"
              min={0}
              max={100}
              onChange={handleInputChange}
              image={Range3}
          />
             <InputRange  
        
              name="range4"
              value={range4}
              id="range4"
              min={0}
              max={100}
              image={Range4}
              onChange={handleInputChange}
        />
        <div className={s.selectContainer}>
            <div className={s.iconSelectContainer}>
                <img className={s.iconSelect} src={pacage} alt="pacage" />
            </div>
            <Select valueArray={options} />
          </div>
        
          <div className={s.addButtonContainer}>
          <div className={s.circleButton}>+</div>
            <div className={s.button}>
            <Button text={'Add contact'} type={'submit'} />
            </div>
          </div>
          
      </form>
      </>
    );
  }

