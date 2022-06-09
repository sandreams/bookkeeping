import { IconProp, BrowserSpriteSymbol } from 'types'
import spriteSymbol from 'src/icons/remixicon.symbol.svg'
// let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
//   requireContext.keys().forEach(requireContext)
// try {
//   importAll(require.context('src/icons', true, /\.svg$/))
// } catch (error) {
//   console.log(error)
// }
const Icon = (props: IconProp) => {
  return (
    <svg className={`icon ${props.iconClass || ''}`}>
      <use
        xlinkHref={
          `#${(spriteSymbol as any as BrowserSpriteSymbol).id}_ri-` + props.name
        }
      ></use>
    </svg>
  )
}
export default Icon
