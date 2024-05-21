import FeaturedContainer from "../Components/FeaturedContainer"

function Featured() {
  return (
    <div className="mt-5">
        <div className="flex overflow-x-auto gap-3 p-2">
            <FeaturedContainer />
            <FeaturedContainer />
            <FeaturedContainer />
            <FeaturedContainer />
            <FeaturedContainer />
            <FeaturedContainer />
            <FeaturedContainer />
        </div>
    </div>
  )
}

export default Featured