import { expect } from 'chai';
import sinon from 'sinon';
import Router from './router';

describe('test router', () => {
  const originalForward = window.history.forward;
  const originalBack = window.history.back;

  beforeEach(() => {
    Router.reset();
    window.history.forward = sinon.fake();
    window.history.back = sinon.fake();
  });

  after(() => {
    window.history.forward = originalForward;
    window.history.back = originalBack;
  });

  it('should call forward router', () => {
    Router.forward();

    expect((window.history.forward as any).callCount).to.eq(1);
  });
  it('should call router back', () => {
    Router.back();

    expect((window.history.back as any).callCount).to.eq(1);
  });
});
