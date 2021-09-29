import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import Button from '../Button/index';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidMount() {
    const { history } = this.props;
    const { hasError } = this.state;
    this.unlisten = history.listen(() => {
      if (hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      this.updateErrorState();
    }
  }

  componentDidCatch() {
    // * Catch errors in any components below and re-render with error message
    this.setState({
      hasError: true,
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  updateErrorState = () => {
    const { hasError } = this.state;
    if (hasError) {
      this.setState({ hasError: false });
    }
  };

  render() {
    const { hasError } = this.state;
    const { history, children } = this.props;
    console.log(this.props)
    if (hasError) {
      // * Renders Error
      return (
        <>
          <div className="error__content">
            <h2 className="error__Heading"> Oops! Something went wrong.</h2>
            <div className="error__content__detail">
              <p className="error__details">
                We appologize for any inconvenience, but an unexpected error occured while you were browsing the portal.
              </p>
            </div>
            <hr />
            <div className="error__fallback">
              <p>
                As a fallback please try going back
                <br />
                <Button
                  onClick={() => {
                    history.back();
                  }}
                  title={<i className="fa fa-arrow-left" aria-label="Back" aria-required="false" aria-hidden="false" />}
                  className="error__go__back"
                />
              </p>
            </div>
          </div>
        </>
      );
    }
    // * Else normally, just render children
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withRouter(ErrorBoundary);
