import { IElementCallback } from './IElementCallback';

export interface IAsyncArray<TElement> {
  map<TResult>(callback: IElementCallback<TElement, TResult>): Promise<TResult[]>;

  forEach(callback: IElementCallback<TElement, void>): Promise<void>;

  filter(callback: IElementCallback<TElement, boolean>): Promise<TElement[]>;

  sort(callback: (left: TElement, right: TElement) => Promise<number>): Promise<TElement[]>;
}
