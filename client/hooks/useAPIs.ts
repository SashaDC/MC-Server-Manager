import { useQuery } from '@tanstack/react-query'
import { fetchMinecraftManifestData } from '../apis/minecraftAPI'

export function useManifestData() {
  return useQuery({
    queryKey: ['data'],
    queryFn: fetchMinecraftManifestData,
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}
