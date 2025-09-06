// Utilidad para mapear el moduloId de la URL al nombre correcto del módulo

export type ModuleName = 'matematicas' | 'espanol' | 'ciencias-sociales' | 'computacion';

export const getModuleName = (moduloId: string): ModuleName => {
  const moduleMap: { [key: string]: ModuleName } = {
    'matematicas': 'matematicas',
    'espanol': 'espanol',
    'ciencias-sociales': 'ciencias-sociales',
    'computacion': 'computacion'
  };
  
  return moduleMap[moduloId] || 'matematicas';
};
