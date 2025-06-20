import { Link } from "react-router-dom"
import images from "../../constants/images"

const MobileView = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-3">
            <img src={images.Logo} className="w-24 h-24" />
            <Link to='https://github.com/LadityaGogoi/ExamAce' className="text-lg text-white font-extrabold p-3 rounded bg-rose-400">Download Our Mobile App Now</Link>
        </div>
    )
}

export default MobileView