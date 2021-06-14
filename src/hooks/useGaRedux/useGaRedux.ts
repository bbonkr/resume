import { useSelector, useDispatch } from 'react-redux';
import { rootAction } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { GaState } from '../../store/reducers/ga';

export const useGaRedux = () => {
    const dispatch = useDispatch();
    const state = useSelector<RootState, GaState>((state) => state.ga);

    return {
        ...state,
        setGaId: (payload: string) => dispatch(rootAction.ga.setGaId(payload)),
        resetGaId: () => dispatch(rootAction.ga.setGaId('')),
    };
};
