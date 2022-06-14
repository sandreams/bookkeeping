import { useState } from 'react'
import { Loading, ActivityIndicator } from 'zarm'
import styled from 'styled-components'
import { RecordGroupedByDay } from 'types/money'
import { useRecords } from 'src/hooks/useRecords'
import { fontColor } from 'src/helper'
import Icon from 'src/components/Icon'
import { useUpdate } from 'src/hooks/useUpdate'
const Wrapper = styled.section`
  background: #fff;
  .empty-content {
    min-height: 200px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${fontColor.light};
  }
  .group-list > li {
    padding: 10px 20px;
    border-bottom: 1px solid #efeff0;
  }
  .group-header {
    display: flex;
    align-items: flex-end;
    .unit-date {
      font-size: 18px;
      color: ${fontColor.normal};
      font-weight: bold;
      margin-right: 3px;
      min-width: 1.2em;
      text-align: right;
    }
    .unit-day {
      font-size: 12px;
      color: ${fontColor.light};
    }
    .unit-amount {
      margin-left: auto;
      font-size: 12px;
      color: ${fontColor.light};
    }
  }
  .group-content {
    > li:not(:last-child) {
      border-bottom: 1px solid #efeff0;
    }
  }
  .record-item {
    padding: 10px 0;
    display: flex;
    align-items: center;
    .record-tag-icon {
      width: 28px;
      height: 28px;
    }
    .tag-note {
      margin-left: 15px;
      &--tag {
        font-size: 16px;
        color: ${fontColor.normal};
        line-height: 1.5;
      }
      &--note {
        font-size: 12px;
        color: ${fontColor.light};
        line-height: 1.5;
      }
    }
    .amount {
      margin-left: auto;
      font-size: 18px;
      &--income {
        color: #f0523b;
      }
      &--expend {
        color: ${fontColor.num};
      }
    }
  }
`
const RecordsSection = () => {
  const { getGroupedByDay } = useRecords()
  const [groupedRecords, setGroupedRecords] = useState<RecordGroupedByDay[]>([])
  useUpdate(
    () => {
      Loading.show({ content: <ActivityIndicator size="lg" />, stayTime: 1000 })
      getGroupedByDay().then((data) => {
        setGroupedRecords(data)
      })
    },
    [getGroupedByDay],
    1
  )
  return (
    <Wrapper>
      {groupedRecords.length ? (
        <ul className="group-list">
          {groupedRecords.map((group) => (
            <li key={group.dateformat}>
              <div className="group-header">
                <span className="unit-date">{group.date}</span>
                <span className="unit-day">
                  日 /{' '}
                  {group.offset < 7
                    ? group.day
                    : `${group.month} 月 ${group.year}`}
                </span>
                <span className="unit-amount">
                  {(group.income - group.expend > 0 ? '+' : '-') +
                    Math.abs(group.income - group.expend).toFixed(2)}
                </span>
              </div>
              <ul className="group-content">
                {group.records.map((record) => {
                  return (
                    <li key={record.id}>
                      <div className="record-item">
                        <Icon
                          name={record.tag.iconName as string}
                          iconClass="record-tag-icon"
                        />
                        <div className="tag-note">
                          <p className="tag-note--tag">{record.tag.tagName}</p>
                          <p className="tag-note--note">{record.note}</p>
                        </div>
                        <span className={'amount amount--' + record.category}>
                          {record.amount.toFixed(2)}
                        </span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-content">
          <span>还没有记过账</span>
        </div>
      )}
    </Wrapper>
  )
}
export default RecordsSection
