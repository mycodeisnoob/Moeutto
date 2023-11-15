import TodayTemp from "../atoms/TodayTemp";
import TodayDate from "../atoms/TodayDate";
import TodayTip from "../atoms/TodayTip";


const MainWeather = ({ weatherListData }) => {
    return (
        <>
        <div className="relative bg-[#FFD8E5] rounded-2xl shadow-md my-4">
            <div className="p-4 mt-16 flex flex-col justify-end items-end">
                <TodayDate />
                <TodayTemp weatherListData={weatherListData} />
            </div>
            <div className="text-[#131313] font-bold text-AppBody1 p-4">오늘은 날씨가 흐리고 <br/> 바람이 많이 붑니다</div>
            <img src="/images/27.png" className="w-1/2 absolute -top-14"/>
        </div>
            <div className="bg-white rounded-xl shadow-md p-3 relative">
                <img src="/images/light.png" className="w-[10%] absolute -top-6 right-4" />
                <TodayTip content="보온에 신경쓰세요!" />
                <TodayTip content="저녁에 추워요. 아우터를 챙기세요!" />
            </div>
        </>
    )
}

export default MainWeather;