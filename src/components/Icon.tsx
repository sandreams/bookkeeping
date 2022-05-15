let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('src/icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}
type IconProp = {
  name: string
}
const Icon = (props: IconProp) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name}></use>
    </svg>
  )
}
export default Icon
