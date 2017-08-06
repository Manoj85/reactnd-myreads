import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Headroom from 'react-headroom'

class Header extends Component {
    static propTypes = {
        appTitle: PropTypes.string.isRequired
    }

    render() {
        const { appTitle } = this.props
        return (
            <Headroom>
                <div className="app-title">
                    <h1>{appTitle}</h1>
                </div>
            </Headroom>
        )
    }
}

export default Header