import { useLocation, useHistory, Link } from 'react-router-dom'
import styled from 'styled-components'
import queryString from 'query-string'
import Layout from 'src/components/Layout'
import Icon from 'src/components/Icon'
import { useTags } from 'src/useTags'
import { useTag } from 'src/useTag'
import { TagItem, TagData } from 'types/money'
import { svgColor, fontColor, bgColor } from 'src/helper'
import { useEffect, useRef, useState } from 'react'

const TopBar = styled.header`
  background: #fff;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 12px 16px;
  .header-name {
    margin: 0 auto;
    color: ${fontColor.normal};
    font-size: 16px;
  }
  .top-icon {
    height: 24px;
    width: 24px;
    &--back {
      fill: ${svgColor.normal};
    }
    &--ok {
      fill: ${svgColor.active};
    }
  }
`
const TagName = styled.section`
  padding: 42px 20px;
  background: #fcfcfc;
  .inner-content {
    .input-name {
      color: ${fontColor.light};
      font-size: 13px;
      input {
        width: 100%;
        font-size: 20px;
        margin-top: 20px;
        color: ${fontColor.normal};
      }
    }
  }
`
const TagIcon = styled.section`
  background: #fff;
  height: 50px;
  padding: 12px 16px;
  .tag-icon-anchor {
    height: 100%;
    display: flex;
    align-items: center;
    .icon-prefix {
      width: 20px;
      height: 20px;
      fill: ${svgColor.light};
    }
    .icon-after {
      width: 24px;
      height: 24px;
      fill: ${svgColor.light};
    }
    .tag-icon {
      width: 30px;
      height: 30px;
      fill: ${svgColor.normal};
    }
    span {
      margin-right: auto;
      color: ${fontColor.light};
      font-size: 16px;
      padding: 0 8px;
    }
  }
`
const DelBtnWrapper = styled.div`
  flex: 1;
  position: relative;
  .btn-del {
    position: absolute;
    bottom: 15%;
    padding: 12px 16px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    color: #fff;
    background: ${bgColor.danger};
    border-radius: 4px;
  }
`
type stateType = TagData | undefined
const resolvePath = (path: string) => {
  const match = path.match(/(?:[a-z]+)$/g)
  return match && match.length ? match[match.length - 1] : ''
}

const Tag: React.FC = (props) => {
  const { tags } = useTags()
  const history = useHistory()
  const { search, state, pathname } = useLocation<stateType>()
  useEffect(() => {
    console.log('path change')
    if (['new', 'edit'].indexOf(resolvePath(pathname)) < 0) {
      // 返回上一级
      alert('操作错误，请重试！')
      history.goBack()
    }
  }, [pathname, history])
  const mode = resolvePath(pathname)
  const currentTag =
    (state as TagItem) ||
    (tags.find(
      (t) => t.id.toString() === queryString.parse(search).id
    ) as TagItem)
  if (mode === 'edit' && !currentTag) {
    alert('找不到条目！')
    history.goBack()
  }
  const { tagData, setTag } = useTag(currentTag)
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (refInput.current) {
      setTag({ ...tagData, tagName: refInput.current.value })
    }
  }
  useEffect(() => {
    if (refInput.current) {
      refInput.current.focus()
    }
  }, [refInput])
  const handleRemove = () => {
    if (window.confirm('是否确认删除')) {
      // 删除操作
    }
  }

  return (
    <Layout>
      <TopBar>
        <a href="#!" onClick={() => history.goBack()}>
          <Icon name="back" iconClass="top-icon top-icon--back"></Icon>
        </a>
        <span className="header-name">编辑标签</span>
        <a href="#!">
          <Icon name="ok" iconClass="top-icon top-icon--ok"></Icon>
        </a>
      </TopBar>
      <TagName>
        <div className="inner-content">
          <label className="input-name">
            分类名称
            <input
              ref={refInput}
              type="text"
              defaultValue={tagData.tagName}
              onBlur={onBlur}
            />
          </label>
        </div>
      </TagName>
      <TagIcon>
        <Link
          to={{ pathname: '/tag/icons', state: tagData }}
          className="tag-icon-anchor"
        >
          <Icon name="图标" iconClass="icon-prefix" />
          <span style={{ marginRight: 'auto' }}>图标</span>
          <Icon name={tagData.tagName as string} iconClass="tag-icon" />
          <Icon name="arrow-right" iconClass="icon-after" />
        </Link>
      </TagIcon>
      <DelBtnWrapper>
        {mode === 'edit' ? (
          <button className="btn-del" onClick={handleRemove}>
            删除标签
          </button>
        ) : null}
      </DelBtnWrapper>
    </Layout>
  )
}
export default Tag
