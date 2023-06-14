const Component = require("./Component")

class Form extends Component {
  constructor(parent, options) {
    super('form', parent, options)
  }

  addChildren(...children) {
    children.forEach(child => {
      this.getElement().appendChild(child.getElement())
    })
  }
}

module.exports = Form