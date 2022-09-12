import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

describe('Test useCounter Hook', () => {
  it('test #1: should increment', () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('test #2: should decrement', () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });

  it('test #3: should reset', () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.increment();

      result.current.reset();
    });

    expect(result.current.count).toBe(0);
  });
});
