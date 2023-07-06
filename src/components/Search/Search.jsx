import { Search as LogoSearch } from '@styled-icons/bootstrap/Search'
import { Close as LogoClose } from '@styled-icons/evil/Close'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { PizzaContext } from '../../Context/Context'

const SearchWrapper = styled.div`
  position: relative;
`

const SearchInput = styled.input`
  padding: 10px 40px;
  width: 300px;
  border-radius: 10px;
  font-size: 16px;
  margin-right: 310px;
  font-weight: 600;
  border: none;
  &:focus {
    border: 1px solid rgb(189, 187, 187);
  }
`
const SearchImage = styled(LogoSearch)`
  position: absolute;
  opacity: 0.7;
  left: 17px;
  top: 32%;
`

const CloseImage = styled(LogoClose)`
  cursor: pointer;
  position: absolute;
  right: 320px;
  top: 32%;
  opacity: 0.5;
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
    transform: scale(1.1)
  }
`

const Search = () => {
  const { state, dispatch } = useContext(PizzaContext)

  return (
    <SearchWrapper>
      <SearchImage size={15} />
      <SearchInput
        value={state.searchValue}
        type='text'
        placeholder='Поиск пиццы...'
        onChange={e =>
          dispatch({
            type: 'searchValue',
            payload: e.target.value,
          })
        }
      />
      {state.searchValue && (
        <CloseImage
          size={18}
          onClick={() =>
            dispatch({
              type: 'searchValue',
              payload: '',
            })
          }
        />
      )}
    </SearchWrapper>
  )
}

export default Search
