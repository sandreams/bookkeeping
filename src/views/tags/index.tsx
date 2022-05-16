import { useState } from 'react'
import Layout from 'src/components/Layout'
import NewTagSection from './NewTagSection'
import SearchSection from './SearchSection'
import TagListSection from './TagListSection'
const Money = () => {
  const [query, setQuery] = useState('')
  return (
    <Layout title="标签">
      <SearchSection query={query} onChange={(query) => setQuery(query)} />
      <NewTagSection />
      <TagListSection query={query} />
    </Layout>
  )
}
export default Money
