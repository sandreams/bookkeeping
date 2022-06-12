import { useEffect, useState } from 'react'
import { RecordItem } from 'types/money'
export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  useEffect(() => {
    //首次加载时读取数据
    const recordsRaw = localStorage.getItem('records')
    if (recordsRaw) {
      setRecords(JSON.parse(recordsRaw) as RecordItem[])
    }
  }, [])
  const addRecord = (record: RecordItem) => {
    setRecords([...records, record])
  }
  return { records, addRecord }
}
