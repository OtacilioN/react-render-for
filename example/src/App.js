import React from 'react'
import RFor from 'react-render-for'

const data = [
  'Elemento 1',
  'Elemento 2',
  'Elemento 3',
  'Elemento 4',
  'Elemento 5',
  'Elemento 6',
  'Elemento 7',
  'Elemento 8',
  'Elemento 9',
  'Elemento 10',
  'Elemento 11',
  'Elemento 12',
  'Elemento 13',
  'Elemento 14',
  'Elemento 15'
]

const Box = ({ item }) => (
  <div className='BoxStyle'>
    <h6>{item}</h6>
  </div>
)

const App = () => {
  return (
    <div className='AppWrapper'>
      <RFor data={data} renderItem={(item) => <Box item={item} />} />
    </div>
  )
}

export default App
