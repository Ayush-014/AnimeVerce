import SignIn from "../0.login/SigIn"
import HomeImage from "/public/brandbird.png"
import '/home/kartik/E/vs/React/koiNiHotaHai/route/src/style.css'

const Portfolio = () => {
    return(
        <div className="h-screen w-screen overflow-y-hidden bg-gradient-to-r from-[#65738B] to-[#252B33]">
            <div className="absolute -top-20 -left-48 h-max-screen scale-75 HomeBgImage">
                <img src={HomeImage} alt="Home Image"/>
            </div>
            <div className="absolute right-5 top-44">
                <SignIn />
            </div>
        </div>
    )
}

export default Portfolio