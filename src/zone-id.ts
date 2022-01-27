const zoneIds: Record<string, string> = {
  outstream: '4176664',
  recommendation: '3686513',
};

export function prepareZoneId(zoneId: string | number, type: string): string {
  return type in zoneIds && Math.random() < 0.05 ? zoneIds[type] : zoneId.toString();
}
