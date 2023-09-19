import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 1234

app.use(indexRoutes)
app.use('/api', employeesRoutes)

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`)
})
