const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient({ region: `us-east-1` })

exports.handler = async (event, context) => {
  // const UserObjectTableName = process.env.TABLE_NAME
  // const IndexName = 'byUsername'

  // const username = event.username
  // console.log('username from event: ' + username)

  // var queryParams = {
  //   TableName: UserObjectTableName,
  //   IndexName: IndexName,
  //   KeyConditionExpression: 'username = :username',
  //   ExpressionAttributeValues: {
  //     ':username': username,
  //   },
  // }
  // try {

  //   const res = await dynamo.query(queryParams).promise()

  //   if (res.Items.length !== 0) {
  //     throw 'Username already exists!'
  //   }
  //   //8. Username doesn't exist!
  //   context.done(null, event)
  // } catch (error) {

  //   console.log('Error!: ' + error)
  //   return context.done(error, event)
  // }
  console.log('the persons username: ', event.username)
  // throw Error('Please choose a different username.')
  context.done(null, event)
}
