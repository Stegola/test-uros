import React from 'react'
import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from './Card/Card'

const Templates = ({
	templatesInfo,
	onModalClose,
	onProductTemplateIncrement,
	onProductTemplateDecrement,
	tempBool,
	modalShow
}) => (
	<Container>
		<Row className="products-templates-row">
			{templatesInfo.map(singleTempInfo => (
				<Card
					key={singleTempInfo._id}
					{...singleTempInfo}
					mgT20
					onProductTemplateIncrement={onProductTemplateIncrement}
					onProductTemplateDecrement={onProductTemplateDecrement}
					tempBool={tempBool}
					modalShow={modalShow}
					onModalClose={onModalClose}
				/>
			))}
		</Row>
	</Container>
)

Templates.propTypes = {
	tempBool: PropTypes.bool.isRequired,
	modalShow: PropTypes.bool.isRequired,
	templatesInfo: PropTypes.array.isRequired,
	onProductTemplateIncrement: PropTypes.func.isRequired,
	onProductTemplateDecrement: PropTypes.func.isRequired,
	onModalClose: PropTypes.func.isRequired
}

export default Templates
