import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../reduxState';

export const useAppDispatch: () => AppDispatch = useDispatch;
