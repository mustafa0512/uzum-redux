const GoodsCard = () => {
    return (
        <div className="forShad h-[480px] w-[230px] ss:w-[250px] hover:shadow-lg mb-[50px] rounded-[10px] ">

            <div className="cardImg">
                <img className="w-[26px]" src="/img/likeImg.svg" alt="" />
            </div>

            <div className="px-3">
                <p className="text-[16px] font-medium mt-[20px]">Смартфон vivo Y22, 4/64 ГБ</p>

                <div className="flex items-center mt-[15px]">
                    <img src="/img/starImg.svg" alt="" />
                    <p className="text-[#ACACAC]">5.0 (2 оценки)</p>
                </div>

                <div className="bg-[#FFFF00] rounded-[4px] w-[160px] text-center mt-[20px]">
                    <p className="font-medium ml-[10px] mr-[10px]">157 560 сум/мес</p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <s className="text-[#ACACAC] text-[10px] font-medium">1 357 000 сум</s>
                        <p className="text-[#000] text-[14px] font-medium">1 313 000 сум</p>
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