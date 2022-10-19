import './scss/App.scss'
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'

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
            <Suspense fallback={<div>Загрузка...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/logos-react/food/:id"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <FoolFood />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
