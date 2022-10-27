import './scss/App.scss'
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Spinner from './components/Spinner'

const Cart = React.lazy(() => import('./pages/Cart'))
const Order = React.lazy(() => import('./pages/Order'))
const FoolFood = React.lazy(() => import('./pages/FoolFood'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/cart"
          element={
            <Suspense fallback={<Spinner />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/cart/order"
          element={
            <Suspense fallback={<Spinner />}>
              <Order />
            </Suspense>
          }
        />
        <Route
          path="/food/:id"
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
