import PropTypes from 'prop-types';
import s from './InputRange.module.css';



function InputRange({
    name,
    value,
    min,
    max,
    id,
    onChange,
    image,
    color
   
})
  // const blueColor = s.blueColor;
  // const redColor = s.redColor;

  // const style = [s.button];

  // if (color === 'red') {
  //   style.push(redColor);
  // }

  // if (color === 'blue') {
  //   style.push(blueColor);
  // }

{
  return <div className={s.inputRangeContainer} style={{ zIndex: '2' }}>
                 <div className={s.iconCrackerContainer}>
                    <img className={s.iconCraker} src={image} alt="" />
                 </div>
                 <div className={s.inputContainer}>
                   <input
                     type="range"
                     name={name}
                     value={value}
                     id={id}
                     min={min}
                     max={max}
                     onChange={onChange}
               
                   />
                 </div>
                  
                 <div className={s.valueCrakerContainer}>
                    <span className={s.valueCraker}>{value}%</span>
                 </div>
           </div>
}

InputRange.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    id: PropTypes.string,
    onChange: PropTypes.func,
    image: PropTypes.string
  };

export default InputRange