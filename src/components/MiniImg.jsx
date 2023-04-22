const MiniImg = ({ item }) => {
    return (
        <>
            <img style={{ backgroundImage: `url(${item?.media[0]})` }} className="w-[80px] h-[100px] bg-[red] mb-[10px] rounded-[8px] bg-no-repeat bg-center bg-cover"></img>
        </>
    );
}

export default MiniImg;