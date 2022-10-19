import './scss/App.scss'
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Spinner from './components/Spinner'

const Cart = React.lazy(() => import('./pages/Cart'))
const FoolFood = React.lazy(() => import('./pages/FoolFood'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Routes>
      <Route path="/logos-react/" element={<MainLayout />}>
        <Route path="/logos-react/" element={<Home />} />
        <Route
          path="/logos-react/cart"
          element={
            <Suspense fallback={<Spinner />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/logos-react/food/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <FoolFood />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
