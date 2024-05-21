import CatogoryContainer from "../Components/CatogoryContainer"
function Catogory() {
  return (
    <div className="">
        <div className="flex justify-center items-center">Catogory</div>
        <div className="grid grid-cols-3 gap-5 p-2">
            <CatogoryContainer />
            <CatogoryContainer />
            <CatogoryContainer />
            <CatogoryContainer />
            <CatogoryContainer />
            <CatogoryContainer />
            <CatogoryContainer />
            <CatogoryContainer />
        </div>
    </div>
  )
}

export default Catogory