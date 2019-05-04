import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import Products from './components/Products'
import Templates from './components/Templates'
import { getProductsAndTemplates } from './utils/httpRequests'
import './App.css'

class App extends Component {
	state = {
		productsInfo: [],
		templatesInfo: [],
		productCount: 0,
		templateCount: 0,
		totalCount: 0,
		modalShow: false
	}

	onModalOpen = () => {
		this.setState(() => ({
			modalShow: true
		}))
	}

	onModalClose = () => {
		this.setState(() => ({
			modalShow: false
		}))
	}

	onProductIncrement = () => {
		this.setState(prevState => ({
			productCount: prevState.productCount + 1,
			totalCount: prevState.totalCount + 1
		}))
	}

	onProductDecrement = () => {
		this.setState(prevState => ({
			productCount: prevState.productCount - 1,
			totalCount: prevState.totalCount - 1
		}))
	}

	onTemplateIncrement = () => {
		this.setState(prevState => ({
			templateCount: prevState.templateCount + 1,
			totalCount: prevState.totalCount + 1
		}))
	}

	onTemplateDecrement = () => {
		this.setState(prevState => ({
			templateCount: prevState.templateCount - 1,
			totalCount: prevState.totalCount - 1
		}))
	}

	componentDidMount() {
		// async func return Promise
		getProductsAndTemplates().then(({ products, templates }) => {
			this.setState({
				productsInfo: products,
				templatesInfo: templates
			})
		})
	}

	render() {
		const {
			modalShow,
			productsInfo,
			templatesInfo,
			templateCount,
			productCount,
			totalCount
		} = this.state

		return (
			<div className="app">
				<h1>Manage subscription</h1>
				<Tabs
					defaultActiveKey="profile"
					id="uncontrolled-tab-example"
				>
					<Tab eventKey="home" title="Templates">
						<Templates
							tempBool
							templatesInfo={templatesInfo}
							onProductTemplateIncrement={this.onTemplateIncrement}
							onProductTemplateDecrement={this.onTemplateDecrement}
							modalShow={modalShow}
							onModalClose={this.onModalClose}
						/>
					</Tab>
					<Tab eventKey="profile" title="Products">
						<Products
							productBool
							productsInfo={productsInfo}
							onProductTemplateIncrement={this.onProductIncrement}
							onProductTemplateDecrement={this.onProductDecrement}
							modalShow={modalShow}
							onModalClose={this.onModalClose}
						/>
					</Tab>
				</Tabs>

				<div className="next-btn-wrapper">
					<button
						disabled={totalCount === 0}
						onClick={this.onModalOpen}
						className="next-btn"
					>
						Next
						<span className="next-btn-chech-sign">
							<i className="fas fa-long-arrow-alt-right" />
						</span>
					</button>
					<span className="next-btn-back-span">or</span>
					<span className="next-btn-back-span next-btn-back-span-color-blue">
						Back
					</span>
				</div>

				{templateCount > 0 && (
					<div className="template-count-div">({templateCount})</div>
				)}
				{productCount > 0 && (
					<div className="product-count-div">({productCount})</div>
				)}
			</div>
		)
	}
}

export default App
