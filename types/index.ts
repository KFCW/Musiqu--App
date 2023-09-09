export interface FilterProps {
    muscle?: string;
    difficulty?: string; 
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface ExercicesProps {
    isDataEmpty: boolean;
    allExercises: Array<ExerciceProps>;
}

export interface ExerciceProps {
    name: string;
    type: string;
    muscle: string;
    equipment: string;
    difficulty: string;
    instructions: string;
}