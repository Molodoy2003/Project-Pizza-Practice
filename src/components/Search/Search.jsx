import { Search as LogoSearch } from '@styled-icons/bootstrap/Search'
import { Close as LogoClose } from '@styled-icons/evil/Close'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../App'

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
	left: 618px;
`

const CloseImage = styled(LogoClose)`
	cursor: pointer;
	position: absolute;
	left: 790px;
	opacity: 0.5;
	transition: all 0.3s ease;
	&:hover {
		opacity: 1;
	}
`

const Search = () => {
	const { searchValue, setSearchValue } = useContext(AppContext)

	return (
		<>
			<SearchImage size={15} />
			<SearchInput
				value={searchValue}
				type='text'
				placeholder='Поиск пиццы...'
				onChange={e => setSearchValue(e.target.value)}
			/>
			{searchValue && (
				<CloseImage size={18}
					onClick={() => setSearchValue('')}
				/>
			)}
		</>
	)
}

export default Search
