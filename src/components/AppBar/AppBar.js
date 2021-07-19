
import Navigation from '../Navigation';
import Container from '../common/Container';
import BasketPanel from '../BasketPanel';
import s from './AppBar.module.css';



export default function AppBar() {

  return (
    <header className={s.Header}>
      <BasketPanel/>
      <Container>
        <Navigation />
      </Container>
    </header>
  )
};





