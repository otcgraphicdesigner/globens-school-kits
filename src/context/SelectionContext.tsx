import React, { createContext, useContext, useState, ReactNode } from 'react';
import { School, ClassLevel, Section, Ward, AcademicYear, SelectionState } from '@/types';
import { mockAcademicYear } from '@/data/mockData';

interface SelectionContextType {
  selection: SelectionState;
  setSchool: (school: School | null) => void;
  setClassLevel: (classLevel: ClassLevel | null) => void;
  setSection: (section: Section | null) => void;
  setWard: (ward: Ward | null) => void;
  resetSelection: () => void;
  isComplete: boolean;
}

const initialState: SelectionState = {
  school: null,
  classLevel: null,
  section: null,
  ward: null,
  academicYear: mockAcademicYear,
};

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<SelectionState>(initialState);

  const setSchool = (school: School | null) => {
    setSelection(prev => ({
      ...prev,
      school,
      classLevel: null,
      section: null,
    }));
  };

  const setClassLevel = (classLevel: ClassLevel | null) => {
    setSelection(prev => ({
      ...prev,
      classLevel,
      section: null,
    }));
  };

  const setSection = (section: Section | null) => {
    setSelection(prev => ({
      ...prev,
      section,
    }));
  };

  const setWard = (ward: Ward | null) => {
    setSelection(prev => ({
      ...prev,
      ward,
    }));
  };

  const resetSelection = () => {
    setSelection(initialState);
  };

  const isComplete = !!(selection.school && selection.classLevel);

  return (
    <SelectionContext.Provider
      value={{
        selection,
        setSchool,
        setClassLevel,
        setSection,
        setWard,
        resetSelection,
        isComplete,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const context = useContext(SelectionContext);
  if (context === undefined) {
    throw new Error('useSelection must be used within a SelectionProvider');
  }
  return context;
}
