import React from 'react'
import styled from 'styled-components'

const NotFoundStyles = styled.div`
  margin-bottom: 200px;
  text-align: center;
  b {
    margin-top: 100px;
    display: block;
    justify-content: center;
    align-items: center;
    font-size: 35px;
  }
  span {
    font-size: 25px;
  }
`

const NotFound = () => {
  return (
    <NotFoundStyles>
      <b>Произошла ошибка ☹️</b>
      <br />
      <span>Повторите попытку позже ...</span>
    </NotFoundStyles>
  )
}

export default NotFound
