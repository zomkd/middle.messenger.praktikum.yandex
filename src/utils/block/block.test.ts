import { Block } from "./block";
import { expect } from 'chai';
import * as util from 'util';


class TestBlock extends Block<{test: number}> {
    render() {
        return document.createDocumentFragment();
    }
}

describe('Block', () => {
    it('should wrap props in Proxy', () => {
        const props = {
            test: 123,
        };

        const testBlock = new TestBlock(props);

        expect(util.types.isProxy(testBlock.props)).to.be.true;
    });
})
