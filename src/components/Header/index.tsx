import { getMonth } from '../../Lib/Date';

export function Header() {
  
  const date : Date = new Date();
  const Day : string = date.getDate().toString()
  const Month : number = date.getMonth()

  return (
    <div>
        <h2>{`${Day} / ${getMonth(Month)}`}</h2>
    </div>
  )
}
