import { React} from 'react';
import Section from '../../components/common/Section';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import background_1 from '../../images/background-1.jpg';
import s from './Homepage.module.css';
import FormConstructor from '../../components/FormConstructor';


const HomePage = () =>  {

    return (
      <main className="App">

        { /* Section Hero */}

        <Section background={background_1} paddingBottom={185} paddingTop={120}>
          <Container>
            <h1 className={s.titleHero}>Moustly Tastes with freshes</h1>
            <div className={s.descriptionContainer}>
              <p className={s.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum inventore dolorem autem aspernatur exercitationem,
                dolores recusandae perspiciatis officiis repellendus asperiores!
                <span className={s.desrcHeroBackground}></span>
              </p>
            </div>
            <div className={s.buttonContainer}>
              <Button text='TEST IT'/>
            </div>
          </Container>
        </Section>

        {/* Section About */}
        <div className={s.backgroundContainer}>
          
        <Section  paddingBottom={75} paddingTop={120}>
          
          <Container>
              <h2 className={s.titleAbout}>About Cracker</h2>
              <div className={s.descrAboutContainer}>
                 <p className={s.descrAbout}>
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim beatae at itaque hic accusantium m
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim beatae at itaque hic accusantium m
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim beatae at itaque hic accusantium m
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim beatae at itaque hic accusantium mv
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim beatae at itaque hic accusantium m
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim beatae at itaque hic accusantium m
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim beatae at itaque hic accusantium mv
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim beatae at itaque hic accusantium m
                   <span className={s.desrcAboutBackground}></span>
                 </p>
            </div>
          </Container>
          </Section>
          
          <Section  paddingBottom={75} paddingTop={120}>
          
          <Container>
              <h2 className={s.titleConstructor}>Cracker Constructor</h2>
              <FormConstructor/>
          </Container>
        </Section>
      </div>
      </main>
    );
  }


export default HomePage;