const Header = () => {
    return (
        <div className="w-full flex items-center justify-between py-2 px-2 max-w-[1920px] m-auto">

            <img src="/img/uzumLogo.svg" alt="" />

            <div className="bg-[#EBEBFAFF] h-[45px] w-[120px] ml-[30px] rounded-[4px] flex items-center justify-center">
                <img src="/img/catalogImg.svg" alt="" />
                <p className="text-[#3333CC] ml-[10px]">Каталог</p>
            </div>

            <form className="flex items-center h-[45px] ml-[30px] border-[1px] border-[rgba(118, 121, 127, 0.3)] rounded-[4px] px-2">

                <input type="text" className="w-[500px] h-[30px] text-[#757575]" placeholder="Искать товары и категории" />
                <img className="w-[20px]" src="/img/searchImg.svg" alt="" />

            </form>

            <div className=" h-[45px] w-[120px] ml-[30px] rounded-[4px] flex items-center justify-center">
                <img src="/img/profImg.svg" alt="" />
                <p className="text-[#000] ml-[10px]">Войти</p>
            </div>

            <div className=" h-[45px] w-[120px] ml-[30px] rounded-[4px] flex items-center justify-center">
                <img src="/img/likeImg.svg" alt="" />
                <p className="text-[#000] ml-[10px]">Избранное</p>
            </div>

            <div className=" h-[45px] w-[120px] ml-[30px] rounded-[4px] flex items-center justify-center">
                <img src="/img/basketImg.svg" alt="" />
                <p className="text-[#000] ml-[10px]">Корзина</p>
            </div>

        </div>
    );
}

export default Header;