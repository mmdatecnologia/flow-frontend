import handler from '@pages/api/hello'

import { createMocks } from 'node-mocks-http'
import { NextApiRequest, NextApiResponse } from 'next'

it('should return a 200 for [GET]', async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
    method: 'GET',
  })
  await handler(req, res)
  expect(res._getStatusCode()).toBe(200)
})
