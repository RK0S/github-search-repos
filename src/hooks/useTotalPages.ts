import { useMemo } from 'react';

export const useTotalPages = (total: number) => {
    return useMemo(() => {
        const totalPages = Math.ceil(total / 30);
        return totalPages;
    }, [total]);
};
