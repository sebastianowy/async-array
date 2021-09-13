import { AsyncArray } from '.';

describe('AsyncArray', () => {
  describe('sort()', () => {
    it('should sort array properly resulting with reversed array', async () => {
      const nativeArray: number[] = [1, 3, 2];
      const expected: number[] = [3, 2, 1];

      const asyncArray: AsyncArray<number> = new AsyncArray(nativeArray);
      await asyncArray.sort(async (left: number, right: number): Promise<number> => {
        return await Promise.resolve(right - left);
      });

      expect(nativeArray).toEqual(expected);
    });
  });

  describe('filter()', () => {
    it('should filter array with provided predicate', async () => {
      const nativeArray: number[] = [1, 3, 2];
      const expected: number[] = [3, 2];

      const asyncArray: AsyncArray<number> = new AsyncArray(nativeArray);
      const filteredArray = await asyncArray.filter(async (element: number): Promise<boolean> => {
        return Promise.resolve(element > 1);
      });

      expect(filteredArray).toEqual(expected);
    });
  });

  describe('iterator', () => {
    it('should cast AsyncArray to array properly', async () => {
      const nativeArray: number[] = [1, 3, 2];

      const asyncArray: AsyncArray<number> = new AsyncArray(nativeArray);
      const castedArray: number[] = Array.from(asyncArray);

      expect(castedArray).toEqual(nativeArray);
    });
  });
});
