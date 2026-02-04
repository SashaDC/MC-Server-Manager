export async function fetchMinecraftManifestData(): Promise<object> {
  const res = await fetch(
    'https://launchermeta.mojang.com/mc/game/version_manifest_v2.json',
  )
  if (!res.ok) {
    throw new Error('Failed to fetch Minecraft versions')
  }
  return res.json()
}
