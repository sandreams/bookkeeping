import { useCallback, useEffect, useState } from 'react'
import { RecordItem, MoneyDataSet, RecordGroupedByDay } from 'types/money'
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
  type RecordMap = {
    [name: string]: RecordGroupedByDay
  }
  const getGroupedByDay: () => Array<RecordGroupedByDay> = useCallback(() => {
    // Expensive Calculation
    console.log('exec Expensive Calculation')
    const recordMap: RecordMap = {}
    const daysNameArray = [
      '周日',
      '周一',
      '周二',
      '周三',
      '周四',
      '周五',
      '周六',
    ]
    for (const record of records) {
      const datetime = new Date(1000 * record.created)
      const now_time = Math.round(new Date().getTime() / 1000)
      const date = datetime.getDate()
      const day = daysNameArray[datetime.getDay()]
      const month = datetime.getMonth() + 1
      const year = datetime.getFullYear()
      const dateformat = `${month}-${date}`
      const key = `${year}-${month}-${date}`
      const offset = Math.floor((now_time - record.created) / (60 * 60 * 24))
      if (recordMap.hasOwnProperty(key)) {
        recordMap[key].records.push(record)
      } else {
        recordMap[key] = {
          date,
          day,
          month: month,
          year,
          dateformat,
          timestamp: record.created,
          income: 0,
          expend: 0,
          offset, // 用于排序
          records: [record],
        }
      }
    }
    // 计算 expend 和 income 的值
    return Object.values(recordMap)
      .sort((a, b) => a.offset - b.offset)
      .map((r) => {
        return {
          ...r,
          income: r.records
            .filter((v) => v.category === 'income')
            .reduce((pre, cur) => pre + cur.amount, 0),
          expend: r.records
            .filter((v) => v.category === 'expend')
            .reduce((pre, cur) => pre + cur.amount, 0),
        }
      })
  }, [records])
  return { records, addRecord, getGroupedByDay }
}
