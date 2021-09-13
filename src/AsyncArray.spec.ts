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
});
