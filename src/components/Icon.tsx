import { IconProp } from 'types'
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
      <use xlinkHref={'#icon-' + props.name}></use>
    </svg>
  )
}
export default Icon
