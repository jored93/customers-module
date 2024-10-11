import serverless from 'serverless-http'
import express from 'express'

const app = express()



exports.handler = serverless(app);