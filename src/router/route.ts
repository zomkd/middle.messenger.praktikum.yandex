import { Block } from 'src/utils/block/block';
import { isEqual } from './helpers';

function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`root not found by selector "${query}"`);
  }

  root.innerHTML = '';

  root.append(block.getContent()!);

  return root;
}

export class Route {
  private _pathname: string;
  private _blockClass: typeof Block;
  private _block: InstanceType<typeof Block> | null;
  private _props: string;

  constructor(pathname: string, view: typeof Block, props: string) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.render();
    }
  }

  leave() {
    this._block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass('div', {});

      render(this._props, this._block!);
      return;
    }
  }
}
