import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addPizza } from '../../redux/slices/cartSlice.js'


const PizzaBlockStyles = styled.div`
  width: 280px;
  text-align: center;
  margin-bottom: 65px;
  &:not(:nth-of-type(4n)) {
    margin-right: 35px;
  }
`
const PizzaImage = styled.img`
  width: 260px;
`
const PizzaTitle = styled.h4`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1%;
  margin-bottom: 20px;
`
const PizzaSelector = styled.div`
  display: flex;
  background-color: #dbdada;
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;

  ul {
    display: flex;
    flex: 1;

    &:first-of-type {
      margin-bottom: 6px;
    }

    li {
      padding: 8px;
      flex: 1;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;

      &.active {
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        cursor: auto;
      }
    }
  }
`
const PizzaBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`
const PizzaPrice = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
`
const PizzaButton2 = styled.div`
  display: inline-block;
  background-color: #fe5f1e;
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  border: 1px solid transparent;
  &,
  span {
    color: #fff;
  }
`
const PizzaButton1 = styled(PizzaButton2)`
  background-color: #fff;
  border-color: #fe5f1e;
  &,
  span {
    color: #fe5f1e;
  }

  svg {
    path {
      fill: #fe5f1e;
    }
  }

  &:hover {
    background-color: #fe5f1e;

    &,
    span {
      color: #fff;
    }

    svg {
      path {
        fill: #fff;
      }
    }
  }
  &:active {
    background-color: darken(#fe5f1e, 8%);
  }
`
const PizzaButton = styled(PizzaButton1)`
  svg {
    margin-right: 2px;
  }

  span {
    font-weight: 600;
    font-size: 16px;
  }

  &:hover {
    i {
      background-color: #fff;
      color: #fe5f1e;
    }
  }

  i {
    display: inline-block;
    border-radius: 30px;
    background-color: #fe5f1e;
    color: #fff;
    font-weight: 600;
    width: 22px;
    height: 22px;
    font-style: normal;
    font-size: 13px;
    line-height: 22px;
    position: relative;
    top: -1px;
    left: 3px;
  }
`

const PizzaBlock = ({ id, title, price, imageUrl, sizes, types, onPlus}) => {
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const [count, setCount] = useState(0)
  const typeNames = ['тонкое', 'сырный борт']
  // const dispatch = useDispatch()

  const onClickPlus = () => {
    onPlus()
    setCount(count + 1)
  }

  // const onClickAddPizza = () => {
  // 	onPlus()
  // 	setCount(count + 1)
  // 	const item = {
  // 		id,
  // 		title, 
  // 		imageUrl, 
  // 		price
  // 	}
  // 	dispatch(addPizza(item))
  // }

  return (
    <PizzaBlockStyles>
      <PizzaImage src={imageUrl} alt='Pizza' />
      <PizzaTitle>{title}</PizzaTitle>
      <PizzaSelector>
        <ul>
          {types.map((type, index) => (
            <li
              key={index}
              onClick={() => setActiveType(type)}
              className={activeType === type ? 'active' : ''}
            >
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              key={index}
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? 'active' : ''}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </PizzaSelector>
      <PizzaBottom>
        <PizzaPrice>от {price} р.</PizzaPrice>
        <PizzaButton onClick={onClickPlus}>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          ></svg>
          <span>Добавить</span>
          <i>{count}</i>
        </PizzaButton>
      </PizzaBottom>
    </PizzaBlockStyles>
  )
}

export default PizzaBlock
