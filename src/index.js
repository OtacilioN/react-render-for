const RFor = ({ data, renderItem }) => {
  return data.map((item) => renderItem(item))
}

export default RFor
