import { handleButtonPress, handleClearButton, handleType } from "./js/ functionalities.js"
import { calculate } from "./js/calculate.js"
import copyToClipboard from "./js/copyToClipboard.js"
import themeStyle from "./js/themeStyle.js"
import './styles/index.css'

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})
document.getElementById("clear").addEventListener("click", handleClearButton)
document.getElementById("input").addEventListener("keydown", handleType)
document.getElementById("equal").addEventListener("click", calculate)
document.getElementById("copyToClipboard").addEventListener("click",copyToClipboard)
document.getElementById("themeSwitcher").addEventListener("click", themeStyle)