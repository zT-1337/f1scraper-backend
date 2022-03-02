import { NextApiRequest, NextApiResponse } from "next";
import { setNewsStatus } from "../../../lib/patch-news";
import { NewsStatus } from "../../../types/News";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.newsId;

  if(typeof id !== 'string') {
    res.status(400).json({message: 'only one id value allowed'});
    return;
  }

  const idAsNumber = parseInt(id);
  
  if(isNaN(idAsNumber)) {
    res.status(400).json({message: 'id needs to be an integer'});
    return;
  }

  const authHeader = req.headers.authorization;

  switch(req.method) {
    case 'PATCH':
      if(authHeader === undefined) {
        res.status(401).json({message: 'auth header is missing'})
        return;
      }

      const newsStatus: NewsStatus = req.body.newsStatus

      const response = await setNewsStatus({id: idAsNumber, authHeader: authHeader, newsStatus: newsStatus})

      if(response.status !== 204) {
        res.status(response.status).json(await response.json());
        return;
      }
      res.status(response.status).end();
      break;
    default:
      res.status(415).json({message: 'unsupported method'});
  }
}

export default handler;