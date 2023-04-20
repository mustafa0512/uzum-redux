import { useSelector } from "react-redux";


const Liked = () => {

    const liked_id = useSelector(state => state.liked.data_id)
    const data = useSelector(state => state.goods.data)
    const fillteredId = data.map(item => item.id)
    const fillId = data.filter(item => item.id == fillteredId)

    // console.log(liked_id.includes(fillteredId));
    // console.log(fillteredId);
    // console.log(liked_id);
    // console.log(fillId);

    if (liked_id === []) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                    <img className="m-auto mb-[20px]" src="/img/hearts.png" alt="" />
                    <span className="font-bold text-[20px]  ss:text-[24px] md:text-[30px]">Добавьте то, что понравилось</span>
                    <p className="  text-[12px]  ss:text-[14px] md:text-[16px] mt-[20px] w-[95%] ml-[10px]">Перейдите на главную страницу и нажмите на ♡ в товаре На главную</p>
                </div>
            </div>
        );
    } else {
        console.log('vv');
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
                <img className="m-auto mb-[20px]" src="/img/hearts.png" alt="" />
                <span className="font-bold text-[20px]  ss:text-[24px] md:text-[30px]">Добавьте то, что понравилось</span>
                <p className="  text-[12px]  ss:text-[14px] md:text-[16px] mt-[20px] w-[95%] ml-[10px]">Перейдите на главную страницу и нажмите на ♡ в товаре На главную</p>
            </div>
        </div>
    );
}

export default Liked;