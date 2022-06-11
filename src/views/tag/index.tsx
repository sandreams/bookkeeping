import { useLocation, useHistory, Link } from 'react-router-dom'
import styled from 'styled-components'
import queryString from 'query-string'
import Layout from 'src/components/Layout'
import Icon from 'src/components/Icon'
import { useTags } from 'src/useTags'
import { useTag } from 'src/useTag'
import { TagItem, TagData } from 'types/money'
import { stateType } from 'types/tags'
import { svgColor, fontColor, bgColor } from 'src/helper'
import React, { useEffect, useRef } from 'react'

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
      width: 24px;
      height: 24px;
      fill: ${svgColor.light};
      margin-top: -2px;
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
const resolvePath = (path: string) => {
  const match = path.match(/(?:[a-z]+)$/g)
  return match && match.length ? match[match.length - 1] : ''
}

const Tag: React.FC = (props) => {
  const { findTag, createTag, updateTag } = useTags()
  const history = useHistory()
  const { search, state, pathname } = useLocation<stateType>()
  useEffect(() => {
    if (['new', 'edit'].indexOf(resolvePath(pathname)) < 0) {
      // 返回上一级
      alert('操作错误，请重试！')
      history.goBack()
    }
  }, [pathname, history])
  const mode = resolvePath(pathname)
  const currentTag =
    (state as TagItem) || findTag(queryString.parse(search).id as string)
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
  const goSelectIcon = (e: React.MouseEvent) => {
    e.preventDefault()
    history.replace({
      pathname: '/tag/icons',
      state: { ...tagData, oldPath: pathname },
    })
  }
  const onSaveTag = (e: React.MouseEvent) => {
    e.preventDefault()
    // 校验名称
    if (!tagData.tagName) {
      alert('标签名不能为空！')
      return
    }
    // 校验图标
    if (!tagData.iconName) {
      alert('必须选择一个图标！')
      return
    }
    console.log('mode :>> ', mode)
    if (mode === 'edit') {
      updateTag(tagData as TagItem)
    } else {
      createTag(tagData as TagItem)
    }
    // 保存成功，返回上一级
    history.goBack()
  }
  return (
    <Layout>
      <TopBar>
        <a href="#!" onClick={() => history.goBack()}>
          <Icon name="arrow-left" iconClass="top-icon top-icon--back"></Icon>
        </a>
        <span className="header-name">编辑标签</span>
        <a href="#!" onClick={onSaveTag}>
          <Icon name="check" iconClass="top-icon top-icon--ok"></Icon>
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
        <a
          href="javascript;"
          onClick={goSelectIcon}
          className="tag-icon-anchor"
        >
          <Icon name="tubiao" iconClass="icon-prefix" />
          <span style={{ marginRight: 'auto' }}>图标</span>
          <Icon name={tagData.iconName as string} iconClass="tag-icon" />
          <Icon name="arrow-right" iconClass="icon-after" />
        </a>
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
