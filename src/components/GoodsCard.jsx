const GoodsCard = ({ item, id }) => {
    return (
        <div lassName="forShad h-[480px] w-[230px] ss:w-[250px] hover:shadow-lg mb-[50px] rounded-[10px] select-none ">

            <div style={{backgroundImage: `url(${item?.media[0]})`}} className={`cardImg w-[100%] h-[300px] bg-cover bg-cover bg-center p-[10px] rounded-[10px] overflow-hidden flex justify-end items-start bg-[red]  `}>
                <img className="w-[26px]" src="/img/likeImg.svg" alt="" />
            </div>

            <div className="px-3">
                <p className="text-[16px] font-medium mt-[20px]">{item?.title}</p>

                <div className="flex items-center mt-[15px]">
                    <img src="/img/starImg.svg" alt="" />
                    <p className="text-[#ACACAC]">{item?.rating} (2 оценки)</p>
                </div>

                <div className="bg-[#FFFF00] rounded-[4px] w-[160px] text-center mt-[20px]">
                    <p className="font-medium ml-[10px] mr-[10px]">157 560 сум/мес</p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <s className="text-[#ACACAC] text-[10px] font-medium">1 357 000 сум</s>
                        <p className="text-[#000] text-[14px] font-medium">{item?.price}сум</p>
                    </div>
                    <div className="w-[35px] h-[35px] rounded-[50%] border-[2px] border-[#ACACAC] flex items-center justify-center ">
                        <img src="/img/forBuyImg.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoodsCard;