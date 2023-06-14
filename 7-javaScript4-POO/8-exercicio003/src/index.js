const Component = require("./js/Component");
const Form = require("./js/Form");
const Input = require("./js/Input");
const Label = require("./js/Label");

const el = new Component('h1', 'body', {innerText: 'Olá, Mundo!'})
console.log(el)
el.tag = 'h2'
el.build().render()

const form = new Form('body')
const label = new Label('Nome', form, {htmlFor: 'nameInput'})
const input = new Input('body', {id:'nameInput', name: 'birthday'})

form.render()
label.render()
form.addChildren(input)

form.addChildren(
  new Component('br'),
  new Component('br'),
  new Label('Data de Nascimento:', {htmlFor: 'birthdayInput'}),
  new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
)