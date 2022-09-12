import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../reduxState';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
