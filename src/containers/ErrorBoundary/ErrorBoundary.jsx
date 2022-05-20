import React from "react"

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
      }
    static getDerivedStateFromError(error) {
      return {error}
    }
    render() {
      const {error} = this.state
      if(error){
        return (<div role="alert">
        There was an error:{' '}
        <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
        </div>)
      }
      console.log('ErrorBoundary', this.state.error)
      return this.props.children
    }
  }

  export default ErrorBoundary;