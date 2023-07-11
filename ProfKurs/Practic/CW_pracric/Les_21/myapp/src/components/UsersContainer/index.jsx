import React, { useState } from 'react'
import { users } from './users'
import UserItem from '../UserItem';
import s from './style.module.css'

export default function UsersContainer() {
    //2.Создать state usersList и пройтись по нему map для каждого пользователя создать параграф с его именем:
    const [usersList, setUsersList] = useState(users)
    // console.log(users);

    // 4. Добавить в UsersContainer ф-цию, которая получает id пользователя и удаляет его из стейка. Передать эту ф-цию через пропсы в UserItem и повесить вызов этой ф-ции при нажатии на кнопку "Удалить":

    const remove  = (delId) => {
      const newArr = usersList.filter(({id}) => id !==delId)
      setUsersList(newArr)
    }   

    // А можно и в одну строчку:

    // const remove_1 = (delId) => setUsersList(usersList.filter(({id}) => id !==delId))

    // --------------------------------------

     // 6. Добавить кнопку + , при нажатии на котрую возраст должен увеличиваться на 1

     const incrAge = (incrId) => {
      const target = usersList.find(({id}) => id === incrId)
      target.age++
      // Пересобираем массив:
      setUsersList([...usersList])
    }

    // -----------------------------------

  return (
    <div className={s.container}>
        {
            //для 2-го задания:
            //  usersList.map(item => <p key={item.id}>{item.first_name}</p>)
            //------------------------------

            //для 3-го задания:
         usersList.map(item => <UserItem  key={item.id} {...item} remove={remove} incrAge={incrAge}/>)
            //-----------------------------
        }
    </div>
  )
}




