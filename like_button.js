const e = React.createElement

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liked: 0 }
  }

  render() {

    let html = ''

    if (this.state.liked) {
      html += this.state.liked + ' '
    }

    html += 'Like'

    if (this.state.liked > 1) {
      html += 's'
    }

    return e(
      'button',
      {
        onClick: () => {
          this.setState({ liked: this.state.liked + 1 })
        }
      },
      html
    )
  }
}

const domContainer = document.querySelector('#like_button_container')
ReactDOM.render(e(LikeButton), domContainer)
