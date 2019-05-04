import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Card from './Card/Card'

const Products = ({
	onProductSelect,
	onProductTemplateIncrement,
	onProductTemplateDecrement,
	modalShow,
	onModalClose,
	productBool,
	productsInfo
}) => {
	return (
		<Container>
			<Row style={{ justifyContent: 'center' }}>
				{productsInfo.map((singleProdInfo, i) => {
					return (
						<Card
							key={singleProdInfo._id}
							index={i}
							{...singleProdInfo}
							onProductSelect={onProductSelect}
							onProductTemplateIncrement={onProductTemplateIncrement}
							onProductTemplateDecrement={onProductTemplateDecrement}
							productBool={productBool}
							modalShow={modalShow}
							onModalClose={onModalClose}
						/>
					)
				})}
			</Row>
		</Container>
	)
}

Products.propTypes = {
	productBool: PropTypes.bool.isRequired,
	modalShow: PropTypes.bool.isRequired,
	productsInfo: PropTypes.array.isRequired,
	onProductTemplateIncrement: PropTypes.func.isRequired,
	onProductTemplateDecrement: PropTypes.func.isRequired,
	onModalClose: PropTypes.func.isRequired
}

export default Products
