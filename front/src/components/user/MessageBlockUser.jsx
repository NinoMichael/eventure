import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { Avatar } from "primereact/avatar"

const MessageBlockUser = ({ message, isUser, showAvatar, msgItems, msgOption, isHovered, onMouseEnter, onMouseLeave }) => {

    return isUser ? (
        <motion.div
            className="flex justify-end space-x-4 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {isHovered && (
                <i
                    className="pi pi-ellipsis-v cursor-pointer mt-6 text-white"
                    title="Option"
                    onMouseLeave={onMouseLeave}
                ></i>
            )}
            <div className="px-3 py-1 rounded-lg bg-purpleCustom text-white max-w-xs" onMouseEnter={onMouseEnter}>
                <p className="text-sm">{message}</p>
            </div>
        </motion.div>
    ) : (
        <motion.div
            className={`flex ${showAvatar ? "justify-start space-x-4" : "justify-start ml-12"} mb-2`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {showAvatar && <Avatar label="T" className="bg-blackAccent" shape="circle" />}
            <div className="px-3 py-1 rounded-lg bg-blackAccent text-white max-w-xs" onMouseEnter={onMouseEnter}>
                <p className="text-sm">{message}</p>
            </div>
            {isHovered && (
                <i
                    className="pi pi-ellipsis-v cursor-pointer mt-6 text-white"
                    title="Option"
                    onMouseLeave={onMouseLeave}
                ></i>
            )}

        </motion.div>
    )
}


MessageBlockUser.propTypes = {
    message: PropTypes.string.isRequired,
    isUser: PropTypes.bool.isRequired,
    msgItems: PropTypes.arrayOf.isRequired,
    showAvatar: PropTypes.bool,
    isHovered: PropTypes.bool.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    msgOption: PropTypes.shape({
        current: PropTypes.object,
    }).isRequired,
}

export default MessageBlockUser
