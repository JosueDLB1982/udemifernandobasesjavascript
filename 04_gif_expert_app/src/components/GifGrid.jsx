import PropTypes from 'prop-types'
import { GiftItem } from './GiftItem'
import { useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)
    console.log({images, isLoading})
   
    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'> 
                {
                    images.map(image => (
                        <GiftItem
                            key={image.id}
                            { ...image } // de este modo se expanden todas las props y se hacen disponibles en el componente <GiftItem/>>
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string
}