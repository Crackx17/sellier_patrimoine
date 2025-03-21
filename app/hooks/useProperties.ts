// app/hooks/use-properties.ts
import { useQuery } from '@tanstack/react-query'

export function useProperties() {
  return useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      const res = await fetch('/api/properties')
      if (!res.ok) throw new Error('Échec du chargement des propriétés')
      return res.json()
    },
  })
}
