import { useEffect, useState } from 'react'
import { RecordItem, MoneyDataSet } from 'types/money'
import { useUpdate } from './useUpdate'
export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  useEffect(() => {
    //首次加载时读取数据
    const recordsRaw = localStorage.getItem('records')
    if (recordsRaw) {
      setRecords(JSON.parse(recordsRaw) as RecordItem[])
    }
  }, [])
  useUpdate(() => {
    localStorage.setItem('records', JSON.stringify(records))
  }, [records])
  const addRecord = (record: MoneyDataSet) => {
    const arr = (records.length && records.map((r) => r.id || 0)) || [0]
    const recordId = Math.max(...arr) + 1
    console.log('recordId :>> ', recordId)
    setRecords([
      ...records,
      { ...record, id: recordId, amount: Number(record.amount) },
    ])
  }
  return { records, addRecord }
}
