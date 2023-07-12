const mapping: Record<string, string> = {
  'audit-logs': 'audit_log',
  customers: 'customer',
  incidents: 'incident',
  organizations: 'organization',
  products: 'product',
  transactions: 'transaction',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
