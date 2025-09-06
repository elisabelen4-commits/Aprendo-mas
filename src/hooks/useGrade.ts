import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useGrade = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  
  const getGrade = (): string => {
    if (user?.grade) {
      // Guardar en localStorage para persistencia
      localStorage.setItem('userGrade', user.grade);
      return user.grade;
    }
    
    // Si no hay usuario pero hay grado guardado, usarlo
    const savedGrade = localStorage.getItem('userGrade');
    return savedGrade || '6'; // Default a 6to grado
  };

  const getGradeName = (gradeValue?: string): string => {
    const grade = gradeValue || getGrade();
    const gradeNames: { [key: string]: string } = {
      '1': '1.º Primaria',
      '2': '2.º Primaria',
      '3': '3.º Primaria',
      '4': '4.º Primaria',
      '5': '5.º Primaria',
      '6': '6.º Primaria',
      '7': '1.º Secundaria',
      '8': '2.º Secundaria',
      '9': '3.º Secundaria',
      '10': '1.º Bachillerato',
      '11': '2.º Bachillerato',
      '12': '3.º Bachillerato'
    };
    return gradeNames[grade] || '6.º Primaria';
  };

  const getGradeLevel = (gradeValue?: string): 'primaria' | 'secundaria' | 'bachillerato' => {
    const grade = gradeValue || getGrade();
    const gradeNum = parseInt(grade);
    
    if (gradeNum >= 1 && gradeNum <= 6) return 'primaria';
    if (gradeNum >= 7 && gradeNum <= 9) return 'secundaria';
    return 'bachillerato';
  };

  return {
    getGrade,
    getGradeName,
    getGradeLevel
  };
};
