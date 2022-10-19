import React from 'react'
import { useSelector } from 'react-redux'
import { selectSort } from '../redux/filter/selectors'
import { setSort } from '../redux/filter/slice'
import { SortPropertyEnum } from '../redux/filter/types'
import { useAppDispatch } from '../redux/store'

type SortItem = {
  name: string
  sortProperty: SortPropertyEnum
}

type PopapClick = MouseEvent & {
  path: Node[]
}

const list: SortItem[] = [
  { name: 'Популярности ⬇', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'Популярности ⬆', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'Цене ⬇', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'Цене ⬆', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'Алфавиту ⬇', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'Алфавиту ⬆', sortProperty: SortPropertyEnum.TITLE_ASC },
]

export const Sort: React.FC = React.memo(() => {
  const dispatch = useAppDispatch()
  const sort = useSelector(selectSort)
  const sortRef = React.useRef<HTMLDivElement>(null)

  const [open, setOpen] = React.useState(false)

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj))
    setOpen(false)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopapClick
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div ref={sortRef} className="nav__sort">
      <div className="nav__sort-label">
        <div className="nav__label-title">Сортировать по:</div>
        <div onClick={() => setOpen(!open)} className="nav__label-subtitle">
          {sort.name}
        </div>
      </div>
      {open && (
        <div className="nav__sort-popup">
          <ul className="nav__popup-ul">
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={
                  sort.sortProperty === obj.sortProperty
                    ? 'nav__popup-li--active'
                    : ''
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
})
