import { Search as LogoSearch } from '@styled-icons/bootstrap/Search'
import React, { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'
import { AppContext } from '../../App'
import styles from './Search.module.scss'

const SearchInput = styled.input`
	padding: 10px 40px;
	width: 300px;
	border-radius: 10px;
	font-size: 16px;
	margin-right: 296px;
	font-weight: 600;
	border: none;
	&:focus {
		border: 1px solid rgb(189, 187, 187);
	}
`
const SearchImage = styled(LogoSearch)`
	position: absolute;
	opacity: 0.7;
	left: 545px;
`

const Search = () => {
	const { searchValue, setSearchValue } = useContext(AppContext)

	return (
		<>
			<SearchImage size={15}/>
			<SearchInput
				value={searchValue}
				type='text'
				placeholder='Поиск пиццы...'
				onChange={e => setSearchValue(e.target.value)}
			/>
			{searchValue && (
				<AiOutlineClose
					onClick={() => setSearchValue('')}
					className={styles.close}
				/>
			)}
		</>
	)
}

export default Search
