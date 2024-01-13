
import { FC } from 'react';
import { ForbesListItem } from '../ForbesListItem/ForbesListItem';
import style from './ForbesList.module.css';

export interface IItem {
  id: string,
  name: string,
  avatar: string,
  capital:number,
  isIncrease: boolean
}
interface IForbesList {
  list: IItem[]
}


export const ForbesList: FC<IForbesList> = ({ list }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {list.map(({ id, name, avatar, capital, isIncrease }) => (
          <ForbesListItem
            key={id}
            name={name}
            avatar={avatar}
            capital={capital}
            isIncrease={isIncrease}
          />
        ))}
      </ul>
    </div>
  );
};
