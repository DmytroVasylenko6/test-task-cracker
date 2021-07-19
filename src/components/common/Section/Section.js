import PropTypes from 'prop-types';
import s from './Section.module.css';



export default function Section({children, background, paddingTop, paddingBottom}) {

  return (
    <section className={s.section} style={{
      backgroundImage: `url(${background})`,
      paddingTop: paddingTop + 'px',
      paddingBottom: paddingBottom + 'px'
    }}>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number
};
