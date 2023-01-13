import {  BaseLink as Link } from "./link-mixin";
import { expect } from "chai";
import sinon from "sinon";

describe("Link", () => {
    it("should render component", () => {
      new Link({ content: "Click me", to: "/" });
    });
  
    let routerMock: any;
  
    beforeEach(() => {
      routerMock = {
        go: sinon.fake(),
      };
    });
  
    it("should call Router.go on click", () => {
      const instance = new Link({
        content: "Click me",
        to: "/abc",
        router: routerMock as any,
      });
  
      const element = instance.element!;
      element?.click();
  
      expect(routerMock.go.callCount).to.eq(1);
    });
  
    it("should call Router.go on click with path", () => {
      const to = "/abc";
      const instance = new Link({
        content: "Click me",
        to,
        router: routerMock as any,
      });
      const element = instance.element;
      element?.click();
  
      expect(routerMock.go.firstArg).to.eq(to);
    });
  });
