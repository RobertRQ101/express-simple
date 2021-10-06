'use strict'
const {Router} = require ('express')
const router = Router ()

const root = `<html>
<head>
  <style>
   body {background: # 333; margem: 1,25 rem}
   a {cor: amarelo; tamanho da fonte: 2rem; font-family: sans-serif}
  </style>
</head>
<body>
  <a href='/hello'> Olá está é a rota principal</a>
</body>
</html>
`

router.get ('/', (req, res) => {
  res.send (root)
})

module.exports = router