import React, { useCallback } from 'react'
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../redux/filter/slice'

export const Search: React.FC = () => {
  const dispatch = useDispatch()

  const [value, setValue] = React.useState('')

  const inputRef = React.useRef<HTMLInputElement>(null)

  const onClickClear = () => {
    dispatch(setSearchValue(''))
    setValue('')
    inputRef.current?.focus()
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str))
    }, 900),
    [],
  )

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className="header__search">
      {value && (
        <img
          onClick={onClickClear}
          className="header__search-location"
          src="../img/svg/delite.svg"
          alt="location"
        />
      )}

      <input
        className="header__search-input"
        ref={inputRef}
        type="text"
        placeholder="Введите название блюда"
        onChange={onChangeInput}
        value={value}
      />
      {/* <ul className="header__input-autocomplete">
        {value && isOpen
          ? filtredAddress.map((address) => {
              return (
                <li
                  className="header__autocomplete-li"
                  onClick={itemClickHendler}
                  key={address.id}
                >
                  {address.title}
                </li>
              )
            })
          : null}
      </ul> */}
      <img
        className="header__search-icon"
        src="../img/svg/search.svg"
        alt="search"
      />
    </div>
  )
}
