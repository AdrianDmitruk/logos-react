import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const FoolFood: React.FC = () => {
  const [food, setFood] = React.useState<{
    title: string
    imageUrl: string
  }>()
  const { id } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchFood() {
      try {
        const { data } = await axios.get(
          'https://6314cc32fa82b738f74e60f3.mockapi.io/items/' + id,
        )
        setFood(data)
      } catch (error) {
        alert('Ошиюка получения еды')
        navigate('/')
      }
    }
    fetchFood()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!food) {
    return <>Загрузка</>
  }

  return (
    <>
      <div>{food.title}</div>
      {/* <img src={food.imageUrl} alt="food" /> */}
    </>
  )
}

export default FoolFood
