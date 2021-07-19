import s from './Footer.module.css';
import classNames from 'classnames';


export default function Footer() {
    return <footer className={s.footer}>
             <div className={s.container}>
                <ul className={s.navList}>
                <li className={s.navItem}>
                    <p className={classNames([s.navItemTitle, s.phoneIcon].join(' '))}>PHONE</p>
                    <ul className={s.subMenuList}>
                        <li className={s.subMenuItem}>
                            <a href="tel:+43987456782">+43 (987) 345 - 6782</a>
                        </li>
                    </ul>
                </li>
                <li className={s.navItem}>
                    <p className={classNames([s.navItemTitle, s.addressIcon].join(' '))}>ADDRESS</p>
                     <ul className={s.subMenuList}>
                        <li className={s.subMenuItem}>
                            <address>
                            Cracker Inc.
                            10 Coverfield Lane
                            Berlin, IL 10928
                                Germany
                            </address>
                        </li>
                    </ul>
                </li>
                <li className={s.navItem}>
                    <p className={classNames([s.navItemTitle, s.shareIcon].join(' '))}>SHARE US</p>
                   <ul className={s.subMenuListShare}>
                        <li className={classNames([s.subMenuItem, s.socialLinkItem].join(' '))}>
                            <span className={s.pinterestIcon}></span>
                            <a href="https://www.pinterest.com/">https://www.pinterest.com/</a>
                        </li>
                        <li className={classNames([s.subMenuItem, s.socialLinkItem].join(' '))}>
                            <span className={s.facebookIcon}></span>
                            <a href="https://www.facebook.com/">https://www.facebook.com/</a>
                        </li>
                        <li className={classNames([s.subMenuItem, s.socialLinkItem].join(' '))}>
                            <span className={s.googleIcon}></span>
                            <a href="https://www.google.com/">https://www.google.com/</a>
                        </li>
                    </ul>
                </li>
                 </ul>
             </div>
          </footer>
}