import { parse } from 'std/flags/mod.ts'
import upgrade from './cli/upgrade.ts'

if (import.meta.main) {
  const { _: args, ...options } = parse(Deno.args)
  await upgrade(options.v || options.version || args[0] || 'latest', true)
}
