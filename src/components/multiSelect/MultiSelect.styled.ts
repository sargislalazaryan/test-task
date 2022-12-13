import styled from 'styled-components'

export const MultiSelectWrapper = styled.div`
  width: 450px;
  background-color: #FAFAFA;
  border-radius: 8px;
  box-shadow: 0 0 2px #FAFAFA;
`

export const InputBadgesBlock = styled.div`
  position: relative;
`

export const BadgesBlock = styled.div`
  padding: 10px;
  display: flex;
  flex-flow: wrap;
`

export const Badge = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  padding: 4px 8px;
  margin: 0 6px 6px 0;
  border-radius: 5px;
  border: 1px solid #333;
  
  img {
    margin-left: 6px;
    cursor: pointer;
  }
`

export const InputWrapper = styled.div`
  padding: 0 10px;

  input {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    border-bottom: 1px solid #333;
  }
`
export const DropdownBlock = styled.div`
  position: absolute;
  width: inherit;
  max-height: 250px;
  background-color: #FAFAFA;
  border-radius: 8px;
  box-shadow: 0 0 2px #FAFAFA;
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 10px;
`

export const Option = styled.div`
  padding: 5px 10px;
  margin: 5px 0;
  border-radius: 8px;
  
  &.selected {
    background-color: #333;
    color: #FAFAFA;
  }

  &:hover {
    background-color: rgba(51,51,51, 0.5);
    color: #FAFAFA;
    cursor: pointer;
  }
`
