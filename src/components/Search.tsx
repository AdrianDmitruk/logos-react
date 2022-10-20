import React, { useCallback } from 'react'
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../redux/filter/slice'

import search from '../assets/img/svg/search.svg'
import delite from '../assets/img/svg/delite.svg'

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
          src={delite}
          alt="delite"
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
      <img className="header__search-icon" src={search} alt="search" />
    </div>
  )
}
