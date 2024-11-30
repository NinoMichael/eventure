import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

const CardCategory = ({ categoryEvent }) => {
    const navigate = useNavigate()

    return (
        <div className="font-poppins w-64 h-auto relative cursor-pointer" onClick={() => navigate('/explore/category-event')}>
            <div className="relative rounded-t overflow-hidden">
                <img
                    alt="Card"
                    src={categoryEvent.imgCategory}
                    className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <h3 className="text-white absolute bottom-2 left-2 font-semibold z-10">
                    {categoryEvent.categorie}
                </h3>
            </div>
        </div>
    )
}

CardCategory.propTypes = {
    categoryEvent: PropTypes.shape({
        categorie: PropTypes.string.isRequired,
        imgCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    }).isRequired,
}

export default CardCategory
