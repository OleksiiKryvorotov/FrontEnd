import React from 'react'
import s from './style.module.css'


//3.Создать комп. UserItem, который содержит структуру:
// <div>
//     <p>имя</p>
//     <p>Фамилия</p>
// </div> 
//использ. UserItem при генерации карточек пользователей вместо параграфа:

export default function UserItem
({id, first_name, last_name, remove, avatar, age, incrAge }) {
  return (
    <div className={s.item}>

      {/* Добавить аватарку пользователя: */}
      <img src={avatar} alt={`${first_name} ${last_name}`}/>
      {/* -------------------- */}
    <p>{first_name}</p>
    <p>{last_name}</p>

    {/* 5.вывести возраст в отдельном параграфе */}

    <p>{age}</p>

     {/* 4. Добавить в UsersContainer ф-цию, которая получает id пользователя и удаляет его из стейка. Передать эту ф-цию через пропсы в UserItem и повесить вызов этой ф-ции при нажатии на кнопку "Удалить": */}
    <button onClick={() => remove(id)}>Удалить</button>
    {/* ------------------------------ */}

    {/* 6. Добавить кнопку + , при нажатии на котрую возраст должен увеличиваться на 1 */}

    <button onClick={() => incrAge(id)}>+</button>  
    {/* ------------------------------------  */}
</div>
  )
}
