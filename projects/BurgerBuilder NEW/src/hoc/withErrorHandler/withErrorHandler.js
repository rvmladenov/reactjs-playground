import React, { Component } from 'react';
import Aux from '../_Aux/_Aux';
import Modal from '../../components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };
        reqInterceptor;
        resInterceptor;

        errorConfirmHandler = () => {
            this.setState({error: null})
        }

        constructor() {
            super();

            this.reqInterceptor = axios.interceptors.request.use(req => req, error => {
                this.setState({error: error});
            })
            this.resInterceptor =axios.interceptors.response.use(null, error => {
                this.setState({error: error});
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
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