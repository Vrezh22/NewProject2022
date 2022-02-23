import errorImg from '../images/error.png'

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null
    }
    componentDidCatch(error) {
        this.setState(prevState => ({
            ...prevState,
            hasError: true,
            error: error.message
        }))
    }
    render() {
        if (this.state.hasError) {
            return <div className="Error">
                <p> {this.state.error}</p>
                <img src={errorImg} alt="err" />
            </div>
        }
        else
            return this.props.children;
    }
}
export default ErrorBoundary;