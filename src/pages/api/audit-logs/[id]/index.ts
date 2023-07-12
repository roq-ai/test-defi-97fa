import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { auditLogValidationSchema } from 'validationSchema/audit-logs';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.audit_log
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getAuditLogById();
    case 'PUT':
      return updateAuditLogById();
    case 'DELETE':
      return deleteAuditLogById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getAuditLogById() {
    const data = await prisma.audit_log.findFirst(convertQueryToPrismaUtil(req.query, 'audit_log'));
    return res.status(200).json(data);
  }

  async function updateAuditLogById() {
    await auditLogValidationSchema.validate(req.body);
    const data = await prisma.audit_log.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteAuditLogById() {
    const data = await prisma.audit_log.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
