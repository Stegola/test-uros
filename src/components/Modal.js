import React from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Modal from 'react-bootstrap/Modal'

const modal = props => {
	return (
		<ButtonToolbar>
			<Modal
				size="lg"
				show={props.modalShow}
				onHide={props.onModalClose}
				aria-labelledby="example-modal-sizes-title-lg"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-lg">
						Large Modal
					</Modal.Title>
				</Modal.Header>
				<Modal.Body> ovde idu podaci modala</Modal.Body>
			</Modal>
		</ButtonToolbar>
	)
}

export default modal
