import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import Modal from '../Modal'
import './Card.css'

class Card extends Component {
	state = {
		clickCount: 0,
		selected: false,
		productSelected: false,
		templateSelected: false,
		modalShow: false,
		li: [],
		description: [],
		price: [],
		name: []
	}

	onSelectProductTemplate = () => {
		if (this.state.clickCount % 2 === 0) {
			this.setState(prevState => ({
				clickCount: prevState.clickCount + 1,
				selected: true
			}))
			this.hello()
			this.props.onProductTemplateIncrement()
		} else if (this.state.clickCount % 2 === 1) {
			this.setState(prevState => ({
				clickCount: prevState.clickCount - 1,
				selected: false
			}))
			this.props.onProductTemplateDecrement()
			this.hello()
		}
	}

	hello = () => {
		const { clickCount, li, description, price } = this.state

		if (clickCount % 2 === 0) {
			if (
				li !== this.props.features &&
				description !== this.props.description &&
				price !== this.props.price
			) {
				this.setState(prevState => ({
					li: prevState.li.concat(this.props.features),
					description: prevState.description.concat(
						this.props.description
					),
					price: prevState.price.concat(this.props.price),
					name: prevState.name.concat(this.props.name)
				}))
			}
		} else if (clickCount % 2 === 1) {
			this.setState(prevState => ({
				description: prevState.description.filter(
					singDesc => singDesc !== this.props.description
				),
				name: prevState.name.filter(
					singName => singName !== this.props.name
				),
				price: prevState.price.filter(
					singPrice => singPrice !== this.props.price
				)
			}))
		}
	}

	render() {
		const {
			mgT20,
			index,
			features,
			name,
			description,
			price,
			modalShow,
			onModalClose
		} = this.props

		let footerClass = mgT20
			? 'card-footer-wrapper-mgT20'
			: 'card-footer-wrapper'
		let headingBGColor =
			index % 2 === 0 ? 'card-heading-LightBlue' : 'card-heading'

		let checkSign = this.state.selected
			? 'fas fa-check'
			: 'fas fa-check disp-none'
		let btnBGC = this.state.selected
			? 'select-btn select-btn-bgc-blue'
			: 'select-btn'
		return (
			<div className="card-outer-wrapper">
				<div className={headingBGColor}>
					<h4>{name}</h4>
				</div>
				<div className="card-wrapper">
					<div className="card-body-heading-list">
						<h6>{description}</h6>
						<ul className="card-body-ul">
							{features.map((feature, i) => {
								return <li key={i}>{feature}</li>
							})}
						</ul>
					</div>
					<div className={footerClass}>
						<span>{price}</span>
						<div className="card-footer-btn-div">
							<button
								className={btnBGC}
								onClick={this.onSelectProductTemplate}
							>
								Select{' '}
								<i
									style={{ marginLeft: '6px', color: '#fff' }}
									className={checkSign}
								/>
							</button>
						</div>
					</div>
				</div>
				<Modal
					modalShow={modalShow}
					onModalClose={onModalClose}
					name={this.state.name}
					li={this.state.li}
					price={this.state.price}
					description={this.state.description}
				/>
			</div>
		)
	}
}

// Card.propTypes = {
// 	tempBool: PropTypes.bool.isRequired,
// 	modalShow: PropTypes.bool.isRequired,
// 	templatesInfo: PropTypes.array.isRequired,
// 	onProductTemplateIncrement: PropTypes.func.isRequired,
// 	onProductTemplateDecrement: PropTypes.func.isRequired,
// 	onModalClose: PropTypes.func.isRequired
// }

export default Card
