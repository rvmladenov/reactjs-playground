import React, { Component } from 'react';
import Aux from '../_Aux/_Aux';
import Modal from '../../components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        errorConfirmHandler = () => {
            this.setState({error: null})
        }

        componentDidMount () {
            axios.interceptors.request.use(req => req, error => {
                this.setState({error: error});
            })
            axios.interceptors.response.use(null, error => {
                this.setState({error: error});
            })
        }

        render() {
            return (
                <Aux>
                    <Modal modalClosed={this.errorConfirmHandler} show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorHandler;