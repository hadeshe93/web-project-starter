export function getConstructionEnv(): 'production' | 'development' {
  return process.env.NODE_ENV === 'production' ? 'production' : 'development';
}

export function isConstructionEnvProd(): boolean {
  return getConstructionEnv() === 'production';
}