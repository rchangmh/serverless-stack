export default {
	apiGateway: {
		URL: 'https://or3uwjs6c4.execute-api.us-east-1.amazonaws.com/prod'
	},
  cognito: {
    USER_POOL_ID : 'us-east-1_1oDeW8Af3',
    APP_CLIENT_ID : '91iqcvai0lg7ujv2j39pu6l0n',
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  REGION: 'us-east-1',
  IDENTITY_POOL_ID: 'us-east-1:b0cd0075-06f9-47ca-ace5-77348691b40e',
  s3: {
  	BUCKET: 'serverless.notes'
  }
}