const e = React.createElement

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liked: 0 }
  }

  render() {

    let html = ''
    let likeColor = 'black'

    if (this.state.liked) {
      html += this.state.liked + ' '


      if (this.state.liked > 10) {
        likeColor = 'green'
      } else if (this.state.liked > 5) {
        likeColor = 'blue'
      }
    }

    html += 'Like'

    if (this.state.liked > 1) {
      html += 's'
    }

    
    return e(
      'button',
      {
        style: {
          color: likeColor,
          backgroundColor: 'light-grey'
        },
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
