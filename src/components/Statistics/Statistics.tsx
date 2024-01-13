import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';
import { FC } from 'react';

const icons = [
  <FaRegThumbsUp key="0" />,
  <MdPeople key="1" />,
  <MdOutlineProductionQuantityLimits key="2" />,
  <GiTreeDoor key="3" />,
];
export interface IStat {
  id: string,
  title: string,
  total: number,
}
interface IStatistics {
  title?: string,
  stats: IStat[]
}


export const Statistics : FC<IStatistics> = ({ title, stats }) => {
  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map(({ id, total, title }, indx) => (
          <StatisticsItem
            key={id}
            total={total}
            title={title}
            icon={icons[indx]}
          />
        ))}
      </ul>
    </>
  );
};
