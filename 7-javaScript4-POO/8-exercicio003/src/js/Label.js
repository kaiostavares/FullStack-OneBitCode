const Component = require("./Component");

class Label extends Component{
  constructor(text, parent, options){
    super('label', parent, Object.assign({}, options, {textContent: text}))
  }
}

module.exports = Label