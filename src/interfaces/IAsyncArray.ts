import { IElementCallback } from './IElementCallback';

export interface IAsyncArray<TElement> {
  map<TResult>(callback: IElementCallback<TElement, TResult>): Promise<TResult[]>;

  forEach(callback: IElementCallback<TElement, void>): Promise<void>;

  sort(callback: (left: TElement, right: TElement) => Promise<number>): Promise<TElement[]>;
}
