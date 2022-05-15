import styled from 'styled-components'
import { fontColor, borderColor } from 'src/helper'
export const Wrapper = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  .section-slot {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
export const OutputSection = styled.div`
  height: 140px;
  display: flex;
  align-items: start;
  padding: 30px 0 30px 35px;
  flex-wrap: wrap;

  .output-container {
    width: 100%;
    height: 100%;
    border-bottom: 2px solid ${borderColor.green};
    .output-num {
      font-size: 48px;
      color: ${fontColor.num};
    }
    .output-cal {
      font-size: 14px;
      color: ${fontColor.light};
    }
  }
`
export const NumberPadSection = styled.div`
  background-color: #fff;
  height: 200px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr) 0.65fr;
  grid-auto-flow: column;
  gap: 2px 3px;
  .a-area {
    color: ${fontColor.normal};
    background: linear-gradient(121deg, #f5f5f7 18.26%, #fcfcfc 82.13%);
  }
  .b-area {
    grid-row: 3/-1;
    grid-column: 4;
    color: #fff;
    background: linear-gradient(130deg, #ff9a40 16%, #ffbd3b 88%);
    border-radius: 3px;
    padding: 0 20px;
    text-align: center;
  }
  .icon {
    fill: ${fontColor.normal};
    width: 24px;
    height: 24px;
  }
`
