import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {
  return (
    <>
        <h3>{ category }</h3>
        <p> Parrafo de prueba </p>
    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string
}