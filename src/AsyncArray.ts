import { IAsyncArray } from './interfaces/IAsyncArray';
import { IElementCallback } from './interfaces/IElementCallback';

export class AsyncArray<TElement> implements IAsyncArray<TElement> {
  constructor(private readonly _array: Array<TElement>) {}

  *[Symbol.iterator](): Iterator<TElement> {
    for (const element of this._array) {
      yield element;
    }
  }

  public map<TResult>(callback: IElementCallback<TElement, TResult>): Promise<TResult[]> {
    return Promise.all(
      this._array.map((element: TElement, index: number): Promise<TResult> => callback(element, index)),
    );
  }

  public async forEach(callback: IElementCallback<TElement, void>): Promise<void> {
    await Promise.all(this._array.map((element: TElement, index: number): Promise<void> => callback(element, index)));
  }

  public async filter(callback: IElementCallback<TElement, boolean>): Promise<TElement[]> {
    const results: boolean[] = await Promise.all(
      this._array.map((element: TElement, index: number): Promise<boolean> => callback(element, index)),
    );
    return this._array.filter((value: TElement, index: number) => results[index]);
  }

  public async sort(callback: (left: TElement, right: TElement) => Promise<number>): Promise<TElement[]> {
    const arrayLength: number = this._array.length;
    let isSwapNeeded: boolean;
    for (let i: number = arrayLength; i > 0; i--) {
      isSwapNeeded = true;
      for (let j = 0; j < i - 1; j++) {
        if ((await callback(this._array[j + 1], this._array[j])) <= 0) {
          [this._array[j + 1], this._array[j]] = [this._array[j], this._array[j + 1]];
          isSwapNeeded = false;
        }
      }
      if (isSwapNeeded) {
        break;
      }
    }
    return this._array;
  }
}
