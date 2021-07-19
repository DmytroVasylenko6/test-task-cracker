import s from './BasketPanel.module.css';
import CrackersList from '../CrackersList';
import { useSelector } from 'react-redux';
import { getCrackers } from '../../redux/crackers/crackers-selectors';
import image from '../../images/cofee-semen.png';


export default function BasketPanel() {

   const crackers = useSelector(getCrackers);
   const crackersCount = crackers.length
    
    return <div className={s.panelContainer}>
              <ul className={s.container}>
                 <li className={s.crackerCount}>
                    <img className={s.imageCount} src={image} alt="count"/>
                    <span className={s.textCount}>{crackersCount}</span>
                    </li>
                 <li className={s.totalContainer}>Total: 143 &#8364;</li>
                 <li className={s.detailsContainer}>
                    Details
                  <div className={s.contactListContainer}>
                  {crackersCount > 0 ? <CrackersList/> : <span className={s.emptyBasker}>Empty</span>}
                   </div>
                 </li>
                 
              </ul>
           </div>
}