import { useParams } from 'react-router-dom'
import { useTags } from 'src/useTags'
import { TagItem } from 'types/money'
type Params = {
  id: string
}
const Tag: React.FC = () => {
  // const { id } = useParams<Params>()
  // const { tags } = useTags()
  // const currentTag = tags.find((t) => t.id.toString() === id) as TagItem
  // return (
  //   <div>
  //     <span>23123</span>
  //     {currentTag ? <span>{currentTag.tagName}</span> : null}
  //   </div>
  // )
  const handleCallFamilyToEat = () => {
    console.log("Hey fam! Food's ready!")
  }

  const handleCookEggs = () => {
    console.log('Molly is cooking fluffy eggs...')
  }

  const handleMakeRice = () => {
    console.log('Molly is making some delicious jasmine rice...')
  }

  const handleMixChicken = () => {
    console.log('Molly is mixing chicken with some yummy spicy sauce!')
  }
  return (
    <div className="im-a-parent" onClick={handleCallFamilyToEat}>
      <button className="im-a-child" onClick={handleCookEggs}>
        Cook Eggs
      </button>
      <button className="im-a-child" onClick={handleMakeRice}>
        Make Rice
      </button>
      <button className="im-a-child" onClick={handleMixChicken}>
        Mix Chicken
      </button>
    </div>
  )
}
export default Tag
