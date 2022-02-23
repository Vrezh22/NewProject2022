import React from 'react';

const withScreenSizes = (Component) => {
    return class extends React.Component {
        state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        handleResizeWindow = () => {
            this.setState(prevState => ({
                ...prevState,
                width: window.innerWidth,
                height: window.innerHeight
            }))
        }
        componentDidMount() {
            window.addEventListener('resize', this.handleResizeWindow)
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResizeWindow)
        }
        render() {
            return <Component width={this.state.width} height={this.state.height} />
        }
    }
}
export default withScreenSizes;