import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    static propTypes = {
        appTitle: PropTypes.string.isRequired
    }

    render() {
        const { appTitle } = this.props
        return (
            <div className="app-title">
                <h1>{appTitle}</h1>
            </div>
        )
    }
}

export default Header