require('icons/tag.svg')
require('icons/money.svg')
require('icons/chart.svg')
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}
type IconProp = {
  name: string
}
const Icon = (props: IconProp) => {
  return (
    <svg className="icon" fill="#9f2121">
      <use xlinkHref={'#' + props.name}></use>
    </svg>
  )
}
export default Icon
