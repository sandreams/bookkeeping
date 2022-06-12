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
    return new Promise<RecordItem>((resolve, reject) => {
      let new_record = null
      try {
        const arr = (records.length && records.map((r) => r.id || 0)) || [0]
        const recordId = Math.max(...arr) + 1
        const timestamp = Math.round(new Date().getTime() / 1000)
        new_record = {
          ...record,
          id: recordId,
          amount: Number(record.amount),
          created: timestamp,
          updated: timestamp,
        }
        console.log('recordId :>> ', recordId)
        setRecords([...records, new_record])
      } catch (error) {
        reject(error)
      }
      resolve(new_record as RecordItem)
    })
  }
  return { records, addRecord }
}
