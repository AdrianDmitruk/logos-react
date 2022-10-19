import React from 'react'
import { Outlet } from 'react-router-dom'

import { Sort, Categories, Header, Footer } from '../components'

import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../redux/filter/selectors'
import { setCategoyId } from '../redux/filter/slice'

const MainLayout: React.FC = () => {
  const { categoryId } = useSelector(selectFilter)
  const dispatch = useDispatch()

  const onClickCategory = React.useCallback((i: number) => {
    dispatch(setCategoyId(i))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="page__body">
      <div className="site-container">
        <Header />
        <main className="main">
          <nav className="nav">
            <div className="nav__container">
              <Categories
                value={categoryId}
                onClickCategory={onClickCategory}
              />
              <Sort />
            </div>
          </nav>
          <Outlet />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default MainLayout
