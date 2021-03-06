import React from 'react'
import PropTypes from 'prop-types'
import styles from './theme/styles/index.scss'

export default class extends React.Component {
  static propTypes = {
    children: PropTypes.object
  }

  render () {
    return <div className={styles.body}>{this.props.children}</div>
  }
}
