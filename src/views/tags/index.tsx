import Layout from 'src/components/Layout'
import NewTagSection from './NewTagSection'
import SearchSection from './SearchSection'
import TagListSection from './TagListSection'
const Money = () => (
  <Layout title="标签">
    <SearchSection></SearchSection>
    <NewTagSection></NewTagSection>
    <TagListSection></TagListSection>
  </Layout>
)
export default Money
