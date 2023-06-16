import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from '../App'
import Categories from '../components/Categories/Categories'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Sort from '../components/Sort/Sort'

const ContentTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const ContentTitle = styled.h2`
	margin: 35px 0;
`
const ContentItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

const Home = () => {
	const { searchValue } = useContext(AppContext)
	const [items, setItems] = useState([])
	const [sortType, setSortType] = useState({
		name: 'популярности',
		property: 'rating'
	})
	const [categotyId, setCategotyId] = useState(0)

	useEffect(() => {
		fetch(
			`https://647efc54c246f166da8fd2c1.mockapi.io/items?${
				categotyId > 0 ? `category=${categotyId}` : ''
			}&sortBy=${sortType.property}&order=desc${
				searchValue ? `&search=${searchValue}` : ''
			}`
		)
			.then(res => {
				return res.json()
			})
			.then(arr => {
				console.log(arr)
				setItems(arr)
			})
		window.scrollTo(0, 0)
	}, [categotyId, sortType, searchValue])

	return (
		<>
			<ContentTop>
				<Categories
					categotyId={categotyId}
					onChangeCategory={id => setCategotyId(id)}
				/>
				<Sort sortType={sortType} onChangeSort={id => setSortType(id)} />
			</ContentTop>
			<ContentTitle>Все пиццы</ContentTitle>
			<ContentItems>
				{items.map(item => (
					<PizzaBlock
						key={item.id}
						title={item.title}
						price={item.price}
						image={item.imageUrl}
						sizes={item.sizes}
						types={item.types}
					/>
				))}
			</ContentItems>
		</>
	)
}

export default Home
