import Layout from 'src/components/Layout'
import RecordsSection from './RecordsSection'
import ChartSection from './ChartSection'
// const Wrapper = styled.div``
const Statistics = () => {
  return (
    <Layout title="统计">
      <ChartSection />
      <RecordsSection />
    </Layout>
  )
}
export default Statistics
