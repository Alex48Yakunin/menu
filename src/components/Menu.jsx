import {NavLink} from 'react-router-dom';

export default function Menu(){
  return (
    <nav className="menu">
      <NavLink exact to="/" activeClassName="menu__item-active" className="menu__item">Главная</NavLink>
      <NavLink exact to="/drift" activeClassName="menu__item-active" className="menu__item">Дрифт-такси</NavLink>
      <NavLink exact to="/timeattack" activeClassName="menu__item-active" className="menu__item">Time Attack</NavLink>
      <NavLink exact to="/forza" activeClassName="menu__item-active" className="menu__item">Forza Karting</NavLink>
  </nav>
  )
}